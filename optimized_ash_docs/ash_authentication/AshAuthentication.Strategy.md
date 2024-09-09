# AshAuthentication.Strategy — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy protocol (ash_authentication v4.0.4)
- __ Summary
  - Types
  - Functions
- __ Types
- action()
- http_method()
- path()
- phase()
- route()
- t()
- __ Functions
- action(strategy, action_name, params, options \\\ [])
- actions(strategy)
  - __ Example
- method_for_phase(t, phase)
  - __ Example
- name(strategy)
- phases(strategy)
  - __ Example
- plug(strategy, phase, conn)
- routes(strategy)
  - __ Example
- tokens_required?(strategy)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy protocol (ash_authentication v4.0.4)

The protocol used for interacting with authentication strategies.

Any new Authentication strategy must implement this protocol.

#  __ Summary

##  Types

action()

The name of an individual action supported by the strategy.

http_method()

path()

A path to match in web requests

phase()

The "phase" of the request.

route()

An individual route.

t()

All the types that implement this protocol.

##  Functions

action(strategy, action_name, params, options \\\ [])

Perform an named action.

actions(strategy)

Return a list of actions supported by the strategy.

method_for_phase(t, phase)

Return the HTTP method for a phase.

name(strategy)

The "short name" of the strategy, used for genererating routes, etc.

phases(strategy)

Return a list of phases supported by the strategy.

plug(strategy, phase, conn)

Handle requests routed to the strategy.

routes(strategy)

Used to build the routing table to route web requests to request phases for each strategy.

tokens_required?(strategy)

Indicates that the strategy creates or consumes tokens.

#  __ Types

__ Link to this type

# action()

[ __ View Source ](external_link)
    
    
    @type action() :: [atom](external_link)()

The name of an individual action supported by the strategy.

This maybe not be the action name on the underlying resource, which may be generated, but the name that the strategy itself calls the action.

__ Link to this type

# http_method()

[ __ View Source ](external_link)
    
    
    @type http_method() ::
      :get | :head | :post | :put | :delete | :connect | :options | :trace | :patch

__ Link to this type

# path()

[ __ View Source ](external_link)
    
    
    @type path() :: [String.t](external_link)()

A path to match in web requests

__ Link to this type

# phase()

[ __ View Source ](external_link)
    
    
    @type phase() :: [atom](external_link)()

The "phase" of the request.

Usually `:request` or `:callback` but can be any atom.

__ Link to this type

# route()

[ __ View Source ](external_link)
    
    
    @type route() :: {path(), phase()}

An individual route.

Eg: `{"/user/password/sign_in", :sign_in}`

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__ Link to this function

# action(strategy, action_name, params, options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec action(t(), action(), params :: [map](external_link)(), options :: [keyword](external_link)()) ::
      :ok | {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Perform an named action.

Different strategies are likely to implement a number of different actions depending on their configuration. Calling them via this function will ensure that the context is correctly set, etc.

See `actions/1` for a list of actions provided by the strategy.

Any options passed to the action will be passed to the underlying [`Ash.Domain`](3.4.1/Ash.Domain.html) function.

__ Link to this function

# actions(strategy)

[ __ View Source ](external_link)
    
    
    @spec actions(t()) :: [action()]

Return a list of actions supported by the strategy.

##  __ Example
    
    
    iex> strategy = Info.strategy!(Example.User, :password)
    ...> actions(strategy)
    [:sign_in_with_token, :register, :sign_in, :reset_request, :reset]

__ Link to this function

# method_for_phase(t, phase)

[ __ View Source ](external_link)
    
    
    @spec method_for_phase(t(), phase()) :: http_method()

Return the HTTP method for a phase.

##  __ Example
    
    
    iex> strategy = Info.strategy!(Example.User, :oauth2)
    ...> method_for_phase(strategy, :request)
    :get

__ Link to this function

# name(strategy)

[ __ View Source ](external_link)
    
    
    @spec name(t()) :: [atom](external_link)()

The "short name" of the strategy, used for genererating routes, etc.

This is most likely the same value that you use for the entity's `name` argument.

__ Link to this function

# phases(strategy)

[ __ View Source ](external_link)
    
    
    @spec phases(t()) :: [phase()]

Return a list of phases supported by the strategy.

##  __ Example
    
    
    iex> strategy = Info.strategy!(Example.User, :password)
    ...> phases(strategy)
    [:sign_in_with_token, :register, :sign_in, :reset_request, :reset]

__ Link to this function

# plug(strategy, phase, conn)

[ __ View Source ](external_link)
    
    
    @spec plug(t(), phase(), [Plug.Conn.t](external_link)()) :: [Plug.Conn.t](external_link)()

Handle requests routed to the strategy.

Each phase will be an atom (ie the second element in the route tuple).

See `phases/1` for a list of phases supported by the strategy.

__ Link to this function

# routes(strategy)

[ __ View Source ](external_link)
    
    
    @spec routes(t()) :: [route()]

Used to build the routing table to route web requests to request phases for each strategy.

##  __ Example
    
    
    iex> strategy = Info.strategy!(Example.User, :password)
    ...> routes(strategy)
    [
      {"/user/password/sign_in_with_token", :sign_in_with_token},
      {"/user/password/register", :register},
      {"/user/password/sign_in", :sign_in},
      {"/user/password/reset_request", :reset_request},
      {"/user/password/reset", :reset}
    ]

__ Link to this function

# tokens_required?(strategy)

[ __ View Source ](external_link)
    
    
    @spec tokens_required?(t()) :: [boolean](external_link)()

Indicates that the strategy creates or consumes tokens.
