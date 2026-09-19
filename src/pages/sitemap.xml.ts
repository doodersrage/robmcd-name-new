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
  '/press',
  '/castcut',
  '/work/thermaltrace/protocol',
  '/work/concrete-cms',
  '/work/wordpress',
]

export const GET: APIRoute = () => {
  const urls = [
    ...staticPaths,
    ...WORK_CASE_STUDIES.map((s) => `/work/${s.slug}`),
    ...NOTES.map((n) => `/notes/${n.slug}`),
    ...DOC_PAGES.filter((p) => p.slug.length > 0).map((p) => slugToPath(p.slug)),
  ]
  const now = new Date().toISOString()
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${absolutePageUrl(path)}</loc>
    <lastmod>${now}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
