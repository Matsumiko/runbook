# Date Picker Contract

Use this reference to define the date-selection job before building UI.

## Common date picker modes

- Single date selection
- Start and end range selection
- Quick report range with presets
- Month, week, or period selection

## Contract questions

Clarify:

- what granularity matters: day, week, month, or range
- whether typed input is allowed
- whether presets are expected
- min and max bounds
- disabled dates or blackout periods
- whether timezone or reporting-boundary semantics matter

## Pattern boundary

- Use generic form patterns when date entry is incidental and already handled by an existing component.
- Use popover only as the container pattern; if date selection behavior itself is the main challenge, this skill owns it.
