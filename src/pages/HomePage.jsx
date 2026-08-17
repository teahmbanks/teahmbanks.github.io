/** Temporary introduction panel; full content belongs to the Home feature. */
function HomePage() {
  return (
    <section className="page-panel" aria-labelledby="view-heading">
      <p className="page-panel__eyebrow">Introduction</p>
      <h1 id="view-heading" tabIndex="-1">
        Welcome
      </h1>
      <p className="page-panel__lead">
        This portfolio is designed to adapt its presentation while keeping every
        visitor connected to the same professional story.
      </p>
      <p className="page-panel__notice" role="status">
        The complete introduction and skills experience will be added in the Home
        feature phase.
      </p>
    </section>
  )
}

export default HomePage
