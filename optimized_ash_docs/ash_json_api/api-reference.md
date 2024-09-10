# API Reference — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) API Reference ash_json_api v1.4.7
  - __ Modules
  - __ Mix Tasks

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash_json_api v1.4.7

##  __ Modules

[AshJsonApi](external_link)

Introspection functions for [`AshJsonApi`](external_link) domains.

[AshJsonApi.Domain](external_link)

The entrypoint for adding JSON:API behavior to an Ash domain

[AshJsonApi.Domain.BaseRoute](external_link)

Introspection target for base routes in [`AshJsonApi.Domain`](external_link)

[AshJsonApi.Domain.Info](external_link)

Introspection helpers for AshJsonApi.Domain

[AshJsonApi.Domain.JsonApi.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Delete](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Delete.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.DeleteFromRelationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.DeleteFromRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Get](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Get.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Index](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Index.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Patch](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Patch.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.PatchRelationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.PatchRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Post](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Post.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.PostToRelationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.PostToRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Related](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Related.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Relationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Relationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Route](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.JsonApi.Routes.Routes.Route.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.BaseRoute.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Delete](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Delete.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.DeleteFromRelationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.DeleteFromRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Get](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Get.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Index](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Index.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Patch](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Patch.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.PatchRelationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.PatchRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Post](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Post.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.PostToRelationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.PostToRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Related](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Related.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Relationship](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Relationship.Options](external_link)

Mod Docs

[AshJsonApi.Domain.JsonApi.Routes.Route](external_link)

Mod docs

[AshJsonApi.Domain.JsonApi.Routes.Route.Options](external_link)

Mod Docs

[AshJsonApi.Domain.OpenApi](external_link)

MOD DOCS

[AshJsonApi.Domain.OpenApi.Options](external_link)

Mod Docs

[AshJsonApi.Domain.Routes](external_link)

MOD DOCS

[AshJsonApi.Domain.Verifiers.VerifyActions](external_link)

Verifies that all actions are valid for each route.

[AshJsonApi.Domain.Verifiers.VerifyHasType](external_link)

Verifies that a resource has a type if it has any routes that need it.

[AshJsonApi.Domain.Verifiers.VerifyQueryParams](external_link)

Verify query params are not reserved or shadowed by the route

[AshJsonApi.Domain.Verifiers.VerifyRelationships](external_link)

Verifies that any routes that reference a relationship reference a public one

[AshJsonApi.Error](external_link)

Represents an AshJsonApi Error

[AshJsonApi.Error.InvalidBody](external_link)

Returned when the request body provided is invalid

[AshJsonApi.Error.InvalidField](external_link)

Returned when a field is requested that does not exist or is invalid

[AshJsonApi.Error.InvalidHeader](external_link)

Returned when a header provided is invalid

[AshJsonApi.Error.InvalidIncludes](external_link)

Returned when the includes string provided in the query parameter `include` is invalid.

[AshJsonApi.Error.InvalidPagination](external_link)

Returned when one of the nested parameters provided in the query parameter `page` is invalid

[AshJsonApi.Error.InvalidQuery](external_link)

Returned when the query provided is invalid

[AshJsonApi.Error.InvalidType](external_link)

Returned when a field is requested for a type that does not exist or is invalid

[AshJsonApi.Error.NotFound](external_link)

Returned when a record was explicitly requested, but could not be found.

[AshJsonApi.Error.UnacceptableMediaType](external_link)

Returned when the client does not provide (via the `Content-Type` header) the correct json API media type: application/vnd.api+json

[AshJsonApi.Error.UnsupportedMediaType](external_link)

Returned when the client does not accept (via the `Accept` header) the json API media type: application/vnd.api+json

[AshJsonApi.Igniter](external_link)

Codemods and utilities for working with AshJsonApi & Igniter

[AshJsonApi.OpenApi](external_link)

Provides functions for generating schemas and operations for OpenApi definitions.

[AshJsonApi.Plug.Parser](external_link)

Extracts ash multipart request body.

[AshJsonApi.Resource](external_link)

The entrypoint for adding JSON:API behavior to a resource"

[AshJsonApi.Resource.Info](external_link)

Introspection helpers for AshJsonApi.Resource

[AshJsonApi.Resource.JsonApi.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Delete](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Delete.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.DeleteFromRelationship](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.DeleteFromRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Get](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Get.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Index](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Index.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Patch](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Patch.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.PatchRelationship](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.PatchRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Post](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Post.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.PostToRelationship](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.PostToRelationship.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Related](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Related.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Relationship](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Relationship.Options](external_link)

Mod Docs

[AshJsonApi.Resource.JsonApi.Routes.Route](external_link)

Mod docs

[AshJsonApi.Resource.JsonApi.Routes.Route.Options](external_link)

Mod Docs

[AshJsonApi.Resource.PrimaryKey](external_link)

MOD DOCS

[AshJsonApi.Resource.PrimaryKey.Options](external_link)

Mod Docs

[AshJsonApi.Resource.Route](external_link)

Represents a route for a resource

[AshJsonApi.Resource.Routes](external_link)

MOD DOCS

[AshJsonApi.Resource.Routes.Options](external_link)

Mod Docs

[AshJsonApi.Resource.Verifiers.VerifyActions](external_link)

Verifies that all actions are valid for each route.

[AshJsonApi.Resource.Verifiers.VerifyHasType](external_link)

Verifies that a resource has a type if it has any routes that need it.

[AshJsonApi.Resource.Verifiers.VerifyIncludes](external_link)

Verifies that all includes are valid public relationships

[AshJsonApi.Resource.Verifiers.VerifyQueryParams](external_link)

Verify query params are not reserved or shadowed by the route

[AshJsonApi.Resource.Verifiers.VerifyRelationships](external_link)

Verifies that any routes that reference a relationship reference a public one

[AshJsonApi.Router](external_link)

Use this module to create a router for your AshJsonApi.

[AshJsonApi.ToJsonApiError](external_link)

A protocol for turning an Ash exception into an AshJsonApi.Error

[AshJsonApi.Type](external_link)

The behaviour for customizing how a datatype is rendered and written in AshJsonApi.

##  __ Mix Tasks

[mix ash_json_api.install](external_link)

Installs AshJsonApi. Should be run with `mix igniter.install ash_json_api`

[ Next Page →  Home  ](external_link)
