import { presentationModes } from '../hooks/usePresentationMode.js'

const modeDescriptions = {
  simple: 'Clear, calm, and focused on the essentials.',
  corporate: 'Structured, polished, and recruiter-friendly.',
  dramatic: 'Theater-inspired, expressive, and still fully accessible.',
}

/** Provides the shared presentation choice that precedes the full Home feature. */
function WelcomePortal({ onEnter, presentationMode, setPresentationMode }) {
  return (
    <section className="welcome-portal" aria-labelledby="view-heading">
      <p className="page-panel__eyebrow">Choose your experience</p>
      <h1 id="view-heading" tabIndex="-1">
        Welcome to the portal
      </h1>
      <p className="page-panel__lead">
        Every path contains the same information and functionality. Choose the
        presentation that feels right for you.
      </p>

      <div className="mode-grid" aria-label="Presentation choices">
        {presentationModes.map((mode) => (
          <button
            aria-pressed={presentationMode === mode}
            className="mode-card"
            key={mode}
            onClick={() => {
              setPresentationMode(mode)
              onEnter()
            }}
            type="button"
          >
            <span className="mode-card__name">{mode}</span>
            <span>{modeDescriptions[mode]}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default WelcomePortal
