import type { APIRoute } from 'astro'
import { SITE_URL } from '@/lib/site'

export const prerender = true

/**
 * OpenAPI description of the public, unauthenticated APIs. Linked as `service-desc`
 * from /.well-known/api-catalog (public/.well-known/api-catalog). The contact and
 * triage endpoints need a Turnstile token, so they are left out.
 */
const errorResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: { type: 'object', properties: { error: { type: 'string' } }, required: ['error'] },
    },
  },
}

const dnsRecord = {
  type: 'object',
  properties: {
    type: { type: 'string', example: 'A' },
    ttl: { type: ['integer', 'null'] },
    data: { type: 'string' },
  },
}

const spec = {
  openapi: '3.1.0',
  info: {
    title: 'robmcd.name public APIs',
    version: '1.0.0',
    description:
      'Small, free, unauthenticated APIs behind the tools on robmcd.name: a DNS / HTTPS check and the status board. Please keep request rates low.',
    contact: { name: 'Robert McDowell', url: `${SITE_URL}/contact/` },
  },
  externalDocs: { description: 'Developer docs', url: `${SITE_URL}/developers/` },
  servers: [{ url: SITE_URL }],
  paths: {
    '/api/dns-check/': {
      get: {
        operationId: 'dnsCheck',
        summary: 'Look up public DNS records for a host and probe HTTPS',
        description:
          'Queries A, AAAA, MX, and TXT records over Cloudflare DNS-over-HTTPS and makes one HTTPS GET to the host root (8 second timeout).',
        parameters: [
          {
            name: 'host',
            in: 'query',
            required: true,
            description: 'Hostname or URL, for example `example.com` or `https://example.com/path`.',
            schema: { type: 'string', maxLength: 253 },
          },
        ],
        responses: {
          '200': {
            description: 'DNS records and HTTPS probe result',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    host: { type: 'string' },
                    checkedAt: { type: 'string', format: 'date-time' },
                    dns: {
                      type: 'object',
                      properties: {
                        a: { type: 'array', items: dnsRecord },
                        aaaa: { type: 'array', items: dnsRecord },
                        mx: { type: 'array', items: dnsRecord },
                        txt: { type: 'array', items: dnsRecord },
                      },
                    },
                    https: {
                      type: 'object',
                      properties: {
                        ok: { type: 'boolean' },
                        status: { type: ['integer', 'null'] },
                        finalUrl: { type: ['string', 'null'] },
                        ms: { type: 'integer' },
                        error: { type: 'string' },
                      },
                    },
                  },
                },
              },
            },
          },
          '400': errorResponse,
          '502': errorResponse,
        },
      },
    },
    '/api/status/': {
      get: {
        operationId: 'statusBoard',
        summary: 'Reachability of the products and homelab services listed on /status/',
        description: 'Probes each listed URL from the edge (6 second timeout each). Cached for 60 seconds.',
        responses: {
          '200': {
            description: 'Probe results',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    checkedAt: { type: 'string', format: 'date-time' },
                    results: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'string' },
                          name: { type: 'string' },
                          href: { type: 'string', format: 'uri' },
                          blurb: { type: 'string' },
                          group: { type: 'string', enum: ['products', 'homelab'] },
                          ok: { type: 'boolean' },
                          status: { type: ['integer', 'null'] },
                          ms: { type: ['integer', 'null'] },
                          error: { type: 'string' },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/health/': {
      get: {
        operationId: 'health',
        summary: 'Health check for these APIs',
        responses: {
          '200': {
            description: 'Healthy',
            content: {
              'application/health+json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', enum: ['pass', 'warn', 'fail'] },
                    description: { type: 'string' },
                    checkedAt: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export const GET: APIRoute = () =>
  new Response(JSON.stringify(spec, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
