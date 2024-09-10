# AshAuthentication.Phoenix.Plug — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Plug (ash_authentication_phoenix v2.1.1)
- __ Summary
  - Functions
- __ Functions
- load_from_bearer(conn, opts)
- load_from_session(conn, opts)
- revoke_bearer_tokens(conn, opts)
- store_in_session(conn, actor)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Plug (ash_authentication_phoenix v2.1.1)

Helper plugs mixed in to your router.

When you `use AshAuthentication.Phoenix.Router` this module is included, so that you can use these plugs in your pipelines.

#  __ Summary

##  Functions

load_from_bearer(conn, opts)

Attempt to retrieve actors from the `Authorization` header(s).

load_from_session(conn, opts)

Attempt to retrieve all actors from the connections' session.

revoke_bearer_tokens(conn, opts)

Revoke all token(s) in the `Authorization` header(s).

store_in_session(conn, actor)

Store the actor in the connections' session.

#  __ Functions

__ Link to this function

# load_from_bearer(conn, opts)

[ __ View Source ](external_link)
    
    
    @spec load_from_bearer([Plug.Conn.t](external_link)(), [any](external_link)()) :: [Plug.Conn.t](external_link)()

Attempt to retrieve actors from the `Authorization` header(s).

A wrapper around [`AshAuthentication.Plug.Helpers.retrieve_from_bearer/2`](external_link) with the `otp_app` as extracted from the endpoint.

__ Link to this function

# load_from_session(conn, opts)

[ __ View Source ](external_link)
    
    
    @spec load_from_session([Plug.Conn.t](external_link)(), [any](external_link)()) :: [Plug.Conn.t](external_link)()

Attempt to retrieve all actors from the connections' session.

A wrapper around [`AshAuthentication.Plug.Helpers.retrieve_from_session/2`](external_link) with the `otp_app` as extracted from the endpoint.

__ Link to this function

# revoke_bearer_tokens(conn, opts)

[ __ View Source ](external_link)
    
    
    @spec revoke_bearer_tokens([Plug.Conn.t](external_link)(), [any](external_link)()) :: [Plug.Conn.t](external_link)()

Revoke all token(s) in the `Authorization` header(s).

A wrapper around [`AshAuthentication.Plug.Helpers.revoke_bearer_tokens/2`](external_link) with the `otp_app` as extracted from the endpoint.

__ Link to this function

# store_in_session(conn, actor)

[ __ View Source ](external_link)
    
    
    @spec store_in_session([Plug.Conn.t](external_link)(), [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()) :: [Plug.Conn.t](external_link)()

Store the actor in the connections' session.
