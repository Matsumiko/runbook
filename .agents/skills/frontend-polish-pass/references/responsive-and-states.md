# Responsive and States

Polish work fails if it only improves the default desktop snapshot.

## Responsive Pass

Check:

- narrow mobile width
- tablet or medium width if relevant
- desktop width
- overflow behavior
- wrapping of actions, filters, metadata, and long text

Prefer fixing the layout with small structural adjustments instead of piling on one-off breakpoints.

## State Pass

Check whichever of these matter for the surface:

- default
- hover
- focus
- active
- disabled
- loading
- empty
- error
- success
- selected

## Interaction Notes

- Focus should remain visible and intentional.
- Loading should avoid jarring layout shifts when possible.
- Empty states should feel informative, not broken.
- Error states should help the user recover.

## Proof Standard

If the polish pass does not examine responsive behavior and important states, it is still a partial pass, not a finished one.
