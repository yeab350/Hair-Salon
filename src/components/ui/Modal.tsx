'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Modal({ isOpen, onClose, title, children, className, size = 'md' }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        className={cn(
          'bg-card text-card-foreground border border-border rounded-2xl shadow-xl w-full relative animate-slide-up',
          sizeClasses[size],
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between p-6 pb-0">
            <h2 className="text-xl font-serif text-foreground">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted-bg transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-muted hover:text-foreground" />
            </button>
          </div>
        )}
        {!title && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted-bg transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-muted hover:text-foreground" />
          </button>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal
