import { useState, type FormEvent } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { site } from '../data/site'
import { IconArrowRight, IconCheck, IconMail } from '../components/Icons'

const budgets = [
  'Not sure yet',
  'Under R50 000',
  'R50 000 – R150 000',
  'R150 000 – R500 000',
  'R500 000+',
]

const timelines = [
  'Not sure yet',
  'As soon as possible',
  'Within 1–3 months',
  'Within 3–6 months',
  'Later than 6 months',
]

const field =
  'w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
const labelCls = 'mb-1.5 block text-sm font-semibold text-ink-800'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project: '',
    budget: budgets[0],
    timeline: timelines[0],
  })
  const [submitted, setSubmitted] = useState(false)

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  /**
   * INTEGRATION POINT
   * -----------------
   * There is currently no backend or email service connected to this site, so
   * this form does not send email from a server. Rather than showing a fake
   * "message sent" confirmation, submitting composes the enquiry and hands it
   * to the visitor's own mail client, addressed to info@monexa.co.za.
   *
   * To make submissions server-side, replace the body of `submitEnquiry` with a
   * request to the chosen provider (for example a Netlify Function, Netlify
   * Forms, or a transactional email API). The form state above is already the
   * full enquiry payload.
   */
  const buildMailto = () => {
    const subject = `Project enquiry — ${form.name}${form.company ? ` (${form.company})` : ''}`
    const body = [
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : '',
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      '',
      'What they are looking to build:',
      form.project,
    ]
      .filter(Boolean)
      .join('\n')
    return `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const submitEnquiry = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    window.location.href = buildMailto()
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Have a software problem worth solving? Tell Monexa what you are trying to build. Email info@monexa.co.za or send an enquiry."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title={<>Have a software problem worth solving?</>}
        intro={
          <>
            Tell us what you are trying to build, fix or replace — in your own words. You
            do not need a specification, a budget or a technical brief to start the
            conversation. A clear description of the problem is enough.
          </>
        }
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: details */}
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold text-ink-900">Reach us directly</h2>
              <p className="mt-3 max-w-md text-ink-600 text-pretty">
                If you would rather just email, use the address below. It reaches us
                directly.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="card card-hover flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-400">
                      Email
                    </span>
                    <span className="block break-all font-semibold text-ink-900">
                      {site.email}
                    </span>
                  </span>
                </a>

                <div className="card flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                    <IconCheck className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-400">
                      Based in
                    </span>
                    <span className="block font-semibold text-ink-900">
                      {site.location}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-ink-100 bg-ink-50/50 p-6">
                <h3 className="font-semibold text-ink-900">What happens next</h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-600">
                  {[
                    'We read the enquiry and come back to you by email.',
                    'If it looks like something we can help with, we set up a conversation about the problem.',
                    'If it is not a fit, we will tell you that plainly rather than waste your time.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right: enquiry form */}
          <Reveal delay={120}>
            <form
              onSubmit={submitEnquiry}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(11,32,53,0.4)] sm:p-8"
            >
              <h2 className="text-2xl font-bold text-ink-900">Send an enquiry</h2>
              <p className="mt-2 text-sm text-ink-600">
                Fields marked with <span className="text-brand-blue">*</span> are required.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
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
                    className={field}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelCls}>
                    Company <span className="font-normal text-ink-400">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={update('company')}
                    className={field}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>
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
                    className={field}
                    placeholder="you@company.co.za"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Phone <span className="font-normal text-ink-400">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className={field}
                    placeholder="Contact number"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="project" className={labelCls}>
                    What are you looking to build?{' '}
                    <span className="text-brand-blue">*</span>
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    required
                    rows={6}
                    value={form.project}
                    onChange={update('project')}
                    className={`${field} resize-y`}
                    placeholder="Describe the problem in your own words — what happens today, where it breaks down, and what you would like to be different."
                  />
                </div>

                <div>
                  <label htmlFor="budget" className={labelCls}>
                    Budget <span className="font-normal text-ink-400">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={update('budget')}
                    className={field}
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className={labelCls}>
                    Timeline <span className="font-normal text-ink-400">(optional)</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={update('timeline')}
                    className={field}
                  >
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-accent mt-7 w-full sm:w-auto">
                Send enquiry
                <IconArrowRight className="h-4 w-4" />
              </button>

              {submitted && (
                <div
                  className="mt-5 flex items-start gap-3 rounded-lg border border-brand-teal/30 bg-brand-teal/5 p-4 text-sm text-ink-700"
                  role="status"
                >
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <p>
                    Thanks, {form.name || 'there'} — your email client should have opened
                    with the enquiry ready to send to{' '}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-ink-900 underline"
                    >
                      {site.email}
                    </a>
                    . If it did not open, please email us directly and we will pick it up
                    from there.
                  </p>
                </div>
              )}

              <p className="mt-5 border-t border-ink-100 pt-4 text-xs leading-relaxed text-ink-500">
                This form is not yet connected to a server or email service. To keep things
                honest: pressing <strong>Send enquiry</strong> composes the message in your
                own email client, addressed to {site.email}, rather than submitting it to
                Monexa automatically. Server-side submission is a planned addition.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
