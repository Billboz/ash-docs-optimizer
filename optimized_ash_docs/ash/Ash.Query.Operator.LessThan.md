# Ash.Query.Operator.LessThan — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Operator.LessThan (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- evaluate(map)
- name()
- operator()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Operator.LessThan (ash v3.4.8)

left < right

Does not simplify, but is used as the simplification value for [`Ash.Query.Operator.LessThanOrEqual`](external_link), [`Ash.Query.Operator.GreaterThan`](external_link) and [`Ash.Query.Operator.GreaterThanOrEqual`](external_link).

When comparing predicates, it is mutually exclusive with [`Ash.Query.Operator.IsNil`](external_link). Additionally, it compares as mutually inclusive with any [`Ash.Query.Operator.Eq`](external_link) and any [`Ash.Query.Operator.LessThan`](external_link) who's right sides are less than it, and mutually exclusive with any [`Ash.Query.Operator.Eq`](external_link) or [`Ash.Query.Operator.GreaterThan`](external_link) who's right side's are greater than or equal to it.

#  __ Summary

##  Functions

evaluate(map)

Callback implementation for [`Ash.Query.Operator.evaluate/1`](external_link).

name()

operator()

#  __ Functions

__ Link to this function

# evaluate(map)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Query.Operator.evaluate/1`](external_link).

__ Link to this function

# name()

[ __ View Source ](external_link)

__ Link to this function

# operator()

[ __ View Source ](external_link)
