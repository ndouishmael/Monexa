import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { principles } from '../data/content'
import { site } from '../data/site'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Monexa is a software engineering company founded in 2025, built in South Africa. Local understanding, global ambition. Our mission: to solve real-world problems with meaningful software."
        path="/about"
      />

      <PageHero
        eyebrow="About Monexa"
        title={
          <>
            A serious software engineering company that happens to be young.
          </>
        }
        intro={
          <>
            Monexa was founded in {site.foundedYear}. In 2026, we are focused on software
            engineering and building meaningful software products. We are grounded about where
            we are — and clear about where we are going.
          </>
        }
      />

      {/* Story */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="prose-none max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-blue" />
                Who we are
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">
                Built in South Africa.
              </h2>
              <p className="mt-3 text-xl font-medium text-brand-blue">
                Local understanding. Global ambition.
              </p>
              <div className="mt-6 space-y-4 text-ink-600 text-pretty">
                <p>
                  Monexa is a software engineering company that also builds and owns software
                  products. Custom software engineering is our primary capability — working with
                  businesses to understand real problems and engineer software around them.
                </p>
                <p>
                  We also identify problems worth solving and build our own products. Those
                  products are currently in development, engineered with the same discipline we
                  bring to everything else we do.
                </p>
                <p>
                  We are early in our journey, and we would rather show it through the quality of
                  our engineering and design than through claims we have not yet earned.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="rounded-xl border border-ink-100 bg-white p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                  Founded
                </span>
                <p className="mt-1 text-3xl font-bold text-ink-900">{site.foundedYear}</p>
              </div>
              <div className="rounded-xl border border-ink-100 bg-white p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                  Based in
                </span>
                <p className="mt-1 text-3xl font-bold text-ink-900">{site.location}</p>
              </div>
              <div className="rounded-xl border border-ink-100 bg-white p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                  Focus in 2026
                </span>
                <p className="mt-1 text-lg font-semibold text-ink-900">
                  Software engineering & building meaningful products
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-8 md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-teal">
                    Mission
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-snug text-white text-pretty">
                    {site.mission}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-8 md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-teal">
                    Vision
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-snug text-white text-pretty">
                    {site.vision}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Our principles"
          title="Four principles that guide the software we build."
          intro="They are simple on purpose. They keep us honest about why we build and how."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card card-hover h-full">
                <span className="font-mono text-sm text-brand-blue">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
