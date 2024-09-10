# Spark.Dsl.Extension — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Extension behaviour (spark v2.2.24)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- t()
- __ Callbacks
- add_extensions()
- explain(map)
- module_imports()
- persisters()
- sections()
- transformers()
- verifiers()
- __ Functions
- doc(sections, depth \\\ 1)
- doc_index(sections, depth \\\ 1)
- expand_alias(ast, env)
- expand_alias_no_require(ast, env)
- expand_literals(ast, acc, fun)
- fetch_opt(resource, path, value, configurable? \\\ false)
- fetch_persisted(map, key)
- get_entities(map, path)
- get_entity_dsl_patches(extensions, section_path)
- get_opt(resource, path, value, default \\\ nil, configurable? \\\ false)
- get_opt_config(resource, path, value)
- get_persisted(resource, key, default \\\ nil)
- get_recursive_entities_for_path(sections, list)
- module_concat(values)
- monotonic_number(key)
- run_transformers(mod, transformers, spark_dsl_config, env)
- shuffle_opts_to_end(keyword, entity_args, schema, entities, opts)
- spark_function_info(arg1)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Extension behaviour (spark v2.2.24)

An extension to the Spark DSL.

This allows configuring custom DSL components, whose configurations can then be read back. This guide is still a work in progress, but should serve as a decent example of what is possible. Open issues on Github if you have any issues/something is unclear.

The example at the bottom shows how you might build a (not very contextually relevant) DSL extension that would be used like so:
    
    
    defmodule MyApp.Vehicle do
      use Spark.Dsl
    end
    
    defmodule MyApp.MyResource do
      use MyApp.Vehicle,
        extensions: [MyApp.CarExtension]
    
      cars do
        car :ford, :focus, trim: :sedan
        car :toyota, :corolla
      end
    end

The extension:
    
    
    defmodule MyApp.CarExtension do
      @car_schema [
        make: [
          type: :atom,
          required: true,
          doc: "The make of the car"
        ],
        model: [
          type: :atom,
          required: true,
          doc: "The model of the car"
        ],
        type: [
          type: :atom,
          required: true,
          doc: "The type of the car",
          default: :sedan
        ]
      ]
    
      @car %Spark.Dsl.Entity{
        name: :car,
        describe: "Adds a car",
        examples: [
          "car :ford, :focus"
        ],
        target: MyApp.Car,
        args: [:make, :model],
        schema: @car_schema
      }
    
      @cars %Spark.Dsl.Section{
        name: :cars, # The DSL constructor will be `cars`
        describe: """
        Configure what cars are available.
    
        More, deeper explanation. Always have a short one liner explanation,
        an empty line, and then a longer explanation.
        """,
        entities: [
          @car # See `Spark.Dsl.Entity` docs
        ],
        schema: [
          default_manufacturer: [
            type: :atom,
            doc: "The default manufacturer"
          ]
        ]
      }
    
      use Spark.Dsl.Extension, sections: [@cars]
    end

Often, we will need to do complex validation/validate based on the configuration of other resources. Due to the nature of building compile time DSLs, there are many restrictions around that process. To support these complex use cases, extensions can include `transformers` which can validate/transform the DSL state after all basic sections/entities have been created. See [`Spark.Dsl.Transformer`](external_link) for more information. Transformers are provided as an option to `use`, like so:
    
    
    use Spark.Dsl.Extension, sections: [@cars], transformers: [
      MyApp.Transformers.ValidateNoOverlappingMakesAndModels
    ]

By default, the generated modules will have names like `__MODULE__.SectionName.EntityName`, and that could potentially conflict with modules you are defining, so you can specify the `module_prefix` option, which would allow you to prefix the modules with something like `__MODULE__.Dsl`, so that the module path generated might be something like `__MODULE__.Dsl.SectionName.EntityName`, and you could then have the entity struct be `__MODULE__.SectionName.EntityName` without conflicts.

To expose the configuration of your DSL, define functions that use the helpers like `get_entities/2` and `get_opt/3`. For example:
    
    
    defmodule MyApp.Cars do
      def cars(resource) do
        Spark.Dsl.Extension.get_entities(resource, [:cars])
      end
    end
    
    MyApp.Cars.cars(MyResource)
    # [%MyApp.Car{...}, %MyApp.Car{...}]

See the documentation for [`Spark.Dsl.Section`](external_link) and [`Spark.Dsl.Entity`](external_link) for more information

#  __ Summary

##  Types

t()

##  Callbacks

add_extensions()

explain(map)

module_imports()

persisters()

