/**
 * Ethiopian Calendar (Ge'ez Calendar) utilities.
 * The Ethiopian calendar has 13 months: 12 months of 30 days + 1 intercalary month (Pagume).
 * The Ethiopian year starts on September 11 (Gregorian) in a common year,
 * or September 12 in a leap year.
 * Ethiopian year = Gregorian year - 7 (before Sep 11) or - 8 (from Sep 11 onwards)
 * -- simplified for display purposes --
 */

export const ethiopianMonths = [
  { en: 'Meskerem', am: 'መስከረም' },
  { en: 'Tikimt', am: 'ጥቅምት' },
  { en: 'Hidar', am: 'ህዳር' },
  { en: 'Tahsas', am: 'ታህሳስ' },
  { en: 'Tir', am: 'ጥር' },
  { en: 'Yekatit', am: 'የካቲት' },
  { en: 'Megabit', am: 'መጋቢት' },
  { en: 'Miazia', am: 'ሚያዝያ' },
  { en: 'Ginbot', am: 'ግንቦት' },
  { en: 'Sene', am: 'ሰኔ' },
  { en: 'Hamle', am: 'ሐምሌ' },
  { en: 'Nehase', am: 'ነሐሴ' },
  { en: 'Pagume', am: 'ጳጉሜ' },
]

export const ethiopianDays = [
  { en: 'Sunday', am: 'እሁድ' },
  { en: 'Monday', am: 'ሰኞ' },
  { en: 'Tuesday', am: 'ማክሰኞ' },
  { en: 'Wednesday', am: 'ረቡዕ' },
  { en: 'Thursday', am: 'ሐሙስ' },
  { en: 'Friday', am: 'ዓርብ' },
  { en: 'Saturday', am: 'ቅዳሜ' },
]

export interface EthiopianDate {
  year: number
  month: number // 1-13
  day: number // 1-30
  monthName: { en: string; am: string }
}

/**
 * Convert a Gregorian date to Ethiopian date.
 * Uses the Julian Day Number method for accuracy.
 */
export function gregorianToEthiopian(gregorianDate: Date): EthiopianDate {
  const gYear = gregorianDate.getFullYear()
  const gMonth = gregorianDate.getMonth() + 1 // 1-indexed
  const gDay = gregorianDate.getDate()

  // Convert to Julian Day Number
  const jdn = gregorianToJDN(gYear, gMonth, gDay)

  // Convert JDN to Ethiopian date
  const r = (jdn - 1723856) % 1461
  const n = r % 365 + 365 * Math.floor(r / 1460)

  const eYear = 4 * Math.floor((jdn - 1723856) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460)
  const eMonth = Math.floor(n / 30) + 1
  const eDay = (n % 30) + 1

  return {
    year: eYear,
    month: eMonth,
    day: eDay,
    monthName: ethiopianMonths[eMonth - 1] || { en: 'Pagume', am: 'ጳጉሜ' },
  }
}

function gregorianToJDN(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12)
  const y = year + 4800 - a
  const m = month + 12 * a - 3
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045
}

/**
 * Format an Ethiopian date as a string.
 */
export function formatEthiopianDate(date: EthiopianDate, locale: 'en' | 'am' = 'am'): string {
  const monthName = date.monthName[locale]
  if (locale === 'am') {
    return `${date.day} ${monthName} ${date.year}`
  }
  return `${monthName} ${date.day}, ${date.year} E.C.`
}

/**
 * Returns Ethiopian date string for a given Gregorian date.
 */
export function toEthiopianDateString(gregorianDate: Date, locale: 'en' | 'am' = 'am'): string {
  const ethDate = gregorianToEthiopian(gregorianDate)
  return formatEthiopianDate(ethDate, locale)
}

/**
 * Check if a year is an Ethiopian leap year (Pagume has 6 days).
 */
export function isEthiopianLeapYear(year: number): boolean {
  return (year % 4) === 3
}
