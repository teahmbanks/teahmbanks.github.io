import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import SkillsExperiencePage from './pages/SkillsExperiencePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LinksPage from './pages/LinksPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import BackOfficePage from './pages/BackOfficePage.jsx'
import { publicViewIds } from './data/navigation.js'

/** Coordinates shared public-view state without adding public route paths. */
function App() {
  const [activeView, setActiveView] = useState('home')
  const [secretView, setSecretView] = useState(() => window.location.hash === '#/login' ? 'login' : window.location.hash === '#/backoffice' ? 'backoffice' : null)

  useEffect(() => {
    document.documentElement.dataset.presentationMode = 'dramatic'
  }, [])

  useEffect(() => {
    function syncSecretView() {
      setSecretView(window.location.hash === '#/login' ? 'login' : window.location.hash === '#/backoffice' ? 'backoffice' : null)
    }

    window.addEventListener('hashchange', syncSecretView)
    return () => window.removeEventListener('hashchange', syncSecretView)
  }, [])

  if (secretView === 'login') {
    return (
      <LoginPage
        onCancel={() => { window.location.hash = ''; setSecretView(null) }}
        onSuccess={() => { window.location.hash = '#/backoffice' }}
      />
    )
  }

  if (secretView === 'backoffice') {
    return <BackOfficePage onRequireLogin={() => { window.location.hash = '#/login' }} />
  }

  function navigateTo(requestedView) {
    const nextView = publicViewIds.has(requestedView) ? requestedView : 'home'
    setActiveView(nextView)

    window.requestAnimationFrame(() => {
      document.getElementById('view-heading')?.focus()
    })
  }

  function renderActiveView() {
    if (activeView === 'home') {
      return <HomePage />
    }

    if (activeView === 'portfolio') {
      return <PortfolioPage />
    }

    if (activeView === 'skills') {
      return <SkillsExperiencePage />
    }

    if (activeView === 'about') {
      return <AboutPage />
    }

    if (activeView === 'links') {
      return <LinksPage />
    }

    if (activeView === 'contact') {
      return <ContactPage />
    }

    return <HomePage />
  }

  return (
    <MainLayout
      activeView={activeView}
      onNavigate={navigateTo}
    >
      {renderActiveView()}
    </MainLayout>
  )
}

export default App
