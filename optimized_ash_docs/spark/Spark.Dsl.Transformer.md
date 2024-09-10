# Spark.Dsl.Transformer — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Transformer behaviour (spark v2.2.24)
- __ Summary
  - Callbacks
  - Functions
- __ Callbacks
- after?(module)
- after_compile?()
- before?(module)
- transform(map)
- __ Functions
- add_entity(dsl_state, path, entity, opts \\\ [])
- async_compile(dsl, fun)
- build_entity(extension, path, name, opts)
- build_entity!(extension, path, name, opts)
- eval(dsl, bindings, block)
- fetch_option(dsl_state, path, option)
- fetch_persisted(dsl, key)
- get_entities(dsl_state, path)
- get_option(dsl_state, path, option, default \\\ nil)
- get_persisted(dsl, key, default \\\ nil)
- persist(dsl, key, value)
- remove_entity(dsl_state, path, func)
- replace_entity(dsl_state, path, replacement, matcher \\\ nil)
- set_option(dsl_state, path, option, value)
- sort(transformers)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Transformer behaviour (spark v2.2.24)

A transformer manipulates and/or validates the entire DSL state of a resource.

It's `transform/1` takes a `map`, which is just the values/configurations at each point of the DSL. Don't manipulate it directly, if possible, instead use functions like `get_entities/3` and `replace_entity/4` to manipulate it.

Use the `after?/1` and `before?/1` callbacks to ensure that your transformer runs either before or after some other transformer.

Return `true` in `after_compile/0` to have the transformer run in an `after_compile` hook, but keep in mind that no modifications to the dsl structure will be retained, so there is no real point in modifying the dsl that you return.

#  __ Summary

##  Callbacks

after?(module)

after_compile?()

before?(module)

transform(map)

##  Functions

add_entity(dsl_state, path, entity, opts \\\ [])

async_compile(dsl, fun)

Runs the function in an async compiler.

build_entity(extension, path, name, opts)

build_entity!(extension, path, name, opts)

eval(dsl, bindings, block)

Add a quoted expression to be evaluated in the DSL module's context.

fetch_option(dsl_state, path, option)

fetch_persisted(dsl, key)

get_entities(dsl_state, path)

get_option(dsl_state, path, option, default \\\ nil)

get_persisted(dsl, key, default \\\ nil)

persist(dsl, key, value)

Saves a value into the dsl config with the given key.

remove_entity(dsl_state, path, func)

replace_entity(dsl_state, path, replacement, matcher \\\ nil)

set_option(dsl_state, path, option, value)

sort(transformers)

#  __ Callbacks

__ Link to this callback

# after?(module)

[ __ View Source ](external_link)
    
    
    @callback after?([module](external_link)()) :: [boolean](external_link)()

__ Link to this callback

# after_compile?()

[ __ View Source ](external_link)
    
    
    @callback after_compile?() :: [boolean](external_link)()

__ Link to this callback

# before?(module)

[ __ View Source ](external_link)
    
    
    @callback before?([module](external_link)()) :: [boolean](external_link)()

__ Link to this callback

# transform(map)

[ __ View Source ](external_link)
    
    
    @callback transform([map](external_link)()) ::
      :ok
      | {:ok, [map](external_link)()}
      | {:error, [term](external_link)()}
      | {:warn, [map](external_link)(), [String.t](external_link)() | [[String.t](external_link)()]}
      | :halt

#  __ Functions

__ Link to this function

# add_entity(dsl_state, path, entity, opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# async_compile(dsl, fun)

[ __ View Source ](external_link)

Runs the function in an async compiler.

Use this for compiling new modules and having them compiled efficiently asynchronously.

__ Link to this function

# build_entity(extension, path, name, opts)

[ __ View Source ](external_link)

__ Link to this function

# build_entity!(extension, path, name, opts)

[ __ View Source ](external_link)

__ Link to this function

# eval(dsl, bindings, block)

[ __ View Source ](external_link)

Add a quoted expression to be evaluated in the DSL module's context.

Use this _extremely sparingly_. It should almost never be necessary, unless building certain extensions that _require_ the module in question to define a given function.

What you likely want is either one of the DSL introspection functions, like [`Spark.Dsl.Extension.get_entities/2`](external_link) or `Spark.Dsl.Extension.get_opt/5)`. If you simply want to store a custom value that can be retrieved easily, or cache some precomputed information onto the resource, use `persist/3`.

Provide the dsl state, bindings that should be unquote-able, and the quoted block to evaluate in the module. For example, if we wanted to support a `resource.primary_key()` function that would return the primary key (this is unnecessary, just an example), we might do this:
    
    
    fields = the_primary_key_fields
    
    dsl_state =
      Transformer.eval(
        dsl_state,
        [fields: fields],
        quote do
          def primary_key() do
            unquote(fields)
          end
        end
      )

__ Link to this function

# fetch_option(dsl_state, path, option)

[ __ View Source ](external_link)

__ Link to this function

# fetch_persisted(dsl, key)

[ __ View Source ](external_link)

__ Link to this function

# get_entities(dsl_state, path)

[ __ View Source ](external_link)

__ Link to this function

# get_option(dsl_state, path, option, default \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# get_persisted(dsl, key, default \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# persist(dsl, key, value)

[ __ View Source ](external_link)

Saves a value into the dsl config with the given key.

This can be used to precompute some information and cache it onto the resource, or simply store a computed value. It can later be retrieved with [`Spark.Dsl.Extension.get_persisted/3`](external_link).

__ Link to this function

# remove_entity(dsl_state, path, func)

[ __ View Source ](external_link)

__ Link to this function

# replace_entity(dsl_state, path, replacement, matcher \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# set_option(dsl_state, path, option, value)

[ __ View Source ](external_link)

__ Link to this function

# sort(transformers)

[ __ View Source ](external_link)
