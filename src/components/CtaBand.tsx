import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { IconArrowRight } from './Icons'

type Props = {
  title?: string
  intro?: string
  primaryLabel?: string
  primaryTo?: string
}

export default function CtaBand({
  title = 'Have a problem worth solving?',
  intro = 'Tell us what you are trying to build, fix or figure out. We would like to understand the problem before we talk about software.',
  primaryLabel = 'Speak to us',
  primaryTo = '/contact',
}: Props) {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden bg-ink-950 px-6 py-14 text-white sm:px-10 md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-brand-teal" aria-hidden="true" />
          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">
                Start a conversation
              </p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink-300">{intro}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to={primaryTo} className="btn-accent shrink-0">
                {primaryLabel}
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/what-we-do"
                className="btn shrink-0 border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              >
                What we do
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
