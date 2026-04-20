# Pagination Contract

Define the paging model before choosing controls.

Clarify:

- whether paging is page-number, offset, cursor, or load-more based
- whether totals are known and trustworthy
- whether the UI needs result ranges, total counts, or page-size controls
- how first and last boundaries should behave
- where paging state lives: URL, query params, local state, or server state

Choose the pattern that matches the data contract, not just the visual mock.
