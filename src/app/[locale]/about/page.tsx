import { useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import { salonConfig } from '@/config/salon'
import { MapPin, Clock, Car, Accessibility, Sparkles, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  const t = useTranslations('about')

  const salonPhotos = [
    {
      src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
      alt: 'Salon Interior Styling Stations',
    },
    {
      src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury Shampoo & Treatment Lounge',
    },
    {
      src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80',
      alt: 'Comfortable Waiting Area & Coffee Bar',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20 transition-colors duration-200">
        <div className="container-salon">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-heading mb-4">{t('title')}</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>

          {/* Story Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border text-foreground text-xs font-semibold mb-4">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                ESTABLISHED 2016
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight font-semibold">
                {t('story_title')}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4 text-base">
                {t('story_p1')}
              </p>
              <p className="text-foreground/90 leading-relaxed text-base">
                {t('story_p2')}
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-alternate border border-border">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                alt="Lux Salon Space"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl font-bold">A Haven of Relaxation & Elegance</p>
                <p className="text-xs text-white/80">Bole Road · Addis Ababa</p>
              </div>
            </div>
          </section>

          {/* Photos of the Space */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">The Lux Experience</h2>
              <p className="text-muted text-sm">Designed for serenity, hospitality, and five-star comfort</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {salonPhotos.map((photo, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] group relative bg-alternate border border-border">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                    {photo.alt}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-10">
              {t('values_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: t('value_quality'), desc: t('value_quality_desc') },
                { title: t('value_care'), desc: t('value_care_desc') },
                { title: t('value_expertise'), desc: t('value_expertise_desc') },
                { title: t('value_inclusivity'), desc: t('value_inclusivity_desc') },
              ].map((val) => (
                <div key={val.title} className="card-salon p-6 border-t-4 border-t-accent bg-card border border-border">
                  <CheckCircle2 className="h-6 w-6 text-foreground mb-3" />
                  <h3 className="font-serif text-lg text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Location & Accessibility Info */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Opening Hours */}
            <div className="card-salon p-6 bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-foreground" />
                <h3 className="font-serif text-xl text-foreground">{t('hours_title')}</h3>
              </div>
              <div className="space-y-3 text-sm divide-y divide-border">
                <div className="flex justify-between pt-2">
                  <span className="text-foreground font-medium">Monday – Friday</span>
                  <span className="text-accent font-bold">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-foreground font-medium">Saturday</span>
                  <span className="text-accent font-bold">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-foreground font-medium">Sunday</span>
                  <span className="text-muted font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="card-salon p-6 bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-5 w-5 text-foreground" />
                <h3 className="font-serif text-xl text-foreground">Parking & Access</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <Car className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Dedicated customer parking lot directly in front of the salon entrance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Accessibility className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span>Ground floor entrance with ramp access, fully wheelchair accessible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Complimentary Ethiopian coffee and herbal teas served during appointments.</span>
                </li>
              </ul>
            </div>

            {/* Location & Map Link */}
            <div className="card-salon p-6 flex flex-col justify-between bg-card border border-border">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-foreground" />
                  <h3 className="font-serif text-xl text-foreground">{t('location_title')}</h3>
                </div>
                <p className="text-sm text-foreground font-medium mb-1">{salonConfig.address.street}</p>
                <p className="text-xs text-muted mb-4">{salonConfig.address.city}, {salonConfig.address.country}</p>
                <p className="text-xs text-muted leading-relaxed">
                  Located 2 minutes walking distance from Edna Mall on Bole Road. Easy taxi and minibus drop-off.
                </p>
              </div>
              <a
                href={salonConfig.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-outline-accent rounded-full text-xs font-semibold"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
