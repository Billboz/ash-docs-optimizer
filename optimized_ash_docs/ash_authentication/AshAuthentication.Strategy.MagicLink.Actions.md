# AshAuthentication.Strategy.MagicLink.Actions — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.MagicLink.Actions (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- request(strategy, params, options)
- sign_in(strategy, params, options)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.MagicLink.Actions (ash_authentication v4.0.4)

Actions for the magic link strategy.

Provides the code interface for working with user resources for providing magic links.

#  __ Summary

##  Functions

request(strategy, params, options)

Request a magic link for a user.

sign_in(strategy, params, options)

Attempt to sign a user in via magic link.

#  __ Functions

__ Link to this function

# request(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec request([AshAuthentication.Strategy.MagicLink.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      :ok | {:error, [any](external_link)()}

Request a magic link for a user.

__ Link to this function

# sign_in(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec sign_in([AshAuthentication.Strategy.MagicLink.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()}
      | {:error, [AshAuthentication.Errors.AuthenticationFailed.t](external_link)()}

Attempt to sign a user in via magic link.
