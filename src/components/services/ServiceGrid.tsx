'use client'

import { useState, useMemo } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { services, serviceCategories, type ServiceCategory, type Service } from '@/data/services'
import ServiceCard from './ServiceCard'
import { Search, SlidersHorizontal, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ServiceExplorer() {
  const t = useTranslations('services')
  const locale = useLocale() as 'en' | 'am'

  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [maxPrice, setMaxPrice] = useState<number | 'all'>('all')
  const [maxDuration, setMaxDuration] = useState<number | 'all'>('all')
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'duration-asc'>('recommended')

  const filteredServices = useMemo(() => {
    return services
      .filter((service) => {
        // Category filter
        if (activeCategory !== 'all' && service.category !== activeCategory) {
          return false
        }

        // Search query (English & Amharic)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim()
          const nameEn = service.name.en.toLowerCase()
          const nameAm = service.name.am.toLowerCase()
          const descEn = service.description.en.toLowerCase()
          const descAm = service.description.am.toLowerCase()
          const tags = service.tags?.join(' ').toLowerCase() || ''

          if (!nameEn.includes(q) && !nameAm.includes(q) && !descEn.includes(q) && !descAm.includes(q) && !tags.includes(q)) {
            return false
          }
        }

        // Price filter
        if (maxPrice !== 'all' && service.price > maxPrice) {
          return false
        }

        // Duration filter (minutes)
        if (maxDuration !== 'all' && service.duration > maxDuration) {
          return false
        }

        return true
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        if (sortBy === 'duration-asc') return a.duration - b.duration
        // Recommended: featured first
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
  }, [activeCategory, searchQuery, maxPrice, maxDuration, sortBy])

  const clearFilters = () => {
    setActiveCategory('all')
    setSearchQuery('')
    setMaxPrice('all')
    setMaxDuration('all')
    setSortBy('recommended')
  }

  const hasActiveFilters = activeCategory !== 'all' || searchQuery.trim() !== '' || maxPrice !== 'all' || maxDuration !== 'all'

  return (
    <div>
      {/* Search and Secondary Filter Bar */}
        <div className="bg-card rounded-2xl p-4 md:p-6 shadow-sm border border-border mb-8 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Search input */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={locale === 'am' ? 'አገልግሎቶችን በስም ወይም ስታይል ይፈልጉ...' : 'Search styles by name or keywords...'}
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-border bg-cream/50 dark:bg-muted/20 text-charcoal text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-charcoal"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Duration filter */}
            <div>
              <select
                value={maxDuration}
                onChange={(e) => setMaxDuration(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                aria-label={locale === 'am' ? 'የጊዜ ገደብ' : 'Duration'}
                className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 dark:bg-muted/20 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
              >
                <option value="all" className="bg-card text-charcoal">{locale === 'am' ? 'ማንኛውም ጊዜ' : 'Any duration'}</option>
                <option value={60} className="bg-card text-charcoal">{locale === 'am' ? 'እስከ 1 ሰዓት' : 'Under 1 hour'}</option>
                <option value={120} className="bg-card text-charcoal">{locale === 'am' ? 'እስከ 2 ሰዓታት' : 'Up to 2 hours'}</option>
                <option value={180} className="bg-card text-charcoal">{locale === 'am' ? 'እስከ 3 ሰዓታት' : 'Up to 3 hours'}</option>
              </select>
            </div>

            {/* Price filter */}
            <div>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                aria-label={locale === 'am' ? 'የዋጋ ገደብ' : 'Price limit'}
                className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 dark:bg-muted/20 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
              >
                <option value="all" className="bg-card text-charcoal">{locale === 'am' ? 'ማንኛውም ዋጋ' : 'Any price'}</option>
                <option value={500} className="bg-card text-charcoal">{locale === 'am' ? 'እስከ 500 ብር' : 'Up to 500 ETB'}</option>
                <option value={1500} className="bg-card text-charcoal">{locale === 'am' ? 'እስከ 1,500 ብር' : 'Up to 1,500 ETB'}</option>
                <option value={2500} className="bg-card text-charcoal">{locale === 'am' ? 'እስከ 2,500 ብር' : 'Up to 2,500 ETB'}</option>
              </select>
            </div>
          </div>

          {/* Category Pills & Sort */}
          <div className="mt-5 pt-5 border-t border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === 'all'
                    ? 'bg-gold text-white shadow-sm'
                    : 'bg-muted-bg text-charcoal hover:bg-muted-bg/80'
                )}
              >
                {t('all_categories')}
              </button>
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    activeCategory === cat.id
                      ? 'bg-gold text-white shadow-sm'
                      : 'bg-muted-bg text-charcoal hover:bg-muted-bg/80'
                  )}
                >
                  {locale === 'am' ? cat.label.am : cat.label.en}
                </button>
              ))}
            </div>

            {/* Sort dropdown */}
            <div className="flex items-center gap-2 self-end lg:self-auto text-xs text-muted">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label={locale === 'am' ? 'መደርደርያ' : 'Sort by'}
                className="bg-transparent font-medium text-charcoal focus:outline-none cursor-pointer"
              >
                <option value="recommended" className="bg-card text-charcoal">{locale === 'am' ? 'የተመረጡ' : 'Recommended'}</option>
                <option value="price-asc" className="bg-card text-charcoal">{locale === 'am' ? 'ዋጋ፡ ከዝቅተኛ' : 'Price: Low to High'}</option>
                <option value="price-desc" className="bg-card text-charcoal">{locale === 'am' ? 'ዋጋ፡ ከከፍተኛ' : 'Price: High to Low'}</option>
                <option value="duration-asc" className="bg-card text-charcoal">{locale === 'am' ? 'ጊዜ፡ አጭር' : 'Duration: Shortest'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm text-muted">
            {locale === 'am'
              ? `${filteredServices.length} አገልግሎቶች ተገኝተዋል`
              : `Showing ${filteredServices.length} style${filteredServices.length === 1 ? '' : 's'}`}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-gold hover:text-gold-dark font-medium underline underline-offset-4"
            >
              {locale === 'am' ? 'ማጣሪያዎችን አጽዳ' : 'Reset all filters'}
            </button>
          )}
        </div>

        {/* Grid or Empty State */}
        {filteredServices.length === 0 ? (
          <div className="card-salon py-16 px-6 text-center max-w-lg mx-auto">
            <div className="h-14 w-14 rounded-full bg-muted-bg flex items-center justify-center mx-auto mb-4 text-muted">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-2">
              {locale === 'am' ? 'ምንም አገልግሎት አልተገኘም' : 'No matching styles found'}
            </h3>
            <p className="text-muted text-sm mb-6">
              {locale === 'am'
                ? 'እባክዎ የተለየ ቃል ይፈልጉ ወይም ማጣሪያዎችን ያጽዱ።'
                : 'Try adjusting your search criteria or clearing active filters.'}
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 btn-outline-gold rounded-full text-sm font-medium"
            >
              {locale === 'am' ? 'ሁሉንም አገልግሎቶች አሳይ' : 'Show all services'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
      )
}
