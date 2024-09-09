# DSL: AshAuthentication.Strategy.Google — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.Google
  - __ More documentation:
  - __ authentication.strategies.google
      - More documentation:
          - Strategy defaults:
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.Google

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



##  __ authentication.strategies.google
    
    
    google name \\ :google

Provides a pre-configured authentication strategy for [Google](external_link).

This strategy is built using the `:oauth2` strategy, and thus provides all the same configuration options should you need them.

#### More documentation:

  * The [Google OAuth 2.0 Overview](external_link).
  * The [Google Tutorial](external_link)
  * The [OAuth2 documentation](external_link)



###### Strategy defaults:

The following defaults are applied:

  * `:base_url` is set to `"https://www.googleapis.com"`.
  * `:authorize_url` is set to `"https://accounts.google.com/o/oauth2/v2/auth"`.
  * `:token_url` is set to `"/oauth2/v4/token"`.
  * `:user_url` is set to `"/oauth2/v3/userinfo"`.
  * `:authorization_params` is set to `[scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"]`.
  * `:auth_method` is set to `:client_secret_post`.



###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | Uniquely identifies the strategy.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`client_id`| `(any, any -> any) | module | String.t`| | The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`redirect_uri`| `(any, any -> any) | module | String.t`| | The callback URI _base_. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`base_url`| `(any, any -> any) | module | String.t`| `"https://www.googleapis.com"`| The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`site`| `(any, any -> any) | module | String.t`| | Deprecated: Use `base_url` instead.  
`auth_method`| `nil | :client_secret_basic | :client_secret_post | :client_secret_jwt | :private_key_jwt`| `:client_secret_post`| The authentication strategy used, optional. If not set, no authentication will be used during the access token request.  
`client_secret`| `(any, any -> any) | module | String.t`| | The OAuth2 client secret. Required if :auth_method is `:client_secret_basic`, `:client_secret_post` or `:client_secret_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`authorize_url`| `(any, any -> any) | module | String.t`| `"https://accounts.google.com/o/oauth2/v2/auth"`| The API url to the OAuth2 authorize endpoint, relative to `site`, e.g `authorize_url fn _, _ -> {:ok, "https://exampe.com/authorize"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`token_url`| `(any, any -> any) | module | String.t`| `"/oauth2/v4/token"`| The API url to access the token endpoint, relative to `site`, e.g `token_url fn _, _ -> {:ok, "https://example.com/oauth_token"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`trusted_audiences`| `(any, any -> any) | module | list(any) | nil`| | A list of audiences which are trusted. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`user_url`| `(any, any -> any) | module | String.t`| `"/oauth2/v3/userinfo"`| The API url to access the user endpoint, relative to `site`, e.g `user_url fn _, _ -> {:ok, "https://example.com/userinfo"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`private_key`| `(any, any -> any) | module | String.t`| | The private key to use if `:auth_method` is `:private_key_jwt`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`authorization_params`| `keyword`| `[scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"]`| Any additional parameters to encode in the request phase. eg: `authorization_params scope: "openid profile email"`  
`registration_enabled?`| `boolean`| `true`| If enabled, new users will be able to register for your site when authenticating and not already present. If not, only existing users will be able to authenticate.  
`register_action_name`| `atom`| | The name of the action to use to register a user, if `registration_enabled?` is `true`. Defaults to `register_with_<name>` See the "Registration and Sign-in" section of the strategy docs for more.  
`sign_in_action_name`| `atom`| | The name of the action to use to sign in an existing user, if `sign_in_enabled?` is `true`. Defaults to `sign_in_with_<strategy>`, which is generated for you by default. See the "Registration and Sign-in" section of the strategy docs for more information.  
`identity_resource`| `module | false`| `false`| The resource used to store user identities, or `false` to disable. See the User Identities section of the strategy docs for more.  
`identity_relationship_name`| `atom`| `:identities`| Name of the relationship to the provider identities resource  
`identity_relationship_user_id_attribute`| `atom`| `:user_id`| The name of the destination (user_id) attribute on your provider identity resource. Only necessary if you've changed the `user_id_attribute_name` option of the provider identity.  
  
###  __ Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](external_link)

[ ← Previous Page  DSL: AshAuthentication.Strategy.Github  ](external_link)

[ Next Page →  DSL: AshAuthentication.Strategy.MagicLink  ](external_link)
