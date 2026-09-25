import { Link } from 'react-router-dom'
import { site } from '../data/site'

type LogoProps = {
  className?: string
  imgClassName?: string
  /** When true, renders without a link wrapper (e.g. inside the footer heading). */
  plain?: boolean
}

/**
 * Official Monexa logo, sourced from the repository asset at
 * /images/monexa-logo.jpg. The logo is never recreated or substituted.
 */
export default function Logo({ className = '', imgClassName = '', plain }: LogoProps) {
  const img = (
    <img
      src={site.logo}
      alt="Monexa — Where software meets substance"
      className={`h-full w-auto object-contain ${imgClassName}`}
      width={200}
      height={64}
    />
  )

  if (plain) {
    return <span className={className}>{img}</span>
  }

  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Monexa — home"
    >
      {img}
    </Link>
  )
}
