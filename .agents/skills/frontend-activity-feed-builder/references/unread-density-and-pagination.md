# Unread Density And Pagination

Event streams need clear state handling under real volume.

## Unread state

- Distinguish unread from high priority.
- Make unread markers visible without overpowering the row.

## Density

- Keep compact rows scannable.
- Use cards only when the event payload genuinely needs more structure.

## Pagination or incremental loading

- Load-more or infinite scroll behavior should be obvious.
- Preserve chronology and position when new items are appended or prepended.
