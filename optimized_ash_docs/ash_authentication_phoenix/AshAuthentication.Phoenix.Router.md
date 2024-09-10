# AshAuthentication.Phoenix.Router — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Router (ash_authentication_phoenix v2.1.1)
  - __ Usage
- __ Summary
  - Types
  - Functions
- __ Types
- auth_route_options()
- path_option()
- scope_opts_option()
- to_option()
- __ Functions
- auth_routes(auth_controller, resource_or_resources, opts \\\ [])
  - __ Upgrading from `auth_routes_for/2`
  - __ Options
- auth_routes_for(resource, opts)
  - __ Options
  - __ Example
- reset_route(opts \\\ [])
- sign_in_route(opts \\\ [])
- sign_out_route(auth_controller, path \\\ "/sign-out", opts \\\ [])

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Router (ash_authentication_phoenix v2.1.1)

Phoenix route generation for AshAuthentication.

Using this module imports the macros in this module and the plug functions from [`AshAuthentication.Phoenix.Plug`](external_link).

##  __ Usage

Adding authentication to your live-view router is very simple:
    
    
    defmodule MyAppWeb.Router do
      use MyAppWeb, :router
      use AshAuthentication.Phoenix.Router
    
      pipeline :browser do
        # ...
        plug(:load_from_session)
      end
    
      pipeline :api do
        # ...
        plug(:load_from_bearer)
      end
    
      scope "/", MyAppWeb do
        pipe_through :browser
        sign_in_route
        sign_out_route AuthController
        auth_routes_for MyApp.Accounts.User, to: AuthController
        reset_route
      end

#  __ Summary

##  Types

auth_route_options()

Options that can be passed to `auth_routes_for`.

path_option()

A sub-path if required. Defaults to `/auth`.

scope_opts_option()

Any options which should be passed to the generated scope.

to_option()

The controller which will handle success and failure.

##  Functions

auth_routes(auth_controller, resource_or_resources, opts \\\ [])

Generates the routes needed for the various strategies for a given AshAuthentication resource.

auth_routes_for(resource, opts)

Generates the routes needed for the various strategies for a given AshAuthentication resource.

reset_route(opts \\\ [])

Generates a generic, white-label password reset page using LiveView and the components in `AshAuthentication.Phoenix.Components`.

sign_in_route(opts \\\ [])

Generates a generic, white-label sign-in page using LiveView and the components in `AshAuthentication.Phoenix.Components`.

sign_out_route(auth_controller, path \\\ "/sign-out", opts \\\ [])

Generates a sign-out route which points to the `sign_out` action in your auth controller.

#  __ Types

__ Link to this type

# auth_route_options()

[ __ View Source ](external_link)
    
    
    @type auth_route_options() :: [path_option() | to_option() | scope_opts_option()]

Options that can be passed to `auth_routes_for`.

__ Link to this type

# path_option()

[ __ View Source ](external_link)
    
    
    @type path_option() :: {:path, [String.t](external_link)()}

A sub-path if required. Defaults to `/auth`.

__ Link to this type

# scope_opts_option()

[ __ View Source ](external_link)
    
    
    @type scope_opts_option() :: {:scope_opts, [keyword](external_link)()}

Any options which should be passed to the generated scope.

__ Link to this type

# to_option()

[ __ View Source ](external_link)
    
    
    @type to_option() :: {:to, [AshAuthentication.Phoenix.Controller.t](external_link)()}

The controller which will handle success and failure.

#  __ Functions

__ Link to this macro

# auth_routes(auth_controller, resource_or_resources, opts \\\ [])

[ __ View Source ](external_link) (macro)
    
    
    @spec auth_routes(
      auth_controller :: [module](external_link)(),
      [Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)() | [[Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)()],
      auth_route_options()
    ) :: [Macro.t](external_link)()

Generates the routes needed for the various strategies for a given AshAuthentication resource.

This matches _all_ routes at the provided `path`, which defaults to `/auth`. This means that if you have any other routes that begin with `/auth`, you will need to make sure this appears after them.

##  __ Upgrading from `auth_routes_for/2`

If you are using route helpers anywhere in your application, typically looks like `Routes.auth_path/3` or `Helpers.auth_path/3` you will need to update them to use verified routes. To see what routes are available to you, use `mix ash_authentication.phoenix.routes`.

If you are using any of the components provided by `AshAuthenticationPhoenix`, you will need to supply them with the `auth_routes_prefix` assign, set to the `path` you provide here (set to `/auth` by default).

##  __ Options

  * `path` \- the path to mount auth routes at. Defaults to `/auth`. If changed, you will also want to change the `auth_routes_prefix` option in `sign_in_route` to match. routes.
  * `not_found_plug` \- a plug to call if no route is found. By default, it renders a simple JSON response with a 404 status code.
  * `as` \- the alias to use for the generated scope. Defaults to `:auth`.



