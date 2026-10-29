import { retiredDocTarget } from '../content/comfyui-prompt-studio/retired'

/** Path with a trailing slash, the form the site serves. */
function withSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`
}

/**
 * Old URLs and where they live now. Runs in the worker before Astro, because Astro's
 * middleware never sees a URL with no page behind it (it gets the static 404 instead).
 * Returns a path or an absolute URL, or null when the URL is current.
 */
export function legacyRedirectTarget(path: string): string | null {
  if (path === '/blog' || path.startsWith('/blog/')) return '/'

  for (const legacy of ['/llm-prompt-studio', '/comfyui-prompt-studio']) {
    if (path === legacy || path.startsWith(`${legacy}/`)) {
      const rest = path.slice(legacy.length)
      return retiredDocTarget(rest) ?? withSlash(`/castcut${rest}`)
    }
  }

  if (path === '/castcut/play/roleplay' || path.startsWith('/castcut/play/roleplay/')) {
    return '/castcut/play/story/'
  }

  if (path.startsWith('/castcut/')) return retiredDocTarget(path.slice('/castcut'.length))

  return null
}
