import { useEffect, useRef, useState } from 'react'
import { deleteContactMessage, getAdminSession, getContactMessages, signOutAdmin } from '../lib/messageAdminService.js'
import { isSupabaseConfigured } from '../lib/supabaseClient.js'

function formatDate(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? 'Date unavailable' : date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
}

function MessageModal({ message, onClose }) {
  const closeButtonRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return

      const controls = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') ?? []
      if (controls.length === 0) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="message-modal__backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section aria-labelledby="message-modal-title" aria-modal="true" className="message-modal" ref={modalRef} role="dialog">
        <button aria-label="Close message" className="message-modal__close" onClick={onClose} ref={closeButtonRef} type="button">×</button>
        <p className="page-panel__eyebrow">Message from {message.name}</p>
        <h2 id="message-modal-title">Full message</h2>
        <dl className="message-modal__details">
          <div><dt>Email</dt><dd><a href={`mailto:${message.email}`}>{message.email}</a></dd></div>
          <div><dt>Received</dt><dd>{formatDate(message.created_at)}</dd></div>
        </dl>
        <p className="message-modal__body">{message.message}</p>
      </section>
    </div>
  )
}

/** Protects and manages the private contact-message inbox. */
function BackOfficePage({ onRequireLogin }) {
  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState('checking')
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [confirmingId, setConfirmingId] = useState(null)
  const [feedback, setFeedback] = useState('')
  const lastViewTrigger = useRef(null)

  useEffect(() => {
    let active = true
    async function load() {
      if (!isSupabaseConfigured) {
        onRequireLogin()
        return
      }

      try {
        const session = await getAdminSession()
        if (!session) { onRequireLogin(); return }
        const nextMessages = await getContactMessages()
        if (active) { setMessages(nextMessages); setStatus('ready') }
      } catch {
        if (active) setStatus('error')
      }
    }
    load()
    return () => { active = false }
  }, [onRequireLogin])

  function openMessage(message, event) {
    lastViewTrigger.current = event.currentTarget
    setSelectedMessage(message)
  }

  function closeMessage() {
    setSelectedMessage(null)
    window.requestAnimationFrame(() => lastViewTrigger.current?.focus())
  }

  async function removeMessage(id) {
    setFeedback('')
    try {
      await deleteContactMessage(id)
      setMessages((current) => current.filter((message) => message.id !== id))
      setConfirmingId(null)
      setFeedback('Message deleted.')
    } catch {
      setFeedback('The message could not be deleted. Please try again.')
    }
  }

  async function logout() {
    setFeedback('')
    try {
      await signOutAdmin()
      setMessages([])
      setSelectedMessage(null)
      onRequireLogin()
    } catch {
      setFeedback('Sign out could not be completed. Please try again.')
    }
  }

  return (
    <main className="back-office" id="main-content">
      <header className="back-office__header">
        <div><p className="page-panel__eyebrow">Private workspace</p><h1 id="view-heading" tabIndex="-1">Contact messages</h1></div>
        <button onClick={logout} type="button">Sign out</button>
      </header>

      {status === 'checking' ? <p role="status">Checking your secure session…</p> : null}
      {status === 'error' ? <p className="form-feedback form-feedback--error" role="alert">The message list could not be loaded. Please refresh or sign in again.</p> : null}
      {status === 'ready' && messages.length === 0 ? <p className="back-office__empty" role="status">No contact messages yet.</p> : null}
      {feedback ? <p className="form-feedback" role="status">{feedback}</p> : null}

      {status === 'ready' && messages.length > 0 ? (
        <div className="message-table-wrap">
          <table className="message-table">
            <thead><tr><th scope="col">Name</th><th scope="col">Email</th><th scope="col">Date</th><th scope="col">Actions</th></tr></thead>
            <tbody>{messages.map((message) => (
              <tr key={message.id}>
                <td data-label="Name">{message.name}</td>
                <td data-label="Email"><a href={`mailto:${message.email}`}>{message.email}</a></td>
                <td data-label="Date">{formatDate(message.created_at)}</td>
                <td data-label="Actions" className="message-table__actions">
                  <button onClick={(event) => openMessage(message, event)} type="button">View</button>
                  {confirmingId === message.id ? (
                    <><button className="button-danger" onClick={() => removeMessage(message.id)} type="button">Confirm delete</button><button onClick={() => setConfirmingId(null)} type="button">Cancel</button></>
                  ) : <button className="button-danger" onClick={() => setConfirmingId(message.id)} type="button">Delete</button>}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      ) : null}

      {selectedMessage ? <MessageModal message={selectedMessage} onClose={closeMessage} /> : null}
    </main>
  )
}

export default BackOfficePage
