# Filter Surface Contract

Use this reference to define how the filter system behaves before implementing controls.

## Common filter surfaces

- Compact filter bars above tables or cards
- Side-panel facet systems
- Applied-filter chips with clear-one and clear-all
- Report-filter areas with explicit apply behavior

## Contract questions

Clarify:

- which dataset is being filtered
- which filters are most important
- instant apply versus explicit apply
- chip summary or count requirements
- clear-one and clear-all behavior
- empty-result handling

## Pattern boundary

- Use search-builder when query and results dominate the route.
- Use form-builder when the control is just one isolated filter form.
