'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { serviceCategories, type ServiceCategory } from '@/data/services'
import { cn } from '@/lib/utils'

interface ServiceFiltersProps {
  onCategoryChange?: (category: ServiceCategory | 'all') => void
}

export default function ServiceFilters({ onCategoryChange }: ServiceFiltersProps) {
  const t = useTranslations('services')
  const locale = useLocale() as 'en' | 'am'
  const [active, setActive] = useState<ServiceCategory | 'all'>('all')

  const handleSelect = (cat: ServiceCategory | 'all') => {
    setActive(cat)
    onCategoryChange?.(cat)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => handleSelect('all')}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-colors',
          active === 'all'
            ? 'bg-gold text-white'
            : 'bg-card border border-border text-charcoal hover:border-gold hover:text-gold'
        )}
      >
        {t('all_categories')}
      </button>
      {serviceCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleSelect(cat.id)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            active === cat.id
              ? 'bg-gold text-white'
              : 'bg-card border border-border text-charcoal hover:border-gold hover:text-gold'
          )}
        >
          {locale === 'am' ? cat.label.am : cat.label.en}
        </button>
      ))}
    </div>
  )
}
