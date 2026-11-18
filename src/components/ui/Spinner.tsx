import { cn } from '@/lib/utils'

interface SpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Spinner({ className, size = 'md' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-4',
  }

  return (
    <div
      className={cn(
        'rounded-full border-border border-t-accent animate-spin',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  )
}

export function LoadingOverlay({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <Spinner size="lg" />
      {message && <p className="text-muted text-sm">{message}</p>}
    </div>
  )
}

export default Spinner
