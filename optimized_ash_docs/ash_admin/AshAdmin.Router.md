# AshAdmin.Router — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) AshAdmin.Router (ash_admin v0.11.5)
- __ Summary
  - Functions
- __ Functions
- admin_browser_pipeline(name \\\ :browser)
- ash_admin(path, opts \\\ [])
  - __ Options
  - __ Examples

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) AshAdmin.Router (ash_admin v0.11.5)

Provides LiveView routing for AshAdmin.

#  __ Summary

##  Functions

admin_browser_pipeline(name \\\ :browser)

Can be used to create a `:browser` pipeline easily if you don't have one.

ash_admin(path, opts \\\ [])

Defines an AshAdmin route. It expects the `path` the admin dashboard will be mounted at and a set of options.

#  __ Functions

__ Link to this macro

# admin_browser_pipeline(name \\\ :browser)

[ __ View Source ](external_link) (macro)

Can be used to create a `:browser` pipeline easily if you don't have one.

By default it is called `:browser`, but you can rename it by supplying an argument, for example:
    
    
    defmodule MyAppWeb.Router do
      use Phoenix.Router
    
      import AshAdmin.Router
      admin_browser_pipeline :something
    
      scope "/" do
    
        pipe_through [:something]
        ash_admin "/admin"
      end
    end

__ Link to this macro

# ash_admin(path, opts \\\ [])

[ __ View Source ](external_link) (macro)

Defines an AshAdmin route. It expects the `path` the admin dashboard will be mounted at and a set of options.

##  __ Options

  * `:live_socket_path` \- Optional override for the socket path. it must match the `socket "/live", Phoenix.LiveView.Socket` in your endpoint. Defaults to `/live`.

  * `:on_mount` \- Optional list of hooks to attach to the mount lifecycle.

  * `:session` \- Optional extra session map or MFA tuple to be merged with the session.

  * `:csp_nonce_assign_key` \- Optional assign key to find the CSP nonce value used for assets Supports either `atom()` or `%{optional(:img) => atom(), optional(:script) => atom(), optional(:style) => atom()}`  
Defaults to `ash_admin-Ed55GFnX` for backwards compatibility.

  * `:live_session_name` \- Optional atom to name the `live_session`. Defaults to `:ash_admin`.




##  __ Examples
    
    
    defmodule MyAppWeb.Router do
      use Phoenix.Router
    
      scope "/" do
        import AshAdmin.Router
    
        # Make sure you are piping through the browser pipeline
        # If you don't have one, see `admin_browser_pipeline/1`
        pipe_through [:browser]
    
        ash_admin "/admin"
        ash_admin "/csp/admin", live_session_name: :ash_admin_csp, csp_nonce_assign_key: :csp_nonce_value
      end
    end
