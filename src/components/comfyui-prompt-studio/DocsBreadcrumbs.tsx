import React from 'react'

import { DOCS_BASE_PATH, getPageBySlug, slugToPath } from '@/content/comfyui-prompt-studio/pages'

type DocsBreadcrumbsProps = {
  slug: string[]
  title: string
}

export function DocsBreadcrumbs({ slug, title }: DocsBreadcrumbsProps) {
  const crumbs: { label: string; href?: string }[] = [{ label: 'Castcut', href: DOCS_BASE_PATH }]

  for (let i = 0; i < slug.length; i++) {
    const segment = slug[i]!
    const pathSlug = slug.slice(0, i + 1)
    const isLast = i === slug.length - 1
    const page = getPageBySlug(pathSlug)
    crumbs.push({
      label: isLast ? title : (page?.title ?? segment.replace(/-/g, ' ')),
      href: isLast ? undefined : page ? slugToPath(pathSlug) : undefined,
    })
  }

  return (
    <nav aria-label="Breadcrumb" className="page-meta mb-6">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((crumb, i) => (
          <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {crumb.href ? (
              <a href={crumb.href} className="capitalize text-link">
                {crumb.label}
              </a>
            ) : (
              <span className="font-medium capitalize text-[var(--ink)]">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
