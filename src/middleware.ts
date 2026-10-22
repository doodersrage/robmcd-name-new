import { defineMiddleware } from 'astro:middleware'

/** Redirect target with a trailing slash, so legacy URLs land in one hop. */
function withSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`
}

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname

  if (path === '/blog' || path.startsWith('/blog/')) {
    return context.redirect('/', 301)
  }

  if (path === '/llm-prompt-studio' || path.startsWith('/llm-prompt-studio/')) {
    const rest = path.slice('/llm-prompt-studio'.length)
    return context.redirect(withSlash(`/castcut${rest}`), 301)
  }

  if (path === '/comfyui-prompt-studio' || path.startsWith('/comfyui-prompt-studio/')) {
    const rest = path.slice('/comfyui-prompt-studio'.length)
    return context.redirect(withSlash(`/castcut${rest}`), 301)
  }

  if (path === '/castcut/play/roleplay' || path.startsWith('/castcut/play/roleplay/')) {
    return context.redirect('/castcut/play/story/', 301)
  }

  return next()
})
