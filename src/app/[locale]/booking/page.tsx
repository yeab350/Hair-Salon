'use client'

import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import BookingStepper from '@/components/booking/BookingStepper'
import Skeleton from '@/components/ui/Skeleton'

export default function BookingPage() {
  const t = useTranslations('booking')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20 transition-colors duration-200">
        <div className="container-salon max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="section-heading mb-3">{t('title')}</h1>
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto">{t('subtitle')}</p>
          </div>
          <Suspense
            fallback={
              <div className="card-salon p-8 text-center space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-64 w-full" />
              </div>
            }
          >
            <BookingStepper />
          </Suspense>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
