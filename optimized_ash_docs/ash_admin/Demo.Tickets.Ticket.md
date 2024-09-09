# Demo.Tickets.Ticket — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) Demo.Tickets.Ticket (ash_admin v0.11.5)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- default_short_name()
- input(opts)
- input(opts, action)
- primary_key_matches?(left, right)

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) Demo.Tickets.Ticket (ash_admin v0.11.5)

#  __ Summary

##  Types

t()

##  Functions

default_short_name()

input(opts)

Validates that the keys in the provided input are valid for at least one action on the resource.

input(opts, action)

Same as `input/1`, except restricts the keys to values accepted by the action provided.

primary_key_matches?(left, right)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Demo.Tickets.Ticket{
      __lateral_join_source__: [term](external_link)(),
      __meta__: [term](external_link)(),
      __metadata__: [term](external_link)(),
      __order__: [term](external_link)(),
      aggregates: [term](external_link)(),
      calculations: [term](external_link)(),
      comments: [term](external_link)(),
      description: [term](external_link)(),
      destination_links: [term](external_link)(),
      destination_links_join_assoc: [term](external_link)(),
      id: [term](external_link)(),
      inserted_at: [term](external_link)(),
      metadata: [term](external_link)(),
      metadatas: [term](external_link)(),
      organization: [term](external_link)(),
      organization_id: [term](external_link)(),
      reporter: [term](external_link)(),
      reporter_id: [term](external_link)(),
      reporter_name: [term](external_link)(),
      representative: [term](external_link)(),
      representative_id: [term](external_link)(),
      response: [term](external_link)(),
      source_links: [term](external_link)(),
      source_links_join_assoc: [term](external_link)(),
      status: [term](external_link)(),
      subject: [term](external_link)(),
      updated_at: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# default_short_name()

[ __ View Source ](external_link)

__ Link to this function

# input(opts)

[ __ View Source ](external_link)
    
    
    @spec input(values :: [map](external_link)() | [Keyword.t](external_link)()) :: [map](external_link)() | [no_return](external_link)()

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g
    
    
    Resource
    |> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
    |> Ash.create()

__ Link to this function

# input(opts, action)

[ __ View Source ](external_link)
    
    
    @spec input(values :: [map](external_link)() | [Keyword.t](external_link)(), action :: [atom](external_link)()) :: [map](external_link)() | [no_return](external_link)()

Same as `input/1`, except restricts the keys to values accepted by the action provided.

__ Link to this function

# primary_key_matches?(left, right)

[ __ View Source ](external_link)
