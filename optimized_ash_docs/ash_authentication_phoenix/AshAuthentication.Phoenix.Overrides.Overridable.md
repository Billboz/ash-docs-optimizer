# AshAuthentication.Phoenix.Overrides.Overridable — ash_authentication_phoenix v2.1.1

Project: ash_authentication_phoenix v2.1.1

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Phoenix.Overrides.Overridable behaviour (ash_authentication_phoenix v2.1.1)
- __ Summary
  - Callbacks
  - Functions
- __ Callbacks
- __overrides__()
- __ Functions
- override_for(overrides, selector, default \\\ nil)

__

Search documentation of ash_authentication_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Phoenix.Overrides.Overridable behaviour (ash_authentication_phoenix v2.1.1)

Auto generates documentation and helpers for components.

#  __ Summary

##  Callbacks

__overrides__()

##  Functions

override_for(overrides, selector, default \\\ nil)

Retrieve configuration for a potentially overriden value.

#  __ Callbacks

__ Link to this callback

# __overrides__()

[ __ View Source ](external_link)
    
    
    @callback __overrides__() :: %{required([atom](external_link)()) => [binary](external_link)()}

#  __ Functions

__ Link to this macro

# override_for(overrides, selector, default \\\ nil)

[ __ View Source ](external_link) (macro)
    
    
    @spec override_for([[module](external_link)()], [atom](external_link)(), [any](external_link)()) :: [any](external_link)()

Retrieve configuration for a potentially overriden value.
