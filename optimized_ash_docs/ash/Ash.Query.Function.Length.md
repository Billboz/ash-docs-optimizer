# Ash.Query.Function.Length — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Function.Length (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- args()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Function.Length (ash v3.4.8)

Returns the length of a list attribute defined by the composite type `{:array, Type}`.
    
    
    length(roles)

If the attribute allows nils:
    
    
    length(roles || [])

#  __ Summary

##  Functions

args()

Callback implementation for [`Ash.Query.Function.args/0`](external_link).

#  __ Functions

__ Link to this function

# args()

[ __ View Source ](external_link)

Callback implementation for [`Ash.Query.Function.args/0`](external_link).
