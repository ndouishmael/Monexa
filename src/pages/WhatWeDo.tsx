import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { capabilities, process } from '../data/content'
import {
  IconArrowRight,
  IconCheck,
  IconCode,
  IconLayers,
  IconLink,
  IconRefresh,
} from '../components/Icons'

const capIcons = [IconCode, IconLayers, IconLink, IconRefresh]

export default function WhatWeDo() {
  return (
    <>
      <Seo
        title="What We Do"
        description="Monexa engineers custom software around real business requirements — custom software engineering, product engineering, systems & integrations, and modernisation."
        path="/what-we-do"
      />

      <PageHero
        eyebrow="What we do"
        title={<>Software engineering, from the problem up.</>}
        intro={
          <>
            Monexa is, first and foremost, a software engineering company. We work with
            businesses to understand real problems and engineer software that fits how they
            actually work — designed with architecture and discipline, built to last.
          </>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn-accent">
            Speak to us
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/how-we-work" className="btn-ghost">
            See how we work
          </Link>
        </div>
      </PageHero>

      {/* Capabilities detail */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Four capabilities that cover what businesses actually need."
          intro="We keep our offering focused and honest: this is the engineering work we do."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {capabilities.map((cap, i) => {
            const Icon = capIcons[i]
            return (
              <Reveal key={cap.id} delay={(i % 2) * 100}>
                <article className="card card-hover flex h-full flex-col">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-brand-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900">{cap.title}</h3>
                  </div>
                  <p className="mt-4 text-ink-600 text-pretty">{cap.summary}</p>
                  <ul className="mt-5 space-y-3 border-t border-ink-100 pt-5">
                    {cap.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-ink-700">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
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

      {/* Two-sided model */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="How we're set up"
                title="We engineer for others — and for ourselves."
                intro="The same engineering discipline runs through everything we do, whether we are building for a business or building our own products."
              />
              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-ink-100 bg-white p-5">
                  <h3 className="font-bold text-ink-900">For businesses</h3>
                  <p className="mt-1.5 text-sm text-ink-600">
                    We partner with you to understand a real problem and engineer software
                    around it — from a single system to an ongoing engineering relationship.
                  </p>
                </div>
                <div className="rounded-xl border border-ink-100 bg-white p-5">
                  <h3 className="font-bold text-ink-900">For our own products</h3>
                  <p className="mt-1.5 text-sm text-ink-600">
                    We identify problems worth solving and build our own software products —
                    currently in development across healthcare, finance and infrastructure.
                  </p>
                  <Link
                    to="/products"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-teal"
                  >
                    Explore our products
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-ink-100 bg-white p-8">
                <p className="eyebrow">
                  <span className="h-px w-6 bg-brand-blue" />
                  Our engineering workflow
                </p>
                <ol className="mt-6 space-y-1">
                  {process.map((stage, i) => (
                    <li key={stage.index} className="flex items-center gap-4 py-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 font-mono text-xs text-white">
                        {stage.index}
                      </span>
                      <span className="font-semibold text-ink-800">{stage.title}</span>
                      {i < process.length - 1 && (
                        <span className="ml-auto font-mono text-ink-300">↓</span>
                      )}
                    </li>
                  ))}
                </ol>
                <Link
                  to="/how-we-work"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-blue"
                >
                  See the full process
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
