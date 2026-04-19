# Modal Contract

Define the overlay contract before building UI:

- trigger and origin context
- goal: confirm, review, edit, create, or interrupt
- blocking level: must finish now, can dismiss, or can defer
- action set: confirm, cancel, close, retry, destructive action, or none
- content density: short confirm, medium form, or multi-step flow
- close rules: escape, backdrop, explicit close, or commit only
- focus behavior: initial focus, trapped focus, and return focus target
- responsive fallback: centered dialog, side sheet, bottom sheet, or full-screen takeover

Do not choose the animation or shell first and retrofit the interaction contract afterward.
