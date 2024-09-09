# AshAuthentication.Strategy.OAuth2.Actions — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.OAuth2.Actions (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- register(strategy, params, options)
- sign_in(strategy, params, options)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.OAuth2.Actions (ash_authentication v4.0.4)

Actions for the oauth2 strategy.

Provides the code interface for working with resources via an OAuth2 strategy.

#  __ Summary

##  Functions

register(strategy, params, options)

Attempt to register a new user.

sign_in(strategy, params, options)

Attempt to sign in a user.

#  __ Functions

__ Link to this function

# register(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec register([AshAuthentication.Strategy.OAuth2.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Attempt to register a new user.

__ Link to this function

# sign_in(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec sign_in([AshAuthentication.Strategy.OAuth2.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Attempt to sign in a user.
