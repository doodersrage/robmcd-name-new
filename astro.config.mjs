// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://robmcd.name',
  trailingSlash: 'always',
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
    '/llm-prompt-studio': '/castcut',
    '/comfyui-prompt-studio': '/castcut',
    '/work/llm-prompt-studio': '/work/castcut',
    '/work/garage-temp': '/work/thermaltrace',
    '/projects': '/homelab',
    '/services': '/homelab',
    '/about/services': '/homelab',
  },
})
