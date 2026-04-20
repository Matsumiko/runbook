# Locale Input And Mobile Fallback

Dates fail fast when format assumptions are unclear.

## Locale and formatting

- Keep display format and typed parsing rules aligned.
- Do not assume US-style month/day ordering unless the product context already establishes it.
- If the input accepts manual typing, make invalid format handling explicit.

## Mobile fallback

- Desktop popover calendars often need a sheet, drawer, or full-width treatment on smaller screens.
- Ensure touch targets stay generous enough for day cells and navigation controls.
- Avoid hover-dependent range previews on touch-only devices unless an alternate cue exists.

## Edge behavior

- Explain blocked dates, unavailable ranges, or timezone-sensitive boundaries clearly.
- If the product uses reporting or booking semantics, keep the date labels honest about those boundaries.
