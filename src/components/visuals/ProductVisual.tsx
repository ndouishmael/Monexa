type Accent = 'blue' | 'teal' | 'mixed'
type Kind = 'touchmed24' | 'ledger-and-saldo' | 'the-eye'

const stops: Record<Accent, [string, string]> = {
  blue: ['#1f6fb8', '#155a99'],
  teal: ['#2ba79c', '#1f8a80'],
  mixed: ['#1f6fb8', '#2ba79c'],
}

/**
 * Conceptual product visualisation. These are illustrative technical concepts —
 * NOT screenshots of live software. They convey the shape of each product
 * (records, ledgers, monitoring) without pretending to be a real interface.
 */
export default function ProductVisual({
  kind,
  accent,
  className = '',
}: {
  kind: Kind
  accent: Accent
  className?: string
}) {
  const [c1, c2] = stops[accent]
  const gid = `pv-${kind}`

  return (
    <svg
      viewBox="0 0 480 340"
      className={className}
      role="img"
      aria-label={`Conceptual illustration representing ${kind.replace(/-/g, ' ')} (not a live product screenshot)`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <linearGradient id={`${gid}-f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} stopOpacity="0.16" />
          <stop offset="1" stopColor={c2} stopOpacity="0.16" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect x="8" y="8" width="464" height="324" rx="16" fill="#f7f9fb" stroke="#e2eaf1" />
      <rect x="8" y="8" width="464" height="46" rx="16" fill="white" stroke="#e2eaf1" />
      <rect x="8" y="40" width="464" height="14" fill="white" />
      <circle cx="34" cy="31" r="5" fill={`url(#${gid})`} />
      <rect x="48" y="27" width="120" height="8" rx="4" fill="#e2eaf1" />
      <rect x="384" y="24" width="72" height="14" rx="7" fill={`url(#${gid}-f)`} stroke="#c4d4e2" />

      {kind === 'touchmed24' && <TouchMed gid={gid} />}
      {kind === 'ledger-and-saldo' && <Ledger gid={gid} />}
      {kind === 'the-eye' && <TheEye gid={gid} />}
    </svg>
  )
}

function TouchMed({ gid }: { gid: string }) {
  return (
    <g>
      {/* Sidebar */}
      <rect x="24" y="70" width="96" height="246" rx="10" fill="white" stroke="#e2eaf1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="36" y={86 + i * 34} width="14" height="14" rx="4" fill={i === 0 ? `url(#${gid})` : '#e2eaf1'} />
          <rect x="58" y={90 + i * 34} width="48" height="7" rx="3.5" fill="#e2eaf1" />
        </g>
      ))}
      {/* Patient cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={136} y={70 + i * 58} width="200" height="48" rx="10" fill="white" stroke="#e2eaf1" />
          <circle cx={162} cy={94 + i * 58} r="12" fill={`url(#${gid}-f)`} stroke="#c4d4e2" />
          <rect x={184} y={82 + i * 58} width="90" height="7" rx="3.5" fill="#0b2035" fillOpacity="0.6" />
          <rect x={184} y={96 + i * 58} width="130" height="6" rx="3" fill="#e2eaf1" />
          <rect x={300} y={86 + i * 58} width="24" height="16" rx="8" fill={`url(#${gid})`} opacity="0.9" />
        </g>
      ))}
      {/* Right column: consultation / billing */}
      <rect x={352} y={70} width="104" height="120" rx="10" fill="white" stroke="#e2eaf1" />
      <rect x={364} y={82} width="60" height="7" rx="3.5" fill={`url(#${gid})`} />
      <rect x={364} y={100} width="80" height="6" rx="3" fill="#e2eaf1" />
      <rect x={364} y={114} width="70" height="6" rx="3" fill="#e2eaf1" />
      <rect x={364} y={140} width="80" height="30" rx="6" fill={`url(#${gid}-f)`} stroke="#c4d4e2" />
      <rect x={352} y={202} width="104" height="114" rx="10" fill="white" stroke="#e2eaf1" />
      <rect x={364} y={214} width="50" height="7" rx="3.5" fill={`url(#${gid})`} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={364} y={232 + i * 20} width="10" height="10" rx="3" fill={`url(#${gid}-f)`} stroke="#c4d4e2" />
          <rect x={382} y={234 + i * 20} width="60" height="6" rx="3" fill="#e2eaf1" />
        </g>
      ))}
    </g>
  )
}

