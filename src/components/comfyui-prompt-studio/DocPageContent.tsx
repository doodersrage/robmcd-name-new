import React from 'react'

import { DocInteractivePanel } from '@/components/comfyui-prompt-studio/DocInteractivePanel'
import type { DocBlock, DocPage } from '@/content/comfyui-prompt-studio/types'
import { slugToPath } from '@/content/comfyui-prompt-studio/pages'

function DocBlockRenderer({
  block,
  page,
}: {
  block: DocBlock
  page: DocPage
}) {
  switch (block.type) {
    case 'p':
      return <p className="text-base leading-relaxed text-[var(--muted)]">{block.text}</p>
    case 'h2':
      return (
        <h2 className="text-2xl font-bold tracking-tight text-[var(--ink)] pt-4 first:pt-0">{block.text}</h2>
      )
    case 'h3':
      return <h3 className="text-xl font-semibold text-[var(--ink)] pt-2">{block.text}</h3>
    case 'ul':
      return (
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--muted)] marker:text-[var(--muted)]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-[var(--muted)]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    case 'callout': {
      const variants = {
        info: 'border-[var(--line)] bg-slate-50/80 dark:border-zinc-700 dark:bg-zinc-900/60',
        tip: 'border-emerald-300/60 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
        warn: 'border-amber-300/60 bg-amber-50/50 dark:border-amber-800/60 dark:bg-amber-950/30',
      }
      return (
        <div className={`rounded-sm border p-4 ${variants[block.variant]}`}>
          {block.title ? (
            <p className="mb-1 font-semibold text-[var(--ink)]">{block.title}</p>
          ) : null}
          <p className="text-sm leading-relaxed text-[var(--muted)]">{block.text}</p>
        </div>
      )
    }
    case 'code':
      return (
        <pre className="overflow-x-auto rounded-sm border border-[var(--line)] bg-[var(--ink)] p-4 font-mono text-sm leading-relaxed text-emerald-400/90">
          <code>{block.code}</code>
        </pre>
      )
    case 'links':
      return (
        <ul className="flex list-none flex-wrap gap-3 pl-0">
          {block.items.map((item) =>
            item.external ? (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-sm"
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.href}>
                <a href={item.href} className="btn btn-secondary text-sm">
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>
      )
    case 'stats':
      return (
        <div className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {block.items.map((item) => (
            <div
              key={item.label}
              className="rounded-sm border border-[var(--line)] bg-[var(--paper)] p-5 text-center transition-all duration-300 "
            >
              <p className="text-3xl font-bold tracking-tight text-[var(--ink)]">{item.value}</p>
              <p className="mt-1 font-semibold text-[var(--ink)]">{item.label}</p>
              {item.detail ? (
                <p className="mt-1 text-xs text-[var(--muted)]">{item.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      )
    case 'quote':
      return (
        <blockquote className="not-prose rounded-sm border border-[var(--line)] bg-[var(--paper)] px-6 py-5">
          <p className="text-lg leading-relaxed text-[var(--ink)]">&ldquo;{block.text}&rdquo;</p>
          <footer className="mt-4 text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">{block.attribution}</span>
            {block.role ? <span className="text-[var(--muted)]"> · {block.role}</span> : null}
          </footer>
        </blockquote>
      )
    case 'comparison':
      return (
        <div className="not-prose grid gap-4 md:grid-cols-2">
          <div className="rounded-sm border border-amber-200/80 bg-amber-50/30 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Before
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--ink)]">
              {block.before.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-amber-600 dark:text-amber-500">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-emerald-200/80 bg-emerald-50/30 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              After
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--ink)]">
              {block.after.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-emerald-600 dark:text-emerald-500">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    case 'timeline':
      return (
        <ol className="not-prose space-y-4">
          {block.items.map((item, i) => (
            <li
              key={item.title}
              className="relative rounded-sm border border-[var(--line)] bg-[var(--paper)] p-5 pl-12 shadow-sm"
            >
              <span className="absolute left-4 top-5 flex h-7 w-7 items-center justify-center rounded-sm bg-slate-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
                {i + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                {item.phase}
              </p>
              <p className="mt-1 font-bold text-[var(--ink)]">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
            </li>
          ))}
        </ol>
      )
    case 'interactive-slot':
      return page.interactive ? <DocInteractivePanel type={page.interactive} /> : null
    default:
      return null
  }
}

function pageUsesInteractiveSlot(page: DocPage): boolean {
  return page.blocks.some((b) => b.type === 'interactive-slot')
}

export function DocPageContent({ page, showLead = true }: { page: DocPage; showLead?: boolean }) {
  const inlineInteractive = pageUsesInteractiveSlot(page)

  return (
    <div className="doc-content space-y-6">
      {showLead ? (
        <p className="text-lg leading-relaxed text-[var(--muted)]">{page.description}</p>
      ) : null}
      {!inlineInteractive && page.interactive ? <DocInteractivePanel type={page.interactive} /> : null}
      {page.blocks.map((block, i) => (
        <DocBlockRenderer key={`${block.type}-${i}`} block={block} page={page} />
      ))}
      {page.related && page.related.length > 0 ? (
        <div className="border-t border-[var(--line)] pt-8">
          <h2 className="text-lg font-bold text-[var(--ink)]">Related</h2>
          <ul className="mt-3 flex list-none flex-wrap gap-2 pl-0">
            {page.related.map((rel) => (
              <li key={rel}>
                <a href={slugToPath(rel.split('/'))} className="skill-pill hover-lift">
                  {rel.split('/').pop()?.replace(/-/g, ' ')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
