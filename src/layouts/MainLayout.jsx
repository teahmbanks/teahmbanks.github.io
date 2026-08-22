import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

/** Wraps every public view in the shared accessible application frame. */
function MainLayout({ activeView, children, onNavigate }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header
        activeView={activeView}
        onNavigate={onNavigate}
      />
      <main className="site-main" id="main-content" tabIndex="-1">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default MainLayout
