# AshCloak — ash_cloak v0.1.2

Project: ash_cloak v0.1.2

## Table of Contents

- [ __ View Source ](external_link) AshCloak (ash_cloak v0.1.2)
- __ Summary
  - Functions
- __ Functions
- cloak(body)
- encrypt_and_set(changeset, key, value)

__

Search documentation of ash_cloak __ __

__ Settings

#  [ __ View Source ](external_link) AshCloak (ash_cloak v0.1.2)

An extension for encrypting attributes of a resource.

See the getting started guide for more information.

#  __ Summary

##  Functions

cloak(body)

Hello!

encrypt_and_set(changeset, key, value)

Encrypts and writes to an encrypted attribute.

#  __ Functions

__ Link to this macro

# cloak(body)

[ __ View Source ](external_link) (macro)

Hello!

__ Link to this function

# encrypt_and_set(changeset, key, value)

[ __ View Source ](external_link)
    
    
    @spec encrypt_and_set([Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)(), attr :: [atom](external_link)(), term :: [term](external_link)()) ::
      [Ash.Changeset.t](3.4.1/Ash.Changeset.html#t:t/0)()

Encrypts and writes to an encrypted attribute.

If the changeset is pending (i.e not currently running the action), then it is added as a before_action hook. Otherwise, it is run immediately
