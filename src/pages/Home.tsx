import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import HeroVisual from '../components/visuals/HeroVisual'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import CtaBand from '../components/CtaBand'
import { products } from '../data/products'
import { capabilities, process } from '../data/content'
import { site } from '../data/site'
import {
  IconArrowRight,
  IconCode,
  IconLayers,
  IconLink,
  IconRefresh,
} from '../components/Icons'

const capabilityIcons = [IconCode, IconLayers, IconLink, IconRefresh]

export default function Home() {
  return (
    <>
      <Seo
        title="Monexa"
        description="Monexa is a South African software engineering company. We engineer meaningful software for businesses and build products that solve real-world problems."
        path="/"
      />

      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-70" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-[8%] w-px bg-white/10" aria-hidden="true" />

        <div className="relative container-page grid min-h-[720px] items-center gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-teal">
                <span className="h-px w-8 bg-brand-teal" />
                Software engineering company · South Africa
              </p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.75rem]">
                Software built for the{' '}
                <span className="relative whitespace-nowrap">
                  real world.
                  <span className="absolute inset-x-0 -bottom-2 h-[3px] origin-left bg-brand-teal" aria-hidden="true" />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-xl text-lg leading-8 text-ink-200 sm:text-xl">
                We engineer meaningful software for businesses, and build products that solve
                problems across industries.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-accent">
                  Speak to us
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/what-we-do"
                  className="btn border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                >
                  Explore our engineering
                </Link>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-14 grid max-w-xl grid-cols-2 border-y border-white/10 sm:grid-cols-3">
                {['Custom systems', 'Digital products', 'Connected software'].map((label, index) => (
                  <div
                    key={label}
                    className={`py-4 ${index > 0 ? 'border-l border-white/10 pl-4 sm:pl-5' : ''}`}
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-500">
                      0{index + 1}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-ink-200">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="border border-white/15 bg-white p-3 shadow-[0_42px_100px_-45px_rgba(0,0,0,.85)] sm:p-4">
              <div className="mb-3 flex items-center justify-between border-b border-ink-100 pb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-400">
                <span>Monexa / system architecture</span>
                <span className="inline-flex items-center gap-2 text-brand-tealdark">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  Concept model
                </span>
              </div>
              <HeroVisual className="h-auto w-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden border border-white/15 bg-ink-900 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-300 sm:block">
              Problem → architecture → software
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink-100 bg-white">
        <div className="container-page grid divide-y divide-ink-100 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['Primary capability', 'Custom software engineering'],
            ['Company model', 'Client systems + Monexa products'],
            ['Ambition', 'South African roots, global outlook'],
          ].map(([label, value]) => (
            <div key={label} className="py-6 md:px-7 first:md:pl-0 last:md:pr-0">
              <dt className="system-label">{label}</dt>
              <dd className="mt-2 text-sm font-semibold text-ink-900">{value}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page section-space">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Engineering first"
            title="Software shaped around the problem — not the other way around."
            intro="Custom software engineering is the primary thing we do. We work from real requirements, define the system carefully, and build technology that makes sense in context."
          />

          <Reveal delay={100}>
            <div className="technical-panel bg-grid-fine p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                {[
                  ['01', 'Understand', 'People, process, constraint'],
                  ['02', 'Engineer', 'Architecture, interface, code'],
                  ['03', 'Evolve', 'Operate, learn, improve'],
                ].map(([number, title, detail], index) => (
                  <div key={title} className="contents">
                    <div className="border border-ink-200 bg-white p-5">
                      <span className="font-mono text-[10px] text-brand-blue">{number}</span>
                      <h3 className="mt-5 text-lg font-semibold text-ink-950">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-ink-500">{detail}</p>
                    </div>
                    {index < 2 && (
                      <span className="hidden font-mono text-sm text-ink-300 sm:block" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span className="h-2 w-2 rounded-full bg-brand-teal" />
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                  One continuous engineering loop
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index]
            return (
              <Reveal key={capability.id} delay={index * 60} className="h-full">
                <article className="group h-full bg-white p-6 transition-colors hover:bg-ink-50 sm:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-brand-blue" />
                    <span className="font-mono text-[10px] text-ink-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 text-lg font-semibold text-ink-950">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-600">{capability.summary}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
        <div className="mt-8">
          <Link to="/what-we-do" className="btn-ghost">
            See all capabilities
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="container-page section-space">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Products in development"
              title="We build our own software, too."
              intro="Three Monexa products being developed across healthcare, finance and infrastructure."
            />
            <Reveal>
              <Link to="/products" className="btn-ghost shrink-0">
                View product portfolio
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 80} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="A disciplined path from ambiguity to useful software."
              intro="Every engagement has its own context. The engineering discipline stays consistent."
            />
            <Reveal>
              <Link to="/how-we-work" className="btn-primary mt-8">
                Our working model
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <ol className="grid border-l border-t border-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((stage, index) => (
              <Reveal key={stage.index} delay={index * 50}>
                <li className="min-h-52 border-b border-r border-ink-100 p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-brand-blue">{stage.index}</span>
                    {index < process.length - 1 && (
                      <span className="font-mono text-ink-300" aria-hidden="true">→</span>
                    )}
                  </div>
                  <h3 className="mt-10 text-xl font-semibold text-ink-950">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{stage.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink-950 text-white">
        <div className="container-page grid lg:grid-cols-2">
          <Reveal className="border-b border-white/10 px-0 py-14 lg:border-b-0 lg:border-r lg:py-20 lg:pr-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">Mission</p>
            <p className="mt-5 max-w-xl text-2xl font-medium leading-snug text-white sm:text-3xl">
              {site.mission}
            </p>
          </Reveal>
          <Reveal delay={80} className="px-0 py-14 lg:py-20 lg:pl-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">Vision</p>
            <p className="mt-5 max-w-xl text-2xl font-medium leading-snug text-white sm:text-3xl">
              {site.vision}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
