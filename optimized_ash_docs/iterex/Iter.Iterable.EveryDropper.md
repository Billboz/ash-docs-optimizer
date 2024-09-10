# Iter.Iterable.EveryDropper — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.EveryDropper (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, every)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.EveryDropper (iterex v0.1.2)

An iterable which drops every `nth` element from the iterable.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, every)

Creates an iterable which drops every `nth` element from the iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.EveryDropper{
      count: [non_neg_integer](external_link)(),
      every: [non_neg_integer](external_link)(),
      iterable: [Iter.Iterable.t](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, every)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), [non_neg_integer](external_link)()) :: t()

Creates an iterable which drops every `nth` element from the iterable.