__ Link to this macro

# auth_routes_for(resource, opts)

[ __ View Source ](external_link) (macro)
    
    
    @spec auth_routes_for([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)(), auth_route_options()) :: [Macro.t](external_link)()

Generates the routes needed for the various strategies for a given AshAuthentication resource.

This is required if you wish to use authentication.

##  __ Options

  * `to` \- a module which implements the [`AshAuthentication.Phoenix.Controller`](external_link) behaviour. This is required.
  * `path` \- a string (starting with "/") wherein to mount the generated routes.
  * `scope_opts` \- any options to pass to the generated scope.



##  __ Example
    
    
    scope "/", DevWeb do
      auth_routes_for(MyApp.Accounts.User,
        to: AuthController,
        path: "/authentication",
        scope_opts: [host: "auth.example.com"]
      )
    end

__ Link to this macro

# reset_route(opts \\\ [])

[ __ View Source ](external_link) (macro)
    
    
    @spec reset_route(
      opts :: [
        {:path, [String.t](external_link)()}
        | {:live_view, [module](external_link)()}
        | {:as, [atom](external_link)()}
        | {:overrides, [[module](external_link)()]}
        | {:on_mount, [[module](external_link)()]}
        | {[atom](external_link)(), [any](external_link)()}
      ]
    ) :: [Macro.t](external_link)()

Generates a generic, white-label password reset page using LiveView and the components in `AshAuthentication.Phoenix.Components`.

Available options are:

  * `path` the path under which to mount the live-view. Defaults to `"/password-reset"`.
  * `live_view` the name of the live view to render. Defaults to [`AshAuthentication.Phoenix.ResetLive`](external_link).
  * `as` which is passed to the generated `live` route. Defaults to `:auth`.
  * `overrides` specify any override modules for customisation. See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information. all other options are passed to the generated `scope`.



This is completely optional, in particular, if the `reset_path` option is passed to the `sign_in_route` helper, using the `reset_route` helper is redundant.

__ Link to this macro

# sign_in_route(opts \\\ [])

[ __ View Source ](external_link) (macro)
    
    
    @spec sign_in_route(
      opts :: [
        {:path, [String.t](external_link)()}
        | {:live_view, [module](external_link)()}
        | {:as, [atom](external_link)()}
        | {:overrides, [[module](external_link)()]}
        | {:on_mount, [[module](external_link)()]}
        | {[atom](external_link)(), [any](external_link)()}
      ]
    ) :: [Macro.t](external_link)()

Generates a generic, white-label sign-in page using LiveView and the components in `AshAuthentication.Phoenix.Components`.

This is completely optional.

Available options are:

  * `path` the path under which to mount the sign-in live-view. Defaults to `"/sign-in"` within the current router scope.

  * `auth_routes_prefix` if set, this will be used instead of route helpers when determining routes. Allows disabling `helpers: true`. If a tuple {:unscoped, path} is provided, the path prefix will not inherit the current route scope.

  * `register_path` \- the path under which to mount the password strategy's registration live-view. If not set, and registration is supported, registration will use a dynamic toggle and will not be routeable to. If a tuple {:unscoped, path} is provided, the registration path will not inherit the current route scope.

  * `reset_path` \- the path under which to mount the password strategy's password reset live-view. If not set, and password reset is supported, password reset will use a dynamic toggle and will not be routeable to. If a tuple {:unscoped, path} is provided, the reset path will not inherit the current route scope.

  * `live_view` the name of the live view to render. Defaults to [`AshAuthentication.Phoenix.SignInLive`](external_link).

  * `auth_routes_prefix` the prefix to use for the auth routes. Defaults to `"/auth"`.

  * `as` which is used to prefix the generated `live_session` and `live` route name. Defaults to `:auth`.

  * `otp_app` the otp app or apps to find authentication resources in. Pulls from the socket by default.

  * `overrides` specify any override modules for customisation. See [`AshAuthentication.Phoenix.Overrides`](external_link) for more information.

all other options are passed to the generated `scope`.




__ Link to this macro

# sign_out_route(auth_controller, path \\\ "/sign-out", opts \\\ [])

[ __ View Source ](external_link) (macro)
    
    
    @spec sign_out_route([AshAuthentication.Phoenix.Controller.t](external_link)(), path :: [String.t](external_link)(), [
      {:as, [atom](external_link)()} | {[atom](external_link)(), [any](external_link)()}
    ]) :: [Macro.t](external_link)()

Generates a sign-out route which points to the `sign_out` action in your auth controller.

This is optional, but you probably want it.
