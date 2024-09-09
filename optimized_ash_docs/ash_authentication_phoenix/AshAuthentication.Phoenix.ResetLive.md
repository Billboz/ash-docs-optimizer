# AshAuthentication.Phoenix.ResetLive — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.ResetLive (ash_authentication_phoenix v2.1.1)
  - __ Overrides

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.ResetLive (ash_authentication_phoenix v2.1.1)

A generic, white-label password reset page.

This live-view can be rendered into your app using the [`AshAuthentication.Phoenix.Router.reset_route/1`](external_link) macro in your router (or by using [`Phoenix.LiveView.Controller.live_render/3`](external_link) directly in your markup).

This live-view looks for the `token` URL parameter, and if found passes it to [`AshAuthentication.Phoenix.Components.Reset`](external_link).

##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS class for the root `div` element.
  * `:reset_id` \- Element ID for the `Reset` LiveComponent.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.
