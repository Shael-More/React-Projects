import React from 'react'
import useLocalStorage from './useLocalStorage'
import "./theme.css"

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage('theme', "dark")

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
 
  return (
    <div data-theme={theme} className='themeToggle'>
        <h1>Hello there...</h1>
        <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeToggle