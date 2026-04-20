# Cursor, Load More, and State Sync

Not every list should expose numbered pages.

Use cursor or previous-next controls when:

- the backend does not expose stable page counts
- users care more about continuity than exact page numbers

Use load more when:

- the scan path is linear and continuous
- preserving scroll context matters more than jumping to a specific page

Always verify:

- URL or query sync rules
- boundary states
- loading transitions
- how selection or filters behave after a page change
