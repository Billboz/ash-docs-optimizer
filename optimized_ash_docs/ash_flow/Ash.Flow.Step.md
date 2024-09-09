# Ash.Flow.Step — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) Ash.Flow.Step behaviour (ash_flow v0.1.1)
- __ Summary
  - Callbacks
- __ Callbacks
- describe(opts)
- run(input, opts, context)
- short_name(opts)

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Flow.Step behaviour (ash_flow v0.1.1)

A behaviour for implementing a custom step in a flow.

#  __ Summary

##  Callbacks

describe(opts)

run(input, opts, context)

short_name(opts)

#  __ Callbacks

__ Link to this callback

# describe(opts)

[ __ View Source ](external_link) (optional)
    
    
    @callback describe(opts :: [Keyword.t](external_link)()) :: [String.t](external_link)()

__ Link to this callback

# run(input, opts, context)

[ __ View Source ](external_link)
    
    
    @callback run(input :: [map](external_link)() | nil, opts :: [Keyword.t](external_link)(), context :: [map](external_link)()) ::
      {:ok, [term](external_link)()}
      | {:ok, [term](external_link)(),
         %{optional(:notifications) => [[Ash.Notifier.Notification.t](3.0.0/Ash.Notifier.Notification.html#t:t/0)()]}}
      | {:error, [term](external_link)()}

__ Link to this callback

# short_name(opts)

[ __ View Source ](external_link) (optional)
    
    
    @callback short_name(opts :: [Keyword.t](external_link)()) :: [String.t](external_link)()
