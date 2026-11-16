import { useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import StylistGrid from '@/components/team/StylistGrid'

export default function TeamPage() {
  const t = useTranslations('team')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20 transition-colors duration-200">
        <div className="container-salon">
          <div className="text-center mb-14">
            <h1 className="section-heading mb-4">{t('title')}</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
          <StylistGrid />
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
