'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { services } from '@/data/services'
import { formatPriceSimple, formatDuration } from '@/lib/utils'
import { Clock, ArrowRight, Sparkles } from 'lucide-react'

export default function HomeFeaturedStyles() {
  const t = useTranslations('home.featured_styles')
  const locale = useLocale() as 'en' | 'am'

  const featured = services.filter((s) => s.featured).slice(0, 6)

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="container-salon">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>COLLECTION 2026</span>
            </div>
            <h2 className="section-heading">{t('title')}</h2>
            <p className="text-muted text-base sm:text-lg mt-2 max-w-xl">{t('subtitle')}</p>
          </div>

          <IntlLink
            href="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
          >
            <span>{locale === 'am' ? 'ሁሉንም አገልግሎቶች ይመልከቱ' : 'Explore All Services'}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-accent" />
          </IntlLink>
        </div>

        {/* Featured Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <IntlLink
              key={service.id}
              href={`/booking?service=${service.id}`}
              className="card-salon group cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card"
            >
              <div className="relative aspect-[4/3] bg-muted-bg overflow-hidden">
                <img
                  src={service.image}
                  alt={locale === 'am' ? service.name.am : service.name.en}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-75" />

                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-card/95 text-card-foreground backdrop-blur-sm rounded-full px-3 py-1 text-xs shadow-sm font-medium border border-border/60">
                  <Clock className="h-3 w-3 text-foreground" />
                  <span>{formatDuration(service.duration)}</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs uppercase font-medium text-accent tracking-wider mb-0.5">
                    {service.category.replace('-', ' ')}
                  </p>
                  <h3 className="font-serif text-xl font-bold leading-tight">
                    {locale === 'am' ? service.name.am : service.name.en}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between mt-auto border-t border-border">
                <div>
                  <span className="text-xs text-muted block">{locale === 'am' ? 'ዋጋ' : 'Price'}</span>
                  <p className="text-accent font-bold text-lg">{formatPriceSimple(service.price)}</p>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full btn-accent shadow-sm">
                  {locale === 'am' ? 'አሁን ያዙ' : 'Book Style'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </IntlLink>
          ))}
        </div>

        <div className="text-center mt-12">
          <IntlLink
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 btn-outline-accent rounded-full text-sm font-semibold"
          >
            {t('view_gallery')}
            <ArrowRight className="h-4 w-4" />
          </IntlLink>
        </div>
      </div>
    </section>
  )
}
