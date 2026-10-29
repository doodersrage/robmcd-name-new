'use client'

import type { DocInteractive } from '@/content/comfyui-prompt-studio/types'
import { SalesPitchDemo } from './interactive/SalesPitchDemo'
import { ToolRoutesDemo } from './interactive/ToolRoutesDemo'
import { WorkflowPipelineDemo } from './interactive/WorkflowPipelineDemo'
import { WorkspaceModeDemo } from './interactive/WorkspaceModeDemo'

export function DocInteractivePanel({ type }: { type: DocInteractive }) {
  switch (type) {
    case 'workspace-modes':
      return <WorkspaceModeDemo />
    case 'workflow-pipeline':
      return <WorkflowPipelineDemo />
    case 'tool-routes':
      return <ToolRoutesDemo />
    case 'sales-pitch':
      return <SalesPitchDemo />
    default:
      return null
  }
}
