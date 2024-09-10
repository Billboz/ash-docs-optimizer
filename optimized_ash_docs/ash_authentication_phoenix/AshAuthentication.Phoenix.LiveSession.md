# AshAuthentication.Phoenix.LiveSession — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.LiveSession (ash_authentication_phoenix v2.1.1)
- __ Summary
  - Functions
- __ Functions
- ash_authentication_live_session(session_name \\\ :ash_authentication, opts \\\ [], list)
- generate_session(conn, otp_app \\\ nil, additional_hooks \\\ [])
- on_mount(arg1, params, session, socket)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.LiveSession (ash_authentication_phoenix v2.1.1)

Ensures that any loaded users which are present in a conn's assigns are also present in a live view socket's assigns.

Typical usage is via the `ash_authentication_live_session/2` macro, but can also manually called like so:
    
    
    scope "/", ExampleWeb do
      pipe_through(:browser)
    
      live_session :authenticated, on_mount: LiveSession, session: {LiveSession, :generate_session, []} do
        live "/", ExampleLive
      end
    end

#  __ Summary

##  Functions

ash_authentication_live_session(session_name \\\ :ash_authentication, opts \\\ [], list)

Generate a live session wherein all subject assigns are copied from the conn into the socket.

generate_session(conn, otp_app \\\ nil, additional_hooks \\\ [])

Supplements the session with any `current_X` assigns which are authenticated resource records from the conn.

on_mount(arg1, params, session, socket)

Inspects the incoming session for any subject_name -> subject values and loads them into the socket's assigns.

#  __ Functions

__ Link to this macro

# ash_authentication_live_session(session_name \\\ :ash_authentication, opts \\\ [], list)

[ __ View Source ](external_link) (macro)

Generate a live session wherein all subject assigns are copied from the conn into the socket.

Options:

  * `:otp_app` \- Set the otp app in which to search for authenticated resources.



All other options are passed through to `live_session`, but with session and on_mount hooks added to set assigns for authenticated resources. Unlike `live_session`, this supports multiple MFAs provided for the `session` option. The produced sessions will be merged.

__ Link to this function

# generate_session(conn, otp_app \\\ nil, additional_hooks \\\ [])

[ __ View Source ](external_link)
    
    
    @spec generate_session([Plug.Conn.t](external_link)(), [atom](external_link)() | [[atom](external_link)()], additional_hooks :: [[mfa](external_link)()]) ::
      %{
        required([String.t](external_link)()) => [String.t](external_link)()
      }

Supplements the session with any `current_X` assigns which are authenticated resource records from the conn.

__ Link to this function

# on_mount(arg1, params, session, socket)

[ __ View Source ](external_link)
    
    
    @spec on_mount(
      [atom](external_link)() | {:set_otp_app, [atom](external_link)()},
      %{required([String.t](external_link)()) => [any](external_link)()},
      %{required([String.t](external_link)()) => [any](external_link)()},
      [Phoenix.LiveView.Socket.t](external_link)()
    ) :: {:cont | :halt, [Phoenix.LiveView.Socket.t](external_link)()}

Inspects the incoming session for any subject_name -> subject values and loads them into the socket's assigns.

For example a session containing `{"user", "user?id=aa6c179c-ee75-4d49-8796-528c2981b396"}` becomes an assign called `current_user` with the loaded user as the value.
