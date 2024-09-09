# DSL: AshAuthentication.AddOn.Confirmation — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication.AddOn.Confirmation
  - __ Example
  - __ Attributes
  - __ Actions
    - __ Example
  - __ Plugs
    - __ Example
  - __ authentication.add_ons.confirmation
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication.AddOn.Confirmation

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

##  __ authentication.add_ons.confirmation
    
    
    confirmation name \\ :confirm

User confirmation flow

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`name`| `atom`| | Uniquely identifies the add-on.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`monitor_fields`| `list(atom)`| | A list of fields to monitor for changes. Confirmation will be sent when one of these fields are changed.  
`sender`| `(any, any, any -> any) | module`| | How to send the confirmation instructions to the user.  
`token_lifetime`| `pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}`| `{3, :days}`| How long should the confirmation token be valid. If no unit is provided, then hours is assumed.  
`confirmed_at_field`| `atom`| `:confirmed_at`| The name of the field to store the time that the last confirmation took place. Created if it does not exist.  
`confirm_on_create?`| `boolean`| `true`| Generate and send a confirmation token when a new resource is created. Triggers when a create action is executed _and_ one of the monitored fields is being set.  
`confirm_on_update?`| `boolean`| `true`| Generate and send a confirmation token when a resource is changed. Triggers when an update action is executed _and_ one of the monitored fields is being set.  
`inhibit_updates?`| `boolean`| `true`| Whether or not to wait until confirmation is received before actually changing a monitored field. See [the confirmation guide](external_link) for more.  
`confirm_action_name`| `atom`| `:confirm`| The name of the action to use when performing confirmation. Will be created if it does not already exist.  
  
###  __ Introspection

Target: [`AshAuthentication.AddOn.Confirmation`](external_link)

[ ← Previous Page  DSL: AshAuthentication  ](external_link)

[ Next Page →  DSL: AshAuthentication.Strategy.Auth0  ](external_link)
