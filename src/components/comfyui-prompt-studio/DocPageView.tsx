'use client'

import React from 'react'

import { ComfyuiDocsLayout } from '@/components/comfyui-prompt-studio/ComfyuiDocsLayout'
import { DocPageContent } from '@/components/comfyui-prompt-studio/DocPageContent'
import { DocPageNav } from '@/components/comfyui-prompt-studio/DocPageNav'
import { DocsBreadcrumbs } from '@/components/comfyui-prompt-studio/DocsBreadcrumbs'
import { Hero } from '@/components/ui/Hero'
import { CPS_GITHUB, DOCS_BASE_PATH } from '@/content/comfyui-prompt-studio/helpers'
import type { DocPage } from '@/content/comfyui-prompt-studio/types'

export function DocPageView({ page, currentPath }: { page: DocPage; currentPath: string }) {
  const isHub = page.slug.length === 0
  const isMarketing = page.layout === 'marketing'

  let body: React.ReactNode

  if (isMarketing) {
    body = (
      <div className="space-y-12">
        <section className="space-y-4 border-l-2 border-[var(--ink)] pl-6">
          <p className="eyebrow">{page.section}</p>
          <h1 className="page-title">{page.title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{page.description}</p>
        </section>
        <section className="space-y-8">
          <DocPageContent page={page} showLead={false} />
          <DocPageNav order={page.order} />
        </section>
      </div>
    )
  } else if (isHub) {
    body = (
      <div className="space-y-12">
        <Hero
          title="LLM Prompt Studio"
          description={page.description}
          primaryCta={{ label: 'Why Prompt Studio?', href: `${DOCS_BASE_PATH}/stories/sales-pitch` }}
          secondaryCta={{ label: 'View on GitHub', href: CPS_GITHUB }}
        />
        <section className="space-y-8">
          <DocPageContent page={page} showLead={false} />
          <DocPageNav order={page.order} />
        </section>
      </div>
    )
  } else {
    body = (
      <article className="space-y-8 pb-16 md:space-y-12">
        <DocsBreadcrumbs slug={page.slug} title={page.title} />
        <h1 className="page-title">{page.title}</h1>
        <DocPageContent page={page} />
        <DocPageNav order={page.order} />
      </article>
    )
  }

  if (isHub || isMarketing) {
    return body
  }

  return <ComfyuiDocsLayout currentPath={currentPath}>{body}</ComfyuiDocsLayout>
}
