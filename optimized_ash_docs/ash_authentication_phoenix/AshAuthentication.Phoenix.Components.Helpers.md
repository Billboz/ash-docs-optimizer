# AshAuthentication.Phoenix.Components.Helpers — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Helpers (ash_authentication_phoenix v2.1.1)
- __ Summary
  - Functions
- __ Functions
- auth_path(socket, subject_name, auth_routes_prefix, strategy, phase, params \\\ %{})
- otp_app_from_socket(socket)
- route_helpers(socket)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Components.Helpers (ash_authentication_phoenix v2.1.1)

Helpers which are commonly needed inside the various components.

#  __ Summary

##  Functions

auth_path(socket, subject_name, auth_routes_prefix, strategy, phase, params \\\ %{})

otp_app_from_socket(socket)

The LiveView `Socket` contains a reference to the Phoenix endpoint, and from there we can extract the `otp_app` of the current request.

route_helpers(socket)

The LiveView `Socket` contains a refererence to the Phoenix router, and from there we can generate the name of the route helpers module.

#  __ Functions

__ Link to this function

# auth_path(socket, subject_name, auth_routes_prefix, strategy, phase, params \\\ %{})

[ __ View Source ](external_link)

__ Link to this function

# otp_app_from_socket(socket)

[ __ View Source ](external_link)
    
    
    @spec otp_app_from_socket([Phoenix.LiveView.Socket.t](external_link)()) :: [atom](external_link)()

The LiveView `Socket` contains a reference to the Phoenix endpoint, and from there we can extract the `otp_app` of the current request.

This is pulled from `assigns[:otp_app]`, or inferred from the socket if that is not set.

__ Link to this function

# route_helpers(socket)

[ __ View Source ](external_link)
    
    
    @spec route_helpers([Phoenix.LiveView.Socket.t](external_link)()) :: [module](external_link)()

The LiveView `Socket` contains a refererence to the Phoenix router, and from there we can generate the name of the route helpers module.
