# Iter.Iterable.Resource — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Resource (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- acc()
- after_fun()
- next_fun()
- start_fun()
- t()
- __ Functions
- new(start_fun, next_fun, after_fun)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Resource (iterex v0.1.2)

An iterable which provides compatibility with [`Stream.resource/3`](external_link)

#  __ Summary

##  Types

acc()

after_fun()

next_fun()

start_fun()

t()

##  Functions

new(start_fun, next_fun, after_fun)

Create an iterable from functions in a manner compatible with [`Stream.resource/3`](external_link).

#  __ Types

__ Link to this type

# acc()

[ __ View Source ](external_link)
    
    
    @type acc() :: [any](external_link)()

__ Link to this type

# after_fun()

[ __ View Source ](external_link)
    
    
    @type after_fun() :: (acc() -> [any](external_link)())

__ Link to this type

# next_fun()

[ __ View Source ](external_link)
    
    
    @type next_fun() :: (acc() -> {[[Iter.Iterable.element](external_link)()], acc()} | {:halt, acc()})

__ Link to this type

# start_fun()

[ __ View Source ](external_link)
    
    
    @type start_fun() :: (-> acc())

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Resource{
      acc: acc(),
      after_fun: after_fun(),
      buffer: [[Iter.Iterable.element](external_link)()],
      next_fun: next_fun(),
      start_fun: nil | start_fun()
    }

#  __ Functions

__ Link to this function

# new(start_fun, next_fun, after_fun)

[ __ View Source ](external_link)
    
    
    @spec new(start_fun(), next_fun(), after_fun()) :: t()

Create an iterable from functions in a manner compatible with [`Stream.resource/3`](external_link).
