'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n'
import { Languages } from 'lucide-react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'am' : 'en'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-gold text-sm font-medium text-charcoal hover:text-gold transition-colors"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      <span>{locale === 'en' ? 'አማርኛ' : 'English'}</span>
    </button>
  )
}
