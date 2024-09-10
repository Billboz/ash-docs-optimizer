# Iter.Iterable.Intersperser — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Intersperser (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, separator)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Intersperser (iterex v0.1.2)

An iterable which places a separator value in between consecutive elements.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, separator)

Create a new intersperser iterable out of an iterable and a separator

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Intersperser{
      iterable: [Iter.Iterable.t](external_link)(),
      next: {:ok, [Iter.Iterable.element](external_link)()} | :none | :init,
      separator: [any](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, separator)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), [any](external_link)()) :: [Iter.Iterable.t](external_link)()

Create a new intersperser iterable out of an iterable and a separator
