# Ash.Query.Function.StringJoin — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Function.StringJoin (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- args()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Function.StringJoin (ash v3.4.8)

Joins a list of values.

Ignores `nil` values and concatenates the remaining non-nil values. An optional joiner can be provided.
    
    
    string_join([first_name, last_name], " ")
    
    string_join([item_a, item_b])

#  __ Summary

##  Functions

args()

Callback implementation for [`Ash.Query.Function.args/0`](external_link).

#  __ Functions

__ Link to this function

# args()

[ __ View Source ](external_link)

Callback implementation for [`Ash.Query.Function.args/0`](external_link).
