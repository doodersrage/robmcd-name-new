'use client'

import { useEffect, useState } from 'react'

import { DocsSearch } from '@/components/comfyui-prompt-studio/DocsSearch'
import { DOCS_BASE_PATH, LEGACY_DOCS_BASE_PATH } from '@/content/comfyui-prompt-studio/helpers'
import { getSections, slugToPath } from '@/content/comfyui-prompt-studio/pages'

function normalizeDocsPath(pathname: string): string {
  if (pathname === LEGACY_DOCS_BASE_PATH || pathname.startsWith(`${LEGACY_DOCS_BASE_PATH}/`)) {
    return pathname.replace(LEGACY_DOCS_BASE_PATH, DOCS_BASE_PATH)
  }
  return pathname
}

export function DocsSidebar({ currentPath }: { currentPath?: string } = {}) {
  const [clientPath, setClientPath] = useState(currentPath ?? '')
  useEffect(() => {
    if (currentPath) {
      setClientPath(currentPath)
      return
    }
    setClientPath(window.location.pathname)
  }, [currentPath])

  const pathname = normalizeDocsPath(clientPath)
  const sections = getSections()
  const [open, setOpen] = useState(false)

  const nav = (
    <nav className="space-y-6">
      {sections.map((section) => (
        <div key={section.id}>
          <p className="eyebrow mb-2">{section.title}</p>
          <ul className="space-y-1">
            {section.pages.map((page) => {
              const href = slugToPath(page.slug)
              const active = pathname === href
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`sidebar-link ${active ? 'border-[var(--line)] text-[var(--ink)]' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {page.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary mb-4 w-full lg:hidden"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {open ? 'Hide' : 'Show'} documentation menu
      </button>
      <aside
        className={`lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto ${
          open ? 'block' : 'hidden lg:block'
        }`}
      >
        <DocsSearch />
        <div className="border-t pt-4 lg:border-0 lg:pt-0" style={{ borderColor: 'var(--line)' }}>
          {nav}
        </div>
      </aside>
    </>
  )
}
