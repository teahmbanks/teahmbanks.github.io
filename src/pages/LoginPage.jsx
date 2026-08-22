import { useRef, useState } from 'react'
import { signInAdmin } from '../lib/authService.js'
import { isSupabaseConfigured } from '../lib/supabaseClient.js'

const INITIAL_FORM = { email: '', password: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  const email = values.email.trim()

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'
  if (!values.password) errors.password = 'Please enter your password.'

  return { email, errors }
}

/** Provides the private administrator entry point without exposing it publicly. */
function LoginPage({ onCancel, onSuccess }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  async function submitLogin(event) {
    event.preventDefault()
    if (!isSupabaseConfigured || status === 'submitting') return

    const result = validate(form)
    setErrors(result.errors)
    if (Object.keys(result.errors).length > 0) {
      setStatus('invalid')
      window.requestAnimationFrame(() => {
        if (result.errors.email) emailRef.current?.focus()
        else if (result.errors.password) passwordRef.current?.focus()
      })
      return
    }

    setStatus('submitting')
    try {
      await signInAdmin(result.email, form.password)
      onSuccess()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main className="login-shell" id="main-content">
        <section className="login-card" aria-labelledby="view-heading">
        <p className="page-panel__eyebrow">Private access</p>
        <h1 id="view-heading" tabIndex="-1">Administrator sign in</h1>
        <p className="login-card__intro">Sign in to review portfolio messages.</p>

        {!isSupabaseConfigured ? (
          <p className="contact-notice" role="status">
            Sign-in is unavailable until the secure Supabase connection is configured.
          </p>
        ) : null}

        <form className="login-form" noValidate onSubmit={submitLogin}>
          <div className="form-field">
            <label htmlFor="login-email">Email</label>
            <input
              aria-describedby={errors.email ? 'login-email-error' : undefined}
              aria-invalid={Boolean(errors.email)}
              autoComplete="username"
              disabled={!isSupabaseConfigured || status === 'submitting'}
              id="login-email"
              maxLength={254}
              name="email"
              onChange={updateField}
              ref={emailRef}
              required
              type="email"
              value={form.email}
            />
            {errors.email ? <p className="form-error" id="login-email-error">{errors.email}</p> : null}
          </div>

          <div className="form-field">
            <label htmlFor="login-password">Password</label>
            <input
              aria-describedby={errors.password ? 'login-password-error' : undefined}
              aria-invalid={Boolean(errors.password)}
              autoComplete="current-password"
              disabled={!isSupabaseConfigured || status === 'submitting'}
              id="login-password"
              name="password"
              onChange={updateField}
              ref={passwordRef}
              required
              type="password"
              value={form.password}
            />
            {errors.password ? <p className="form-error" id="login-password-error">{errors.password}</p> : null}
          </div>

          <button disabled={!isSupabaseConfigured || status === 'submitting'} type="submit">
            {status === 'submitting' ? 'Signing in…' : 'Sign in'}
          </button>

          {status === 'invalid' ? <p className="form-feedback form-feedback--error" role="alert">Please correct the highlighted fields.</p> : null}
          {status === 'error' ? <p className="form-feedback form-feedback--error" role="alert">The email or password was not accepted. Please try again.</p> : null}
        </form>

        <button className="login-card__return" onClick={onCancel} type="button">Return to portfolio</button>
        </section>
      </main>
    </>
  )
}

export default LoginPage
