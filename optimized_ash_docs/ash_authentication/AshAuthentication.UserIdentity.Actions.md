# AshAuthentication.UserIdentity.Actions — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.UserIdentity.Actions (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- upsert(resource, attributes)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.UserIdentity.Actions (ash_authentication v4.0.4)

Code interface for provider identity actions.

Allows you to interact with UserIdentity resources without having to mess around with changesets, domains, etc. These functions are delegated to from within [`AshAuthentication.UserIdentity`](external_link).

#  __ Summary

##  Functions

upsert(resource, attributes)

Upsert an identity for a user.

#  __ Functions

__ Link to this function

# upsert(resource, attributes)

[ __ View Source ](external_link)
    
    
    @spec upsert([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), [map](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [term](external_link)()}

Upsert an identity for a user.
