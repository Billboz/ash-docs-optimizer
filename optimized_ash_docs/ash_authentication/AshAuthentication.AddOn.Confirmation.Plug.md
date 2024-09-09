# AshAuthentication.AddOn.Confirmation.Plug — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.AddOn.Confirmation.Plug (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- confirm(conn, strategy)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.AddOn.Confirmation.Plug (ash_authentication v4.0.4)

Handlers for incoming OAuth2 HTTP requests.

#  __ Summary

##  Functions

confirm(conn, strategy)

Attempt to perform a confirmation.

#  __ Functions

__ Link to this function

# confirm(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec confirm([Plug.Conn.t](external_link)(), [AshAuthentication.AddOn.Confirmation.t](external_link)()) ::
      [Plug.Conn.t](external_link)()

Attempt to perform a confirmation.
