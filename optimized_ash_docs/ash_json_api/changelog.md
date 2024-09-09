# Change Log — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v1.4.7](external_link) (2024-09-04)
    - __ Bug Fixes:
  - __ [v1.4.6](external_link) (2024-08-26)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.4.5](external_link) (2024-08-20)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.4.4](external_link) (2024-08-16)
    - __ Improvements:
  - __ [v1.4.3](external_link) (2024-08-08)
    - __ Improvements:
  - __ [v1.4.2](external_link) (2024-08-08)
    - __ Bug Fixes:
  - __ [v1.4.1](external_link) (2024-07-30)
    - __ Improvements:
  - __ [v1.4.0](external_link) (2024-07-30)
    - __ Features:
    - __ Bug Fixes:
  - __ [v1.3.8](external_link) (2024-07-22)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.3.7](external_link) (2024-07-15)
    - __ Bug Fixes:
  - __ [v1.3.6](external_link) (2024-07-08)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.3.5](external_link) (2024-07-06)
    - __ Bug Fixes:
  - __ [v1.3.4](external_link) (2024-07-05)
    - __ Bug Fixes:
  - __ [v1.3.3](external_link) (2024-07-04)
    - __ Bug Fixes:
  - __ [v1.3.2](external_link) (2024-07-02)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.3.1](external_link) (2024-07-01)
    - __ Bug Fixes:
  - __ [v1.3.0](external_link) (2024-06-28)
    - __ Features:
    - __ Improvements:
  - __ [v1.2.2](external_link) (2024-06-19)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.2.1](external_link) (2024-06-18)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.2.0](external_link) (2024-06-11)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.1.2](external_link) (2024-06-05)
    - __ Bug Fixes:
  - __ [v1.1.1](external_link) (2024-06-05)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.1.0](external_link) (2024-05-24)
    - __ Features:
  - __ [v1.0.0](external_link)
    - __ Breaking Changes:
    - __ Improvements:

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v1.4.7](external_link) (2024-09-04)

###  __ Bug Fixes:

  * decode path parameters automatically



##  __ [v1.4.6](external_link) (2024-08-26)

###  __ Bug Fixes:

  * don't intercept typed structs

  * properly check for domain inclusion in json api router when installing




###  __ Improvements:

  * support new struct types w/ constraints



##  __ [v1.4.5](external_link) (2024-08-20)

###  __ Bug Fixes:

  * properly discover all necessary filter schemas



###  __ Improvements:

  * optimize post-operation field loading logic

  * don't show tags for resources w/o routes in schema




##  __ [v1.4.4](external_link) (2024-08-16)

###  __ Improvements:

  * support nested `base_route`s



##  __ [v1.4.3](external_link) (2024-08-08)

###  __ Improvements:

  * new [`AshJsonApi.Type`](external_link) behaviour, and support returning regular maps



##  __ [v1.4.2](external_link) (2024-08-08)

###  __ Bug Fixes:

  * use a list when calling `Module.concat`



##  __ [v1.4.1](external_link) (2024-07-30)

###  __ Improvements:

  * properly install domain with `Module.concat` in AshJsonApi router

  * include multipart parser in installer




##  __ [v1.4.0](external_link) (2024-07-30)

