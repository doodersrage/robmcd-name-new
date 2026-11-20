// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import markdownPages from './src/integrations/markdown-pages.ts'
import { execFileSync } from 'node:child_process'

/**
 * First/last commit date (YYYY-MM-DD) per file under src/, for Article schema.
 * Read here because prerendering runs in the Workers runtime, where git can't.
 * Empty if history can't be fetched, so pages never get made-up dates.
 * @returns {Record<string, { datePublished: string, dateModified: string }>}
 */
function gitFileDates() {
  try {
    const git = (/** @type {string[]} */ ...args) =>
      execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 << 20 })
    // Cloudflare's build clones shallow; fetch the history once so dates exist.
    if (git('rev-parse', '--is-shallow-repository').trim() === 'true') {
      try {
        execFileSync('git', ['fetch', '--unshallow', '--quiet'], { stdio: 'ignore', timeout: 60_000 })
      } catch {}
    }
    if (git('rev-parse', '--is-shallow-repository').trim() !== 'false') return {}
    /** @type {Record<string, { datePublished: string, dateModified: string }>} */
    const dates = {}
    let date = ''
    for (const line of git('log', '--format=@%as', '--name-only', '--', 'src').split('\n')) {
      if (line.startsWith('@')) date = line.slice(1)
      else if (line) {
        const d = dates[line]
        if (d) d.datePublished = date
        else dates[line] = { datePublished: date, dateModified: date }
      }
    }
    return dates
  } catch {
    return {}
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://robmcd.name',
  trailingSlash: 'always',
  output: 'server',
  session: false,
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [react(), mdx(), markdownPages()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      __GIT_FILE_DATES__: JSON.stringify(gitFileDates()),
    },
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  redirects: {
    '/blog': '/',
    '/llm-prompt-studio': '/castcut/',
    '/comfyui-prompt-studio': '/castcut/',
    '/work/llm-prompt-studio': '/work/castcut/',
    '/work/garage-temp': '/work/probeharbor/',
    '/work/thermaltrace': '/work/probeharbor/',
    '/work/thermaltrace/protocol': '/work/probeharbor/protocol/',
    '/work/thermaltrace/forecast': '/work/probeharbor/forecast/',
    '/work/thermaltrace/integrations': '/work/probeharbor/integrations/',
    '/projects': '/homelab/',
    '/services': '/homelab/',
    '/about/services': '/homelab/',
  },
})
