# AshUlid — ash_ulid v1.0.0

Project: ash_ulid v1.0.0

## Table of Contents

- [ __ View Source ](external_link) AshUlid (ash_ulid v1.0.0)
- __ Summary
  - Types
  - Functions
- __ Types
- raw()
- t()
- __ Functions
- generate()
- generate(time)
- generate_binary()
- generate_binary(time)

__

Search documentation of ash_ulid __ __

__ Settings

#  [ __ View Source ](external_link) AshUlid (ash_ulid v1.0.0)

Helpers for working with ULIDs.

#  __ Summary

##  Types

raw()

A raw binary representation of a ULID.

t()

A Crockford Base32 encoded ULID string.

##  Functions

generate()

Generate a Crockford Base32 encoded ULID string with current time.

generate(time)

Generate a Crockford Base32 encoded ULID string with a provided Unix timestamp.

generate_binary()

Generate a binary ULID with current time.

generate_binary(time)

Generate a binary ULID with a provided Unix timestamp.

#  __ Types

__ Link to this type

# raw()

[ __ View Source ](external_link)
    
    
    @type raw() :: <<_::128>>

A raw binary representation of a ULID.

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: <<_::208>>

A Crockford Base32 encoded ULID string.

#  __ Functions

__ Link to this function

# generate()

[ __ View Source ](external_link)
    
    
    @spec generate() :: t()

Generate a Crockford Base32 encoded ULID string with current time.

__ Link to this function

# generate(time)

[ __ View Source ](external_link)
    
    
    @spec generate(time :: [non_neg_integer](external_link)()) :: t()

Generate a Crockford Base32 encoded ULID string with a provided Unix timestamp.

__ Link to this function

# generate_binary()

[ __ View Source ](external_link)
    
    
    @spec generate_binary() :: raw()

Generate a binary ULID with current time.

__ Link to this function

# generate_binary(time)

[ __ View Source ](external_link)
    
    
    @spec generate_binary(time :: [non_neg_integer](external_link)()) :: raw()

Generate a binary ULID with a provided Unix timestamp.
