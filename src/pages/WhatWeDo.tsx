import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { capabilities } from '../data/content'
import {
  IconArrowRight,
  IconCheck,
  IconCode,
  IconLayers,
  IconLink,
  IconRefresh,
} from '../components/Icons'

const capabilityIcons = [IconCode, IconLayers, IconLink, IconRefresh]

export default function WhatWeDo() {
  return (
    <>
      <Seo
        title="What We Do"
        description="Monexa provides custom software engineering, product engineering, systems integration and software modernisation."
        path="/what-we-do"
      />

      <PageHero
        eyebrow="What we do"
        title={<>Custom software engineering, from the problem up.</>}
        intro={
          <>
            We work with businesses to understand real requirements and engineer software around
            them. Architecture, interface and implementation are treated as one connected system
            — designed to be useful now and maintainable over time.
          </>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn-accent">
            Speak to us
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/how-we-work" className="btn-ghost">How we work</Link>
        </div>
      </PageHero>

      <section className="container-page section-space">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Focused engineering capabilities for real business systems."
          intro="Custom engineering is our centre of gravity. The capabilities around it help move software from idea to dependable system."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index]
            return (
              <Reveal key={capability.id} delay={(index % 2) * 70} className="h-full">
                <article className="group h-full border border-ink-100 bg-white p-7 transition hover:border-ink-300 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-ink-950 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] text-ink-300">
                      CAPABILITY / 0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold text-ink-950">{capability.title}</h2>
                  <p className="mt-3 leading-7 text-ink-600">{capability.summary}</p>
                  <ul className="mt-7 space-y-3 border-t border-ink-100 pt-6">
                    {capability.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-6 text-ink-700">
                        <IconCheck className="mt-1 h-4 w-4 shrink-0 text-brand-teal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="container-page section-space">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="rule-label">How the work connects</p>
              <h2 className="mt-5 text-3xl font-semibold text-ink-950 sm:text-4xl">
                A system, not a collection of deliverables.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink-600">
                Business logic, data, interfaces and operations affect one another. We design
                those relationships deliberately so the software can work as a coherent whole.
              </p>
              <Link to="/how-we-work" className="btn-primary mt-8">
                See our engineering workflow
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Reveal delay={100}>
              <div className="technical-panel bg-grid-fine p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-ink-100 pb-4">
                  <span className="system-label">System view / conceptual</span>
                  <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-tealdark">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    Connected
                  </span>
                </div>
                <div className="relative mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
                  <div className="absolute left-[16%] right-[16%] top-1/2 h-px bg-ink-200" aria-hidden="true" />
                  {[
                    ['Interface', 'Human workflow'],
                    ['Application', 'Business logic'],
                    ['Data', 'Information model'],
                    ['Integration', 'System exchange'],
                    ['Platform', 'Runtime foundation'],
                    ['Operations', 'Observe and evolve'],
                  ].map(([title, detail], index) => (
                    <div key={title} className="relative z-10 border border-ink-200 bg-white p-4">
                      <span className="font-mono text-[9px] text-brand-blue">N{index + 1}</span>
                      <h3 className="mt-4 text-sm font-semibold text-ink-950">{title}</h3>
                      <p className="mt-1 text-[11px] text-ink-500">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="h-full border-t-2 border-brand-blue bg-ink-50 p-7 sm:p-9">
              <span className="system-label">Engineering for businesses</span>
              <h2 className="mt-5 text-2xl font-semibold text-ink-950">Built around your context.</h2>
              <p className="mt-4 leading-7 text-ink-600">
                We work to understand the process, constraint or opportunity before deciding what
                software should exist. The result may be a focused application, a connected system
                or a longer-term product engineering effort.
              </p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="h-full border-t-2 border-brand-teal bg-ink-50 p-7 sm:p-9">
              <span className="system-label">Engineering our products</span>
              <h2 className="mt-5 text-2xl font-semibold text-ink-950">The same discipline, owned by Monexa.</h2>
              <p className="mt-4 leading-7 text-ink-600">
                We apply the same system thinking to products we are building across healthcare,
                financial management and infrastructure monitoring.
              </p>
              <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Explore the product portfolio
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
