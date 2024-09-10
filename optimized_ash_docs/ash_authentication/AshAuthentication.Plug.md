# AshAuthentication.Plug — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Plug behaviour (ash_authentication v4.0.4)
    - __ Using in Phoenix
    - __ Using in a Plug application
- __ Summary
  - Types
  - Callbacks
- __ Types
- activity()
- token()
- __ Callbacks
- handle_failure(t, activity, any)
- handle_success(t, activity, arg3, arg4)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Plug behaviour (ash_authentication v4.0.4)

Generate an authentication plug.

Use in your app by creating a new module called `AuthPlug` or similar:
    
    
    defmodule MyAppWeb.AuthPlug do
      use AshAuthentication.Plug, otp_app: :my_app
    
      def handle_success(conn, _activity, user, _token) do
        conn
        |> store_in_session(user)
        |> send_resp(200, "Welcome back #{user.name}")
      end
    
      def handle_failure(conn, _activity, reason) do
        conn
        |> send_resp(401, "Better luck next time")
      end
    end

###  __ Using in Phoenix

In your Phoenix router you can add it:
    
    
    scope "/auth" do
      pipe_through :browser
      forward "/", MyAppWeb.AuthPlug
    end

In order to load any authenticated users for either web or API users you can add the following to your router:
    
    
    import MyAppWeb.AuthPlug
    
    pipeline :session_users do
      plug :load_from_session
    end
    
    pipeline :bearer_users do
      plug :load_from_bearer
    end
    
    scope "/", MyAppWeb do
      pipe_through [:browser, :session_users]
    
      live "/", PageLive, :home
    end
    
    scope "/api", MyAppWeb do
      pipe_through [:api, :bearer_users]
    
      get "/" ApiController, :index
    end

###  __ Using in a Plug application
    
    
    use Plug.Router
    
    forward "/auth", to: MyAppWeb.AuthPlug

Note that you will need to include a bunch of other plugs in the pipeline to do useful things like session and query param fetching.

#  __ Summary

##  Types

activity()

token()

##  Callbacks

handle_failure(t, activity, any)

When there is any failure during authentication this callback is called.

handle_success(t, activity, arg3, arg4)

When authentication has been succesful, this callback will be called with the conn, the successful activity, the authenticated resource and a token.

#  __ Types

__ Link to this type

# activity()

[ __ View Source ](external_link)
    
    
    @type activity() :: {[atom](external_link)(), [atom](external_link)()}

__ Link to this type

# token()

[ __ View Source ](external_link)
    
    
    @type token() :: [String.t](external_link)()

#  __ Callbacks

__ Link to this callback

# handle_failure(t, activity, any)

[ __ View Source ](external_link)
    
    
    @callback handle_failure([Plug.Conn.t](external_link)(), activity(), [any](external_link)()) :: [Plug.Conn.t](external_link)()

When there is any failure during authentication this callback is called.

Note that this includes not just authentication failures but potentially route-not-found errors also.

The default implementation simply returns a 401 status with the message "Access denied". You almost definitely want to override this.

__ Link to this callback

# handle_success(t, activity, arg3, arg4)

[ __ View Source ](external_link)
    
    
    @callback handle_success(
      [Plug.Conn.t](external_link)(),
      activity(),
      [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)() | nil,
      token() | nil
    ) ::
      [Plug.Conn.t](external_link)()

When authentication has been succesful, this callback will be called with the conn, the successful activity, the authenticated resource and a token.

This allows you to choose what action to take as appropriate for your application.

The default implementation calls `store_in_session/2` and returns a simple "Access granted" message to the user. You almost definitely want to override this behaviour.
