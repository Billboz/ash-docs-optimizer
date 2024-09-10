# AshAuthentication.UserIdentity.UpsertIdentityChange — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.UserIdentity.UpsertIdentityChange (ash_authentication v4.0.4)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.UserIdentity.UpsertIdentityChange (ash_authentication v4.0.4)

A change which upserts a user's identity into the user identity resource.

Expects the following arguments:

  * `user_info` a map with string keys as returned from the OAuth2/OpenID upstream provider.
  * `oauth_tokens` a map with string keys containing the OAuth2 token response.
  * `user_id` the ID of the user this identity relates to.
  * `strategy` the name of the strategy.



This is usually dynamically inserted into a generated action, however you can add it to your own action if needed.
