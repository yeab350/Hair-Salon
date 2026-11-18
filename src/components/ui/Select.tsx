'use client'

import { cn } from '@/lib/utils'
import { type SelectHTMLAttributes, forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={id}
            ref={ref}
            className={cn(
              'w-full px-4 py-2.5 pr-10 rounded-lg border bg-card text-foreground appearance-none',
              'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
              'transition-colors duration-150',
              error ? 'border-red-500' : 'border-border',
              className
            )}
            {...props}
          >
            {placeholder && <option value="" className="bg-card text-foreground">{placeholder}</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-card text-foreground">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" />
        </div>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
