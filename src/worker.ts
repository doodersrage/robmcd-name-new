import { handle } from '@astrojs/cloudflare/handler'

import { legacyRedirectTarget } from './lib/legacy-redirects'

/**
 * Worker entry: Astro's handler plus "Markdown for Agents". A GET/HEAD for a page
 * with `Accept: text/markdown` gets the build-time index.md for that page (see
 * src/integrations/markdown-pages.ts). Every other request goes to Astro as before.
 */

type Env = { ASSETS: { fetch: (input: Request | URL | string) => Promise<Response> } }

function wantsMarkdown(request: Request): boolean {
  if (request.method !== 'GET' && request.method !== 'HEAD') return false
  return /(^|,)\s*text\/markdown\s*(;|,|$)/i.test(request.headers.get('Accept') ?? '')
}

function addVaryAccept(response: Response): Response {
  const type = response.headers.get('Content-Type') ?? ''
  if (!type.startsWith('text/html')) return response
  const res = new Response(response.body, response)
  res.headers.append('Vary', 'Accept')
  return res
}

/**
 * Pages live at the trailing-slash URL. With the worker running first, the assets
 * layer no longer redirects `/about` or `/about/index.html`, so do it here (301).
 */
function canonicalRedirect(request: Request): Response | null {
  if (request.method !== 'GET' && request.method !== 'HEAD') return null
  const url = new URL(request.url)
  const path = url.pathname
  if (path.startsWith('/api/') || path.startsWith('/.well-known/')) return null
  let target: string | null = null
  if (path.endsWith('/index.html')) target = path.slice(0, -'index.html'.length)
  else if (!path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) target = `${path}/`
  if (!target) return null
  url.pathname = target
  return Response.redirect(url.toString(), 301)
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method === 'GET' || request.method === 'HEAD') {
      const url = new URL(request.url)
      const target = legacyRedirectTarget(url.pathname)
      if (target) return Response.redirect(new URL(target, url).toString(), 301)
    }

    const redirect = canonicalRedirect(request)
    if (redirect) return redirect

    if (wantsMarkdown(request)) {
      const url = new URL(request.url)
      if (url.pathname.endsWith('/')) {
        const md = await env.ASSETS.fetch(new URL(`${url.pathname}index.md`, url))
        if (md.ok) {
          return new Response(request.method === 'HEAD' ? null : md.body, {
            status: 200,
            headers: {
              'Content-Type': 'text/markdown; charset=utf-8',
              'Cache-Control': 'public, max-age=0, must-revalidate',
              Vary: 'Accept',
              Link: `<${url.pathname}>; rel="canonical"`,
            },
          })
        }
      }
    }
    return addVaryAccept(await handle(request, env as never, ctx))
  },
}
