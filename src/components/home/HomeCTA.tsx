import { useTranslations } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { salonConfig } from '@/config/salon'
import { Phone, Calendar, Sparkles } from 'lucide-react'

export default function HomeCTA() {
  const t = useTranslations('home.cta')

  return (
    <section className="py-24 gradient-plum text-white relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-salon text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          <span>LUXURY HAIR CARE</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 max-w-3xl mx-auto leading-tight">
          {t('title')}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <IntlLink
            href="/booking"
            className="w-full sm:w-auto inline-flex items-center gap-2.5 justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-gold/30 hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            {t('book_now')}
          </IntlLink>
          <span className="text-white/50 text-sm font-medium">{t('or')}</span>
          <a
            href={`tel:${salonConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center gap-2 justify-center px-8 py-4 border border-white/30 hover:border-white text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            {t('call_us')}
          </a>
        </div>
      </div>
    </section>
  )
}
