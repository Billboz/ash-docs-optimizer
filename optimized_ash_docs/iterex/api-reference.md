# API Reference — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) API Reference iterex v0.1.2
  - __ Modules

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) API Reference iterex v0.1.2

##  __ Modules

[Iter](external_link)

Functions for working with iterators.

[Iter.Impl](external_link)

The default implementations of all [`Iter.Iterable`](external_link) callbacks except `next/1`.

[Iter.IntoIterable](external_link)

A protocol for converting a value into an iterable.

[Iter.Iterable](external_link)

This is the main iterable protocol.

[Iter.Iterable.Appender](external_link)

An iterable which appends a single element to the end of another iterable.

[Iter.Iterable.ByChunker](external_link)

An iterable that chunks elements by subsequent return values of `fun`.

[Iter.Iterable.Concatenator](external_link)

An iterable which can concatenate a number of iterables.

[Iter.Iterable.Cycler](external_link)

An iterable which emits elements for ever.

[Iter.Iterable.Deduper](external_link)

An iterable that only emits elements if they are different from the previous element.

[Iter.Iterable.Empty](external_link)

An iterable that's always exhausted

[Iter.Iterable.Enumerable](external_link)

Can we convert a enum into an iterable? Let's find out.

[Iter.Iterable.EveryChunker](external_link)

An iterable that chunks into `count` size elements, where each new chunk starts `step` elements into the enumerable.

[Iter.Iterable.EveryDropper](external_link)

An iterable which drops every `nth` element from the iterable.

[Iter.Iterable.EveryMapper](external_link)

An iterable which maps every `nth` element in the iterable.

[Iter.Iterable.Filterer](external_link)

An iterable which drops elements for which `predicate` doesn't return a truthy value.

[Iter.Iterable.FlatMapper](external_link)

An iterable which works like `map/2` but flattens nested iterables.

[Iter.Iterable.Flattener](external_link)

An iterable which flattens nested iterables.

[Iter.Iterable.HeadDropper](external_link)

An iterable which drops the first `how_many` elements.

[Iter.Iterable.HeadTaker](external_link)

An iterable which takes the first `how_many` elements.

[Iter.Iterable.Intersperser](external_link)

An iterable which places a separator value in between consecutive elements.

[Iter.Iterable.Map](external_link)

A wrapper around Erlang's `:maps.iterator`.

[Iter.Iterable.Mapper](external_link)

An iterable which applies a mapper function to all it's elements and returns their new values.

[Iter.Iterable.Peeker](external_link)

The result of "peeking" into an iterable.

[Iter.Iterable.Prepender](external_link)

An iterable which prepends a single element to the end of another iterable.

[Iter.Iterable.Resource](external_link)

An iterable which provides compatibility with [`Stream.resource/3`](external_link)

[Iter.Iterable.Stepper](external_link)

An iterable which advances it's internal iterable by a specific amount each time.

[Iter.Iterable.TailDropper](external_link)

An iterable which drops the last `how_many` elements.

[Iter.Iterable.TailTaker](external_link)

An iterable which takes `how_many` elements from the end of the iterable.

[Iter.Iterable.Uniquer](external_link)

An iterable that only emits unique elements.

[Iter.Iterable.WhileChunker](external_link)

An iterable that chunks based on a chunk function.

[Iter.Iterable.WhileDropper](external_link)

An iterable that drops elements until `predicate` returns a truthy value.

[Iter.Iterable.WhileTaker](external_link)

An iterable which emits elements until `predicate` returns `false`.

[Iter.Iterable.WithIndexer](external_link)

Creates an iterator which emits the current iteration count as well as the next value.

[Iter.Iterable.Zipper](external_link)

An iterable which returns the elements of two iterables as tuple pairs.

[ Next Page →  README  ](external_link)
