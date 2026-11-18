'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { type GalleryItem } from '@/data/gallery'

interface GalleryLightboxProps {
  items: GalleryItem[]
  initialIndex: number
  onClose: () => void
}

export default function GalleryLightbox({ items, initialIndex, onClose }: GalleryLightboxProps) {
  const t = useTranslations('gallery')
  const locale = useLocale() as 'en' | 'am'
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const prev = useCallback(() => setCurrentIndex((i) => (i > 0 ? i - 1 : items.length - 1)), [items.length])
  const next = useCallback(() => setCurrentIndex((i) => (i < items.length - 1 ? i + 1 : 0)), [items.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const item = items[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white"
        onClick={onClose}
        aria-label={t('lightbox_close')}
      >
        <X className="h-8 w-8" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 p-3 text-white/70 hover:text-white"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label={t('lightbox_prev')}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      {/* Image container */}
      <div
        className="max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-[#13262C] flex flex-col items-center justify-center relative shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={locale === 'am' ? item.altAm : item.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-t-xl"
        />
        <div className="w-full bg-[#0C1A1F] p-4 text-center text-white border-t border-white/10 flex items-center justify-between">
          <p className="font-serif text-lg">{locale === 'am' ? item.altAm : item.alt}</p>
          <span className="text-xs text-accent font-medium bg-accent/15 px-2.5 py-1 rounded-full border border-accent/30">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 p-3 text-white/70 hover:text-white"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label={t('lightbox_next')}
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  )
}
