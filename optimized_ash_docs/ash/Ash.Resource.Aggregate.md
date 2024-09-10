# Ash.Resource.Aggregate — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Aggregate (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Aggregate (ash v3.4.8)

Represents a named aggregate on the resource that can be loaded

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Aggregate{
      authorize?: [boolean](external_link)(),
      constraints: [term](external_link)(),
      default: [term](external_link)(),
      description: [String.t](external_link)() | nil,
      field: [atom](external_link)(),
      filter: [Keyword.t](external_link)(),
      filterable?: [boolean](external_link)(),
      implementation: [term](external_link)(),
      include_nil?: [term](external_link)(),
      join_filters: %{required([[atom](external_link)()]) => [term](external_link)()},
      kind: [Ash.Query.Aggregate.kind](external_link)(),
      name: [atom](external_link)(),
      public?: [boolean](external_link)(),
      read_action: [atom](external_link)() | nil,
      relationship_path: [[atom](external_link)()],
      sensitive?: [boolean](external_link)(),
      sort: [term](external_link)(),
      sortable?: [boolean](external_link)(),
      type: [term](external_link)(),
      uniq?: [term](external_link)()
    }
