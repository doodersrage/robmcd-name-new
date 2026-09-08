import type { APIRoute } from 'astro'
import { LAB_ENDPOINTS } from '@/content/lab/endpoints'

export const prerender = false

type Probe = {
  id: string
  name: string
  href: string
  blurb: string
  ok: boolean
  status: number | null
  ms: number | null
  error?: string
}

async function probe(url: string): Promise<{ ok: boolean; status: number | null; ms: number | null; error?: string }> {
  const started = Date.now()
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 6000)
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'robmcd.name-status/1.0' },
    })
    clearTimeout(timer)
    return { ok: res.ok || (res.status >= 300 && res.status < 500), status: res.status, ms: Date.now() - started }
  } catch (err) {
    return {
      ok: false,
      status: null,
      ms: Date.now() - started,
      error: err instanceof Error ? err.message : 'unreachable',
    }
  }
}

export const GET: APIRoute = async () => {
  const results: Probe[] = await Promise.all(
    LAB_ENDPOINTS.map(async (ep) => {
      const result = await probe(ep.href)
      return {
        id: ep.id,
        name: ep.name,
        href: ep.href,
        blurb: ep.blurb,
        ...result,
      }
    }),
  )

  return new Response(
    JSON.stringify({
      checkedAt: new Date().toISOString(),
      results,
    }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=60',
      },
    },
  )
}
