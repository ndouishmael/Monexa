import type { ReactNode } from 'react'
import Reveal from './Reveal'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-75 mask-fade-b" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-brand-blue" aria-hidden="true" />
      <div className="relative container-page py-16 md:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-7 bg-brand-blue" />
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] text-ink-950 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                {title}
              </h1>
            </Reveal>
            {intro && (
              <Reveal delay={130}>
                <div className="mt-7 max-w-3xl text-lg leading-8 text-ink-600 text-pretty">
                  {intro}
                </div>
              </Reveal>
            )}
            {children && <Reveal delay={190} className="mt-8">{children}</Reveal>}
          </div>

          <Reveal delay={100} className="hidden lg:block">
            <div className="w-44 border border-ink-200 bg-white p-4 font-mono text-[9px] uppercase tracking-[0.15em] text-ink-400">
              <div className="flex items-center justify-between border-b border-ink-100 pb-3">
                <span>Monexa</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              </div>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt>Discipline</dt>
                  <dd className="mt-1 text-ink-700">Software engineering</dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd className="mt-1 text-ink-700">South Africa</dd>
                </div>
                <div>
                  <dt>Mode</dt>
                  <dd className="mt-1 text-ink-700">Build with substance</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
