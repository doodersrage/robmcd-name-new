import React from 'react'

import { DOCS_BASE_PATH, slugToPath } from '@/content/comfyui-prompt-studio/helpers'

type DocsBreadcrumbsProps = {
  slug: string[]
  title: string
}

export function DocsBreadcrumbs({ slug, title }: DocsBreadcrumbsProps) {
  const crumbs: { label: string; href: string }[] = [{ label: 'Prompt Studio', href: DOCS_BASE_PATH }]

  for (let i = 0; i < slug.length; i++) {
    const segment = slug[i]!
    const pathSlug = slug.slice(0, i + 1)
    crumbs.push({
      label: segment.replace(/-/g, ' '),
      href: slugToPath(pathSlug),
    })
  }

  return (
    <nav aria-label="Breadcrumb" className="page-meta mb-6">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {i === crumbs.length - 1 ? (
              <span className="font-medium capitalize text-[var(--ink)]">{title}</span>
            ) : (
              <a href={crumb.href} className="capitalize text-link">
                {crumb.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
