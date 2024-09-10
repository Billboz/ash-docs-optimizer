# DSL: AshAuthentication.Strategy.OAuth2 — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.OAuth2
    - __ Example:
  - __ Secrets and runtime configuration
    - __ Examples:
  - __ User identities
  - __ Actions
    - __ Sign-in
    - __ Registration
    - __ Examples:
  - __ Plugs
  - __ authentication.strategies.oauth2
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.OAuth2

Strategy for authenticating using an OAuth 2.0 server as the source of truth.

This strategy wraps the excellent [`assent`](external_link) package, which provides OAuth 2.0 capabilities.

In order to use OAuth 2.0 authentication on your resource, it needs to meet the following minimum criteria:

  1. Have a primary key.
  2. Provide a strategy-specific action, either register or sign-in.
  3. Provide configuration for OAuth2 destinations, secrets, etc.



###  __ Example:
    
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      attributes do
        uuid_primary_key :id
        attribute :email, :ci_string, allow_nil?: false
      end
    
      authentication do
        strategies do
          oauth2 :example do
            client_id "OAuth Client ID"
            redirect_uri "https://my.app/"
            client_secret "My Super Secret Secret"
            site "https://auth.example.com/"
          end
        end
      end
    end

##  __ Secrets and runtime configuration

In order to use OAuth 2.0 you need to provide a varying number of secrets and other configuration which may change based on runtime environment. The [`AshAuthentication.Secret`](external_link) behaviour is provided to accommodate this. This allows you to provide configuration either directly on the resource (ie as a string), as an anonymous function, or as a module.

> ###  __ Warning
> 
> We **strongly** urge you not to share actual secrets in your code or repository.

###  __ Examples:

Providing configuration as an anonymous function:
    
    
    oauth2 do
      client_secret fn _path, resource ->
        Application.fetch_env(:my_app, resource, :oauth2_client_secret)
      end
    end

Providing configuration as a module:
    
    
    defmodule MyApp.Secrets do
      use AshAuthentication.Secret
    
      def secret_for([:authentication, :strategies, :example, :client_secret], MyApp.User, _opts), do: Application.fetch_env(:my_app, :oauth2_client_secret)
    end
    
    # and in your strategies:
    
    oauth2 :example do
      client_secret MyApp.Secrets
    end

##  __ User identities

Because your users can be signed in via multiple providers at once, you can specify an `identity_resource` in the DSL configuration which points to a seperate Ash resource which has the [`AshAuthentication.UserIdentity`](external_link) extension present. This resource will be used to store details of the providers in use by each user and a relationship will be added to the user resource.

Setting the `identity_resource` will cause extra validations to be applied to your resource so that changes are tracked correctly on sign-in or registration.

##  __ Actions

When using an OAuth 2.0 provider you need to declare either a "register" or "sign-in" action. The reason for this is that it's not possible for us to know ahead of time how you want to manage the link between your user resources and the "user info" provided by the OAuth server.

Both actions receive the following two arguments:

  1. `user_info` \- a map with string keys containing the [OpenID Successful UserInfo response](external_link). Usually this will be used to populate your email, nickname or other identifying field.
  2. `oauth_tokens` a map with string keys containing the [OpenID Successful Token response](external_link) (or similar).



The actions themselves can be interacted with directly via the [`AshAuthentication.Strategy`](external_link) protocol, but you are more likely to interact with them via the web/plugs.

###  __ Sign-in

The sign-in action is called when a successful OAuth2 callback is received. You should use it to constrain the query to the correct user based on the arguments provided.

This action is only needed when the `registration_enabled?` DSL settings is set to `false`.

###  __ Registration

The register action is a little more complicated than the sign-in action, because we cannot tell the difference between a new user and a returning user (they all use the same OAuth flow). In order to handle this your register action must be defined as an upsert with a configured `upsert_identity` (see example below).

###  __ Examples:

Providing sign-in to users who already exist in the database (and by extension rejecting new users):
    
    
    defmodule MyApp.Accounts.User do
      attributes do
        uuid_primary_key :id
        attribute :email, :ci_string, allow_nil?: false
      end
    
      actions do
        read :sign_in_with_example do
          argument :user_info, :map, allow_nil?: false
          argument :oauth_tokens, :map, allow_nil?: false
          prepare AshAuthentication.Strategy.OAuth2.SignInPreparation
    
          filter expr(email == get_path(^arg(:user_info), [:email]))
        end
      end
    
      authentication do
        strategies do
          oauth2 :example do
            registration_enabled? false
          end
        end
      end
    end

Providing registration or sign-in to all comers:
    
    
    defmodule MyApp.Accounts.User do
      attributes do
        uuid_primary_key :id
        attribute :email, :ci_string, allow_nil?: false
      end
    
      actions do
        create :register_with_oauth2 do
          argument :user_info, :map, allow_nil?: false
          argument :oauth_tokens, :map, allow_nil?: false
          upsert? true
          upsert_identity :email
    
          change AshAuthentication.GenerateTokenChange
          change fn changeset, _ctx ->
            user_info = Ash.Changeset.get_argument(changeset, :user_info)
    
            changeset
            |> Ash.Changeset.change_attribute(:email, user_info["email"])
          end
        end
      end
    
      authentication do
        strategies do
          oauth2 :example do
          end
        end
      end
    end

##  __ Plugs

OAuth 2.0 is (usually) a browser-based flow. This means that you're most likely to interact with this strategy via it's plugs. There are two phases to authentication with OAuth 2.0:

  1. The request phase, where the user's browser is redirected to the remote authentication provider for authentication.
  2. The callback phase, where the provider redirects the user back to your app to create a local database record, session, etc.



##  __ authentication.strategies.oauth2
    
    
    oauth2 name \\ :oauth2

OAuth2 authentication

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | Uniquely identifies the strategy.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`client_id`| `(any, any -> any) | module | String.t`| | The OAuth2 client ID. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`authorize_url`| `(any, any -> any) | module | String.t`| | The API url to the OAuth2 authorize endpoint, relative to `site`, e.g `authorize_url fn _, _ -> {:ok, "https://exampe.com/authorize"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`token_url`| `(any, any -> any) | module | String.t`| | The API url to access the token endpoint, relative to `site`, e.g `token_url fn _, _ -> {:ok, "https://example.com/oauth_token"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`user_url`| `(any, any -> any) | module | String.t`| | The API url to access the user endpoint, relative to `site`, e.g `user_url fn _, _ -> {:ok, "https://example.com/userinfo"} end`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`redirect_uri`| `(any, any -> any) | module | String.t`| | The callback URI _base_. Not the whole URI back to the callback endpoint, but the URI to your `AuthPlug`. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
`base_url`| `(any, any -> any) | module | String.t`| | The base URL of the OAuth2 server - including the leading protocol (ie `https://`). Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
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
`icon`| `atom`| `:oauth2`| The name of an icon to use in any potential UI. This is a _hint_ for UI generators to use, and not in any way canonical.  
  
###  __ Introspection

Target: [`AshAuthentication.Strategy.OAuth2`](external_link)

[ ← Previous Page  DSL: AshAuthentication.Strategy.MagicLink  ](external_link)

[ Next Page →  DSL: AshAuthentication.Strategy.Oidc  ](external_link)
