# AshAuthentication.Plug.Dispatcher — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Plug.Dispatcher (ash_authentication v4.0.4)
- __ Summary
  - Types
  - Functions
- __ Types
- config()
- __ Functions
- call(conn, return_to)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Plug.Dispatcher (ash_authentication v4.0.4)

Route requests and callbacks to the correct provider plugs.

#  __ Summary

##  Types

config()

##  Functions

call(conn, return_to)

Send the request to the correct strategy and then return the result.

#  __ Types

__ Link to this type

# config()

[ __ View Source ](external_link)
    
    
    @type config() :: {[atom](external_link)(), [AshAuthentication.Strategy.t](external_link)(), [module](external_link)()} | [module](external_link)()

#  __ Functions

__ Link to this function

# call(conn, return_to)

[ __ View Source ](external_link)
    
    
    @spec call([Plug.Conn.t](external_link)(), config() | [any](external_link)()) :: [Plug.Conn.t](external_link)()

Send the request to the correct strategy and then return the result.
