# Ash.PlugHelpers — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.PlugHelpers (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- get_actor(arg1)
  - __ Deprecation warning
  - __ Example
- get_context(arg1)
  - __ Example
- get_tenant(arg1)
  - __ Deprecation warning
  - __ Example
- set_actor(conn, actor)
  - __ Example
- set_context(conn, context)
  - __ Example
- set_tenant(conn, tenant)
  - __ Example
- update_actor(conn, callback)
  - __ Example
- update_context(conn, callback)
  - __ Example

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.PlugHelpers (ash v3.4.8)

Helpers for working with the Plug connection.

#  __ Summary

##  Functions

get_actor(arg1)

Retrieves the actor from the Plug connection.

get_context(arg1)

Retrieves the context from the Plug connection.

get_tenant(arg1)

Retrieves the tenant from the Plug connection.

set_actor(conn, actor)

Sets the actor inside the Plug connection.

set_context(conn, context)

Sets the context inside the Plug connection.

set_tenant(conn, tenant)

Sets the tenant inside the Plug connection.

update_actor(conn, callback)

Updates the actor inside the Plug connection.

update_context(conn, callback)

Updates the context inside the Plug connection.

#  __ Functions

__ Link to this function

# get_actor(arg1)

[ __ View Source ](external_link)
    
    
    @spec get_actor([Plug.Conn.t](external_link)()) :: nil | [Ash.Resource.record](external_link)()

Retrieves the actor from the Plug connection.

The actor is stored inside the [connection's private fields](external_link).

##  __ Deprecation warning

This function checks to see if the actor is already set in the `@actor` assign, and if so will emit a deprecation warning.

This is to allow apps using the previous method a chance to update.

Rather than setting the actor in the assigns, please use the `set_actor/2` method.

##  __ Example
    
    
    iex> actor = build_actor(%{email: "marty@1985.retro"})
    ...> conn = build_conn() |> put_private(:ash, %{actor: actor})
    ...> actor = get_actor(conn)
    %{email: "marty@1985.retro"} = actor
    
    iex> actor = build_actor(%{email: "marty@1985.retro"})
    ...> conn = build_conn() |> assign(:actor, actor)
    ...> actor = get_actor(conn)
    %{email: "marty@1985.retro"} = actor

__ Link to this function

# get_context(arg1)

[ __ View Source ](external_link)
    
    
    @spec get_context([Plug.Conn.t](external_link)()) :: nil | [map](external_link)()

Retrieves the context from the Plug connection.

The context is stored inside the [connection's private fields](external_link).

##  __ Example
    
    
    iex> context = %{fraud_score: 0.427}
    ...> conn = build_conn() |> put_private(:ash, %{context: context})
    ...> context = get_context(conn)
    %{fraud_score: 0.427}

__ Link to this function

# get_tenant(arg1)

[ __ View Source ](external_link)
    
    
    @spec get_tenant([Plug.Conn.t](external_link)()) :: [term](external_link)()

Retrieves the tenant from the Plug connection.

The tenant is stored inside the [connection's private fields](external_link).

##  __ Deprecation warning

This function checks to see if the tenant is already set in the `@tenant` assign, and if so will emit a deprecation warning.

This is to allow apps using the previous method a chance to update.

Rather than setting the tenant in the assigns, please use the `set_tenant/2` method.

##  __ Example
    
    
    iex> conn = build_conn() |> put_private(:ash, %{tenant: "my-tenant"})
    ...> tenant = get_tenant(conn)
    "my_tenant" = tenant
    
    iex> conn = build_conn() |> assign(:tenant, "my-tenant")
    ...> tenant = get_tenant(conn)
    "my_tenant" = tenant

__ Link to this function

# set_actor(conn, actor)

[ __ View Source ](external_link)
    
    
    @spec set_actor([Plug.Conn.t](external_link)(), [Ash.Resource.record](external_link)()) :: [Plug.Conn.t](external_link)()

Sets the actor inside the Plug connection.

The actor is stored inside the [connection's private fields](external_link).

##  __ Example
    
    
    iex> actor = build_actor(%{email: "marty@1985.retro"})
    ...> conn = build_conn() |> set_actor(actor)
    %Plug.Conn{private: %{ash: %{actor: %{email: "marty@1985.retro"}}}} = conn

__ Link to this function

# set_context(conn, context)

[ __ View Source ](external_link)
    
    
    @spec set_context([Plug.Conn.t](external_link)(), [map](external_link)()) :: [Plug.Conn.t](external_link)()

Sets the context inside the Plug connection.

Context can be used to store abitrary data about the user, connection, or anything else you like that doesn't belong as part of the actor or tenant.

The context is stored inside the [connection's private fields](external_link).

##  __ Example
    
    
    iex> context = %{fraud_score: 0.427}
    ...> conn = build_conn() |> set_context(context)
    %Plug.Conn{private: %{ash: %{context: %{fraud_score: 0.427}}}}

__ Link to this function

# set_tenant(conn, tenant)

[ __ View Source ](external_link)
    
    
    @spec set_tenant([Plug.Conn.t](external_link)(), [Ash.ToTenant.t](external_link)()) :: [Plug.Conn.t](external_link)()

Sets the tenant inside the Plug connection.

The tenant is stored inside the [connection's private fields](external_link).

##  __ Example
    
    
    iex> conn = build_conn() |> set_tenant("my-tenant")
    %Plug.Conn{private: %{ash: %{tenant: "my-tenant}}} = conn

__ Link to this function

# update_actor(conn, callback)

[ __ View Source ](external_link)
    
    
    @spec update_actor([Plug.Conn.t](external_link)(), (nil | [Ash.Resource.record](external_link)() ->
                                   nil | [Ash.Resource.record](external_link)())) ::
      [Plug.Conn.t](external_link)()

Updates the actor inside the Plug connection.

The actor is stored inside the [connection's private fields](external_link).

##  __ Example
    
    
    iex> actor = build_actor(%{email: "marty@1985.retro"})
    ...> conn = build_conn() |> put_private(:ash, %{actor: actor})
    ...> actor = get_actor(conn)
    %{email: "marty@1985.retro"} = actor
    ...> conn = update_actor(conn, fn actor -> Map.put(actor, :name, "Marty Retro") end)
    ...> actor = get_actor(conn)
    %{email: "marty@1985.retro", name: "Marty Retro"} = actor
    ...> conn = update_actor(conn, fn actor -> Map.delete(actor, :email) end)
    ...> actor = get_actor(conn)
    %{name: "Marty Retro"} = actor

__ Link to this function

# update_context(conn, callback)

[ __ View Source ](external_link)
    
    
    @spec update_context([Plug.Conn.t](external_link)(), (nil | [map](external_link)() -> nil | [map](external_link)())) :: [Plug.Conn.t](external_link)()

Updates the context inside the Plug connection.

The context is stored inside the [connection's private fields](external_link).

##  __ Example
    
    
    iex> context = %{species: "Fythetropozoat"}
    ...> conn = build_conn() |> put_private(:ash, %{context: context})
    ...> context = get_context(conn)
    %{fraud_score: 0.427}
    ...> conn = update_context(conn, fn context -> Map.put(context, :location, "Barnard's Loop") end)
    ...> context = get_context(conn)
    %{species: "Fythetropozoat", location: "Barnard's Loop"}
    ...> conn = update_context(conn, fn context -> Map.delete(context, :fraud_score) end)
    ...> context = get_context(conn)
    %{location: "Barnard's Loop"}
