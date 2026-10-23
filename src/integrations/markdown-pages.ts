import type { AstroIntegration } from 'astro'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { NodeHtmlMarkdown } from 'node-html-markdown'
import { parse } from 'node-html-parser'

/**
 * "Markdown for Agents": after the build, write an index.md next to every
 * prerendered index.html, made from the page's <main> content. src/worker.ts
 * serves it to requests that send `Accept: text/markdown`.
 */

const DROP = 'script, style, noscript, template, svg, form, button, iframe, [aria-hidden="true"]'

async function* htmlFiles(dir: string): AsyncGenerator<string> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== '_astro') yield* htmlFiles(path)
    } else if (entry.name === 'index.html') {
      yield path
    }
  }
}

function yamlString(value: string): string {
  return JSON.stringify(value)
}

export function pageToMarkdown(html: string, pagePath: string, site: string): string | null {
  const root = parse(html)
  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute('href')
  // Skip copies of pages that live elsewhere (for example legacy redirect stubs).
  if (canonical && new URL(canonical).pathname !== pagePath) return null

  const main = root.querySelector('main')
  if (!main) return null
  main.querySelectorAll(DROP).forEach((el) => el.remove())
  // Absolute links, so the Markdown still works once it's detached from the page URL.
  for (const [selector, attr] of [['a[href]', 'href'], ['img[src]', 'src']] as const) {
    for (const el of main.querySelectorAll(selector)) {
      const value = el.getAttribute(attr)
      if (value && !value.startsWith('#')) el.setAttribute(attr, new URL(value, new URL(pagePath, site)).toString())
    }
  }

  const body = NodeHtmlMarkdown.translate(main.innerHTML, { keepDataImages: false })
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  const title = root.querySelector('title')?.text.trim() ?? ''
  const description = root.querySelector('meta[name="description"]')?.getAttribute('content') ?? ''
  const url = canonical ?? new URL(pagePath, site).toString()

  return [
    '---',
    `title: ${yamlString(title)}`,
    description ? `description: ${yamlString(description)}` : null,
    `url: ${url}`,
    '---',
    '',
    body,
    '',
  ]
    .filter((line) => line !== null)
    .join('\n')
}

export default function markdownPages(): AstroIntegration {
  let site = ''
  return {
    name: 'markdown-pages',
    hooks: {
      'astro:config:done': ({ config }) => {
        site = config.site ?? ''
      },
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir)
        let written = 0
        for await (const file of htmlFiles(outDir)) {
          const rel = relative(outDir, file).split(sep).slice(0, -1).join('/')
          const pagePath = rel ? `/${rel}/` : '/'
          const md = pageToMarkdown(await readFile(file, 'utf8'), pagePath, site)
          if (!md) continue
          await writeFile(file.replace(/index\.html$/, 'index.md'), md)
          written++
        }
        logger.info(`Wrote ${written} Markdown pages`)
      },
    },
  }
}