###  __ Features:

  * [[`Ash.Type.File`](3.4.1/Ash.Type.File.html)] Ash.Type.File support (#214)



See [`AshJsonApi.Plug.Parser`](external_link) for usage information.

###  __ Bug Fixes:

  * [attributes] reject allow_nil_input fields in required_write_attributes (#219)

  * [Open API] properly document query_params from generic routes in open api spec

  * [Open API] only include referenced resource types in definitions

  * [Open API] properly spec (and test the spec) for actions that return resources




##  __ [v1.3.8](external_link) (2024-07-22)

###  __ Bug Fixes:

  * [[`AshJsonApi.Router`](external_link)] don't double escape `modify_open_api`



###  __ Improvements:

  * [[`AshJsonApi.Router`](external_link)] automatically infer the `prefix` instead of relying on configuration

  * [[`mix ash.patch.extend`](3.4.1/Mix.Tasks.Ash.Patch.Extend.html)] add [`AshJsonApi`](external_link) extender

  * [`mix ash_json_api.install`] add installer for AshJsonApi




##  __ [v1.3.7](external_link) (2024-07-15)

###  __ Bug Fixes:

  * [open api] escape `modify_open_api_schema` option since it can be a 3/tuple

  * [errors] handle unknown errors in `log_errors/2`

  * [serialization] relationship resource identifiers don't need to check the `id` type

  * [serialization] properly reference related record in linkage

  * [serialization] ensure id is always coming back as a string




##  __ [v1.3.6](external_link) (2024-07-08)

###  __ Bug Fixes:

  * [open api] properly match enum types on input/output

  * [errors] Avoid raising the condition converting the regex to string. (#204)




###  __ Improvements:

  * [content type negotation] honor `allow_all_media_type_params?` in `content-type` as well



##  __ [v1.3.5](external_link) (2024-07-06)

###  __ Bug Fixes:

  * [bugfix] use `conn.private`, not `conn[:private]`



##  __ [v1.3.4](external_link) (2024-07-05)

###  __ Bug Fixes:

  * [errors] add leading slash to JSON pointer in schema errors (#199)

  * [open api] avoid failing openapi generation for non existing resource actions (#198)




##  __ [v1.3.3](external_link) (2024-07-04)

###  __ Bug Fixes:

  * [serialization] ensure generic action bodies, both in & out are serialized properly

  * [open api] properly fetch nested types

  * [open api] show embedded types when used with `:struct`

  * [open api] ensure `action.require_attributes` is stringified in json schema

  * [fields parameter] honor resource-level default_fields




##  __ [v1.3.2](external_link) (2024-07-02)

###  __ Bug Fixes:

  * [routes] ensure that context is threaded through for all actions

  * [open api] properly require `success` in return-less actions

  * [open api] typo when checking for resource's derive_filter? flag

  * [open api] not all accepted attributes have to be public

  * [open api] fix sort regex to be a valid regex

  * [open api] don't use `anyOf` for nullability

  * [open api] don't generate bodies for delete requests

  * [open api] use `Enum.uniq` when uwnrapping any_of types

  * [open api] detect all cases where a filter must be generated




###  __ Improvements:

  * [open api] use empty example for filter

  * [routes] support for query parameters using `query_params` route option




##  __ [v1.3.1](external_link) (2024-07-01)

###  __ Bug Fixes:

  * [open api] use strings for enum values

  * [open api] use `strings` for includes/sort properly, add regex for sort




##  __ [v1.3.0](external_link) (2024-06-28)

###  __ Features:

  * [calculations] add support for calculation inputs via field_inputs query param (#187)

  * [routes] support generic actions with no returns in routes

  * [routes] support `modify_conn/4`

  * [routes] support `:read` actions in `:post` request

  * [routes] generic action support for all basic route types

  * [routes] new `route/3` type for arbitrary generic actions

  * [AshJsonApi.Resource] support `derive_filter?` on both resource and route level

  * [AshJsonApi.Resource] support `derive_sort?` on both resource and route level




###  __ Improvements:

  * [OpenApi] implement [`Ash.Type.Map`](3.4.1/Ash.Type.Map.html) json schema

  * [OpenApi] support unions in schemas

  * [OpenApi] use "any object" type for filter in json schema

  * [OpenApi] fully specify filter in open api schema

  * [OpenApi] show all sortable fields in json schema

  * [OpenApi] Use resource descriptions in generated schema files if present (#184)

  * [OpenApi] show embeds in json schema and openapi

  * [errors] Add defimpl for NoSuchInput error (#181)




##  __ [v1.2.2](external_link) (2024-06-19)

###  __ Bug Fixes:

  * [include] properly still perform includes on record fetched from path



###  __ Improvements:

  * [OpenApi] newtype/enum support for json_schema as well

  * [OpenApi] render enums as enums in open api




##  __ [v1.2.1](external_link) (2024-06-18)

###  __ Bug Fixes:

  * [routes] don't raise error including on get related endpoints

  * [routes] validate relationships from routes at compile time

  * [errors] don't show exceptions if `show_raised_errors?` is `false`

  * [errors] add missing fields from `InvalidField`

  * [OpenApi] don't expose `action.name` over api docs

  * [AshJsonApi.Domain] resource comes from the route on domains




###  __ Improvements:

  * [routes] support `name` on `routes`, use in description and operationId

  * [AshJsonApi.Resource] verify includes list at compile time

  * [AshJsonApi.Domain] allow setting a `resource` second option on domain's `base_route` entity




##  __ [v1.2.0](external_link) (2024-06-11)

###  __ Features:

  * [AshJsonApi.Domain] add `base_route` constructor to domain router



###  __ Bug Fixes:

  * [AshJsonApi.Resource] properly reflect that `default: false` makes a non required attribute

  * [AshJsonApi.Resource] non-public attributes can be accepted and required in 3.0

  * [AshJsonApi.Resource] support `require_attributes` in json schema

  * [AshJsonApi.Resource] ensure that resource-level default_fields are honored




###  __ Improvements:

  * [attributes] non-public attributes can be accepted in 3.0



##  __ [v1.1.2](external_link) (2024-06-05)

###  __ Bug Fixes:

  * [includes] ensure we don't drop includes (as a result of deduplicating them)



##  __ [v1.1.1](external_link) (2024-06-05)

###  __ Bug Fixes:

  * [includes] deduplicate includes list while building it



###  __ Improvements:

  * [metadata] add ability to supply custom route metadata (#152)



##  __ [v1.1.0](external_link) (2024-05-24)

###  __ Features:

  * [AshJsonApi.Domain] support routes defined on the domain



##  __ [v1.0.0](external_link)

This changelog has been restarted. See `/documentation/0.x-CHANGELOG.md` for previous changelogs.

###  __ Breaking Changes:

  * [AshJsonApi.Resource] relationship routes now depend on the action taking an argument with the same name as the relationship. See the upgrade for more.

  * [AshJsonApi.ToJsonApiError] Introduced [`AshJsonApi.ToJsonApiError`](external_link) to convert errors to JSON API errors. This brings it more in line with other Ash extensions.




###  __ Improvements:

  * [AshJsonApi.Resource] create/update/destroy actions now use bulk operations
  * [AshJsonApi.Router] router is now a dynamic hand-written router. This prevents compile time dependencies.
  * [AshJsonApi.Error] honor path when building source pointers



[ ← Previous Page  DSL: AshJsonApi.Domain  ](external_link)
