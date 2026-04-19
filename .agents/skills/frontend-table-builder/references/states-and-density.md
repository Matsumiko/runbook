# States and Density

Tables fail most often when they only look good with perfect data.

## Table States

Relevant states often include:

- loading
- empty
- error
- populated
- selected rows
- hoverable rows
- disabled row actions

## Density Rules

- Match the product's current density instead of inventing a new one.
- Keep row height, paddings, and typography readable.
- Do not compress the table so hard that it stops being scannable.
- Do not add decorative chrome that makes dense data harder to parse.

## Cell Treatment

- Primary information should dominate.
- Secondary metadata should recede without becoming unreadable.
- Status indicators should be visually consistent.
- Action cells should stay discoverable but not visually noisy.

## Empty and Error States

- Empty states should feel intentional, not like broken data loading.
- Error states should help recovery where possible.
- Loading skeletons or placeholders should preserve table structure when practical.
