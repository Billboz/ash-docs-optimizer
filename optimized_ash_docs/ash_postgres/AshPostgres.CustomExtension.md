# AshPostgres.CustomExtension — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.CustomExtension behaviour (ash_postgres v2.3.1)
- __ Summary
  - Callbacks
- __ Callbacks
- install(version)
- uninstall(version)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.CustomExtension behaviour (ash_postgres v2.3.1)

A custom extension implementation.

#  __ Summary

##  Callbacks

install(version)

uninstall(version)

#  __ Callbacks

__

# install(version)

[ __](external_link)
    
    
    @callback install(version :: [integer](external_link)()) :: [String.t](external_link)()

__

# uninstall(version)

[ __](external_link)
    
    
    @callback uninstall(version :: [integer](external_link)()) :: [String.t](external_link)()
