# No Data Vs No Results Vs Blocked

Treat these states as different user problems:

- **No data**: nothing exists yet
- **No results**: data exists, but the current query or filters found nothing
- **Blocked**: the user cannot access or complete the action
- **Unavailable**: the system or integration cannot provide the data right now

Use rules like these:

- no-data states should help the user create, import, connect, or invite
- no-results states should help the user broaden, reset, or change constraints
- blocked states should explain the restriction and the right escalation or fallback path
- unavailable states should separate temporary system issues from user action issues
- if the state appears inside a larger page, keep surrounding context visible so the user knows what surface failed

Non-happy-path checklist:

- the state reason is explicit
- the main recovery path is obvious
- the surface does not pretend all empty conditions are the same
- narrow layouts still preserve title, explanation, and CTA order
- icon or illustration treatment supports comprehension rather than decorating blank space
