# AshOban.ActorPersister — ash_oban v0.2.4

Project: ash_oban v0.2.4

## Table of Contents

- [ __ View Source ](external_link) AshOban.ActorPersister behaviour (ash_oban v0.2.4)
- __ Summary
  - Types
  - Callbacks
- __ Types
- actor()
- actor_json()
- __ Callbacks
- lookup(actor_json)
- store(actor)

__

Search documentation of ash_oban __ __

__ Settings

#  [ __ View Source ](external_link) AshOban.ActorPersister behaviour (ash_oban v0.2.4)

A behaviour for storing and retrieving an actor from oban job arguments

#  __ Summary

##  Types

actor()

actor_json()

##  Callbacks

lookup(actor_json)

store(actor)

#  __ Types

__ Link to this type

# actor()

[ __ View Source ](external_link)
    
    
    @type actor() :: [any](external_link)()

__ Link to this type

# actor_json()

[ __ View Source ](external_link)
    
    
    @type actor_json() :: [any](external_link)()

#  __ Callbacks

__ Link to this callback

# lookup(actor_json)

[ __ View Source ](external_link)
    
    
    @callback lookup(actor_json :: actor_json() | nil) ::
      {:ok, actor() | nil} | {:error, [Ash.Error.t](3.2.2/Ash.Error.html#t:t/0)()}

__ Link to this callback

# store(actor)

[ __ View Source ](external_link)
    
    
    @callback store(actor :: actor()) :: actor_json :: actor_json()
