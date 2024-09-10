# DSL: AshAuthentication — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication
  - __ Usage
  - __ Authentication Strategies
    - __ HTTP client settings
  - __ Add-ons
  - __ Supervisor
  - __ authentication
    - __ Nested DSLs
    - __ Options
  - __ authentication.tokens
    - __ Options
  - __ authentication.strategies
  - __ authentication.add_ons

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication

AshAuthentication provides a turn-key authentication solution for folks using [Ash](external_link).

##  __ Usage

This package assumes that you have [Ash](external_link) installed and configured. See the Ash documentation for details.

Once installed you can easily add support for authentication by configuring the [`AshAuthentication`](external_link) extension on your resource:
    
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      attributes do
        uuid_primary_key :id
        attribute :email, :ci_string, allow_nil?: false
        attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
      end
    
      authentication do
        strategies do
          password :password do
            identity_field :email
            hashed_password_field :hashed_password
          end
        end
      end
    
      identities do
        identity :unique_email, [:email]
      end
    end

If you plan on providing authentication via the web, then you will need to define a plug using [`AshAuthentication.Plug`](external_link) which builds a [`Plug.Router`](external_link) that routes incoming authentication requests to the correct provider and provides callbacks for you to manipulate the conn after success or failure.

If you're using AshAuthentication with Phoenix, then check out [`ash_authentication_phoenix`](external_link) which provides route helpers, a controller abstraction and LiveView components for easy set up.

##  __ Authentication Strategies

Currently supported strategies:

  1. [`AshAuthentication.Strategy.Password`](external_link)
     * authenticate users against your local database using a unique identity (such as username or email address) and a password.
  2. [`AshAuthentication.Strategy.OAuth2`](external_link)
     * authenticate using local or remote [OAuth 2.0](external_link) compatible services.
     * also includes:
       * [`AshAuthentication.Strategy.Auth0`](external_link)
       * [`AshAuthentication.Strategy.Github`](external_link)
       * [`AshAuthentication.Strategy.Google`](external_link)
       * [`AshAuthentication.Strategy.Oidc`](external_link)
  3. [`AshAuthentication.Strategy.MagicLink`](external_link)
     * authenticate by sending a single-use link to the user.



###  __ HTTP client settings

Most of the authentication strategies based on `OAuth2` wrap the [`assent`](external_link) package.

If you needs to customize the behavior of the http client used by `assent`, define a custom `http_adapter` in the application settings:

`config :ash_authentication, :http_adapter, {Assent.HTTPAdapter.Finch, supervisor: MyApp.CustomFinch}`

See [`assent's documentation`](external_link) for more details on the supported http clients and their configuration.

##  __ Add-ons

Add-ons are like strategies, except that they don't actually provide authentication - they just provide features adjacent to authentication. Current add-ons:

  1. [`AshAuthentication.AddOn.Confirmation`](external_link)
     * allows you to force the user to confirm changes using a confirmation token (eg. sending a confirmation email when a new user registers).



##  __ Supervisor

Some add-ons or strategies may require processes to be started which manage their state over the lifetime of the application (eg periodically deleting expired token revocations). Because of this you should add `{AshAuthentication.Supervisor, otp_app: :my_app}` to your application's supervision tree. See [the Elixir docs](external_link) for more information.

##  __ authentication

Configure authentication for this resource

###  __ Nested DSLs

  * tokens
  * strategies
  * add_ons



###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`subject_name`| `atom`| | The subject name is used anywhere that a short version of your resource name is needed. Must be unique system-wide and will be inferred from the resource name by default (ie `MyApp.Accounts.User` -> `user`).  
`domain`| `module`| | The name of the Ash domain to use to access this resource when doing anything authentication related.  
`get_by_subject_action_name`| `atom`| `:get_by_subject`| The name of the read action used to retrieve records. If the action doesn't exist, one will be generated for you.  
`select_for_senders`| `list(atom)`| | A list of fields that we will ensure are selected whenever a sender will be invoked. Defaults to `[:email]` if there is an `:email` attribute on the resource, and `[]` otherwise.  
  
##  __ authentication.tokens

Configure JWT settings for this resource

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`token_resource`| `module | false`| | The resource used to store token information, such as in-flight confirmations, revocations, and if `store_all_tokens?` is enabled, authentication tokens themselves.  
`enabled?`| `boolean`| `false`| Should JWTs be generated by this resource?  
`store_all_tokens?`| `boolean`| `false`| Store all tokens in the `token_resource`. See the [tokens guide](external_link) for more.  
`require_token_presence_for_authentication?`| `boolean`| `false`| Require a locally-stored token for authentication. See the [tokens guide](external_link) for more.  
`signing_algorithm`| `String.t`| `"HS256"`| The algorithm to use for token signing. Available signing algorithms are; EdDSA, Ed448ph, Ed448, Ed25519ph, Ed25519, PS512, PS384, PS256, ES512, ES384, ES256, RS512, RS384, RS256, HS512, HS384 and HS256.  
`token_lifetime`| `pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}`| `{14, :days}`| How long a token should be valid. See [the tokens guide](external_link) for more.  
`signing_secret`| `(any, any -> any) | module | String.t`| | The secret used to sign tokens. Takes either a module which implements the [`AshAuthentication.Secret`](external_link) behaviour, a 2 arity anonymous function or a string.  
  
##  __ authentication.strategies

Configure authentication strategies on this resource

##  __ authentication.add_ons

Additional add-ons related to, but not providing authentication

[ ← Previous Page  Upgrading  ](external_link)

[ Next Page →  DSL: AshAuthentication.AddOn.Confirmation  ](external_link)