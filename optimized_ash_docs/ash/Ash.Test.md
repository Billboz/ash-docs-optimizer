# Ash.Test — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Test (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- assert_has_error(changeset_query_or_input, error_class \\\ nil, callback, opts \\\ [])
- refute_has_error(changeset_query_or_input, error_class \\\ nil, callback, opts \\\ [])
- strip_metadata(structs)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Test (ash v3.4.8)

Testing helpers for Ash.

#  __ Summary

##  Functions

assert_has_error(changeset_query_or_input, error_class \\\ nil, callback, opts \\\ [])

Assert that the given changeset, query, or action input has a matching error.

refute_has_error(changeset_query_or_input, error_class \\\ nil, callback, opts \\\ [])

Refute that the given changeset, query, or action input has a matching error.

strip_metadata(structs)

Clears the `__metadata__` field and the underlying ecto `__meta__` field

#  __ Functions

__ Link to this function

# assert_has_error(changeset_query_or_input, error_class \\\ nil, callback, opts \\\ [])

[ __ View Source ](external_link)

Assert that the given changeset, query, or action input has a matching error.

Use the optional second argument to assert that the errors (all together) are of a specific class.

__ Link to this function

# refute_has_error(changeset_query_or_input, error_class \\\ nil, callback, opts \\\ [])

[ __ View Source ](external_link)

Refute that the given changeset, query, or action input has a matching error.

Use the optional second argument to assert that the errors (all together) are of a specific class.

__ Link to this function

# strip_metadata(structs)

[ __ View Source ](external_link)

Clears the `__metadata__` field and the underlying ecto `__meta__` field

This allows for easier comparison of changeset/query results
