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
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin@luxsalon.et' && password === 'admin123') {
      // Set the authentication cookie
      document.cookie = 'lux_admin_session=authenticated; path=/; max-age=86400; SameSite=Lax'
      router.push('/admin')
    } else {
      setError('Invalid credentials. Please use the demo credentials below.')
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12 transition-colors duration-200">
      <div className="card-salon p-8 w-full max-w-md shadow-lg border border-border">
        <div className="h-16 w-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h1 className="font-serif text-3xl text-center text-foreground mb-2">{t('login_title')}</h1>
        <p className="text-muted text-center text-sm mb-8">{t('login_subtitle')}</p>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-accent" />
              {t('email_label')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm transition-colors"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-accent" />
              {t('password_label')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn-accent px-6 py-3.5 rounded-full text-base font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
          >
            {t('login_btn')}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted mb-2">Demo credentials prefilled for testing:</p>
          <div className="inline-block bg-alternate px-3 py-1.5 rounded-lg text-xs font-mono text-foreground border border-border">
            admin@luxsalon.et / admin123
          </div>
        </div>
      </div>
    </main>
  )
}
