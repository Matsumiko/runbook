# Bulk Actions, Selection, and Responsive Collapse

Selection-driven toolbars need explicit mode changes.

Requirements:

- zero-selected and selected states must read as different modes
- destructive bulk actions should be visually separated from passive actions
- selected counts should be visible without drowning the rest of the toolbar
- on smaller screens, collapse secondary controls into menus before hiding critical feedback
- empty, filtered, and loading results should preserve toolbar orientation even if some controls disable

If responsive collapse removes clarity, prefer a stacked toolbar over a single unreadable row.
