# AshAuthentication.Phoenix.Overrides — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Overrides (ash_authentication_phoenix v2.1.1)
- __ Summary
  - Functions
- __ Functions
- override(component, list)
- set(selector, value)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Overrides (ash_authentication_phoenix v2.1.1)

Behaviour for overriding component styles and attributes in your application.

The default implementation is [`AshAuthentication.Phoenix.Overrides.Default`](external_link) which uses [TailwindCSS](external_link) to generate a fairly generic looking user interface.

You can override this by adding your own override modules to the [`AshAuthentication.Phoenix.Router.sign_in_route/1`](external_link) macro in your router:
    
    
    sign_in_route overrides: [MyAppWeb.AuthOverrides, AshAuthentication.Phoenix.Overrides.Default]

and defining `lib/my_app_web/auth_overrides.ex` within which you can set any overrides.

The `use` macro defines overridable versions of all callbacks which return `nil`, so you only need to define the functions that you care about.

Each of the override modules specified in the config will be called in the order that they're specified, so you can still use the defaults if you just override some properties.
    
    
    defmodule MyAppWeb.AuthOverrides do
      use AshAuthentication.Phoenix.Overrides
      alias AshAuthentication.Phoenix.Components
    
      override Components.Banner do
        set :image_url, "/images/sign_in_logo.png"
      end
    end

#  __ Summary

##  Functions

override(component, list)

Define overrides for a specific component.

set(selector, value)

Override a setting within a component.

#  __ Functions

__ Link to this macro

# override(component, list)

[ __ View Source ](external_link) (macro)
    
    
    @spec override(component :: [module](external_link)(), [{:do, [Macro.t](external_link)()}]) :: [Macro.t](external_link)()

Define overrides for a specific component.

__ Link to this macro

# set(selector, value)

[ __ View Source ](external_link) (macro)
    
    
    @spec set([atom](external_link)(), [any](external_link)()) :: [Macro.t](external_link)()

Override a setting within a component.
