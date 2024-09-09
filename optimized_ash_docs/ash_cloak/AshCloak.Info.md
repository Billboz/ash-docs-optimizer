# AshCloak.Info — ash_cloak v0.1.2

Project: ash_cloak v0.1.2

## Table of Contents

- [ __ View Source ](external_link) AshCloak.Info (ash_cloak v0.1.2)
- __ Summary
  - Functions
- __ Functions
- cloak_attributes(dsl_or_extended)
- cloak_attributes!(dsl_or_extended)
- cloak_decrypt_by_default(dsl_or_extended)
- cloak_decrypt_by_default!(dsl_or_extended)
- cloak_on_decrypt(dsl_or_extended)
- cloak_on_decrypt!(dsl_or_extended)
- cloak_options(dsl_or_extended)
- cloak_vault(dsl_or_extended)
- cloak_vault!(dsl_or_extended)

__

Search documentation of ash_cloak __ __

__ Settings

#  [ __ View Source ](external_link) AshCloak.Info (ash_cloak v0.1.2)

Introspection functions for the [`AshCloak`](external_link) extension.

#  __ Summary

##  Functions

cloak_attributes(dsl_or_extended)

The attribute or attributes to encrypt. The attribute will be renamed to `encrypted_{attribute}`, and a calculation with the same name will be added.

cloak_attributes!(dsl_or_extended)

The attribute or attributes to encrypt. The attribute will be renamed to `encrypted_{attribute}`, and a calculation with the same name will be added.

cloak_decrypt_by_default(dsl_or_extended)

A list of attributes that should be decrypted (their calculation should be loaded) by default.

cloak_decrypt_by_default!(dsl_or_extended)

A list of attributes that should be decrypted (their calculation should be loaded) by default.

cloak_on_decrypt(dsl_or_extended)

A function to call when decrypting any value. Takes the resource, field, records, and calculation context. Must return `:ok` or `{:error, error}`

cloak_on_decrypt!(dsl_or_extended)

A function to call when decrypting any value. Takes the resource, field, records, and calculation context. Must return `:ok` or `{:error, error}`

cloak_options(dsl_or_extended)

cloak DSL options

cloak_vault(dsl_or_extended)

The vault to use to encrypt & decrypt the value

cloak_vault!(dsl_or_extended)

The vault to use to encrypt & decrypt the value

#  __ Functions

__ Link to this function

# cloak_attributes(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_attributes(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

The attribute or attributes to encrypt. The attribute will be renamed to `encrypted_{attribute}`, and a calculation with the same name will be added.

__ Link to this function

# cloak_attributes!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_attributes!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [[atom](external_link)()] | [no_return](external_link)()

The attribute or attributes to encrypt. The attribute will be renamed to `encrypted_{attribute}`, and a calculation with the same name will be added.

__ Link to this function

# cloak_decrypt_by_default(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_decrypt_by_default(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A list of attributes that should be decrypted (their calculation should be loaded) by default.

__ Link to this function

# cloak_decrypt_by_default!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_decrypt_by_default!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A list of attributes that should be decrypted (their calculation should be loaded) by default.

__ Link to this function

# cloak_on_decrypt(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_on_decrypt(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, ([any](external_link)(), [any](external_link)(), [any](external_link)(), [any](external_link)() -> [any](external_link)()) | [mfa](external_link)()} | :error

A function to call when decrypting any value. Takes the resource, field, records, and calculation context. Must return `:ok` or `{:error, error}`

__ Link to this function

# cloak_on_decrypt!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_on_decrypt!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      (([any](external_link)(), [any](external_link)(), [any](external_link)(), [any](external_link)() -> [any](external_link)()) | [mfa](external_link)()) | [no_return](external_link)()

A function to call when decrypting any value. Takes the resource, field, records, and calculation context. Must return `:ok` or `{:error, error}`

__ Link to this function

# cloak_options(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

cloak DSL options

Returns a map containing the and any configured or default values.

__ Link to this function

# cloak_vault(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_vault(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: {:ok, [module](external_link)()} | :error

The vault to use to encrypt & decrypt the value

__ Link to this function

# cloak_vault!(dsl_or_extended)

[ __ View Source ](external_link)
    
    
    @spec cloak_vault!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [module](external_link)() | [no_return](external_link)()

The vault to use to encrypt & decrypt the value
