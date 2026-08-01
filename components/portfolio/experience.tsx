import { BookOpen, Target, Code2 } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const focusAreas = [
  { icon: BookOpen, label: 'Academic Learning' },
  { icon: Code2, label: 'Programming Practice' },
  { icon: Target, label: 'Building Projects' },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Where I am right now" />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl glass gradient-border p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-cyan">
                Student
              </span>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                Currently focused on academic learning, personal development, programming practice,
                and building projects while preparing for internships in{' '}
                <span className="font-semibold text-foreground">AI/ML</span>,{' '}
                <span className="font-semibold text-foreground">Software Development</span>, and{' '}
                <span className="font-semibold text-foreground">Web Development</span>.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {focusAreas.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-cyan">
                      <item.icon size={16} />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
