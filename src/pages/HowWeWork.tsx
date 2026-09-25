import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { principles, process } from '../data/content'

export default function HowWeWork() {
  return (
    <>
      <Seo
        title="How We Work"
        description="Monexa follows an engineering workflow: Understand, Define, Design, Engineer, Launch, Evolve — a disciplined process rather than a generic sales funnel."
        path="/how-we-work"
      />

      <PageHero
        eyebrow="How we work"
        title={<>An engineering workflow, not a sales funnel.</>}
        intro={
          <>
            We approach software the way engineers do: understand the problem, define the scope,
            design the system, build it with discipline, launch it carefully, and help it evolve.
          </>
        }
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-ink-500">
          {process.map((s, i) => (
            <span key={s.title} className="flex items-center gap-3">
              <span className="text-ink-800">{s.title}</span>
              {i < process.length - 1 && <span className="text-brand-blue">→</span>}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Process timeline */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="The process"
          title="Six stages, one continuous discipline."
          intro="Each stage builds on the last. The final stage loops back into the first — software is never really finished."
        />

        <div className="relative mt-14">
          {/* vertical connecting line */}
          <div
            className="pointer-events-none absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand-blue via-brand-teal to-transparent sm:block"
            aria-hidden="true"
          />
          <ol className="space-y-6">
            {process.map((stage, i) => (
              <Reveal key={stage.index} delay={i * 60}>
                <li className="relative flex gap-5 sm:gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ink-100 bg-white font-mono text-sm font-semibold text-brand-blue shadow-sm">
                    {stage.index}
                  </div>
                  <div className="card card-hover flex-1">
                    <h3 className="text-xl font-bold text-ink-900">{stage.title}</h3>
                    <p className="mt-2 text-ink-600 text-pretty">{stage.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles reminder */}
      <section className="border-t border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="What runs through it"
            title="The principles behind every stage."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-ink-100 bg-white p-6">
                  <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
