'use client'

import { useTranslations } from 'next-intl'
import { ChevronLeft } from 'lucide-react'
import Input from '@/components/ui/Input'
import type { BookingState } from './BookingStepper'

interface Props {
  bookingState: BookingState
  updateBooking: (updates: Partial<BookingState>) => void
  onNext: () => void
  onBack: () => void
}

export default function BookingStepDetails({ bookingState, updateBooking, onNext, onBack }: Props) {
  const t = useTranslations('booking.step_details')
  const { clientName, clientPhone, clientEmail, notes } = bookingState

  const isValid = clientName.trim() && clientPhone.trim()

  return (
    <div>
      <h2 className="text-2xl font-serif text-foreground mb-2">{t('title')}</h2>
      <p className="text-muted text-sm mb-6">{t('subtitle')}</p>

      <div className="space-y-5">
        <Input
          id="client-name"
          label={t('name_label')}
          placeholder={t('name_placeholder')}
          value={clientName}
          onChange={(e) => updateBooking({ clientName: e.target.value })}
          required
        />
        <Input
          id="client-phone"
          type="tel"
          label={t('phone_label')}
          placeholder={t('phone_placeholder')}
          value={clientPhone}
          onChange={(e) => updateBooking({ clientPhone: e.target.value })}
          required
        />
        <Input
          id="client-email"
          type="email"
          label={t('email_label')}
          placeholder={t('email_placeholder')}
          value={clientEmail}
          onChange={(e) => updateBooking({ clientEmail: e.target.value })}
        />
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1">
            {t('notes_label')}
          </label>
          <textarea
            id="notes"
            rows={3}
            placeholder={t('notes_placeholder')}
            value={notes}
            onChange={(e) => updateBooking({ notes: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button onClick={onBack} className="flex items-center gap-2 px-6 py-4 btn-outline-accent rounded-full font-semibold">
          <ChevronLeft className="h-4 w-4" /> {t('back')}
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className="flex-1 px-6 py-4 btn-accent rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('continue')}
        </button>
      </div>
    </div>
  )
}
