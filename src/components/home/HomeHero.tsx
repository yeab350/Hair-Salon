'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { Scissors, Calendar, Sparkles, ChevronDown } from 'lucide-react'
import { salonConfig } from '@/config/salon'

export default function HomeHero() {
  const t = useTranslations('home.hero')
  const locale = useLocale() as 'en' | 'am'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground pt-20 transition-colors duration-200">
      {/* Striking Luxury Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in opacity-100 dark:opacity-60"
        />

        {/* Light mode: neutral ivory (#FBFAF7) gradient overlay */}
        <div
          className="dark:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(251, 250, 247, 0.90) 0%, rgba(251, 250, 247, 0.76) 45%, rgba(251, 250, 247, 0.86) 100%)',
          }}
        />

        {/* Dark mode: rich dark luxury overlay */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#0C1A1F]/95 via-[#0C1A1F]/85 to-[#0C1A1F]/70" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-[#0C1A1F] via-transparent to-[#0C1A1F]/60" />
      </div>

      <div className="container-salon relative z-10 text-center py-24 sm:py-32">
        {/* Luxury Badge: frosted white (rgba(255,255,255,0.85)) with copper border */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/85 dark:bg-accent/15 border border-[#AD5A33] dark:border-accent/30 text-[#AD5A33] dark:text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 backdrop-blur-md shadow-sm">
          <Scissors className="h-4 w-4" />
          <span>{t('badge')}</span>
        </div>

        {/* Tagline / Main Title - Deep slate-teal #12262B */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#12262B] dark:text-foreground mb-6 leading-[1.15] max-w-4xl mx-auto tracking-tight drop-shadow-sm font-semibold">
          {locale === 'am' ? salonConfig.taglineAm : salonConfig.tagline}
        </h1>

        {/* Subtitle - #3C5357 with font-weight 500 in light mode */}
        <p className="text-[#3C5357] dark:text-muted font-medium text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {locale === 'am' ? salonConfig.descriptionAm : t('subtitle')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <IntlLink
            href="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 btn-accent rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            {t('cta_book')}
          </IntlLink>
          <IntlLink
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 dark:bg-card/90 hover:bg-white dark:hover:bg-card border border-border hover:border-accent/40 text-foreground rounded-full text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-5 w-5 text-accent" />
            {t('cta_services')}
          </IntlLink>
        </div>

        {/* Credibility Stats Strip on frosted white panel */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto bg-white/60 dark:bg-card/60 backdrop-blur-[8px] rounded-2xl border border-[#AD5A33]/20 dark:border-border p-6 sm:py-7 sm:px-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '2,500+', label: t('stat_clients') },
              { value: '5 Masters', label: t('stat_stylists') },
              { value: '8+ Years', label: t('stat_years') },
              { value: '4.9 ★', label: t('stat_satisfaction') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-serif text-[#AD5A33] dark:text-accent font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#12262B] dark:text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 hidden md:flex justify-center text-muted hover:text-foreground transition-colors">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
