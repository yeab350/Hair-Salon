'use client'

import { useTranslations, useLocale } from 'next-intl'
import { stylists } from '@/data/stylists'
import { Star, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BookingState } from './BookingStepper'

interface Props {
  bookingState: BookingState
  updateBooking: (updates: Partial<BookingState>) => void
  onNext: () => void
  onBack: () => void
}

export default function BookingStepStylist({ bookingState, updateBooking, onNext, onBack }: Props) {
  const t = useTranslations('booking.step_stylist')
  const locale = useLocale() as 'en' | 'am'
  const { selectedStylistId, selectedServices } = bookingState
  const selectedServiceIds = selectedServices.map((s) => s.id)

  const availableStylists = stylists.filter((stylist) =>
    selectedServiceIds.some((id) => stylist.serviceIds.includes(id))
  )

  return (
    <div>
      <h2 className="text-2xl font-serif text-foreground mb-2">{t('title')}</h2>
      <p className="text-muted text-sm mb-6">{t('subtitle')}</p>

      <div className="space-y-4 mb-8">
        {/* Any stylist option */}
        <div
          className={cn(
            'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors',
            selectedStylistId === 'any' ? 'border-accent bg-accent/10' : 'border-border bg-card hover:border-accent/40'
          )}
          onClick={() => updateBooking({ selectedStylistId: 'any' })}
        >
          <div className="h-14 w-14 rounded-full bg-accent/15 text-accent border border-accent/30 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">✨</span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">{t('any_available')}</p>
            <p className="text-muted text-sm">{t('any_desc')}</p>
          </div>
          <div className={cn('h-5 w-5 rounded-full border-2 flex items-center justify-center',
            selectedStylistId === 'any' ? 'border-accent bg-accent' : 'border-muted'
          )}>
            {selectedStylistId === 'any' && <div className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-foreground))]" />}
          </div>
        </div>

        {availableStylists.map((stylist) => (
          <div
            key={stylist.id}
            className={cn(
              'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors',
              selectedStylistId === stylist.id ? 'border-accent bg-accent/10' : 'border-border bg-card hover:border-accent/40'
            )}
            onClick={() => updateBooking({ selectedStylistId: stylist.id })}
          >
            <div className="h-14 w-14 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0 text-accent font-serif text-xl font-bold">
              {stylist.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground">
                {locale === 'am' ? stylist.nameAm : stylist.name}
              </p>
              <p className="text-foreground/75 text-xs font-medium">{locale === 'am' ? stylist.roleAm : stylist.role}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                <span className="text-xs text-muted">{stylist.rating} · {t('experience', { years: stylist.yearsExperience })}</span>
              </div>
            </div>
            <div className={cn('h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
              selectedStylistId === stylist.id ? 'border-accent bg-accent' : 'border-muted'
            )}>
              {selectedStylistId === stylist.id && <div className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-foreground))]" />}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="flex items-center gap-2 px-6 py-4 btn-outline-accent rounded-full font-semibold">
          <ChevronLeft className="h-4 w-4" /> {t('back')}
        </button>
        <button
          onClick={onNext}
          disabled={!selectedStylistId}
          className="flex-1 px-6 py-4 btn-accent rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('continue')}
        </button>
      </div>
    </div>
  )
}
