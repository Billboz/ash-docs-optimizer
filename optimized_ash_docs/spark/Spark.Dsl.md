# Spark.Dsl — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl behaviour (spark v2.2.24)
  - __ Schemas/Data Types
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- entity()
- opts()
- section()
- t()
- __ Callbacks
- explain(t, opts)
- handle_before_compile(keyword)
- handle_opts(keyword)
- init(opts)
- verify(module, keyword)
- __ Functions
- handle_fragments(dsl_config, fragments)
- is?(module, type)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl behaviour (spark v2.2.24)

The primary entry point for adding a DSL to a module.

To add a DSL to a module, add `use Spark.Dsl, ...options`. The options supported with `use Spark.Dsl` are:

  * `:single_extension_kinds` (list of [`atom/0`](external_link)) - The extension kinds that are allowed to have a single value. For example: `[:data_layer]` The default value is `[]`.

  * `:many_extension_kinds` (list of [`atom/0`](external_link)) - The extension kinds that can have multiple values. e.g `[notifiers: [Notifier1, Notifier2]]` The default value is `[]`.

  * `:untyped_extensions?` ([`boolean/0`](external_link)) - Whether or not to support an `extensions` key which contains untyped extensions The default value is `true`.

  * `:extension_kind_types` ([`keyword/0`](external_link)) - A keyword list of extension kinds and their types, e.g `[authorizers: {:list, {:behaviour, Ash.Authorizer}}]` The default value is `[]`.

  * `:extension_kind_docs` ([`keyword/0`](external_link)) - A keyword list of extension kinds and a short documentation snippet to be used when autocompleting that option The default value is `[]`.

  * `:default_extensions` ([`keyword/0`](external_link)) - The extensions that are included by default. e.g `[data_layer: Default, notifiers: [Notifier1]]` Default values for single extension kinds are overwritten if specified by the implementor, while many extension kinds are appended to if specified by the implementor. The default value is `[]`.

  * `:opt_schema` ([`keyword/0`](external_link)) - A schema for additional options to accept when calling `use YourSpark` The default value is `[]`.

  * `:opts_to_document` \- A list of [`atom/0`](external_link) or `:all`. Spark automatically detects options and documents them in `@moduledoc`. You can instruct Spark to use only a subset of options, e.g. `opts_to_document: [:fragments]`. The default value is `:all`.




See the callbacks defined in this module to augment the behavior/compilation of the module getting a Dsl.

##  __ Schemas/Data Types

For more information, see [`Spark.Options`](external_link).

#  __ Summary

##  Types

entity()

opts()

section()

t()

##  Callbacks

explain(t, opts)

Validate/add options. Those options will be passed to `handle_opts` and `handle_before_compile`

handle_before_compile(keyword)

Handle options in the context of the module, after all extensions have been processed. Must return a `quote` block.

handle_opts(keyword)

Handle options in the context of the module. Must return a `quote` block.

init(opts)

Validate/add options. Those options will be passed to `handle_opts` and `handle_before_compile`

verify(module, keyword)

A callback that is called in the `after_verify` hook. Only runs on versions of Elixir >= 1.14.0

##  Functions

handle_fragments(dsl_config, fragments)

is?(module, type)

#  __ Types

__ Link to this type

# entity()

[ __ View Source ](external_link)
    
    
    @type entity() :: %Spark.Dsl.Entity{
      args: [term](external_link)(),
      auto_set_fields: [term](external_link)(),
      deprecations: [term](external_link)(),
      describe: [term](external_link)(),
      docs: [term](external_link)(),
      entities: [term](external_link)(),
      examples: [term](external_link)(),
      hide: [term](external_link)(),
      identifier: [term](external_link)(),
      imports: [term](external_link)(),
      links: [term](external_link)(),
      modules: [term](external_link)(),
      name: [term](external_link)(),
      no_depend_modules: [term](external_link)(),
      recursive_as: [term](external_link)(),
      schema: [term](external_link)(),
      singleton_entity_keys: [term](external_link)(),
      snippet: [term](external_link)(),
      target: [term](external_link)(),
      transform: [term](external_link)()
    }

__ Link to this type

# opts()

[ __ View Source ](external_link)
    
    
    @type opts() :: [keyword](external_link)()

__ Link to this type

# section()

[ __ View Source ](external_link)
    
    
    @type section() :: %Spark.Dsl.Section{
      auto_set_fields: [term](external_link)(),
      deprecations: [term](external_link)(),
      describe: [term](external_link)(),
      docs: [term](external_link)(),
      entities: [term](external_link)(),
      examples: [term](external_link)(),
      imports: [term](external_link)(),
      links: [term](external_link)(),
      modules: [term](external_link)(),
      name: [term](external_link)(),
      no_depend_modules: [term](external_link)(),
      patchable?: [term](external_link)(),
      schema: [term](external_link)(),
      sections: [term](external_link)(),
      snippet: [term](external_link)(),
      top_level?: [term](external_link)()
    }

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [map](external_link)()

#  __ Callbacks

__ Link to this callback

# explain(t, opts)

[ __ View Source ](external_link)
    
    
    @callback explain(t(), opts()) :: [String.t](external_link)() | nil

Validate/add options. Those options will be passed to `handle_opts` and `handle_before_compile`

__ Link to this callback

# handle_before_compile(keyword)

[ __ View Source ](external_link)
    
    
    @callback handle_before_compile([keyword](external_link)()) :: [Macro.t](external_link)()

Handle options in the context of the module, after all extensions have been processed. Must return a `quote` block.

__ Link to this callback

# handle_opts(keyword)

[ __ View Source ](external_link)
    
    
    @callback handle_opts([keyword](external_link)()) :: [Macro.t](external_link)()

Handle options in the context of the module. Must return a `quote` block.

If you want to persist anything in the DSL persistence layer, use `@persist {:key, value}`. It can be called multiple times to persist multiple times.

__ Link to this callback

# init(opts)

[ __ View Source ](external_link)
    
    
    @callback init(opts()) :: {:ok, opts()} | {:error, [String.t](external_link)() | [term](external_link)()}

Validate/add options. Those options will be passed to `handle_opts` and `handle_before_compile`

__ Link to this callback

# verify(module, keyword)

[ __ View Source ](external_link)
    
    
    @callback verify(
      [module](external_link)(),
      [keyword](external_link)()
    ) :: [term](external_link)()

A callback that is called in the `after_verify` hook. Only runs on versions of Elixir >= 1.14.0

#  __ Functions

__ Link to this function

# handle_fragments(dsl_config, fragments)

[ __ View Source ](external_link)

__ Link to this function

# is?(module, type)

[ __ View Source ](external_link)
