import type { APIRoute } from 'astro'
import { sendOperatorMail, verifyTurnstile } from '@/lib/mail'

export const prerender = false

type Body = {
  name?: string
  email?: string
  stack?: string
  pain?: string
  urgency?: string
  environment?: string
  turnstileToken?: string
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
  const stack = body.stack?.trim() ?? ''
  const pain = body.pain?.trim() ?? ''
  const urgency = body.urgency?.trim() ?? ''
  const environment = body.environment?.trim() ?? ''
  const turnstileToken = body.turnstileToken?.trim() ?? ''

  if (!name || !email || !stack || !pain) {
    return new Response(JSON.stringify({ error: 'Name, email, stack, and pain are required.' }), {
      status: 400,
    })
  }

  const ok = await verifyTurnstile(turnstileToken, clientAddress)
  if (!ok) {
    return new Response(JSON.stringify({ error: 'Turnstile verification failed.' }), { status: 403 })
  }

  const mailed = await sendOperatorMail({
    subject: `Legacy triage: ${name}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Urgency: ${urgency || '(not set)'}`,
      `Environment: ${environment || '(not set)'}`,
      '',
      'Stack:',
      stack,
      '',
      'Pain / failure mode:',
      pain,
    ].join('\n'),
  })

  if (!mailed.ok) {
    return new Response(JSON.stringify({ error: mailed.error }), { status: 500 })
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 })
}
