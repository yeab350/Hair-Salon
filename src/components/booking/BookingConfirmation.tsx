'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import {
  CheckCircle,
  Calendar,
  MessageCircle,
  Download,
  Share2,
  Clock,
  User,
  MapPin,
  AlertCircle,
  Sparkles,
  CreditCard,
  Phone,
} from 'lucide-react'
import { format } from 'date-fns'
import { salonConfig } from '@/config/salon'
import { formatPriceSimple, formatDuration, generateICS } from '@/lib/utils'
import { stylists } from '@/data/stylists'
import type { BookingState } from './BookingStepper'

interface Props {
  bookingState: BookingState
}

export default function BookingConfirmation({ bookingState }: Props) {
  const t = useTranslations('booking.confirmation')
  const locale = useLocale() as 'en' | 'am'

  const {
    bookingRef,
    clientName,
    clientPhone,
    clientEmail,
    selectedDate,
    selectedTime,
    selectedServices,
    selectedStylistId,
    notes,
  } = bookingState

  const [notificationSent, setNotificationSent] = useState(true)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)
  const [showPaymentInfo, setShowPaymentInfo] = useState(false)

  const stylist = stylists.find((s) => s.id === selectedStylistId)
  const stylistName = stylist ? (locale === 'am' ? stylist.nameAm : stylist.name) : 'Any Available Stylist'
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0)
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0)
  const dateFormatted = selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : ''

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    if (!selectedDate || !selectedTime) return '#'
    const [year, month, day] = format(selectedDate, 'yyyy-MM-dd').split('-')
    const [startH, startM] = selectedTime.split(':')
    const startMinutes = parseInt(startH) * 60 + parseInt(startM)
    const endMinutes = startMinutes + totalDuration
    const endH = String(Math.floor(endMinutes / 60)).padStart(2, '0')
    const endM = String(endMinutes % 60).padStart(2, '0')

    const startIso = `${year}${month}${day}T${startH}${startM}00`
    const endIso = `${year}${month}${day}T${endH}${endM}00`

    const title = encodeURIComponent(`Hair Appointment at Lux Salon (${selectedServices.map((s) => s.name.en).join(', ')})`)
    const details = encodeURIComponent(
      `Appointment Ref: ${bookingRef}\nStylist: ${stylistName}\nServices: ${selectedServices
        .map((s) => s.name.en)
        .join(', ')}\nTotal: ${totalPrice} ETB\nLocation: Lux Salon, Bole Road, Addis Ababa`
    )
    const loc = encodeURIComponent(salonConfig.address.street + ', ' + salonConfig.address.city)

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${loc}`
  }

  // Handle ICS File Download
  const handleDownloadICS = () => {
    if (!selectedDate || !selectedTime || !bookingRef) return
    const [startH, startM] = selectedTime.split(':')
    const endMinutes = parseInt(startH) * 60 + parseInt(startM) + totalDuration
    const endTime = `${String(Math.floor(endMinutes / 60)).padStart(2, '0')}:${String(endMinutes % 60).padStart(2, '0')}`

    const icsContent = generateICS({
      id: bookingRef,
      clientName,
      date: format(selectedDate, 'yyyy-MM-dd'),
      startTime: selectedTime,
      endTime,
      stylistName,
      services: selectedServices.map((s) => s.name.en),
      location: `${salonConfig.salonName}, ${salonConfig.address.street}`,
    })

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.setAttribute('download', `lux-salon-${bookingRef}.ics`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Lux Salon! I have confirmed my booking.\n\n📌 Ref: ${bookingRef}\n👤 Name: ${clientName}\n📅 Date: ${dateFormatted}\n⏰ Time: ${selectedTime}\n✂️ Services: ${selectedServices
      .map((s) => s.name.en)
      .join(', ')}\n💇 Stylist: ${stylistName}\n💰 Total: ${formatPriceSimple(totalPrice)}`
  )
  const whatsappUrl = `https://wa.me/${salonConfig.contact.whatsapp}?text=${whatsappMessage}`

  if (isCancelled) {
    return (
      <div className="max-w-lg mx-auto text-center py-12 card-salon p-8">
        <div className="h-16 w-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-serif text-charcoal mb-2">
          {locale === 'am' ? 'ቀጠሮው ተሰርዟል' : 'Appointment Cancelled'}
        </h2>
        <p className="text-muted text-sm mb-6">
          {locale === 'am'
            ? `የቀጠሮ መለያዎ ${bookingRef} ተሰርዟል። አስፈላጊ ከሆነ በማንኛውም ጊዜ አዲስ ቀጠሮ መያዝ ይችላሉ።`
            : `Your booking reference ${bookingRef} has been cancelled. You can book a new appointment anytime.`}
        </p>
        <IntlLink href="/booking" className="inline-flex px-6 py-3 btn-gold rounded-full text-sm">
          {locale === 'am' ? 'አዲስ ቀጠሮ ያዙ' : 'Book Another Appointment'}
        </IntlLink>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Top Banner */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 mb-4 shadow-sm animate-fade-in">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif text-charcoal mb-2">{t('title')}</h1>
        <p className="text-muted text-base max-w-md mx-auto">{t('subtitle')}</p>

        {/* Reference Badge */}
        {bookingRef && (
          <div className="mt-5 inline-flex items-center gap-3 px-6 py-2.5 bg-gold/10 border border-gold/30 rounded-2xl shadow-sm">
            <span className="text-xs uppercase tracking-wider text-muted font-medium">{t('ref_label')}:</span>
            <span className="font-mono font-bold text-gold text-xl tracking-wider">{bookingRef}</span>
          </div>
        )}
      </div>

      {/* Booking Details Card */}
      <div className="card-salon p-6 md:p-8 mb-6 shadow-sm border border-cream-dark">
        <div className="border-b border-cream-dark/80 pb-5 mb-5 flex items-center justify-between">
          <h2 className="font-serif text-xl text-charcoal flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold" />
            {locale === 'am' ? 'የቀጠሮ ዝርዝር' : 'Appointment Summary'}
          </h2>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
            {locale === 'am' ? 'ተረጋግጧል' : 'Confirmed'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-cream/40">
            <Calendar className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-muted font-medium">{locale === 'am' ? 'ቀን' : 'Date'}</p>
              <p className="font-bold text-charcoal">{dateFormatted}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-muted-bg/50">
            <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-muted font-medium">{locale === 'am' ? 'ሰዓት እና ቆይታ' : 'Time & Duration'}</p>
              <p className="font-bold text-charcoal">
                {selectedTime} ({formatDuration(totalDuration)})
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-muted-bg/50">
            <User className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-muted font-medium">{locale === 'am' ? 'አስጌጥ' : 'Stylist'}</p>
              <p className="font-bold text-charcoal">{stylistName}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-muted-bg/50">
            <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-muted font-medium">{locale === 'am' ? 'ቦታ' : 'Location'}</p>
              <p className="font-bold text-charcoal">Lux Salon · Bole Road</p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-border pt-4 mb-4">
          <p className="text-xs uppercase tracking-wider text-muted font-bold mb-3">
            {locale === 'am' ? 'የተመረጡ አገልግሎቶች' : 'Booked Services'}
          </p>
          <div className="space-y-2">
            {selectedServices.map((service) => (
              <div key={service.id} className="flex justify-between items-center text-sm py-1">
                <span className="text-charcoal font-medium">
                  {locale === 'am' ? service.name.am : service.name.en}
                </span>
                <span className="font-semibold text-gold">{formatPriceSimple(service.price)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-3 pt-3 flex justify-between items-center text-base">
            <span className="font-bold text-charcoal">{locale === 'am' ? 'አጠቃላይ ዋጋ' : 'Total Price'}</span>
            <span className="font-bold text-gold text-xl">{formatPriceSimple(totalPrice)}</span>
          </div>
        </div>

        {/* Customer Notes */}
        {notes && (
          <div className="bg-muted-bg/60 rounded-xl p-3 text-xs text-muted mt-3">
            <span className="font-semibold text-charcoal">{locale === 'am' ? 'ማስታወሻ' : 'Notes'}: </span>
            {notes}
          </div>
        )}
      </div>

      {/* Simulated Automated Reminder Pill */}
      {notificationSent && (
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 flex-shrink-0">
            <MessageCircle className="h-4 w-4" />
          </div>
          <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
            <p className="font-bold mb-0.5">
              {locale === 'am' ? 'ራስ-ሰር የቀጠሮ ማስታወሻ ተልኳል' : 'Simulated 24h SMS/WhatsApp Reminder Queued'}
            </p>
            <p className="text-amber-800/90 dark:text-amber-300/90">
              {locale === 'am'
                ? `ወደ ${clientPhone} ማረጋገጫ ተልኳል። እንዲሁም ከቀጠሮዎ 24 ሰዓት በፊት ማስታወሻ ይደርስዎታል።`
                : `A confirmation text was simulated for ${clientPhone}. An automatic reminder will trigger 24h before your appointment.`}
            </p>
            {/* TODO: In production, integrate Twilio, Termii, or WhatsApp Business Cloud API webhook here */}
          </div>
        </div>
      )}

      {/* Actions: Add to Calendar, WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-card border border-border hover:border-gold text-charcoal hover:text-gold rounded-full font-medium text-sm transition-all shadow-sm"
        >
          <Calendar className="h-4 w-4 text-gold" />
          Google Calendar
        </a>

        <button
          onClick={handleDownloadICS}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-card border border-border hover:border-gold text-charcoal hover:text-gold rounded-full font-medium text-sm transition-all shadow-sm"
        >
          <Download className="h-4 w-4 text-gold" />
          Apple / Outlook (.ics)
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium text-sm transition-all shadow-sm"
        >
          <MessageCircle className="h-4 w-4" />
          {t('whatsapp')}
        </a>
      </div>

      {/* Ethiopian Payment Option Placeholder (Telebirr, CBE Birr, Chapa) */}
      <div className="card-salon p-5 mb-8 border border-border bg-card">
        <button
          onClick={() => setShowPaymentInfo(!showPaymentInfo)}
          className="w-full flex items-center justify-between text-left text-sm font-medium text-charcoal"
        >
          <span className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-gold" />
            {locale === 'am' ? 'የክፍያ አማራጮች (ቴሌብር / ንግድ ባንክ / ቻፓ)' : 'Ethiopian Payment Options (Telebirr / CBE / Chapa)'}
          </span>
          <span className="text-xs text-gold font-semibold underline">
            {showPaymentInfo ? (locale === 'am' ? 'ዝጋ' : 'Hide') : (locale === 'am' ? 'ዝርዝር ይመልከቱ' : 'View Details')}
          </span>
        </button>

        {showPaymentInfo && (
          <div className="mt-4 pt-4 border-t border-border text-xs text-charcoal-light space-y-2">
            <p className="font-semibold text-charcoal">
              {locale === 'am' ? 'በሳሎኑ ውስጥ ወይም አስቀድመው መክፈል ይችላሉ፡' : 'Pay at the salon or prepay via mobile banking:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <div className="p-2.5 rounded-lg bg-muted-bg/50 border border-border">
                <span className="font-bold text-[#0066B2] dark:text-[#38a0f8] block">Telebirr</span>
                <span className="text-muted">0911 234 567</span>
              </div>
              <div className="p-2.5 rounded-lg bg-muted-bg/50 border border-border">
                <span className="font-bold text-[#800080] dark:text-[#c45cc4] block">CBE Birr</span>
                <span className="text-muted">1000 2345 67890</span>
              </div>
              <div className="p-2.5 rounded-lg bg-muted-bg/50 border border-border">
                <span className="font-bold text-[#00AA55] dark:text-[#32d980] block">Chapa / Card</span>
                <span className="text-muted">Online Gateway (Ready)</span>
              </div>
            </div>
            <p className="text-[11px] text-muted italic pt-1">
              * Payment is collected upon service completion unless booking specialized wedding packages.
            </p>
          </div>
        )}
      </div>

      {/* Reschedule / Cancel / Home Footer Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border text-sm">
        <div className="flex gap-4">
          <button
            onClick={() => setShowCancelModal(true)}
            className="text-muted hover:text-red-600 transition-colors text-xs underline underline-offset-4"
          >
            {locale === 'am' ? 'ቀጠሮ ሰርዝ' : 'Cancel appointment'}
          </button>
          <IntlLink
            href="/booking"
            className="text-muted hover:text-gold transition-colors text-xs underline underline-offset-4"
          >
            {locale === 'am' ? 'ቀጠሮ ቀይር / እንደገና ያዙ' : 'Reschedule'}
          </IntlLink>
        </div>

        <div className="flex gap-3">
          <IntlLink href="/booking" className="px-5 py-2.5 btn-outline-gold rounded-full text-xs font-semibold">
            {t('new_booking')}
          </IntlLink>
          <IntlLink href="/" className="px-5 py-2.5 bg-muted-bg text-charcoal hover:bg-muted-bg/80 rounded-full text-xs font-semibold">
            {t('back_home')}
          </IntlLink>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="card-salon p-6 max-w-sm w-full text-center">
            <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-charcoal mb-2">
              {locale === 'am' ? 'ቀጠሮዎን መሰረዝ ይፈልጋሉ?' : 'Cancel this appointment?'}
            </h3>
            <p className="text-muted text-xs mb-6">
              {locale === 'am'
                ? 'እባክዎ ቢያንስ ከ24 ሰዓት በፊት መሰረዝዎን ያረጋግጡ።'
                : 'Please note our 24-hour notice policy for cancellations.'}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-2 bg-muted-bg text-charcoal rounded-full text-xs font-semibold"
              >
                {locale === 'am' ? 'ተመለስ' : 'Keep Appointment'}
              </button>
              <button
                onClick={() => {
                  setShowCancelModal(false)
                  setIsCancelled(true)
                }}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-full text-xs font-semibold hover:bg-red-700"
              >
                {locale === 'am' ? 'አዎ ሰርዝ' : 'Yes, Cancel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
