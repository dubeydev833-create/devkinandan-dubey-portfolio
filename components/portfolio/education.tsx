import { GraduationCap, CalendarDays, BadgeCheck } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const timeline = [
  {
    school: 'GLA University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering (Artificial Intelligence & Machine Learning)',
    period: '2025 – 2029',
    note: 'Expected Graduation: 2029',
    status: 'Second-Year Student',
  },
]

export function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="My academic journey" />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* vertical line */}
          <span className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-cyan via-primary to-transparent sm:left-4" />

          {timeline.map((item, i) => (
            <Reveal key={item.school} delay={i * 100}>
              <div className="relative mb-8">
                {/* node */}
                <span className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background sm:-left-10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full gradient-border glass text-cyan">
                    <GraduationCap size={13} />
                  </span>
                </span>

                <div className="rounded-2xl glass gradient-border p-6 transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{item.school}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-cyan">
                      <CalendarDays size={13} />
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 font-medium text-foreground">{item.degree}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.field}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground">
                      <BadgeCheck size={13} className="text-cyan" />
                      {item.status}
                    </span>
                    <span className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground">
                      {item.note}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
