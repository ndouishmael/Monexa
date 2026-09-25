import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ProductImage from '../components/ProductImage'
import CtaBand from '../components/CtaBand'
import NotFound from './NotFound'
import { getProduct, products } from '../data/products'
import { IconArrowRight, IconCheck } from '../components/Icons'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProduct(slug) : undefined

  if (!product) return <NotFound />

  const relatedProducts = products.filter((item) => item.slug !== product.slug)

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.name} is ${product.category.toLowerCase()} being developed by Monexa. ${product.short}`}
        path={`/products/${product.slug}`}
        image={product.image}
      />

      <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70 mask-fade-b" aria-hidden="true" />
        <div className="relative container-page py-12 md:py-16 lg:py-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-400">
              <Link to="/products" className="transition-colors hover:text-brand-blue">Products</Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink-700">{product.name}</span>
            </nav>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  <span className="status-pill">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    {product.status}
                  </span>
                  <span className="status-pill">{product.sector}</span>
                </div>
              </Reveal>
              <Reveal delay={70}>
                <h1 className="mt-6 text-5xl font-semibold leading-none text-ink-950 sm:text-6xl">
                  {product.name}
                </h1>
              </Reveal>
              {product.tagline && (
                <Reveal delay={100}>
                  <p className="mt-3 text-lg font-medium italic text-brand-tealdark">
                    {product.tagline}
                  </p>
                </Reveal>
              )}
              <Reveal delay={140}>
                <p className="mt-6 text-lg leading-8 text-ink-600">{product.summary}</p>
              </Reveal>
              <Reveal delay={190}>
                <div className="mt-7 border-l-2 border-brand-blue pl-4">
                  <p className="system-label">Relationship</p>
                  <p className="mt-1 text-sm font-semibold text-ink-800">{product.relationship}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <ProductImage product={product} eager caption />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="rule-label">The problem</p>
              <h2 className="mt-5 text-3xl font-semibold text-ink-950 sm:text-4xl">
                Why {product.name} is being built.
              </h2>
              <ol className="mt-10 divide-y divide-ink-100 border-y border-ink-100">
                {product.problem.map((problem, index) => (
                  <li key={problem} className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr]">
                    <span className="font-mono text-xs font-semibold text-brand-blue">
                      0{index + 1}
                    </span>
                    <p className="leading-7 text-ink-700">{problem}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <aside className="border border-ink-100 bg-ink-50 p-7 sm:p-8">
              <p className="rule-label">Designed for</p>
              <ul className="mt-7 space-y-5">
                {product.audience.map((audience) => (
                  <li key={audience} className="flex items-start gap-3 text-sm leading-6 text-ink-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-ink-950 text-white">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {audience}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-ink-200 pt-6">
                <p className="system-label">Current status</p>
                <p className="mt-2 text-sm leading-6 text-ink-600">
                  {product.name} is a Monexa software product in development. This page does not
                  claim public availability or commercial deployment.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="container-page section-space">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="rule-label">System capabilities</p>
              <h2 className="mt-5 text-3xl font-semibold text-ink-950 sm:text-4xl">
                What the product is designed to support.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-ink-600">
                These are intended capabilities of the software currently being developed, not
                claims of a publicly deployed service.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-2">
              {product.capabilities.map((capability, index) => (
                <Reveal key={capability.title} delay={(index % 2) * 60} className="h-full">
                  <article className="h-full bg-white p-6 sm:p-7">
                    <span className="font-mono text-[10px] font-semibold text-brand-blue">
                      CAP / {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-7 text-lg font-semibold text-ink-950">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">{capability.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden bg-ink-950 px-6 py-10 text-white sm:px-10 md:px-12">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">
                  Built by Monexa
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{product.relationship}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-300">
                  {product.name} reflects our belief that useful software begins with a real
                  problem and deserves disciplined engineering.
                </p>
              </div>
              <Link to="/contact" className="btn-accent shrink-0">
                Speak to us about {product.name}
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-16">
          <p className="system-label">Continue through the portfolio</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {relatedProducts.map((related) => (
              <Link
                key={related.slug}
                to={`/products/${related.slug}`}
                className="group flex items-center justify-between border border-ink-100 bg-white p-6 transition hover:border-ink-300 hover:bg-ink-50"
              >
                <span>
                  <span className="block text-lg font-semibold text-ink-950">{related.name}</span>
                  <span className="mt-1 block text-xs text-ink-500">{related.sector}</span>
                </span>
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
