# Ash.Resource.Relationships.BelongsTo — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Relationships.BelongsTo (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Relationships.BelongsTo (ash v3.4.8)

Represents a belongs_to relationship on a resource

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Relationships.BelongsTo{
      allow_nil?: [boolean](external_link)(),
      attribute_public?: [boolean](external_link)(),
      attribute_type: [term](external_link)(),
      attribute_writable?: [boolean](external_link)(),
      cardinality: :one,
      context: [term](external_link)(),
      define_attribute?: [boolean](external_link)(),
      description: [String.t](external_link)(),
      destination: [Ash.Resource.t](external_link)(),
      destination_attribute: [atom](external_link)(),
      domain: [term](external_link)(),
      filter: [Ash.Filter.t](external_link)() | nil,
      filterable?: [boolean](external_link)(),
      filters: [[any](external_link)()],
      name: [atom](external_link)(),
      not_found_message: [term](external_link)(),
      primary_key?: [boolean](external_link)(),
      public?: [boolean](external_link)(),
      read_action: [atom](external_link)(),
      sort: [term](external_link)(),
      sortable?: [boolean](external_link)(),
      source: [Ash.Resource.t](external_link)(),
      source_attribute: [atom](external_link)() | nil,
      type: :belongs_to,
      validate_destination_attribute?: [term](external_link)(),
      violation_message: [term](external_link)(),
      writable?: [boolean](external_link)()
    }
