# Ash.Vector — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Vector (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- from_binary(binary)
- new(vector)
- to_binary(vector)
- to_list(vector)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Vector (ash v3.4.8)

A vector struct for Ash.

Implementation based off of <https://github.com/pgvector/pgvector-elixir/blob/v0.2.0/lib/pgvector.ex>

#  __ Summary

##  Types

t()

##  Functions

from_binary(binary)

Creates a new vector from its binary representation

new(vector)

Creates a new vector from a list or tensor

to_binary(vector)

Converts the vector to its binary representation

to_list(vector)

Converts the vector to a list

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Vector{data: [binary](external_link)()}

#  __ Functions

__ Link to this function

# from_binary(binary)

[ __ View Source ](external_link)

Creates a new vector from its binary representation

__ Link to this function

# new(vector)

[ __ View Source ](external_link)
    
    
    @spec new(t() | [binary](external_link)() | [[integer](external_link)()]) :: {:ok, t()} | {:error, :invalid_vector}

Creates a new vector from a list or tensor

__ Link to this function

# to_binary(vector)

[ __ View Source ](external_link)

Converts the vector to its binary representation

__ Link to this function

# to_list(vector)

[ __ View Source ](external_link)

Converts the vector to a list
