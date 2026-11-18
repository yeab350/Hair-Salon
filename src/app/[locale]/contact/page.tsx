'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import { salonConfig } from '@/config/salon'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale() as 'en' | 'am'

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setSubmitted(true)
  }

  const whatsappUrl = `https://wa.me/${salonConfig.contact.whatsapp}?text=${encodeURIComponent(
    locale === 'am' ? 'ሰላም! የሳሎን ቀጠሮ ለመያዝ እፈልጋለሁ።' : "Hello! I'd like to ask a question about Lux Salon."
  )}`

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20 transition-colors duration-200">
        <div className="container-salon">
          <div className="text-center mb-14">
            <h1 className="section-heading mb-4">{t('title')}</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact form */}
            <div className="card-salon p-8 bg-card border border-border">
              <h2 className="text-2xl font-serif text-foreground mb-6">{t('form_title')}</h2>
              
              {submitted ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-emerald-900 dark:text-emerald-200 mb-2">
                    {locale === 'am' ? 'መልእክትዎ ተልኳል!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald-300 text-sm mb-6">
                    {t('success')}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', phone: '', email: '', message: '' })
                    }}
                    className="px-6 py-2 btn-accent rounded-full text-sm font-semibold"
                  >
                    {locale === 'am' ? 'ሌላ መልእክት ላክ' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      {t('name_label')} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('name_placeholder')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      {t('phone_label')} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t('phone_placeholder')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      {t('email_label')}
                    </label>
                    <input
                      type="email"
                      placeholder={t('email_placeholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      {t('message_label')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t('message_placeholder')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent text-sm transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-accent px-6 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <Send className="h-4 w-4" />
                    {t('submit')}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info & Instant messengers */}
            <div className="space-y-6">
              {/* Instant WhatsApp & Telegram banner */}
              <div className="card-salon p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border-emerald-200 dark:border-emerald-800/40">
                <h3 className="font-serif text-xl text-emerald-900 dark:text-emerald-200 mb-2">
                  {locale === 'am' ? 'ፈጣን ግንኙነት በዋትስአፕ / ቴሌግራም' : 'Need a Quick Answer?'}
                </h3>
                <p className="text-sm text-emerald-800 dark:text-emerald-300 mb-4 leading-relaxed">
                  {locale === 'am'
                    ? 'በቀጥታ በዋትስአፕ ወይም ቴሌግራም ያናግሩን። ወዲያውኑ ምላሽ እንሰጣለን።'
                    : 'Chat directly with our reception team on WhatsApp or Telegram for instant availability check.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={salonConfig.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#229ED9] hover:bg-[#1E88C7] text-white rounded-full text-sm font-medium transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </a>
                </div>
              </div>

              {/* Direct channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-salon p-5 bg-card border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-foreground" />
                    <h4 className="font-serif text-base text-foreground font-semibold">{t('phone_title')}</h4>
                  </div>
                  <a href={`tel:${salonConfig.contact.phone}`} className="text-accent font-bold text-sm hover:underline">
                    {salonConfig.contact.phone}
                  </a>
                </div>

                <div className="card-salon p-5 bg-card border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-foreground" />
                    <h4 className="font-serif text-base text-foreground font-semibold">{t('email_title')}</h4>
                  </div>
                  <a href={`mailto:${salonConfig.contact.email}`} className="text-accent font-bold text-sm hover:underline">
                    {salonConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Address card */}
              <div className="card-salon p-6 bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-foreground" />
                  <h4 className="font-serif text-lg text-foreground font-semibold">{t('address_title')}</h4>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{salonConfig.address.street}</p>
                <p className="text-xs text-muted mb-4">{salonConfig.address.city}, {salonConfig.address.country}</p>
                
                {/* Embedded map representation */}
                <div className="rounded-xl overflow-hidden aspect-[16/7] relative bg-alternate border border-border flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                    alt="Map Location"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute flex flex-col items-center justify-center text-center p-3">
                    <MapPin className="h-8 w-8 text-accent drop-shadow-md mb-1 animate-bounce" />
                    <p className="text-xs font-bold text-white drop-shadow bg-black/80 px-3 py-1 rounded-full">
                      Lux Salon · Edna Mall, Bole
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card-salon p-5 bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-foreground" />
                  <h4 className="font-serif text-base text-foreground font-semibold">{t('hours_title')}</h4>
                </div>
                <div className="flex justify-between text-xs text-muted">
                  <span>Mon – Sat: 09:00 – 18:00</span>
                  <span className="text-accent font-semibold">Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
