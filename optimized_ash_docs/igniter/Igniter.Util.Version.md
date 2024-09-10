# Igniter.Util.Version — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Util.Version (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- version_string_to_general_requirement(version)
- version_string_to_general_requirement!(version)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Util.Version (igniter v0.3.29)

Utilities for working versions and version requirements

#  __ Summary

##  Functions

version_string_to_general_requirement(version)

version_string_to_general_requirement!(version)

Provides a general requirement for a given version string.

#  __ Functions

__ Link to this function

# version_string_to_general_requirement(version)

[ __ View Source ](external_link)

__ Link to this function

# version_string_to_general_requirement!(version)

[ __ View Source ](external_link)
    
    
    @spec version_string_to_general_requirement!([String.t](external_link)()) :: [String.t](external_link)() | [no_return](external_link)()

Provides a general requirement for a given version string.

For example

`3.1.2` would be `~> 3.0` and `0.2.4` would be `~> 0.2`
