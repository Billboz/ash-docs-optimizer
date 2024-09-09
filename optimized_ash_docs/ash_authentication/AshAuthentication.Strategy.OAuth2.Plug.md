# AshAuthentication.Strategy.OAuth2.Plug — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.OAuth2.Plug (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- callback(conn, strategy)
- request(conn, strategy)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.OAuth2.Plug (ash_authentication v4.0.4)

Handlers for incoming OAuth2 HTTP requests.

#  __ Summary

##  Functions

callback(conn, strategy)

Perform the callback phase of OAuth2.

request(conn, strategy)

Perform the request phase of OAuth2.

#  __ Functions

__ Link to this function

# callback(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec callback([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.OAuth2.t](external_link)()) :: [Plug.Conn.t](external_link)()

Perform the callback phase of OAuth2.

Responds to a user being redirected back from the remote authentication provider, and validates the passed options, ultimately registering or signing-in a user if the authentication was successful.

__ Link to this function

# request(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec request([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.OAuth2.t](external_link)()) :: [Plug.Conn.t](external_link)()

Perform the request phase of OAuth2.

Builds a redirection URL based on the provider configuration and redirects the user to that endpoint.
