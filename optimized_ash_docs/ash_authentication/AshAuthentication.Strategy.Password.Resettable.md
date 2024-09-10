# AshAuthentication.Strategy.Password.Resettable — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.Strategy.Password.Resettable (ash_authentication v4.0.4)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.Strategy.Password.Resettable (ash_authentication v4.0.4)

The entity used to store password reset information.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshAuthentication.Strategy.Password.Resettable{
      password_reset_action_name: [atom](external_link)(),
      request_password_reset_action_name: [atom](external_link)(),
      sender: {[module](external_link)(), [keyword](external_link)()},
      token_lifetime: hours :: [pos_integer](external_link)()
    }
