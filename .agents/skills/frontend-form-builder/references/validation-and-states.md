# Validation and States

Forms fail most often at state handling, not field rendering.

## Validation Levels

Check which ones are relevant:

- required field checks
- format validation
- range or length validation
- cross-field validation
- async validation

Do not implement validation theater. Each rule should be tied to a real product need.

## Field States

Relevant states often include:

- default
- focused
- filled
- invalid
- disabled
- loading or pending
- readonly

## Error Presentation

- Keep field-level errors close to the field.
- Use form-level errors for cross-field or submit-level failures.
- Error text should help recovery, not just signal failure.
- Avoid ambiguous red styling without textual explanation.

## Accessibility Notes

- Inputs need clear labels.
- Focus treatment must remain visible.
- Error and helper text should be programmatically tied to the input where practical.
- Disabled states should preserve semantics, not just look muted.
