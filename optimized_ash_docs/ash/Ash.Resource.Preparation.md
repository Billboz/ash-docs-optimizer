# Ash.Resource.Preparation — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Preparation behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
- __ Types
- ref()
- t()
- __ Callbacks
- init(opts)
- prepare(query, opts, context)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Preparation behaviour (ash v3.4.8)

The behaviour for an action-specific query preparation.

`init/1` is defined automatically by `use Ash.Resource.Preparation`, but can be implemented if you want to validate/transform any options passed to the module.

The main function is `prepare/3`. It takes the query, any options that were provided when this preparation was configured on a resource, and the context, which currently only has the actor.

To access any query arguments from within a preparation, make sure you are using [`Ash.Query.get_argument/2`](external_link) as the argument keys may be strings or atoms.

#  __ Summary

##  Types

ref()

t()

##  Callbacks

init(opts)

prepare(query, opts, context)

#  __ Types

__ Link to this type

# ref()

[ __ View Source ](external_link)
    
    
    @type ref() :: {[module](external_link)(), [Keyword.t](external_link)()} | [module](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Preparation{preparation: [term](external_link)()}

#  __ Callbacks

__ Link to this callback

# init(opts)

[ __ View Source ](external_link)
    
    
    @callback init(opts :: [Keyword.t](external_link)()) :: {:ok, [Keyword.t](external_link)()} | {:error, [term](external_link)()}

__ Link to this callback

# prepare(query, opts, context)

[ __ View Source ](external_link)
    
    
    @callback prepare(
      query :: [Ash.Query.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.Preparation.Context.t](external_link)()
    ) :: [Ash.Query.t](external_link)()
