import { stylists } from '@/data/stylists'
import StylistCard from './StylistCard'

export default function StylistGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stylists.map((stylist) => (
        <StylistCard key={stylist.id} stylist={stylist} />
      ))}
    </div>
  )
}
