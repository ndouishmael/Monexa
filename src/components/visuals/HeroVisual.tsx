/**
 * Abstract engineering visual for the home hero.
 * Conceptual only — represents systems, nodes and data flow.
 * Not a product screenshot. Pure SVG, scales cleanly, and animation is
 * driven by CSS that respects prefers-reduced-motion.
 */
export default function HeroVisual({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      className={className}
      role="img"
      aria-label="Abstract diagram of connected software systems, nodes and data flows"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hv-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f6fb8" />
          <stop offset="1" stopColor="#2ba79c" />
        </linearGradient>
        <linearGradient id="hv-grad-faint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f6fb8" stopOpacity="0.14" />
          <stop offset="1" stopColor="#2ba79c" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      {/* Fine engineering grid */}
      <g stroke="#0b2035" strokeOpacity="0.06">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="460" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 52} x2="520" y2={i * 52} />
        ))}
      </g>

      {/* Connection lines with animated data flow */}
      <g stroke="url(#hv-grad)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M110 120 L250 90 L410 150" className="hv-flow" />
        <path d="M110 120 L180 250 L320 300" className="hv-flow hv-flow-2" />
        <path d="M410 150 L440 300 L320 300" className="hv-flow hv-flow-3" />
        <path d="M250 90 L180 250" className="hv-flow hv-flow-2" />
        <path d="M320 300 L250 400" className="hv-flow" />
      </g>

      {/* Panels / system cards */}
      <g>
        <rect x="60" y="70" width="120" height="70" rx="10" fill="white" stroke="#c4d4e2" />
        <rect x="72" y="84" width="56" height="7" rx="3.5" fill="url(#hv-grad)" />
        <rect x="72" y="98" width="90" height="5" rx="2.5" fill="#c4d4e2" />
        <rect x="72" y="110" width="76" height="5" rx="2.5" fill="#e2eaf1" />
        <rect x="72" y="122" width="60" height="5" rx="2.5" fill="#e2eaf1" />

        <rect x="350" y="100" width="120" height="86" rx="10" fill="white" stroke="#c4d4e2" />
        <rect x="362" y="114" width="44" height="7" rx="3.5" fill="#2ba79c" />
        <g>
          <rect x="362" y="132" width="18" height="40" rx="3" fill="url(#hv-grad-faint)" stroke="#c4d4e2" />
          <rect x="388" y="144" width="18" height="28" rx="3" fill="url(#hv-grad-faint)" stroke="#c4d4e2" />
          <rect x="414" y="126" width="18" height="46" rx="3" fill="url(#hv-grad-faint)" stroke="#c4d4e2" />
          <rect x="440" y="150" width="18" height="22" rx="3" fill="url(#hv-grad-faint)" stroke="#c4d4e2" />
        </g>

        <rect x="250" y="260" width="150" height="90" rx="10" fill="white" stroke="#c4d4e2" />
        <rect x="264" y="276" width="60" height="7" rx="3.5" fill="url(#hv-grad)" />
        <rect x="264" y="292" width="122" height="5" rx="2.5" fill="#e2eaf1" />
        <rect x="264" y="304" width="104" height="5" rx="2.5" fill="#e2eaf1" />
        <circle cx="272" cy="330" r="6" fill="#2ba79c" />
        <rect x="286" y="327" width="80" height="5" rx="2.5" fill="#c4d4e2" />

        <rect x="120" y="220" width="120" height="66" rx="10" fill="white" stroke="#c4d4e2" />
        <rect x="132" y="234" width="40" height="7" rx="3.5" fill="#1f6fb8" />
        <rect x="132" y="250" width="94" height="5" rx="2.5" fill="#e2eaf1" />
        <rect x="132" y="262" width="70" height="5" rx="2.5" fill="#e2eaf1" />
      </g>

      {/* Nodes */}
      <g>
        {[
          [110, 120],
          [250, 90],
          [410, 150],
          [180, 250],
          [320, 300],
          [440, 300],
          [250, 400],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="9" fill="white" stroke="url(#hv-grad)" strokeWidth="2" />
            <circle
              cx={cx}
              cy={cy}
              r="4"
              fill="url(#hv-grad)"
              className="hv-node"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </g>
        ))}
      </g>

      <style>{`
        .hv-flow {
          stroke-dasharray: 6 8;
          animation: hvDash 3.2s linear infinite;
        }
        .hv-flow-2 { animation-duration: 4.1s; }
        .hv-flow-3 { animation-duration: 3.7s; }
        .hv-node { animation: hvPulse 3.4s ease-in-out infinite; }
        @keyframes hvDash { to { stroke-dashoffset: -140; } }
        @keyframes hvPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hv-flow, .hv-node { animation: none; }
          .hv-flow { stroke-dasharray: 6 8; }
        }
      `}</style>
    </svg>
  )
}
