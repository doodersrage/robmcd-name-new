'use client'

import { useState } from 'react'

import type { DocInteractive } from '@/content/comfyui-prompt-studio/types'
import { ApiEndpointDemo } from './interactive/ApiEndpointDemo'
import { GalleryReviewDemo } from './interactive/GalleryReviewDemo'
import { ModelFamilyDemo } from './interactive/ModelFamilyDemo'
import { PromptDetailDemo } from './interactive/PromptDetailDemo'
import { ToolRoutesDemo } from './interactive/ToolRoutesDemo'
import { WorkflowPipelineDemo } from './interactive/WorkflowPipelineDemo'
import { WorkspaceModeDemo } from './interactive/WorkspaceModeDemo'
import { SalesPitchDemo } from './interactive/SalesPitchDemo'
import { CaseStudyDemo } from './interactive/CaseStudyDemo'

const QUALITY_PROFILES = [
  { id: 'draft', label: 'Draft', steps: 20, cfg: 6.5, desc: 'Fast iteration, lower VRAM' },
  { id: 'final', label: 'Final', steps: 30, cfg: 7.0, desc: 'Balanced quality for delivery' },
  { id: 'max', label: 'Max', steps: 40, cfg: 7.5, desc: 'Hero frames and print' },
]

function QualityProfileDemo() {
  const [active, setActive] = useState('final')
  const profile = QUALITY_PROFILES.find((p) => p.id === active)!

  return (
    <div className="not-prose my-8 space-y-4">
      <div className="flex flex-wrap gap-2">
        {QUALITY_PROFILES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(p.id)}
            className={`skill-pill cursor-pointer ${active === p.id ? 'ring-2 ring-slate-400/80 dark:ring-zinc-500' : ''}`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-sm border border-[var(--line)] bg-slate-50 dark:bg-zinc-950 p-4 text-center">
          <p className="text-2xl font-bold tabular-nums text-[var(--ink)]">{profile.steps}</p>
          <p className="text-xs text-[var(--muted)]">steps</p>
        </div>
        <div className="rounded-sm border border-[var(--line)] bg-slate-50 dark:bg-zinc-950 p-4 text-center">
          <p className="text-2xl font-bold tabular-nums text-[var(--ink)]">{profile.cfg}</p>
          <p className="text-xs text-[var(--muted)]">CFG</p>
        </div>
        <div className="flex items-center justify-center rounded-sm border border-[var(--line)] bg-slate-50 dark:bg-zinc-950 p-4">
          <p className="text-sm text-[var(--muted)]">{profile.desc}</p>
        </div>
      </div>
    </div>
  )
}

export function DocInteractivePanel({ type }: { type: DocInteractive }) {
  switch (type) {
    case 'workspace-modes':
      return <WorkspaceModeDemo />
    case 'model-families':
      return <ModelFamilyDemo />
    case 'prompt-detail':
      return <PromptDetailDemo />
    case 'workflow-pipeline':
      return <WorkflowPipelineDemo />
    case 'tool-routes':
      return <ToolRoutesDemo />
    case 'gallery-review':
      return <GalleryReviewDemo />
    case 'api-endpoint':
      return <ApiEndpointDemo />
    case 'sales-pitch':
      return <SalesPitchDemo />
    case 'case-study':
      return <CaseStudyDemo />
    case 'quality-profiles':
      return <QualityProfileDemo />
    default:
      return null
  }
}
