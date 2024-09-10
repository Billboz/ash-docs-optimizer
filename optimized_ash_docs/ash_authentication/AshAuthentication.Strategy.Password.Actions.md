# AshAuthentication.Strategy.Password.Actions — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Password.Actions (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- register(strategy, params, options)
- reset(strategy, params, options)
- reset_request(strategy, params, options)
- sign_in(strategy, params, options)
- sign_in_with_token(strategy, params, options)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Password.Actions (ash_authentication v4.0.4)

Actions for the password strategy

Provides the code interface for working with resources via a password strategy.

#  __ Summary

##  Functions

register(strategy, params, options)

Attempt to register a new user.

reset(strategy, params, options)

Attempt to change a user's password using a reset token.

reset_request(strategy, params, options)

Request a password reset.

sign_in(strategy, params, options)

Attempt to sign in a user.

sign_in_with_token(strategy, params, options)

Attempt to sign in a previously-authenticated user with a short-lived sign in token.

#  __ Functions

__ Link to this function

# register(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec register([AshAuthentication.Strategy.Password.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Attempt to register a new user.

__ Link to this function

# reset(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec reset([AshAuthentication.Strategy.Password.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Attempt to change a user's password using a reset token.

__ Link to this function

# reset_request(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec reset_request([AshAuthentication.Strategy.Password.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      :ok | {:error, [any](external_link)()}

Request a password reset.

__ Link to this function

# sign_in(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec sign_in([AshAuthentication.Strategy.Password.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()}
      | {:error, [AshAuthentication.Errors.AuthenticationFailed.t](external_link)()}

Attempt to sign in a user.

__ Link to this function

# sign_in_with_token(strategy, params, options)

[ __ View Source ](external_link)
    
    
    @spec sign_in_with_token([AshAuthentication.Strategy.Password.t](external_link)(), [map](external_link)(), [keyword](external_link)()) ::
      {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Attempt to sign in a previously-authenticated user with a short-lived sign in token.
