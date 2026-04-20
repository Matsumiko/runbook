# Filters, Density, and Detail Reveal

Audit logs often become dense quickly.

Requirements:

- filters should explain the visible scope clearly
- high-density rows must still preserve actor, action, target, and time
- expandable diffs or detail drawers should not break row orientation
- mobile fallback can switch to stacked metadata rows or drill-down details

If the log is too dense for direct reading, group by date or scope before stripping away accountability fields.
