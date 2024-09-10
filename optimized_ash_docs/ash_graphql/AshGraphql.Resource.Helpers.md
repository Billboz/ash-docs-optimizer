# AshGraphql.Resource.Helpers — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) AshGraphql.Resource.Helpers (ash_graphql v1.3.3)
- __ Summary
  - Functions
- __ Functions
- list_of(value)
- non_null(value)

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) AshGraphql.Resource.Helpers (ash_graphql v1.3.3)

Imported helpers for the graphql DSL section

#  __ Summary

##  Functions

list_of(value)

A list of a given type, idiomatic for those used to `absinthe` notation.

non_null(value)

A non nullable type, idiomatic for those used to `absinthe` notation.

#  __ Functions

__ Link to this function

# list_of(value)

[ __ View Source ](external_link)
    
    
    @spec list_of(v) :: {:array, v} when v: [term](external_link)()

A list of a given type, idiomatic for those used to `absinthe` notation.

__ Link to this function

# non_null(value)

[ __ View Source ](external_link)
    
    
    @spec non_null(v) :: {:non_null, v} when v: [term](external_link)()

A non nullable type, idiomatic for those used to `absinthe` notation.
