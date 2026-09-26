import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ProductFrame from '../components/visuals/ProductFrame'
import CtaBand from '../components/CtaBand'
import { products } from '../data/products'
import { IconArrowRight } from '../components/Icons'

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Monexa products in development: TouchMed24 (medical practice management and medical-aid billing), Ledger & Saldo (accounting and financial management) and The Eye (network and infrastructure monitoring)."
        path="/products"
      />

      <PageHero
        eyebrow="Products"
        title={
          <>
            Monexa doesn&rsquo;t only build software for clients. We build software
            products of our own.
          </>
        }
        intro={
          <>
            Three products, each built around a problem we understood well enough to
            commit to: running a medical practice, keeping a business&rsquo;s finances
            straight, and knowing what your network is doing. All three are currently in
            development.
          </>
        }
      >
        <div className="inline-flex items-start gap-3 rounded-lg border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-600">
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-teal"
            aria-hidden="true"
          />
          <span>
            <strong className="font-semibold text-ink-800">Currently in Development.</strong>{' '}
            These products are being actively built by Monexa. They are not yet
            commercially available, and we make no claims about customers or deployment.
          </span>
        </div>
      </PageHero>

      <section className="container-page space-y-20 py-16 md:space-y-28 md:py-24">
        {products.map((p, i) => {
          const flip = i % 2 === 1
          return (
            <article
              key={p.slug}
              className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
            >
              <Reveal className={flip ? 'lg:order-2' : ''}>
                <ProductFrame product={p} size="feature" />
              </Reveal>

              <Reveal delay={120} className={flip ? 'lg:order-1' : ''}>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                      {p.status}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                      {p.category}
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                    {p.name}
                  </h2>
                  {p.tagline && (
                    <p className="mt-2 text-lg italic text-brand-teal">{p.tagline}</p>
                  )}
                  <p className="mt-4 text-ink-600 text-pretty">{p.summary}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.signals.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-ink-100 bg-ink-50/70 px-2.5 py-1 text-xs font-medium text-ink-600"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-sm text-ink-500">{p.relationship}</p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link to={`/products/${p.slug}`} className="btn-primary">
                      Explore {p.name}
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/contact" className="btn-ghost">
                      Talk to us about it
                    </Link>
                  </div>
                </div>
              </Reveal>
            </article>
          )
        })}
      </section>

      <section className="border-t border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
                  Why Monexa builds its own products
                </h2>
                <p className="mt-4 text-ink-600 text-pretty">
                  Client work teaches you to solve someone else&rsquo;s problem well.
                  Building your own product teaches you to own every decision that follows
                  — the data model you chose eighteen months ago, the edge case you
                  deferred, the screen that made sense in design and not in use.
                </p>
                <p className="mt-4 text-ink-600 text-pretty">
                  That is why we build products as well as systems. It keeps us close to
                  the long-term consequences of engineering decisions, which is exactly
                  what a client is paying for when they hire us.
                </p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Being clear about status
                </p>
                <p className="mt-4 text-ink-700 text-pretty">
                  Each of these products is in active development. We are not claiming
                  live customers, user numbers, revenue, market adoption or production
                  deployment — because those claims would not be true yet.
                </p>
                <p className="mt-4 text-ink-700 text-pretty">
                  What we can show is the engineering: the systems themselves, the
                  problems they address and the interfaces being built.
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brand-blue"
                >
                  See what we build for clients
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a product idea worth building?"
        intro="Whether it is your idea or a problem you keep running into, tell us about it. We would rather understand the problem first than quote on a spec."
      />
    </>
  )
}
