import { useState } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import PagePlaceholder from './components/PagePlaceholder.jsx'
import usePresentationMode from './hooks/usePresentationMode.js'
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import SkillsExperiencePage from './pages/SkillsExperiencePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LinksPage from './pages/LinksPage.jsx'
import WelcomePortal from './pages/WelcomePortal.jsx'
import { publicViewIds } from './data/navigation.js'

const placeholderViews = {
  contact: {
    eyebrow: 'Connect',
    title: 'Contact',
    description: 'LinkedIn access and the secure Supabase-backed message form will be available here.',
  },
}

/** Coordinates shared public-view state without adding public route paths. */
function App() {
  const [activeView, setActiveView] = useState('welcome')
  const { presentationMode, setPresentationMode } = usePresentationMode()

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
