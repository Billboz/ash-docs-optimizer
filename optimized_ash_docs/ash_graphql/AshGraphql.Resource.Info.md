# AshGraphql.Resource.Info — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) AshGraphql.Resource.Info (ash_graphql v1.3.3)
- __ Summary
  - Functions
- __ Functions
- argument_input_types(resource)
- argument_names(resource)
- attribute_input_types(resource)
- attribute_types(resource)
- derive_filter?(resource)
- derive_sort?(resource)
- encode_primary_key?(resource)
- field_names(resource)
- filterable_field?(resource, field_name)
- filterable_fields(resource)
- generate_object?(resource)
- hide_fields(resource)
- keyset_field(resource)
- managed_relationship(resource, action, argument)
- managed_relationships(resource)
- managed_relationships_auto?(resource)
- mutations(resource, domain_or_domains \\\ [])
- nullable_fields(resource)
- paginate_relationship_with(resource)
- primary_key_delimiter(resource)
- queries(resource, domain_or_domains \\\ [])
- relationships(resource)
- show_field?(resource, field)
- show_fields(resource)
- type(resource)

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) AshGraphql.Resource.Info (ash_graphql v1.3.3)

Introspection helpers for AshGraphql.Resource

#  __ Summary

##  Functions

argument_input_types(resource)

Graphql argument type overrides for the resource

argument_names(resource)

Graphql argument name overrides for the resource

attribute_input_types(resource)

Graphql attribute input type overrides for the resource

attribute_types(resource)

Graphql type overrides for the resource

derive_filter?(resource)

Wether or not to derive a filter input for the resource automatically

derive_sort?(resource)

Wether or not to derive a sort input for the resource automatically

encode_primary_key?(resource)

Wether or not to encode the primary key as a single `id` field when reading and getting

field_names(resource)

Graphql field name (attribute/relationship/calculation/arguments) overrides for the resource

filterable_field?(resource, field_name)

May the specified field be filtered on?

filterable_fields(resource)

Fields that may be filtered on

generate_object?(resource)

Wether or not an object should be generated, or if one with the type name for this resource should be used.

hide_fields(resource)

Fields to hide from the graphql domain

keyset_field(resource)

The field name to place the keyset of a result in

managed_relationship(resource, action, argument)

The managed_relationshi configuration for a given action/argument

managed_relationships(resource)

The managed_relationship configurations

managed_relationships_auto?(resource)

mutations(resource, domain_or_domains \\\ [])

The mutations exposed for the resource

nullable_fields(resource)

Graphql nullability overrides for the resource

paginate_relationship_with(resource)

Pagination configuration for list relationships

primary_key_delimiter(resource)

The delimiter for a resource with a composite primary key

queries(resource, domain_or_domains \\\ [])

The queries exposed for the resource

relationships(resource)

Which relationships should be included in the generated type

show_field?(resource, field)

Wether or not a given field will be shown

show_fields(resource)

Fields to show in the graphql domain

type(resource)

The graphql type of the resource

#  __ Functions

__ Link to this function

# argument_input_types(resource)

[ __ View Source ](external_link)

Graphql argument type overrides for the resource

__ Link to this function

# argument_names(resource)

[ __ View Source ](external_link)

Graphql argument name overrides for the resource

__ Link to this function

# attribute_input_types(resource)

[ __ View Source ](external_link)

Graphql attribute input type overrides for the resource

__ Link to this function

# attribute_types(resource)

[ __ View Source ](external_link)

Graphql type overrides for the resource

__ Link to this function

# derive_filter?(resource)

[ __ View Source ](external_link)

Wether or not to derive a filter input for the resource automatically

__ Link to this function

# derive_sort?(resource)

[ __ View Source ](external_link)

Wether or not to derive a sort input for the resource automatically

__ Link to this function

# encode_primary_key?(resource)

[ __ View Source ](external_link)

Wether or not to encode the primary key as a single `id` field when reading and getting

__ Link to this function

# field_names(resource)

[ __ View Source ](external_link)

Graphql field name (attribute/relationship/calculation/arguments) overrides for the resource

__ Link to this function

# filterable_field?(resource, field_name)

[ __ View Source ](external_link)

May the specified field be filtered on?

__ Link to this function

# filterable_fields(resource)

[ __ View Source ](external_link)

Fields that may be filtered on

__ Link to this function

# generate_object?(resource)

[ __ View Source ](external_link)

Wether or not an object should be generated, or if one with the type name for this resource should be used.

__ Link to this function

# hide_fields(resource)

[ __ View Source ](external_link)

Fields to hide from the graphql domain

__ Link to this function

# keyset_field(resource)

[ __ View Source ](external_link)

The field name to place the keyset of a result in

__ Link to this function

# managed_relationship(resource, action, argument)

[ __ View Source ](external_link)

The managed_relationshi configuration for a given action/argument

__ Link to this function

# managed_relationships(resource)

[ __ View Source ](external_link)

The managed_relationship configurations

__ Link to this function

# managed_relationships_auto?(resource)

[ __ View Source ](external_link)

__ Link to this function

# mutations(resource, domain_or_domains \\\ [])

[ __ View Source ](external_link)

The mutations exposed for the resource

__ Link to this function

# nullable_fields(resource)

[ __ View Source ](external_link)

Graphql nullability overrides for the resource

__ Link to this function

# paginate_relationship_with(resource)

[ __ View Source ](external_link)

Pagination configuration for list relationships

__ Link to this function

# primary_key_delimiter(resource)

[ __ View Source ](external_link)

The delimiter for a resource with a composite primary key

__ Link to this function

# queries(resource, domain_or_domains \\\ [])

[ __ View Source ](external_link)

The queries exposed for the resource

__ Link to this function

# relationships(resource)

[ __ View Source ](external_link)

Which relationships should be included in the generated type

__ Link to this function

# show_field?(resource, field)

[ __ View Source ](external_link)

Wether or not a given field will be shown

__ Link to this function

# show_fields(resource)

[ __ View Source ](external_link)

Fields to show in the graphql domain

__ Link to this function

# type(resource)

[ __ View Source ](external_link)

The graphql type of the resource
