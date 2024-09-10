# AshAuthentication.Phoenix.Components.Password — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Password (ash_authentication_phoenix v2.1.1)
  - __ Component hierarchy
  - __ Props
  - __ Slots
  - __ Overrides
- __ Summary
  - Types
- __ Types
- props()

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Password (ash_authentication_phoenix v2.1.1)

Generates sign in, registration and reset forms for a resource.

##  __ Component hierarchy

This is the top-most strategy-specific component, nested below [`AshAuthentication.Phoenix.Components.SignIn`](external_link).

Children:

  * [`AshAuthentication.Phoenix.Components.Password.SignInForm`](external_link)
  * [`AshAuthentication.Phoenix.Components.Password.RegisterForm`](external_link)
  * [`AshAuthentication.Phoenix.Components.Password.ResetForm`](external_link)



##  __ Props

  * `strategy` \- The strategy configuration as per [`AshAuthentication.Info.strategy/2`](external_link). Required.
  * `overrides` \- A list of override modules.



##  __ Slots

  * `sign_in_extra` \- rendered inside the sign-in form with the form passed as a slot argument.
  * `register_extra` \- rendered inside the registration form with the form passed as a slot argument.
  * `reset_extra` \- rendered inside the reset form with the form passed as a slot argument.
  * `path` \- used as the base for links to other pages.
  * `reset_path` \- the path to use for reset links.
  * `register_path` \- the path to use for register links.


    
    
    <.live_component
      module={AshAuthentication.Phoenix.Components.Password}
      strategy={AshAuthentication.Info.strategy!(Example.User, :password)}
      id="user-with-password"
      socket={@socket}
      overrides={[AshAuthentication.Phoenix.Overrides.Default]}>
    
      <:sign_in_extra :let={form}>
        <.input field={form[:capcha]} />
      </:sign_in_extra>
    
      <:register_extra :let={form}>
        <.input field={form[:name]} />
      </:register_extra>
    
      <:reset_extra :let={form}>
        <.input field={form[:capcha]} />
      </:reset_extra>
    </.live_component>

##  __ Overrides

This component provides the following overrides:

  * `:root_class` \- CSS class for the root `div` element.
  * `:interstitial_class` \- CSS class for the `div` element between the form and the button.
  * `:toggler_class` \- CSS class for the toggler `a` element.
  * `:sign_in_toggle_text` \- Toggle text to display when the sign in form is not showing (or `nil` to disable).
  * `:register_toggle_text` \- Toggle text to display when the register form is not showing (or `nil` to disable).
  * `:reset_toggle_text` \- Toggle text to display when the reset form is not showing (or `nil` to disable).
  * `:show_first` \- The form to show on first load. Either `:sign_in` or `:register`. Only relevant if paths aren't set for them in the router.
  * `:hide_class` \- CSS class to apply to hide an element.
  * `:slot_class` \- CSS class for the `div` surrounding the slot.



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
      optional(:live_action) => :sign_in | :register,
      optional(:path) => [String.t](external_link)(),
      optional(:current_tenant) => [String.t](external_link)(),
      optional(:context) => [map](external_link)()
    }
