# Select Contract

Use this reference to define the selection job before implementation.

## Select fit

A select field is appropriate when:

- the user chooses from known options
- typing is not the primary interaction
- the control behaves like a field within a form or settings surface
- label, helper text, required state, or validation messaging matter

## Contract questions

Clarify:

- single-select or multi-select
- flat options or grouped options
- default value or placeholder
- whether helper or validation text is required
- whether disabled options need explanation
- how selected values should display when closed

## Pattern boundary

- Use combobox for typing, autocomplete, or async search.
- Use dropdown for action menus or overflow menus.
- Use date picker for date-specific selection.
