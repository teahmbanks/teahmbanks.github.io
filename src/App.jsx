import { useState } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import PagePlaceholder from './components/PagePlaceholder.jsx'
import usePresentationMode from './hooks/usePresentationMode.js'
import HomePage from './pages/HomePage.jsx'
import WelcomePortal from './pages/WelcomePortal.jsx'
import { publicViewIds } from './data/navigation.js'

const placeholderViews = {
  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Featured Projects',
    description: 'Interactive project stories, education, work experience, and a downloadable resume will live here.',
  },
  skills: {
    eyebrow: 'Experience',
    title: 'Skills and Experience',
    description: 'Technical knowledge, teaching practice, stage management, and transferable strengths will come together here.',
  },
  about: {
    eyebrow: 'Personal story',
    title: 'About Me',
    description: 'The journey through theater, education, and programming will be shared here.',
  },
  contact: {
    eyebrow: 'Connect',
    title: 'Contact',
    description: 'LinkedIn access and the secure Supabase-backed message form will be available here.',
  },
  links: {
    eyebrow: 'Resources',
    title: 'Links',
    description: 'Useful professional and technical resources will be organized here.',
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
