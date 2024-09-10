# AshAuthentication.Phoenix.Components.MagicLink — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.MagicLink (ash_authentication_phoenix v2.1.1)
  - __ Component hierarchy
  - __ Props
  - __ Overrides
- __ Summary
  - Types
- __ Types
- props()

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.MagicLink (ash_authentication_phoenix v2.1.1)

Generates a sign-in for for a resource using the "Magic link" strategy.

##  __ Component hierarchy

This is the top-most strategy-specific component, nested below [`AshAuthentication.Phoenix.Components.SignIn`](external_link).

Children:

  * [`AshAuthentication.Phoenix.Components.Password.Input.identity_field/1`](external_link)
  * [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](external_link)



##  __ Props

  * `strategy` \- the strategy configuration as per [`AshAuthentication.Info.strategy/2`](external_link). Required.
  * `overrides` \- A list of override modules.



##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS class for the root `div` element.
  * `:label_class` \- CSS class for the `h2` element.
  * `:form_class` \- CSS class for the `form` element.
  * `:disable_button_text` \- Text for the submit button when the request is happening.
  * `:request_flash_text` \- Text for the flash message when a request is received. Set to `nil` to disable.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

#  __ Summary

##  Types

props()

#  __ Types

__ Link to this type

# props()

[ __ View Source ](external_link)
    
    
    @type props() :: %{
      :strategy => [AshAuthentication.Strategy.t](external_link)(),
      optional(:overrides) => [[module](external_link)()],
      optional(:current_tenant) => [String.t](external_link)(),
      optional(:context) => [map](external_link)(),
      optional(:auth_routes_prefix) => [String.t](external_link)()
    }
