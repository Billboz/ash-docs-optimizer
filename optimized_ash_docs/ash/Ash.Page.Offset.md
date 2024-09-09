# Ash.Page.Offset — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Page.Offset (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(results, count, original_query, more?, opts)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Page.Offset (ash v3.4.8)

A page of results from `offset` based pagination.

If a resource supports `keyset` pagination as well, it will also have the `keyset` metadata.

#  __ Summary

##  Types

t()

##  Functions

new(results, count, original_query, more?, opts)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Page.Offset{
      count: [term](external_link)(),
      limit: [term](external_link)(),
      more?: [term](external_link)(),
      offset: [term](external_link)(),
      rerun: [term](external_link)(),
      results: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# new(results, count, original_query, more?, opts)

[ __ View Source ](external_link)
