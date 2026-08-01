'use client'

import { useEffect, useState } from 'react'

/* Decorative floating gradient orbs behind content */
export function BackgroundOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="animate-float-slow absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="animate-float-slow absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan/15 blur-[130px] [animation-delay:2s]" />
      <div className="animate-float-slow absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet/15 blur-[120px] [animation-delay:4s]" />
    </div>
  )
}

/* Top scroll progress indicator */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-cyan via-primary to-violet transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/* Cursor-following glow (desktop, fine pointers only) */
export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[55] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
    </div>
  )
}

/* Loading screen shown briefly on first paint */
export function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1200)
    const t2 = setTimeout(() => setHidden(true), 1900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={done}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-transparent border-t-cyan border-r-primary" />
        <div className="animate-spin-slow absolute inset-2 rounded-full border-2 border-transparent border-b-violet [animation-direction:reverse]" />
        <span className="font-display text-xl font-bold gradient-text">DD</span>
      </div>
      <p className="mt-6 font-display text-sm tracking-[0.3em] text-muted-foreground">
        LOADING
      </p>
    </div>
  )
}

/* Back-to-top button */
export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full glass gradient-border text-primary transition-all duration-300 hover:text-cyan hover:shadow-[0_0_24px_rgba(90,160,255,0.5)] ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  )
}
