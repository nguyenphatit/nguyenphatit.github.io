"use client";

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} className="bg-light-secondary text-light dark:bg-dark dark:text-dark-secondary" onChange={e => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeChanger
