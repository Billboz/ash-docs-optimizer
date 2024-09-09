# Ash.Error.Query.NoComplexSortsWithKeysetPagination — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Error.Query.NoComplexSortsWithKeysetPagination exception (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- exception()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Error.Query.NoComplexSortsWithKeysetPagination exception (ash v3.4.8)

Due to the filter-based implementation of keyset pagination, it cannot be used with sorts on calculations.

We could solve this problem by making the keyset only be the primary key of the record, and then fetching that value loading the calculations/aggregates that we need. If we do this we should either: 1.) make it a new pagination mode or 2.) add an option like `mode: :strict | :fetch` to pagination options.

Let me know if you're reading this and want to help implement it.

#  __ Summary

##  Functions

exception()

#  __ Functions

__ Link to this function

# exception()

[ __ View Source ](external_link)
