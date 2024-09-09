# DSL: AshAuthentication.Strategy.MagicLink — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.MagicLink
    - __ Example
  - __ Actions
    - __ Examples
  - __ Plugs
    - __ Examples:
  - __ authentication.strategies.magic_link
    - __ Options
    - __ Introspection

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshAuthentication.Strategy.MagicLink

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

##  __ authentication.strategies.magic_link
    
    
    magic_link name \\ :magic_link

Strategy for authenticating using local users with a magic link

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`sender`| `(any, any, any -> any) | module`| | How to send the magic link to the user.  
`identity_field`| `atom`| `:username`| The name of the attribute which uniquely identifies the user, usually something like `username` or `email_address`.  
`token_lifetime`| `pos_integer | {pos_integer, :days | :hours | :minutes | :seconds}`| `{10, :minutes}`| How long the sign in token is valid. If no unit is provided, then `minutes` is assumed.  
`request_action_name`| `atom`| | The name to use for the request action. Defaults to `request_<strategy_name>`  
`single_use_token?`| `boolean`| `true`| Automatically revoke the token once it's been used for sign in.  
`sign_in_action_name`| `atom`| | The name to use for the sign in action. Defaults to `sign_in_with_<strategy_name>`  
`token_param_name`| `atom`| `:token`| The name of the token parameter in the incoming sign-in request.  
  
###  __ Introspection

Target: [`AshAuthentication.Strategy.MagicLink`](external_link)

[ ← Previous Page  DSL: AshAuthentication.Strategy.Google  ](external_link)

[ Next Page →  DSL: AshAuthentication.Strategy.OAuth2  ](external_link)
