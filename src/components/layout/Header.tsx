'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Link as IntlLink } from '@/i18n'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/services', label: t('services') },
    { href: '/team', label: t('team') },
    { href: '/gallery', label: t('gallery') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--header-bg)] backdrop-blur-[10px] border-b border-border transition-colors duration-200">
      <div className="container-salon">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <IntlLink href="/" className="flex items-center gap-2" aria-label="Lux Salon Home">
            <Logo className="h-9 w-auto" />
          </IntlLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <IntlLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </IntlLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <IntlLink
              href="/booking"
              className="hidden md:inline-flex items-center px-5 py-2.5 btn-accent rounded-full text-sm font-semibold shadow-sm hover:shadow"
            >
              {t('booking')}
            </IntlLink>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t('close') : t('open')}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-lg">
          <nav className="container-salon py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <IntlLink
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </IntlLink>
            ))}
            <IntlLink
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-3 btn-accent rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              {t('booking')}
            </IntlLink>
          </nav>
        </div>
      )}
    </header>
  )
}
