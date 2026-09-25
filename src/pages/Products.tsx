import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ProductImage from '../components/ProductImage'
import CtaBand from '../components/CtaBand'
import { products } from '../data/products'
import { IconArrowRight, IconCheck } from '../components/Icons'

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Explore TouchMed24, Ledger & Saldo and The Eye — software products currently being developed by Monexa."
        path="/products"
        image={products[0].image}
      />

      <PageHero
        eyebrow="Monexa products"
        title={<>Software products being built around real problems.</>}
        intro={
          <>
            Alongside our custom engineering work, Monexa builds and owns software products
            across healthcare, finance and infrastructure. Each product shown here is currently
            in development.
          </>
        }
      >
        <div className="inline-flex max-w-2xl items-start gap-3 border border-ink-200 bg-white px-4 py-3 text-sm leading-6 text-ink-600">
          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
          <span>
            The portfolio is presented as work in development. No public launch or commercial
            deployment is claimed.
          </span>
        </div>
      </PageHero>

      <section className="container-page section-space">
        <div className="space-y-24 lg:space-y-32">
          {products.map((product, index) => (
            <article
              key={product.slug}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
            >
              <Reveal
                className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative">
                  <ProductImage product={product} caption />
                  <span
                    className="absolute -left-3 -top-3 hidden h-14 w-14 border-l border-t border-brand-blue lg:block"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>

              <Reveal
                delay={100}
                className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="flex items-center justify-between border-b border-ink-100 pb-4">
                  <span className="system-label">Product / 0{index + 1}</span>
                  <span className="status-pill">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    {product.status}
                  </span>
                </div>
                <h2 className="mt-7 text-4xl font-semibold text-ink-950">{product.name}</h2>
                {product.tagline && (
                  <p className="mt-2 text-base font-medium italic text-brand-tealdark">
                    {product.tagline}
                  </p>
                )}
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-brand-blue">
                  {product.category}
                </p>
                <p className="mt-5 text-base leading-7 text-ink-600">{product.short}</p>
                <p className="mt-5 border-l-2 border-ink-200 pl-4 text-sm leading-6 text-ink-500">
                  {product.relationship}
                </p>
                <Link to={`/products/${product.slug}`} className="btn-primary mt-8">
                  Explore {product.name}
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <p className="rule-label">Why build products</p>
              <div>
                <h2 className="text-3xl font-semibold text-ink-950">
                  Product ownership keeps our engineering grounded.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-600">
                  Building our own software keeps us close to product decisions, technical
                  trade-offs and long-term system thinking. Each product starts with a genuine
                  problem worth solving and is developed with the same discipline we bring to
                  custom engineering work.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a software problem worth exploring?"
        intro="Tell us what you are trying to build, fix or understand. We start with the problem before proposing the software."
      />
    </>
  )
}
