# Trigger And Content Contract

Use this reference to decide whether the request truly belongs to a tooltip.

## Tooltip fit

A tooltip is a lightweight contextual hint that:

- explains a control, badge, icon, or short status
- stays supplementary rather than required
- reveals near the trigger instead of replacing layout content
- can usually be expressed in one or two short lines

Good examples:

- clarifying what an icon-only button does
- expanding an abbreviated column label
- explaining a non-obvious badge or status
- giving a short caveat for a disabled control

## Not a tooltip

Do not force tooltip treatment when the content is:

- required to complete the task
- interactive or link-heavy
- long enough to need structured sections
- acting like a menu or a mini form
- critical warning or destructive confirmation copy

Those belong to popovers, dropdowns, inline text, or modal patterns instead.

## Trigger guidance

Choose the trigger style that already exists in the product:

- icon button for contextual help on dense controls
- label hover or focus for short clarifications
- badge or status chip for terse status explanation

Avoid creating standalone "?" clutter if the surrounding UI already has better affordances.
