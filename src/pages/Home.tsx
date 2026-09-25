import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import HeroVisual from '../components/visuals/HeroVisual'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import CtaBand from '../components/CtaBand'
import ConceptNote from '../components/ConceptNote'
import { products } from '../data/products'
import { capabilities, principles } from '../data/content'
import { site } from '../data/site'
import {
  IconArrowRight,
  IconCode,
  IconGrid,
  IconLayers,
  IconLink,
  IconRefresh,
} from '../components/Icons'

const capIcons = [IconCode, IconLayers, IconLink, IconRefresh]

export default function Home() {
  return (
    <>
      <Seo
        title="Monexa"
        description="Monexa is a South African software engineering company. We engineer meaningful software for businesses and build our own software products."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70 mask-fade-b" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
        <div className="relative container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-blue" />
                Software Engineering Company
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                Software built for the{' '}
                <span className="gradient-text">real world.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
                We engineer meaningful software for businesses, and build products that
                solve problems across industries.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-accent">
                  Speak to us
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/what-we-do" className="btn-ghost">
                  What we do
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-md grid-cols-2 gap-x-6 gap-y-4 border-t border-ink-100 pt-8">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-ink-400">
                    Discipline
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-800">
                    Engineering-led, not template-led
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-ink-400">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-800">
                    Real problems, meaningful software
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative rounded-2xl border border-ink-100 bg-white/70 p-4 shadow-[0_30px_80px_-40px_rgba(11,32,53,0.4)] backdrop-blur-sm">
              <HeroVisual className="h-auto w-full" />
            </div>
            <div className="mt-3 text-right">
              <ConceptNote className="inline-block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two sides of the business */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Two sides, one discipline"
          title="A software engineering company that also builds and owns software products."
          intro="Custom software engineering is our primary capability. We also identify problems worth solving and build our own products around them."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card card-hover h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <IconCode className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-ink-900">Software Engineering</h3>
              <p className="mt-3 text-ink-600 text-pretty">
                We work with businesses to understand real problems and engineer software
                solutions around them — designed to fit how the business actually works,
                built with architecture and discipline.
              </p>
              <Link
                to="/what-we-do"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-blue"
              >
                Explore our capabilities
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card card-hover h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                <IconGrid className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-ink-900">Software Products</h3>
              <p className="mt-3 text-ink-600 text-pretty">
                We also identify problems worth solving and build our own software products.
                These are products currently being developed by Monexa — engineered with the
                same care we bring to client work.
              </p>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-teal"
              >
                See the product portfolio
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="What we do"
            title="Engineering software around real requirements."
            intro="Four core capabilities that cover the work most businesses actually need."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => {
              const Icon = capIcons[i]
              return (
                <Reveal key={cap.id} delay={i * 80}>
                  <div className="card card-hover h-full bg-white">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-brand-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-ink-900">{cap.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-600">
                          {cap.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="mt-10">
            <Link to="/what-we-do" className="btn-ghost">
              Learn how we work with businesses
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container-page py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our products"
            title="Software products being built by Monexa."
            intro="Products currently in development — designed to solve real problems in healthcare, finance and infrastructure."
          />
          <Reveal>
            <Link to="/products" className="btn-ghost shrink-0">
              All products
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / Vision + principles */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-ink-100 bg-white p-6">
                  <span className="font-mono text-xs text-brand-blue">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold text-ink-900">{p.title}</h3>
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
