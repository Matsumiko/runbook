# Inline Forms And Density

Popovers are easy to overcrowd. Keep them scoped.

## Density guidance

- Use compact spacing, but leave enough room for scanning and touch accuracy.
- Group related controls rather than stacking unrelated widgets.
- Keep headers and helper text short.

## Inline forms

- A popover can host short forms or compact control groups when the surrounding context matters.
- If validation, helper copy, or field count grows materially, the interaction likely wants a modal or full settings section instead.
- Make action buttons explicit when the user needs to confirm changes.

## Responsive fallback

- Switch to sheet, drawer, or inline section when the anchored form becomes too cramped on small screens.
- Do not force desktop-popover geometry into mobile if it harms readability or touch reliability.
