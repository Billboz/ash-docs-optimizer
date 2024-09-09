# AshAuthentication.Phoenix.Components.SignIn — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.SignIn (ash_authentication_phoenix v2.1.1)
  - __ Component hierarchy
  - __ Overrides
  - __ Props
- __ Summary
  - Types
- __ Types
- props()

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.SignIn (ash_authentication_phoenix v2.1.1)

Renders sign in mark-up for an authenticated resource.

This means that it will render sign-in UI for all of the authentication strategies for a resource.

For each strategy configured on the resource a component name is inferred (e.g. [`AshAuthentication.Strategy.Password`](external_link) becomes [`AshAuthentication.Phoenix.Components.Password`](external_link)) and is rendered into the output.

##  __ Component hierarchy

This is the top-most authentication component.

Children:

  * [`AshAuthentication.Phoenix.Components.Password`](external_link).
  * [`AshAuthentication.Phoenix.Components.OAuth2`](external_link).



##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS class for the root `div` element.
  * `:strategy_class` \- CSS class for a `div` surrounding each strategy component.
  * `:show_banner` \- Whether or not to show the banner.
  * `:authentication_error_container_class` \- CSS class for the container for the text of the authentication error.
  * `:authentication_error_text_class` \- CSS class for the authentication error text.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

##  __ Props

  * `overrides` \- A list of override modules.
  * `otp_app` \- The otp app to look for authenticated resources in
  * `live_action` \- The live_action being routed to
  * `path` \- The path to use as the base for links
  * `reset_path` \- The path to use for reset links
  * `register_path` \- The path to use for register links



#  __ Summary

##  Types

props()

#  __ Types

__ Link to this type

# props()

[ __ View Source ](external_link)
    
    
    @type props() :: %{
      optional(:overrides) => [[module](external_link)()],
      optional(:path) => [String.t](external_link)(),
      optional(:reset_path) => [String.t](external_link)(),
      optional(:register_path) => [String.t](external_link)(),
      optional(:current_tenant) => [String.t](external_link)(),
      optional(:context) => [map](external_link)()
    }
