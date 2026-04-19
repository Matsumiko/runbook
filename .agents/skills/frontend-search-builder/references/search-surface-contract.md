# Search Surface Contract

Define the search surface contract before composing controls and results.

Clarify:

- what users are trying to find
- which search scopes, tabs, or entity types exist
- what the default state should show before or without a query
- which refinements matter enough to expose up front
- how sort order affects interpretation
- what counts as no results versus no data indexed yet
- what recovery path should be obvious when the current query fails

Prefer the smallest search surface that helps users discover the right thing quickly. Do not add filters just because the backend supports them.
