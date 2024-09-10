# Setting up your routes for LiveView — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) Setting up your routes for LiveView
  - __ Authentication helper

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) Setting up your routes for LiveView

A built in live session wrapper is provided that will set the user assigns for you. To use it, wrap your live routes like so:
    
    
    ash_authentication_live_session :session_name do
      live "/route", ProjectLive.Index, :index
    end

There are two problems with the above, however.

  1. If there is no user present, it will not set `current_user: nil`.
  2. You may want a way to require that a user is present for some routes, and not for others.



##  __ Authentication helper

To accomplish this, we use standard Phoenix [`on_mount` hooks](external_link). Lets define a hook that gives us three potential behaviors, one for optionally having a user signed in, one for requiring a signed in user, and one for requiring that there is no signed in user.
    
    
    # lib/my_app_web/live_user_auth.ex
    defmodule MyAppWeb.LiveUserAuth do
      @moduledoc """
      Helpers for authenticating users in LiveViews.
      """
    
      import Phoenix.Component
      use MyAppWeb, :verified_routes
    
      def on_mount(:live_user_optional, _params, _session, socket) do
        if socket.assigns[:current_user] do
          {:cont, socket}
        else
          {:cont, assign(socket, :current_user, nil)}
        end
      end
    
      def on_mount(:live_user_required, _params, _session, socket) do
        if socket.assigns[:current_user] do
          {:cont, socket}
        else
          {:halt, Phoenix.LiveView.redirect(socket, to: ~p"/sign-in")}
        end
      end
    
      def on_mount(:live_no_user, _params, _session, socket) do
        if socket.assigns[:current_user] do
          {:halt, Phoenix.LiveView.redirect(socket, to: ~p"/")}
        else
          {:cont, assign(socket, :current_user, nil)}
        end
      end
    end

And we can use this as follows:
    
    
    # lib/my_app_web/router.ex
      # ...
      scope "/", MyAppWeb do
        # ...
        ash_authentication_live_session :authentication_required,
          on_mount: {MyAppWeb.LiveUserAuth, :live_user_required} do
          live "/protected_route", ProjectLive.Index, :index
        end
    
        ash_authentication_live_session :authentication_optional,
          on_mount: {MyAppWeb.LiveUserAuth, :live_user_optional} do
          live "/", ProjectLive.Index, :index
        end
      end
      # ...

You can also use this to prevent users from visiting the auto generated `sign_in` route:
    
    
    sign_in_route(on_mount: [{MyAppWeb.LiveUserAuth, :live_no_user}])

[ ← Previous Page  Getting Started Ash Authentication Phoenix  ](external_link)

[ Next Page →  Overriding Ash Authentication Phoenix's default UI  ](external_link)
