# AshAuthentication.Phoenix.Components.Password.ResetForm — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Password.ResetForm (ash_authentication_phoenix v2.1.1)
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

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Password.ResetForm (ash_authentication_phoenix v2.1.1)

Generates a default password reset form.

##  __ Component hierarchy

This is a child of [`AshAuthentication.Phoenix.Components.Password`](external_link).

Children:

  * [`AshAuthentication.Phoenix.Components.Password.Input.identity_field/1`](external_link)
  * [`AshAuthentication.Phoenix.Components.Password.Input.submit/1`](external_link)



##  __ Props

  * `strategy` \- The configuration map as per [`AshAuthentication.Info.strategy/2`](external_link). Required.
  * `label` \- The text to show in the submit label. Generated from the configured action name (via [`Phoenix.Naming.humanize/1`](external_link)) if not supplied. Set to `false` to disable.
  * `overrides` \- A list of override modules.



##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS class for the root `div` element.
  * `:label_class` \- CSS class for the `h2` element.
  * `:form_class` \- CSS class for the `form` element.
  * `:disable_button_text` \- Text for the submit button when the request is happening.
  * `:slot_class` \- CSS class for the `div` surrounding the slot.
  * `:reset_flash_text` \- Text for the flash message when a request is received. Set to `nil` to disable.



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
      optional(:label) => [String.t](external_link)() | false,
      optional(:overrides) => [[module](external_link)()],
      optional(:current_tenant) => [String.t](external_link)(),
      optional(:context) => [map](external_link)(),
      optional(:auth_routes_prefix) => [String.t](external_link)()
    }
