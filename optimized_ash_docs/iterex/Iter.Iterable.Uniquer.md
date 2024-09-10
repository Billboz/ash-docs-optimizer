# Iter.Iterable.Uniquer — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Uniquer (iterex v0.1.2)
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

#  [ __ View Source ](external_link) Iter.Iterable.Uniquer (iterex v0.1.2)

An iterable that only emits unique elements.

#  __ Summary

##  Types

t()

##  Functions

new(iterable)

Creates an iterable that only emits unique elements.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Uniquer{
      iterable: [Iter.Iterable.t](external_link)(),
      seen: [:sets.set](external_link)([Iter.Iterable.element](external_link)())
    }

#  __ Functions

__ Link to this function

# new(iterable)

[ __ View Source ](external_link)

Creates an iterable that only emits unique elements.
