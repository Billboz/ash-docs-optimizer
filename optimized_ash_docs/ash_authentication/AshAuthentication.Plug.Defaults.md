# AshAuthentication.Plug.Defaults — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Plug.Defaults (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- handle_failure(conn, _, _)
- handle_success(conn, activity, user, token)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Plug.Defaults (ash_authentication v4.0.4)

Provides the default implementations of `handle_success/3` and `handle_failure/2` used in generated authentication plugs.

#  __ Summary

##  Functions

handle_failure(conn, _, _)

The default implementation of `handle_failure/1`.

handle_success(conn, activity, user, token)

The default implementation of `handle_success/3`.

#  __ Functions

__ Link to this function

# handle_failure(conn, _, _)

[ __ View Source ](external_link)
    
    
    @spec handle_failure([Plug.Conn.t](external_link)(), {[atom](external_link)(), [atom](external_link)()}, [any](external_link)()) :: [Plug.Conn.t](external_link)()

The default implementation of `handle_failure/1`.

Sends a very basic 401 response.

__ Link to this function

# handle_success(conn, activity, user, token)

[ __ View Source ](external_link)
    
    
    @spec handle_success(
      [Plug.Conn.t](external_link)(),
      {[atom](external_link)(), [atom](external_link)()},
      [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)() | nil,
      [String.t](external_link)() | nil
    ) ::
      [Plug.Conn.t](external_link)()

The default implementation of `handle_success/3`.

Calls [`AshAuthentication.Plug.Helpers.store_in_session/2`](external_link) then sends a basic 200 response.
