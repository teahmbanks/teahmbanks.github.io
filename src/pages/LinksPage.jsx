import { linksIntroduction, resourceLinks } from '../data/linksData.js'

/** Provides verified external resources for Teah's work and professional story. */
function LinksPage() {
  return (
    <div className="links-page">
      <section className="links-hero" aria-labelledby="view-heading">
        <p className="page-panel__eyebrow">{linksIntroduction.eyebrow}</p>
        <h1 id="view-heading" tabIndex="-1">{linksIntroduction.title}</h1>
        <p className="page-panel__lead">{linksIntroduction.summary}</p>
      </section>

      <section className="links-section" aria-labelledby="resources-heading">
        <p className="page-panel__eyebrow">Verified resources</p>
        <h2 id="resources-heading">Professional links</h2>
        <ul className="resource-grid">
          {resourceLinks.map((resource) => (
            <li key={resource.id}>
              <article className="resource-card">
                <img
                  alt={resource.image.alt}
                  height="192"
                  loading="lazy"
                  src={resource.image.src}
                  width="192"
                />
                <div className="resource-card__content">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.href} rel="noreferrer" target="_blank">
                    Visit {resource.title} <span aria-hidden="true">↗</span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default LinksPage
