'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    const isDark = (resolvedTheme || theme) === 'dark'
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full border border-border bg-white/60 dark:bg-card/60 hover:border-accent text-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 shadow-sm flex items-center justify-center"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Moon className="h-4 w-4 text-current dark:hidden" strokeWidth={2} />
      <Sun className="h-4 w-4 text-current hidden dark:block" strokeWidth={2} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
