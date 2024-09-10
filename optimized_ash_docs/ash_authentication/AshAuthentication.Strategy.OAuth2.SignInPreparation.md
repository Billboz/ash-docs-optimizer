# AshAuthentication.Strategy.OAuth2.SignInPreparation — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.OAuth2.SignInPreparation (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- init(opts)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.OAuth2.SignInPreparation (ash_authentication v4.0.4)

Prepare a query for sign in

Performs three main tasks:

  1. Ensures that there is only one matching user record returned, otherwise returns an authentication failed error.
  2. Generates an access token if token generation is enabled.
  3. Updates the user identity resource, if one is enabled.



#  __ Summary

##  Functions

init(opts)

Callback implementation for [`Ash.Resource.Preparation.init/1`](3.4.1/Ash.Resource.Preparation.html#c:init/1).

#  __ Functions

__ Link to this function

# init(opts)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Resource.Preparation.init/1`](3.4.1/Ash.Resource.Preparation.html#c:init/1).
