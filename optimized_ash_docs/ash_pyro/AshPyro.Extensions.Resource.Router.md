# AshPyro.Extensions.Resource.Router — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.Router (AshPyro v0.2.1)
- __ Summary
  - Functions
- __ Functions
- live_routes_for(live_view, resource, page_name)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.Router (AshPyro v0.2.1)

Tooling to generate routes for AshPyro's LiveView page DSL.

#  __ Summary

##  Functions

live_routes_for(live_view, resource, page_name)

Generates live routes for a given LiveView, resource and page.

#  __ Functions

__ Link to this macro

# live_routes_for(live_view, resource, page_name)

[ __ View Source ](external_link) (macro)

Generates live routes for a given LiveView, resource and page.
    
    
    defmodule ExampleWeb.Router do
      use ExampleWeb, :router
      import AshPyro.Extensions.Resource.Router
    
      # ...
    
      scope "/", ExampleWeb do
        pipe_through :browser
    
        live_routes_for CompanyLive, Example.Company, :companies
        end
      end
    end
