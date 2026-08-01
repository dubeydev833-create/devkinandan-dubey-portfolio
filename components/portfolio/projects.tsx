'use client'

import { Brain, Code2, LayoutDashboard, ExternalLink } from 'lucide-react'
import { Github } from '@/components/portfolio/brand-icons'
import { projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const icons = {
  brain: Brain,
  code: Code2,
  layout: LayoutDashboard,
}

const statusStyles = {
  coming: 'bg-violet/15 text-violet border-violet/30',
  progress: 'bg-primary/15 text-cyan border-primary/30',
  done: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I'm building"
          description="A snapshot of what I'm working on as I apply what I learn to real, hands-on projects."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = icons[project.icon as keyof typeof icons]
            return (
              <Reveal key={project.title} delay={i * 90} as="article">
                <div className="group flex h-full flex-col rounded-2xl glass gradient-border p-6 transition-transform hover:-translate-y-1.5">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-cyan transition-transform group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <span
                      className={cn(
                        'rounded-full border px-3 py-1 text-xs font-medium',
                        statusStyles[project.statusTone],
                      )}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-cyan"
                    >
                      <Github size={15} />
                      Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground/50"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
