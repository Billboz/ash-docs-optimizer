# AshAuthentication.Phoenix.Components.Password.Input — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Password.Input (ash_authentication_phoenix v2.1.1)
  - __ Component hierarchy
  - __ Overrides
- __ Summary
  - Functions
- __ Functions
- error(assigns)
  - __ Props
- identity_field(assigns)
  - __ Props
- password_confirmation_field(assigns)
  - __ Props
- password_field(assigns)
  - __ Props
- submit(assigns)
  - __ Props

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Password.Input (ash_authentication_phoenix v2.1.1)

Function components for dealing with form input during password authentication.

##  __ Component hierarchy

These function components are consumed by [`AshAuthentication.Phoenix.Components.Password.SignInForm`](external_link), [`AshAuthentication.Phoenix.Components.Password.RegisterForm`](external_link) and `AshAuthentication.Phoenix.Components.ResetForm`.

##  __ Overrides

This component provides the following overrides:

  * `:label_class` \- CSS class for `label` elements.
  * `:field_class` \- CSS class for `div` elements surrounding the fields.
  * `:input_class` \- CSS class for text/password `input` elements.
  * `:identity_input_label` \- Label for identity field.
  * `:password_input_label` \- Label for password field.
  * `:password_confirmation_input_label` \- Label for password confirmation field.
  * `:input_class_with_error` \- CSS class for text/password `input` elements when there is a validation error.
  * `:submit_class` \- CSS class for the form submit `input` element.
  * `:error_ul` \- CSS class for the `ul` element on error lists.
  * `:error_li` \- CSS class for the `li` elements on error lists.
  * `:input_debounce` \- Number of milliseconds to debounce input by (or `nil` to disable).



See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

#  __ Summary

##  Functions

error(assigns)

Generate a list of errors for a field (if there are any).

identity_field(assigns)

Generate a form field for the configured identity field.

password_confirmation_field(assigns)

Generate a form field for the configured password confirmation entry field.

password_field(assigns)

Generate a form field for the configured password entry field.

submit(assigns)

Generate an form submit button.

#  __ Functions

__ Link to this function

# error(assigns)

[ __ View Source ](external_link)
    
    
    @spec error(%{
      :socket => [Phoenix.LiveView.Socket.t](external_link)(),
      :form => [AshPhoenix.Form.t](external_link)(),
      :field => [atom](external_link)(),
      optional(:field_label) => [String.Chars.t](external_link)(),
      optional(:errors) => [{[atom](external_link)(), [String.t](external_link)()}]
    }) :: [Phoenix.LiveView.Rendered.t](external_link)() | [no_return](external_link)()

Generate a list of errors for a field (if there are any).

##  __ Props

  * `socket` \- Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
  * `form` \- An [`AshPhoenix.Form`](external_link). Required.
  * `field` \- The field for which to retrieve the errors. Required.
  * `overrides` \- A list of override modules.



__ Link to this function

# identity_field(assigns)

[ __ View Source ](external_link)
    
    
    @spec identity_field(%{
      :socket => [Phoenix.LiveView.Socket.t](external_link)(),
      :strategy => [AshAuthentication.Strategy.t](external_link)(),
      :form => [AshPhoenix.Form.t](external_link)(),
      optional(:input_type) => :text | :email,
      optional(:overrides) => [[module](external_link)()]
    }) :: [Phoenix.LiveView.Rendered.t](external_link)() | [no_return](external_link)()

Generate a form field for the configured identity field.

##  __ Props

  * `socket` \- Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
  * `strategy` \- The configuration map as per [`AshAuthentication.authenticated_resources/1`](external_link). Required.
  * `form` \- An [`AshPhoenix.Form`](external_link). Required.
  * `input_type` \- Either `:text` or `:email`. If not set it will try and guess based on the name of the identity field.
  * `overrides` \- A list of override modules.



__ Link to this function

# password_confirmation_field(assigns)

[ __ View Source ](external_link)
    
    
    @spec password_confirmation_field(%{
      :socket => [Phoenix.LiveView.Socket.t](external_link)(),
      :strategy => [AshAuthentication.Strategy.t](external_link)(),
      :form => [AshPhoenix.Form.t](external_link)(),
      optional(:overrides) => [[module](external_link)()]
    }) :: [Phoenix.LiveView.Rendered.t](external_link)() | [no_return](external_link)()

Generate a form field for the configured password confirmation entry field.

##  __ Props

  * `socket` \- Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
  * `strategy` \- The configuration map as per [`AshAuthentication.authenticated_resources/1`](external_link). Required.
  * `form` \- An [`AshPhoenix.Form`](external_link). Required.
  * `overrides` \- A list of override modules.



__ Link to this function

# password_field(assigns)

[ __ View Source ](external_link)
    
    
    @spec password_field(%{
      :socket => [Phoenix.LiveView.Socket.t](external_link)(),
      :strategy => [AshAuthentication.Strategy.t](external_link)(),
      :form => [AshPhoenix.Form.t](external_link)(),
      optional(:overrides) => [[module](external_link)()]
    }) :: [Phoenix.LiveView.Rendered.t](external_link)() | [no_return](external_link)()

Generate a form field for the configured password entry field.

##  __ Props

  * `socket` \- Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
  * `strategy` \- The configuration map as per [`AshAuthentication.authenticated_resources/1`](external_link). Required.
  * `form` \- An [`AshPhoenix.Form`](external_link). Required.
  * `overrides` \- A list of override modules.



__ Link to this function

# submit(assigns)

[ __ View Source ](external_link)
    
    
    @spec submit(%{
      :socket => [Phoenix.LiveView.Socket.t](external_link)(),
      :strategy => [AshAuthentication.Strategy.t](external_link)(),
      :form => [AshPhoenix.Form.t](external_link)(),
      :action => :sign_in | :register,
      optional(:label) => [String.t](external_link)(),
      optional(:overrides) => [[module](external_link)()]
    }) :: [Phoenix.LiveView.Rendered.t](external_link)() | [no_return](external_link)()

Generate an form submit button.

##  __ Props

  * `socket` \- Phoenix LiveView socket. This is needed to be able to retrieve the correct CSS configuration. Required.
  * `strategy` \- The configuration map as per [`AshAuthentication.authenticated_resources/1`](external_link). Required.
  * `form` \- An [`AshPhoenix.Form`](external_link). Required.
  * `action` \- Either `:sign_in` or `:register`. Required.
  * `label` \- The text to show in the submit label. Generated from the configured action name (via [`Phoenix.Naming.humanize/1`](external_link)) if not supplied.
  * `overrides` \- A list of override modules.


