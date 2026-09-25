import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import ProductImage from './ProductImage'
import { IconArrowRight } from './Icons'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-ink-200 hover:shadow-[0_24px_70px_-38px_rgba(5,24,40,0.55)]">
      <Link
        to={`/products/${product.slug}`}
        className="block border-b border-ink-100 bg-ink-50 p-3 sm:p-4"
        aria-label={`View ${product.name}`}
      >
        <ProductImage product={product} />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="system-label">{product.sector}</span>
          <span className="status-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
            {product.status}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-ink-950">{product.name}</h3>
        {product.tagline && (
          <p className="mt-1 text-sm font-medium italic text-brand-tealdark">{product.tagline}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-6 text-ink-600">{product.short}</p>

        <Link
          to={`/products/${product.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-brand-blue"
        >
          Explore product
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
