import { useState, type FormEvent } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { site } from '../data/site'
import { IconArrowRight, IconCheck, IconMail } from '../components/Icons'

const topics = [
  'Custom software',
  'Product development',
  'A software idea',
  'A technology problem',
  'Potential collaboration',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    topic: topics[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const buildMailto = () => {
    const subject = `Monexa enquiry — ${form.topic}${form.company ? ` (${form.company})` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : '',
      `Topic: ${form.topic}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // NOTE: No email backend is configured yet. Rather than pretend the form
    // sends email from a server, we open the visitor's own mail client with the
    // message pre-filled. The form UI is ready to be connected to a backend later.
    setSubmitted(true)
    window.location.href = buildMailto()
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Have a problem worth solving? Speak to Monexa about custom software, product development, software ideas, technology problems or potential collaboration."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title={<>Have a problem worth solving?</>}
        intro={
          <>
            Tell us what you are trying to build, fix or figure out. Businesses can speak to
            Monexa about custom software, product development, software ideas, technology
            problems and potential collaboration.
          </>
        }
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: details */}
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold text-ink-900">Speak to us</h2>
              <p className="mt-3 max-w-md text-ink-600 text-pretty">
                We would like to understand the problem before we talk about software. Share a
                little about what you are working on and we will take it from there.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="card card-hover flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-ink-400">
                      Email
                    </span>
                    <span className="block font-semibold text-ink-900">{site.email}</span>
                  </span>
                </a>

                <div className="card flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                    <IconCheck className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-ink-400">
                      Based in
                    </span>
                    <span className="block font-semibold text-ink-900">South Africa</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-ink-100 bg-ink-50/50 p-5 text-sm text-ink-600">
                <p>
                  <span className="font-semibold text-ink-800">What to expect:</span> a real
                  conversation about the problem. We are a young company and we would rather be
                  clear and honest than oversell.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Name <span className="text-brand-blue">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Email <span className="text-brand-blue">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Company <span className="font-normal text-ink-400">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={update('company')}
                    className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Your company"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="topic" className="mb-1.5 block text-sm font-semibold text-ink-800">
                    What is this about?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={update('topic')}
                    className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-800">
                    The problem you are trying to solve <span className="text-brand-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full resize-y rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Tell us a little about what you are working on..."
                  />
                </div>
              </div>

              <button type="submit" className="btn-accent mt-6 w-full sm:w-auto">
                Speak to us
                <IconArrowRight className="h-4 w-4" />
              </button>

              {submitted && (
                <div
                  className="mt-5 flex items-start gap-3 rounded-lg border border-brand-teal/30 bg-brand-teal/5 p-4 text-sm text-ink-700"
                  role="status"
                >
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <p>
                    Thanks, {form.name || 'there'}. Your email client should have opened with your
                    message ready to send to <strong>{site.email}</strong>. If it did not, please
                    email us directly.
                  </p>
                </div>
              )}

              <p className="mt-4 text-xs leading-relaxed text-ink-400">
                Note: this form is not yet connected to an email backend. For now, submitting
                opens your own email client with the details pre-filled. The form is ready to be
                connected to a server later.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
