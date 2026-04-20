# Menu Contract

Use this reference to define what kind of dropdown is being built.

## Common dropdown types

- Action menu: rows trigger immediate actions
- Selection menu: rows choose one current value
- Overflow menu: compact access to secondary actions
- Sort or filter menu: rows alter result presentation or scope

## Contract questions

Clarify:

- what opens the menu
- whether selection is transient or persistent
- whether rows are actions, links, toggles, radios, or checkable options
- whether the menu closes on selection or remains open for multi-choice interactions
- which items are primary, secondary, or destructive

## When to switch patterns

- Use a combobox when typing or async search is required.
- Use a popover when the surface needs richer content or inline controls.
- Use a tooltip when the goal is explanation, not choice or action.
