# AshAuthentication.Strategy.Password.RequestPasswordResetPreparation — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Password.RequestPasswordResetPreparation (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- init(opts)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Password.RequestPasswordResetPreparation (ash_authentication v4.0.4)

Prepare a query for a password reset request.

This preparation performs three jobs, one before the query executes and two after:

  1. it constraints the query to match the identity field passed to the action.
  2. if there is a user returned by the query, then a. generate a reset token and b. publish a notification.



Always returns an empty result.

#  __ Summary

##  Functions

init(opts)

Callback implementation for [`Ash.Resource.Preparation.init/1`](3.4.1/Ash.Resource.Preparation.html#c:init/1).

#  __ Functions

__ Link to this function

# init(opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Resource.Preparation.init/1`](3.4.1/Ash.Resource.Preparation.html#c:init/1).
