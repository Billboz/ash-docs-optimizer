# AshAuthentication.TokenResource.Expunger — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.TokenResource.Expunger (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- child_spec(init_arg)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.TokenResource.Expunger (ash_authentication v4.0.4)

A [`GenServer`](external_link) which periodically removes expired token revocations.

Scans all token revocation resources based on their configured expunge interval and removes any expired records.
    
    
    defmodule MyApp.Accounts.Token do
      use Ash.Resource,
        extensions: [AshAuthentication.TokenResource],
        domain: MyApp.Accounts
    
      token do
        expunge_interval 12
      end
    end

This GenServer is started by the [`AshAuthentication.Supervisor`](external_link) which should be added to your app's supervision tree.

#  __ Summary

##  Functions

child_spec(init_arg)

Returns a specification to start this module under a supervisor.

#  __ Functions

__ Link to this function

# child_spec(init_arg)

[ __ View Source ](external_link)

Returns a specification to start this module under a supervisor.

See [`Supervisor`](external_link).
