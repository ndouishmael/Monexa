import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ProductFrame from '../components/visuals/ProductFrame'
import CtaBand from '../components/CtaBand'
import NotFound from './NotFound'
import { getProduct, products } from '../data/products'
import { IconArrowRight, IconCheck } from '../components/Icons'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProduct(slug) : undefined

  if (!product) {
    return <NotFound />
  }

  const others = products.filter((p) => p.slug !== product.slug)

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.name} — ${product.category}. ${product.short} Currently in development at Monexa.`}
        path={`/products/${product.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50/40">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-70 mask-fade-b"
          aria-hidden="true"
        />
        <div className="relative container-page py-12 md:py-20">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-sm text-ink-500"
            >
              <Link to="/products" className="hover:text-ink-800">
                Products
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink-800">{product.name}</span>
            </nav>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    {product.status}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {product.category}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
                  {product.name}
                </h1>
              </Reveal>
              {product.tagline && (
                <Reveal delay={120}>
                  <p className="mt-3 text-xl italic text-brand-teal">{product.tagline}</p>
                </Reveal>
              )}
              <Reveal delay={160}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
                  {product.summary}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-sm text-ink-500">{product.domain}</p>
                <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink-800">
                  {product.relationship}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="btn-accent">
                    Talk to Monexa
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/products" className="btn-ghost">
                    All products
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <ProductFrame product={product} size="hero" priority />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Status — stated plainly */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-page py-8">
          <Reveal>
            <div className="flex flex-col gap-3 rounded-xl border border-brand-teal/25 bg-brand-teal/5 p-5 sm:flex-row sm:items-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Development status
              </span>
              <p className="text-sm text-ink-700">{product.statusDetail}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem + audience */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div>
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-blue" />
                The problem
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">
                Why {product.name} is being built.
              </h2>
              <ul className="mt-8 space-y-5">
                {product.problem.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink-900 text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="text-ink-700 text-pretty">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-ink-100 bg-ink-50/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  What it is intended to do
                </p>
                <p className="mt-3 text-lg leading-relaxed text-ink-800 text-pretty">
                  {product.intent}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink-100 bg-white p-8">
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-teal" />
                Who it is for
              </p>
              <h2 className="mt-4 text-xl font-bold text-ink-900">Intended users</h2>
              <ul className="mt-5 space-y-3">
                {product.audience.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-700">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="h-px w-6 bg-brand-blue" />
              Key capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">
              What {product.name} is designed to do.
            </h2>
            <p className="mt-4 text-ink-600 text-pretty">
              These are the capabilities being engineered into the product. As it is still
              in development, they describe intended functionality rather than a shipped
              feature list.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full bg-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-xs font-bold text-brand-blue">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to Monexa */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-ink-100 bg-white p-8 md:grid-cols-[1.4fr_auto] md:items-center md:p-12">
            <div>
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-teal" />
                Relationship to Monexa
              </p>
              <h2 className="mt-4 text-2xl font-bold text-ink-900 sm:text-3xl">
                {product.relationship}
              </h2>
              <p className="mt-4 max-w-2xl text-ink-600 text-pretty">
                {product.name} is designed and engineered by Monexa. The same team,
                process and engineering standards behind our client work are behind this
                product — which is why we are comfortable pointing at it as evidence of
                what we build.
              </p>
            </div>
            <Link to="/services" className="btn-primary w-full justify-center md:w-auto">
              What we build for clients
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Other products */}
      <section className="border-t border-ink-100 bg-ink-50/40">
        <div className="container-page py-16 md:py-24">
          <h2 className="text-2xl font-bold text-ink-900">Other Monexa products</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group card card-hover flex h-full flex-col bg-white !p-5"
                >
                  <ProductFrame product={p} size="card" />
                  <div className="mt-5">
                    <span className="inline-flex w-fit items-center rounded-full border border-ink-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
                      {p.status}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-ink-900">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-blue">{p.category}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                      Explore {p.name}
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need something like ${product.name} for your business?`}
        intro="We build custom software around specific business problems. Tell us what you are trying to solve and we will tell you honestly what it would take."
      />
    </>
  )
}
