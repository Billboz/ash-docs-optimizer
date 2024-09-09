# AshAuthentication.Debug — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Debug (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- enabled?()

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Debug (ash_authentication v4.0.4)

Allows you to debug authentication failures in development.

Simply add `config :ash_authentication, debug_authentication_failures?: true` to your `dev.exs` and get fancy log messages when authentication fails.

#  __ Summary

##  Functions

enabled?()

Has authentication debug logging been enabled?

#  __ Functions

__ Link to this function

# enabled?()

[ __ View Source ](external_link)
    
    
    @spec enabled?() :: [boolean](external_link)()

Has authentication debug logging been enabled?
