# AshAuthentication.Phoenix.Controller — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Controller behaviour (ash_authentication_phoenix v2.1.1)
  - __ Example
- __ Summary
  - Types
  - Callbacks
- __ Types
- activity()
- t()
- token()
- user()
- __ Callbacks
- failure(t, activity, reason)
- sign_out(t, params)
- success(t, activity, user, token)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Controller behaviour (ash_authentication_phoenix v2.1.1)

The authentication controller generator.

Since authentication often requires explicit HTTP requests to do things like set cookies or return Authorization headers, use this module to create an `AuthController` in your Phoenix application.

##  __ Example

Handling the registration or authentication of a normal web-based user.
    
    
    defmodule MyAppWeb.AuthController do
      use MyAppWeb, :controller
      use AshAuthentication.Phoenix.Controller
    
      def success(conn, _activity, user, _token) do
        conn
        |> store_in_session(user)
        |> assign(:current_user, user)
        |> redirect(to: Routes.page_path(conn, :index))
      end
    
      def failure(conn, _activity, _reason) do
        conn
        |> put_status(401)
        |> render("failure.html")
      end
    
      def sign_out(conn, _params) do
        conn
        |> clear_session()
        |> render("sign_out.html")
      end
    end

Handling registration or authentication of an API user.
    
    
    defmodule MyAppWeb.ApiAuthController do
      use MyAppWeb, :controller
      use AshAuthentication.Phoenix.Controller
      alias AshAuthentication.TokenRevocation
    
      def success(conn, _activity, _user, token) do
        conn
        |> put_status(200)
        |> json(%{
          authentication: %{
            status: :success,
            bearer: token}
        })
      end
    
      def failure(conn, _activity, _reason) do
        conn
        |> put_status(401)
        |> json(%{
          authentication: %{
            status: :failed
          }
        })
      end
    
      def sign_out(conn, _params) do
        conn
        |> revoke_bearer_tokens()
        |> json(%{
          status: :ok
        })
      end
    end

#  __ Summary

##  Types

activity()

t()

token()

user()

##  Callbacks

failure(t, activity, reason)

Called when authentication fails.

sign_out(t, params)

Called when a request to sign out is received.

success(t, activity, user, token)

Called when authentication (or registration, depending on the provider) has been successful.

#  __ Types

__ Link to this type

# activity()

[ __ View Source ](external_link)
    
    
    @type activity() :: {strategy_name :: [atom](external_link)(), phase :: [atom](external_link)()}

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

__ Link to this type

# token()

[ __ View Source ](external_link)
    
    
    @type token() :: [String.t](external_link)() | nil

__ Link to this type

# user()

[ __ View Source ](external_link)
    
    
    @type user() :: [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)() | nil

#  __ Callbacks

__ Link to this callback

# failure(t, activity, reason)

[ __ View Source ](external_link)
    
    
    @callback failure([Plug.Conn.t](external_link)(), activity(), reason :: [any](external_link)()) :: [Plug.Conn.t](external_link)()

Called when authentication fails.

__ Link to this callback

# sign_out(t, params)

[ __ View Source ](external_link)
    
    
    @callback sign_out([Plug.Conn.t](external_link)(), params :: [map](external_link)()) :: [Plug.Conn.t](external_link)()

Called when a request to sign out is received.

__ Link to this callback

# success(t, activity, user, token)

[ __ View Source ](external_link)
    
    
    @callback success([Plug.Conn.t](external_link)(), activity(), user(), token()) :: [Plug.Conn.t](external_link)()

Called when authentication (or registration, depending on the provider) has been successful.
