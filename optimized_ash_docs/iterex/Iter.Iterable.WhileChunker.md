# Iter.Iterable.WhileChunker — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.WhileChunker (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- acc()
- chunk()
- t()
- __ Functions
- new(iterable, acc, chunk_fun, after_fun)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.WhileChunker (iterex v0.1.2)

An iterable that chunks based on a chunk function.

#  __ Summary

##  Types

acc()

chunk()

t()

##  Functions

new(iterable, acc, chunk_fun, after_fun)

Creates an iterable that chunks based on a chunk function.

#  __ Types

__ Link to this type

# acc()

[ __ View Source ](external_link)
    
    
    @type acc() :: [any](external_link)()

__ Link to this type

# chunk()

[ __ View Source ](external_link)
    
    
    @type chunk() :: [any](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.WhileChunker{
      acc: nil,
      after_fun: (acc() -> {:cont, chunk(), acc()} | {:cont, acc()}),
      chunk_fun:
        ([Iter.Iterable.element](external_link)(), acc() ->
           {:cont, chunk(), acc()} | {:cont, acc()} | {:halt, acc()}),
      iterable: [Iter.Iterable.t](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, acc, chunk_fun, after_fun)

[ __ View Source ](external_link)
    
    
    @spec new(
      [Iter.Iterable.t](external_link)(),
      [any](external_link)(),
      ([Iter.Iterable.element](external_link)(), acc() ->
         {:cont, chunk(), acc()} | {:cont, acc()} | {:halt, acc()}),
      (acc() -> {:cont, chunk(), acc()} | {:cont, acc()})
    ) :: t()

Creates an iterable that chunks based on a chunk function.
