import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
}

const BASE_TITLE = 'Monexa'
const SITE_URL = 'https://monexa.co.za'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Lightweight SEO/document-head manager. Updates the title and the core meta
 * tags on route change. No external claims are made — only the copy provided.
 */
export default function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle =
      title === BASE_TITLE ? title : `${title} — ${BASE_TITLE}`
    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)

    if (path) {
      const url = `${SITE_URL}${path}`
      setMeta('property', 'og:url', url)
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', url)
    }
  }, [title, description, path])

  return null
}
