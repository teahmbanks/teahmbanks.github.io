import { homeImages } from '../data/homeData.js'
import { aboutIntroduction, journeyStages, workingPrinciples } from '../data/aboutData.js'

/** Tells the verified story connecting theater, education, and programming. */
function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="view-heading">
        <div className="about-hero__content">
          <p className="page-panel__eyebrow">{aboutIntroduction.eyebrow}</p>
          <h1 id="view-heading" tabIndex="-1">{aboutIntroduction.title}</h1>
          <p className="page-panel__lead">{aboutIntroduction.summary}</p>
        </div>
        <img
          alt={homeImages.connectedStrengths.alt}
          className="about-hero__image"
          height="1024"
          src={homeImages.connectedStrengths.src}
          width="1536"
        />
      </section>

      <section className="about-section" aria-labelledby="journey-heading">
        <p className="page-panel__eyebrow">The through-line</p>
        <h2 id="journey-heading">One practice across three fields</h2>
        <ol className="journey-list">
          {journeyStages.map((stage) => (
            <li key={stage.id}>
              <p>{stage.label}</p>
              <h3>{stage.title}</h3>
              <span>{stage.description}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section about-section--principles" aria-labelledby="principles-heading">
        <div>
          <p className="page-panel__eyebrow">How I approach the work</p>
          <h2 id="principles-heading">Problem-solving principles</h2>
        </div>
        <ul className="principles-list">
          {workingPrinciples.map((principle) => (
            <li key={principle.id}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default AboutPage
