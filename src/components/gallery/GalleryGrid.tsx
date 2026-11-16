'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { galleryItems, galleryCategories, type GalleryCategory } from '@/data/gallery'
import { cn } from '@/lib/utils'
import GalleryLightbox from './GalleryLightbox'

export default function GalleryGrid() {
  const t = useTranslations('gallery')
  const locale = useLocale() as 'en' | 'am'
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory)

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            activeCategory === 'all' ? 'bg-gold text-white' : 'bg-card border border-border text-charcoal hover:border-gold hover:text-gold'
          )}
        >
          {t('all')}
        </button>
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeCategory === cat.id ? 'bg-gold text-white' : 'bg-card border border-border text-charcoal hover:border-gold hover:text-gold'
            )}
          >
            {locale === 'am' ? cat.labelAm : cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            className="relative aspect-square rounded-xl overflow-hidden bg-cream-dark cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setLightboxIndex(idx)}
          >
            <img
              src={item.src}
              alt={locale === 'am' ? item.altAm : item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xs font-medium bg-black/60 backdrop-blur-sm rounded-lg px-2.5 py-1.5 w-full truncate">
                {locale === 'am' ? item.altAm : item.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
