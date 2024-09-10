# DSL: AshCloak — ash_cloak v0.1.2

Project: ash_cloak v0.1.2

## Table of Contents

- [ __ View Source ](external_link) DSL: AshCloak
  - __ cloak
    - __ Options

__

Search documentation of ash_cloak __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshCloak

An extension for encrypting attributes of a resource.

See the getting started guide for more information.

##  __ cloak

Encrypt attributes of a resource

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`vault`| `module`| | The vault to use to encrypt & decrypt the value  
`attributes`| `atom | list(atom)`| `[]`| The attribute or attributes to encrypt. The attribute will be renamed to `encrypted_{attribute}`, and a calculation with the same name will be added.  
`decrypt_by_default`| `atom | list(atom)`| `[]`| A list of attributes that should be decrypted (their calculation should be loaded) by default.  
`on_decrypt`| `(any, any, any, any -> any) | mfa`| | A function to call when decrypting any value. Takes the resource, field, records, and calculation context. Must return `:ok` or `{:error, error}`  
  
[ ← Previous Page  How does AshCloak work?  ](external_link)

[ Next Page →  Change Log  ](external_link)
