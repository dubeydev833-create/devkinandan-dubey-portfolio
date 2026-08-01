'use client'

import { Mail, Heart } from 'lucide-react'
import { Github, Linkedin } from '@/components/portfolio/brand-icons'
import { profile, navLinks } from '@/lib/portfolio-data'

export function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-border glass font-display text-sm font-bold gradient-text">
                DD
              </span>
              <span className="font-display text-base font-semibold">Devkinandan Dubey</span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              AI &amp; ML enthusiast and aspiring software developer, always learning and building.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            {[
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Gmail' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl glass gradient-border text-muted-foreground transition-all hover:-translate-y-1 hover:text-cyan"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Devkinandan Dubey. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart size={14} className="text-primary" aria-label="love" /> using Next.js,
            React &amp; CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
