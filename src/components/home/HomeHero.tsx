'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { Scissors, Calendar, Sparkles, Star, ChevronDown } from 'lucide-react'
import { salonConfig } from '@/config/salon'

export default function HomeHero() {
  const t = useTranslations('home.hero')
  const locale = useLocale() as 'en' | 'am'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#141018] text-white pt-20">
      {/* Striking Luxury Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />
        {/* Deep luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141018]/95 via-[#141018]/80 to-[#141018]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141018] via-transparent to-[#141018]/60" />
      </div>

      <div className="container-salon relative z-10 text-center py-24 sm:py-32">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 backdrop-blur-md shadow-sm">
          <Scissors className="h-4 w-4" />
          <span>{t('badge')}</span>
        </div>

        {/* Tagline / Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.15] max-w-4xl mx-auto tracking-tight drop-shadow-md">
          {locale === 'am' ? salonConfig.taglineAm : salonConfig.tagline}
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow">
          {locale === 'am' ? salonConfig.descriptionAm : t('subtitle')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <IntlLink
            href="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold hover:bg-gold-dark text-white rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            {t('cta_book')}
          </IntlLink>
          <IntlLink
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-md"
          >
            <Sparkles className="h-5 w-5 text-gold" />
            {t('cta_services')}
          </IntlLink>
        </div>

        {/* Credibility Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto pt-10 border-t border-white/15">
          {[
            { value: '2,500+', label: t('stat_clients') },
            { value: '5 Masters', label: t('stat_stylists') },
            { value: '8+ Years', label: t('stat_years') },
            { value: '4.9 ★', label: t('stat_satisfaction') },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-serif text-gold font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 hidden md:flex justify-center text-white/50 hover:text-white transition-colors">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
