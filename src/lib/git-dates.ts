declare const __GIT_FILE_DATES__: Record<string, { datePublished: string; dateModified: string }>

export type GitDates = { datePublished?: string; dateModified?: string }

/**
 * First and last commit dates (YYYY-MM-DD) for a repo-relative source file,
 * collected at build time in astro.config.mjs. Returns {} when git history
 * wasn't available, so pages never get made-up dates.
 */
export function gitDates(file: string): GitDates {
  return __GIT_FILE_DATES__[file] ?? {}
}
