import { Link } from 'react-router-dom'
import { site } from '../data/site'

type LogoProps = {
  className?: string
  plain?: boolean
}

/**
 * Uses the official repository logo exactly as supplied. The viewport only
 * trims the asset's large blank canvas; the complete logo artwork remains
 * visible and is never redrawn, recoloured or altered.
 */
export default function Logo({ className = '', plain = false }: LogoProps) {
  const artwork = (
    <span
      className={`relative block h-16 w-[112px] shrink-0 overflow-hidden bg-transparent ${className}`}
    >
      <img
        src={site.logo}
        alt="Monexa — Where software meets substance"
        width={1408}
        height={768}
        decoding="async"
        className="absolute left-1/2 top-1/2 h-auto w-[270px] max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </span>
  )

  if (plain) return artwork

  return (
    <Link to="/" className="inline-flex" aria-label="Monexa home">
      {artwork}
    </Link>
  )
}
