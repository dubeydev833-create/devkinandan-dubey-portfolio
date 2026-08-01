'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, Database, Globe, Cpu, Wrench, Users } from 'lucide-react'
import { skillGroups, softSkills } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const categoryIcons: Record<string, typeof Code2> = {
  'Programming Languages': Code2,
  'Web Development': Globe,
  'Artificial Intelligence': Cpu,
  Database: Database,
  Tools: Wrench,
}

function SkillBar({ name, level, note }: { name: string; level: number; note?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">
          {name}
          {note && <span className="ml-2 text-xs text-cyan">({note})</span>}
        </span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/70">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan via-primary to-violet transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & tools I work with"
          description="A growing toolkit spanning programming, web development, AI, and the fundamentals that power great software."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? Code2
            return (
              <Reveal key={group.category} delay={i * 80}>
                <div className="h-full rounded-2xl glass gradient-border p-6 transition-transform hover:-translate-y-1">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-cyan">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-base font-semibold">{group.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}

          <Reveal delay={400}>
            <div className="h-full rounded-2xl glass gradient-border p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-cyan">
                  <Users size={18} />
                </span>
                <h3 className="font-display text-base font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
