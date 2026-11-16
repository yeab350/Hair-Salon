export type GalleryCategory = 'braids' | 'color' | 'cuts' | 'bridal' | 'treatments' | 'mens'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  altAm: string
  category: GalleryCategory
  stylistId: string
  featured: boolean
  tags?: string[]
}

export const galleryCategories: { id: GalleryCategory; label: string; labelAm: string }[] = [
  { id: 'braids', label: 'Braids & Twists', labelAm: 'ብሬዲንግ እና ትዊስት' },
  { id: 'color', label: 'Color & Highlights', labelAm: 'ቀለም እና ሃይላይት' },
  { id: 'cuts', label: "Women's Cuts", labelAm: 'የሴቶች ቁረጣ' },
  { id: 'bridal', label: 'Bridal', labelAm: 'ሙሽሪት' },
  { id: 'treatments', label: 'Treatments', labelAm: 'ሕክምናዎች' },
  { id: 'mens', label: "Men's Grooming", labelAm: 'የወንዶች ደምብ' },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-001',
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    alt: 'Waist-length knotless braids',
    altAm: 'ወደ ወገብ የሚደርስ ኖቴሌስ ብሬዲንግ',
    category: 'braids',
    stylistId: 'sty-001',
    featured: true,
    tags: ['knotless', 'long', 'protective'],
  },
  {
    id: 'gal-002',
    src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    alt: 'Brunette balayage on dark hair',
    altAm: 'ጨለማ ፀጉር ላይ ብሩኔት ባላያጅ',
    category: 'color',
    stylistId: 'sty-002',
    featured: true,
    tags: ['balayage', 'brunette', 'highlights'],
  },
  {
    id: 'gal-003',
    src: 'https://images.unsplash.com/photo-1588514912908-1616781260ec?auto=format&fit=crop&w=800&q=80',
    alt: 'Elegant bridal updo with accessories',
    altAm: 'ያሸበረቀ የሙሽሪት የላይ ፀጉር ስታይሊንግ',
    category: 'bridal',
    stylistId: 'sty-002',
    featured: true,
    tags: ['bridal', 'updo', 'elegant'],
  },
  {
    id: 'gal-004',
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    alt: 'Shoulder-length box braids',
    altAm: 'ትካሻ ርዝመት ቦክስ ብሬዲንግ',
    category: 'braids',
    stylistId: 'sty-001',
    featured: false,
    tags: ['box-braids', 'medium-length'],
  },
  {
    id: 'gal-005',
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    alt: 'Sharp skin fade with line up',
    altAm: 'ሹል ስኪን ፌይድ ከላይን አፕ ጋር',
    category: 'mens',
    stylistId: 'sty-004',
    featured: true,
    tags: ['fade', 'mens', 'lineup'],
  },
  {
    id: 'gal-006',
    src: 'https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?auto=format&fit=crop&w=800&q=80',
    alt: 'Defined twist out on natural 4c hair',
    altAm: 'ተፈጥሯዊ 4c ፀጉር ላይ ትዊስት አውት',
    category: 'cuts',
    stylistId: 'sty-003',
    featured: false,
    tags: ['natural', '4c', 'twist-out'],
  },
  {
    id: 'gal-007',
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    alt: 'Vibrant copper full color',
    altAm: 'ቆንጆ ቦርዶ ሙሉ ቀለም',
    category: 'color',
    stylistId: 'sty-002',
    featured: false,
    tags: ['full-color', 'copper', 'bold'],
  },
  {
    id: 'gal-008',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    alt: 'Jumbo knotless braids in natural color',
    altAm: 'ተፈጥሯዊ ቀለም ጃምቦ ኖቴሌስ ብሬዲንግ',
    category: 'braids',
    stylistId: 'sty-001',
    featured: false,
    tags: ['knotless', 'jumbo', 'natural-color'],
  },
  {
    id: 'gal-009',
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    alt: 'Silky smooth hair after keratin treatment',
    altAm: 'ኬራቲን ሕክምና ከእሩ ሸምቅ ፀጉር',
    category: 'treatments',
    stylistId: 'sty-002',
    featured: false,
    tags: ['keratin', 'smooth', 'treatment'],
  },
  {
    id: 'gal-010',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    alt: 'Romantic bridal curls with flowers',
    altAm: 'ከአበቦች ጋር ሮማንቲክ የሙሽሪት ሉፕ',
    category: 'bridal',
    stylistId: 'sty-002',
    featured: false,
    tags: ['bridal', 'curls', 'romantic'],
  },
  {
    id: 'gal-011',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    alt: 'Neatly installed starter locs',
    altAm: 'ንፁህ ስታርተር ሎክስ',
    category: 'braids',
    stylistId: 'sty-003',
    featured: false,
    tags: ['locs', 'starter-locs', 'natural'],
  },
  {
    id: 'gal-012',
    src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    alt: 'Sleek and voluminous blowout style',
    altAm: 'ሸምቅ እና ቅርፍ ብሎ-አውት ስታይሊንግ',
    category: 'cuts',
    stylistId: 'sty-001',
    featured: false,
    tags: ['blowout', 'volume', 'sleek'],
  },
]

export default galleryItems
