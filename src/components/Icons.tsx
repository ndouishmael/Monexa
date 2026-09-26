import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconCode(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="m13 4-2 16" />
    </svg>
  )
}

export function IconLayers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  )
}

export function IconLink(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 15 15 9" />
      <path d="M11 7.5 12.8 5.7a4 4 0 0 1 5.6 5.6L16.5 13" />
      <path d="M13 16.5 11.2 18.3a4 4 0 0 1-5.6-5.6L7.5 11" />
    </svg>
  )
}

export function IconRefresh(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M21 8a8 8 0 0 0-14.3-3.3L3 8" />
      <path d="M3 4v4h4" />
      <path d="M3 16a8 8 0 0 0 14.3 3.3L21 16" />
      <path d="M21 20v-4h-4" />
    </svg>
  )
}

export function IconHeartPulse(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20.4 5.6a5 5 0 0 0-7 0l-1.4 1.3-1.4-1.3a5 5 0 0 0-7 7l1 1" />
      <path d="M3 13h3l2-4 3 8 2-5 1.5 2H21" />
    </svg>
  )
}

export function IconScale(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18" />
      <path d="M7 21h10" />
      <path d="m6 7 12-2" />
      <path d="M6 7 3 14a3 3 0 0 0 6 0L6 7Z" />
      <path d="m18 5-3 7a3 3 0 0 0 6 0l-3-7Z" />
    </svg>
  )
}

export function IconRadar(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M19.07 4.93A10 10 0 1 0 22 12" />
      <path d="M12 12 19 5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function IconMap(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </svg>
  )
}

export function IconTarget(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function IconCompass(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  )
}

export function IconGrid(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )
}

export function IconMenu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

export function IconClose(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

export function IconMobile(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  )
}

export function IconChart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 3v16.5A1.5 1.5 0 0 0 4.5 21H21" />
      <path d="m7 15 3.5-4 3 2.5L18 8" />
    </svg>
  )
}

export function IconBuilding(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 21h18" />
      <path d="M5 21V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5V21" />
      <path d="M15 10h2.5A1.5 1.5 0 0 1 19 11.5V21" />
      <path d="M8.5 8h3M8.5 12h3M8.5 16h3" />
    </svg>
  )
}
