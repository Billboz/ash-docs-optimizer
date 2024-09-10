# Iter.Iterable.WithIndexer — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.WithIndexer (iterex v0.1.2)
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

#  [ __ View Source ](external_link) Iter.Iterable.WithIndexer (iterex v0.1.2)

Creates an iterator which emits the current iteration count as well as the next value.

#  __ Summary

##  Types

t()

##  Functions

new(iterable)

Create a new filter iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.WithIndexer{count: 0, iterable: [Iter.Iterable.t](external_link)()}

#  __ Functions

__ Link to this function

# new(iterable)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)()) :: [Iter.Iterable.t](external_link)()

Create a new filter iterable.
