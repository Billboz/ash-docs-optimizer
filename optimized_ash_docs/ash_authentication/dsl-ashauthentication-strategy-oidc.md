# DSL: AshAuthentication.Strategy.Oidc — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.Oidc
  - __ Nonce
  - __ More documentation:
  - __ authentication.strategies.oidc
          - More documentation:
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.Oidc

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



##  __ authentication.strategies.oidc
    
    
    oidc name \\ :oidc

Provides an OpenID Connect authentication strategy.

This strategy is built using the `:oauth2` strategy, and thus provides all the same configuration options should you need them.

###### More documentation:

  * The [OAuth2 documentation](external_link)



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | Uniquely identifies the strategy.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`client_id`| `(any, any -> any) | module | String.t`| | The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`base_url`| `(any, any -> any) | module | String.t`| | The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`redirect_uri`| `(any, any -> any) | module | String.t`| | The callback URI _base_. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`site`| `(any, any -> any) | module | String.t`| | Deprecated: Use `base_url` instead.  
`auth_method`| `nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt`| `:client_secret_post`| The authentication strategy used, optional. If not set, no authentication will be used during the access token request.  
`client_secret`| `(any, any -> any) | module | String.t`| | The OAuth2 client secret. Required if :auth_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`trusted_audiences`| `(any, any -> any) | module | list(any) | nil`| | A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`private_key`| `(any, any -> any) | module | String.t`| | The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`authorization_params`| `keyword`| `[]`| Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`  
`registration_enabled?`| `boolean`| `true`| If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.  
`register_action_name`| `atom`| | The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.  
`sign_in_action_name`| `atom`| | The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.  
`identity_resource`| `module | false`| `false`| The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.  
`identity_relationship_name`| `atom`| `:identities`| Name of the relationship to the provider identities resource  
`identity_relationship_user_id_attribute`| `atom`| `:user_id`| The name of the destination (user_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.  
`openid_configuration_uri`| `String.t`| `"/.well-known/openid-configuration"`| The URI for the OpenID provider  
`client_authentication_method`| `:client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt`| `:client_secret_basic`| The client authentication method to use.  
`openid_configuration`| `map`| `%{}`| The OpenID configuration. If not set, the configuration will be retrieved from `openid_configuration_uri`.  
`id_token_signed_response_alg`| `"HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "Ed25519" | "Ed25519ph" | "Ed448" | "Ed448ph" | "EdDSA"`| `"RS256"`| The `id_token_signed_response_alg` parameter sent by the Client during Registration.  
`id_token_ttl_seconds`| `nil | pos_integer`| | The number of seconds from `iat` that an ID Token will be considered valid.  
`nonce`| `boolean | (any, any -> any) | module | String.t`| `true`| A function for generating the session nonce, `true` to automatically generate it with `AshAuthetnication.Strategy.Oidc.NonceGenerator`, or `false` to disable.  
  
###  __ Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](external_link)

[ ← Previous Page  DSL: AshAuthentication.Strategy.OAuth2  ](external_link)

[ Next Page →  DSL: AshAuthentication.Strategy.Password  ](external_link)