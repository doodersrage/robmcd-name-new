'use client'

import { useMemo, useState } from 'react'

import { getAllPages, slugToPath } from '@/content/comfyui-prompt-studio/pages'

export function DocsSearch() {
  const [query, setQuery] = useState('')
  const pages = getAllPages()

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return []

    return pages
      .filter(
        (page) =>
          page.title.toLowerCase().includes(term) ||
          page.description.toLowerCase().includes(term) ||
          page.section.toLowerCase().includes(term) ||
          page.slug.join('/').toLowerCase().includes(term),
      )
      .slice(0, 10)
  }, [pages, query])

  return (
    <div className="not-prose mb-6">
      <label htmlFor="docs-search" className="sr-only">
        Search documentation
      </label>
      <input
        id="docs-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search docs…"
        className="input-field w-full"
      />
      {query.trim() ? (
        <ul
          className="mt-2 max-h-64 space-y-1 overflow-y-auto rounded-sm border bg-[var(--paper)] p-2"
          style={{ borderColor: 'var(--line)' }}
        >
          {results.length === 0 ? (
            <li className="px-3 py-2 text-sm text-[var(--muted)]">No matches</li>
          ) : (
            results.map((page) => (
              <li key={slugToPath(page.slug)}>
                <a
                  href={slugToPath(page.slug)}
                  className="block rounded-sm px-3 py-2 transition-colors hover:bg-[var(--canvas)]"
                  onClick={() => setQuery('')}
                >
                  <p className="text-sm font-medium text-[var(--ink)]">{page.title}</p>
                  <p className="font-mono text-xs text-[var(--muted)]">{page.section}</p>
                </a>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  )
}
