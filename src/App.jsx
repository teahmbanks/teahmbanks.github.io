/**
 * Provides the accessible foundation shell while portfolio features are built.
 */
function App() {
  return (
    <main className="foundation-shell" id="main-content">
      <div className="foundation-shell__accent" aria-hidden="true" />
      <section className="foundation-shell__content" aria-labelledby="page-title">
        <p className="foundation-shell__eyebrow">Portfolio foundation</p>
        <h1 id="page-title">Accessible to All</h1>
        <p className="foundation-shell__lead">
          A professional portfolio designed to meet visitors where they are.
        </p>
        <p className="foundation-shell__status" role="status">
          The Welcome Portal and portfolio experiences are being built with
          accessibility at the center.
        </p>
      </section>
    </main>
  )
}

export default App
