'use client'

import React, { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: { sitekey: string; callback: (token: string) => void; 'expired-callback'?: () => void },
      ) => string
      reset: (id?: string) => void
    }
  }
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({ siteKey }: { siteKey: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    if (!siteKey || !widgetRef.current) return

    const render = () => {
      if (!widgetRef.current || !window.turnstile || widgetId.current) return
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        callback: (t) => setToken(t),
        'expired-callback': () => setToken(''),
      })
    }

    if (window.turnstile) {
      render()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = render
    document.body.appendChild(script)
  }, [siteKey])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, turnstileToken: token }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        setStatus('error')
        setError(data.error || 'Something went wrong. Please try again.')
        if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current)
        setToken('')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current)
      setToken('')
    } catch {
      setStatus('error')
      setError('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <p className="max-w-xl rounded-sm border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base leading-relaxed">
        Message received. I&apos;ll get back to you soon — usually within a couple of days.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card max-w-xl space-y-5">
      {error ? <p className="form-error">{error}</p> : null}

      <div>
        <label htmlFor="contact-name" className="form-label">
          Name
        </label>
        <input
          id="contact-name"
          className="input-field"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="form-label">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          className="input-field"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="form-label">
          Message
        </label>
        <textarea
          id="contact-message"
          className="input-field min-h-[8rem]"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you working on, and how can I help?"
        />
      </div>

      <div ref={widgetRef} />

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting' || !token}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
