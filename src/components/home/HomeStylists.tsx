import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { stylists } from '@/data/stylists'
import { Star } from 'lucide-react'

export default function HomeStylists() {
  const t = useTranslations('home.stylists')
  const locale = useLocale() as 'en' | 'am'
  const featured = stylists.filter((s) => s.featured).slice(0, 3)

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="container-salon">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">{t('title')}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((stylist) => (
            <div key={stylist.id} className="card-salon p-6 text-center group hover:shadow-md transition-shadow">
              {/* Stylist photo */}
              <div className="relative h-44 w-44 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gold/20 shadow-md group-hover:border-gold transition-colors">
                <img
                  src={stylist.photo}
                  alt={locale === 'am' ? stylist.nameAm : stylist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-1">
                {locale === 'am' ? stylist.nameAm : stylist.name}
              </h3>
              <p className="text-gold text-sm mb-3">
                {locale === 'am' ? stylist.roleAm : stylist.role}
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                <Star className="h-4 w-4 text-gold fill-gold" />
                <span className="text-sm font-medium text-charcoal">{stylist.rating}</span>
                <span className="text-muted text-sm">({stylist.reviewCount})</span>
              </div>
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {(locale === 'am' ? stylist.specialtiesAm : stylist.specialties).slice(0, 3).map((sp) => (
                  <span key={sp} className="px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full">{sp}</span>
                ))}
              </div>
              <IntlLink
                href="/booking"
                className="inline-flex items-center justify-center w-full px-4 py-2 btn-outline-gold rounded-full text-sm"
              >
                {t('book_with', { name: stylist.name.split(' ')[0] })}
              </IntlLink>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <IntlLink href="/team" className="inline-flex items-center px-6 py-3 btn-outline-gold rounded-full">
            {t('view_all')}
          </IntlLink>
        </div>
      </div>
    </section>
  )
}
