'use client'

import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { Link as IntlLink } from '@/i18n'
import { salonConfig } from '@/config/salon'

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${salonConfig.contact.whatsapp}?text=Hello! I'd like to book an appointment.`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${salonConfig.contact.phone}`}
        className="flex items-center justify-center h-12 w-12 bg-gold hover:bg-gold-dark text-white rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Book */}
      <IntlLink
        href="/booking"
        className="flex items-center justify-center h-12 w-12 bg-plum hover:bg-plum-light text-white rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Book appointment"
      >
        <Calendar className="h-6 w-6" />
      </IntlLink>
    </div>
  )
}
