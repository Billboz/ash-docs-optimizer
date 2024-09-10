# AshAuthentication.Strategy.Password.Plug — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Password.Plug (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- register(conn, strategy)
- reset(conn, strategy)
- reset_request(conn, strategy)
- sign_in(conn, strategy)
- sign_in_with_token(conn, strategy)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Password.Plug (ash_authentication v4.0.4)

Plugs for the password strategy.

Handles registration, sign-in and password resets.

#  __ Summary

##  Functions

register(conn, strategy)

Handle a registration request

reset(conn, strategy)

Handle a reset request

reset_request(conn, strategy)

Handle a reset request request

sign_in(conn, strategy)

Handle a sign-in request

sign_in_with_token(conn, strategy)

Handle a request to validate a sign in token

#  __ Functions

__ Link to this function

# register(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec register([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.Password.t](external_link)()) ::
      [Plug.Conn.t](external_link)()

Handle a registration request

__ Link to this function

# reset(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec reset([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.Password.t](external_link)()) :: [Plug.Conn.t](external_link)()

Handle a reset request

__ Link to this function

# reset_request(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec reset_request([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.Password.t](external_link)()) ::
      [Plug.Conn.t](external_link)()

Handle a reset request request

__ Link to this function

# sign_in(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec sign_in([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.Password.t](external_link)()) :: [Plug.Conn.t](external_link)()

Handle a sign-in request

__ Link to this function

# sign_in_with_token(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec sign_in_with_token([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.Password.t](external_link)()) ::
      [Plug.Conn.t](external_link)()

Handle a request to validate a sign in token
