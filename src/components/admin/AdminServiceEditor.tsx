'use client'

import { useState } from 'react'
import { services } from '@/data/services'
import { formatPriceSimple, formatDuration } from '@/lib/utils'
import { Edit, Plus } from 'lucide-react'

export default function AdminServiceEditor() {
  const [editingId, setEditingId] = useState<string | null>(null)

  return (
    <div className="card-salon p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl text-foreground">Services</h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 btn-accent rounded-full text-sm font-semibold">
          <Plus className="h-4 w-4" /> Add Service
        </button>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <div key={service.id} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground">{service.name.en}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted">
                <span>{formatPriceSimple(service.price)}</span>
                <span>·</span>
                <span>{formatDuration(service.duration)}</span>
                <span>·</span>
                <span className="capitalize">{service.category.replace('-', ' ')}</span>
              </div>
            </div>
            <button
              onClick={() => setEditingId(service.id)}
              className="p-2 rounded-lg hover:bg-muted-bg transition-colors text-muted hover:text-foreground"
            >
              <Edit className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
