# AshGraphql.Type — ash_graphql v1.3.3

Project: ash_graphql v1.3.3

## Table of Contents

- [ __ View Source ](external_link) AshGraphql.Type behaviour (ash_graphql v1.3.3)
- __ Summary
  - Callbacks
- __ Callbacks
- graphql_define_type?(constraints)
- graphql_describe_enum_value(atom)
- graphql_input_type(constraints)
  - __ Regular Types
  - __ NewTypes
- graphql_rename_value(constraints)
- graphql_type(constraints)
  - __ Regular Types
  - __ NewTypes
- graphql_unnested_unions(constraints)

__

Search documentation of ash_graphql __ __

__ Settings

#  [ __ View Source ](external_link) AshGraphql.Type behaviour (ash_graphql v1.3.3)

Callbacks used to enrich types with GraphQL-specific metadata.

#  __ Summary

##  Callbacks

graphql_define_type?(constraints)

Used for maps/enums/unions that _would_ define a type automatically, to disable them.

graphql_describe_enum_value(atom)

Used for [`Ash.Type.Enum`](3.4.1/Ash.Type.Enum.html) to provide a description for individual values. For example

graphql_input_type(constraints)

Sets the name of the graphql input type for a given Ash type. For example: `:weekday`.

graphql_rename_value(constraints)

Used for [`Ash.Type.Enum`](3.4.1/Ash.Type.Enum.html) to rename individual values. For example

graphql_type(constraints)

Sets the name of the graphql type for a given Ash type. For example: `:weekday`.

graphql_unnested_unions(constraints)

Used for map/embedded types embedded in unions, to avoid nesting them in a key by their name.

#  __ Callbacks

__ Link to this callback

# graphql_define_type?(constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback graphql_define_type?([Ash.Type.constraints](3.4.1/Ash.Type.html#t:constraints/0)()) :: false

Used for maps/enums/unions that _would_ define a type automatically, to disable them.

__ Link to this callback

# graphql_describe_enum_value(atom)

[ __ View Source ](external_link) (optional)
    
    
    @callback graphql_describe_enum_value([atom](external_link)()) :: [String.t](external_link)() | nil

Used for [`Ash.Type.Enum`](3.4.1/Ash.Type.Enum.html) to provide a description for individual values. For example:
    
    
    defmodule MyEnum do
    use Ash.Type.Enum, values: [:foo, :bar, :baz]
    
      def graphql_describe_enum_value(:baz), do: "A baz"
      def graphql_describe_enum_value(_), do: nil
    end

__ Link to this callback

# graphql_input_type(constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback graphql_input_type([Ash.Type.constraints](3.4.1/Ash.Type.html#t:constraints/0)()) :: [atom](external_link)()

Sets the name of the graphql input type for a given Ash type. For example: `:weekday`.

This will do different things depending on the type you're adding it to.

##  __ Regular Types

This expresses that you will define a custom type for representing this input in your graphql

##  __ NewTypes

If it is a subtype of a union, or map/keyword with `fields` the type will be _created_ with that name. So you can use this to decide what it will be named. Otherwise, it behaves as stated above for regular types.

__ Link to this callback

# graphql_rename_value(constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback graphql_rename_value([Ash.Type.constraints](3.4.1/Ash.Type.html#t:constraints/0)()) :: [String.t](external_link)() | [atom](external_link)()

Used for [`Ash.Type.Enum`](3.4.1/Ash.Type.Enum.html) to rename individual values. For example:
    
    
    defmodule MyEnum do
      use Ash.Type.Enum, values: [:foo, :bar, :baz]
    
      def graphql_rename_value(:baz), do: :buz
      def graphql_rename_value(other), do: other
    end

__ Link to this callback

# graphql_type(constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback graphql_type([Ash.Type.constraints](3.4.1/Ash.Type.html#t:constraints/0)()) :: [atom](external_link)()

Sets the name of the graphql type for a given Ash type. For example: `:weekday`.

This will do different things depending on the type you're adding it to.

##  __ Regular Types

This expresses that you will define a custom type for representing this in your graphql

##  __ NewTypes

If it is a subtype of a union, or map/keyword with `fields` the type will be _created_ with that name. So you can use this to decide what it will be named. Otherwise, it behaves as stated above for regular types.

__ Link to this callback

# graphql_unnested_unions(constraints)

[ __ View Source ](external_link) (optional)
    
    
    @callback graphql_unnested_unions([Ash.Type.constraints](3.4.1/Ash.Type.html#t:constraints/0)()) :: [[atom](external_link)()]

Used for map/embedded types embedded in unions, to avoid nesting them in a key by their name.

See [the unions guide](external_link) for more.
