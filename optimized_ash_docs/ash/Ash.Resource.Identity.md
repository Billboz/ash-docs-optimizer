# Ash.Resource.Identity — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Identity (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- schema()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Identity (ash v3.4.8)

Represents a unique constraint on a resource

Data layers should (and all built in ones do), discount `nil` or `null` (in the case of postgres) values when determining if a unique constraint matches. This often means that you should prefer to use identities with non-nullable columns.

Eventually, features could be added to support including `nil` or `null` values, but they would need to include a corresponding feature for data layers.

#  __ Summary

##  Types

t()

##  Functions

schema()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Identity{
      all_tenants?: [boolean](external_link)(),
      description: [String.t](external_link)() | nil,
      eager_check?: [term](external_link)(),
      eager_check_with: [term](external_link)(),
      keys: [[atom](external_link)()],
      message: [term](external_link)(),
      name: [atom](external_link)(),
      nils_distinct?: [boolean](external_link)(),
      pre_check?: [term](external_link)(),
      pre_check_with: [term](external_link)(),
      where: nil | [Ash.Expr.t](external_link)()
    }

#  __ Functions

__ Link to this function

# schema()

[ __ View Source ](external_link)
