/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

interface Env {
  TURNSTILE_SECRET_KEY?: string
  EMAIL_HOST?: string
  EMAIL_PORT?: string
  EMAIL_USER?: string
  EMAIL_PASS?: string
  SMTP_MAIL_FROM?: string
  CONTACT_TO?: string
  ASSETS: Fetcher
}

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string
  readonly TURNSTILE_SECRET_KEY?: string
  readonly EMAIL_HOST?: string
  readonly EMAIL_PORT?: string
  readonly EMAIL_USER?: string
  readonly EMAIL_PASS?: string
  readonly SMTP_MAIL_FROM?: string
  readonly CONTACT_TO?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
