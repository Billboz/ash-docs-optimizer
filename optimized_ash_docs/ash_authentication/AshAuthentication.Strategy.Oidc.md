# AshAuthentication.Strategy.Oidc — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Oidc (ash_authentication v4.0.4)
  - __ Nonce
  - __ More documentation:
- __ Summary
  - Functions
- __ Functions
- transform(entity, dsl_state)
- verify(strategy, dsl_state)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Oidc (ash_authentication v4.0.4)

Strategy for authentication using an [OpenID Connect](external_link) compatible server as the source of truth.

This strategy builds on-top of [`AshAuthentication.Strategy.OAuth2`](external_link) and [`assent`](external_link).

In order to use OIDC you need to provide the following minimum configuration:

  * `client_id` \- The client id, required
  * `site` \- The OIDC issuer, required
  * `openid_configuration_uri` \- The URI for OpenID Provider, optional, defaults to `/.well-known/openid-configuration`
  * `client_authentication_method` \- The Client Authentication method to use, optional, defaults to `client_secret_basic`
  * `client_secret` \- The client secret, required if `:client_authentication_method` is `:client_secret_basic`, `:client_secret_post`, or `:client_secret_jwt`
  * `openid_configuration` \- The OpenID configuration, optional, the configuration will be fetched from `:openid_configuration_uri` if this is not defined
  * `id_token_signed_response_alg` \- The `id_token_signed_response_alg` parameter sent by the Client during Registration, defaults to `RS256`
  * `id_token_ttl_seconds` \- The number of seconds from `iat` that an ID Token will be considered valid, optional, defaults to nil
  * `nonce` \- The nonce to use for authorization request, optional, MUST be session based and unguessable.



##  __ Nonce

`nonce` can be set in the provider config. The `nonce` will be returned in the `session_params` along with `state`. You can use this to store the value in the current session e.g. a httpOnly session cookie.

A random value generator can look like this:
    
    
    16
    |> :crypto.strong_rand_bytes()
    |> Base.encode64(padding: false)

AshAuthentication will dynamically generate one for the session if `nonce` is set to `true`.

##  __ More documentation:

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
