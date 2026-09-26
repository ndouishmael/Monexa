import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CapabilityIcon from '../components/CapabilityIcon'
import CtaBand from '../components/CtaBand'
import { capabilityAreas, engagement } from '../data/content'
import { IconArrowRight, IconCheck } from '../components/Icons'

const engagementShapes = [
  {
    title: 'A defined build',
    description:
      'A system with a clear scope — an internal tool, a portal, an integration, a first version of a platform. We scope it, build it, launch it and hand it over.',
  },
  {
    title: 'An ongoing engineering relationship',
    description:
      'Software that keeps evolving after launch. We continue to maintain, extend and improve the system as the business changes around it.',
  },
  {
    title: 'Replacing something that no longer fits',
    description:
      'An ageing system, an outgrown spreadsheet process, or software that was never designed for how the business works now. We work out what to keep, what to rebuild and how to move across without stopping the business.',
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Monexa's custom software engineering services: web and mobile applications, business platforms, internal systems, APIs and integrations, automation, data and dashboards, and custom enterprise software."
        path="/services"
      />

      <PageHero
        eyebrow="Services"
        title={<>Custom Software Engineering</>}
        intro={
          <>
            Monexa is a software engineering company. Our primary business is building
            software around a specific business or operational problem — designed for how
            an organisation actually works, engineered to be maintained and extended
            rather than replaced in two years.
          </>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn-accent">
            Start a project
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/how-we-work" className="btn-ghost">
            How we work
          </Link>
        </div>
      </PageHero>

      {/* What we can build */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Capability areas"
          title="What you can hire Monexa to build."
          intro="Most projects combine several of these. A business platform usually needs integrations; an internal system usually needs a dashboard; a mobile application usually needs an API behind it."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilityAreas.map((cap, i) => (
            <Reveal key={cap.id} delay={(i % 2) * 90}>
              <article className="card card-hover flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-brand-blue">
                    <CapabilityIcon name={cap.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900">{cap.title}</h3>
                </div>
                <p className="mt-4 text-ink-600 text-pretty">{cap.summary}</p>
                <ul className="mt-5 space-y-3 border-t border-ink-100 pt-5">
                  {cap.examples.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-ink-700">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The engagement, stage by stage */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="The engagement"
            title="From understanding the problem to running the software."
            intro="This is the full arc of a Monexa engagement. Not every project needs every stage at the same depth — but the order rarely changes, because each stage depends on the one before it."
          />

          <div className="mt-14 space-y-6">
            {engagement.map((step, i) => (
              <Reveal key={step.index} delay={i * 50}>
                <article className="grid gap-6 rounded-2xl border border-ink-100 bg-white p-6 md:grid-cols-[auto_1.5fr_1fr] md:items-start md:gap-8 md:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ink-100 bg-ink-50 text-sm font-bold text-brand-blue">
                    {step.index}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">{step.title}</h3>
                    <p className="mt-1 font-medium text-brand-blue">{step.summary}</p>
                    <p className="mt-3 text-ink-600 text-pretty">{step.detail}</p>
                  </div>
                  <div className="rounded-xl bg-ink-50/70 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      What you get
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {step.outputs.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shapes of engagement */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Ways to work with us"
          title="Three shapes most engagements take."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagementShapes.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="card card-hover h-full">
                <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology position */}
      <section className="border-t border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="On technology"
                title="The stack is a consequence of the problem, not a marketing list."
                intro="We are deliberately not publishing a wall of framework logos. The useful question is not which technologies we can name — it is whether the system that gets built suits the problem, the people who have to run it and the time it has to last."
              />
            </div>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-ink-100 bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  What decides it
                </p>
                <ul className="mt-5 space-y-4">
                  {[
                    'What the system actually has to do, and for how many people.',
                    'What already exists in the business and has to be integrated with.',
                    'Whether it needs to run on the web, on a phone, or both.',
                    'Who will operate and support it after launch.',
                    'How long the software is expected to live, and how much it will change.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-700">
                      <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-ink-100 pt-5 text-sm text-ink-600">
                  We will always tell you what we intend to use and why, before we build
                  it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-ink-100 bg-white p-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-12">
            <div>
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-teal" />
                Evidence of the work
              </p>
              <h2 className="mt-4 text-2xl font-bold text-ink-900 sm:text-3xl">
                The clearest example of what we build is what we are building.
              </h2>
              <p className="mt-4 text-ink-600 text-pretty">
                Monexa is a young company, so rather than borrowing credibility from logos
                or case studies we cannot show, we point at our own products. TouchMed24,
                Ledger &amp; Saldo and The Eye are Monexa products in development — real
                systems, with real interfaces, engineered by the same team you would be
                hiring.
              </p>
            </div>
            <Link to="/products" className="btn-primary w-full justify-center md:w-auto">
              See our products
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}
