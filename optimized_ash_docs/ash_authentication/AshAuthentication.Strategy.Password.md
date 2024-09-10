# AshAuthentication.Strategy.Password — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Password (ash_authentication v4.0.4)
    - __ Example:
  - __ Actions
    - __ Examples:
  - __ Plugs
    - __ Examples:
  - __ Testing
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- reset_token_for(strategy, user)
- transform(entity, dsl_state)
- verify(strategy, dsl_state)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Password (ash_authentication v4.0.4)

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

#  __ Summary

##  Types

t()

##  Functions

reset_token_for(strategy, user)

Generate a reset token for a user.

transform(entity, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

verify(strategy, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshAuthentication.Strategy.Password{
      confirmation_required?: [boolean](external_link)(),
      hash_provider: [module](external_link)(),
      hashed_password_field: [atom](external_link)(),
      identity_field: [atom](external_link)(),
      name: [atom](external_link)(),
      password_confirmation_field: [atom](external_link)(),
      password_field: [atom](external_link)(),
      provider: [atom](external_link)(),
      register_action_accept: [[atom](external_link)()],
      register_action_name: [atom](external_link)(),
      registration_enabled?: [boolean](external_link)(),
      resettable: nil | [AshAuthentication.Strategy.Password.Resettable.t](external_link)(),
      resource: [module](external_link)(),
      sign_in_action_name: [atom](external_link)(),
      sign_in_enabled?: [boolean](external_link)(),
      sign_in_token_lifetime: [pos_integer](external_link)(),
      sign_in_tokens_enabled?: [boolean](external_link)(),
      sign_in_with_token_action_name: [atom](external_link)(),
      strategy_module: AshAuthentication.Strategy.Password
    }

#  __ Functions

__ Link to this function

# reset_token_for(strategy, user)

[ __ View Source ](external_link)
    
    
    @spec reset_token_for(t(), [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()) :: {:ok, [String.t](external_link)()} | :error

Generate a reset token for a user.

Used by [`AshAuthentication.Strategy.Password.RequestPasswordResetPreparation`](external_link).

__ Link to this function

# transform(entity, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

__ Link to this function

# verify(strategy, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).
