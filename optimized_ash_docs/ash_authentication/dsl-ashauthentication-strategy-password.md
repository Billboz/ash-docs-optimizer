# DSL: AshAuthentication.Strategy.Password — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.Password
    - __ Example:
  - __ Actions
    - __ Examples:
  - __ Plugs
    - __ Examples:
  - __ Testing
  - __ authentication.strategies.password
    - __ Nested DSLs
    - __ Examples
    - __ Options
  - __ authentication.strategies.password.resettable
    - __ Options
    - __ Introspection
    - __ Introspection

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.Password

Strategy for authenticating using local resources as the source of truth.

In order to use password authentication your resource needs to meet the following minimum requirements:

  1. Have a primary key.
  2. A uniquely constrained identity field (eg `username` or `email`).
  3. A sensitive string field within which to store the hashed password.



There are other options documented in the DSL.

###  __ Example:
    
    
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

##  __ Actions

By default the password strategy will automatically generate the register, sign-in, reset-request and reset actions for you, however you're free to define them yourself. If you do, then the action will be validated to ensure that all the needed configuration is present.

If you wish to work with the actions directly from your code you can do so via the [`AshAuthentication.Strategy`](external_link) protocol.

###  __ Examples:

Interacting with the actions directly:
    
    
    iex> strategy = Info.strategy!(Example.User, :password)
    ...> {:ok, marty} = Strategy.action(strategy, :register, %{"username" => "marty", "password" => "outatime1985", "password_confirmation" => "outatime1985"})
    ...> marty.username |> to_string()
    "marty"
    
    ...> {:ok, user} = Strategy.action(strategy, :sign_in, %{"username" => "marty", "password" => "outatime1985"})
    ...> user.username |> to_string()
    "marty"

##  __ Plugs

The password strategy provides plug endpoints for all four actions, although only sign-in and register will be reported by `Strategy.routes/1` if the strategy is not configured as resettable.

If you wish to work with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](external_link) protocol.

###  __ Examples:

Dispatching to plugs directly:
    
    
    iex> strategy = Info.strategy!(Example.User, :password)
    ...> conn = conn(:post, "/user/password/register", %{"user" => %{"username" => "marty", "password" => "outatime1985", "password_confirmation" => "outatime1985"}})
    ...> conn = Strategy.plug(strategy, :register, conn)
    ...> {_conn, {:ok, marty}} = Plug.Helpers.get_authentication_result(conn)
    ...> marty.username |> to_string()
    "marty"
    
    ...> conn = conn(:post, "/user/password/reset_request", %{"user" => %{"username" => "marty"}})
    ...> conn = Strategy.plug(strategy, :reset_request, conn)
    ...> {_conn, :ok} = Plug.Helpers.get_authentication_result(conn)

##  __ Testing

See the [Testing guide](external_link) for tips on testing resources using this strategy.

##  __ authentication.strategies.password
    
    
    password name \\ :password

Strategy for authenticating using local resources as the source of truth.

###  __ Nested DSLs

  * resettable



###  __ Examples
    
    
    password :password do
      identity_field :email
      hashed_password_field :hashed_password
      hash_provider AshAuthentication.BcryptProvider
      confirmation_required? true
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`identity_field`| `atom`| `:username`| The name of the attribute which uniquely identifies the user, usually something like `username` or `email_address`.  
`hashed_password_field`| `atom`| `:hashed_password`| The name of the attribute within which to store the user's password once it has been hashed.  
`hash_provider`| `module`| [`AshAuthentication.BcryptProvider`](external_link)| A module which implements the [`AshAuthentication.HashProvider`](external_link) behaviour, to provide cryptographic hashing of passwords.  
`confirmation_required?`| `boolean`| `true`| Whether a password confirmation field is required when registering or changing passwords.  
`register_action_accept`| `list(atom)`| `[]`| A list of additional fields to be accepted in the register action.  
`password_field`| `atom`| `:password`| The name of the argument used to collect the user's password in plaintext when registering, checking or changing passwords.  
`password_confirmation_field`| `atom`| `:password_confirmation`| The name of the argument used to confirm the user's password in plaintext when registering or changing passwords.  
`register_action_name`| `atom`| | The name to use for the register action. Defaults to `register_with_<strategy_name>`  
`registration_enabled?`| `boolean`| `true`| If you do not want new users to be able to register using this strategy, set this to false.  
`sign_in_action_name`| `atom`| | The name to use for the sign in action. Defaults to `sign_in_with_<strategy_name>`  
`sign_in_enabled?`| `boolean`| `true`| If you do not want new users to be able to sign in using this strategy, set this to false.  
`sign_in_tokens_enabled?`| `boolean`| `true`| Whether or not to support generating short lived sign in tokens. Requires the resource to have tokens enabled.  
`sign_in_token_lifetime`| `pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}`| `{60, :seconds}`| A lifetime for which a generated sign in token will be valid, if `sign_in_tokens_enabled?`. Unit defaults to `:seconds`.  
  
##  __ authentication.strategies.password.resettable

Configure password reset options for the resource

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`sender`| `(any, any, any -> any) | module`| | The sender to use when sending password reset instructions.  
`token_lifetime`| `pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}`| `{3, :days}`| How long should the reset token be valid. If no unit is provided `:hours` is assumed.  
`request_password_reset_action_name`| `atom`| | The name to use for the action which generates a password reset token. Defaults to `request_password_reset_with_<strategy_name>`.  
`password_reset_action_name`| `atom`| | The name to use for the action which actually resets the user's password. Defaults to `password_reset_with_<strategy_name>`.  
  
###  __ Introspection

Target: [`AshAuthentication.Strategy.Password.Resettable`](external_link)

###  __ Introspection

Target: [`AshAuthentication.Strategy.Password`](external_link)

[ ← Previous Page  DSL: AshAuthentication.Strategy.Oidc  ](external_link)

[ Next Page →  DSL: AshAuthentication.TokenResource  ](external_link)