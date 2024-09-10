# Iter.Iterable.Filterer — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Filterer (iterex v0.1.2)
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

#  [ __ View Source ](external_link) Iter.Iterable.Filterer (iterex v0.1.2)

An iterable which drops elements for which `predicate` doesn't return a truthy value.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, predicate)

Create a new filter iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Filterer{
      iterable: [Iter.Iterable.t](external_link)(),
      predicate: ([Iter.Iterable.element](external_link)() -> [as_boolean](external_link)([any](external_link)()))
    }

#  __ Functions

__ Link to this function

# new(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), ([Iter.Iterable.element](external_link)() -> [boolean](external_link)())) ::
      [Iter.Iterable.t](external_link)()

Create a new filter iterable.