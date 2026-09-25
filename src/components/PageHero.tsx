import type { ReactNode } from 'react'
import Reveal from './Reveal'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}

/** Consistent inner-page hero with a subtle engineering grid backdrop. */
export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50/40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70 mask-fade-b" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="relative container-page py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-6 bg-brand-blue" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 text-pretty">
              {intro}
            </div>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
