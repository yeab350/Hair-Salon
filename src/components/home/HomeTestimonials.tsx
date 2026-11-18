import { useTranslations, useLocale } from 'next-intl'
import { testimonials } from '@/data/testimonials'
import { Star } from 'lucide-react'

export default function HomeTestimonials() {
  const t = useTranslations('home.testimonials')
  const locale = useLocale() as 'en' | 'am'
  const featured = testimonials.slice(0, 4)

  return (
    <section className="py-24 bg-alternate border-y border-border transition-colors relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-salon">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">{t('title')}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((testimonial) => (
            <div key={testimonial.id} className="card-salon p-6">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-border'}`}
                  />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed mb-4 italic">
                &ldquo;{locale === 'am' ? testimonial.textAm : testimonial.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center">
                  <span className="text-foreground font-serif text-sm font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {locale === 'am' && testimonial.nameAm ? testimonial.nameAm : testimonial.name}
                  </p>
                  <p className="text-muted text-xs">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
