'use client'

import React, { useEffect, useState } from 'react'

type Probe = {
  id: string
  name: string
  href: string
  blurb: string
  ok: boolean
  status: number | null
  ms: number | null
  error?: string
}

type Payload = {
  checkedAt: string
  results: Probe[]
}

export function StatusBoard() {
  const [data, setData] = useState<Payload | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/status')
      const json = (await res.json().catch(() => ({}))) as Payload & { error?: string }
      if (!res.ok) {
        setError(json.error || 'Could not load status.')
        return
      }
      setData(json)
    } catch {
      setError('Could not load status.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void load()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className="btn btn-secondary" onClick={() => void load()} disabled={loading}>
          {loading ? 'Checking…' : 'Recheck'}
        </button>
        {data ? (
          <p className="font-mono text-xs text-[var(--muted)]">
            Last check {new Date(data.checkedAt).toLocaleString()}
          </p>
        ) : null}
      </div>

      {error ? <p className="form-error">{error}</p> : null}

      <ul className="divide-y border" style={{ borderColor: 'var(--line)' }}>
        {(data?.results ?? []).map((row) => (
          <li key={row.id} className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 space-y-1">
              <a href={row.href} className="text-link font-medium" target="_blank" rel="noopener noreferrer">
                {row.name}
              </a>
              <p className="text-sm text-[var(--muted)]">{row.blurb}</p>
            </div>
            <div className="shrink-0 font-mono text-xs sm:text-right">
              <p className={row.ok ? 'text-[var(--accent)]' : 'text-[var(--ink)]'}>
                {row.ok ? 'reachable' : 'unreachable'}
              </p>
              <p className="text-[var(--muted)]">
                {row.status != null ? `HTTP ${row.status}` : row.error || '—'}
                {row.ms != null ? ` · ${row.ms} ms` : ''}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {!data && loading ? <p className="text-sm text-[var(--muted)]">Probing lab endpoints from the edge…</p> : null}

      <p className="text-sm text-[var(--muted)]">
        Reachability from this Worker only. Auth walls, maintenance pages, or geo rules can look “up” while still being
        closed to you — and the reverse.
      </p>
    </div>
  )
}
