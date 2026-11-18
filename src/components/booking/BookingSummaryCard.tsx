import { useTranslations, useLocale } from 'next-intl'
import { formatPriceSimple, formatDuration } from '@/lib/utils'
import { format } from 'date-fns'
import { stylists } from '@/data/stylists'
import type { BookingState } from './BookingStepper'
import { Clock, User, Calendar } from 'lucide-react'

interface Props {
  bookingState: BookingState
}

export default function BookingSummaryCard({ bookingState }: Props) {
  const t = useTranslations('booking.summary')
  const locale = useLocale() as 'en' | 'am'
  const { selectedServices, selectedStylistId, selectedDate, selectedTime } = bookingState

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0)
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0)
  const stylist = stylists.find((s) => s.id === selectedStylistId)

  if (selectedServices.length === 0) return null

  return (
    <div className="card-salon p-5 sticky top-24">
      <h3 className="font-serif text-lg text-foreground mb-4">{t('title')}</h3>

      {/* Services */}
      {selectedServices.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-muted uppercase tracking-wider mb-2">{t('services')}</p>
          <div className="space-y-2">
            {selectedServices.map((s) => (
              <div key={s.id} className="flex justify-between text-sm">
                <span className="text-foreground">{locale === 'am' ? s.name.am : s.name.en}</span>
                <span className="text-accent font-medium">{formatPriceSimple(s.price)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stylist */}
      {stylist && (
        <div className="flex items-center gap-2 text-sm text-foreground mb-2">
          <User className="h-4 w-4 text-foreground/70" />
          <span>{locale === 'am' ? stylist.nameAm : stylist.name}</span>
        </div>
      )}

      {/* Date & time */}
      {selectedDate && (
        <div className="flex items-center gap-2 text-sm text-foreground mb-2">
          <Calendar className="h-4 w-4 text-foreground/70" />
          <span>{format(selectedDate, 'MMM d, yyyy')}{selectedTime ? ` at ${selectedTime}` : ''}</span>
        </div>
      )}

      {/* Duration */}
      {totalDuration > 0 && (
        <div className="flex items-center gap-2 text-sm text-foreground mb-4">
          <Clock className="h-4 w-4 text-foreground/70" />
          <span>{t('duration')}: {formatDuration(totalDuration)}</span>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-border pt-4 flex justify-between items-center">
        <span className="font-medium text-foreground">{t('total')}</span>
        <span className="font-bold text-accent text-lg">{formatPriceSimple(totalPrice)}</span>
      </div>
    </div>
  )
}
