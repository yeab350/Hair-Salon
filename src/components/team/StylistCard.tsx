import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { type Stylist } from '@/data/stylists'
import { Star, Calendar, Instagram } from 'lucide-react'

interface StylistCardProps {
  stylist: Stylist
}

export default function StylistCard({ stylist }: StylistCardProps) {
  const t = useTranslations('team')
  const locale = useLocale() as 'en' | 'am'

  return (
    <div className="card-salon overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      {/* Real photo with overlay */}
      <div className="relative h-64 bg-cream-dark overflow-hidden">
        <img
          src={stylist.photo}
          alt={locale === 'am' ? stylist.nameAm : stylist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />

        {stylist.instagram && (
          <a
            href={`https://instagram.com/${stylist.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 p-2 rounded-full bg-card/90 text-charcoal hover:text-gold hover:bg-card transition-colors"
            aria-label="Instagram profile"
          >
            <Instagram className="h-4 w-4" />
          </a>
        )}

        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl font-bold leading-tight drop-shadow-sm">
            {locale === 'am' ? stylist.nameAm : stylist.name}
          </h3>
          <p className="text-gold text-sm font-medium drop-shadow-sm">
            {locale === 'am' ? stylist.roleAm : stylist.role}
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Rating & Experience */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-gold fill-gold" />
                <span className="text-sm text-charcoal font-bold">{stylist.rating}</span>
                <span className="text-muted text-xs">({t('reviews', { count: stylist.reviewCount })})</span>
              </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted-bg text-charcoal border border-border">
                  {stylist.yearsExperience} {locale === 'am' ? 'ዓመታት ልምድ' : 'yrs experience'}
                </span>
            </div>

            {/* Bio */}
            <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
              {locale === 'am' ? stylist.bioAm : stylist.bio}
            </p>

            {/* Specialties */}
            <div className="mb-5">
              <p className="text-xs font-medium text-muted mb-2">{t('specialties')}:</p>
              <div className="flex flex-wrap gap-1.5">
                {(locale === 'am' ? stylist.specialtiesAm : stylist.specialties).map((sp) => (
                  <span key={sp} className="px-2.5 py-0.5 bg-gold/10 text-gold text-xs font-medium rounded-full">
                    {sp}
                  </span>
                ))}
              </div>
            </div>

            {/* Mini Portfolio Preview */}
            {stylist.portfolio && stylist.portfolio.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-medium text-muted mb-2">{t('view_portfolio')}:</p>
                <div className="grid grid-cols-3 gap-2">
                  {stylist.portfolio.slice(0, 3).map((img, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden bg-cream-dark">
                      <img
                        src={img}
                        alt="Portfolio item"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <IntlLink
            href={`/booking?stylist=${stylist.id}`}
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 btn-gold rounded-full text-sm font-medium shadow-sm hover:shadow mt-2"
          >
            <Calendar className="h-4 w-4" />
            {t('book_appointment')}
          </IntlLink>
        </div>
      </div>
      )
}
