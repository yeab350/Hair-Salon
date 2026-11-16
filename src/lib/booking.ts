import type { Booking } from '@/data/bookings'
import type { Service } from '@/data/services'
import type { Stylist } from '@/data/stylists'
import { timeToMinutes, addMinutes } from './utils'

export interface TimeSlot {
  time: string
  available: boolean
  endTime: string
}

export interface AvailabilityParams {
  stylistId: string
  date: Date
  services: Service[]
  existingBookings: Booking[]
  stylist: Stylist
}

/**
 * Returns array of 30-minute time slots for a given stylist on a given date.
 * Filters out slots that overlap with existing bookings or fall outside working hours.
 */
export function getAvailableSlots(params: AvailabilityParams): TimeSlot[] {
  const { stylistId, date, services, existingBookings, stylist } = params

  const dayOfWeek = getDayOfWeek(date)
  const workingHours = stylist.workingHours[dayOfWeek]

  // Stylist doesn't work this day
  if (!workingHours) return []

  const totalDuration = services.reduce((sum, s) => sum + s.duration, 0)
  const slots: TimeSlot[] = []

  const { start, end, breakStart, breakEnd } = workingHours
  const startMinutes = timeToMinutes(start)
  const endMinutes = timeToMinutes(end)
  const breakStartMinutes = breakStart ? timeToMinutes(breakStart) : null
  const breakEndMinutes = breakEnd ? timeToMinutes(breakEnd) : null

  // Filter bookings for this stylist on this date
  const dateStr = formatDateString(date)
  const dayBookings = existingBookings.filter(
    (b) => b.stylistId === stylistId && b.date === dateStr && b.status !== 'cancelled'
  )

  // Generate slots every 30 minutes
  for (let slotStart = startMinutes; slotStart + totalDuration <= endMinutes; slotStart += 30) {
    const slotEnd = slotStart + totalDuration
    const startStr = minutesToTime(slotStart)
    const endStr = minutesToTime(slotEnd)

    // Check if slot is in the future (for today)
    const now = new Date()
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()

    if (isToday) {
      const nowMinutes = now.getHours() * 60 + now.getMinutes() + 120 // 2h buffer
      if (slotStart < nowMinutes) continue
    }

    // Check break overlap
    if (breakStartMinutes && breakEndMinutes) {
      if (slotStart < breakEndMinutes && slotEnd > breakStartMinutes) continue
    }

    // Check existing booking conflicts
    const hasConflictResult = hasConflict(startStr, endStr, dayBookings)
    if (hasConflictResult) continue

    slots.push({ time: startStr, endTime: endStr, available: true })
  }

  return slots
}

/**
 * Returns true if the proposed time range conflicts with any existing booking.
 */
export function hasConflict(
  proposedStart: string,
  proposedEnd: string,
  existingBookings: Booking[]
): boolean {
  const proposedStartMin = timeToMinutes(proposedStart)
  const proposedEndMin = timeToMinutes(proposedEnd)

  return existingBookings.some((booking) => {
    const bookingStart = timeToMinutes(booking.startTime)
    const bookingEnd = timeToMinutes(booking.endTime)
    return proposedStartMin < bookingEnd && proposedEndMin > bookingStart
  })
}

/**
 * Returns the next available date and time slot for a stylist.
 */
export function getNextAvailable(
  stylist: Stylist,
  services: Service[],
  existingBookings: Booking[],
  startFrom: Date = new Date()
): { date: Date; slot: TimeSlot } | null {
  const maxDays = 60

  for (let i = 0; i < maxDays; i++) {
    const date = new Date(startFrom)
    date.setDate(date.getDate() + i)

    const slots = getAvailableSlots({
      stylistId: stylist.id,
      date,
      services,
      existingBookings,
      stylist,
    })

    if (slots.length > 0) {
      return { date, slot: slots[0] }
    }
  }

  return null
}

export function getDayOfWeek(
  date: Date
): 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const
  return days[date.getDay()]
}

export function formatDateString(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60) % 24
  const m = minutes % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function calculateEndTime(startTime: string, durationMinutes: number): string {
  return addMinutes(startTime, durationMinutes)
}

export function generateBookingId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `BKG-${timestamp}-${random}`
}
