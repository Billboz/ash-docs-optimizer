# Ash.Flow.Executor — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) Ash.Flow.Executor behaviour (ash_flow v0.1.1)
- __ Summary
  - Types
  - Callbacks
- __ Types
- built_flow()
- __ Callbacks
- build(t, input, opts)
- execute(built_flow, input, opts)

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Flow.Executor behaviour (ash_flow v0.1.1)

A flow executor runs a given flow module

#  __ Summary

##  Types

built_flow()

##  Callbacks

build(t, input, opts)

execute(built_flow, input, opts)

#  __ Types

__ Link to this type

# built_flow()

[ __ View Source ](external_link)
    
    
    @type built_flow() :: [any](external_link)()

#  __ Callbacks

__ Link to this callback

# build(t, input, opts)

[ __ View Source ](external_link)
    
    
    @callback build([Ash.Flow.t](external_link)(), input :: [map](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, built_flow()} | {:error, [term](external_link)()}

__ Link to this callback

# execute(built_flow, input, opts)

[ __ View Source ](external_link)
    
    
    @callback execute(built_flow(), input :: [map](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [term](external_link)()} | {:error, [term](external_link)()}
