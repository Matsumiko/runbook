# Results And No-Match States

Treat result states as part of the search experience, not as afterthoughts.

Common result states include:

- initial state before search
- loading results
- matching results
- no results for the current query
- no data exists yet
- partial or unavailable results

Use rules like these:

- result summaries should explain what the user is seeing, not just show a number
- no-match states should suggest the next best recovery path: clear filters, broaden scope, or try a simpler query
- no-data states should help users understand whether the product is empty or their query is too narrow
- keep sort order, result count, and active constraints understandable together
- if results collapse from table to list on narrow screens, preserve scanability and action access

Non-happy-path checklist:

- loading state keeps the current query and scope visible
- no-match state offers a clear reset or refine path
- empty-index state explains why nothing can be found yet
- error state does not masquerade as empty results
- narrow layouts keep query and active constraints readable before the result list
