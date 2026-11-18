import { useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import { HelpCircle, ChevronDown } from 'lucide-react'

export default function FAQPage() {
  const t = useTranslations('faq')

  const faqs = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    q: t(`q${n}` as any),
    a: t(`a${n}` as any),
  }))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20 transition-colors duration-200">
        <div className="container-salon max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              HELP CENTER
            </div>
            <h1 className="section-heading mb-4">{t('title')}</h1>
            <p className="text-muted text-lg">{t('subtitle')}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="card-salon p-6 group transition-all duration-200 open:shadow-md cursor-pointer border border-border bg-card"
              >
                <summary className="font-serif text-lg text-foreground cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.q}</span>
                  <div className="h-8 w-8 rounded-full bg-alternate flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform duration-200">
                    <ChevronDown className="h-4 w-4 text-foreground" />
                  </div>
                </summary>
                <p className="text-foreground/90 mt-4 pt-4 border-t border-border leading-relaxed text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
