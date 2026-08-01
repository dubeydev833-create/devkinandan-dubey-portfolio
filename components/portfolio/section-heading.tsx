import { Reveal } from './reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full gradient-border glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}
