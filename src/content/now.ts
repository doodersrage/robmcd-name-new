export type NowItem = {
  label: string
  detail: string
  href?: string
}

/** Lightweight “what I’m building this month” — edit in place. */
export const NOW = {
  updated: '2026-09-13',
  headline: 'Castcut rename, ThermalTrace companions, shop window still open.',
  items: [
    {
      label: 'Castcut',
      detail:
        'Formerly Prompt Studio / llm-prompt-studio. Film loop docs on this domain; upstream at github.com/doodersrage/castcut.',
      href: '/castcut',
    },
    {
      label: 'ThermalTrace',
      detail:
        'Product at thermaltrace.dev — ingest, alerts, Desktop/Android/Bay Buddy, Matter bridge, claim puck. Protocol kit mirrored here.',
      href: '/work/thermaltrace',
    },
    {
      label: 'robmcd.name',
      detail: 'Astro on Cloudflare Workers: hire, notes, tools, status, and product write-ups.',
      href: '/',
    },
  ] satisfies NowItem[],
  notDoing: [
    'Generic SaaS marketing pages',
    'A CMS until note volume actually hurts',
    'Nav clutter for pages that belong in the footer',
  ],
}
