# Combobox Contract

Use this reference to define the selection model before implementation.

## Core combobox modes

- Single select with type filtering
- Multi-select with tokens or chips
- Async lookup for large or remote datasets
- Creatable select where new values may be added

## Contract questions

Clarify:

- what the user is selecting
- whether selection is single or multiple
- whether typing filters local options or requests remote results
- whether freeform creation is allowed
- how committed selection differs from raw typed input
- how the field clears, resets, or removes selected values

## Pattern boundary

- Use dropdown when typing is unnecessary.
- Use command palette when the experience is global, keyboard-first, and more launcher-like than field-like.
- Use search page patterns when discovery, results, and refinement dominate the experience.
