# Iter.Iterable.WhileTaker — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.WhileTaker (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, predicate)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.WhileTaker (iterex v0.1.2)

An iterable which emits elements until `predicate` returns `false`.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, predicate)

Creates an iterable which emits elements until `predicate` returns `false`.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.WhileTaker{
      iterable: [Iter.Iterable.t](external_link)(),
      predicate: ([Iter.Iterable.element](external_link)() -> [boolean](external_link)())
    }

#  __ Functions

__ Link to this function

# new(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), ([Iter.Iterable.element](external_link)() -> [boolean](external_link)())) :: t()

Creates an iterable which emits elements until `predicate` returns `false`.
