import { useState } from 'react'
import { CONTACT_LIMITS, contactIntroduction, linkedInUrl } from '../data/contactData.js'
import { createContactMessage } from '../lib/contactService.js'
import { isSupabaseConfigured } from '../lib/supabaseClient.js'

const INITIAL_FORM = { name: '', email: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  const trimmed = {
    name: values.name.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
  }

  if (!trimmed.name) errors.name = 'Please enter your name.'
  if (!trimmed.email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(trimmed.email)) errors.email = 'Please enter a valid email address.'
  if (!trimmed.message) errors.message = 'Please enter a message.'

  return { errors, trimmed }
}

/** Collects a validated public message while preserving a safe offline fallback. */
function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  async function submitForm(event) {
    event.preventDefault()
    if (status === 'submitting' || !isSupabaseConfigured) return

    const result = validate(form)
    setErrors(result.errors)
    if (Object.keys(result.errors).length > 0) {
      setStatus('invalid')
      return
    }

    setStatus('submitting')
    try {
      await createContactMessage(result.trimmed)
      setForm(INITIAL_FORM)
      setErrors({})
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="view-heading">
        <p className="page-panel__eyebrow">{contactIntroduction.eyebrow}</p>
        <h1 id="view-heading" tabIndex="-1">{contactIntroduction.title}</h1>
        <p className="page-panel__lead">{contactIntroduction.summary}</p>
        <a className="contact-linkedin" href={linkedInUrl} rel="noreferrer" target="_blank">
          Connect on LinkedIn <span aria-hidden="true">↗</span>
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </section>

      <section className="contact-section" aria-labelledby="contact-form-heading">
        <div>
          <p className="page-panel__eyebrow">Send a message</p>
          <h2 id="contact-form-heading">Start a conversation</h2>
          {!isSupabaseConfigured ? (
            <p className="contact-notice" role="status">
              The message form is temporarily unavailable. Please connect with me through LinkedIn instead.
            </p>
          ) : null}
        </div>

        <form className="contact-form" noValidate onSubmit={submitForm}>
          <div className="form-field">
            <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
            <input
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              aria-invalid={Boolean(errors.name)}
              autoComplete="name"
              disabled={!isSupabaseConfigured || status === 'submitting'}
              id="contact-name"
              maxLength={CONTACT_LIMITS.name}
              name="name"
              onChange={updateField}
              required
              value={form.name}
            />
            {errors.name ? <p className="form-error" id="contact-name-error">{errors.name}</p> : null}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
            <input
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              disabled={!isSupabaseConfigured || status === 'submitting'}
              id="contact-email"
              inputMode="email"
              maxLength={CONTACT_LIMITS.email}
              name="email"
              onChange={updateField}
              required
              type="email"
              value={form.email}
            />
            {errors.email ? <p className="form-error" id="contact-email-error">{errors.email}</p> : null}
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
            <textarea
              aria-describedby={errors.message ? 'contact-message-help contact-message-error' : 'contact-message-help'}
              aria-invalid={Boolean(errors.message)}
              disabled={!isSupabaseConfigured || status === 'submitting'}
              id="contact-message"
              maxLength={CONTACT_LIMITS.message}
              name="message"
              onChange={updateField}
              required
              rows="7"
              value={form.message}
            />
            <p className="form-help" id="contact-message-help">
              {form.message.length.toLocaleString()} / {CONTACT_LIMITS.message.toLocaleString()} characters
            </p>
            {errors.message ? <p className="form-error" id="contact-message-error">{errors.message}</p> : null}
          </div>

          <button disabled={!isSupabaseConfigured || status === 'submitting'} type="submit">
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' ? <p className="form-feedback form-feedback--success" role="status">Your message was sent. Thank you!</p> : null}
          {status === 'invalid' ? <p className="form-feedback form-feedback--error" role="alert">Please correct the highlighted fields.</p> : null}
          {status === 'error' ? <p className="form-feedback form-feedback--error" role="alert">Your message could not be sent. Please keep your text and try again, or use LinkedIn.</p> : null}
        </form>
      </section>
    </div>
  )
}

export default ContactPage
