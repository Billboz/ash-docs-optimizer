# Iter.Iterable.Stepper — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable.Stepper (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(iterable, step_size)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable.Stepper (iterex v0.1.2)

An iterable which advances it's internal iterable by a specific amount each time.

#  __ Summary

##  Types

t()

##  Functions

new(iterable, step_size)

Create a new iterable which wraps another iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter.Iterable.Stepper{
      iterable: [Iter.Iterable.t](external_link)(),
      step_size: [pos_integer](external_link)()
    }

#  __ Functions

__ Link to this function

# new(iterable, step_size)

[ __ View Source ](external_link)
    
    
    @spec new([Iter.Iterable.t](external_link)(), [pos_integer](external_link)()) :: t()

Create a new iterable which wraps another iterable.
