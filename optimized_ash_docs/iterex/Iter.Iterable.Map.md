# Iter.Iterable.Map — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Map (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(map)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Map (iterex v0.1.2)

A wrapper around Erlang's `:maps.iterator`.

#  __ Summary

##  Types

t()

##  Functions

new(map)

Convert a map into a map iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Map{iterator: [:maps.iterator](external_link)(), map: [map](external_link)()}

#  __ Functions

__ Link to this function

# new(map)

[ __ View Source ](external_link)
    
    
    @spec new([map](external_link)()) :: t()

Convert a map into a map iterable.
