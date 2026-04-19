# Table Contract

Define the data surface before implementing it.

## Minimum Contract

Clarify:

- data type
- column list
- default sort
- row identity
- actions per row
- bulk actions if any
- filter/search controls
- pagination or scrolling behavior
- empty, loading, and error behavior

## Surface Types

### Simple admin table

Examples:

- users
- invoices
- orders

Priorities:

- scanability
- reliable row actions
- clear status display

### Activity or log table

Examples:

- audit trail
- event log
- system jobs

Priorities:

- density
- timestamp readability
- status differentiation

### Mobile-adaptive data list

Examples:

- compact CRM records
- simple dashboards on narrow screens

Priorities:

- graceful collapse
- preserved hierarchy
- avoid horizontal chaos

## Contract Rule

If the user did not specify all of this, infer the smallest sensible contract and state the assumptions.
