import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { site } from '../data/site'
import { IconArrowRight, IconCheck, IconMail } from '../components/Icons'

const topics = [
  'Custom software engineering',
  'Product engineering',
  'Systems and integrations',
  'Software modernisation',
  'A product idea',
  'Potential collaboration',
]

type FormState = {
  name: string
  email: string
  company: string
  topic: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  topic: topics[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [prepared, setPrepared] = useState(false)

  const update = (key: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((current) => ({ ...current, [key]: event.target.value }))

  const createMailto = () => {
    const subject = `Monexa enquiry — ${form.topic}${form.company ? ` — ${form.company}` : ''}`
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

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPrepared(true)
    window.location.href = createMailto()
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Speak to Monexa about custom software engineering, product development, systems integration or a technology problem worth solving."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title={<>Bring us a problem worth understanding.</>}
        intro={
          <>
            Tell us what you are trying to build, improve or connect. We start by understanding
            the problem and the context before talking about a software solution.
          </>
        }
      />

      <section className="container-page section-space">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="rule-label">Speak to us</p>
              <h2 className="mt-5 text-3xl font-semibold text-ink-950">Start with the context.</h2>
              <p className="mt-5 max-w-md leading-7 text-ink-600">
                A useful first conversation is about the business, the people and what needs to
                change. Share enough for us to understand where to begin.
              </p>

              <div className="mt-9 border-y border-ink-100">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 py-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center bg-ink-950 text-white">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="system-label">Email</span>
                    <span className="mt-1 block text-sm font-semibold text-ink-950 group-hover:text-brand-blue">
                      {site.email}
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-4 border-t border-ink-100 py-5">
                  <span className="flex h-11 w-11 items-center justify-center border border-ink-200 bg-white text-brand-tealdark">
                    <IconCheck className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="system-label">Based in</span>
                    <span className="mt-1 block text-sm font-semibold text-ink-950">{site.location}</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 border-l-2 border-brand-teal bg-ink-50 p-5">
                <p className="text-sm leading-6 text-ink-600">
                  <strong className="font-semibold text-ink-900">No automated backend yet.</strong>{' '}
                  This interface prepares an email in your own mail application. It does not claim
                  to submit or deliver data through a Monexa server.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={onSubmit} className="border border-ink-100 bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between border-b border-ink-100 pb-5">
                <div>
                  <p className="system-label">Enquiry interface</p>
                  <h2 className="mt-2 text-xl font-semibold text-ink-950">Tell us about the work</h2>
                </div>
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-ink-400 sm:inline">
                  Required fields marked *
                </span>
              </div>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <Field label="Name" id="name" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    className="form-control"
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Email" id="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className="form-control"
                    placeholder="you@company.com"
                  />
                </Field>

                <Field label="Company" id="company" optional>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={update('company')}
                    className="form-control"
                    placeholder="Your organisation"
                  />
                </Field>

                <Field label="Area of interest" id="topic">
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={update('topic')}
                    className="form-control"
                  >
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </Field>

                <Field label="What problem are you trying to solve?" id="message" required className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={update('message')}
                    className="form-control resize-y"
                    placeholder="Describe the context, the problem and what you would like to change."
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-col gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-accent">
                  Prepare email
                  <IconArrowRight className="h-4 w-4" />
                </button>
                <p className="max-w-xs text-xs leading-5 text-ink-400">
                  Opens your default email application with these details pre-filled.
                </p>
              </div>

              {prepared && (
                <div
                  className="mt-5 flex items-start gap-3 border border-brand-teal/30 bg-brand-teal/5 p-4 text-sm leading-6 text-ink-700"
                  role="status"
                  aria-live="polite"
                >
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-tealdark" />
                  <p>
                    Your email application should now be open with the enquiry prepared for{' '}
                    <strong>{site.email}</strong>. Review it there before sending.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

type FieldProps = {
  label: string
  id: string
  children: ReactNode
  required?: boolean
  optional?: boolean
  className?: string
}

function Field({ label, id, children, required, optional, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-800">
        {label} {required && <span className="text-brand-blue">*</span>}
        {optional && <span className="ml-1 font-normal text-ink-400">(optional)</span>}
      </label>
      {children}
    </div>
  )
}
