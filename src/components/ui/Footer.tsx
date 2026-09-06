import React from 'react'
import { SiteLogo } from '@/components/ui/SiteLogo'
import { SITE_DESCRIPTION, SITE_LINKS } from '@/lib/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-6 md:space-y-16 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col gap-3">
            <SiteLogo as="static" size="sm" />
            <p className="text-base leading-relaxed text-[var(--muted)]">{SITE_DESCRIPTION}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="eyebrow">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-link text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-link text-sm">
                  About
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.promptStudio} className="text-link text-sm">
                  LLM Prompt Studio
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.thermalTrace}
                  className="text-link text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ThermalTrace
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.work} className="text-link text-sm">
                  Work
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.projects} className="text-link text-sm">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="eyebrow">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-link text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-link text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: 'var(--line)' }}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-[var(--muted)] md:text-left">
              &copy; {new Date().getFullYear()} Robert McDowell. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_LINKS.github}
                className="text-link text-[var(--muted)]"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
