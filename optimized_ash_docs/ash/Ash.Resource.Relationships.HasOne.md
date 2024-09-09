# Ash.Resource.Relationships.HasOne — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Relationships.HasOne (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- transform(relationship)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Relationships.HasOne (ash v3.4.8)

Represents a has_one relationship on a resource

#  __ Summary

##  Types

t()

##  Functions

transform(relationship)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Relationships.HasOne{
      allow_nil?: [term](external_link)(),
      allow_orphans?: [boolean](external_link)(),
      cardinality: :one,
      context: [term](external_link)(),
      could_be_related_at_creation?: [term](external_link)(),
      description: [String.t](external_link)(),
      destination: [Ash.Resource.t](external_link)(),
      destination_attribute: [atom](external_link)(),
      domain: [term](external_link)(),
      filter: [Ash.Filter.t](external_link)() | nil,
      filterable?: [boolean](external_link)(),
      filters: [[any](external_link)()],
      from_many?: [boolean](external_link)(),
      manual: [atom](external_link)() | {[atom](external_link)(), [Keyword.t](external_link)()} | nil,
      name: [atom](external_link)(),
      no_attributes?: [boolean](external_link)(),
      not_found_message: [term](external_link)(),
      public?: [boolean](external_link)(),
      read_action: [atom](external_link)(),
      sort: [term](external_link)(),
      sortable?: [boolean](external_link)(),
      source: [Ash.Resource.t](external_link)(),
      source_attribute: [atom](external_link)(),
      type: :has_one,
      validate_destination_attribute?: [term](external_link)(),
      violation_message: [term](external_link)(),
      writable?: [boolean](external_link)()
    }

#  __ Functions

__ Link to this function

# transform(relationship)

[ __ View Source ](external_link)
