# Placement Hover And Focus

Tooltip behavior should feel quiet and predictable.

## Placement

- Prefer top or bottom placement when horizontal room is constrained.
- Prefer side placement when vertical density is high and nearby rows must stay readable.
- Keep the tooltip close enough to the trigger to feel connected without covering the control.
- Avoid placements that obscure labels, values, or adjacent controls.

## Hover timing

- Short entry delay is acceptable when the UI is dense and accidental hovers are common.
- Exit delay should feel forgiving enough to avoid flicker but not sticky.
- Avoid exaggerated animation or float distance that makes the tooltip feel detached.

## Focus behavior

- Keyboard focus should reveal the same information as hover when the hint matters.
- Tooltip reveal should not steal focus from the trigger.
- Escape or blur should dismiss the tooltip when the implementation supports focus-driven visibility.

## Collision behavior

- Prefer flipping or shifting over clipping.
- If space is too constrained for honest content, shorten the content or choose a different pattern.
