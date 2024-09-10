# Iter.Iterable.Mapper — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Mapper (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, mapper)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Mapper (iterex v0.1.2)

An iterable which applies a mapper function to all it's elements and returns their new values.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, mapper)

Create a new map iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Mapper{
      iterable: [Iter.Iterable.t](external_link)(),
      mapper: ([Iter.Iterable.element](external_link)() -> [Iter.Iterable.element](external_link)())
    }

#  __ Functions

__ Link to this function

# new(iterable, mapper)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), ([Iter.Iterable.element](external_link)() -> [Iter.Iterable.element](external_link)())) ::
      [Iter.Iterable.t](external_link)()

Create a new map iterable.
