# Spark.Dsl.Verifier — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Verifier behaviour (spark v2.2.24)
- __ Summary
  - Callbacks
  - Functions
- __ Callbacks
- verify(map)
- __ Functions
- fetch_option(dsl_state, path, option)
- get_entities(dsl_state, path)
- get_option(dsl_state, path, option)
- get_option(dsl_state, path, option, default)
- get_persisted(dsl, key)
- get_persisted(dsl, key, default)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Verifier behaviour (spark v2.2.24)

A verifier gets the dsl state and can return `:ok` or `:error`.

In a verifier, you can reference and depend on other modules without causing compile time dependencies.

#  __ Summary

##  Callbacks

verify(map)

##  Functions

fetch_option(dsl_state, path, option)

See [`Spark.Dsl.Transformer.fetch_option/3`](external_link).

get_entities(dsl_state, path)

See [`Spark.Dsl.Transformer.get_entities/2`](external_link).

get_option(dsl_state, path, option)

See [`Spark.Dsl.Transformer.get_option/3`](external_link).

get_option(dsl_state, path, option, default)

See [`Spark.Dsl.Transformer.get_option/4`](external_link).

get_persisted(dsl, key)

See [`Spark.Dsl.Transformer.get_persisted/2`](external_link).

get_persisted(dsl, key, default)

See [`Spark.Dsl.Transformer.get_persisted/3`](external_link).

#  __ Callbacks

__ Link to this callback

# verify(map)

[ __ View Source ](external_link)
    
    
    @callback verify([map](external_link)()) :: :ok | {:error, [term](external_link)()} | {:warn, [String.t](external_link)() | [[String.t](external_link)()]}

#  __ Functions

__ Link to this function

# fetch_option(dsl_state, path, option)

[ __ View Source ](external_link)

See [`Spark.Dsl.Transformer.fetch_option/3`](external_link).

__ Link to this function

# get_entities(dsl_state, path)

[ __ View Source ](external_link)

See [`Spark.Dsl.Transformer.get_entities/2`](external_link).

__ Link to this function

# get_option(dsl_state, path, option)

[ __ View Source ](external_link)

See [`Spark.Dsl.Transformer.get_option/3`](external_link).

__ Link to this function

# get_option(dsl_state, path, option, default)

[ __ View Source ](external_link)

See [`Spark.Dsl.Transformer.get_option/4`](external_link).

__ Link to this function

# get_persisted(dsl, key)

[ __ View Source ](external_link)

See [`Spark.Dsl.Transformer.get_persisted/2`](external_link).

__ Link to this function

# get_persisted(dsl, key, default)

[ __ View Source ](external_link)

See [`Spark.Dsl.Transformer.get_persisted/3`](external_link).