sections()

transformers()

verifiers()

##  Functions

doc(sections, depth \\\ 1)

See [`Spark.CheatSheet.doc/2`](external_link).

doc_index(sections, depth \\\ 1)

See [`Spark.CheatSheet.doc_index/2`](external_link).

expand_alias(ast, env)

expand_alias_no_require(ast, env)

expand_literals(ast, acc, fun)

fetch_opt(resource, path, value, configurable? \\\ false)

fetch_persisted(map, key)

Fetch a value that was persisted while transforming or compiling the resource, e.g `:primary_key`

get_entities(map, path)

Get the entities configured for a given section

get_entity_dsl_patches(extensions, section_path)

get_opt(resource, path, value, default \\\ nil, configurable? \\\ false)

Get an option value for a section at a given path.

get_opt_config(resource, path, value)

get_persisted(resource, key, default \\\ nil)

Get a value that was persisted while transforming or compiling the resource, e.g `:primary_key`

get_recursive_entities_for_path(sections, list)

module_concat(values)

monotonic_number(key)

run_transformers(mod, transformers, spark_dsl_config, env)

shuffle_opts_to_end(keyword, entity_args, schema, entities, opts)

spark_function_info(arg1)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

#  __ Callbacks

__ Link to this callback

# add_extensions()

[ __ View Source ](external_link)
    
    
    @callback add_extensions() :: [[module](external_link)()]

__ Link to this callback

# explain(map)

[ __ View Source ](external_link) (optional)
    
    
    @callback explain([map](external_link)()) :: [String.t](external_link)() | nil

__ Link to this callback

# module_imports()

[ __ View Source ](external_link)
    
    
    @callback module_imports() :: [[module](external_link)()]

__ Link to this callback

# persisters()

[ __ View Source ](external_link)
    
    
    @callback persisters() :: [[module](external_link)()]

__ Link to this callback

# sections()

[ __ View Source ](external_link)
    
    
    @callback sections() :: [[Spark.Dsl.section](external_link)()]

__ Link to this callback

# transformers()

[ __ View Source ](external_link)
    
    
    @callback transformers() :: [[module](external_link)()]

__ Link to this callback

# verifiers()

[ __ View Source ](external_link)
    
    
    @callback verifiers() :: [[module](external_link)()]

#  __ Functions

__ Link to this function

# doc(sections, depth \\\ 1)

[ __ View Source ](external_link)

See [`Spark.CheatSheet.doc/2`](external_link).

__ Link to this function

# doc_index(sections, depth \\\ 1)

[ __ View Source ](external_link)

See [`Spark.CheatSheet.doc_index/2`](external_link).

__ Link to this function

# expand_alias(ast, env)

[ __ View Source ](external_link)

__ Link to this function

# expand_alias_no_require(ast, env)

[ __ View Source ](external_link)

__ Link to this function

# expand_literals(ast, acc, fun)

[ __ View Source ](external_link)

__ Link to this function

# fetch_opt(resource, path, value, configurable? \\\ false)

[ __ View Source ](external_link)

__ Link to this function

# fetch_persisted(map, key)

[ __ View Source ](external_link)

Fetch a value that was persisted while transforming or compiling the resource, e.g `:primary_key`

__ Link to this function

# get_entities(map, path)

[ __ View Source ](external_link)

Get the entities configured for a given section

__ Link to this function

# get_entity_dsl_patches(extensions, section_path)

[ __ View Source ](external_link)

__ Link to this function

# get_opt(resource, path, value, default \\\ nil, configurable? \\\ false)

[ __ View Source ](external_link)

Get an option value for a section at a given path.

Checks to see if it has been overridden via configuration.

__ Link to this function

# get_opt_config(resource, path, value)

[ __ View Source ](external_link)

__ Link to this function

# get_persisted(resource, key, default \\\ nil)

[ __ View Source ](external_link)

Get a value that was persisted while transforming or compiling the resource, e.g `:primary_key`

__ Link to this function

# get_recursive_entities_for_path(sections, list)

[ __ View Source ](external_link)

__ Link to this function

# module_concat(values)

[ __ View Source ](external_link)

__ Link to this function

# monotonic_number(key)

[ __ View Source ](external_link)

__ Link to this function

# run_transformers(mod, transformers, spark_dsl_config, env)

[ __ View Source ](external_link)

__ Link to this function

# shuffle_opts_to_end(keyword, entity_args, schema, entities, opts)

[ __ View Source ](external_link)

__ Link to this function

# spark_function_info(arg1)

[ __ View Source ](external_link)
