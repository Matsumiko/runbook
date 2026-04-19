# Variants and States

A frontend component is not complete if it only works in its nicest state.

## Minimum Coverage

Check which of these are relevant:

- default
- hover
- focus
- active or pressed
- disabled
- loading
- selected
- empty
- error
- success
- mobile and desktop layout differences

Not every component needs every state, but the skill should consciously decide instead of skipping them by accident.

## Variant Design

Prefer a small, explicit contract such as:

- variant: `primary | secondary | ghost`
- size: `sm | md | lg`
- tone: `neutral | success | warning | danger`

Do not create sprawling variant APIs unless the component family already works that way.

## Interaction Rules

- Ensure keyboard focus treatment is visible.
- Preserve disabled semantics, not just visuals.
- Keep loading states from shifting layout unnecessarily.
- Avoid hover-only affordances for critical meaning.

## Surface-Specific Notes

### Form controls

- Include invalid and disabled behavior.
- Keep labels, helper text, and error text aligned to the component family.

### Data display

- Check empty, loading, and dense states.
- Ensure hierarchy and spacing stay legible.

### Navigation

- Handle active and hover states carefully.
- Keep responsive collapse behavior consistent with the app shell.
