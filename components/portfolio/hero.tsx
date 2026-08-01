'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react'
import { Github, Linkedin } from '@/components/portfolio/brand-icons'
import { profile } from '@/lib/portfolio-data'

function useTypingEffect(words: string[]) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const speed = deleting ? 45 : 95
    const timeout = setTimeout(() => {
      const next = deleting
        ? current.slice(0, display.length - 1)
        : current.slice(0, display.length + 1)
      setDisplay(next)

      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1400)
      } else if (deleting && next === '') {
        setDeleting(false)
        setWordIndex((i) => i + 1)
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [display, deleting, wordIndex, words])

  return display
}

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  const typed = useTypingEffect(profile.roles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full gradient-border glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles size={14} className="text-cyan" />
            Available for internships
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text text-glow">Devkinandan Dubey</span>
          </h1>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {profile.shortTitle}
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start">
            <span className="font-display text-lg font-medium text-foreground sm:text-2xl">
              <span className="text-muted-foreground">I&apos;m a </span>
              <span className="gradient-text">{typed}</span>
              <span className="animate-blink text-cyan">|</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(90,160,255,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 rounded-xl gradient-border glass px-5 py-3 text-sm font-semibold text-foreground transition-all hover:text-cyan"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {[
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Gmail' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl glass gradient-border text-muted-foreground transition-all hover:-translate-y-1 hover:text-cyan hover:shadow-[0_0_20px_rgba(90,160,255,0.4)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: profile image with glowing frame */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="animate-spin-slow absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,var(--cyan),var(--primary),var(--violet),var(--cyan))] opacity-70 blur-md" />
            <div className="animate-float-slow relative h-60 w-60 overflow-hidden rounded-full border border-border glass sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent" />
              <Image
                src="/profile.png"
                alt="Portrait of Devkinandan Dubey"
                fill
                priority
                sizes="(max-width: 640px) 240px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cyan" />
        </div>
      </div>
    </section>
  )
}
