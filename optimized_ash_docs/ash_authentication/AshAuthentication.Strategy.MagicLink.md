# AshAuthentication.Strategy.MagicLink — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.MagicLink (ash_authentication v4.0.4)
    - __ Example
  - __ Actions
    - __ Examples
  - __ Plugs
    - __ Examples:
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- request_token_for(strategy, user)
- transform(entity, dsl_state)
- verify(strategy, dsl_state)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.MagicLink (ash_authentication v4.0.4)

Strategy for authentication using a magic link.

In order to use magic link authentication your resource needs to meet the following minimum requirements:

  1. Have a primary key.
  2. A uniquely constrained identity field (eg `username` or `email`)
  3. Have tokens enabled.



There are other options documented in the DSL.

###  __ Example
    
    
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
          magic_link do
            identity_field :email
            sender fn user, token, _opts ->
              MyApp.Emails.deliver_magic_link(user, token)
            end
          end
        end
      end
    
      identities do
        identity :unique_email, [:email]
      end
    end

##  __ Actions

By default the magic link strategy will automatically generate the request and sign-in actions for you, however you're free to define them yourself. If you do, then the action will be validated to ensure that all the needed configuration is present.

If you wish to work with the actions directly from your code you can do so via the [`AshAuthentication.Strategy`](external_link) protocol.

###  __ Examples

Requesting that a magic link token is sent for a user:
    
    
    iex> strategy = Info.strategy!(Example.User, :magic_link)
    ...> user = build_user()
    ...> Strategy.action(strategy, :request, %{"username" => user.username})
    :ok

Signing in using a magic link token:
    
    
    ...> {:ok, token} = MagicLink.request_token_for(strategy, user)
    ...> {:ok, signed_in_user} = Strategy.action(strategy, :sign_in, %{"token" => token})
    ...> signed_in_user.id == user
    true

##  __ Plugs

The magic link strategy provides plug endpoints for both request and sign-in actions.

If you wish to work with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](external_link) protocol.

###  __ Examples:

Dispatching to plugs directly:
    
    
    iex> strategy = Info.strategy!(Example.User, :magic_link)
    ...> user = build_user()
    ...> conn = conn(:post, "/user/magic_link/request", %{"user" => %{"username" => user.username}})
    ...> conn = Strategy.plug(strategy, :request, conn)
    ...> {_conn, {:ok, nil}} = Plug.Helpers.get_authentication_result(conn)
    
    ...> {:ok, token} = MagicLink.request_token_for(strategy, user)
    ...> conn = conn(:get, "/user/magic_link", %{"token" => token})
    ...> conn = Strategy.plug(strategy, :sign_in, conn)
    ...> {_conn, {:ok, signed_in_user}} = Plug.Helpers.get_authentication_result(conn)
    ...> signed_in_user.id == user.id
    true

See the [Magic Link Tutorial](external_link) for more information.

#  __ Summary

##  Types

t()

##  Functions

request_token_for(strategy, user)

Generate a magic link token for a user.

transform(entity, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

verify(strategy, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshAuthentication.Strategy.MagicLink{
      identity_field: [atom](external_link)(),
      name: [atom](external_link)(),
      request_action_name: [atom](external_link)(),
      resource: [module](external_link)(),
      sender: {[module](external_link)(), [keyword](external_link)()},
      sign_in_action_name: [atom](external_link)(),
      single_use_token?: [boolean](external_link)(),
      strategy_module: [module](external_link)(),
      token_lifetime: [pos_integer](external_link)(),
      token_param_name: [atom](external_link)()
    }

#  __ Functions

__ Link to this function

# request_token_for(strategy, user)

[ __ View Source ](external_link)
    
    
    @spec request_token_for(t(), [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()) :: {:ok, [binary](external_link)()} | :error

Generate a magic link token for a user.

Used by [`AshAuthentication.Strategy.MagicLink.RequestPreparation`](external_link).

__ Link to this function

# transform(entity, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

__ Link to this function

# verify(strategy, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).
