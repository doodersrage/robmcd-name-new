#!/usr/bin/env node
/**
 * Read each project's latest release from its repo next to this one and rewrite
 * src/lib/versions.ts. Run with `pnpm versions:sync`, review the diff, then update
 * any write-up text that describes what the new release added.
 *
 * Repos are looked up in the parent folder of this repo; set PROJECTS_DIR to override.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const projects = process.env.PROJECTS_DIR ?? join(root, '..')
const outFile = join(root, 'src/lib/versions.ts')

/** Highest semver tag (v1.2.3 or 1.2.3) in a repo, without the leading v. */
function latestTag(repo) {
  const dir = join(projects, repo)
  if (!existsSync(join(dir, '.git'))) return null
  const tags = execFileSync('git', ['-C', dir, 'tag', '--list', '--sort=-v:refname'], { encoding: 'utf8' })
    .split('\n')
    .map((t) => t.trim().replace(/^v/, ''))
    .filter((t) => /^\d+\.\d+\.\d+$/.test(t))
  return tags[0] ?? null
}

function packageVersion(repo, path) {
  const file = join(projects, repo, path)
  if (!existsSync(file)) return null
  return JSON.parse(readFileSync(file, 'utf8')).version ?? null
}

const current = readFileSync(outFile, 'utf8')
function currentValue(key) {
  return current.match(new RegExp(`${key}: '([^']+)'`))?.[1] ?? null
}

const sources = {
  castcut: () => latestTag('comfyui-prompt-studio'),
  shelf: () => latestTag('shelf'),
  printBridge: () => latestTag('printbridge'),
  promptStudioCore: () => packageVersion('comfyui-prompt-studio', 'packages/prompt-studio-core/package.json'),
}

const releases = {}
for (const [key, read] of Object.entries(sources)) {
  const found = read()
  releases[key] = found ?? currentValue(key)
  const note = found ? '' : ' (repo not found; kept the current value)'
  console.log(`${key.padEnd(17)} ${releases[key]}${note}`)
}

writeFileSync(
  outFile,
  `/**
 * Current releases of the projects written up on this site. Written by
 * scripts/sync-versions.mjs (\`pnpm versions:sync\`) from each project's latest tag; edit by
 * hand only if a repo isn't available. Text that says what a release added stays in the
 * write-ups, and the Now page is a dated snapshot with its own numbers.
 */
export const RELEASES = {
${Object.entries(releases)
  .map(([k, v]) => `  ${k}: '${v}',`)
  .join('\n')}
} as const

/** Major.minor, the form the site shows ("Castcut 3.2"). */
function short(version: string): string {
  return version.split('.').slice(0, 2).join('.')
}

/** Major only, for packages named by major version ("prompt-studio-core 3"). */
function major(version: string): string {
  return version.split('.')[0]!
}

export const VERSIONS = {
  castcut: short(RELEASES.castcut),
  shelf: short(RELEASES.shelf),
  printBridge: short(RELEASES.printBridge),
  promptStudioCore: major(RELEASES.promptStudioCore),
} as const
`,
)
console.log(`Wrote ${outFile}`)
