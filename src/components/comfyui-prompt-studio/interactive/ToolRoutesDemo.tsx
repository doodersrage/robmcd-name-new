'use client'

import { useState } from 'react'

import { DOCS_BASE_PATH } from '@/content/comfyui-prompt-studio/helpers'

const TOOLS = [
  { route: '/play', label: 'Film', slug: 'play/first-film' },
  { route: '/characters', label: 'Cast', slug: 'play/cast' },
  { route: '/fitting', label: 'Outfit', slug: 'play/outfit' },
  { route: '/day', label: 'Day', slug: 'play/day' },
  { route: '/scene', label: 'Scene', slug: 'play/scene' },
  { route: '/story', label: 'Story', slug: 'play/story' },
  { route: '/cut', label: 'Cut', slug: 'play/cut' },
  { route: '/production', label: 'Film Director', slug: 'play/director' },
  { route: '/m', label: 'Mobile Studio', slug: 'play/mobile-studio' },
  { route: '/character', label: 'Character', slug: 'character/character-tool' },
  { route: '/compose', label: 'Compose', slug: 'image-tools/compose-transfer' },
  { route: '/inpaint', label: 'Inpaint', slug: 'image-tools/inpaint-outpaint' },
  { route: '/refine', label: 'Refine', slug: 'format-and-lint/refine' },
  { route: '/video', label: 'Video', slug: 'media/video' },
  { route: '/gallery', label: 'Gallery', slug: 'gallery/gallery-overview' },
  { route: '/queue', label: 'Queue', slug: 'gallery/queue-orchestration' },
  { route: '/dashboard', label: 'Dashboard', slug: 'introduction/architecture' },
  { route: '/settings', label: 'Settings', slug: 'getting-started/environment' },
] as const

const LIVE = 'http://localhost:47832'

export function ToolRoutesDemo() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="not-prose my-8">
      <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
        Castcut 3.2’s routes — click a card for docs, hover for the live local URL (Node.js 22+, port 47832). The classic tools (Generate, Format, Lint, Variations, Workflow editor, and more) are in Prompt Studio.
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map((tool) => (
          <a
            key={tool.route}
            href={`${DOCS_BASE_PATH}/${tool.slug}/`}
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
