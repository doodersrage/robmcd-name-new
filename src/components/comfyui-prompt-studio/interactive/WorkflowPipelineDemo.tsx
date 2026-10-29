'use client'

const STEPS = [
  { label: 'Plan', detail: 'Cast, Day, or a Script’s shots' },
  { label: 'Render', detail: 'Takes queued on ComfyUI' },
  { label: 'Check', detail: 'Pose, face, outfit, and place' },
  { label: 'Keep', detail: '★ the best take' },
  { label: 'Cut', detail: 'Edit, mix, subtitle, export' },
]

export function WorkflowPipelineDemo() {
  return (
    <div className="not-prose my-8 overflow-x-auto pb-2">
      <ol className="flex min-w-max items-start gap-0">
        {STEPS.map((step, i) => (
          <li key={step.label} className="flex items-start">
            <div className="group flex w-36 flex-col items-center px-2 text-center sm:w-40">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-sm font-bold text-slate-800 dark:text-zinc-100  transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:border-slate-400 dark:group-hover:border-zinc-500"
                style={{ animation: `pulse-subtle 2s ease-in-out ${i * 0.4}s infinite` }}
              >
                {i + 1}
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--ink)]">{step.label}</p>
              <p className="mt-1 text-xs leading-snug text-[var(--muted)]">{step.detail}</p>
            </div>
            {i < STEPS.length - 1 ? (
              <div
                className="mt-5 h-0.5 w-8 shrink-0 bg-gradient-to-r from-slate-300 to-slate-200 dark:from-zinc-600 dark:to-zinc-800 sm:w-12"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>
      <style jsx>{`
        @keyframes pulse-subtle {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(100, 116, 139, 0.2);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(100, 116, 139, 0);
          }
        }
      `}</style>
    </div>
  )
}
