# How does AshCloak work? — ash_cloak v0.1.2

Project: ash_cloak v0.1.2

## Table of Contents

- [ __ View Source ](external_link) How does AshCloak work?
  - __ Rewrite attributes to calculations
  - __ Modify Actions
  - __ Add `preparation` and `change`
  - __ The result

__

Search documentation of ash_cloak __ __

__ Settings

#  [ __ View Source ](external_link) How does AshCloak work?

##  __ Rewrite attributes to calculations

First, AshCloak changes the name of each cloaked attribute to `encrypted_<name>`, and sets `public?: false` and `sensitive?: true`.

Then it adds a _calculation_ matching the original attribute that, when loaded, will decrypt the given attribute and call any configured `on_decrypt` callbacks.

##  __ Modify Actions

AshCloak then goes through each action that accepts the attribute and removes the attribute from the accept list.

Then it adds an argument by the same name, and a `change` that encrypts the attribute value.

This `change` also deletes the argument from the arguments list and from the params. This is a small extra layer of security to prevent accidental leakage of the value.

##  __ Add `preparation` and `change`

Finally, it add a `preparation` and a `change` that will automatically load the corresponding calculations for any attribute in the `decrypt_by_default` list.

##  __ The result

The cloaked attribute will now seamlessly encrypt when writing and decrypt on request.

[ ← Previous Page  Get Started with AshCloak  ](external_link)

[ Next Page →  DSL: AshCloak  ](external_link)
