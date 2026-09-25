import type { Product } from '../data/products'

type ProductImageProps = {
  product: Product
  className?: string
  eager?: boolean
  caption?: boolean
}

/**
 * Renders the approved repository artwork without cropping, recolouring or
 * altering its aspect ratio. All product images are 16:9 source assets.
 */
export default function ProductImage({
  product,
  className = '',
  eager = false,
  caption = false,
}: ProductImageProps) {
  return (
    <figure className={className}>
      <div className="product-image-shell">
        <img
          src={product.image}
          alt={product.imageAlt}
          width={product.imageWidth}
          height={product.imageHeight}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          className="h-auto w-full object-contain"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
          <span>Product interface</span>
          <span>{product.status} · 16:9 source artwork</span>
        </figcaption>
      )}
    </figure>
  )
}
