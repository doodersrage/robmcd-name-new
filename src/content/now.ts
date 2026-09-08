export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-09-07',
  headline: 'Shop window, sensors, and forms that actually mail.',
  items: [
    {
      label: 'robmcd.name',
      detail:
        'Astro 7 on Cloudflare Workers: Homelab rename, SSR header, notes, tools, hire page, and status board.',
      href: '/',
    },
    {
      label: 'ThermalTrace',
      detail: 'Product at thermaltrace.dev — ingest, alerts, companion apps. Protocol kit mirrored here.',
      href: '/work/thermaltrace',
    },
    {
      label: 'LLM Prompt Studio',
      detail: 'Docs hosted on this domain; upstream stays on GitHub / GHCR.',
      href: '/llm-prompt-studio',
    },
  ] satisfies NowItem[],
  notDoing: [
    'Generic SaaS marketing pages',
    'A CMS until note volume actually hurts',
    'Nav clutter for pages that belong in the footer',
  ],
}
