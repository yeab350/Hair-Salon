export type ServiceCategory =
  | 'womens-cuts'
  | 'mens-cuts'
  | 'braids-twists'
  | 'color'
  | 'treatments'
  | 'bridal'
  | 'kids'

export interface LocalizedString {
  en: string
  am: string
}

export interface Service {
  id: string
  name: LocalizedString
  category: ServiceCategory
  description: LocalizedString
  price: number
  priceNote?: LocalizedString
  duration: number
  image: string
  stylistIds: string[]
  featured: boolean
  tags?: string[]
}

export const serviceCategories: { id: ServiceCategory; label: LocalizedString }[] = [
  { id: 'womens-cuts', label: { en: "Women's Cuts", am: 'የሴቶች ፀጉር ቁረጣ' } },
  { id: 'mens-cuts', label: { en: "Men's Cuts", am: 'የወንዶች ፀጉር ቁረጣ' } },
  { id: 'braids-twists', label: { en: 'Braids & Twists', am: 'ብሬዲንግ እና ትዊስት' } },
  { id: 'color', label: { en: 'Color & Highlights', am: 'ቀለም እና ሃይላይት' } },
  { id: 'treatments', label: { en: 'Treatments', am: 'ሕክምናዎች' } },
  { id: 'bridal', label: { en: 'Bridal', am: 'የሙሽሪት አዘጋጅ' } },
  { id: 'kids', label: { en: "Kids'", am: 'የልጆች' } },
]

