# Iter.Iterable.Appender — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Appender (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, element)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Appender (iterex v0.1.2)

An iterable which appends a single element to the end of another iterable.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, element)

Create a new appender iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Appender{
      element: {:ok, [Iter.Iterable.element](external_link)()} | :done,
      iterable: [Iter.Iterable.t](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, element)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), [Iter.Iterable.element](external_link)()) :: t()

Create a new appender iterable.
