import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number, currency = 'ETB'): string {
  return new Intl.NumberFormat('en-ET', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPriceSimple(amount: number): string {
  return `${amount.toLocaleString('en-ET')} ETB`
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (remainingMinutes === 0) {
    return `${hours} hr${hours > 1 ? 's' : ''}`
  }
  return `${hours} hr${hours > 1 ? 's' : ''} ${remainingMinutes} min`
}

export function formatDurationAm(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} ደቂቃ`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (remainingMinutes === 0) {
    return `${hours} ሰዓት`
  }
  return `${hours} ሰዓት ${remainingMinutes} ደቂቃ`
}

export interface BookingForICS {
  id: string
  clientName: string
  date: string
  startTime: string
  endTime: string
  stylistName: string
  services: string[]
  location?: string
}

export function generateICS(booking: BookingForICS): string {
  const { id, clientName, date, startTime, endTime, stylistName, services, location } = booking

  const dtStart = formatICSDate(date, startTime)
  const dtEnd = formatICSDate(date, endTime)
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const summary = `Lux Salon - ${services.join(', ')}`
  const description = `Appointment with ${stylistName}\\nServices: ${services.join(', ')}\\nClient: ${clientName}`
  const loc = location || 'Lux Salon, Bole Road, Addis Ababa'

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Lux Salon//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${id}@luxsalon.et`,
    `DTSTAMP:${now}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${loc}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

function formatICSDate(date: string, time: string): string {
  // date: YYYY-MM-DD, time: HH:MM
  const [year, month, day] = date.split('-')
  const [hour, minute] = time.split(':')
  return `${year}${month}${day}T${hour}${minute}00`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function addMinutes(timeString: string, minutes: number): string {
  const [hours, mins] = timeString.split(':').map(Number)
  const totalMinutes = hours * 60 + mins + minutes
  const newHours = Math.floor(totalMinutes / 60) % 24
  const newMins = totalMinutes % 60
  return `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`
}

export function timeToMinutes(timeString: string): number {
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}

export function generateBookingId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `BKG-${timestamp}-${random}`
}
