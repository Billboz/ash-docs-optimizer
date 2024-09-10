# Iter.Iterable.FlatMapper — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.FlatMapper (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- mapper()
- t()
- __ Functions
- new(iterable, mapper)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.FlatMapper (iterex v0.1.2)

An iterable which works like `map/2` but flattens nested iterables.

#  __ Summary

##  Types

mapper()

t()

##  Functions

new(iterable, mapper)

Creates an iterable which works like `map/2` but flattens nested iterables.

#  __ Types

__ Link to this type

# mapper()

[ __ View Source ](external_link)
    
    
    @type mapper() :: ([Iter.Iterable.t](external_link)() -> [Iter.Iterable.t](external_link)() | [Iter.Iterable.element](external_link)())

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.FlatMapper{iterable: [Iter.Iterable.t](external_link)(), mapper: mapper()}

#  __ Functions

__ Link to this function

# new(iterable, mapper)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), mapper()) :: t()

Creates an iterable which works like `map/2` but flattens nested iterables.
