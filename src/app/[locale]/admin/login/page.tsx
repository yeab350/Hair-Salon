'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n'
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react'

export default function AdminLoginPage() {
  const t = useTranslations('admin')
  const router = useRouter()
  const [email, setEmail] = useState('admin@luxsalon.et')
  const [password, setPassword] = useState('admin123')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated authentication
    router.push('/admin')
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12 transition-colors duration-200">
      <div className="card-salon p-8 w-full max-w-md shadow-lg border border-border">
        <div className="h-16 w-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h1 className="font-serif text-3xl text-center text-charcoal mb-2">{t('login_title')}</h1>
        <p className="text-muted text-center text-sm mb-8">{t('login_subtitle')}</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1 flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-gold" />
              {t('email_label')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1 flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-gold" />
              {t('password_label')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn-gold px-6 py-3.5 rounded-full text-base font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
          >
            {t('login_btn')}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted mb-2">Demo credentials prefilled for testing:</p>
          <div className="inline-block bg-muted-bg px-3 py-1.5 rounded-lg text-xs font-mono text-charcoal">
            admin@luxsalon.et / admin123
          </div>
        </div>
      </div>
    </main>
  )
}
