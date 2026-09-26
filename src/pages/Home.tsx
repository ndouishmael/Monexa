import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import HeroVisual from '../components/visuals/HeroVisual'
import SectionHeading from '../components/SectionHeading'
import ProductFrame from '../components/visuals/ProductFrame'
import CapabilityIcon from '../components/CapabilityIcon'
import CtaBand from '../components/CtaBand'
import { products } from '../data/products'
import { capabilityAreas, engagement } from '../data/content'
import { site } from '../data/site'
import { IconArrowRight, IconCheck } from '../components/Icons'

export default function Home() {
  const [lead, ...rest] = products

  return (
    <>
      <Seo
        title="Monexa"
        description="Monexa is a South African software engineering company. We design and engineer custom software for businesses — web and mobile applications, business platforms, internal systems, integrations and automation — and develop our own software products."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-70 mask-fade-b"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-blue" />
                Software Engineering Company
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                Software engineered for{' '}
                <span className="gradient-text">real-world problems.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
                Monexa designs and engineers custom software for businesses — web and
                mobile applications, business platforms, internal systems, integrations
                and automation. We also develop our own software products, currently
                across healthcare, finance and infrastructure monitoring.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-accent">
                  Start a project
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/products" className="btn-ghost">
                  Explore our products
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-10 grid max-w-lg gap-3 border-t border-ink-100 pt-8 sm:grid-cols-2">
                {[
                  'Custom software built around your problem',
                  'Web, mobile, platforms and internal systems',
                  'Integrations, automation and dashboards',
                  'Three Monexa products in development',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative rounded-2xl border border-ink-100 bg-white/70 p-4 shadow-[0_30px_80px_-40px_rgba(11,32,53,0.4)] backdrop-blur-sm">
              <HeroVisual className="h-auto w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Custom software engineering — the centre of gravity */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Custom Software Engineering"
          intro="Most businesses do not have a software problem in general — they have a specific one. A process that runs on spreadsheets. Two systems that do not talk. Work that gets rekeyed by hand. We build software around that specific problem, rather than fitting the business into a product that was designed for someone else."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityAreas.map((cap, i) => (
            <Reveal key={cap.id} delay={(i % 4) * 70}>
              <div className="card card-hover h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-brand-blue">
                  <CapabilityIcon name={cap.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{cap.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl text-ink-700 text-pretty">
              The technology stack is chosen once we understand the system, not before.
              We pick what suits the problem, the people who will run it and how long it
              needs to last.
            </p>
            <Link to="/services" className="btn-ghost shrink-0 bg-white">
              See our services in detail
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Products — evidence of engineering work */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Our products"
            title="We also build software products of our own."
            intro="Alongside client engineering, Monexa develops its own products. All three are currently in development — and they are the clearest demonstration of the kind of systems we build."
          />

          {/* Lead product — full interface */}
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <ProductFrame product={lead} size="feature" />
            </Reveal>
            <Reveal delay={120}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  {lead.status}
                </span>
                <h3 className="mt-4 text-3xl font-bold text-ink-900">{lead.name}</h3>
                <p className="mt-1 font-medium text-brand-blue">{lead.category}</p>
                <p className="mt-4 text-ink-600 text-pretty">{lead.short}</p>
                <p className="mt-3 text-sm text-ink-500">{lead.relationship}</p>
                <Link
                  to={`/products/${lead.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-blue"
                >
                  Explore {lead.name}
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Remaining products */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group card card-hover flex h-full flex-col !p-5"
                >
                  <ProductFrame product={p} size="card" />
                  <div className="mt-5 flex flex-1 flex-col">
                    <span className="inline-flex w-fit items-center rounded-full border border-ink-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
                      {p.status}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-ink-900">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-blue">{p.category}</p>
                    {p.tagline && (
                      <p className="mt-1 text-sm italic text-ink-500">{p.tagline}</p>
                    )}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                      {p.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                      Explore {p.name}
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10">
              <Link to="/products" className="btn-ghost bg-white">
                All Monexa products
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How engagement works */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="We don't start with technology. We start with the problem."
              intro="Every engagement runs through the same six stages, scaled to the size of the system. A small internal tool moves through them in weeks; a business platform takes longer and revisits them more than once."
            />
            <Reveal delay={160}>
              <Link to="/how-we-work" className="btn-ghost mt-8">
                How we work, in detail
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {engagement.map((step, i) => (
              <Reveal key={step.index} delay={i * 60}>
                <div className="h-full rounded-xl border border-ink-100 bg-white p-5">
                  <span className="text-sm font-semibold text-brand-blue">{step.index}</span>
                  <h3 className="mt-1.5 text-lg font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {step.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / vision */}
      <section className="border-t border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full bg-white">
                <p className="eyebrow">
                  <span className="h-px w-6 bg-brand-blue" />
                  Mission
                </p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-ink-900 text-pretty">
                  {site.mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full bg-white">
                <p className="eyebrow">
                  <span className="h-px w-6 bg-brand-teal" />
                  Vision
                </p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-ink-900 text-pretty">
                  {site.vision}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-ink-600">
                Built in South Africa. Local understanding, global ambition.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-blue"
              >
                About Monexa
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
