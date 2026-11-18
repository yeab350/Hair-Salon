'use client'

import { useTranslations, useLocale } from 'next-intl'
import { services, serviceCategories } from '@/data/services'
import { salonConfig } from '@/config/salon'
import { formatPriceSimple, formatDuration } from '@/lib/utils'
import { Plus, Minus, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BookingState } from './BookingStepper'
import type { Service } from '@/data/services'

interface Props {
  bookingState: BookingState
  updateBooking: (updates: Partial<BookingState>) => void
  onNext: () => void
}

export default function BookingStepService({ bookingState, updateBooking, onNext }: Props) {
  const t = useTranslations('booking.step_service')
  const locale = useLocale() as 'en' | 'am'
  const { selectedServices } = bookingState
  const maxServices = salonConfig.booking.maxServicesPerBooking

  const isSelected = (service: Service) => selectedServices.some((s) => s.id === service.id)

  const toggleService = (service: Service) => {
    if (isSelected(service)) {
      updateBooking({ selectedServices: selectedServices.filter((s) => s.id !== service.id) })
    } else if (selectedServices.length < maxServices) {
      updateBooking({ selectedServices: [...selectedServices, service] })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-serif text-foreground mb-2">{t('title')}</h2>
      <p className="text-muted text-sm mb-6">{t('subtitle')}</p>

      {serviceCategories.map((category) => {
        const catServices = services.filter((s) => s.category === category.id)
        return (
          <div key={category.id} className="mb-8">
            <h3 className="font-medium text-foreground mb-3 pb-2 border-b border-border">
              {locale === 'am' ? category.label.am : category.label.en}
            </h3>
            <div className="space-y-3">
              {catServices.map((service) => {
                const selected = isSelected(service)
                return (
                  <div
                    key={service.id}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors',
                      selected ? 'border-accent bg-accent/10' : 'border-border bg-card hover:border-accent/40'
                    )}
                    onClick={() => toggleService(service)}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">
                        {locale === 'am' ? service.name.am : service.name.en}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-accent font-semibold text-sm">{formatPriceSimple(service.price)}</span>
                        <span className="text-muted text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDuration(service.duration)}
                        </span>
                      </div>
                    </div>
                    <button
                      className={cn(
                        'flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0 transition-colors',
                        selected
                          ? 'bg-accent text-[rgb(var(--accent-foreground))]'
                          : 'bg-alternate text-muted hover:bg-accent hover:text-[rgb(var(--accent-foreground))]'
                      )}
                      aria-label={selected ? t('remove') : t('add')}
                    >
                      {selected ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      <button
        onClick={onNext}
        disabled={selectedServices.length === 0}
        className="w-full px-6 py-4 btn-accent rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t('continue')}
      </button>
    </div>
  )
}
