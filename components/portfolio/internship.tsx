'use client'

import { Briefcase, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function Internship() {
  return (
    <section className="relative px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-border glass p-8 text-center sm:p-12">
            <div className="animate-float-slow absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />
            <div className="animate-float-slow absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-violet/20 blur-3xl [animation-delay:3s]" />
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-cyan">
                <Briefcase size={15} />
                Open to Internship Opportunities
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                Let&apos;s build something great together
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                I am currently looking for internship opportunities in Artificial Intelligence,
                Machine Learning, Software Development, and Web Development where I can learn,
                contribute, and gain real-world experience.
              </p>
              <button
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_rgba(90,160,255,0.6)] transition-transform hover:-translate-y-0.5"
              >
                Hire Me
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
