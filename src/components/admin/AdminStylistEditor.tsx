'use client'

import { stylists } from '@/data/stylists'
import { Edit } from 'lucide-react'

export default function AdminStylistEditor() {
  return (
    <div className="card-salon p-6">
      <h2 className="font-serif text-xl text-foreground mb-6">Stylists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stylists.map((stylist) => (
          <div key={stylist.id} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors">
            <div className="h-10 w-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
              <span className="text-accent font-semibold text-sm">{stylist.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm">{stylist.name}</p>
              <p className="text-accent text-xs truncate">{stylist.role}</p>
            </div>
            <button className="p-1.5 hover:bg-muted-bg rounded-lg transition-colors text-muted hover:text-foreground">
              <Edit className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
