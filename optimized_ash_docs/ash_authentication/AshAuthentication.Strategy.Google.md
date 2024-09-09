# AshAuthentication.Strategy.Google — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Google (ash_authentication v4.0.4)
  - __ More documentation:
- __ Summary
  - Functions
- __ Functions
- transform(entity, dsl_state)
- verify(strategy, dsl_state)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Google (ash_authentication v4.0.4)

Strategy for authenticating using [Google](external_link)

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](external_link) and [`assent`](external_link).

In order to use Google you need to provide the following minimum configuration:

  * `client_id`
  * `redirect_uri`
  * `client_secret`
  * `site`



##  __ More documentation:

  * The [Google OAuth 2.0 Overview](external_link).
  * The [Google Tutorial](external_link)
  * The [OAuth2 documentation](external_link)



#  __ Summary

##  Functions

transform(entity, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

verify(strategy, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).

#  __ Functions

__ Link to this function

# transform(entity, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

__ Link to this function

# verify(strategy, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).
