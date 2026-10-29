/**
 * Current releases of the projects written up on this site. Written by
 * scripts/sync-versions.mjs (`pnpm versions:sync`) from each project's latest tag; edit by
 * hand only if a repo isn't available. Text that says what a release added stays in the
 * write-ups, and the Now page is a dated snapshot with its own numbers.
 */
export const RELEASES = {
  castcut: '3.2.0',
  shelf: '2.22.0',
  printBridge: '0.3.0',
  promptStudioCore: '3.0.1',
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
