'use client'

import React, { useMemo, useState } from 'react'

const RULES: { id: string; label: string; pattern: RegExp; replace: string }[] = [
  {
    id: 'email',
    label: 'Email addresses',
    pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
    replace: '[REDACTED_EMAIL]',
  },
  {
    id: 'bearer',
    label: 'Bearer tokens',
    pattern: /\bBearer\s+[A-Za-z0-9\-._~+/]+=*/gi,
    replace: 'Bearer [REDACTED_TOKEN]',
  },
  {
    id: 'jwt',
    label: 'JWTs',
    pattern: /\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g,
    replace: '[REDACTED_JWT]',
  },
  {
    id: 'aws',
    label: 'AWS access keys',
    pattern: /\bAKIA[0-9A-Z]{16}\b/g,
    replace: '[REDACTED_AWS_KEY]',
  },
  {
    id: 'github',
    label: 'GitHub tokens',
    pattern: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g,
    replace: '[REDACTED_GH_TOKEN]',
  },
  {
    id: 'slack',
    label: 'Slack tokens',
    pattern: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g,
    replace: '[REDACTED_SLACK]',
  },
  {
    id: 'pem',
    label: 'PEM blocks',
    pattern: /-----BEGIN [A-Z0-9 ]+-----[\s\S]*?-----END [A-Z0-9 ]+-----/g,
    replace: '[REDACTED_PEM]',
  },
  {
    id: 'apikey',
    label: 'api_key / secret assignments',
    pattern:
      /\b(api[_-]?key|secret|password|passwd|token|auth)\b(\s*[:=]\s*)(["']?)[^\s"',}\\]+(\3)/gi,
    replace: '$1$2$3[REDACTED]$3',
  },
]

export function JsonRedactor() {
  const [input, setInput] = useState('')
  const [enabled, setEnabled] = useState(() => Object.fromEntries(RULES.map((r) => [r.id, true])))

  const output = useMemo(() => {
    let next = input
    for (const rule of RULES) {
      if (!enabled[rule.id]) continue
      next = next.replace(rule.pattern, rule.replace)
    }
    return next
  }, [input, enabled])

  const changed = input.length > 0 && output !== input

  return (
    <div className="space-y-6">
      <fieldset className="space-y-3">
        <legend className="form-label">Rules</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {RULES.map((rule) => (
            <label key={rule.id} className="flex items-center gap-2 text-sm text-[var(--ink)]">
              <input
                type="checkbox"
                checked={!!enabled[rule.id]}
                onChange={(e) => setEnabled((prev) => ({ ...prev, [rule.id]: e.target.checked }))}
              />
              {rule.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="redactor-input" className="form-label">
            Input
          </label>
          <textarea
            id="redactor-input"
            className="input-field min-h-64 font-mono text-xs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste logs, JSON, headers…"
            spellCheck={false}
          />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label htmlFor="redactor-output" className="form-label mb-0">
              Output {changed ? '(redacted)' : ''}
            </label>
            <button
              type="button"
              className="btn btn-secondary text-xs"
              onClick={() => void navigator.clipboard.writeText(output)}
              disabled={!output}
            >
              Copy
            </button>
          </div>
          <textarea
            id="redactor-output"
            className="input-field min-h-64 font-mono text-xs"
            value={output}
            readOnly
            spellCheck={false}
          />
        </div>
      </div>
      <p className="text-sm text-[var(--muted)]">
        Runs entirely in your browser. Nothing is uploaded. Heuristic only — still read the output before you share it.
      </p>
    </div>
  )
}
