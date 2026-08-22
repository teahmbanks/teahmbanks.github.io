import NavigationIcon from './NavigationIcon.jsx'
import { publicNavigation } from '../data/navigation.js'

function NavigationList({ activeView, mobile = false, onNavigate }) {
  return (
    <ul className={mobile ? 'mobile-navigation__list' : 'desktop-navigation__list'}>
      {publicNavigation.map((item) => (
        <li key={item.id}>
          <a
            aria-current={activeView === item.id ? 'page' : undefined}
            className={mobile ? 'mobile-navigation__link' : 'desktop-navigation__link'}
            href="/"
            onClick={(event) => {
              event.preventDefault()
              onNavigate(item.id)
            }}
          >
            {mobile && <NavigationIcon name={item.icon} />}
            <span>{mobile ? item.shortLabel : item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

/** Provides consistent public branding and navigation at every viewport. */
function Header({ activeView, onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="brand-link"
          href="/"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('home')
          }}
        >
          <img
            alt="Teah Banks dragonfly logo"
            className="brand-link__logo"
            height="56"
            src="/images/dragonfly-logo.png"
            width="56"
          />
          <span className="brand-link__text">
            <strong>Teah Banks</strong>
            <span>Bringing access to everyone</span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="desktop-navigation">
          <NavigationList activeView={activeView} onNavigate={onNavigate} />
        </nav>
      </div>

      <nav aria-label="Mobile primary navigation" className="mobile-navigation">
        <NavigationList activeView={activeView} mobile onNavigate={onNavigate} />
      </nav>
    </header>
  )
}

export default Header
