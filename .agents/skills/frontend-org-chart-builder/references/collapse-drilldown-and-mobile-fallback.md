# Collapse, Drill-Down, and Mobile Fallback

Dense hierarchies need explicit containment rules.

Use some combination of:

- collapsed lower levels with descendant counts
- subtree focus from the selected node
- side-panel details instead of enlarging every node
- route-level drill-down for very large organizations
- grouped list or section fallback on mobile

Requirements:

- expanded and collapsed states must be obvious
- hidden descendants must not look like missing data
- keyboard focus should remain understandable while expanding or collapsing branches
- touch targets for expand controls and node actions should remain separate
