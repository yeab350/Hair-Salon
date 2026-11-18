import { useTranslations } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { salonConfig } from '@/config/salon'
import { Phone, Calendar, Sparkles } from 'lucide-react'

export default function HomeCTA() {
  const t = useTranslations('home.cta')

  return (
    <section className="py-24 bg-alternate text-foreground border-y border-border dark:bg-card dark:text-foreground relative overflow-hidden transition-colors duration-200">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-salon text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-border text-foreground text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>LUXURY HAIR CARE</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 max-w-3xl mx-auto leading-tight text-foreground font-semibold">
          {t('title')}
        </h2>
        <p className="text-foreground/80 dark:text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <IntlLink
            href="/booking"
            className="w-full sm:w-auto inline-flex items-center gap-2.5 justify-center px-8 py-4 btn-accent rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            {t('book_now')}
          </IntlLink>
          <span className="text-muted text-sm font-medium">{t('or')}</span>
          <a
            href={`tel:${salonConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center gap-2 justify-center px-8 py-4 border border-border hover:border-accent text-foreground rounded-full text-lg font-semibold transition-all duration-300 bg-card/60 hover:bg-card shadow-sm"
          >
            <Phone className="h-5 w-5 text-foreground" />
            {t('call_us')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
