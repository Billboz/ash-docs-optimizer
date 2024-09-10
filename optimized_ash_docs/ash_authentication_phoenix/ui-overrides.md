# Overriding Ash Authentication Phoenix's default UI — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) Overriding Ash Authentication Phoenix's default UI
  - __ Understanding overrides
  - __ Defining your own override module
  - __ Overriding at the router

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) Overriding Ash Authentication Phoenix's default UI

Ash Authentication Phoenix provides a default UI implementation to get you started, however we wanted there to be a middle road between "you gets what you gets" and "¯\_(ツ)_ /¯ make your own". Thus AAP's system of UI overrides were born.

Every one of our LiveView components (and there are [quite a few of them](external_link)) has a number of hooks where you can override either the CSS styles, text or images.

##  __ Understanding overrides

Let's start by looking at [`AshAuthentication.Phoenix.Components.SignIn`](external_link), which introspects your authenticatable resources and renders the components for each of strategies with sign-in enabled.

The [component documentation](external_link) describes it's known overrides, expected properties and even which components are likely to be rendered within it.

By default, if the `overrides` prop is not set, then the defaults will be taken from [`AshAuthentication.Phoenix.Overrides.Default`](external_link).

##  __ Defining your own override module

If you find that the default overrides don't quite cut it for your application you can define your own override module with the [`AshAuthentication.Phoenix.Overrides`](external_link) module.

For example, if we wanted to change the default banner used on the sign-in page:
    
    
    defmodule MyAppWeb.AuthOverrides do
      use AshAuthentication.Phoenix.Overrides
    
      override AshAuthentication.Phoenix.Components.Banner do
        set :image_url, "/images/rickroll.gif"
      end
    end

You don't have to define all overrides for all components - although you can - only the ones you actually want to change. This is why the `overrides` component property takes a list - each override module will be searched in the order they're provided until an override is found. Therefore to render the sign-in UI with only the banner image changed you could render the sign-in component with the `overrides` prop set to `[MyAppWeb.AuthOverrides, AshAuthentication.Phoenix.Overrides.Default]`.

##  __ Overriding at the router

So far we have discussed how to override individual components when placing them in your own LiveView pages, however if you plan to re-use the default UI wholesale with only some overrides, then you can also provide your override options to the [`AshAuthentication.Phoenix.Router.sign_in_route/1`](external_link) and [`AshAuthentication.Phoenix.Router.reset_route/1`](external_link) route helpers in your Phoenix router:
    
    
    defmodule MyAppWeb.Router do
      use MyAppWeb, :router
      use AshAuthentication.Phoenix.Router
    
      # ...
    
      scope "/", MyAppWeb do
        sign_in_route(overrides: [MyAppWeb.AuthOverrides, AshAuthentication.Phoenix.Overrides.Default])
      end
    end

[ ← Previous Page  Setting up your routes for LiveView  ](external_link)
