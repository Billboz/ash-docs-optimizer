# Upgrading to 1.0 — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) Upgrading to 1.0
  - __ `:datetime` is now the default representation for datetimes
  - __ `allow_non_null_mutation_arguments?` is now `true` always
  - __ Automagic atom/union/map types are no more
    - __ What you'll need to change
  - __ The `managed_relationships.auto?` option now defaults to `true`
  - __ `Ash.Api` is now [`Ash.Domain`](3.4.1/Ash.Domain.html) in Ash 3.0

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) Upgrading to 1.0

AshGraphql 1.0 is a major release that introduces 3.0 support as well as a few breaking changes for AshGraphql itself.

##  __ `:datetime` is now the default representation for datetimes

For backwards compatibility, pre-1.0 we had users configure `:utc_datetime_type` to `:datetime` as part of the getting started guide. This is now the default. The configuration remains, but has been renamed. It was improperly `config :ash, :utc_datetime_type`, and it is now `config :ash_graphql, :utc_datetime_type`. If you are a user who is relying on the original behavior that had it default to `:naive_datetime`, you can set the following configuration:
    
    
    config :ash_graphql, :utc_datetime_type, :naive_datetime

Otherwise, if you have the following in your config, you can remove it.
    
    
    config :ash, :utc_datetime_type, :datetime

##  __ `allow_non_null_mutation_arguments?` is now `true` always

You can remove this code from your config.
    
    
    config :ash_graphql, :allow_non_null_mutation_arguments?, true

Pre 1.0, the `input` argument for mutations was always allowed to be `null`. In 1.0, it will be required if there are any non-null inputs inside of the object. You may need to address clients that are expecting to be able to send `null`. Even if they _were_ sending `null` in those cases, it would have been an error, so it is unlikely that you will have to make any changes here.

* * *

##  __ Automagic atom/union/map types are no more

Pre 1.0: AshGraphql automatically generated types for attributes/arguments that were atom/union/map types, giving them a name like `postStatus`, for an attribute `status` on a resource `post`. While convenient, this incurred _significant_ internal complexity, and had room for strange ambiguity. For example, if you had two actions, that each had an argument called `:status`, and that `:status` was an enum with different values, you would get a conflict at compile time due to conflicting type names.

###  __ What you'll need to change

AshGraphql will now _only_ generate types for types defined using [`Ash.Type.NewType`](3.4.1/Ash.Type.NewType.html) or [`Ash.Type.Enum`](3.4.1/Ash.Type.Enum.html). For example, if you had:
    
    
    attribute :post_status, :atom, constraints: [one_of: [:active, :archived]]

in 3.0 this attribute would display as a `:string`. To fix this, you would define an [`Ash.Type.Enum`](3.4.1/Ash.Type.Enum.html):
    
    
    defmodule MyApp.PostStatus do
      use Ash.Type.Enum, values: [:active, :archived]
    
      def graphql_type(_), do: :post_status
      def graphql_input_type(_), do: :post_status
    end

Then you could use it in your attribute:
    
    
    attribute :post_status, MyApp.PostStatus

The same goes for map types with the `:fields` constraint, as well as union types, except you must define those using [`Ash.Type.NewType`](3.4.1/Ash.Type.NewType.html). For example:
    
    
    attribute :scale, :union, constraints: [
      types: [
        whole: [
          type: :integer
        ],
        fractional: [
          type: :decimal
        ]
      ]
    ]

Here you would get a compile error, indicating that we cannot determine a type for `:union`. To resolve this, you would define an [`Ash.Type.NewType`](3.4.1/Ash.Type.NewType.html), like so:
    
    
    defmodule MyApp.Scale do
      use Ash.Type.NewType, subtype_of: :union, constraints: [
        types: [
          whole: [
            type: :integer
          ],
          fractional: [
            type: :decimal
          ]
        ]
      ]
    
      def graphql_type(_), do: :scale
      def graphql_input_type(_), do: :scale
    end

Then you could use it in your application like so:
    
    
    attribute :scale, MyApp.Scale

* * *

##  __ The `managed_relationships.auto?` option now defaults to `true`

Pre 1.0, you would need to either configure managed_relationships manually, for example:
    
    
    managed_relationships do
      managed_relationship :create, :comments
    end

Or set `auto?` to `true`, which would derive appropriate configurations for any action that had arguments with corresponding `manage_relationship` changes for them. This is unnecessarily verbose and there isn't really a time where you wouldn't want an input type derived for an argument that uses `change manage_relationship`, so the default for `auto?` is now `true`. This only affects arguments who's type is `:map`, or `{:array, :map}`.

A new option has been added to `managed_relationship` to allow you to bypass this type generation if necessary:
    
    
    managed_relationships do
      managed_relationship :create, :comments, ignore?: true
    end

##  __ `Ash.Api` is now [`Ash.Domain`](3.4.1/Ash.Domain.html) in Ash 3.0

Your Absinthe schema file (ie. `MyApp.Schema`) will need all references to `api` updated to be `domain`. eg.
    
    
    @domains [MyApp.Domain1, MyApp.Domain2]
    
    use AshGraphql, domains: @domains

[ ← Previous Page  Relay  ](external_link)

[ Next Page →  DSL: AshGraphql.Domain  ](external_link)
