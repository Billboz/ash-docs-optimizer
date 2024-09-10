# Spark.Dsl.Entity — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Entity (spark v2.2.24)
  - __ Example
- __ Summary
  - Types
- __ Types
- args()
- auto_set_fields()
- deprecations()
- describe()
- docs()
- entities()
- examples()
- hide()
- id()
- imports()
- links()
- modules()
- name()
- no_depend_modules()
- recursive_as()
- singleton_entity_keys()
- snippet()
- t()
- target()
- transform()

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Entity (spark v2.2.24)

Declares a DSL entity.

A dsl entity represents a dsl constructor who's resulting value is a struct. This lets the user create complex objects with arbitrary(mostly) validation rules.

The lifecycle of creating entities is complex, happening as Elixir is compiling the modules in question. Some of the patterns around validating/transforming entities have not yet solidified. If you aren't careful and don't follow the guidelines listed here, you can have subtle and strange bugs during compilation. Anything not isolated to simple value validations should be done in `transformers`. See [`Spark.Dsl.Transformer`](external_link).

An entity has a `target` indicating which struct will ultimately be built. An entity also has a `schema`. This schema is used for documentation, and the options are validated against it before continuing on with the DSL.

To create positional arguments to the builder, use `args`. The values provided to `args` need to be in the provided schema as well. They will be positional arguments in the same order that they are provided in the `args` key.

`auto_set_fields` will set the provided values into the produced struct (they do not need to be included in the schema).

`transform` is a function that takes a created struct and can alter it. This happens immediately after handling the DSL options, and can be useful for setting field values on a struct based on other values in that struct. If you need things that aren't contained in that struct, use an [`Spark.Dsl.Transformer`](external_link). This function returns `{:ok, new_entity}` or `{:error, error}`, so this can also be used to validate the entity.

`entities` allows you to specify a keyword list of nested entities. Nested entities are stored on the struct in the corresponding key, and are used in the same way entities are otherwise.

`singleton_entity_keys` specifies a set of entity keys (specified above) that should only have a single value. This will be validated and unwrapped into `nil` | `single_value` on success.

`identifier` expresses that a given entity is unique by that field, validated by the DSL.

##  __ Example
    
    
    @my_entity %Spark.Dsl.Entity{
      name: :my_entity,
      target: MyStruct,
      schema: [my_field: [type: :atom, required: false]]
    }

Once compiled by Spark, entities can be invoked with a keyword list:
    
    
    my_entity my_field: :value

Or with a do block:
    
    
    my_entity do
      my_field :value
    end

For a full example, see [`Spark.Dsl.Extension`](external_link).

#  __ Summary

##  Types

args()

Specifies positional arguments for an Entity.

auto_set_fields()

Set the provided key value pairs in the produced struct. These fields do not need to be included in the Entity's schema.

deprecations()

describe()

User provided documentation.

docs()

Internal field. Not set by user.

entities()

A keyword list of nested entities.

examples()

hide()

id()

imports()

links()

modules()

name()

no_depend_modules()

recursive_as()

singleton_entity_keys()

snippet()

t()

target()

Defines the struct that will be built from this entity definition.

transform()

Specifies a function that will run on the target struct after building.

#  __ Types

__ Link to this type

# args()

[ __ View Source ](external_link)
    
    
    @type args() :: [[atom](external_link)() | {:optional, [atom](external_link)()} | {:optional, [atom](external_link)(), [any](external_link)()}]

Specifies positional arguments for an Entity.

An entity declared like this:
    
    
    @entity %Spark.Dsl.Entity{
      name: :entity,
      target: Entity,
      schema: [
        positional: [type: :atom, required: true],
        other: [type: :atom, required: false],
      ],
      args: [:positional]
    }

Can be instantiated like this:
    
    
    entity :positional_argument do
      other :other_argument
    end

__ Link to this type

# auto_set_fields()

[ __ View Source ](external_link)
    
    
    @type auto_set_fields() :: [keyword](external_link)([any](external_link)())

