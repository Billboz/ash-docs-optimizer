# Ash.Query.Operator.In — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Operator.In (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- evaluate(map)
- name()
- operator()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Operator.In (ash v3.4.8)

left in [1, 2, 3]

this predicate matches if the left is in the list on the right

For comparison, this simplifies to a set of "or equals", e.g `{:or, {:or, {:or, left == 1}, left == 2}, left == 3}`

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
