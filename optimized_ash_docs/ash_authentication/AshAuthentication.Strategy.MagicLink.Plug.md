# AshAuthentication.Strategy.MagicLink.Plug — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.MagicLink.Plug (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- request(conn, strategy)
- sign_in(conn, strategy)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.MagicLink.Plug (ash_authentication v4.0.4)

Plugs for the magic link strategy.

Handles requests and sign-ins.

#  __ Summary

##  Functions

request(conn, strategy)

Handle a request for a magic link.

sign_in(conn, strategy)

Sign in via magic link.

#  __ Functions

__ Link to this function

# request(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec request([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.MagicLink.t](external_link)()) ::
      [Plug.Conn.t](external_link)()

Handle a request for a magic link.

Retrieves form parameters from nested within the subject name, eg:
    
    
    %{
      "user" => %{
        "email" => "marty@mcfly.me"
      }
    }

__ Link to this function

# sign_in(conn, strategy)

[ __ View Source ](external_link)
    
    
    @spec sign_in([Plug.Conn.t](external_link)(), [AshAuthentication.Strategy.MagicLink.t](external_link)()) ::
      [Plug.Conn.t](external_link)()

Sign in via magic link.
