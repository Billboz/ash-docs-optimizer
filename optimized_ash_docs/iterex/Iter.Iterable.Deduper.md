# Iter.Iterable.Deduper — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Deduper (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, fun \\\ &Function.identity/1)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Deduper (iterex v0.1.2)

An iterable that only emits elements if they are different from the previous element.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, fun \\\ &Function.identity/1)

Creates an iterable that only emits elements if they are different from the previous element.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Deduper{
      fun: ([Iter.Iterable.element](external_link)() -> [any](external_link)()),
      iterable: [Iter.Iterable.t](external_link)(),
      last_result: nil | [Iter.Iterable.element](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, fun \\\ &Function.identity/1)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), ([Iter.Iterable.element](external_link)() -> [any](external_link)())) :: [Iter.Iterable.t](external_link)()

Creates an iterable that only emits elements if they are different from the previous element.
