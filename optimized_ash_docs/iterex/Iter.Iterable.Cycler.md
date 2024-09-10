# Iter.Iterable.Cycler — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Cycler (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Cycler (iterex v0.1.2)

An iterable which emits elements for ever.

#  __ Summary

##  Types

t()

##  Functions

new(iterable)

Create an eternal iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Cycler{
      buffer: [[Iter.Iterable.element](external_link)()],
      source: [Iter.Iterable.t](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)()) :: [Iter.Iterable.t](external_link)()

Create an eternal iterable.
