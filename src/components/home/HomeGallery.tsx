import { useTranslations } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import { galleryItems } from '@/data/gallery'

export default function HomeGallery() {
  const t = useTranslations('home.gallery')
  const preview = galleryItems.slice(0, 6)

  return (
    <section className="py-24 bg-muted-bg/40 transition-colors duration-200">
      <div className="container-salon">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">{t('title')}</h2>
          <p className="text-muted text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((item, idx) => (
            <IntlLink
              key={item.id}
              href="/gallery"
              className={`relative rounded-2xl overflow-hidden bg-card group cursor-pointer shadow-sm hover:shadow-md transition-shadow
                ${idx === 0 || idx === 3 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-square'}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-card/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
                  <p className="text-xs font-medium text-charcoal truncate">{item.alt}</p>
                </div>
              </div>
            </IntlLink>
          ))}
        </div>

        <div className="text-center mt-10">
          <IntlLink href="/gallery" className="inline-flex items-center px-6 py-3 btn-outline-gold rounded-full">
            {t('view_all')}
          </IntlLink>
        </div>
      </div>
    </section>
  )
}
