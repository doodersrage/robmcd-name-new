import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname

  if (path === '/blog' || path.startsWith('/blog/')) {
    return context.redirect('/', 301)
  }

  if (path === '/llm-prompt-studio' || path.startsWith('/llm-prompt-studio/')) {
    const rest = path.slice('/llm-prompt-studio'.length)
    return context.redirect(`/castcut${rest}`, 301)
  }

  if (path === '/comfyui-prompt-studio' || path.startsWith('/comfyui-prompt-studio/')) {
    const rest = path.slice('/comfyui-prompt-studio'.length)
    return context.redirect(`/castcut${rest}`, 301)
  }

  if (path === '/castcut/play/roleplay' || path.startsWith('/castcut/play/roleplay/')) {
    return context.redirect('/castcut/play/story', 301)
  }

  return next()
})
