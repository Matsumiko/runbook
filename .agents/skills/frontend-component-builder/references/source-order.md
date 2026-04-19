# Source Order

Use sources in this order before building a component.

## Priority

1. Existing component files in the repository
2. `FRONTEND-DNA.md`
3. Theme tokens, config files, or design system primitives in the repo
4. Explicit design specs, Figma details, or screenshots provided for the task
5. General design instincts only after the above are exhausted

## Why This Order Matters

The component should feel native to the product, not just valid in isolation.

That means:

- existing components beat generic best practices
- explicit project rules beat personal preference
- design references beat assumptions
- assumptions must stay narrow and be flagged

## Escalation Rule

If the existing component family is inconsistent:

- follow the closest relevant production surface
- avoid broad cleanup unless the user explicitly asks for it
- keep the new component internally consistent and note the inconsistency as residual risk

## Related Skills

- Use `frontend-foundation-builder` first if the stack is not chosen.
- Use `frontend-figma-to-theme` first if the theme still needs to be derived from design context.
