'use client'

import { useState } from 'react'
import { mockBookings } from '@/data/bookings'
import { format, startOfWeek, addDays, isSameDay } from 'date-fns'

export default function AdminCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }) // Monday
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  return (
    <div className="card-salon p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-lg text-foreground">Calendar</h2>
        <div className="flex gap-2">
          <button onClick={() => setCurrentDate((d) => addDays(d, -7))} className="p-1 hover:text-accent transition-colors text-muted">‹</button>
          <button onClick={() => setCurrentDate((d) => addDays(d, 7))} className="p-1 hover:text-accent transition-colors text-muted">›</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <div key={i} className="text-muted font-medium">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const dayBookings = mockBookings.filter((b) => b.date === format(day, 'yyyy-MM-dd'))
          const isToday = isSameDay(day, new Date())
          return (
            <div
              key={day.toISOString()}
              className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs cursor-pointer transition-colors
                ${isToday ? 'bg-accent text-[rgb(var(--accent-foreground))] font-bold' : 'bg-alternate hover:bg-alternate/80 text-foreground'}`}
            >
              <span className="font-medium">{format(day, 'd')}</span>
              {dayBookings.length > 0 && (
                <div className={`h-1 w-1 rounded-full mt-0.5 ${isToday ? 'bg-[rgb(var(--accent-foreground))]' : 'bg-accent'}`} />
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs text-muted uppercase tracking-wider">Today&apos;s Bookings</p>
        {mockBookings.filter((b) => b.date === format(new Date(), 'yyyy-MM-dd')).map((b) => (
          <div key={b.id} className="flex items-center gap-2 text-xs">
            <span className="text-accent font-medium">{b.startTime}</span>
            <span className="text-foreground truncate">{b.clientName}</span>
          </div>
        ))}
        {mockBookings.filter((b) => b.date === format(new Date(), 'yyyy-MM-dd')).length === 0 && (
          <p className="text-muted text-xs">No bookings today</p>
        )}
      </div>
    </div>
  )
}
