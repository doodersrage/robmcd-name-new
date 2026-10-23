import type { APIRoute } from 'astro'
import { DOC_PAGES, slugToPath } from '@/content/comfyui-prompt-studio/pages'
import { WORK_CASE_STUDIES } from '@/content/work/case-studies'
import { NOTES } from '@/content/notes'
import { absolutePageUrl } from '@/lib/site'

export const prerender = true

const staticPaths = [
  '/',
  '/about',
  '/homelab',
  '/privacy',
  '/contact',
  '/hire',
  '/work',
  '/notes',
  '/now',
  '/status',
  '/tools',
  '/tools/redactor',
  '/tools/dns',
  '/tools/triage',
  '/colophon',
  '/developers',
  '/press',
  '/castcut',
  '/work/probeharbor/protocol',
  '/work/probeharbor/forecast',
  '/work/probeharbor/integrations',
  '/work/concrete-cms',
  '/work/wordpress',
]

export const GET: APIRoute = () => {
  // lastmod only where we know a real date (notes). A build-time date on every
  // URL changes each deploy, so search engines learn to ignore it.
  const urls: { path: string; lastmod?: string }[] = [
    ...staticPaths.map((path) => ({ path })),
    ...WORK_CASE_STUDIES.map((s) => ({ path: `/work/${s.slug}` })),
    ...NOTES.map((n) => ({ path: `/notes/${n.slug}`, lastmod: n.date })),
    ...DOC_PAGES.filter((p) => p.slug.length > 0).map((p) => ({ path: slugToPath(p.slug) })),
  ]
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) => `  <url>
    <loc>${absolutePageUrl(path)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`,
  )
  .join('\n')}
</urlset>
`
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
