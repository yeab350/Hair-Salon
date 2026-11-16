export const salonConfig = {
  salonName: 'Lux Salon',
  tagline: 'Where Beauty Meets Elegance',
  taglineAm: 'ውበት ከብስለት ጋር የሚገናኝበት ቦታ',
  description:
    'Premium hair salon in the heart of Addis Ababa, offering exceptional styling, braiding, coloring, and treatments for all hair types.',
  descriptionAm:
    'በአዲስ አበባ ልብ ውስጥ የሚገኝ ምርጥ የፀጉር ሳሎን፣ ለሁሉም የፀጉር ዓይነቶች ልዩ ስታይሊንግ፣ ብሬዲንግ፣ ቀለም እና ሕክምና ያቀርባል።',
  logo: '/images/placeholder-logo.svg',

  contact: {
    phone: '+251 911 234 567',
    whatsapp: '+251911234567',
    email: 'hello@luxsalon.et',
    instagram: '@luxsalon.et',
    facebook: 'luxsalonet',
    tiktok: '@luxsalonet',
    telegram: '@luxsalonet',
  },

  address: {
    street: 'Bole Road, Near Edna Mall',
    city: 'Addis Ababa',
    region: 'Addis Ababa',
    country: 'Ethiopia',
    postalCode: '1000',
    mapUrl: 'https://maps.google.com/?q=Bole+Road+Addis+Ababa',
    coordinates: { lat: 8.9981, lng: 38.7919 },
  },

  hours: {
    monday: { open: '09:00', close: '18:00', isOpen: true },
    tuesday: { open: '09:00', close: '18:00', isOpen: true },
    wednesday: { open: '09:00', close: '18:00', isOpen: true },
    thursday: { open: '09:00', close: '18:00', isOpen: true },
    friday: { open: '09:00', close: '18:00', isOpen: true },
    saturday: { open: '09:00', close: '18:00', isOpen: true },
    sunday: { open: '10:00', close: '15:00', isOpen: false },
  },

  social: {
    instagram: 'https://instagram.com/luxsalon.et',
    facebook: 'https://facebook.com/luxsalonet',
    tiktok: 'https://tiktok.com/@luxsalonet',
    telegram: 'https://t.me/luxsalonet',
    youtube: 'https://youtube.com/@luxsalonet',
  },

  currency: 'ETB' as const,
  currencySymbol: 'ብር',
  timezone: 'Africa/Addis_Ababa',

  locales: {
    default: 'en' as const,
    supported: ['en', 'am'] as const,
  },

  booking: {
    advanceBookingDays: 60,
    minAdvanceHours: 2,
    maxServicesPerBooking: 4,
    slotIntervalMinutes: 30,
    cancellationHours: 24,
  },

  features: {
    onlineBooking: true,
    ethiopianCalendar: true,
    whatsappIntegration: true,
    adminDashboard: true,
    multiLanguage: true,
    darkMode: true,
    giftCards: false,
    membershipProgram: false,
    onlinePayment: false,
  },

  colors: {
    primary: '#C9A84C',
    secondary: '#3D1A3E',
    accent: '#B76E79',
    background: '#FAF7F2',
    text: '#2C2C2C',
  },

  seo: {
    title: 'Lux Salon — Premium Hair Salon in Addis Ababa',
    description:
      'Book your appointment at Lux Salon, Addis Ababa\'s premier hair destination for cuts, braids, color, and treatments.',
    keywords: [
      'hair salon Addis Ababa',
      'braids Ethiopia',
      'hair styling Ethiopia',
      'የፀጉር ሳሎን',
      'book appointment',
    ],
    ogImage: '/images/og-image.jpg',
  },
} as const

export type SalonConfig = typeof salonConfig
