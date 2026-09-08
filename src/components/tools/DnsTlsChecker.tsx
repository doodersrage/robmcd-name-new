'use client'

import React, { useState } from 'react'

type DnsRow = { type: string; ttl: number | null; data: string }

type Result = {
  host: string
  checkedAt: string
  dns: { a: DnsRow[]; aaaa: DnsRow[]; mx: DnsRow[]; txt: DnsRow[] }
  https: {
    ok: boolean
    status: number | null
    finalUrl: string | null
    ms: number | null
    error?: string
  }
}

function RecordTable({ title, rows }: { title: string; rows: DnsRow[] }) {
  return (
    <div className="space-y-2">
      <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{title}</h3>
      {rows.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">None</p>
      ) : (
        <ul className="divide-y border" style={{ borderColor: 'var(--line)' }}>
          {rows.map((row, i) => (
            <li key={`${row.type}-${row.data}-${i}`} className="grid gap-1 px-3 py-2 font-mono text-xs sm:grid-cols-[4rem_4rem_1fr]">
              <span>{row.type}</span>
              <span className="text-[var(--muted)]">{row.ttl ?? '—'}</span>
              <span className="break-all">{row.data}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function DnsTlsChecker() {
  const [host, setHost] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<Result | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setResult(null)
    setLoading(true)
    try {
      const res = await fetch(`/api/dns-check?host=${encodeURIComponent(host.trim())}`)
      const data = (await res.json().catch(() => ({}))) as Result & { error?: string }
      if (!res.ok) {
        setError(data.error || 'Lookup failed.')
        return
      }
      setResult(data)
    } catch {
      setError('Lookup failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <label htmlFor="dns-host" className="form-label">
            Host
          </label>
          <input
            id="dns-host"
            className="input-field"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            placeholder="example.com"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Checking…' : 'Check'}
        </button>
      </form>

      {error ? <p className="form-error">{error}</p> : null}

      {result ? (
        <div className="space-y-8 border-t pt-6" style={{ borderColor: 'var(--line)' }}>
          <div className="space-y-2">
            <p className="font-mono text-xs text-[var(--muted)]">
              {result.host} · {new Date(result.checkedAt).toLocaleString()}
            </p>
            <p className="text-sm text-[var(--ink)]">
              HTTPS:{' '}
              {result.https.ok
                ? `reachable (HTTP ${result.https.status}, ${result.https.ms} ms)`
                : `not reachable (${result.https.error || 'error'})`}
            </p>
            {result.https.finalUrl ? (
              <p className="break-all font-mono text-xs text-[var(--muted)]">Final URL: {result.https.finalUrl}</p>
            ) : null}
          </div>
          <RecordTable title="A" rows={result.dns.a} />
          <RecordTable title="AAAA" rows={result.dns.aaaa} />
          <RecordTable title="MX" rows={result.dns.mx} />
          <RecordTable title="TXT" rows={result.dns.txt} />
        </div>
      ) : null}

      <p className="text-sm text-[var(--muted)]">
        DNS via Cloudflare DoH. HTTPS is a reachability probe from this Worker — not a full certificate audit.
      </p>
    </div>
  )
}
