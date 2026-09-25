import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
  image?: string
}

const BASE_TITLE = 'Monexa'
const DEFAULT_IMAGE = '/images/monexa-logo.jpg'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE }: SeoProps) {
  useEffect(() => {
    const fullTitle =
      title === BASE_TITLE ? 'Monexa — Where Software Meets Substance' : `${title} — Monexa`
    const pageUrl = new URL(path, window.location.origin).toString()
    const imageUrl = new URL(image, window.location.origin).toString()

    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', pageUrl)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = pageUrl
  }, [description, image, path, title])

  return null
}
