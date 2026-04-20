# Bulk Selection, Escalation, and Responsive Fallback

Operational queues need stateful behavior.

Requirements:

- selected items and bulk-action mode should be explicit
- escalated, overdue, blocked, and snoozed states must not collapse into one generic warning style
- mobile fallback can switch to stacked rows, segmented views, or drill-down details
- preserve the ability to clear selections and recover from over-filtered states

If bulk actions are not implemented, do not imply them visually.
