# AshAuthentication.Phoenix.Components.OAuth2 — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.OAuth2 (ash_authentication_phoenix v2.1.1)
  - __ Component hierarchy
  - __ Props
  - __ Overrides
- __ Summary
  - Types
  - Functions
- __ Types
- props()
- __ Functions
- icon(assigns)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.OAuth2 (ash_authentication_phoenix v2.1.1)

Generates a sign-in button for OAuth2.

##  __ Component hierarchy

This is the top-most strategy-specific component, nested below [`AshAuthentication.Phoenix.Components.SignIn`](external_link).

##  __ Props

  * `strategy` \- The strategy configuration as per [`AshAuthentication.Info.strategy/2`](external_link). Required.
  * `overrides` \- A list of override modules.



##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS classes for the root `div` element.
  * `:link_class` \- CSS classes for the `a` element.
  * `:icon_class` \- CSS classes for the icon SVG.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

#  __ Summary

##  Types

props()

##  Functions

icon(assigns)

#  __ Types

__ Link to this type

# props()

[ __ View Source ](external_link)
    
    
    @type props() :: %{
      :strategy => [AshAuthentication.Strategy.t](external_link)(),
      optional(:overrides) => [[module](external_link)()],
      optional(:auth_routes_prefix) => [String.t](external_link)()
    }

#  __ Functions

__ Link to this function

# icon(assigns)

[ __ View Source ](external_link)
