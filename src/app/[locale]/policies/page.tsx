import { useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import { Shield, Clock, Users, HeartPulse, RefreshCw } from 'lucide-react'

export default function PoliciesPage() {
  const t = useTranslations('policies')

  const sections = [
    { title: t('cancellation_title'), body: t('cancellation_body'), icon: Clock },
    { title: t('arrival_title'), body: t('arrival_body'), icon: Shield },
    { title: t('children_title'), body: t('children_body'), icon: Users },
    { title: t('health_title'), body: t('health_body'), icon: HeartPulse },
    { title: t('refund_title'), body: t('refund_body'), icon: RefreshCw },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20 transition-colors duration-200">
        <div className="container-salon max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold mb-4">
              <Shield className="h-3.5 w-3.5" />
              PEACE OF MIND
            </div>
            <h1 className="section-heading mb-4">{t('title')}</h1>
            <p className="text-muted text-lg">{t('subtitle')}</p>
          </div>

          <div className="space-y-6">
            {sections.map(({ title, body, icon: Icon }) => (
              <div key={title} className="card-salon p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-serif text-charcoal">{title}</h2>
                </div>
                <p className="text-charcoal-light leading-relaxed text-sm pl-13">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
