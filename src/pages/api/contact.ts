import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

export const prerender = false

type Body = {
  name?: string
  email?: string
  message?: string
  turnstileToken?: string
}

async function verifyTurnstile(token: string, remoteip?: string | null): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET_KEY
  if (!secret || !token) return false

  const body = new URLSearchParams({ secret, response: token })
  if (remoteip) body.set('remoteip', remoteip)

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!response.ok) return false
  const data = (await response.json()) as { success?: boolean }
  return data.success === true
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''
  const turnstileToken = body.turnstileToken?.trim() ?? ''

  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'Name and email are required.' }), { status: 400 })
  }

  const ok = await verifyTurnstile(turnstileToken, clientAddress)
  if (!ok) {
    return new Response(JSON.stringify({ error: 'Turnstile verification failed.' }), { status: 403 })
  }

  const host = import.meta.env.EMAIL_HOST || process.env.EMAIL_HOST
  const port = Number(import.meta.env.EMAIL_PORT || process.env.EMAIL_PORT || 587)
  const user = import.meta.env.EMAIL_USER || process.env.EMAIL_USER
  const pass = import.meta.env.EMAIL_PASS || process.env.EMAIL_PASS
  const from = import.meta.env.SMTP_MAIL_FROM || process.env.SMTP_MAIL_FROM || user
  const to = import.meta.env.CONTACT_TO || process.env.CONTACT_TO || from

  if (!host || !user || !pass || !from || !to) {
    return new Response(JSON.stringify({ error: 'Mail is not configured.' }), { status: 500 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, '', message || '(no message)'].join('\n'),
    })
  } catch (err) {
    console.error('contact mail error', err)
    return new Response(JSON.stringify({ error: 'Failed to send message.' }), { status: 500 })
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 })
}
