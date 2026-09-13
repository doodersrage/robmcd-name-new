# robmcd-name-new

Astro portfolio for [robmcd.name](https://robmcd.name) — workshop visual language, static MDX pages, Castcut docs, work case studies, and a Cloudflare Worker contact form (Turnstile + SMTP).

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

Prefer Wrangler secrets for anything that can send mail or verify Turnstile. Do not commit `.env`.

```bash
wrangler secret put TURNSTILE_SECRET_KEY
wrangler secret put EMAIL_HOST
wrangler secret put EMAIL_PORT
wrangler secret put EMAIL_USER
wrangler secret put EMAIL_PASS
wrangler secret put SMTP_MAIL_FROM
wrangler secret put CONTACT_TO
```

Set `PUBLIC_TURNSTILE_SITE_KEY` in the Cloudflare project environment / `.env` for builds (public site key only).

If secrets were ever pasted into chat, shared machines, or an unencrypted backup, rotate Turnstile and SMTP credentials before treating production as clean.

Optional: `PUBLIC_CF_WEB_ANALYTICS_TOKEN` enables the Cloudflare Web Analytics beacon. Leave unset to keep that beacon off (Google Analytics and Ahrefs are separate).

## DNS cutover

Cutover is done for production traffic on `robmcd.name`. Keep this checklist if you redeploy or move accounts:

1. Deploy this Worker/Pages project.
2. Point `robmcd.name` at the new deployment.
3. Keep the old `robmcd-name-web` Worker archived until traffic is verified.
4. Confirm redirects: `/blog` → `/`; `/llm-prompt-studio/*` and `/comfyui-prompt-studio/*` → `/castcut/*`.
## Content

| Area | Location |
|------|----------|
| Marketing MDX | `src/content/pages/` |
| Work case studies | `src/content/work/` |
| Castcut docs | `src/content/comfyui-prompt-studio/` |
| Site links / nav | `src/lib/site.ts` |
| Design tokens | `src/styles/globals.scss` |
