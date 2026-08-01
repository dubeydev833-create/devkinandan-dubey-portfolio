import { Brain, Code2, GraduationCap, Rocket } from 'lucide-react'
import { stats } from '@/lib/portfolio-data'
import { Counter } from './counter'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  { icon: Brain, title: 'AI & Machine Learning', text: 'Exploring intelligent systems and data-driven models.' },
  { icon: Code2, title: 'Web Development', text: 'Building responsive, accessible web experiences.' },
  { icon: GraduationCap, title: 'Always Learning', text: 'Continuously improving my programming skills.' },
  { icon: Rocket, title: 'Problem Solver', text: 'Turning real-world problems into practical apps.' },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Passionate about building the intelligent future"
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              I am{' '}
              <span className="font-semibold text-foreground">Devkinandan Dubey</span>, a
              second-year B.Tech student specializing in Computer Science Engineering with
              Artificial Intelligence &amp; Machine Learning at{' '}
              <span className="font-semibold text-foreground">GLA University</span>. I am
              passionate about Artificial Intelligence, Machine Learning, Programming, and Web
              Development. I enjoy building practical applications, learning new technologies, and
              continuously improving my technical skills. My goal is to contribute to innovative
              software and AI solutions while growing as a developer.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl glass gradient-border p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold sm:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} raw={stat.raw} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group h-full rounded-2xl glass gradient-border p-5 transition-transform hover:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-cyan transition-colors group-hover:bg-primary/20">
                    <item.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
