# AshAuthentication.Phoenix.Utils.Flash — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Utils.Flash (ash_authentication_phoenix v2.1.1)
- __ Summary
  - Functions
- __ Functions
- on_mount(name, params, session, socket)
- put_flash!(socket, type, message)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Utils.Flash (ash_authentication_phoenix v2.1.1)

Utility functions for sending and receiving flash messages.

#  __ Summary

##  Functions

on_mount(name, params, session, socket)

Attach a hook to receive flash messages sent from components, for rendering in the top-level liveview.

put_flash!(socket, type, message)

Send flash messages from components, to be rendered in their parent liveview.

#  __ Functions

__ Link to this function

# on_mount(name, params, session, socket)

[ __ View Source ](external_link)

Attach a hook to receive flash messages sent from components, for rendering in the top-level liveview.

__ Link to this function

# put_flash!(socket, type, message)

[ __ View Source ](external_link)

Send flash messages from components, to be rendered in their parent liveview.
