import { useState, useEffect } from 'react'
import Home from './pages/Home.jsx'
import Story from './pages/Story.jsx'
import Gift from './pages/Gift.jsx'

export default function App() {
  // on lit l'URL pour savoir où on est (#/story par ex)
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // si l'URL est "#/story" -> on montre la page souvenirs
  if (route === '#/story') {
    return <Story />
  }

  // si l'URL est "#/gift" -> on montre la page cadeau
  if (route === '#/gift') {
    return <Gift />
  }

  // sinon -> accueil avec compte à rebours
  return <Home />
}
