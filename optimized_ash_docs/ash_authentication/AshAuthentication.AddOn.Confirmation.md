# AshAuthentication.AddOn.Confirmation — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.AddOn.Confirmation (ash_authentication v4.0.4)
  - __ Example
  - __ Attributes
  - __ Actions
    - __ Example
  - __ Plugs
    - __ Example
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- confirmation_token(strategy, changeset, user)
- transform(entity, dsl_state)
- verify(strategy, dsl_state)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.AddOn.Confirmation (ash_authentication v4.0.4)

Confirmation support.

Sometimes when creating a new user, or changing a sensitive attribute (such as their email address) you may want to wait for the user to confirm by way of sending them a confirmation token to prove that it was really them that took the action.

In order to add confirmation to your resource, it must been the following minimum requirements:

  1. Have a primary key
  2. Have at least one attribute you wish to confirm
  3. Tokens must be enabled



##  __ Example
    
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        extensions: [AshAuthentication],
        domain: MyApp.Accounts
    
      attributes do
        uuid_primary_key :id
        attribute :email, :ci_string, allow_nil?: false
      end
    
      authentication do
        add_ons do
          confirmation :confirm do
            monitor_fields [:email]
            sender MyApp.ConfirmationSender
          end
        end
    
        strategies do
          # ...
        end
      end
    
      identities do
        identity :email, [:email] do
          eager_check_with MyApp.Accounts
        end
      end
    end

##  __ Attributes

A `confirmed_at` attribute will be added to your resource if it's not already present (see `confirmed_at_field` in the DSL documentation).

##  __ Actions

By default confirmation will add an action which updates the `confirmed_at` attribute as well as retrieving previously stored changes and applying them to the resource.

If you wish to perform the confirm action directly from your code you can do so via the [`AshAuthentication.Strategy`](external_link) protocol.

###  __ Example
    
    
    iex> strategy = Info.strategy!(Example.User, :confirm)
    ...> {:ok, user} = Strategy.action(strategy, :confirm, %{"confirm" => confirmation_token()})
    ...> user.confirmed_at >= one_second_ago()
    true

##  __ Plugs

Confirmation provides a single endpoint for the `:confirm` phase. If you wish to interact with the plugs directly, you can do so via the [`AshAuthentication.Strategy`](external_link) protocol.

###  __ Example
    
    
    iex> strategy = Info.strategy!(Example.User, :confirm)
    ...> conn = conn(:get, "/user/confirm", %{"confirm" => confirmation_token()})
    ...> conn = Strategy.plug(strategy, :confirm, conn)
    ...> {_conn, {:ok, user}} = Plug.Helpers.get_authentication_result(conn)
    ...> user.confirmed_at >= one_second_ago()
    true

#  __ Summary

##  Types

t()

##  Functions

confirmation_token(strategy, changeset, user)

Generate a confirmation token for a changeset.

transform(entity, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

verify(strategy, dsl_state)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshAuthentication.AddOn.Confirmation{
      confirm_action_name: [atom](external_link)(),
      confirm_on_create?: [boolean](external_link)(),
      confirm_on_update?: [boolean](external_link)(),
      confirmed_at_field: [atom](external_link)(),
      inhibit_updates?: [boolean](external_link)(),
      monitor_fields: [[atom](external_link)()],
      name: :confirm,
      provider: :confirmation,
      resource: [module](external_link)(),
      sender: nil | {[module](external_link)(), [keyword](external_link)()},
      strategy_module: [module](external_link)(),
      token_lifetime: hours :: [pos_integer](external_link)()
    }

#  __ Functions

__ Link to this function

# confirmation_token(strategy, changeset, user)

[ __ View Source ](external_link)
    
    
    @spec confirmation_token(t(), [Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)(), [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()) ::
      {:ok, [String.t](external_link)()} | :error | {:error, [any](external_link)()}

Generate a confirmation token for a changeset.

This will generate a token with the `"act"` claim set to the confirmation action for the strategy, and the `"chg"` claim will contain any changes.

__ Link to this function

# transform(entity, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.transform/2`](external_link).

__ Link to this function

# verify(strategy, dsl_state)

[ __ View Source ](external_link)

Callback implementation for [`AshAuthentication.Strategy.Custom.verify/2`](external_link).
