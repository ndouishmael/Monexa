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
        description="Monexa uses a disciplined software engineering workflow: understand, define, design, engineer, launch and evolve."
        path="/how-we-work"
      />

      <PageHero
        eyebrow="How we work"
        title={<>An engineering workflow, not a sales funnel.</>}
        intro={
          <>
            We begin with context, turn ambiguity into a clear system, engineer deliberately and
            keep learning after the software meets the real world.
          </>
        }
      >
        <div className="flex max-w-4xl flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.13em] text-ink-500">
          {process.map((stage, index) => (
            <span key={stage.title} className="flex items-center gap-3">
              <span className="font-semibold text-ink-800">{stage.title}</span>
              {index < process.length - 1 && <span className="text-brand-blue">→</span>}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="container-page section-space">
        <SectionHeading
          eyebrow="The process"
          title="Six stages. One continuous engineering discipline."
          intro="The stages create clarity without pretending every project is identical. Each decision is informed by the problem, the people and the operating context."
        />

        <ol className="relative mt-14">
          <div
            className="absolute bottom-0 left-[1.45rem] top-0 hidden w-px bg-ink-200 sm:block lg:left-1/2"
            aria-hidden="true"
          />
          {process.map((stage, index) => (
            <Reveal key={stage.index} delay={index * 45}>
              <li className="relative mb-6 grid grid-cols-[3rem_1fr] gap-5 lg:grid-cols-[1fr_4rem_1fr] lg:gap-8">
                <div className="relative z-10 col-start-1 row-start-1 flex h-12 w-12 items-center justify-center bg-ink-950 font-mono text-xs font-semibold text-white lg:col-start-2">
                  {stage.index}
                </div>
                <div
                  className={`col-start-2 row-start-1 border border-ink-100 bg-white p-6 sm:p-7 lg:col-span-1 ${
                    index % 2 === 0 ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-3'
                  }`}
                >
                  <span className="system-label">Stage {stage.index}</span>
                  <h2 className="mt-4 text-2xl font-semibold text-ink-950">{stage.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink-600">{stage.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="container-page section-space">
          <SectionHeading
            eyebrow="What stays constant"
            title="Principles that run through every stage."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 60} className="h-full">
                <article className="h-full bg-white p-7">
                  <span className="font-mono text-[10px] text-brand-blue">0{index + 1}</span>
                  <h3 className="mt-7 text-xl font-semibold text-ink-950">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-600">{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
