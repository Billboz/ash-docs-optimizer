# Ash.Resource.Aggregate.CustomAggregate — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Aggregate.CustomAggregate behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
- __ Types
- t()
- __ Callbacks
- describe(t)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Aggregate.CustomAggregate behaviour (ash v3.4.8)

The root behavior for a custom aggregate.

See data layers for their implementation of custom aggregates.

#  __ Summary

##  Types

t()

##  Callbacks

describe(t)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: {[module](external_link)(), [Keyword.t](external_link)()}

#  __ Callbacks

__ Link to this callback

# describe(t)

[ __ View Source ](external_link)
    
    
    @callback describe(t()) :: [String.t](external_link)()
