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

export function TriageForm({ siteKey }: { siteKey: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [stack, setStack] = useState('')
  const [pain, setPain] = useState('')
  const [urgency, setUrgency] = useState('weeks')
  const [environment, setEnvironment] = useState('')
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
      const res = await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          stack,
          pain,
          urgency,
          environment,
          turnstileToken: token,
        }),
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
      setStack('')
      setPain('')
      setEnvironment('')
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current)
      setToken('')
    } catch {
      setStatus('error')
      setError('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="card space-y-3 p-6">
        <p className="font-medium text-[var(--ink)]">Brief received.</p>
        <p className="text-sm text-[var(--muted)]">
          I’ll read it and reply from email — usually within a couple of days. If it’s on fire, say so in a follow-up to
          admin@robmcd.name.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="triage-name" className="form-label">
            Name
          </label>
          <input
            id="triage-name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="triage-email" className="form-label">
            Email
          </label>
          <input
            id="triage-email"
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="triage-stack" className="form-label">
          Stack
        </label>
        <textarea
          id="triage-stack"
          className="input-field min-h-24"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
          required
          placeholder="Language, framework, DB, host, approximate age…"
        />
      </div>

      <div>
        <label htmlFor="triage-pain" className="form-label">
          What fails first?
        </label>
        <textarea
          id="triage-pain"
          className="input-field min-h-28"
          value={pain}
          onChange={(e) => setPain(e.target.value)}
          required
          placeholder="Outages, slow queries, unowned deploys, security debt…"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="triage-urgency" className="form-label">
            Urgency
          </label>
          <select
            id="triage-urgency"
            className="input-field"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="advisory">Advisory / second opinion</option>
            <option value="weeks">Weeks (planned)</option>
            <option value="days">Days (pressing)</option>
            <option value="now">On fire</option>
          </select>
        </div>
        <div>
          <label htmlFor="triage-env" className="form-label">
            Environment
          </label>
          <input
            id="triage-env"
            className="input-field"
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            placeholder="On-prem, AWS, Azure, CF, mixed…"
          />
        </div>
      </div>

      <div ref={widgetRef} />

      {error ? <p className="form-error">{error}</p> : null}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting' || !token}>
        {status === 'submitting' ? 'Sending…' : 'Send triage brief'}
      </button>
    </form>
  )
}
