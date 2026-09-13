import type { APIRoute } from 'astro'
import { SITE_URL } from '@/lib/site'

export const prerender = true

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

# Prefer llms.txt for AI / answer-engine summaries:
# ${SITE_URL}/llms.txt
#
# Cloudflare managed robots / Content Signals (AI training & scraping)
# are configured in the Cloudflare dashboard for this zone — this file
# does not override those managed rules.

Sitemap: ${SITE_URL}/sitemap.xml
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