export const services: Service[] = [
  {
    id: 'svc-001',
    name: { en: 'Classic Cut & Style', am: 'ክላሲክ ቁረጣ እና ስታይሊንግ' },
    category: 'womens-cuts',
    description: {
      en: 'Precision cut tailored to your face shape, finished with a professional blow-dry and style.',
      am: 'ለፊትዎ ቅርፅ የተዘጋጀ ትክክለኛ ቁረጣ፣ ፕሮፌሽናል ብሎ-ድራይ እና ስታይሊንግ ጨምሮ።',
    },
    price: 350,
    duration: 60,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-002', 'sty-003'],
    featured: true,
  },
  {
    id: 'svc-002',
    name: { en: 'Cut, Wash & Blow-Dry', am: 'ቁረጣ፣ ማጠብ እና ብሎ-ድራይ' },
    category: 'womens-cuts',
    description: {
      en: 'Full service including shampoo, conditioning treatment, precision cut and professional blow-dry.',
      am: 'ሻምፑ፣ ኮንዲሽኒንግ፣ ቁረጣ እና ፕሮፌሽናል ብሎ-ድራይ ጨምሮ ሙሉ አገልግሎት።',
    },
    price: 500,
    duration: 90,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-002', 'sty-003', 'sty-004'],
    featured: false,
  },
  {
    id: 'svc-003',
    name: { en: "Men's Cut & Fade", am: 'የወንዶች ቁረጣ እና ፌይድ' },
    category: 'mens-cuts',
    description: {
      en: 'Sharp fade with detailed clipper work, finished with a hot towel and style.',
      am: 'ሙቅ ፎጣ እና ስታይሊንግ ጨምሮ ሹል ፌይድ እና ዝርዝር ክሊፐር ሥራ።',
    },
    price: 250,
    duration: 45,
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-004', 'sty-005'],
    featured: false,
  },
  {
    id: 'svc-004',
    name: { en: 'Box Braids', am: 'ቦክስ ብሬዲንግ' },
    category: 'braids-twists',
    description: {
      en: 'Classic box braids in your preferred length and thickness. Protective style that lasts 6-8 weeks.',
      am: 'በሚፈልጉት ርዝመት እና ወፍራምነት ክላሲክ ቦክስ ብሬዲንግ። ለ6-8 ሳምንታት የሚቆይ ጥበቃ ስታይል።',
    },
    price: 1200,
    priceNote: { en: 'Price varies by length', am: 'ዋጋ በርዝመት ይለያያል' },
    duration: 240,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-003'],
    featured: true,
    tags: ['protective'],
  },
  {
    id: 'svc-005',
    name: { en: 'Knotless Braids', am: 'ኖቴሌስ ብሬዲንግ' },
    category: 'braids-twists',
    description: {
      en: 'Pain-free knotless braids that start with your natural hair for a more natural look at the roots.',
      am: 'ሥሩ ላይ የበለጠ ተፈጥሯዊ ቅርፅ ለማግኘት ከተፈጥሯዊ ፀጉርዎ የሚጀምር ምቹ ኖቴሌስ ብሬዲንግ።',
    },
    price: 1800,
    priceNote: { en: 'Starting price, varies by length', am: 'ጀምሮ፣ በርዝመት ይለያያል' },
    duration: 300,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-003'],
    featured: true,
    tags: ['protective'],
  },
  {
    id: 'svc-006',
    name: { en: 'Locs & Twists', am: 'ሎክስ እና ትዊስት' },
    category: 'braids-twists',
    description: {
      en: 'Two-strand twists or starter locs. Consultation included to find the best style for your hair type.',
      am: 'ሁለት-ክር ትዊስት ወይም ስታርተር ሎክስ። ለፀጉርዎ ዓይነት ምርጥ ስታይሉን ለማወቅ ምክር ያካትታል።',
    },
    price: 800,
    duration: 180,
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-002'],
    featured: false,
    tags: ['protective'],
  },
  {
    id: 'svc-007',
    name: { en: 'Full Color', am: 'ሙሉ ቀለም' },
    category: 'color',
    description: {
      en: 'Full head color transformation using premium ammonia-free dyes. Includes toner and style.',
      am: 'ፕሪሚየም አሞኒያ-ፍሪ ቀለሞች የሚጠቀም ሙሉ ፀጉር ቀለም ለውጥ። ቶነር እና ስታይሊንግ ያካትታል።',
    },
    price: 1500,
    priceNote: { en: 'Price depends on hair length', am: 'ዋጋ በፀጉር ርዝመት ይወሰናል' },
    duration: 150,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-002', 'sty-004'],
    featured: false,
  },
  {
    id: 'svc-008',
    name: { en: 'Highlights & Balayage', am: 'ሃይላይት እና ባላያጅ' },
    category: 'color',
    description: {
      en: 'Sun-kissed highlights or balayage technique for a natural, dimensional look.',
      am: 'ተፈጥሯዊ፣ ልኬታዊ ቅርፅ ለማግኘት ሰን-ኪስ ሃይላይቶች ወይም ባላያጅ ቴክኒክ።',
    },
    price: 2000,
    priceNote: { en: 'Starting price, varies by technique', am: 'ጀምሮ ዋጋ፣ በቴክኒክ ይለያያል' },
    duration: 180,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-002'],
    featured: true,
  },
  {
    id: 'svc-009',
    name: { en: 'Deep Conditioning Treatment', am: 'ጥልቅ ኮንዲሽኒንግ ሕክምና' },
    category: 'treatments',
    description: {
      en: 'Intensive moisture treatment to restore hydration, strength, and shine to damaged or dry hair.',
      am: 'ለተጎዳ ወይም ደረቅ ፀጉር እርጥበት፣ ጥንካሬ እና ብሩህነትን ወደ ቀድሞ ሁኔታ ለማምጣት ጥልቅ እርጥበት ሕክምና።',
    },
    price: 450,
    duration: 60,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-002', 'sty-003', 'sty-004', 'sty-005'],
    featured: false,
  },
  {
    id: 'svc-010',
    name: { en: 'Keratin Treatment', am: 'ኬራቲን ሕክምና' },
    category: 'treatments',
    description: {
      en: 'Brazilian keratin smoothing treatment to eliminate frizz, add shine and reduce styling time for 3-5 months.',
      am: 'ለ3-5 ወራት ፍሪዝ ለማስወገድ፣ ብሩህነት ለመጨመር እና የስታይሊንግ ጊዜ ለመቀነስ ብራዚሊያን ኬራቲን ሕክምና።',
    },
    price: 2500,
    duration: 180,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-002', 'sty-004'],
    featured: true,
  },
  {
    id: 'svc-011',
    name: { en: 'Bridal Hair Styling', am: 'የሙሽሪት ፀጉር ስታይሊንግ' },
    category: 'bridal',
    description: {
      en: 'Complete bridal styling including trial run, day-of styling, and hair accessories consultation.',
      am: 'ሙከራ፣ ዕለቱ ስታይሊንግ፣ እና የፀጉር መዳፊያ ምክር ጨምሮ ሙሉ የሙሽሪት ስታይሊንግ።',
    },
    price: 3500,
    priceNote: { en: 'Includes trial session', am: 'ሙከራ ክፍለ ጊዜ ያካትታል' },
    duration: 240,
    image: 'https://images.unsplash.com/photo-1588514912908-1616781260ec?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-002'],
    featured: true,
  },
  {
    id: 'svc-012',
    name: { en: 'Bridal Party Package', am: 'የሙሽሪት ቡድን ፓኬጅ' },
    category: 'bridal',
    description: {
      en: 'Group styling for bridesmaids and family. Minimum 4 people. Includes consultation.',
      am: 'ለሙሽሪት እህቶች እና ቤተሰብ የቡድን ስታይሊንግ። ቢያንስ 4 ሰዎች። ምክር ያካትታል።',
    },
    price: 2800,
    priceNote: { en: 'Per person, minimum 4 people', am: 'በሰው፣ ቢያንስ 4 ሰዎች' },
    duration: 90,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-002', 'sty-003'],
    featured: false,
  },
  {
    id: 'svc-013',
    name: { en: "Kids' Cut (Under 12)", am: 'የልጆች ቁረጣ (12 ዓመት በታች)' },
    category: 'kids',
    description: {
      en: "Gentle and fun haircut experience for children under 12. Patient stylists who make kids feel comfortable.",
      am: 'ለ12 ዓመት በታች ልጆች ምቹ እና አዝናኝ የፀጉር ቁረጣ ልምድ። ልጆቹን ምቹ የሚያደርጉ ታጋሽ አስጌጦች።',
    },
    price: 200,
    duration: 30,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-003', 'sty-005'],
    featured: false,
  },
  {
    id: 'svc-014',
    name: { en: 'Wash & Go Style', am: 'ማጠብ እና ስታይሊንግ' },
    category: 'womens-cuts',
    description: {
      en: 'Enhance your natural curl pattern with a wash, deep condition, and define your curls.',
      am: 'ማጠብ፣ ጥልቅ ኮንዲሽኒንግ እና ሉፕዎቻቸው ፍሬዝ ለማድረግ ተፈጥሯዊ ሉፕ ቅርፅዎን ያሻሽሉ።',
    },
    price: 650,
    duration: 90,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    stylistIds: ['sty-001', 'sty-003'],
    featured: false,
  },
]

export default services
