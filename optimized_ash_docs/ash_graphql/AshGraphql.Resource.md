# AshGraphql.Resource — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) AshGraphql.Resource (ash_graphql v1.3.3)
- __ Summary
  - Functions
- __ Functions
- codegen(argv)
- decode_id(resource, id, relay_ids?)
- decode_primary_key(resource, value)
- decode_relay_id(id)
- define_type?(type, constraints)
- embedded?(resource_or_type)
- encode_id(record, relay_ids?)
- encode_primary_key(record)
- encode_relay_id(record)
- enum_definitions(resource, schema, env)
- generate_object?(resource)
- graphql(body)
- install(igniter, module, arg, path, argv)
- managed_relationship_definitions(used, schema)
- managed_relationships(resource)
- map_definitions(resource, all_domains, schema, env)
- mutations()
- mutations(resource, domain \\\ [])
- no_graphql_types(resource, schema)
- node_type?(type)
- primary_key_delimiter(resource)
- primary_key_get_query(resource, all_domains)
- queries()
- queries(resource, domain \\\ [])
- query_type_definitions(resource, domain, all_domains, schema, relay_ids?)
- ref(env)
- type(resource)
- type_definition(resource, domain, all_domains, schema, relay_ids?)

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) AshGraphql.Resource (ash_graphql v1.3.3)

This Ash resource extension adds configuration for exposing a resource in a graphql.

#  __ Summary

##  Functions

codegen(argv)

decode_id(resource, id, relay_ids?)

decode_primary_key(resource, value)

decode_relay_id(id)

define_type?(type, constraints)

embedded?(resource_or_type)

encode_id(record, relay_ids?)

encode_primary_key(record)

encode_relay_id(record)

enum_definitions(resource, schema, env)

generate_object?(resource) deprecated

See [`AshGraphql.Resource.Info.generate_object?/1`](external_link).

graphql(body)

Hello!

install(igniter, module, arg, path, argv)

managed_relationship_definitions(used, schema)

managed_relationships(resource) deprecated

See [`AshGraphql.Resource.Info.managed_relationships/1`](external_link).

map_definitions(resource, all_domains, schema, env)

mutations()

mutations(resource, domain \\\ []) deprecated

See [`AshGraphql.Resource.Info.mutations/2`](external_link).

no_graphql_types(resource, schema)

node_type?(type)

primary_key_delimiter(resource) deprecated

See [`AshGraphql.Resource.Info.primary_key_delimiter/1`](external_link).

primary_key_get_query(resource, all_domains)

queries()

queries(resource, domain \\\ []) deprecated

See [`AshGraphql.Resource.Info.queries/2`](external_link).

query_type_definitions(resource, domain, all_domains, schema, relay_ids?)

ref(env)

type(resource) deprecated

See [`AshGraphql.Resource.Info.type/1`](external_link).

type_definition(resource, domain, all_domains, schema, relay_ids?)

#  __ Functions

__ Link to this function

# codegen(argv)

[ __ View Source ](external_link)

__ Link to this function

# decode_id(resource, id, relay_ids?)

[ __ View Source ](external_link)

__ Link to this function

# decode_primary_key(resource, value)

[ __ View Source ](external_link)

__ Link to this function

# decode_relay_id(id)

[ __ View Source ](external_link)

__ Link to this function

# define_type?(type, constraints)

[ __ View Source ](external_link)
    
    
    @spec define_type?([Ash.Type.t](3.4.1/Ash.Type.html#t:t/0)(), [Ash.Type.constraints](3.4.1/Ash.Type.html#t:constraints/0)()) :: [boolean](external_link)()

__ Link to this function

# embedded?(resource_or_type)

[ __ View Source ](external_link)

__ Link to this function

# encode_id(record, relay_ids?)

[ __ View Source ](external_link)

__ Link to this function

# encode_primary_key(record)

[ __ View Source ](external_link)

__ Link to this function

# encode_relay_id(record)

[ __ View Source ](external_link)

__ Link to this function

# enum_definitions(resource, schema, env)

[ __ View Source ](external_link)

__ Link to this function

# generate_object?(resource)

[ __ View Source ](external_link)

This function is deprecated. See `AshGraphql.Resource.Info.generate_object?/1`. 

See [`AshGraphql.Resource.Info.generate_object?/1`](external_link).

__ Link to this macro

# graphql(body)

[ __ View Source ](external_link) (macro)

Hello!

__ Link to this function

# install(igniter, module, arg, path, argv)

[ __ View Source ](external_link)

__ Link to this function

# managed_relationship_definitions(used, schema)

[ __ View Source ](external_link)

__ Link to this function

# managed_relationships(resource)

[ __ View Source ](external_link)

This function is deprecated. See `AshGraphql.Resource.Info.managed_relationships/1`. 

See [`AshGraphql.Resource.Info.managed_relationships/1`](external_link).

__ Link to this function

# map_definitions(resource, all_domains, schema, env)

[ __ View Source ](external_link)

__ Link to this function

# mutations()

[ __ View Source ](external_link)

__ Link to this function

# mutations(resource, domain \\\ [])

[ __ View Source ](external_link)

This function is deprecated. See `AshGraphql.Resource.Info.mutations/1`. 

See [`AshGraphql.Resource.Info.mutations/2`](external_link).

__ Link to this function

# no_graphql_types(resource, schema)

[ __ View Source ](external_link)

__ Link to this function

# node_type?(type)

[ __ View Source ](external_link)

__ Link to this function

# primary_key_delimiter(resource)

[ __ View Source ](external_link)

This function is deprecated. See `AshGraphql.Resource.Info.primary_key_delimiter/1`. 

See [`AshGraphql.Resource.Info.primary_key_delimiter/1`](external_link).

__ Link to this function

# primary_key_get_query(resource, all_domains)

[ __ View Source ](external_link)

__ Link to this function

# queries()

[ __ View Source ](external_link)

__ Link to this function

# queries(resource, domain \\\ [])

[ __ View Source ](external_link)

This function is deprecated. See `AshGraphql.Resource.Info.queries/1`. 

See [`AshGraphql.Resource.Info.queries/2`](external_link).

__ Link to this function

# query_type_definitions(resource, domain, all_domains, schema, relay_ids?)

[ __ View Source ](external_link)

__ Link to this function

# ref(env)

[ __ View Source ](external_link)

__ Link to this function

# type(resource)

[ __ View Source ](external_link)

This function is deprecated. See `AshGraphql.Resource.Info.type/1`. 

See [`AshGraphql.Resource.Info.type/1`](external_link).

__ Link to this function

# type_definition(resource, domain, all_domains, schema, relay_ids?)

[ __ View Source ](external_link)
