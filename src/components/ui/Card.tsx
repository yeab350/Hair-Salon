import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered'
}

export function Card({ className, variant = 'default', children, ...props }: CardProps) {
  const variantClasses = {
    default: 'bg-card text-card-foreground rounded-2xl shadow-sm border border-border',
    elevated: 'bg-card text-card-foreground rounded-2xl shadow-md border border-border',
    bordered: 'bg-transparent text-card-foreground rounded-2xl border-2 border-border',
  }

  return (
    <div className={cn(variantClasses[variant], 'overflow-hidden', className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-0', className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  )
}

export default Card
