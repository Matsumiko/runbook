# Mobile Drawer and Shell Integration

Desktop sidebar behavior does not automatically translate to mobile.

Decide:

- whether the sidebar becomes a drawer, sheet, or alternate nav pattern
- where the open trigger lives on mobile
- how background content is locked or dimmed
- how the active route remains visible after navigation
- how deep or nested groups degrade on narrow screens

Avoid:

- persistent desktop-width sidebars on cramped mobile layouts
- drawers that hide the current location with no active marker
- shell transitions that leave keyboard or focus behavior unclear
