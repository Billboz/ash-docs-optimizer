# AshAuthentication.HashProvider — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.HashProvider behaviour (ash_authentication v4.0.4)
- __ Summary
  - Callbacks
- __ Callbacks
- hash(input)
- simulate()
- valid?(input, hash)

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.HashProvider behaviour (ash_authentication v4.0.4)

A behaviour providing password hashing.

#  __ Summary

##  Callbacks

hash(input)

Given some user input as a string, convert it into it's hashed form.

simulate()

Attempt to defeat timing attacks by simulating a password hash check.

valid?(input, hash)

Check if the user input matches the hash.

#  __ Callbacks

__ Link to this callback

# hash(input)

[ __ View Source ](external_link)
    
    
    @callback hash(input :: [String.t](external_link)()) :: {:ok, hash :: [String.t](external_link)()} | :error

Given some user input as a string, convert it into it's hashed form.

__ Link to this callback

# simulate()

[ __ View Source ](external_link)
    
    
    @callback simulate() :: false

Attempt to defeat timing attacks by simulating a password hash check.

See [Bcrypt.no_user_verify/1](external_link) for more information.

__ Link to this callback

# valid?(input, hash)

[ __ View Source ](external_link)
    
    
    @callback valid?(input :: [String.t](external_link)(), hash :: [String.t](external_link)()) :: [boolean](external_link)()

Check if the user input matches the hash.
