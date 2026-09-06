# robmcd-name-new

Astro portfolio for [robmcd.name](https://robmcd.name) — workshop visual language, static MDX pages, LLM Prompt Studio docs, work case studies, and a Cloudflare Worker contact form (Turnstile + SMTP).

## Stack

- Astro 7 + React islands + MDX + Tailwind 4
- Cloudflare adapter (`@astrojs/cloudflare` + Wrangler)
- No Payload / D1 / R2

## Develop

```bash
pnpm install
cp .env.example .env
pnpm dev
```

## Build & deploy

```bash
pnpm build
pnpm preview   # wrangler pages/workers preview via Astro
pnpm deploy    # wrangler deploy
```

### Secrets (production)

```bash
wrangler secret put TURNSTILE_SECRET_KEY
wrangler secret put EMAIL_HOST
wrangler secret put EMAIL_PORT
wrangler secret put EMAIL_USER
wrangler secret put EMAIL_PASS
wrangler secret put SMTP_MAIL_FROM
wrangler secret put CONTACT_TO
```

Set `PUBLIC_TURNSTILE_SITE_KEY` in the Cloudflare project environment / `.env` for builds.

## DNS cutover

1. Deploy this Worker/Pages project.
2. Point `robmcd.name` at the new deployment.
3. Keep the old `robmcd-name-web` Worker archived until traffic is verified.
4. `/blog` and `/comfyui-prompt-studio/*` redirect to `/` and `/llm-prompt-studio/*`.

## Content

| Area | Location |
|------|----------|
| Marketing MDX | `src/content/pages/` |
| Work case studies | `src/content/work/` |
| Prompt Studio docs | `src/content/comfyui-prompt-studio/` |
| Site links / nav | `src/lib/site.ts` |
| Design tokens | `src/styles/globals.scss` |
