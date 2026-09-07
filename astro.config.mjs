// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://robmcd.name',
  output: 'server',
  session: false,
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  redirects: {
    '/blog': '/',
    '/comfyui-prompt-studio': '/llm-prompt-studio',
    '/work/garage-temp': '/work/thermaltrace',
    '/projects': '/services',
    '/about/services': '/services',
  },
})
