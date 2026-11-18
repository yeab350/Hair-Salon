'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ChevronLeft, Calendar as CalendarIcon, Clock, Sparkles, Globe } from 'lucide-react'
import { format, addDays, isSameDay, isBefore, startOfDay } from 'date-fns'
import TimeSlotPicker from './TimeSlotPicker'
import type { BookingState } from './BookingStepper'
import { mockBookings } from '@/data/bookings'
import { stylists } from '@/data/stylists'
import { getAvailableSlots, getNextAvailable } from '@/lib/booking'
import { toEthiopianDateString, gregorianToEthiopian } from '@/lib/ethiopianCalendar'
import { cn, formatDuration } from '@/lib/utils'

interface Props {
  bookingState: BookingState
  updateBooking: (updates: Partial<BookingState>) => void
  onNext: () => void
  onBack: () => void
}

export default function BookingStepDateTime({ bookingState, updateBooking, onNext, onBack }: Props) {
  const t = useTranslations('booking.step_datetime')
  const locale = useLocale() as 'en' | 'am'

  const { selectedDate, selectedTime, selectedStylistId, selectedServices } = bookingState
  const [useEthiopianCalendar, setUseEthiopianCalendar] = useState(false)
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h')

  // Show next 21 days
  const today = startOfDay(new Date())
  const days = Array.from({ length: 21 }, (_, i) => addDays(today, i + 1))

  const stylist = stylists.find((s) => s.id === selectedStylistId) ?? stylists[0]
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0)

  const availableSlots = selectedDate
    ? getAvailableSlots({
        stylistId: stylist.id,
        date: selectedDate,
        services: selectedServices,
        existingBookings: mockBookings,
        stylist,
      })
    : []

  // Check next available if current date has no slots
  const nextAvailable = !selectedDate || availableSlots.length === 0
    ? getNextAvailable(stylist, selectedServices, mockBookings, today)
    : null

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-serif text-foreground mb-1">{t('title')}</h2>
          <p className="text-muted text-sm">{t('subtitle')}</p>
        </div>

        {/* Calendar format toggle & 12h/24h toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Ethiopian calendar toggle */}
          <button
            type="button"
            onClick={() => setUseEthiopianCalendar(!useEthiopianCalendar)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
              useEthiopianCalendar
                ? 'bg-accent text-[rgb(var(--accent-foreground))] border-accent'
                : 'bg-card border-border text-foreground hover:border-accent'
            )}
          >
            <Globe className="h-3.5 w-3.5" />
            {useEthiopianCalendar
              ? locale === 'am' ? 'የኢትዮጵያ ዘመን አቆጣጠር' : 'Ethiopian Calendar (Active)'
              : locale === 'am' ? 'ወደ ኢትዮጵያ ዘመን አቆጣጠር ቀይር' : 'Ethiopian Calendar'}
          </button>

          {/* 12h / 24h toggle */}
          <div className="inline-flex rounded-full border border-border p-0.5 bg-card text-xs font-medium">
            <button
              type="button"
              onClick={() => setTimeFormat('12h')}
              className={cn(
                'px-2.5 py-1 rounded-full transition-colors',
                timeFormat === '12h' ? 'bg-accent text-[rgb(var(--accent-foreground))]' : 'text-muted hover:text-foreground'
              )}
            >
              12h
            </button>
            <button
              type="button"
              onClick={() => setTimeFormat('24h')}
              className={cn(
                'px-2.5 py-1 rounded-full transition-colors',
                timeFormat === '24h' ? 'bg-accent text-[rgb(var(--accent-foreground))]' : 'text-muted hover:text-foreground'
              )}
            >
              24h
            </button>
          </div>
        </div>
      </div>

      {/* Timezone Note */}
      <div className="mb-6 flex items-center justify-between bg-alternate border border-border rounded-xl px-4 py-2 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-foreground" />
          Timezone: <strong>Africa/Addis_Ababa (GMT+3)</strong>
        </span>
        <span>
          Total Duration: <strong>{formatDuration(totalDuration)}</strong>
        </span>
      </div>

      {/* Date picker horizontal scroll */}
      <div className="mb-8">
        <p className="font-medium text-foreground mb-3 flex items-center gap-2 text-sm">
          <CalendarIcon className="h-4 w-4 text-foreground" /> {t('pick_date')}
        </p>
        <div className="flex gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-hide">
          {days.map((day) => {
            const isSelected = selectedDate && isSameDay(day, selectedDate)
            const isPast = isBefore(day, today)
            const ethDate = gregorianToEthiopian(day)

            return (
              <button
                key={day.toISOString()}
                type="button"
                onClick={() => updateBooking({ selectedDate: day, selectedTime: null })}
                disabled={isPast}
                className={cn(
                  'flex flex-col items-center px-4 py-3 rounded-2xl border-2 flex-shrink-0 min-w-[76px] transition-all duration-200',
                  isSelected
                    ? 'border-accent bg-accent text-[rgb(var(--accent-foreground))] shadow-md -translate-y-0.5'
                    : 'border-border bg-card text-foreground hover:border-accent/50 shadow-sm',
                  isPast && 'opacity-40 cursor-not-allowed'
                )}
              >
                <span className="text-[11px] font-medium tracking-wide">
                  {format(day, 'EEE')}
                </span>
                
                {useEthiopianCalendar ? (
                  <>
                    <span className="text-xl font-serif font-bold my-0.5">{ethDate.day}</span>
                    <span className="text-[10px] opacity-90 truncate max-w-[68px]">
                      {locale === 'am' ? ethDate.monthName.am : ethDate.monthName.en}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xl font-serif font-bold my-0.5">{format(day, 'd')}</span>
                    <span className="text-[10px] opacity-80">{format(day, 'MMM')}</span>
                  </>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Date Summary & Time slots */}
      {selectedDate ? (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <p className="font-medium text-foreground text-sm">
              {locale === 'am' ? 'የተመረጠ ቀን፡' : 'Selected Date:'}{' '}
              <span className="text-accent font-bold">
                {useEthiopianCalendar
                  ? toEthiopianDateString(selectedDate, locale)
                  : format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </span>
            </p>
            {useEthiopianCalendar && (
              <span className="text-xs text-muted">({format(selectedDate, 'MMM d, yyyy')})</span>
            )}
          </div>

          <TimeSlotPicker
            slots={availableSlots}
            selectedTime={selectedTime}
            timeFormat={timeFormat}
            onSelectTime={(time) => updateBooking({ selectedTime: time })}
          />

          {availableSlots.length === 0 && nextAvailable && (
            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-accent" />
                <div className="text-xs">
                  <p className="font-bold text-foreground">
                    {locale === 'am' ? 'ቀጣዩ ክፍት ሰዓት ይገኛል፡' : 'Next Available Slot:'}
                  </p>
                  <p className="text-muted">
                    {format(nextAvailable.date, 'EEEE, MMM d')} at {nextAvailable.slot.time}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  updateBooking({
                    selectedDate: nextAvailable.date,
                    selectedTime: nextAvailable.slot.time,
                  })
                }}
                className="px-4 py-2 btn-accent rounded-full text-xs font-semibold"
              >
                {locale === 'am' ? 'ይህን ምረጥ' : 'Select This Slot'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12 card-salon p-8 text-muted">
          <CalendarIcon className="h-10 w-10 text-accent/60 mx-auto mb-3" />
          <p className="text-sm font-medium">{locale === 'am' ? 'እባክዎ መጀመሪያ ቀን ይምረጡ' : 'Please select a date above to view available time slots'}</p>
        </div>
      )}

      {/* Stepper Navigation */}
      <div className="flex gap-3 mt-10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-4 btn-outline-accent rounded-full text-sm font-semibold"
        >
          <ChevronLeft className="h-4 w-4" /> {t('back')}
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selectedDate || !selectedTime}
          className="flex-1 px-6 py-4 btn-accent rounded-full text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
        >
          {t('continue')}
        </button>
      </div>
    </div>
  )
}
