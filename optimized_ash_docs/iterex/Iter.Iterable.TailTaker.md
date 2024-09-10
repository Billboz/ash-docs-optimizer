# Iter.Iterable.TailTaker — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.TailTaker (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, how_many)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.TailTaker (iterex v0.1.2)

An iterable which takes `how_many` elements from the end of the iterable.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, how_many)

Creates an iterable which takes `how_many` elements from the end of the iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.TailTaker{
      buffer: nil | [[Iter.Iterable.element](external_link)()],
      how_many: [pos_integer](external_link)(),
      iterable: [Iter.Iterable.t](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), [pos_integer](external_link)()) :: t()

Creates an iterable which takes `how_many` elements from the end of the iterable.
