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
  title = 'Have a software problem worth solving?',
  intro = 'Tell us what you are trying to build, fix or replace. We start by understanding the problem, then we tell you honestly what it would take to solve it.',
  primaryLabel = 'Start a project',
  primaryTo = '/contact',
}: Props) {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl bg-ink-950 px-6 py-14 text-center sm:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand-teal/20 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300 text-pretty">{intro}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={primaryTo} className="btn-accent w-full sm:w-auto">
                {primaryLabel}
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="btn w-full border border-white/20 text-white hover:bg-white/10 sm:w-auto"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
