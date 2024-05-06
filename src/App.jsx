import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import WelcomePage from './pages/Welcome.jsx'
import ChallengesPage from './pages/Challenges.jsx'
import { useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext.jsx'

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
])

function App() {
  const [theme, setTheme] = useState('dark')
  function toggleTheme() {
    if (theme === 'light') {
      
      setTheme('dark')
      console.log('dark')
    } else {
     
      setTheme('light')
      console.log('light')
    }
  }
  const themeObj = {
    theme,
    toggleTheme,
  }
  return (
    <ThemeContext.Provider value={themeObj}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