function Ledger({ gid }: { gid: string }) {
  return (
    <g>
      {/* Balance summary */}
      <rect x={24} y={70} width="200" height="90" rx="10" fill="white" stroke="#e2eaf1" />
      <rect x={40} y={84} width="70" height="7" rx="3.5" fill="#e2eaf1" />
      <rect x={40} y={100} width="120" height="16" rx="4" fill="#0b2035" fillOpacity="0.75" />
      <rect x={40} y={126} width="90" height="7" rx="3.5" fill={`url(#${gid})`} />
      {/* Cash flow chart */}
      <rect x={240} y={70} width="216" height="120" rx="10" fill="white" stroke="#e2eaf1" />
      <polyline
        points="256,160 288,140 320,148 352,116 384,128 416,96 440,104"
        stroke={`url(#${gid})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points="256,160 288,140 320,148 352,116 384,128 416,96 440,104 440,178 256,178"
        fill={`url(#${gid}-f)`}
      />
      {[256, 288, 320, 352, 384, 416, 440].map((x, i) => (
        <circle key={i} cx={x} cy={[160, 140, 148, 116, 128, 96, 104][i]} r="3" fill={`url(#${gid})`} />
      ))}
      {/* Ledger table */}
      <rect x={24} y={172} width="200" height="144" rx="10" fill="white" stroke="#e2eaf1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={40} y={190 + i * 24} width="70" height="6" rx="3" fill="#e2eaf1" />
          <rect x={168} y={190 + i * 24} width="40" height="6" rx="3" fill={i % 2 === 0 ? `url(#${gid})` : '#c4d4e2'} />
        </g>
      ))}
      {/* Accounts */}
      <rect x={240} y={202} width="216" height="114" rx="10" fill="white" stroke="#e2eaf1" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={262} cy={228 + i * 32} r="10" fill={`url(#${gid}-f)`} stroke="#c4d4e2" />
          <rect x={282} y={222 + i * 32} width="90" height="7" rx="3.5" fill="#0b2035" fillOpacity="0.55" />
          <rect x={282} y={234 + i * 32} width="60" height="6" rx="3" fill="#e2eaf1" />
          <rect x={410} y={224 + i * 32} width="30" height="12" rx="6" fill={`url(#${gid})`} opacity="0.85" />
        </g>
      ))}
    </g>
  )
}

function TheEye({ gid }: { gid: string }) {
  const nodes: [number, number][] = [
    [130, 150],
    [240, 100],
    [240, 200],
    [340, 130],
    [340, 220],
    [180, 250],
  ]
  return (
    <g>
      {/* Topology map */}
      <rect x={24} y={70} width="300" height="200" rx="10" fill="white" stroke="#e2eaf1" />
      <g stroke={`url(#${gid})`} strokeWidth="1.5" strokeLinecap="round">
        <line x1="130" y1="150" x2="240" y2="100" className="pv-flow" />
        <line x1="130" y1="150" x2="240" y2="200" className="pv-flow" />
        <line x1="240" y1="100" x2="340" y2="130" className="pv-flow" />
        <line x1="240" y1="200" x2="340" y2="220" className="pv-flow" />
        <line x1="240" y1="100" x2="240" y2="200" className="pv-flow" />
        <line x1="130" y1="150" x2="180" y2="250" className="pv-flow" />
      </g>
      {nodes.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill="white" stroke={`url(#${gid})`} strokeWidth="2" />
          <circle cx={cx} cy={cy} r="4" fill={`url(#${gid})`} className="pv-node" style={{ animationDelay: `${i * 0.35}s` }} />
        </g>
      ))}
      {/* Alarms / status panel */}
      <rect x={336} y={70} width="120" height="200" rx="10" fill="white" stroke="#e2eaf1" />
      <rect x={348} y={84} width="60" height="7" rx="3.5" fill={`url(#${gid})`} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={356} cy={112 + i * 30} r="5" fill={i === 1 ? '#e0a43b' : `url(#${gid})`} />
          <rect x={370} y={107 + i * 30} width="74" height="6" rx="3" fill="#e2eaf1" />
          <rect x={370} y={117 + i * 30} width="50" height="5" rx="2.5" fill="#eef2f6" />
        </g>
      ))}
      {/* Performance bars */}
      <rect x={24} y={282} width="432" height="0" />
      <g>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={40 + i * 52}
            y={272 - [18, 30, 22, 36, 26, 40, 24, 32][i]}
            width="30"
            height={[18, 30, 22, 36, 26, 40, 24, 32][i]}
            rx="4"
            fill={`url(#${gid}-f)`}
            stroke="#c4d4e2"
          />
        ))}
      </g>

      <style>{`
        .pv-flow { stroke-dasharray: 5 7; animation: pvDash 3s linear infinite; }
        .pv-node { animation: pvPulse 3.2s ease-in-out infinite; }
        @keyframes pvDash { to { stroke-dashoffset: -120; } }
        @keyframes pvPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
        @media (prefers-reduced-motion: reduce) {
          .pv-flow, .pv-node { animation: none; }
        }
      `}</style>
    </g>
  )
}
