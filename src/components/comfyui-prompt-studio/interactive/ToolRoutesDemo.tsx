'use client'

import { useState } from 'react'

import { CASTCUT_VERSION, DOCS_BASE_PATH, DOCS_SITE } from '@/content/comfyui-prompt-studio/helpers'

const TOOLS = [
  { route: '/play', label: 'Film', href: `${DOCS_BASE_PATH}/play/first-film/` },
  { route: '/characters', label: 'Cast', href: `${DOCS_BASE_PATH}/play/cast/` },
  { route: '/fitting', label: 'Outfit', href: `${DOCS_BASE_PATH}/play/outfit/` },
  { route: '/day', label: 'Day', href: `${DOCS_BASE_PATH}/play/day/` },
  { route: '/scene', label: 'Scene', href: `${DOCS_BASE_PATH}/play/scene/` },
  { route: '/story', label: 'Story', href: `${DOCS_BASE_PATH}/play/story/` },
  { route: '/cut', label: 'Cut', href: `${DOCS_BASE_PATH}/play/cut/` },
  { route: '/production', label: 'Film Director', href: `${DOCS_BASE_PATH}/play/director/` },
  { route: '/m', label: 'Mobile Studio', href: `${DOCS_BASE_PATH}/play/mobile-studio/` },
  { route: '/character', label: 'Character', href: `${DOCS_SITE}/features/` },
  { route: '/compose', label: 'Compose', href: `${DOCS_SITE}/features/` },
  { route: '/inpaint', label: 'Inpaint', href: `${DOCS_SITE}/features/` },
  { route: '/refine', label: 'Refine', href: `${DOCS_SITE}/features/` },
  { route: '/video', label: 'Video', href: `${DOCS_SITE}/features/` },
  { route: '/gallery', label: 'Gallery', href: `${DOCS_SITE}/features/` },
  { route: '/queue', label: 'Queue', href: `${DOCS_SITE}/features/` },
  { route: '/dashboard', label: 'Dashboard', href: `${DOCS_BASE_PATH}/introduction/architecture/` },
  { route: '/settings', label: 'Settings', href: `${DOCS_SITE}/configuration/` },
] as const

const LIVE = 'http://localhost:47832'

export function ToolRoutesDemo() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="not-prose my-8">
      <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
        Castcut {CASTCUT_VERSION}’s routes — click a card for docs, hover for the live local URL (Node.js 22+, port 47832). The classic tools (Generate, Format, Lint, Variations, Workflow editor, and more) are in Prompt Studio.
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map((tool) => (
          <a
            key={tool.route}
            href={tool.href}
            onMouseEnter={() => setHovered(tool.route)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-sm border border-[var(--line)] bg-[var(--paper)] p-3  transition-all duration-300  ${
              hovered === tool.route ? 'ring-2 ring-slate-300/80 dark:ring-zinc-600' : ''
            }`}
          >
            <p className="truncate text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">
              {tool.route}
            </p>
            <p className="mt-0.5 truncate text-sm font-bold text-[var(--ink)]">{tool.label}</p>
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-[var(--muted)]">
        Open live tool:{' '}
        <a
          href={`${LIVE}${hovered ?? '/play'}`}
          className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2 hover:decoration-slate-600 dark:text-zinc-100 dark:decoration-zinc-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {LIVE}
          {hovered ?? '/play'}
        </a>
      </p>
    </div>
  )
}
