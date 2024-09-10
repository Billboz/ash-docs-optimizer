# Iter.Iterable.EveryMapper — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.EveryMapper (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, nth, mapper)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.EveryMapper (iterex v0.1.2)

An iterable which maps every `nth` element in the iterable.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, nth, mapper)

Creates a new iterable which maps every `nth` element in the iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.EveryMapper{
      count: [non_neg_integer](external_link)(),
      every: [non_neg_integer](external_link)(),
      iterable: [Iter.Iterable.t](external_link)(),
      mapper: ([Iter.Iterable.element](external_link)() -> [any](external_link)())
    }

#  __ Functions

__ Link to this function

# new(iterable, nth, mapper)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), [non_neg_integer](external_link)(), ([Iter.Iterable.element](external_link)() -> [any](external_link)())) ::
      t()

Creates a new iterable which maps every `nth` element in the iterable.