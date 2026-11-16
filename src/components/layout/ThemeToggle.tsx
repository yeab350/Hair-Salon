'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full border border-border text-foreground/60 transition-colors"
        aria-label="Toggle theme"
        type="button"
      >
        <span className="block h-4 w-4" />
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-full border border-border hover:border-gold text-foreground hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold/40"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-gold animate-fade-in" />
      ) : (
        <Moon className="h-4 w-4 text-charcoal animate-fade-in" />
      )}
    </button>
  )
}
