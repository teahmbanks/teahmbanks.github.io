/** Keeps unfinished destinations usable while their rubric feature is pending. */
function PagePlaceholder({ description, eyebrow, title }) {
  return (
    <section className="page-panel" aria-labelledby="view-heading">
      <p className="page-panel__eyebrow">{eyebrow}</p>
      <h1 id="view-heading" tabIndex="-1">
        {title}
      </h1>
      <p className="page-panel__lead">{description}</p>
      <p className="page-panel__notice" role="status">
        This section is part of the approved site structure and will be completed
        in its dedicated feature phase.
      </p>
    </section>
  )
}

export default PagePlaceholder
