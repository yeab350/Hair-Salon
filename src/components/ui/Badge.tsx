import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'copper' | 'gold' | 'plum' | 'rose-gold' | 'muted' | 'success' | 'warning' | 'error'
}

export function Badge({ className, variant = 'accent', children, ...props }: BadgeProps) {
  const variantClasses = {
    accent: 'bg-accent/15 text-accent border-accent/30',
    copper: 'bg-accent/15 text-accent border-accent/30',
    gold: 'bg-accent/15 text-accent border-accent/30',
    plum: 'bg-accent/15 text-accent border-accent/30',
    'rose-gold': 'bg-accent/15 text-accent border-accent/30',
    muted: 'bg-muted/15 text-muted border-border',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40',
    warning: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40',
    error: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/40',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
