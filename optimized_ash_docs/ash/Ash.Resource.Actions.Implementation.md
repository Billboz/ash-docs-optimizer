# Ash.Resource.Actions.Implementation — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Actions.Implementation behaviour (ash v3.4.8)
- __ Summary
  - Callbacks
- __ Callbacks
- run(t, opts, t)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Actions.Implementation behaviour (ash v3.4.8)

An implementation of a generic action.

#  __ Summary

##  Callbacks

run(t, opts, t)

#  __ Callbacks

__ Link to this callback

# run(t, opts, t)

[ __ View Source ](external_link)
    
    
    @callback run(
      [Ash.ActionInput.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      [Ash.Resource.Actions.Implementation.Context.t](external_link)()
    ) ::
      :ok
      | {:ok, [term](external_link)()}
      | {:ok, [[Ash.Notifier.Notification.t](external_link)()]}
      | {:error, [term](external_link)()}
