# Loading, Empty, and Mobile Fallback

The hardest master-detail states are usually non-happy paths.

Requirements:

- distinguish empty list from no selection
- show selection loading without losing master context
- handle deleted, unavailable, or permission-limited records explicitly
- use drill-down routes, sheets, or stacked navigation on small screens when dual context no longer fits

Do not let mobile fallback hide the path back to the master list.
