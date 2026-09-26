import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { engagement } from '../data/content'
import { IconArrowRight, IconCheck } from '../components/Icons'

const scales = [
  {
    title: 'A small internal tool',
    body: 'Understand and Define can happen in a couple of conversations. Design is mostly the screens people will use. The whole thing can move from problem to live software quickly, and Evolve is usually light-touch.',
  },
  {
    title: 'A substantial system or platform',
    body: 'Understand and Define take real work, because getting the scope wrong is expensive later. Design and Engineer run in overlapping passes, feature area by feature area, with working software to look at along the way.',
  },
  {
    title: 'Replacing something that already exists',
    body: 'There is an extra question running through every stage: what happens to the data, the users and the work in flight. Launch becomes a migration rather than a switch, and it gets planned as one.',
  },
]

export default function HowWeWork() {
  return (
    <>
      <Seo
        title="How We Work"
        description="How Monexa builds software: Understand, Define, Design, Engineer, Launch, Evolve — a practical process that starts with the problem, not the technology."
        path="/how-we-work"
      />

      <PageHero
        eyebrow="How we work"
        title={
          <>
            We don&rsquo;t start with technology. We start with the problem.
          </>
        }
        intro={
          <>
            Six stages, scaled to the size of the system. The point of having a process is
            not ceremony — it is that each stage stops a specific kind of expensive mistake
            from reaching the next one.
          </>
        }
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          {engagement.map((s, i) => (
            <span key={s.title} className="flex items-center gap-3">
              <span className="font-semibold text-ink-800">{s.title}</span>
              {i < engagement.length - 1 && (
                <span className="text-brand-blue" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Stages */}
      <section className="container-page py-16 md:py-24">
        <div className="relative">
          <div
            className="pointer-events-none absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand-blue via-brand-teal to-transparent sm:block"
            aria-hidden="true"
          />
          <ol className="space-y-6">
            {engagement.map((stage, i) => (
              <Reveal key={stage.index} delay={i * 60}>
                <li className="relative flex gap-5 sm:gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ink-100 bg-white text-sm font-bold text-brand-blue shadow-sm">
                    {stage.index}
                  </div>
                  <div className="card card-hover flex-1">
                    <h2 className="text-xl font-bold text-ink-900">{stage.title}</h2>
                    <p className="mt-1 font-medium text-brand-blue">{stage.summary}</p>
                    <p className="mt-3 text-ink-600 text-pretty">{stage.detail}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink-100 pt-4">
                      {stage.outputs.map((o) => (
                        <li
                          key={o}
                          className="flex items-start gap-2 text-sm text-ink-600"
                        >
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Adapting to scale */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Proportion"
            title="The process scales to the system."
            intro="The same six stages apply to a two-week internal tool and to a platform built over months. What changes is how much each stage costs and how often it repeats."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {scales.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card card-hover h-full bg-white">
                  <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working with us practically */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="In practice"
              title="What working with Monexa is actually like."
            />
            <Reveal delay={140}>
              <Link to="/services" className="btn-ghost mt-8">
                See our services
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ul className="space-y-5">
              {[
                'The first conversation is about your problem, not our services. If software is not the answer, we will say so.',
                'You see working software early and regularly, rather than waiting for a reveal at the end.',
                'Scope is written down, including what we are deliberately not building in the first version.',
                'We explain technical decisions in terms of what they mean for you: cost, time, risk and what becomes harder or easier later.',
                'When something takes longer than expected, you hear it when we know, not at the deadline.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
