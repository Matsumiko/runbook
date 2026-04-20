# Anchoring Focus And Dismissal

Popover behavior succeeds or fails on lifecycle details.

## Anchoring

- Keep the relationship between trigger and panel obvious.
- Avoid detached floating cards that could belong to anything on the page.
- Ensure the panel can reposition or shift when container or viewport boundaries are tight.

## Focus

- Simple informational popovers may not need trapped focus, but actionable ones still need a sane tab order.
- Do not steal focus unnecessarily on open.
- Return focus to the trigger on close unless the chosen action intentionally moves the user elsewhere.

## Dismissal

- Outside click and escape usually dismiss.
- Explicit actions may dismiss immediately or after confirmation, depending on the job.
- If the popover hosts short forms, make cancel and apply behavior explicit rather than implicit.
