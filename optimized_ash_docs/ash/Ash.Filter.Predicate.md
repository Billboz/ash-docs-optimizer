# Ash.Filter.Predicate — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Filter.Predicate behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- comparison()
- predicate()
- __ Callbacks
- bulk_compare(list)
- compare(predicate, predicate)
- simplify(predicate)
- __ Functions
- compare(same, same)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Filter.Predicate behaviour (ash v3.4.8)

Represents a predicate which can be simplified and/or compared with other predicates

Simplification and comparison will need more documentation, but ultimately it is the logic that allows us to have a flexible and powerful authorization system.

#  __ Summary

##  Types

comparison()

predicate()

##  Callbacks

bulk_compare(list)

As long as at least one predicate of the type defined in your module, (and this callback is implemented), it will be called with all of the other predicates present in a filter. The return value is relatively complex, but it should be a list of boolean statements. E.g. `{op, left, right}` and `{:not, predicate}` (nested as deep as necessary).

compare(predicate, predicate)

Compare two predicates. If possible, use `bulk_compare/1` instead

simplify(predicate)

Simplify to a more primitive statement.

##  Functions

compare(same, same)

Checks with each predicate module to see if it has a comparison with

#  __ Types

__ Link to this type

# comparison()

[ __ View Source ](external_link)
    
    
    @type comparison() ::
      :unknown
      | :right_includes_left
      | :left_includes_right
      | :mutually_inclusive
      | :mutually_exclusive

__ Link to this type

# predicate()

[ __ View Source ](external_link)
    
    
    @type predicate() :: [struct](external_link)()

#  __ Callbacks

__ Link to this callback

# bulk_compare(list)

[ __ View Source ](external_link) (optional)
    
    
    @callback bulk_compare([predicate()]) :: [term](external_link)()

As long as at least one predicate of the type defined in your module, (and this callback is implemented), it will be called with all of the other predicates present in a filter. The return value is relatively complex, but it should be a list of boolean statements. E.g. `{op, left, right}` and `{:not, predicate}` (nested as deep as necessary).

The best way to do it is to find lists of predicates that are mutually exclusive or mutually inclusive, and pass those lists into [`Ash.SatSolver.mutually_exclusive/1`](external_link) and [`Ash.SatSolver.mutually_inclusive/1`](external_link)

__ Link to this callback

# compare(predicate, predicate)

[ __ View Source ](external_link) (optional)
    
    
    @callback compare(predicate(), predicate()) :: comparison()

Compare two predicates. If possible, use `bulk_compare/1` instead

__ Link to this callback

# simplify(predicate)

[ __ View Source ](external_link) (optional)
    
    
    @callback simplify(predicate()) :: [term](external_link)()

Simplify to a more primitive statement.

For example, `x in [1, 2]` simplifies to `x == 1 or x == 2`. Simplifying to filter expressions that already have comparisons lets you avoid writing that logic for a given predicate.

#  __ Functions

__ Link to this function

# compare(same, same)

[ __ View Source ](external_link)

Checks with each predicate module to see if it has a comparison with
