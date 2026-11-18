import { useTranslations } from 'next-intl'
import { Link as IntlLink } from '@/i18n'
import Logo from '@/components/ui/Logo'
import { salonConfig } from '@/config/salon'
import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('nav')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-[#0C1A1F] text-foreground border-t border-border py-16 transition-colors duration-200">
      <div className="container-salon">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="h-9 w-auto mb-4" />
            <p className="text-muted text-sm leading-relaxed mb-4">
              Premium hair salon in Addis Ababa. Excellence in every strand.
            </p>
            <div className="flex gap-3">
              <a href={salonConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors text-muted hover:bg-accent/10">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={salonConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors text-muted hover:bg-accent/10">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={salonConfig.social.youtube} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors text-muted hover:bg-accent/10">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-accent text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              {[
                { href: '/services', label: t('services') },
                { href: '/team', label: t('team') },
                { href: '/gallery', label: t('gallery') },
                { href: '/about', label: t('about') },
              ].map((link) => (
                <li key={link.href}>
                  <IntlLink href={link.href} className="text-muted hover:text-accent transition-colors text-sm">
                    {link.label}
                  </IntlLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif text-accent text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { href: '/faq', label: t('faq') },
                { href: '/policies', label: t('policies') },
                { href: '/contact', label: t('contact') },
                { href: '/booking', label: t('booking') },
              ].map((link) => (
                <li key={link.href}>
                  <IntlLink href={link.href} className="text-muted hover:text-accent transition-colors text-sm">
                    {link.label}
                  </IntlLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-accent text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>{salonConfig.contact.phone}</li>
              <li>{salonConfig.contact.email}</li>
              <li>{salonConfig.address.street}</li>
              <li>{salonConfig.address.city}, {salonConfig.address.country}</li>
              <li className="pt-2 text-foreground font-medium">Mon–Sat: 9:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-muted text-xs">
          <p>&copy; {year} Lux Salon. All rights reserved.</p>
          <p>Built with ❤️ in Addis Ababa</p>
        </div>
      </div>
    </footer>
  )
}
