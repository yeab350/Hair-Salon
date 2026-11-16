'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import ThemeToggle from '@/components/layout/ThemeToggle'
import AdminStats from '@/components/admin/AdminStats'
import AdminBookingList from '@/components/admin/AdminBookingList'
import AdminCalendar from '@/components/admin/AdminCalendar'
import AdminServiceEditor from '@/components/admin/AdminServiceEditor'
import AdminStylistEditor from '@/components/admin/AdminStylistEditor'
import {
  Calendar as CalendarIcon,
  ListOrdered,
  Scissors,
  Users,
  BarChart3,
  LogOut,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type AdminTab = 'bookings' | 'calendar' | 'services' | 'stylists' | 'stats'

export default function AdminPage() {
  const t = useTranslations('admin')
  const locale = useLocale() as 'en' | 'am'
  const [activeTab, setActiveTab] = useState<AdminTab>('bookings')

  const navItems: { id: AdminTab; label: string; icon: React.ReactNode }[] = [
    { id: 'bookings', label: t('nav_bookings'), icon: <ListOrdered className="h-4 w-4" /> },
    { id: 'calendar', label: t('nav_calendar'), icon: <CalendarIcon className="h-4 w-4" /> },
    { id: 'services', label: t('nav_services'), icon: <Scissors className="h-4 w-4" /> },
    { id: 'stylists', label: t('nav_stylists'), icon: <Users className="h-4 w-4" /> },
    { id: 'stats', label: t('nav_stats'), icon: <BarChart3 className="h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Top Admin Navbar */}
      <header className="bg-card border-b border-border sticky top-0 z-30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gold/15 text-gold flex items-center justify-center font-bold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-charcoal">Lux Salon Admin</span>
              <span className="ml-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                Live Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <IntlLink
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-charcoal hover:bg-muted-bg transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5 text-muted" />
              <span>View Website</span>
            </IntlLink>

            <IntlLink
              href="/admin/login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>{t('logout')}</span>
            </IntlLink>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-border mb-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                activeTab === item.id
                  ? 'bg-plum dark:bg-gold text-white dark:text-charcoal shadow-sm'
                  : 'bg-card text-muted hover:text-charcoal hover:bg-muted-bg border border-border'
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Bookings List */}
        {activeTab === 'bookings' && (
          <div className="space-y-8">
            <AdminStats />
            <AdminBookingList />
          </div>
        )}

        {/* Tab 2: Calendar */}
        {activeTab === 'calendar' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AdminCalendar />
            </div>
            <div>
              <div className="card-salon p-6 bg-card border border-border">
                <h3 className="font-serif text-lg text-charcoal mb-4">Calendar Tips</h3>
                <ul className="text-xs text-muted space-y-3 leading-relaxed">
                  <li>• Click on any date to inspect scheduled appointments and available stylist buffers.</li>
                  <li>• Working hours automatically enforce break times and buffer intervals between appointments.</li>
                  <li>• Double-booking is mathematically prevented based on service duration totals.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Services Editor */}
        {activeTab === 'services' && (
          <div>
            <AdminServiceEditor />
          </div>
        )}

        {/* Tab 4: Stylists Editor */}
        {activeTab === 'stylists' && (
          <div>
            <AdminStylistEditor />
          </div>
        )}

        {/* Tab 5: Statistics */}
        {activeTab === 'stats' && (
          <div className="space-y-8">
            <AdminStats />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-salon p-6 bg-card border border-border">
                <h3 className="font-serif text-lg text-charcoal mb-4">Most Popular Styles</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Knotless Braids', count: 48, percentage: '34%' },
                    { name: 'Highlights & Balayage', count: 32, percentage: '22%' },
                    { name: "Men's Cut & Fade", count: 28, percentage: '20%' },
                    { name: 'Keratin Treatment', count: 18, percentage: '13%' },
                    { name: 'Bridal Styling', count: 15, percentage: '11%' },
                  ].map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-charcoal">{s.name}</span>
                        <span className="text-gold font-bold">{s.count} bookings ({s.percentage})</span>
                      </div>
                      <div className="h-2 w-full bg-muted-bg rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold rounded-full"
                          style={{ width: s.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-salon p-6 bg-card border border-border">
                <h3 className="font-serif text-lg text-charcoal mb-4">Stylist Workload & Ratings</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Hiwot Tadesse', specialty: 'Braids & Locs', hours: '38h this week', rating: 4.9 },
                    { name: 'Meron Alemu', specialty: 'Color & Bridal', hours: '34h this week', rating: 4.8 },
                    { name: 'Dawit Girma', specialty: "Men's Cuts", hours: '29h this week', rating: 4.8 },
                    { name: 'Tigist Bekele', specialty: 'Natural Hair', hours: '26h this week', rating: 4.7 },
                  ].map((st) => (
                    <div key={st.name} className="flex items-center justify-between p-3 rounded-xl bg-muted-bg/50 border border-border/40">
                      <div>
                        <p className="font-semibold text-charcoal text-sm">{st.name}</p>
                        <p className="text-xs text-muted">{st.specialty} · {st.hours}</p>
                      </div>
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/50 px-2.5 py-1 rounded-full">
                        ★ {st.rating}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
