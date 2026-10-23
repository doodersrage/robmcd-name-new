# robmcd.name auth.md

How software agents authenticate with robmcd.name: they don't need to. This file exists so agents can confirm that without guessing.

## Audience

Software agents, crawlers, and scripts that call the public APIs on robmcd.name. People should use the site itself.

## Registration

None. robmcd.name has no accounts, API keys, OAuth server, or agent registration endpoint. There is nothing to sign up for, and no credentials are issued.

- No `/.well-known/oauth-protected-resource` or `/.well-known/oauth-authorization-server` metadata is published, because no resource on this site is protected.
- Do not look for or call a registration endpoint such as `POST /agent/auth`. It does not exist.

## Supported methods

Anonymous access only. Send plain HTTPS requests with no `Authorization` header.

| API | Method | Credentials |
| --- | --- | --- |
| DNS / HTTPS check: `https://robmcd.name/api/dns-check/?host=example.com` | `GET` | None |
| Status board: `https://robmcd.name/api/status/` | `GET` | None |
| Health: `https://robmcd.name/api/health/` | `GET` | None |

The contact and triage forms (`/api/contact/`, `/api/triage/`) require a Cloudflare Turnstile token from a person completing the form in a browser. Agents should not submit them.

## Using credentials

There are none to send. Requests that include an `Authorization` header are treated the same as requests without one.

Please identify your agent in the `User-Agent` header and keep request rates low. These APIs run on a personal Cloudflare Workers account.

## Discovery

- API catalog (RFC 9727): https://robmcd.name/.well-known/api-catalog
- OpenAPI spec: https://robmcd.name/api/openapi.json
- Developer docs: https://robmcd.name/developers/
- Site summary for agents: https://robmcd.name/llms.txt

## Contact

Questions or a need for higher limits: https://robmcd.name/contact/
