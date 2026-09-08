import type { APIRoute } from 'astro'

export const prerender = false

type DnsAnswer = {
  name?: string
  type?: number
  TTL?: number
  data?: string
}

type DnsResponse = {
  Status?: number
  Answer?: DnsAnswer[]
  Authority?: DnsAnswer[]
}

const TYPE_NAME: Record<number, string> = {
  1: 'A',
  2: 'NS',
  5: 'CNAME',
  6: 'SOA',
  15: 'MX',
  16: 'TXT',
  28: 'AAAA',
  33: 'SRV',
}

function normalizeHost(input: string): string | null {
  const raw = input.trim().toLowerCase()
  if (!raw) return null
  try {
    if (raw.includes('://')) {
      const u = new URL(raw)
      return u.hostname || null
    }
  } catch {
    return null
  }
  const host = raw.replace(/\/.*$/, '').replace(/:\d+$/, '')
  if (!/^[a-z0-9._-]+$/.test(host) || host.length > 253) return null
  return host
}

async function dnsQuery(name: string, type: string): Promise<DnsResponse> {
  const url = new URL('https://cloudflare-dns.com/dns-query')
  url.searchParams.set('name', name)
  url.searchParams.set('type', type)
  const res = await fetch(url, {
    headers: { Accept: 'application/dns-json' },
  })
  if (!res.ok) throw new Error(`DNS query failed (${res.status})`)
  return (await res.json()) as DnsResponse
}

async function httpsProbe(host: string) {
  const started = Date.now()
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 8000)
    const res = await fetch(`https://${host}/`, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'robmcd.name-dns-check/1.0' },
    })
    clearTimeout(timer)
    return {
      ok: true,
      status: res.status,
      finalUrl: res.url,
      ms: Date.now() - started,
    }
  } catch (err) {
    return {
      ok: false,
      status: null as number | null,
      finalUrl: null as string | null,
      ms: Date.now() - started,
      error: err instanceof Error ? err.message : 'unreachable',
    }
  }
}

export const GET: APIRoute = async ({ url }) => {
  const host = normalizeHost(url.searchParams.get('host') ?? '')
  if (!host) {
    return new Response(JSON.stringify({ error: 'Provide a valid ?host=' }), { status: 400 })
  }

  try {
    const [a, aaaa, mx, txt, https] = await Promise.all([
      dnsQuery(host, 'A'),
      dnsQuery(host, 'AAAA'),
      dnsQuery(host, 'MX'),
      dnsQuery(host, 'TXT'),
      httpsProbe(host),
    ])

    const mapAnswers = (pack: DnsResponse) =>
      (pack.Answer ?? []).map((row) => ({
        type: TYPE_NAME[row.type ?? 0] ?? String(row.type ?? '?'),
        ttl: row.TTL ?? null,
        data: row.data ?? '',
      }))

    return new Response(
      JSON.stringify({
        host,
        checkedAt: new Date().toISOString(),
        dns: {
          a: mapAnswers(a),
          aaaa: mapAnswers(aaaa),
          mx: mapAnswers(mx),
          txt: mapAnswers(txt),
        },
        https,
      }),
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      },
    )
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Lookup failed' }),
      { status: 502 },
    )
  }
}