Set the provided key value pairs in the produced struct. These fields do not need to be included in the Entity's schema.

__ Link to this type

# deprecations()

[ __ View Source ](external_link)
    
    
    @type deprecations() :: [keyword](external_link)([String.t](external_link)())

__ Link to this type

# describe()

[ __ View Source ](external_link)
    
    
    @type describe() :: [String.t](external_link)()

User provided documentation.

Documentation provided in a `Entity`'s `describe` field will be included by [`Spark`](external_link) in any generated documentation that includes the `Entity`.

__ Link to this type

# docs()

[ __ View Source ](external_link)
    
    
    @type docs() :: [String.t](external_link)()

Internal field. Not set by user.

__ Link to this type

# entities()

[ __ View Source ](external_link)
    
    
    @type entities() :: [keyword](external_link)(t())

A keyword list of nested entities.

__ Link to this type

# examples()

[ __ View Source ](external_link)
    
    
    @type examples() :: [[String.t](external_link)()]

__ Link to this type

# hide()

[ __ View Source ](external_link)
    
    
    @type hide() :: [[atom](external_link)()]

__ Link to this type

# id()

[ __ View Source ](external_link)
    
    
    @type id() :: [term](external_link)()

__ Link to this type

# imports()

[ __ View Source ](external_link)
    
    
    @type imports() :: [[module](external_link)()]

__ Link to this type

# links()

[ __ View Source ](external_link)
    
    
    @type links() :: [keyword](external_link)([[String.t](external_link)()]) | nil

__ Link to this type

# modules()

[ __ View Source ](external_link)
    
    
    @type modules() :: [[atom](external_link)()]

__ Link to this type

# name()

[ __ View Source ](external_link)
    
    
    @type name() :: [atom](external_link)() | nil

__ Link to this type

# no_depend_modules()

[ __ View Source ](external_link)
    
    
    @type no_depend_modules() :: [[atom](external_link)()]

__ Link to this type

# recursive_as()

[ __ View Source ](external_link)
    
    
    @type recursive_as() :: [atom](external_link)() | nil

__ Link to this type

# singleton_entity_keys()

[ __ View Source ](external_link)
    
    
    @type singleton_entity_keys() :: [[atom](external_link)()]

__ Link to this type

# snippet()

[ __ View Source ](external_link)
    
    
    @type snippet() :: [String.t](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Spark.Dsl.Entity{
      args: args(),
      auto_set_fields: auto_set_fields(),
      deprecations: deprecations(),
      describe: describe(),
      docs: docs(),
      entities: entities(),
      examples: examples(),
      hide: hide(),
      identifier: id(),
      imports: imports(),
      links: links(),
      modules: modules(),
      name: name(),
      no_depend_modules: no_depend_modules(),
      recursive_as: recursive_as(),
      schema: [Spark.Options.schema](external_link)(),
      singleton_entity_keys: singleton_entity_keys(),
      snippet: snippet(),
      target: target(),
      transform: transform()
    }

__ Link to this type

# target()

[ __ View Source ](external_link)
    
    
    @type target() :: [module](external_link)() | nil

Defines the struct that will be built from this entity definition.

The struct will need to have fields for all `entities`, `t:schema/0` fields, and `auto_set_fields/0`.

__ Link to this type

# transform()

[ __ View Source ](external_link)
    
    
    @type transform() :: {[module](external_link)(), function :: [atom](external_link)(), args :: [[any](external_link)()]} | nil

Specifies a function that will run on the target struct after building.
    
    
    @my_entity %Spark.Dsl.Entity{
      name: :my_entity,
      target: MyEntity,
      schema: [
        my_field: [type: :list, required: true]
      ],
      transform: {MyModule, :max_three_items, []}
    }
    
    def max_three_items(my_entity) do
      if length(my_entity.my_field) > 3 do
        {:error, "Can't have more than three items"}
      else
        {:ok, my_entity}
      end
    end
