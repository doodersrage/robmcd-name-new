import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname

  if (path === '/blog' || path.startsWith('/blog/')) {
    return context.redirect('/', 301)
  }

  if (path === '/comfyui-prompt-studio' || path.startsWith('/comfyui-prompt-studio/')) {
    const rest = path.slice('/comfyui-prompt-studio'.length)
    return context.redirect(`/llm-prompt-studio${rest}`, 301)
  }

  return next()
})
