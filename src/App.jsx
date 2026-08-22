import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import PagePlaceholder from './components/PagePlaceholder.jsx'
import usePresentationMode from './hooks/usePresentationMode.js'
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import SkillsExperiencePage from './pages/SkillsExperiencePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LinksPage from './pages/LinksPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import WelcomePortal from './pages/WelcomePortal.jsx'
import { publicViewIds } from './data/navigation.js'

const placeholderViews = {
}

/** Coordinates shared public-view state without adding public route paths. */
function App() {
  const [activeView, setActiveView] = useState('welcome')
  const [secretView, setSecretView] = useState(() => window.location.hash === '#/login' ? 'login' : null)
  const { presentationMode, setPresentationMode } = usePresentationMode()

  useEffect(() => {
    function syncSecretView() {
      setSecretView(window.location.hash === '#/login' ? 'login' : null)
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

  function navigateTo(requestedView) {
    const nextView = publicViewIds.has(requestedView) ? requestedView : 'welcome'
    setActiveView(nextView)

    window.requestAnimationFrame(() => {
      document.getElementById('view-heading')?.focus()
    })
  }

  function renderActiveView() {
    if (activeView === 'welcome') {
      return (
        <WelcomePortal
          onEnter={() => navigateTo('home')}
          presentationMode={presentationMode}
          setPresentationMode={setPresentationMode}
        />
      )
    }

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

    const view = placeholderViews[activeView] ?? placeholderViews.about

    return <PagePlaceholder {...view} />
  }

  return (
    <MainLayout
      activeView={activeView}
      onNavigate={navigateTo}
      presentationMode={presentationMode}
    >
      {renderActiveView()}
    </MainLayout>
  )
}

export default App
