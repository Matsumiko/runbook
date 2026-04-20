# Keyboard, Loading, and Mobile Fallback

Trees fail quickly when interaction rules are fuzzy.

Requirements:

- keyboard navigation should preserve orientation across expand and collapse
- loading descendants must not look identical to empty descendants
- long labels should truncate or wrap without hiding depth cues
- selection focus, hover, and expansion affordances must stay visually distinct
- mobile fallback can switch to drill-down lists, grouped sheets, or breadcrumb-backed subviews

When the hierarchy is too deep for indentation on small screens, preserve path context instead of squeezing the tree tighter.
