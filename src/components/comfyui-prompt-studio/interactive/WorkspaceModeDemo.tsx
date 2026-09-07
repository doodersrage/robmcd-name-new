'use client'

import { useState } from 'react'

const MODES = [
  {
    id: 'simple',
    label: 'Simple',
    description: 'Default mode — essentials plus More tools, advanced sections collapsed. History, Compare, Templates, Presets, and Analytics stay available in Studio tabs.',
    tools: ['Generate', 'Format', 'Character', 'Gallery', 'More tools'],
  },
  {
    id: 'play',
    label: 'Play',
    description: 'Cast, Roleplay, Gallery, and Queue in a lean sidebar — narrative stills and clips without the full Edit/Media/Library rail.',
    tools: ['Cast', 'Roleplay', 'Gallery', 'Queue', 'Mobile `/m`'],
  },
  {
    id: 'studio',
    label: 'Studio',
    description: 'Edit / Media / Library groups with collapsed advanced sections — campaigns, analytics, and full tool access.',
    tools: ['Edit group', 'Media group', 'Library', 'All Studio tabs'],
  },
  {
    id: 'full',
    label: 'Full',
    description: 'Same groups as Studio, expanded by default — quality sections open, workflow editor and media tools prominent.',
    tools: ['Workflow editor', 'Video', 'Audio', 'Mesh', 'Advanced queue'],
  },
] as const

export function WorkspaceModeDemo() {
  const [active, setActive] = useState<(typeof MODES)[number]['id']>('simple')
  const mode = MODES.find((m) => m.id === active)!

  return (
    <div className="not-prose my-8 space-y-4">
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        Four workspace modes — switch from the sidebar footer or Profile → Appearance.
      </p>
      <div className="flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(m.id)}
            className={`skill-pill cursor-pointer transition-all duration-300 ${
              active === m.id
                ? 'ring-2 ring-slate-400/80 dark:ring-zinc-500 bg-slate-100 dark:bg-zinc-800 scale-105'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div
        key={mode.id}
        className="rounded-sm border border-[var(--line)] bg-[var(--paper)] p-6  transition-all duration-300"
      >
        <p className="text-base leading-relaxed text-[var(--muted)]">{mode.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {mode.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-lg bg-slate-50 dark:bg-zinc-950 px-3 py-1.5 text-sm font-medium text-[var(--ink)]"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
