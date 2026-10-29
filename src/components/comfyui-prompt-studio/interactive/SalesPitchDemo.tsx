'use client'

import { useState } from 'react'

const BEFORE = [
  'Prompts scattered across Notion, Discord pins, and ComfyUI node text fields',
  'The character’s face, clothes, and room drift from one still to the next',
  'Gallery is a folder of PNGs with filenames like output_00347.png',
  'Re-running a good shot means hunting the old seed in chat logs',
  'Stills and clips get cut together by hand in a separate editor',
]

const AFTER = [
  'One Cast with a plate, a dressed plate, places, and a voice — the same person in every shot',
  'A screenplay becomes shot lists, Scenes, and takes; a run renders them one at a time',
  'Every take records its engine, seed, prompt, and graph, and replays exactly',
  'Cut mixes Day, Story, and Scenes with subtitles, a score, and sound effects',
  'Export for an editor hands Resolve, Premiere, or Final Cut a timeline'
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
          Without Castcut
        </button>
        <button
          type="button"
          onClick={() => setView('after')}
          className={`skill-pill cursor-pointer transition-all duration-300 ${
            view === 'after' ? 'ring-2 ring-emerald-400/80 dark:ring-emerald-600' : 'opacity-70'
          }`}
        >
          With Castcut
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
    </div>
  )
}
