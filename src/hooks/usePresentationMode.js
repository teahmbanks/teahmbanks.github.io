import { useEffect, useState } from 'react'

const STORAGE_KEY = 'accessible-to-all:presentation-mode:v1'
const DEFAULT_MODE = 'simple'

export const presentationModes = ['simple', 'corporate', 'dramatic']

function isPresentationMode(value) {
  return presentationModes.includes(value)
}

function getInitialMode() {
  try {
    const storedMode = window.localStorage.getItem(STORAGE_KEY)
    return isPresentationMode(storedMode) ? storedMode : DEFAULT_MODE
  } catch {
    return DEFAULT_MODE
  }
}

/** Manages the presentation preference without making storage a requirement. */
function usePresentationMode() {
  const [presentationMode, setPresentationModeState] = useState(getInitialMode)

  useEffect(() => {
    document.documentElement.dataset.presentationMode = presentationMode
  }, [presentationMode])

  function setPresentationMode(nextMode) {
    if (!isPresentationMode(nextMode)) {
      return
    }

    setPresentationModeState(nextMode)

    try {
      window.localStorage.setItem(STORAGE_KEY, nextMode)
    } catch {
      // The current-session choice remains active when storage is unavailable.
    }
  }

  return { presentationMode, setPresentationMode }
}

export default usePresentationMode
