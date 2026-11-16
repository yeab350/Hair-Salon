'use client'

import { useTranslations, useLocale } from 'next-intl'
import { type TimeSlot } from '@/lib/booking'
import { cn } from '@/lib/utils'
import { Sun, Sunset, Moon } from 'lucide-react'

interface TimeSlotPickerProps {
  slots: TimeSlot[]
  selectedTime: string | null
  timeFormat?: '12h' | '24h'
  onSelectTime: (time: string) => void
}

function formatSlotDisplay(time24: string, formatMode: '12h' | '24h' = '12h'): string {
  if (formatMode === '24h') return time24
  const [hStr, mStr] = time24.split(':')
  const h = parseInt(hStr, 10)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 || 12
  return `${h12}:${mStr} ${ampm}`
}

export default function TimeSlotPicker({
  slots,
  selectedTime,
  timeFormat = '12h',
  onSelectTime,
}: TimeSlotPickerProps) {
  const t = useTranslations('booking.step_datetime')
  const locale = useLocale() as 'en' | 'am'

  if (slots.length === 0) {
    return (
      <div className="card-salon py-10 px-6 text-center text-muted">
        <p className="text-base font-serif text-charcoal mb-1">
          {locale === 'am' ? 'በዚህ ቀን ክፍት ሰዓት የለም' : 'No available slots on this date'}
        </p>
        <p className="text-xs">{t('no_slots')}</p>
      </div>
    )
  }

  // Group by Morning (before 12:00), Afternoon (12:00-16:00), Evening (16:00+)
  const morning = slots.filter((s) => parseInt(s.time.split(':')[0]) < 12)
  const afternoon = slots.filter((s) => {
    const h = parseInt(s.time.split(':')[0])
    return h >= 12 && h < 16
  })
  const evening = slots.filter((s) => parseInt(s.time.split(':')[0]) >= 16)

  const renderSlotGroup = (groupSlots: TimeSlot[], title: string, icon: React.ReactNode) => {
    if (groupSlots.length === 0) return null

    return (
      <div className="mb-5 last:mb-0">
        <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
          {icon}
          <span>{title}</span>
          <span className="text-[10px] text-muted/70 lowercase font-normal">
            ({groupSlots.length} {locale === 'am' ? 'ክፍት ሰዓቶች' : 'available'})
          </span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
          {groupSlots.map((slot) => {
            const isSelected = selectedTime === slot.time
            const displayLabel = formatSlotDisplay(slot.time, timeFormat)

            return (
              <button
                key={slot.time}
                type="button"
                onClick={() => onSelectTime(slot.time)}
                className={cn(
                  'px-3 py-2.5 rounded-xl border-2 text-xs font-semibold transition-all duration-150 text-center',
                  isSelected
                    ? 'border-gold bg-gold text-white shadow-sm scale-105'
                    : 'border-border bg-card text-charcoal hover:border-gold/60 hover:bg-gold/10'
                )}
              >
                {displayLabel}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="card-salon p-5 md:p-6 bg-card border border-border">
      <p className="font-serif text-lg text-charcoal mb-4">
        {locale === 'am' ? 'የቀጠሮ ሰዓት ይምረጡ' : t('pick_time')}
      </p>

      {renderSlotGroup(
        morning,
        locale === 'am' ? 'ጠዋት' : 'Morning',
        <Sun className="h-3.5 w-3.5 text-amber-500" />
      )}

      {renderSlotGroup(
        afternoon,
        locale === 'am' ? 'ከሰዓት' : 'Afternoon',
        <Sunset className="h-3.5 w-3.5 text-orange-500" />
      )}

      {renderSlotGroup(
        evening,
        locale === 'am' ? 'ምሽት' : 'Late Afternoon / Evening',
        <Moon className="h-3.5 w-3.5 text-indigo-500" />
      )}
    </div>
  )
}
