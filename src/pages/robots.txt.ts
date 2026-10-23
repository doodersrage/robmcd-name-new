import type { APIRoute } from 'astro'
import { SITE_URL } from '@/lib/site'

export const prerender = true

/**
 * Crawlers that collect content for AI training. Search engines and AI search /
 * answer fetchers (Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, ...) are
 * not listed and stay allowed. Cloudflare's managed robots.txt is off for this
 * zone, so this file is the only source of these rules.
 */
const AI_TRAINING_CRAWLERS = [
  'Amazonbot',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'Diffbot',
  'Google-Extended',
  'GoogleOther',
  'Google-CloudVertexBot',
  'GPTBot',
  'omgili',
  'cohere-ai',
  'MistralAI-Training',
  'meta-externalagent',
  'AwarioSmartBot',
  'AwarioRssBot',
  'QualifiedBot',
  'Cotoyogi',
  'ICC-Crawler',
  'atlassian-bot',
  'FishBot',
  'BorderxBot',
  'NavuBot',
  'SemrushBot-SWA',
  'WARDBot',
  'magpie-crawler',
  'KimiBot',
  'CitibotSiteCrawler',
]

export const GET: APIRoute = () => {
  const body = `# Content signals (https://contentsignals.org/):
# search=yes  indexing and search results are welcome
# ai-train=no do not use this content to train or fine-tune AI models
# use=reference  AI answers may cite and link to pages

User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /

# AI training crawlers
${AI_TRAINING_CRAWLERS.map((ua) => `User-agent: ${ua}`).join('\n')}
Disallow: /

# Summary for AI / answer engines: ${SITE_URL}/llms.txt

Sitemap: ${SITE_URL}/sitemap.xml
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
