'use client'

import { useState } from 'react'

const BEFORE = [
  'Prompts scattered across Notion, Discord pins, and ComfyUI node text fields',
  'No shared negative library — every workflow drifts',
  'Gallery is a folder of PNGs with filenames like output_00347.png',
  'Re-running a good shot means hunting the old seed in chat logs',
  'Switching Flux → SDXL breaks tag density silently',
]

const AFTER = [
  'One character bible, one linted prompt pipeline, one gallery index',
  'Workflow takeover pushes live text into CLIP nodes — no graph surgery',
  'Review mode rates batches in minutes; analytics show what tags win',
  'Re-queue from gallery with Final/Max quality or new variation in one click',
  'Model family rules enforce limits before GPU time is spent',
]

const METRICS = [
  { id: 'time', label: 'Time to approved prompt', before: 18, after: 4, unit: 'min' },
  { id: 'waste', label: 'Wasted renders (lint failures)', before: 34, after: 8, unit: '%' },
  { id: 'consistency', label: 'Character match rate (series)', before: 62, after: 91, unit: '%' },
]

export function SalesPitchDemo() {
  const [view, setView] = useState<'before' | 'after'>('before')
  const items = view === 'before' ? BEFORE : AFTER

  return (
    <div className="not-prose my-8 space-y-8">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setView('before')}
          className={`skill-pill cursor-pointer transition-all duration-300 ${
            view === 'before' ? 'ring-2 ring-amber-400/80 dark:ring-amber-600' : 'opacity-70'
          }`}
        >
          Without Prompt Studio
        </button>
        <button
          type="button"
          onClick={() => setView('after')}
          className={`skill-pill cursor-pointer transition-all duration-300 ${
            view === 'after' ? 'ring-2 ring-emerald-400/80 dark:ring-emerald-600' : 'opacity-70'
          }`}
        >
          With Prompt Studio
        </button>
      </div>

      <ul key={view} className="space-y-3 transition-opacity duration-300">
        {items.map((item) => (
          <li
            key={item}
            className={`flex gap-3 rounded-sm border p-4 text-sm leading-relaxed ${
              view === 'before'
                ? 'border-amber-200/80 bg-amber-50/40 dark:border-amber-900/60 dark:bg-amber-950/20 text-[var(--ink)]'
                : 'border-emerald-200/80 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20 text-[var(--ink)]'
            }`}
          >
            <span aria-hidden className="mt-0.5 shrink-0 font-bold">
              {view === 'before' ? '✕' : '✓'}
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="grid gap-4 sm:grid-cols-3">
        {METRICS.map((m) => (
          <div
            key={m.id}
            className="rounded-sm border border-[var(--line)] bg-[var(--paper)] p-5 "
          >
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
              {m.label}
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-lg tabular-nums text-slate-400 line-through dark:text-zinc-600">
                {m.before}
                {m.unit}
              </span>
              <span className="text-3xl font-bold tabular-nums text-[var(--ink)]">
                {m.after}
                {m.unit}
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-800">
              <div
                className="h-full rounded-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-700 ease-out"
                style={{
                  width: `${view === 'after' ? (m.id === 'waste' ? 100 - m.after : m.after) : m.before}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
