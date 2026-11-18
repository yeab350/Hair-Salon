import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { type Service } from '@/data/services'
import { stylists } from '@/data/stylists'
import { Clock, ChevronRight, User } from 'lucide-react'
import { formatPriceSimple, formatDuration } from '@/lib/utils'
import Badge from '@/components/ui/Badge'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const t = useTranslations('services')
  const locale = useLocale() as 'en' | 'am'

  const performingStylists = stylists.filter((s) => service.stylistIds.includes(s.id))

  return (
    <div className="card-salon hover:shadow-lg transition-all duration-300 group flex flex-col h-full bg-card border border-border">
      {/* Image with zoom effect */}
      <div className="relative h-52 bg-muted-bg overflow-hidden">
        <img
          src={service.image}
          alt={locale === 'am' ? service.name.am : service.name.en}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        
        {service.featured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="accent">{t('featured')}</Badge>
          </div>
        )}
        
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-card/95 text-card-foreground backdrop-blur-sm rounded-full px-3 py-1 text-xs shadow-sm font-medium border border-border/60">
          <Clock className="h-3 w-3 text-foreground" />
          <span>{formatDuration(service.duration)}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors font-semibold">
            {locale === 'am' ? service.name.am : service.name.en}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {locale === 'am' ? service.description.am : service.description.en}
          </p>

          {/* Assigned Stylists */}
          {performingStylists.length > 0 && (
            <div className="mb-4 pt-3 border-t border-border">
              <p className="text-xs text-muted mb-2 flex items-center gap-1 font-medium">
                <User className="h-3 w-3 text-foreground" />
                {locale === 'am' ? 'ባለሙያዎች' : 'Stylists'}:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {performingStylists.map((st) => (
                  <span
                    key={st.id}
                    className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-alternate text-foreground font-medium border border-border"
                  >
                    {locale === 'am' ? st.nameAm.split(' ')[0] : st.name.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <div>
            <span className="text-xs text-muted block">{locale === 'am' ? 'መነሻ ዋጋ' : 'From'}</span>
            <p className="text-accent font-bold text-xl">{formatPriceSimple(service.price)}</p>
            {service.priceNote && (
              <p className="text-muted text-xs mt-0.5">
                {locale === 'am' ? service.priceNote.am : service.priceNote.en}
              </p>
            )}
          </div>
          <IntlLink
            href={`/booking?service=${service.id}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 btn-accent rounded-full text-sm font-semibold shadow-sm hover:shadow"
          >
            {t('book_service')}
            <ChevronRight className="h-4 w-4" />
          </IntlLink>
        </div>
      </div>
    </div>
  )
}
