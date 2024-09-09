# AshAuthentication.BcryptProvider — ash_authentication v4.0.4

Project: ash_authentication v4.0.4

## Table of Contents

- [ __ View Source ](external_link) AshAuthentication.BcryptProvider (ash_authentication v4.0.4)
- __ Summary
  - Functions
- __ Functions
- hash(input)
  - __ Example
- simulate()
  - __ Example
- valid?(input, hash)
  - __ Example

__

Search documentation of ash_authentication __ __

__ Settings

#  [ __ View Source ](external_link) AshAuthentication.BcryptProvider (ash_authentication v4.0.4)

Provides the default implementation of [`AshAuthentication.HashProvider`](external_link) using [`Bcrypt`](external_link).

#  __ Summary

##  Functions

hash(input)

Given some user input as a string, convert it into it's hashed form using [`Bcrypt`](external_link).

simulate()

Simulate a password check to help avoid timing attacks.

valid?(input, hash)

Check if the user input matches the hash.

#  __ Functions

__ Link to this function

# hash(input)

[ __ View Source ](external_link)
    
    
    @spec hash([String.t](external_link)()) :: {:ok, [String.t](external_link)()} | :error

Given some user input as a string, convert it into it's hashed form using [`Bcrypt`](external_link).

##  __ Example
    
    
    iex> {:ok, hashed} = hash("Marty McFly")
    ...> String.starts_with?(hashed, "$2b$04$")
    true

__ Link to this function

# simulate()

[ __ View Source ](external_link)
    
    
    @spec simulate() :: false

Simulate a password check to help avoid timing attacks.

##  __ Example
    
    
    iex> simulate()
    false

__ Link to this function

# valid?(input, hash)

[ __ View Source ](external_link)
    
    
    @spec valid?(input :: [String.t](external_link)(), hash :: [String.t](external_link)()) :: [boolean](external_link)()

Check if the user input matches the hash.

##  __ Example
    
    
    iex> valid?("Marty McFly", "$2b$04$qgacrnrAJz8aPwaVQiGJn.PvryldV.NfOSYYvF/CZAGgMvvzhIE7S")
    true
