import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import CtaBand from '../components/CtaBand'
import { products } from '../data/products'
import { IconCheck } from '../components/Icons'

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Monexa's software product portfolio: TouchMed24, Ledger & Saldo and The Eye — software products currently being developed by Monexa."
        path="/products"
      />

      <PageHero
        eyebrow="Our products"
        title={<>Software products being built by Monexa.</>}
        intro={
          <>
            Alongside our engineering work, Monexa builds its own software products. These are
            products currently in development — described here by what they are and the
            problems they are designed to solve, not by claims we have not yet earned.
          </>
        }
      >
        <div className="inline-flex items-start gap-3 rounded-lg border border-ink-200 bg-white/70 px-4 py-3 text-sm text-ink-600">
          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
          <span>
            Each product below is in active development at Monexa. They are not yet publicly
            launched or commercially deployed.
          </span>
        </div>
      </PageHero>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-ink-100 bg-ink-50/50 p-8">
            <h2 className="text-xl font-bold text-ink-900">Why Monexa builds products</h2>
            <p className="mt-3 max-w-3xl text-ink-600 text-pretty">
              Building our own products keeps us close to real problems and sharpens the same
              engineering discipline we bring to client work. Each product starts with a
              genuine problem worth solving, and is engineered with architecture, care and the
              intention to grow over time.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Have a product idea worth building?"
        intro="Whether it is your idea or a problem you keep running into, we would like to understand it before we talk about software."
      />
    </>
  )
}
