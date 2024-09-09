# AshAuthentication.Plug.Helpers — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Plug.Helpers (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- get_authentication_result(conn)
- load_subjects(subjects, otp_app, opts \\\ [])
- retrieve_from_bearer(conn, otp_app)
- retrieve_from_session(conn, otp_app)
- revoke_bearer_tokens(conn, otp_app)
- set_actor(conn, subject_name)
  - __ Examples
- store_authentication_result(conn, arg2)
- store_in_session(conn, user)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Plug.Helpers (ash_authentication v4.0.4)

Authentication helpers for use in your router, etc.

#  __ Summary

##  Functions

get_authentication_result(conn)

load_subjects(subjects, otp_app, opts \\\ [])

Given a list of subjects, turn as many as possible into users.

retrieve_from_bearer(conn, otp_app)

Validate authorization header(s).

retrieve_from_session(conn, otp_app)

Attempt to retrieve all users from the connections' session.

revoke_bearer_tokens(conn, otp_app)

Revoke all authorization header(s).

set_actor(conn, subject_name)

Set a subject as the request actor.

store_authentication_result(conn, arg2)

Store result in private.

store_in_session(conn, user)

Store the user in the connections' session.

#  __ Functions

__ Link to this function

# get_authentication_result(conn)

[ __ View Source ](external_link)

__ Link to this function

# load_subjects(subjects, otp_app, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec load_subjects([[AshAuthentication.subject](external_link)()], [module](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [map](external_link)()

Given a list of subjects, turn as many as possible into users.

Opts are forwarded to [`AshAuthentication.subject_to_user/2`](external_link)

__ Link to this function

# retrieve_from_bearer(conn, otp_app)

[ __ View Source ](external_link)
    
    
    @spec retrieve_from_bearer([Plug.Conn.t](external_link)(), [module](external_link)()) :: [Plug.Conn.t](external_link)()

Validate authorization header(s).

Assumes that your clients are sending a bearer-style authorization header with your request. If a valid bearer token is present then the subject is loaded into the assigns under their subject name (with the prefix `current_`).

If the authentication token is required to be present in the database, it is loaded into the assigns using `current_#{subject_name}_token_record`

If there is no user present for a resource then the assign is set to `nil`.

__ Link to this function

# retrieve_from_session(conn, otp_app)

[ __ View Source ](external_link)
    
    
    @spec retrieve_from_session([Plug.Conn.t](external_link)(), [module](external_link)()) :: [Plug.Conn.t](external_link)()

Attempt to retrieve all users from the connections' session.

Iterates through all configured authentication resources for `otp_app` and retrieves any users stored in the session, loads them and stores them in the assigns under their subject name (with the prefix `current_`).

If there is no user present for a resource then the assign is set to `nil`.

__ Link to this function

# revoke_bearer_tokens(conn, otp_app)

[ __ View Source ](external_link)
    
    
    @spec revoke_bearer_tokens([Plug.Conn.t](external_link)(), [module](external_link)()) :: [Plug.Conn.t](external_link)()

Revoke all authorization header(s).

Any bearer-style authorization headers will have their tokens revoked.

__ Link to this function

# set_actor(conn, subject_name)

[ __ View Source ](external_link)
    
    
    @spec set_actor([Plug.Conn.t](external_link)(), subject_name :: [atom](external_link)()) :: [Plug.Conn.t](external_link)()

Set a subject as the request actor.

Presumes that you have already loaded your user resource(s) into the connection's assigns.

Uses [`Ash.PlugHelpers`](3.4.1/Ash.PlugHelpers.html) to streamline integration with [`AshGraphql`](external_link) and [`AshJsonApi`](external_link).

##  __ Examples

Setting the actor for a AshGraphql API using [`Plug.Router`](external_link).
    
    
    defmodule MyApp.ApiRouter do
      use Plug.Router
      import MyApp.AuthPlug
    
      plug :match
    
      plug :retrieve_from_bearer
      plug :set_actor, :user
    
      plug :dispatch
    
      forward "/gql",
        to: Absinthe.Plug,
        init_opts: [schema: MyApp.Schema]
    end

__ Link to this function

# store_authentication_result(conn, arg2)

[ __ View Source ](external_link)
    
    
    @spec store_authentication_result(
      [Plug.Conn.t](external_link)(),
      :ok | {:ok, [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()} | :error | {:error, [any](external_link)()}
    ) :: [Plug.Conn.t](external_link)()

Store result in private.

This is used by authentication plug handlers to store their result for passing back to the dispatcher.

__ Link to this function

# store_in_session(conn, user)

[ __ View Source ](external_link)
    
    
    @spec store_in_session([Plug.Conn.t](external_link)(), [Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()) :: [Plug.Conn.t](external_link)()

Store the user in the connections' session.
