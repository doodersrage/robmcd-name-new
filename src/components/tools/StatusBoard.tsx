'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { LAB_ENDPOINT_GROUP_LABEL, type LabEndpointGroup } from '@/content/lab/endpoints'

type Probe = {
  id: string
  name: string
  href: string
  blurb: string
  group: LabEndpointGroup
  ok: boolean
  status: number | null
  ms: number | null
  error?: string
}

type Payload = {
  checkedAt: string
  results: Probe[]
}

const GROUP_ORDER: LabEndpointGroup[] = ['products', 'homelab']

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

  const grouped = useMemo(() => {
    const results = data?.results ?? []
    return GROUP_ORDER.map((group) => ({
      group,
      label: LAB_ENDPOINT_GROUP_LABEL[group],
      rows: results.filter((row) => row.group === group),
    })).filter((section) => section.rows.length > 0)
  }, [data])

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

      {grouped.map((section) => (
        <section key={section.group} className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">{section.label}</h2>
          <ul className="divide-y border" style={{ borderColor: 'var(--line)' }}>
            {section.rows.map((row) => (
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
        </section>
      ))}

      {!data && loading ? <p className="text-sm text-[var(--muted)]">Probing endpoints from the edge…</p> : null}

      <p className="text-sm text-[var(--muted)]">
        Reachability from this Worker only. Auth walls, maintenance pages, or geo rules can look “up” while still being
        closed to you — and the reverse.
      </p>
    </div>
  )
}
