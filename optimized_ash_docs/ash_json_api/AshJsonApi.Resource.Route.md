# AshJsonApi.Resource.Route — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.Resource.Route (ash_json_api v1.4.7)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.Resource.Route (ash_json_api v1.4.7)

Represents a route for a resource

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshJsonApi.Resource.Route{
      action: [term](external_link)(),
      action_type: [term](external_link)(),
      controller: [term](external_link)(),
      default_fields: [term](external_link)(),
      derive_filter?: [term](external_link)(),
      derive_sort?: [term](external_link)(),
      metadata: [term](external_link)(),
      method: [term](external_link)(),
      modify_conn: [term](external_link)(),
      name: [term](external_link)(),
      primary?: [term](external_link)(),
      query_params: [term](external_link)(),
      read_action: [term](external_link)(),
      relationship: [term](external_link)(),
      relationship_arguments: [term](external_link)(),
      resource: [term](external_link)(),
      route: [term](external_link)(),
      type: [term](external_link)(),
      upsert?: [term](external_link)(),
      upsert_identity: [term](external_link)(),
      wrap_in_result?: [term](external_link)()
    }
