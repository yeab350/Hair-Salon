import { useTranslations } from 'next-intl'
import { mockBookings } from '@/data/bookings'
import { stylists } from '@/data/stylists'
import Badge from '@/components/ui/Badge'

const statusVariant = {
  pending: 'warning',
  confirmed: 'success',
  cancelled: 'error',
  completed: 'gold',
  'no-show': 'muted',
} as const

export default function AdminBookingList() {
  const t = useTranslations('admin')

  return (
    <div className="card-salon">
      <div className="p-6 pb-0">
        <h2 className="font-serif text-xl text-charcoal">{t('bookings_title')}</h2>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-border">
                {['Client', 'Stylist', 'Date', 'Time', 'Price', 'Status'].map((h) => (
                  <th key={h} className="pb-3 font-medium text-muted text-xs uppercase tracking-wider pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockBookings.map((booking) => {
                const stylist = stylists.find((s) => s.id === booking.stylistId)
                return (
                  <tr key={booking.id} className="hover:bg-muted-bg/50 transition-colors">
                    <td className="py-3 pr-4">
                      <p className="font-medium text-charcoal">{booking.clientName}</p>
                      <p className="text-muted text-xs">{booking.clientPhone}</p>
                    </td>
                    <td className="py-3 pr-4 text-charcoal">{stylist?.name ?? '—'}</td>
                    <td className="py-3 pr-4 text-charcoal">{booking.date}</td>
                    <td className="py-3 pr-4 text-charcoal">{booking.startTime}</td>
                    <td className="py-3 pr-4 font-medium text-gold">{booking.totalPrice.toLocaleString()} ETB</td>
                    <td className="py-3">
                      <Badge variant={statusVariant[booking.status]}>
                        {t(`booking_status_${booking.status.replace('-', '_')}` as any)}
                      </Badge>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
