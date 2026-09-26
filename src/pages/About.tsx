import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { principles, timeline } from '../data/content'
import { products } from '../data/products'
import { site } from '../data/site'
import { IconArrowRight } from '../components/Icons'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Monexa is a software engineering company founded in 2025 and built in South Africa. Our mission: to solve real-world problems with meaningful software."
        path="/about"
      />

      <PageHero
        eyebrow="About Monexa"
        title={<>A software engineering company built in South Africa.</>}
        intro={
          <>
            Monexa designs and engineers custom software for businesses, and develops its
            own software products. We are early in our journey, and we would rather be
            judged on the systems we build than on claims we have not yet earned.
          </>
        }
      />

      {/* Who we are */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-blue" />
                Who we are
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">
                Built in South Africa.
              </h2>
              <p className="mt-3 text-xl font-medium text-brand-blue">
                Local understanding. Global ambition.
              </p>
              <div className="mt-6 space-y-4 text-ink-600 text-pretty">
                <p>
                  Monexa is a software engineering company focused on solving real-world
                  problems through software. Our primary business is custom software
                  engineering: working with a business to understand a specific
                  operational problem and building a system around it.
                </p>
                <p>
                  We also develop our own products. TouchMed24, Ledger &amp; Saldo and The
                  Eye are Monexa products currently in development, each built around a
                  problem we understood well enough to commit to.
                </p>
                <p>
                  Being based in South Africa shapes the work. We build for the conditions
                  systems actually run in here — medical-aid billing rules, businesses
                  where finance runs on spreadsheets, networks that have to be understood
                  by small teams. The ambition for the software itself is not local.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="rounded-xl border border-ink-100 bg-white p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Founded
                </span>
                <p className="mt-1 text-3xl font-bold text-ink-900">{site.foundedYear}</p>
              </div>
              <div className="rounded-xl border border-ink-100 bg-white p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Based in
                </span>
                <p className="mt-1 text-3xl font-bold text-ink-900">{site.location}</p>
              </div>
              <div className="rounded-xl border border-ink-100 bg-white p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Primary business
                </span>
                <p className="mt-1 text-lg font-semibold text-ink-900">
                  Custom software engineering
                </p>
              </div>
              <div className="rounded-xl border border-ink-100 bg-white p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Products in development
                </span>
                <p className="mt-1 text-lg font-semibold text-ink-900">
                  {products.length}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full bg-white">
                <p className="eyebrow">
                  <span className="h-px w-6 bg-brand-blue" />
                  Mission
                </p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-ink-900 text-pretty sm:text-3xl">
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
                <p className="mt-4 text-2xl font-semibold leading-snug text-ink-900 text-pretty sm:text-3xl">
                  {site.vision}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Where we are"
          title="A short history, honestly told."
          intro="Monexa is a young company. This is the whole of it."
        />
        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand-blue via-brand-teal to-transparent sm:block"
            aria-hidden="true"
          />
          <ol className="space-y-6">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 80}>
                <li className="relative flex items-start gap-5">
                  <span
                    className="relative z-10 mt-2 hidden h-[15px] w-[15px] shrink-0 rounded-full border-2 border-brand-blue bg-white sm:block"
                    aria-hidden="true"
                  />
                  <div className="flex-1 rounded-xl border border-ink-100 bg-white p-5 sm:flex sm:items-center sm:gap-6">
                    <span className="block text-lg font-bold text-brand-blue sm:w-24 sm:shrink-0">
                      {item.year}
                    </span>
                    <span className="mt-1 block text-ink-700 sm:mt-0">{item.event}</span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="How we think"
            title="The principles behind the engineering."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-ink-100 bg-white p-6">
                  <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/how-we-work" className="btn-ghost bg-white">
                How we work
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="btn-ghost bg-white">
                Our products
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
