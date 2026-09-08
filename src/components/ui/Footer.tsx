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
                <a href={SITE_LINKS.about} className="text-link text-sm">
                  About
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.hire} className="text-link text-sm">
                  Hire
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.work} className="text-link text-sm">
                  Work
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.tools} className="text-link text-sm">
                  Tools
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.notes} className="text-link text-sm">
                  Notes
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.promptStudio} className="text-link text-sm">
                  LLM Prompt Studio
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.thermalTracePage} className="text-link text-sm">
                  ThermalTrace
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="eyebrow">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href={SITE_LINKS.homelab} className="text-link text-sm">
                  Homelab
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.status} className="text-link text-sm">
                  Status
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.now} className="text-link text-sm">
                  Now
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.colophon} className="text-link text-sm">
                  Colophon
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.press} className="text-link text-sm">
                  Press kit
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.contact} className="text-link text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href={SITE_LINKS.privacy} className="text-link text-sm">
                  Privacy
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
            <p className="font-mono text-xs text-[var(--muted)] md:order-none">
              Astro · Cloudflare Workers
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_LINKS.github}
                className="text-link text-[var(--muted)]"
                aria-label="GitHub"
                target="_blank"
                rel="me noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/robertsmcdowell/"
                className="text-link text-[var(--muted)]"
                aria-label="LinkedIn"
                target="_blank"
                rel="me noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
