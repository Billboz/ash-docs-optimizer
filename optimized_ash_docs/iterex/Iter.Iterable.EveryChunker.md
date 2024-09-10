# Iter.Iterable.EveryChunker — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.EveryChunker (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, count, step, leftover)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.EveryChunker (iterex v0.1.2)

An iterable that chunks into `count` size elements, where each new chunk starts `step` elements into the enumerable.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, count, step, leftover)

Creates an iterable that chunks into `count` size elements, where each new chunk starts `step` elements into the enumerable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.EveryChunker{
      count: [pos_integer](external_link)(),
      iterable: [Iter.Iterable.t](external_link)(),
      leftover: [Iter.Iterable.t](external_link)() | :discard,
      step: [pos_integer](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, count, step, leftover)

[ __ View Source ](external_link)
    
    
    @spec new(
      [Iter.Iterable.t](external_link)(),
      [pos_integer](external_link)(),
      [pos_integer](external_link)(),
      [Iter.Iterable.t](external_link)() | :discard
    ) :: t()

Creates an iterable that chunks into `count` size elements, where each new chunk starts `step` elements into the enumerable.
