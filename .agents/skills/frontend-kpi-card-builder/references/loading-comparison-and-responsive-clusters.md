# Loading, Comparison, and Responsive Clusters

KPI cards are usually read in groups, not alone.

Requirements:

- clustered cards should align labels, values, and comparison rows consistently
- loading skeletons should preserve the same geometry as the final cards
- unavailable or stale metrics should not look like successful zero values
- on small screens, stack or scroll cards in a way that preserves comparison order
- avoid truncating labels so aggressively that adjacent cards become ambiguous

If cards compare against each other, preserve that comparison when layouts collapse.
