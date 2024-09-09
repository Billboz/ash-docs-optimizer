# Ash.Resource.ManualRead — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.ManualRead behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
- __ Types
- context()
- __ Callbacks
- load_relationships(query, results, opts, context, lazy?)
- read(query, data_layer_query, opts, context)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.ManualRead behaviour (ash v3.4.8)

A module to implement manual read actions.

#  __ Summary

##  Types

context()

##  Callbacks

load_relationships(query, results, opts, context, lazy?)

read(query, data_layer_query, opts, context)

#  __ Types

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: %{
      optional(:actor) => [term](external_link)(),
      optional(:tenant) => [term](external_link)(),
      optional(:authorize?) => [boolean](external_link)(),
      optional(:domain) => [module](external_link)(),
      optional([any](external_link)()) => [any](external_link)()
    }

#  __ Callbacks

__ Link to this callback

# load_relationships(query, results, opts, context, lazy?)

[ __ View Source ](external_link) (optional)
    
    
    @callback load_relationships(
      query :: [Ash.Query.t](external_link)(),
      results :: [[Ash.Resource.record](external_link)()],
      opts :: [Keyword.t](external_link)(),
      context :: context(),
      lazy? :: [boolean](external_link)()
    ) :: {:ok, [[Ash.Resource.record](external_link)()]} | {:error, [term](external_link)()}

__ Link to this callback

# read(query, data_layer_query, opts, context)

[ __ View Source ](external_link)
    
    
    @callback read(
      query :: [Ash.Query.t](external_link)(),
      data_layer_query :: [term](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: context()
    ) :: {:ok, [[Ash.Resource.record](external_link)()]} | {:error, [term](external_link)()}
