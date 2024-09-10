# Iter.IntoIterable — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.IntoIterable protocol (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- into_iterable(value)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.IntoIterable protocol (iterex v0.1.2)

A protocol for converting a value into an iterable.

Required by [`Iter.from/1`](external_link) and others.

By default this protocol is implemented for [`List`](external_link), [`Map`](external_link), [`MapSet`](external_link), [`Range`](external_link), [`Date.Range`](external_link), [`File.Stream`](external_link) and [`IO.Stream`](external_link) as well as all iterex's internal types.

Allows the data and the iterable for that data to be separate. It could be as simple as a reference to some external data source and a position marker or it may be more efficient to read data in batches and iterate it. Regardless, most types simply return themselves from this function.

It is important that your `into_iterable/1` callback must not actually start iterating, it simply returns a data structure suitable to track the iteration of the underlying data.

#  __ Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

into_iterable(value)

Convert a value into an iterable.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__ Link to this function

# into_iterable(value)

[ __ View Source ](external_link)
    
    
    @spec into_iterable(t()) :: [Iter.Iterable.t](external_link)()

Convert a value into an iterable.
