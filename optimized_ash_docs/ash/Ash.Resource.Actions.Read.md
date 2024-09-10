# Ash.Resource.Actions.Read — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Actions.Read (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- pagination_schema()
- transform(read)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Actions.Read (ash v3.4.8)

Represents a read action on a resource.

#  __ Summary

##  Types

t()

##  Functions

pagination_schema()

transform(read)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Actions.Read{
      arguments: [[Ash.Resource.Actions.Argument.t](external_link)()],
      description: [String.t](external_link)() | nil,
      filter: [any](external_link)(),
      filters: [[any](external_link)()],
      get?: nil | [boolean](external_link)(),
      get_by: nil | [atom](external_link)() | [[atom](external_link)()],
      manual: [atom](external_link)() | {[atom](external_link)(), [Keyword.t](external_link)()} | nil,
      metadata: [[Ash.Resource.Actions.Metadata.t](external_link)()],
      modify_query: nil | [mfa](external_link)(),
      multitenancy: [atom](external_link)(),
      name: [atom](external_link)(),
      pagination: [any](external_link)(),
      preparations: [term](external_link)(),
      primary?: [boolean](external_link)(),
      skip_unknown_inputs: [[atom](external_link)() | [String.t](external_link)()],
      timeout: [pos_integer](external_link)() | nil,
      touches_resources: [[atom](external_link)()],
      transaction?: [boolean](external_link)(),
      type: :read
    }

#  __ Functions

__ Link to this function

# pagination_schema()

[ __ View Source ](external_link)

__ Link to this function

# transform(read)

[ __ View Source ](external_link)
