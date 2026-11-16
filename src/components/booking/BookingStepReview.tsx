'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ChevronLeft } from 'lucide-react'
import { format } from 'date-fns'
import { stylists } from '@/data/stylists'
import { formatPriceSimple, formatDuration } from '@/lib/utils'
import { generateBookingId } from '@/lib/booking'
import type { BookingState } from './BookingStepper'

interface Props {
  bookingState: BookingState
  onConfirm: () => void
  onBack: () => void
  updateBooking: (updates: Partial<BookingState>) => void
}

export default function BookingStepReview({ bookingState, onConfirm, onBack, updateBooking }: Props) {
  const t = useTranslations('booking.step_review')
  const locale = useLocale() as 'en' | 'am'
  const [submitting, setSubmitting] = useState(false)
  const { selectedServices, selectedStylistId, selectedDate, selectedTime, clientName, clientPhone, clientEmail, notes } = bookingState

  const stylist = stylists.find((s) => s.id === selectedStylistId)
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0)
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0)

  const handleConfirm = async () => {
    setSubmitting(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))
    updateBooking({ bookingRef: generateBookingId() })
    setSubmitting(false)
    onConfirm()
  }

  const rows = [
    { label: t('service_label'), value: selectedServices.map((s) => locale === 'am' ? s.name.am : s.name.en).join(', ') },
    { label: t('stylist_label'), value: stylist ? (locale === 'am' ? stylist.nameAm : stylist.name) : 'Any Available' },
    { label: t('date_label'), value: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : '—' },
    { label: t('time_label'), value: selectedTime ?? '—' },
    { label: t('duration_label'), value: formatDuration(totalDuration) },
    { label: t('total_label'), value: formatPriceSimple(totalPrice) },
    { label: t('client_label'), value: `${clientName} · ${clientPhone}${clientEmail ? ` · ${clientEmail}` : ''}` },
    ...(notes ? [{ label: t('notes_label'), value: notes }] : []),
  ]

  return (
    <div>
      <h2 className="text-2xl font-serif text-charcoal mb-2">{t('title')}</h2>
      <p className="text-muted text-sm mb-6">{t('subtitle')}</p>

      <div className="card-salon divide-y divide-border mb-6">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4">
            <span className="text-muted text-sm w-28 flex-shrink-0">{row.label}</span>
            <span className="text-charcoal font-medium">{row.value}</span>
          </div>
        ))}
      </div>

      <p className="text-muted text-xs mb-6">{t('terms')}</p>

      <div className="flex gap-3">
        <button onClick={onBack} className="flex items-center gap-2 px-6 py-4 btn-outline-gold rounded-full">
          <ChevronLeft className="h-4 w-4" /> {t('back')}
        </button>
        <button
          onClick={handleConfirm}
          disabled={submitting}
          className="flex-1 px-6 py-4 btn-gold rounded-full disabled:opacity-70"
        >
          {submitting ? t('submitting') : t('confirm')}
        </button>
      </div>
    </div>
  )
}
