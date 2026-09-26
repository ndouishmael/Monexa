import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ProductVisual from '../components/visuals/ProductVisual'
import ConceptNote from '../components/ConceptNote'
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
        description={`${product.name} — ${product.category}. ${product.short} A software product being developed by Monexa.`}
        path={`/products/${product.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50/40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70 mask-fade-b" aria-hidden="true" />
        <div className="relative container-page py-14 md:py-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-ink-500">
              <Link to="/products" className="hover:text-ink-800">
                Products
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink-800">{product.name}</span>
            </nav>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-ink-200 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    {product.status}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-brand-blue">
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
                  <p className="mt-3 font-mono text-lg italic text-brand-teal">
                    {product.tagline}
                  </p>
                </Reveal>
              )}
              <Reveal delay={160}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
                  {product.summary}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-800">
                  {product.relationship}
                </p>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-3 shadow-[0_30px_80px_-40px_rgba(11,32,53,0.4)] sm:p-4">
                <ProductVisual
                  kind={product.slug as 'touchmed24' | 'ledger-and-saldo' | 'the-eye'}
                  accent={product.accent}
                  className="aspect-video h-auto w-full rounded-xl object-contain"
                />
              </div>
              <div className="mt-3 text-right">
                <ConceptNote className="inline-block" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem + audience */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div>
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-blue" />
                The problem it addresses
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900">
                Why {product.name} is being built.
              </h2>
              <ul className="mt-8 space-y-5">
                {product.problem.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink-900 font-mono text-xs text-white">
                      {i + 1}
                    </span>
                    <p className="text-ink-700 text-pretty">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-8">
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-teal" />
                Who it is for
              </p>
              <h2 className="mt-4 text-xl font-bold text-ink-900">Intended for</h2>
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
              These describe the intended capabilities of the product in development — the
              functionality it is being engineered to provide.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full bg-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 font-mono text-xs font-semibold text-brand-blue">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to Monexa */}
      <section className="container-page py-16 md:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-ink-100 bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <p className="eyebrow">
                <span className="h-px w-6 bg-brand-teal" />
                Relationship to Monexa
              </p>
              <h2 className="mt-4 text-2xl font-bold text-ink-900">
                {product.relationship}
              </h2>
              <p className="mt-3 max-w-2xl text-ink-600 text-pretty">
                {product.name} is one of the software products being developed by Monexa. It is
                engineered with the same discipline we bring to our client work, and reflects
                our belief that good software should solve a real problem and be built to grow.
              </p>
            </div>
            <Link to="/contact" className="btn-accent shrink-0">
              Speak to us about {product.name}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Other products */}
        <div className="mt-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.18em] text-ink-400">
            Other Monexa products
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="card card-hover group flex items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-ink-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-500">{p.category}</p>
                </div>
                <IconArrowRight className="h-5 w-5 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-blue" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
