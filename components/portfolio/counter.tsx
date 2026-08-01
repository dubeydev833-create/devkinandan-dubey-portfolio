'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  value: number
  suffix?: string
  raw?: boolean
}

export function Counter({ value, suffix = '', raw = false }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1400
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
              else setCount(value)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  const display = raw ? count.toString() : count.toLocaleString()

  return (
    <span ref={ref} className="gradient-text">
      {display}
      {suffix}
    </span>
  )
}
