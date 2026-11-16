import { useTranslations } from 'next-intl'
import { Award, Sparkles, ShieldCheck, Calendar, Globe2, Clock } from 'lucide-react'

export default function HomeFeatures() {
  const t = useTranslations('home.features')

  const features = [
    { icon: Award, title: t('expert_title'), desc: t('expert_desc') },
    { icon: Sparkles, title: t('products_title'), desc: t('products_desc') },
    { icon: ShieldCheck, title: t('hygiene_title'), desc: t('hygiene_desc') },
    { icon: Calendar, title: t('booking_title'), desc: t('booking_desc') },
    { icon: Globe2, title: t('bilingual_title'), desc: t('bilingual_desc') },
    { icon: Clock, title: t('timely_title'), desc: t('timely_desc') },
  ]

  return (
    <section className="py-24 bg-card/40 border-y border-border/50 transition-colors">
      <div className="container-salon">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">{t('title')}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-salon p-6 hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors mb-4">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
