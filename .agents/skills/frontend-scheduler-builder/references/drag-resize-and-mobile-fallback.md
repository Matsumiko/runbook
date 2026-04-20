# Drag, Resize, and Mobile Fallback

Interactive schedulers need explicit behavior rules.

Requirements:

- drag and resize affordances must be obvious and distinct from opening details
- optimistic movement states and conflict states must be visible
- blocked time and unavailable slots must resist accidental interaction
- current-time markers, sticky headers, or sticky resource labels should preserve orientation when useful
- mobile fallback can switch to agenda-by-resource, drill-down sheets, or compact day strips

If the scheduler becomes gesture-heavy, keep a non-drag path available for accessibility and touch precision.
