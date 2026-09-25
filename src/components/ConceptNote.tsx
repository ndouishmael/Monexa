/**
 * Honest label for conceptual artwork so visitors are never misled into
 * thinking illustrations are live product interfaces.
 */
export default function ConceptNote({ className = '' }: { className?: string }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 ${className}`}>
      Conceptual illustration — not a live product interface
    </p>
  )
}
