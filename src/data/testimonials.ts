export interface Testimonial {
  id: string
  name: string
  nameAm?: string
  avatar?: string
  text: string
  textAm: string
  rating: number
  date: string
  stylistId: string
  serviceId?: string
  verified: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'tst-001',
    name: 'Sara Mekonnen',
    nameAm: 'ሳራ መኮንን',
    avatar: '/images/avatars/avatar-1.jpg',
    text: 'Hiwot did my knotless braids and they came out absolutely perfect! They lasted almost 8 weeks and so many people asked me where I got them done. This is my go-to salon now.',
    textAm: 'ሕይወት ኖቴሌስ ብሬዲንጌን አደረጉልኝ እና ፍፁም ቆንጆ ሆኖ ወጣ! ለ8 ሳምንት ያህል ቆዩ እና ብዙ ሰዎች የት እንዳደረኩት ጠየቁኝ። አሁን ሁልጊዜ የምሄደው ሳሎን ይህ ነው።',
    rating: 5,
    date: '2024-10-15',
    stylistId: 'sty-001',
    serviceId: 'svc-005',
    verified: true,
  },
  {
    id: 'tst-002',
    name: 'Liya Haile',
    nameAm: 'ሊያ ሃይሌ',
    avatar: '/images/avatars/avatar-2.jpg',
    text: 'Meron is a color genius! I wanted balayage but was scared about damage. She explained everything, used amazing products, and my hair looks like it was kissed by the sun. Absolutely recommend.',
    textAm: 'ሜሮን የቀለም ሰው ናቸው! ባላያጅ ፈልጌ ነበር ግን ስለጉዳት ፈርቼ ነበር። ሁሉንም አብራሩልኝ፣ ድንቅ ምርቶችን ተጠቀሙ፣ እና ፀጉሬ በፀሐይ እንደተሳሙ ይመስላል። ያለ ጥርጥር እጠቁማለሁ።',
    rating: 5,
    date: '2024-10-02',
    stylistId: 'sty-002',
    serviceId: 'svc-008',
    verified: true,
  },
  {
    id: 'tst-003',
    name: 'Biruk Tsegay',
    nameAm: 'ቢሩክ ፀጋይ',
    avatar: '/images/avatars/avatar-3.jpg',
    text: "Dawit gives the best fades in Addis Ababa. Period. I've been going to him for 2 years now and every cut is sharp and clean. The salon atmosphere is also very relaxing.",
    textAm: 'ዳዊት በአዲስ አበባ ምርጡን ፌይድ ነው የሚሰጡ። ያ ነው! ለ2 ዓመታት እየሄድኩ ነው እና ቁረጣ ሁሉ ሹል እና ንፁህ ነው። ሳሎኑ ሁኔታም በጣም ሰላማዊ ነው።',
    rating: 5,
    date: '2024-09-20',
    stylistId: 'sty-004',
    serviceId: 'svc-003',
    verified: true,
  },
  {
    id: 'tst-004',
    name: 'Frehiwot Alemu',
    nameAm: 'ፍሬሕይወት አለሙ',
    avatar: '/images/avatars/avatar-4.jpg',
    text: 'I had my bridal hair done by Meron for my wedding in September. She did a trial run, understood my vision completely, and on the actual day, I looked exactly how I dreamed. I cried happy tears!',
    textAm: 'ሜሮን በሴፕቴምበር ሠርጌ ላይ የሙሽሪት ፀጉሬን አደረጉልኝ። ሙከራ አደረጉ፣ ምኞቴን ሙሉ ለሙሉ ተረዱ፣ እና ዕለቱ ትክክል ሕልሜ እንዳለኝ ያህል ቆንጆ ሆኜ ነበር። ደስ ብሎኝ አለቀስኩ!',
    rating: 5,
    date: '2024-09-25',
    stylistId: 'sty-002',
    serviceId: 'svc-011',
    verified: true,
  },
  {
    id: 'tst-005',
    name: 'Abreham Teklu',
    nameAm: 'አብርሃም ተክሉ',
    avatar: '/images/avatars/avatar-5.jpg',
    text: "Took my daughter to Tigist for her first real haircut. She was nervous but Tigist was so patient and made the whole experience fun. My daughter is already asking to go back!",
    textAm: 'ሴት ልጄን ለመጀመሪያ ፀጉር ቁረጣ ወደ ትግስት ወሰድኩ። ፈርታ ነበር ግን ትግስት እጅግ ታጋሽ ሆነው ሁሉን ዕድ አዝናኝ አደረጉ። ሴት ልጄ ቀድሞ ለመመለስ ጠይቃለች!',
    rating: 5,
    date: '2024-09-10',
    stylistId: 'sty-003',
    serviceId: 'svc-013',
    verified: true,
  },
  {
    id: 'tst-006',
    name: 'Rahel Desta',
    nameAm: 'ራሔል ደስታ',
    avatar: '/images/avatars/avatar-6.jpg',
    text: "The keratin treatment by Meron changed my life! My hair was so frizzy and unmanageable. Now it's smooth, shiny and takes me half the time to style. Worth every birr.",
    textAm: 'ሜሮን ያደረጉልኝ ኬራቲን ሕክምና ሕይወቴን ቀይሮታል! ፀጉሬ ፍሪዝ ዝ እና ለማስተዳደር አስቸጋሪ ነበር። አሁን ለስላሳ፣ ብሩህ እና ለስታይሊንግ ግማሽ ጊዜ ይወስዳል። ለብርሩ ሁሉ ዋጋ ይባለዋ።',
    rating: 5,
    date: '2024-08-30',
    stylistId: 'sty-002',
    serviceId: 'svc-010',
    verified: true,
  },
  {
    id: 'tst-007',
    name: 'Yonas Hailu',
    nameAm: 'ዮናስ ሃይሉ',
    avatar: '/images/avatars/avatar-7.jpg',
    text: 'Clean salon, friendly staff, and excellent service. Bethlehem did a great job on my haircut and was very thorough. The online booking system is also super convenient.',
    textAm: 'ንፁህ ሳሎን፣ ሞቅ ያሉ ሠራተኞች፣ እና ምርጥ አገልግሎት። ቤተልሔም ቁረጣዬ ላይ ጥሩ ሥራ ሠሩ እና በጣም ጥንቃቄ ያሳዩ ነበር። የኦንላይን ቀጠሮ ሥርዓቱም ምቹ ነው።',
    rating: 4,
    date: '2024-08-15',
    stylistId: 'sty-005',
    serviceId: 'svc-003',
    verified: true,
  },
  {
    id: 'tst-008',
    name: 'Hana Girma',
    nameAm: 'ሃና ግርማ',
    avatar: '/images/avatars/avatar-8.jpg',
    text: "Hiwot's box braids are simply amazing. The parting was so clean and even, and she was so careful with my edges. I always leave feeling like a queen.",
    textAm: 'ሕይወት ቦክስ ብሬዲንግ ሐሰ ቆንጆ ናቸው። ፓርቲንጉ ንፁህ እና እኩል ነበር እና ጠርዞቼ ላይ በጣም ጥንቃቄ አሳዩ። ሁልጊዜ እንደ ንግስት ሆኜ ወጫ ሰኛ።',
    rating: 5,
    date: '2024-08-05',
    stylistId: 'sty-001',
    serviceId: 'svc-004',
    verified: true,
  },
]

export default testimonials
