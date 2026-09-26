import type { CapabilityArea } from '../data/content'
import {
  IconBuilding,
  IconChart,
  IconCode,
  IconGrid,
  IconLayers,
  IconLink,
  IconMobile,
  IconRefresh,
} from './Icons'

const map = {
  code: IconCode,
  mobile: IconMobile,
  layers: IconLayers,
  grid: IconGrid,
  link: IconLink,
  refresh: IconRefresh,
  chart: IconChart,
  building: IconBuilding,
} as const

/** Resolves a capability area's icon key to its icon component. */
export default function CapabilityIcon({
  name,
  className = '',
}: {
  name: CapabilityArea['icon']
  className?: string
}) {
  const Icon = map[name]
  return <Icon className={className} />
}
