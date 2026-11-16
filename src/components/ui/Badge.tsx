import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'plum' | 'rose-gold' | 'muted' | 'success' | 'warning' | 'error'
}

export function Badge({ className, variant = 'gold', children, ...props }: BadgeProps) {
  const variantClasses = {
    gold: 'bg-gold/10 text-gold border-gold/20',
    plum: 'bg-plum/10 text-plum dark:text-gold border-plum/20',
    'rose-gold': 'bg-rose-gold/10 text-rose-gold border-rose-gold/20',
    muted: 'bg-muted/10 text-muted border-muted/20',
    success: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800/40',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-300 dark:border-yellow-800/40',
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
