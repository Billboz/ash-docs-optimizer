# AshAuthentication.Phoenix — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix (ash_authentication_phoenix v2.1.1)
  - __ Where to start.
    - __ Customisation

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix (ash_authentication_phoenix v2.1.1)

Welcome to `AshAuthentication.Pheonix`.

The `ash_authentication_phoenix` package extends [`ash_authentication`](external_link) by adding router helpers, plugs and behaviours that makes adding authentication to an existing Ash-based Phoenix application dead easy.

##  __ Where to start.

Presuming that you already have [Phoenix](external_link), [Ash](external_link) and [AshAuthentication](external_link) installed and configured, start by adding plugs and routes to your router using [`AshAuthentication.Phoenix.Router`](external_link) and customising your sign-in page as needed.

###  __ Customisation

There are several methods of customisation available depending on the level of control you would like:

  1. Use the generic sign-in liveview - [`AshAuthentication.Phoenix.SignInLive`](external_link).
  2. Apply overrides using [`AshAuthentication.Phoenix.Overrides`](external_link) to set your own CSS classes for all components.
  3. Build your own sign-in pages using the pre-defined components.
  4. Build your own sign-in pages using the generated `auth` routes.


