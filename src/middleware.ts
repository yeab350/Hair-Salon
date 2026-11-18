import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n'

const intlMiddleware = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Direct /admin or /admin/* without locale
  if (pathname === '/admin' || (pathname.startsWith('/admin/') && pathname !== '/admin/login')) {
    const session = req.cookies.get('lux_admin_session')?.value
    if (session !== 'authenticated') {
      return NextResponse.redirect(new URL('/en/admin/login', req.url))
    }
  }

  // Locale-prefixed admin routes: /(en|am)/admin and /(en|am)/admin/*
  const adminMatch = pathname.match(/^\/(en|am)\/admin(?:\/(.*))?$/)
  if (adminMatch) {
    const locale = adminMatch[1]
    const subpath = adminMatch[2] || ''

    if (subpath !== 'login') {
      const session = req.cookies.get('lux_admin_session')?.value
      if (session !== 'authenticated') {
        return NextResponse.redirect(new URL(`/${locale}/admin/login`, req.url))
      }
    }
  }

  return intlMiddleware(req)
}

export const config = {
  matcher: [
    '/',
    '/(en|am)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
