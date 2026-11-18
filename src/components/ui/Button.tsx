import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-accent text-[rgb(var(--accent-foreground))] hover:bg-accent-hover shadow-sm',
        accent: 'bg-accent text-[rgb(var(--accent-foreground))] hover:bg-accent-hover shadow-sm',
        copper: 'bg-accent text-[rgb(var(--accent-foreground))] hover:bg-accent-hover shadow-sm',
        outline: 'border border-accent text-accent hover:bg-accent hover:text-[rgb(var(--accent-foreground))]',
        ghost: 'text-foreground hover:bg-alternate',
        plum: 'bg-accent text-[rgb(var(--accent-foreground))] hover:bg-accent-hover',
        'rose-gold': 'bg-accent text-[rgb(var(--accent-foreground))] hover:bg-accent-hover',
        link: 'text-accent underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-4 text-sm',
        default: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
export default Button
