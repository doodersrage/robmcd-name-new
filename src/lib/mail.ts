import nodemailer from 'nodemailer'

export async function verifyTurnstile(token: string, remoteip?: string | null): Promise<boolean> {
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

export async function sendOperatorMail(opts: {
  subject: string
  text: string
  replyTo: string
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const host = import.meta.env.EMAIL_HOST || process.env.EMAIL_HOST
  const port = Number(import.meta.env.EMAIL_PORT || process.env.EMAIL_PORT || 587)
  const user = import.meta.env.EMAIL_USER || process.env.EMAIL_USER
  const pass = import.meta.env.EMAIL_PASS || process.env.EMAIL_PASS
  const from = import.meta.env.SMTP_MAIL_FROM || process.env.SMTP_MAIL_FROM || user
  const to = import.meta.env.CONTACT_TO || process.env.CONTACT_TO || from

  if (!host || !user || !pass || !from || !to) {
    return { ok: false, error: 'Mail is not configured.' }
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
      replyTo: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
    })
    return { ok: true }
  } catch (err) {
    console.error('mail error', err)
    return { ok: false, error: 'Failed to send message.' }
  }
}
