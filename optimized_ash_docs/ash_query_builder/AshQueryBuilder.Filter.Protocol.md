# AshQueryBuilder.Filter.Protocol — AshQueryBuilder v0.7.0

Project: AshQueryBuilder v0.7.0

## Table of Contents

- __ Settings [ __ View Source ](external_link) AshQueryBuilder.Filter.Protocol protocol (AshQueryBuilder v0.7.0)
- __Summary
  - Types
  - Functions
- __Types
- t()
- __Functions
- operator(filter)
- to_expression(filter)

__ __ __

Search

[ AshQueryBuilder ](external_link)

v0.7.0 

  * Pages
  * Modules






#  __ Settings [ __ View Source ](external_link) AshQueryBuilder.Filter.Protocol protocol (AshQueryBuilder v0.7.0)

#  __Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

operator(filter)

to_expression(filter)

#  __Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __Functions

__ Link to this function

# operator(filter)

[ __ View Source ](external_link)
    
    
    @spec operator(t()) :: [atom](external_link)()

__ Link to this function

# to_expression(filter)

[ __ View Source ](external_link)
    
    
    @spec to_expression(t()) :: [Ash.Filter.t](3.0.16/Ash.Filter.html#t:t/0)()
