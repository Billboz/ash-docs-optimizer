# Iter.Iterable.ByChunker — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.ByChunker (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, chunker)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.ByChunker (iterex v0.1.2)

An iterable that chunks elements by subsequent return values of `fun`.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, chunker)

Creates an iterable that chunks elements by subsequent return values of `fun`.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.ByChunker{
      buffer: [],
      chunker: ([Iter.Iterable.element](external_link)() -> [any](external_link)()),
      iterable: [Iter.Iterable.t](external_link)(),
      state: {:ok, [any](external_link)()} | :none
    }

#  __ Functions

__ Link to this function

# new(iterable, chunker)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), ([Iter.Iterable.element](external_link)() -> [any](external_link)())) :: t()

Creates an iterable that chunks elements by subsequent return values of `fun`.
