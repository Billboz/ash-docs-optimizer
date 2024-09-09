# AshCubDB.Query — ash_cubdb v0.6.2

Project: ash_cubdb v0.6.2

## Table of Contents

- [ __ View Source ](external_link) AshCubDB.Query (ash_cubdb v0.6.2)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash_cubdb __ __

__ Settings

#  [ __ View Source ](external_link) AshCubDB.Query (ash_cubdb v0.6.2)

A struct which holds information about a resource query as it is being built.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshCubDB.Query{
      aggregates: [[Ash.Resource.Aggregate.t](3.0.0/Ash.Resource.Aggregate.html#t:t/0)()],
      calculations: [[Ash.Resource.Calculation.t](3.0.0/Ash.Resource.Calculation.html#t:t/0)()],
      distinct: [Ash.Sort.t](3.0.0/Ash.Sort.html#t:t/0)(),
      distinct_sort: [Ash.Sort.t](3.0.0/Ash.Sort.html#t:t/0)(),
      domain: [Ash.Domain.t](3.0.0/Ash.Domain.html#t:t/0)(),
      filter: nil | [Ash.Filter.t](3.0.0/Ash.Filter.html#t:t/0)(),
      limit: :infinity | [non_neg_integer](external_link)(),
      offset: [non_neg_integer](external_link)(),
      relationships: %{
        optional([atom](external_link)()) => [Ash.Resource.Relationships.relationship](3.0.0/Ash.Resource.Relationships.html#t:relationship/0)()
      },
      resource: [Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)(),
      sort: nil | [Ash.Sort.t](3.0.0/Ash.Sort.html#t:t/0)(),
      tenant: [any](external_link)()
    }
