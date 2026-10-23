import type { APIRoute } from 'astro'

export const prerender = false

/** Liveness check for this site's public APIs (the `status` link in /.well-known/api-catalog). */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      status: 'pass',
      description: 'robmcd.name public APIs',
      checkedAt: new Date().toISOString(),
    }),
    {
      headers: {
        'Content-Type': 'application/health+json',
        'Cache-Control': 'no-store',
      },
    },
  )
