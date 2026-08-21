/** Provides public contact paths without inventing unverified personal details. */
function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Accessible to All</p>
          <p className="site-footer__statement">
            One portfolio. Three presentation styles. Equal access.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="site-footer__links">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('contact')
            }}
          >
            Contact
          </a>
          <a
            href="https://github.com/teahmbanks"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        </nav>

        <p className="site-footer__copyright">
          &copy; {currentYear} Teah Banks. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
