# Testing — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) Testing
  - __ When using the Password strategy

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) Testing

Tips and tricks to help test your apps.

##  __ When using the Password strategy

AshAuthentication uses `bcrypt_elixir` for hashing passwords for secure storage, which by design has a high computational cost. To reduce the cost (make hashing faster), you can reduce the number of computation rounds it performs in tests:
    
    
    # in config/test.exs
    
    # Do NOT set this value for production
    config :bcrypt_elixir, log_rounds: 1

[ ← Previous Page  Policies on Authenticated Resources  ](external_link)

[ Next Page →  Tokens  ](external_link)
