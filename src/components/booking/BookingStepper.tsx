'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Check, Scissors, User, Calendar, FileText, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import BookingStepService from './BookingStepService'
import BookingStepStylist from './BookingStepStylist'
import BookingStepDateTime from './BookingStepDateTime'
import BookingStepDetails from './BookingStepDetails'
import BookingStepReview from './BookingStepReview'
import BookingConfirmation from './BookingConfirmation'
import BookingSummaryCard from './BookingSummaryCard'
import { services } from '@/data/services'
import { stylists } from '@/data/stylists'
import type { Service } from '@/data/services'

export type BookingStep = 'service' | 'stylist' | 'datetime' | 'details' | 'review' | 'confirmation'

export interface BookingState {
  selectedServices: Service[]
  selectedStylistId: string | null
  selectedDate: Date | null
  selectedTime: string | null
  clientName: string
  clientPhone: string
  clientEmail: string
  notes: string
  bookingRef: string | null
}

const STEPS: { id: BookingStep; icon: any }[] = [
  { id: 'service', icon: Scissors },
  { id: 'stylist', icon: User },
  { id: 'datetime', icon: Calendar },
  { id: 'details', icon: FileText },
  { id: 'review', icon: CheckCircle2 },
]

export default function BookingStepper() {
  const t = useTranslations('booking')
  const searchParams = useSearchParams()

  const [currentStep, setCurrentStep] = useState<BookingStep>('service')
  const [bookingState, setBookingState] = useState<BookingState>({
    selectedServices: [],
    selectedStylistId: null,
    selectedDate: null,
    selectedTime: null,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    notes: '',
    bookingRef: null,
  })

  // Detect URL query parameters: ?service=svc-004 or ?stylist=sty-001
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    const stylistParam = searchParams.get('stylist')

    if (serviceParam) {
      const foundService = services.find((s) => s.id === serviceParam)
      if (foundService) {
        setBookingState((prev) => ({
          ...prev,
          selectedServices: [foundService],
        }))
      }
    }

    if (stylistParam) {
      const foundStylist = stylists.find((s) => s.id === stylistParam)
      if (foundStylist) {
        setBookingState((prev) => ({
          ...prev,
          selectedStylistId: foundStylist.id,
        }))
      }
    }
  }, [searchParams])

  const updateBooking = (updates: Partial<BookingState>) => {
    setBookingState((prev) => ({ ...prev, ...updates }))
  }

  const stepIndex = STEPS.findIndex((s) => s.id === currentStep)

  const goToStep = (step: BookingStep) => {
    window.scrollTo({ top: 120, behavior: 'smooth' })
    setCurrentStep(step)
  }

  if (currentStep === 'confirmation') {
    return <BookingConfirmation bookingState={bookingState} />
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main wizard step content */}
      <div className="lg:col-span-2">
        {/* Step indicator header */}
        <div className="flex items-center gap-0 mb-8 card-salon p-4 md:p-6 shadow-sm border border-border">
          {STEPS.map((stepObj, idx) => {
            const Icon = stepObj.icon
            const isCompleted = idx < stepIndex
            const isCurrent = idx === stepIndex

            return (
              <div key={stepObj.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center mx-auto">
                  <div
                    className={cn(
                      'flex items-center justify-center h-10 w-10 rounded-full border-2 text-sm font-semibold transition-all duration-300',
                      isCompleted
                        ? 'bg-accent border-accent text-[rgb(var(--accent-foreground))] shadow-sm'
                        : isCurrent
                        ? 'bg-accent border-accent text-[rgb(var(--accent-foreground))] shadow-md scale-110'
                        : 'bg-card border-border text-muted'
                    )}
                  >
                    {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-4 w-4" />}
                  </div>
                  <span
                    className={cn(
                      'text-xs mt-2 font-medium transition-colors hidden sm:block',
                      isCurrent ? 'text-accent font-bold' : isCompleted ? 'text-foreground' : 'text-muted'
                    )}
                  >
                    {t(`steps.${stepObj.id}`)}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className={cn(
                      'h-0.5 flex-1 mx-2 transition-colors duration-300',
                      idx < stepIndex ? 'bg-accent' : 'bg-border'
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Step Panels */}
        <div className="card-salon p-6 md:p-8 shadow-sm border border-border">
          {currentStep === 'service' && (
            <BookingStepService
              bookingState={bookingState}
              updateBooking={updateBooking}
              onNext={() => goToStep('stylist')}
            />
          )}
          {currentStep === 'stylist' && (
            <BookingStepStylist
              bookingState={bookingState}
              updateBooking={updateBooking}
              onNext={() => goToStep('datetime')}
              onBack={() => goToStep('service')}
            />
          )}
          {currentStep === 'datetime' && (
            <BookingStepDateTime
              bookingState={bookingState}
              updateBooking={updateBooking}
              onNext={() => goToStep('details')}
              onBack={() => goToStep('stylist')}
            />
          )}
          {currentStep === 'details' && (
            <BookingStepDetails
              bookingState={bookingState}
              updateBooking={updateBooking}
              onNext={() => goToStep('review')}
              onBack={() => goToStep('datetime')}
            />
          )}
          {currentStep === 'review' && (
            <BookingStepReview
              bookingState={bookingState}
              onConfirm={() => goToStep('confirmation')}
              onBack={() => goToStep('details')}
              updateBooking={updateBooking}
            />
          )}
        </div>
      </div>

      {/* Live sticky summary card */}
      <div className="lg:col-span-1">
        <BookingSummaryCard bookingState={bookingState} />
      </div>
    </div>
  )
}
