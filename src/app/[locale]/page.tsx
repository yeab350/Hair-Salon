import { useTranslations } from 'next-intl'
import HomeHero from '@/components/home/HomeHero'
import HomeFeatures from '@/components/home/HomeFeatures'
import HomeFeaturedStyles from '@/components/home/HomeFeaturedStyles'
import HomeStylists from '@/components/home/HomeStylists'
import HomeGallery from '@/components/home/HomeGallery'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import HomeCTA from '@/components/home/HomeCTA'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeFeaturedStyles />
        <HomeStylists />
        <HomeGallery />
        <HomeTestimonials />
        <HomeCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
