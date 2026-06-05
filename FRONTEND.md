# FRONTEND.md

RunBook does not ship an application frontend. This file records frontend guidance for any future docs site, demo UI, or browser-based preview that belongs to this package.

## Product Surface

Current user-facing surfaces are:

- CLI output from `bin/runbook.js`
- Markdown documentation in `README.md`, `docs/`, and root RunBook files
- Agent adapter instruction files in `variants/`

There is no React, Next.js, Vue, Svelte, or static website source in this repository today.

## Visual Direction

Future UI work should feel like a developer operations tool:

- clear, compact, and task-focused
- neutral enough for repeated technical use
- optimized for scanning commands, statuses, check results, and file paths
- free of marketing-style hero sections unless a docs homepage is explicitly requested

Do not introduce decorative one-note gradients, oversized panels, or playful visuals for operational screens.

## Layout Rules

- Prefer dense but readable command and status layouts.
- Keep file paths, command names, and check labels aligned for scanning.
- Use full-width documentation sections or simple constrained content, not nested cards.
- Keep repeated items stable in size so changing statuses do not shift layout.
- On mobile, commands and file paths may wrap, but text must not overlap controls.

## Interaction Rules

- Buttons should use recognizable icons when an icon library is available.
- Use tabs for switching documentation views, toggles for binary options, and menus for route or adapter selection.
- Avoid in-app instructional paragraphs that duplicate visible controls.
- Preserve keyboard access for every interactive control.

## Accessibility

- Maintain visible focus states.
- Use semantic headings in order.
- Keep contrast high for command output, warnings, and failures.
- Do not communicate doctor status by color alone; include text or icons.

## Verification

If a frontend is added later, verify it with:

- desktop and mobile viewport checks
- keyboard navigation
- accessible labels for controls
- no text overflow or overlapping UI
- build and lint commands recorded in `PROJECT.md`
