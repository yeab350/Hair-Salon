import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 font-sans">
      <div className="text-center">
        <div className="text-8xl font-serif text-gold mb-6">404</div>
        <h1 className="text-3xl font-serif text-charcoal mb-4">Page Not Found</h1>
        <p className="text-muted mb-8 max-w-md">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 btn-gold rounded-full text-sm font-semibold"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  )
}

