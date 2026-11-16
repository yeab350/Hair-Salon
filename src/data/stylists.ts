export interface WorkingHours {
  start: string
  end: string
  breakStart?: string
  breakEnd?: string
}

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export interface Stylist {
  id: string
  name: string
  nameAm: string
  photo: string
  role: string
  roleAm: string
  specialties: string[]
  specialtiesAm: string[]
  bio: string
  bioAm: string
  yearsExperience: number
  rating: number
  reviewCount: number
  serviceIds: string[]
  workingHours: Partial<Record<DayOfWeek, WorkingHours | null>>
  daysOff: string[]
  portfolio: string[]
  instagram?: string
  featured: boolean
}

export const stylists: Stylist[] = [
  {
    id: 'sty-001',
    name: 'Hiwot Tadesse',
    nameAm: 'ሕይወት ታደሰ',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    role: 'Senior Stylist & Braiding Specialist',
    roleAm: 'ከፍተኛ አስጌጥ እና የብሬዲንግ ስፔሻሊስት',
    specialties: ['Box Braids', 'Knotless Braids', 'Locs', 'Natural Hair'],
    specialtiesAm: ['ቦክስ ብሬዲንግ', 'ኖቴሌስ ብሬዲንግ', 'ሎክስ', 'ተፈጥሯዊ ፀጉር'],
    bio: 'Hiwot has been crafting beautiful braids and natural styles for over 8 years. Known for her meticulous attention to detail and gentle touch, she specializes in protective styles that promote hair health.',
    bioAm: 'ሕይወት ለ8 ዓመታት በላይ ቆንጆ ብሬዲንጎች እና ተፈጥሯዊ ስታይሎችን ሲሠሩ ቆይተዋል። ዝርዝር ትኩረት እና ለስላሳ ንካ በሚታወቁ ሕይወት ፀጉር ጤናን የሚያሳድጉ ጥበቃ ስታይሎች ላይ ስፔሻሊስት ናቸው።',
    yearsExperience: 8,
    rating: 4.9,
    reviewCount: 247,
    serviceIds: ['svc-001', 'svc-002', 'svc-004', 'svc-005', 'svc-006', 'svc-009', 'svc-011', 'svc-014'],
    workingHours: {
      monday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      tuesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      wednesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      thursday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      friday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      saturday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      sunday: null,
    },
    daysOff: [],
    portfolio: [
      '/images/portfolio/hiwot-1.jpg',
      '/images/portfolio/hiwot-2.jpg',
      '/images/portfolio/hiwot-3.jpg',
      '/images/portfolio/hiwot-4.jpg',
    ],
    instagram: '@hiwot.braids',
    featured: true,
  },
  {
    id: 'sty-002',
    name: 'Meron Alemu',
    nameAm: 'ሜሮን አለሙ',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    role: 'Color Specialist & Bridal Stylist',
    roleAm: 'የቀለም ስፔሻሊስት እና የሙሽሪት አስጌጥ',
    specialties: ['Balayage', 'Full Color', 'Highlights', 'Bridal Styling'],
    specialtiesAm: ['ባላያጅ', 'ሙሉ ቀለም', 'ሃይላይቶች', 'የሙሽሪት ስታይሊንግ'],
    bio: 'Meron trained in Paris and brings international color techniques to Addis Ababa. Her balayage and highlights work is second to none, and her bridal styling has graced hundreds of weddings.',
    bioAm: 'ሜሮን በፓሪስ ሥልጠና ወስደው ዓለም አቀፍ የቀለም ቴክኒኮችን ወደ አዲስ አበባ ያመጡ ናቸው። ባላያጅ እና ሃይላይቶቻቸው ወደር የሌለው ሲሆን የሙሽሪት ስታይሊንጋቸው በሳምንታት ብዙ ሠርጎችን አስዉቧል።',
    yearsExperience: 11,
    rating: 4.8,
    reviewCount: 183,
    serviceIds: ['svc-001', 'svc-002', 'svc-006', 'svc-007', 'svc-008', 'svc-009', 'svc-010', 'svc-011', 'svc-012'],
    workingHours: {
      monday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      tuesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      wednesday: null,
      thursday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      friday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      saturday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      sunday: null,
    },
    daysOff: [],
    portfolio: [
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    ],
    instagram: '@meron.colorist',
    featured: true,
  },
  {
    id: 'sty-003',
    name: 'Tigist Bekele',
    nameAm: 'ትግስት በቀለ',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    role: 'Natural Hair Specialist',
    roleAm: 'የተፈጥሯዊ ፀጉር ስፔሻሊስት',
    specialties: ['Natural Styles', 'Protective Styles', 'Kids Hair', 'Twist Out'],
    specialtiesAm: ['ተፈጥሯዊ ስታይሎች', 'ጥበቃ ስታይሎች', 'የልጆች ፀጉር', 'ትዊስት አውት'],
    bio: 'Tigist is passionate about celebrating natural hair textures. She works with all curl patterns and specializes in creating styles that are both beautiful and protective.',
    bioAm: 'ትግስት ተፈጥሯዊ ፀጉር ቅርፆችን ለማክበር ጉጉት አላቸው። ሁሉንም የሉፕ ቅርፆች ይሠሩ እና ቆንጆ እና ጥበቃ የሆኑ ስታይሎችን ለመፍጠር ስፔሻሊስት ናቸው።',
    yearsExperience: 6,
    rating: 4.7,
    reviewCount: 129,
    serviceIds: ['svc-001', 'svc-002', 'svc-004', 'svc-005', 'svc-006', 'svc-009', 'svc-012', 'svc-013', 'svc-014'],
    workingHours: {
      monday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      tuesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      wednesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      thursday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      friday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      saturday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      sunday: null,
    },
    daysOff: [],
    portfolio: [
      'https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?auto=format&fit=crop&w=600&q=80',
    ],
    featured: true,
  },
  {
    id: 'sty-004',
    name: 'Dawit Girma',
    nameAm: 'ዳዊት ግርማ',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    role: "Men's Grooming Expert",
    roleAm: 'የወንዶች ደምብ ባለሙያ',
    specialties: ["Men's Cuts", 'Fades', 'Keratin Treatment', 'Color'],
    specialtiesAm: ["የወንዶች ቁረጣ", 'ፌይዶች', 'ኬራቲን ሕክምና', 'ቀለም'],
    bio: 'Dawit is the go-to stylist for men who want sharp, clean cuts. His fade techniques are legendary in Addis Ababa, and he is also trained in advanced color and chemical treatments.',
    bioAm: 'ዳዊት ሹል፣ ንፁህ ቁረጣ ለሚፈልጉ ወንዶች ምርጥ አስጌጥ ናቸው። በአዲስ አበባ ፌይድ ቴክኒኮቻቸው ታዋቂ ሲሆን ላቅ ባሉ ቀለም እና ኬሚካል ሕክምናዎች ላይ ሥልጠናም ወስደዋል።',
    yearsExperience: 7,
    rating: 4.8,
    reviewCount: 198,
    serviceIds: ['svc-003', 'svc-007', 'svc-009', 'svc-010'],
    workingHours: {
      monday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      tuesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      wednesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      thursday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      friday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      saturday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      sunday: null,
    },
    daysOff: [],
    portfolio: [
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
    ],
    featured: false,
  },
  {
    id: 'sty-005',
    name: 'Bethlehem Yosef',
    nameAm: 'ቤተልሔም ዮሴፍ',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    role: 'Junior Stylist',
    roleAm: 'ጁኒዮር አስጌጥ',
    specialties: ["Kids' Cuts", "Men's Cuts", 'Wash & Style', 'Treatments'],
    specialtiesAm: ['የልጆች ቁረጣ', 'የወንዶች ቁረጣ', 'ማጠብ እና ስታይሊንግ', 'ሕክምናዎች'],
    bio: 'Bethlehem joined Lux Salon after completing her cosmetology certification and quickly became a client favourite for her warm personality and careful work.',
    bioAm: 'ቤተልሔም የኮዝሞቶሎጂ ሰርቲፊኬሽን ካጠናቀቁ በኋላ ሉክስ ሳሎን ተቀላቀሉ እና ሞቅ ያለ ስብዕናቸው እና ጥንቃቄ ሞሉ ሥራቸው ብዙ ደምበኞች ምርጥ አደረጓቸው።',
    yearsExperience: 2,
    rating: 4.6,
    reviewCount: 64,
    serviceIds: ['svc-002', 'svc-003', 'svc-009', 'svc-013'],
    workingHours: {
      monday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      tuesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      wednesday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      thursday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      friday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      saturday: { start: '09:00', end: '18:00', breakStart: '13:00', breakEnd: '14:00' },
      sunday: null,
    },
    daysOff: [],
    portfolio: [
      '/images/portfolio/bethlehem-1.jpg',
    ],
    featured: false,
  },
]

export default stylists
