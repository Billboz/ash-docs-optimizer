# AshAuthentication.Phoenix.SignInLive — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.SignInLive (ash_authentication_phoenix v2.1.1)
  - __ Overrides

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.SignInLive (ash_authentication_phoenix v2.1.1)

A generic, white-label sign-in page.

This live-view can be rendered into your app using the [`AshAuthentication.Phoenix.Router.sign_in_route/1`](external_link) macro in your router (or by using [`Phoenix.LiveView.Controller.live_render/3`](external_link) directly in your markup).

This live-view finds all Ash resources with an authentication configuration (via [`AshAuthentication.authenticated_resources/1`](external_link)) and renders the appropriate UI for their providers using [`AshAuthentication.Phoenix.Components.SignIn`](external_link).

##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS class for the root `div` element.
  * `:sign_in_id` \- Element ID for the `SignIn` LiveComponent.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.
