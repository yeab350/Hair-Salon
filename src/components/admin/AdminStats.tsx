import { useTranslations } from 'next-intl'
import { mockBookings } from '@/data/bookings'
import { TrendingUp, Calendar, DollarSign, Clock } from 'lucide-react'

export default function AdminStats() {
  const t = useTranslations('admin')

  const today = new Date().toISOString().split('T')[0]
  const todayBookings = mockBookings.filter((b) => b.date === today).length
  const totalRevenue = mockBookings.filter((b) => b.status === 'completed').reduce((sum, b) => sum + b.totalPrice, 0)
  const pendingCount = mockBookings.filter((b) => b.status === 'pending').length
  const weekCount = mockBookings.length

  const stats = [
    { label: t('stats_today'), value: todayBookings, icon: Calendar, color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40' },
    { label: t('stats_week'), value: weekCount, icon: TrendingUp, color: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40' },
    { label: t('stats_revenue'), value: `${totalRevenue.toLocaleString()} ETB`, icon: DollarSign, color: 'text-accent bg-accent/10' },
    { label: t('stats_pending'), value: pendingCount, icon: Clock, color: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40' },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="card-salon p-5">
          <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl mb-3 ${color}`}>
            <Icon className="h-5 w-5" />
          </div>
          <p className="text-2xl font-serif text-foreground font-bold">{value}</p>
          <p className="text-muted text-sm mt-1">{label}</p>
        </div>
      ))}
    </div>
  )
}
