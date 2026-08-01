'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6',
          scrolled ? 'glass gradient-border glow-shadow' : 'bg-transparent',
        )}
        aria-label="Primary"
      >
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-border glass font-display text-sm font-bold gradient-text">
            DD
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Devkinandan
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan to-primary" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav('#contact')}
          className="hidden rounded-lg gradient-border glass px-4 py-2 text-sm font-semibold text-primary transition-all hover:text-cyan hover:shadow-[0_0_20px_rgba(90,160,255,0.4)] lg:inline-flex"
        >
          Let&apos;s Connect
        </button>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg glass gradient-border text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'mx-4 mt-2 overflow-hidden rounded-2xl transition-all duration-300 lg:hidden',
          open ? 'max-h-[26rem] glass gradient-border glow-shadow' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={cn(
                  'w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors',
                  active === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
