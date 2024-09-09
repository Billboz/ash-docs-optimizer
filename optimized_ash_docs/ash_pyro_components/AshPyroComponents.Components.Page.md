# AshPyroComponents.Components.Page — AshPyroComponents v0.1.0

Project: AshPyroComponents v0.1.0

## Table of Contents

- [ __ View Source ](external_link) AshPyroComponents.Components.Page (AshPyroComponents v0.1.0)
- __ Summary
  - Functions
- __ Functions
- __using__(opts \\\ [])
- get_live_tz(socket, session)
- handle_tick(socket)

__

Search documentation of AshPyroComponents __ __

__ Settings

#  [ __ View Source ](external_link) AshPyroComponents.Components.Page (AshPyroComponents v0.1.0)

Auto-render a full-featured page for a given resource.

#  __ Summary

##  Functions

__using__(opts \\\ [])

Build a page automatically from AshPyro's `live_view` DSL. It will provide a complete page with all the usual features

get_live_tz(socket, session)

Get the timezone from session or connect_params, defaulting to the local timezone.

handle_tick(socket)

Update the `:now` assign taking the timezone into account.

#  __ Functions

__ Link to this macro

# __using__(opts \\\ [])

[ __ View Source ](external_link) (macro)

Build a page automatically from AshPyro's `live_view` DSL. It will provide a complete page with all the usual features:

  * url-based state
  * pagination
  * sorting
  * filtering
  * realtime updates via pub-sub
  * forms
  * authorization
  * formatting date/time to user's timezone
  * routes to include in your `router.ex`. 🚀


    
    
    defmodule ExampleWeb.Vendor.CompanyLive do
      use ExampleWeb, :live_view
      use AshPyroComponents.Components.Page,
        resource: Example.Vendor.Company,
        page: :companies
    end

__ Link to this function

# get_live_tz(socket, session)

[ __ View Source ](external_link)
    
    
    @spec get_live_tz([Phoenix.LiveView.Socket.t](external_link)(), [any](external_link)()) :: [any](external_link)()

Get the timezone from session or connect_params, defaulting to the local timezone.

__ Link to this function

# handle_tick(socket)

[ __ View Source ](external_link)
    
    
    @spec handle_tick([Phoenix.LiveView.Socket.t](external_link)()) :: [Phoenix.LiveView.Socket.t](external_link)()

Update the `:now` assign taking the timezone into account.
