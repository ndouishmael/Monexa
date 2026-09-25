import { useEffect, useRef, useState } from 'react'

type InViewOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/**
 * Lightweight viewport state for purposeful system reveals. Motion is skipped
 * for visitors who prefer reduced motion, leaving every element fully visible.
 */
export default function useInView<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: InViewOptions = {}) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, isInView }
}
