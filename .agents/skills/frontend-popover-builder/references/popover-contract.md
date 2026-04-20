# Popover Contract

Use this reference to decide whether the request belongs to a popover rather than another overlay pattern.

## Popover fit

A popover is appropriate when the surface:

- is anchored to a specific trigger or piece of UI
- contains richer content than a tooltip or simple menu
- remains smaller and lighter than a modal or drawer
- benefits from preserving surrounding page context

Good examples:

- compact filter panels
- inline reaction or label pickers
- entity preview cards
- small contextual forms or parameter editors

## Not a popover

Avoid popovers when:

- the content is just a short hint
- the surface is only a compact list of actions
- the task becomes long, blocking, or multi-step
- the panel needs to dominate the viewport on mobile

Those cases belong to tooltip, dropdown, modal, or page-level patterns instead.
