import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { IconArrowRight } from '../components/Icons'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you were looking for could not be found."
      />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70 mask-fade-b" aria-hidden="true" />
        <div className="relative container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand-blue">
            404 — Not found
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            This page could not be found.
          </h1>
          <p className="mt-4 max-w-md text-ink-600">
            The page you were looking for does not exist or may have moved. Let’s get you back to
            something useful.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="btn-accent">
              Back to home
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="btn-ghost">
              View products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
