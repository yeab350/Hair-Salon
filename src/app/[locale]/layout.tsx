import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n'
import { salonConfig } from '@/config/salon'
import ThemeProvider from '@/components/theme/ThemeProvider'
import '../globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const isAm = locale === 'am'
  const title = isAm ? `${salonConfig.salonName} — ${salonConfig.taglineAm}` : salonConfig.seo.title
  const description = isAm ? salonConfig.descriptionAm : salonConfig.seo.description

  return {
    title,
    description,
    metadataBase: new URL('https://luxsalon.et'),
    keywords: [...salonConfig.seo.keywords],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isAm ? 'am_ET' : 'en_US',
      siteName: salonConfig.salonName,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
          width: 1200,
          height: 630,
          alt: salonConfig.salonName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'am')) {
    notFound()
  }

  const messages = await getMessages()

  // LocalBusiness schema for rich search results (SEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: salonConfig.salonName,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    '@id': 'https://luxsalon.et',
    url: 'https://luxsalon.et',
    telephone: salonConfig.contact.phone,
    priceRange: '200 ETB - 3500 ETB',
    address: {
      '@type': 'PostalAddress',
      streetAddress: salonConfig.address.street,
      addressLocality: salonConfig.address.city,
      addressRegion: salonConfig.address.region,
      postalCode: salonConfig.address.postalCode,
      addressCountry: 'ET',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: salonConfig.address.coordinates.lat,
      longitude: salonConfig.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Inter:wght@300..800&family=Noto+Sans+Ethiopic:wght@300..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent/20 selection:text-accent transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
