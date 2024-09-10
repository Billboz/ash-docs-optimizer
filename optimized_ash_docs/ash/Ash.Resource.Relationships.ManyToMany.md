# Ash.Resource.Relationships.ManyToMany — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Relationships.ManyToMany (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Relationships.ManyToMany (ash v3.4.8)

Represents a many_to_many relationship on a resource

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Relationships.ManyToMany{
      cardinality: :many,
      context: [term](external_link)(),
      could_be_related_at_creation?: [term](external_link)(),
      description: [String.t](external_link)(),
      destination: [Ash.Resource.t](external_link)(),
      destination_attribute: [atom](external_link)(),
      destination_attribute_on_join_resource: [atom](external_link)(),
      domain: [term](external_link)(),
      filter: [Ash.Filter.t](external_link)() | nil,
      filterable?: [boolean](external_link)(),
      filters: [[any](external_link)()],
      has_many: [boolean](external_link)(),
      join_relationship: [atom](external_link)(),
      name: [atom](external_link)(),
      not_found_message: [term](external_link)(),
      public?: [boolean](external_link)(),
      read_action: [atom](external_link)(),
      sort: [term](external_link)(),
      sortable?: [boolean](external_link)(),
      source: [Ash.Resource.t](external_link)(),
      source_attribute: [atom](external_link)(),
      source_attribute_on_join_resource: [atom](external_link)(),
      through: [Ash.Resource.t](external_link)(),
      type: :many_to_many,
      validate_destination_attribute?: [term](external_link)(),
      violation_message: [term](external_link)()
    }
