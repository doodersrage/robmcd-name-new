import React from 'react'

import { DocsSidebar } from '@/components/comfyui-prompt-studio/DocsSidebar'

export function ComfyuiDocsLayout({
  children,
  currentPath,
}: {
  children: React.ReactNode
  currentPath?: string
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-12">
        <DocsSidebar currentPath={currentPath} />
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}
