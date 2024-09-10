# Ash.Resource.ManualRelationship — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.ManualRelationship behaviour (ash v3.4.8)
- __ Summary
  - Callbacks
- __ Callbacks
- load(list, opts, context)
- select(opts)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.ManualRelationship behaviour (ash v3.4.8)

A module to implement manual relationships.

#  __ Summary

##  Callbacks

load(list, opts, context)

select(opts)

#  __ Callbacks

__ Link to this callback

# load(list, opts, context)

[ __ View Source ](external_link)
    
    
    @callback load(
      [[Ash.Resource.record](external_link)()],
      opts :: [Keyword.t](external_link)(),
      context :: [Ash.Resource.ManualRelationship.Context.t](external_link)()
    ) :: {:ok, [map](external_link)()} | {:error, [term](external_link)()}

__ Link to this callback

# select(opts)

[ __ View Source ](external_link)
    
    
    @callback select(opts :: [Keyword.t](external_link)()) :: [[atom](external_link)()]
