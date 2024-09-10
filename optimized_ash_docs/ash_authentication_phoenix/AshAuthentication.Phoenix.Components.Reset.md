# AshAuthentication.Phoenix.Components.Reset — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Reset (ash_authentication_phoenix v2.1.1)
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

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Reset (ash_authentication_phoenix v2.1.1)

Renders a password-reset form.

##  __ Component hierarchy

Children:

  * [`AshAuthentication.Phoenix.Components.Password.Input.password_field/1`](external_link)
  * [`AshAuthentication.Phoenix.Components.Password.Input.password_confirmation_field/1`](external_link)
  * [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](external_link)



##  __ Props

  * `token` \- The reset token.
  * `overrides` \- A list of override modules.
  * `otp_app` \- The otp app to look for authenticated resources in



##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS class for the root `div` element.
  * `:strategy_class` \- CSS class for a `div` surrounding each strategy component.
  * `:show_banner` \- Whether or not to show the banner.



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

#  __ Summary

##  Types

props()

#  __ Types

__ Link to this type

# props()

[ __ View Source ](external_link)
    
    
    @type props() :: %{:token => [String.t](external_link)(), optional(:overrides) => [[module](external_link)()]}
