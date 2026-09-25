import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import HeroVisual from '../components/visuals/HeroVisual'
import EngineeringPipeline from '../components/EngineeringPipeline'
import ProductSystemStage from '../components/ProductSystemStage'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { products } from '../data/products'
import { capabilities } from '../data/content'
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

      <section className="home-hero relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-55" aria-hidden="true" />
        <div className="home-hero__rail home-hero__rail--left" aria-hidden="true" />
        <div className="home-hero__rail home-hero__rail--right" aria-hidden="true" />

        <div className="relative container-page grid min-h-[760px] items-center gap-14 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <Reveal>
              <p className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-teal">
                <span className="h-px w-8 bg-brand-teal" />
                Monexa / Software Engineering
              </p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.9rem]">
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
                  Enter the engineering system
                </Link>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink-400">
                <span className="inline-flex items-center gap-2"><i className="h-1 w-1 rounded-full bg-brand-teal" />Custom systems</span>
                <span className="inline-flex items-center gap-2"><i className="h-1 w-1 rounded-full bg-brand-teal" />Product engineering</span>
                <span className="inline-flex items-center gap-2"><i className="h-1 w-1 rounded-full bg-brand-teal" />Connected software</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={90} className="relative lg:-mr-8">
            <HeroVisual />
          </Reveal>
        </div>

        <div className="relative border-t border-white/10 bg-ink-950/70">
          <div className="container-page grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ['PRIMARY CAPABILITY', 'Custom software engineering'],
              ['SYSTEM MODEL', 'Client systems + Monexa products'],
              ['ENGINEERING BASE', 'South Africa / Global ambition'],
            ].map(([label, value]) => (
              <div key={label} className="group py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-ink-500">{label}</span>
                <span className="mt-1.5 flex items-center gap-2 text-xs font-semibold text-ink-200">
                  <i className="h-1.5 w-1.5 rounded-full bg-brand-teal transition-transform group-hover:scale-150" />
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="section-continuity-line" aria-hidden="true" />
        <div className="container-page section-space relative">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Engineering is the centre"
              title="We turn real problems into working software systems."
              intro="Custom Software Engineering is the primary thing Monexa does. The work begins with context and moves through architecture, interface and implementation as one connected discipline."
            />
            <Reveal delay={80}>
              <div className="grid gap-px border border-ink-100 bg-ink-100 sm:grid-cols-2">
                {[
                  ['INPUT', 'Business reality', 'People, processes and constraints'],
                  ['OUTPUT', 'Meaningful software', 'A system with a reason to exist'],
                ].map(([label, title, copy]) => (
                  <div key={label} className="bg-white p-6">
                    <span className="system-label text-brand-blue">{label}</span>
                    <h3 className="mt-4 text-lg font-semibold text-ink-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">{copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <EngineeringPipeline />
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index]
              return (
                <Reveal key={capability.id} delay={index * 55} className="h-full">
                  <article className="group h-full bg-white p-6 transition-colors hover:bg-ink-50 sm:p-7">
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-brand-blue transition-transform group-hover:scale-110" />
                      <span className="font-mono text-[9px] text-ink-300">SYS / 0{index + 1}</span>
                    </div>
                    <h3 className="mt-9 text-lg font-semibold text-ink-950">{capability.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-600">{capability.summary}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal>
            <Link to="/what-we-do" className="btn-ghost mt-8">
              Explore our engineering capability
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="product-origin relative overflow-hidden border-y border-white/10 bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
        <div className="container-page relative py-16 md:py-20">
          <Reveal>
            <div className="product-origin__path" aria-label="Monexa engineering creates both custom software and owned products">
              <div className="product-origin__state">
                <span>01 / PRIMARY</span>
                <strong>Custom software</strong>
                <small>Engineered for businesses</small>
              </div>
              <div className="product-origin__connector" aria-hidden="true"><i /><b>→</b></div>
              <div className="product-origin__core">
                <span>MONEXA</span>
                <strong>Engineering system</strong>
                <small>One discipline</small>
              </div>
              <div className="product-origin__connector" aria-hidden="true"><i /><b>→</b></div>
              <div className="product-origin__state">
                <span>02 / OWNED</span>
                <strong>Monexa products</strong>
                <small>Built from the same capability</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="products-experience relative overflow-hidden bg-[#041522] text-white">
        <div className="products-experience__spine" aria-hidden="true" />
        <div className="container-page relative py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-teal">
                <span className="h-px w-7 bg-brand-teal" />
                Products emerge here
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                We also build our own software products.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink-300">
              The same engineering system extends into products being developed by Monexa across
              healthcare, finance and infrastructure.
            </p>
          </div>

          <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
            {products.map((product, index) => (
              <article key={product.slug} className="product-story relative">
                <div className="product-story__marker" aria-hidden="true">
                  <span>0{index + 1}</span><i />
                </div>
                <div className="grid gap-9 lg:grid-cols-[0.32fr_0.68fr] lg:items-center lg:gap-12">
                  <Reveal className="lg:sticky lg:top-28 lg:self-start">
                    <div className="border-t border-white/15 pt-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-teal">
                          Product system / 0{index + 1}
                        </span>
                        <span className="inline-flex items-center gap-2 border border-white/15 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ink-300">
                          <i className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                          {product.status}
                        </span>
                      </div>
                      <h3 className="mt-6 text-4xl font-semibold text-white">{product.name}</h3>
                      {product.tagline && (
                        <p className="mt-2 text-base font-medium italic text-brand-teal">{product.tagline}</p>
                      )}
                      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-400">
                        {product.category}
                      </p>
                      <p className="mt-6 text-base leading-7 text-ink-300">{product.short}</p>
                      <div className="mt-7 space-y-2 border-l border-white/15 pl-4">
                        {product.capabilities.slice(0, 3).map((capability) => (
                          <span key={capability.title} className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.13em] text-ink-400">
                            <i className="h-1 w-1 rounded-full bg-brand-teal" />
                            {capability.title}
                          </span>
                        ))}
                      </div>
                      <Link to={`/products/${product.slug}`} className="btn-accent mt-8">
                        Enter {product.name}
                        <IconArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Reveal>

                  <ProductSystemStage product={product} eager={index === 0} />
                </div>
              </article>
            ))}
          </div>

          <Reveal className="mt-20 md:mt-28">
            <div className="flex flex-col items-start justify-between gap-6 border-y border-white/10 py-7 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-brand-teal/40 font-mono text-[8px] text-brand-teal">M/X</span>
                <div>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.17em] text-ink-500">System returns to</span>
                  <strong className="mt-1 block text-sm font-semibold text-white">Monexa engineering</strong>
                </div>
              </div>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-white">
                View the complete product portfolio
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page grid lg:grid-cols-2">
          <Reveal className="border-b border-ink-100 py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Mission</p>
            <p className="mt-5 max-w-xl text-2xl font-medium leading-snug text-ink-950 sm:text-3xl">
              {site.mission}
            </p>
          </Reveal>
          <Reveal delay={80} className="py-16 lg:py-24 lg:pl-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">Vision</p>
            <p className="mt-5 max-w-xl text-2xl font-medium leading-snug text-ink-950 sm:text-3xl">
              {site.vision}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
