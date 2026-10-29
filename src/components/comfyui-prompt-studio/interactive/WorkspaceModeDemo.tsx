'use client'

import { useState } from 'react'

const MODES = [
  {
    id: 'film',
    label: 'Film',
    description:
      'The default: the film loop in a lean sidebar — Cast, Outfit, Day, Scene, Story, Gallery, and Cut, with Film Director in the Film menu.',
    tools: ['Film', 'Cast', 'Outfit', 'Day', 'Scene', 'Story', 'Cut', 'Gallery'],
  },
  {
    id: 'studio',
    label: 'Studio',
    description:
      'More control — prompts, references, model settings, and every tool, with the film in progress kept at the top of the sidebar.',
    tools: ['Film in progress', 'Character', 'Compose', 'Inpaint', 'Refine', 'Video', 'Queue'],
  },
  {
    id: 'more',
    label: 'More tools',
    description:
      'Inside Studio: specialist tools, workflow graphs, and integrations. A saved Simple opens Film; a saved Full opens Studio.',
    tools: ['Specialist tools', 'Open in ComfyUI', 'Integrations', 'Settings'],
  },
] as const

export function WorkspaceModeDemo() {
  const [active, setActive] = useState<(typeof MODES)[number]['id']>('film')
  const mode = MODES.find((m) => m.id === active)!

  return (
    <div className="not-prose my-8 space-y-4">
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        Three workspace levels — Film is the default. Switch in Profile → Appearance.
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
