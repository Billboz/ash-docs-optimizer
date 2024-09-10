# Ash.Filter.Runtime — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Filter.Runtime (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- filter_matches(domain, records, filter, opts \\\ [])
- old_get_related(records, list, unknown_on_unknown_refs?, join_filters, parent_stack, domain)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Filter.Runtime (ash v3.4.8)

Checks a record to see if it matches a filter statement.

We can't always tell if a record matches a filter statement, and as such this function may return `:unknown`. Additionally, some expressions wouldn't ever make sense outside of the context of the data layer, and will always be an error. For example, if you used the trigram search features in `ash_postgres`. That logic would need to be handwritten in Elixir and would need to be a _perfect_ copy of the postgres implementation. That isn't a realistic goal. This generally should not affect anyone using the standard framework features, but if you were to attempt to use this module with a data layer like `ash_postgres`, certain expressions will behave unpredictably.

#  __ Summary

##  Functions

filter_matches(domain, records, filter, opts \\\ [])

Removes any records that don't match the filter. Automatically loads if necessary. If there are any ambiguous terms in the filter (e.g things that could only be determined by data layer), it is assumed that they are not matches.

old_get_related(records, list, unknown_on_unknown_refs?, join_filters, parent_stack, domain)

#  __ Functions

__ Link to this function

# filter_matches(domain, records, filter, opts \\\ [])

[ __ View Source ](external_link)

Removes any records that don't match the filter. Automatically loads if necessary. If there are any ambiguous terms in the filter (e.g things that could only be determined by data layer), it is assumed that they are not matches.

__ Link to this function

# old_get_related(records, list, unknown_on_unknown_refs?, join_filters, parent_stack, domain)

[ __ View Source ](external_link)
