# Iter.Iterable — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Iterable protocol (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- element()
- mapper()
- predicate()
- t()
- __ Functions
- all?(iterable, predicate)
- any?(iterable, predicate)
- append(iterable, element)
- at(iterable, index)
  - __ Return values
- chunk_by(iterable, chunker)
- chunk_every(iterable, count, step, leftover)
- chunk_while(iterable, acc, chunk_fun, after_fun)
- concat(iterable)
- count(iterable)
- count(iterable, fun)
- cycle(iterable)
- dedup(iterable)
- dedup_by(iterable, fun)
- drop(iterable, how_many)
- drop_every(iterable, nth)
- drop_while(iterable, predicate)
- each(iterable, fun)
- empty?(iter)
- filter(iterable, predicate)
- find(iterable, predicate)
- find_index(iterable, predicate)
- find_value(iterable, fun)
- flat_map(iterable, fun)
- flatten(iterable)
- intersperse(iterable, separator)
- map(iterable, mapper)
- map_every(iterable, nth, mapper)
- max(iterable, sorter)
- max_by(iterable, mapper, sorter)
- member?(iterable, element)
- min(iterable, sorter)
- min_by(iterable, mapper, sorter)
- min_max(iterable)
- next(iterable)
  - __ Return values
- peek(iterable)
  - __ Return values
- peek(iterable, how_many)
  - __ Return values
- prepend(iterable, element)
- step_by(iterable, step_size)
- take_chunk(iterable, how_many)
- take_head(iterable, how_many)
- take_tail(iterable, how_many)
- take_while(iterable, predicate)
- to_list(iterable)
- uniq(iterable)
- with_index(iterable)
- zip(t, zipper)

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Iterable protocol (iterex v0.1.2)

This is the main iterable protocol.

It is intentionally huge, however rte only function you have to implement is `next/1`, for the remainder you can rely on the default implementations from [`Iter.Impl`](external_link) unless your data structure can provide a more efficient method of generating the correct answer.

#  __ Summary

##  Types

element()

mapper()

predicate()

t()

##  Functions

all?(iterable, predicate)

Tests if every element in the iterable matches `predicate`.

any?(iterable, predicate)

Tests if any element in the iterable matches `predicate`.

append(iterable, element)

Append an element onto the end of the iterable.

at(iterable, index)

Returns the element `index` items from the beginning of the iterator.

chunk_by(iterable, chunker)

Creates an iterable that only emits elements for which `fun` returns a new value.

chunk_every(iterable, count, step, leftover)

Creates an iterable that chunks into `count` size elements, where each new chunk starts `step` elements into the enumerable.

chunk_while(iterable, acc, chunk_fun, after_fun)

Creates an iterable that chunks based on a chunk function.

concat(iterable)

Creates an iterable that iterates each iterable in an iterable.

count(iterable)

Consumes the iterable, counting the number of iterations remaining.

count(iterable, fun)

Consumes the iterable, counting the number of elements for which `fun` returns a truthy value.

cycle(iterable)

Creates an iterable that cycles it's elements eternally.

dedup(iterable)

Creates an iterable that only emits elements if they are different from the previous element.

dedup_by(iterable, fun)

Creates an iterable that only emits elements if they are different from the previous element.

drop(iterable, how_many)

Creates an iterable which drops the first `how_many` elements.

drop_every(iterable, nth)

Returns a new iterable with every `nth` element in the `iterable` dropped, starting with the first element.

drop_while(iterable, predicate)

Drops elements at the beginning of the `iterable` while `predicate` returns a truthy value.

each(iterable, fun)

Consumes the iterable and applies `fun` to each element.

empty?(iter)

Determines if the iterable is empty.

filter(iterable, predicate)

Creates an iterable which drops elements for which `predicate` doesn't return a truthy value.

find(iterable, predicate)

Searches for the first element in the iterable which matches `predicate`.

find_index(iterable, predicate)

Returns the index of the first element in the iterable which matches `predicate`.

find_value(iterable, fun)

Returns the first non-falsy result of `fun`.

flat_map(iterable, fun)

Creates an iterable which works like `map/2` but flattens nested iterables.

flatten(iterable)

Creates an iterable which flattens nested iterables.

intersperse(iterable, separator)

Creates a new iterable which places `separator` between adjacent items of the original iterable.

map(iterable, mapper)

Creates a new iterable which applies `mapper` to each element and using it's result as the new element value.

map_every(iterable, nth, mapper)

Creates a new iterable which applies `mapper` on every `nth` element of the iterable, starting with the first element.

max(iterable, sorter)

Returns the maximal element in the `iterable` according to Erlang's term ordering.

max_by(iterable, mapper, sorter)

Returns the maximal element in the `iterable` as calculated by `mapper`.

member?(iterable, element)

Is the element a member of the iterable?

min(iterable, sorter)

Returns the minimal element in the `iterable` according to Erlang's term ordering.

min_by(iterable, mapper, sorter)

Returns the minimal element in the `iterable` as calculated by `mapper`.

min_max(iterable)

Return the minimal and maximal element of the iterable.

next(iterable)

Advance the iterable and return the next value.

peek(iterable)

Peeks at the first element of the iterable, without consuming it.

peek(iterable, how_many)

Peeks at the first n elements of the iterable, without consuming it.

prepend(iterable, element)

Creates an iterable which prepends an element to the beginning of another iterable.

step_by(iterable, step_size)

Creates an iterable starting at the same point, but stepping by `step_size` each iteration.

take_chunk(iterable, how_many)

Collects `how_many` elements into a chunk and returns it as well as the remaining iterable.

take_head(iterable, how_many)

Creates an iterable which takes the first `how_many` elements.

take_tail(iterable, how_many)

Creates an iterable which takes the last `how_many` elements.

take_while(iterable, predicate)

Creates an iterable which emits elements until `predicate` returns `false`.

to_list(iterable)

Convert the iterable into a list.

uniq(iterable)

Creates an iterable that returns only unique elements.

with_index(iterable)

Creates an iterable which emits the current iteration count as well as the next value.

zip(t, zipper)

Zips corresponding elements from a number of iterables into an iterable of results as computed by `zipper`.

#  __ Types

__ Link to this type

# element()

[ __ View Source ](external_link)
    
    
    @type element() :: [Iter.element](external_link)()

__ Link to this type

# mapper()

[ __ View Source ](external_link)
    
    
    @type mapper() :: [Iter.mapper](external_link)()

__ Link to this type

# predicate()

[ __ View Source ](external_link)
    
    
    @type predicate() :: [Iter.predicate](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [any](external_link)()

#  __ Functions

__ Link to this function

# all?(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec all?(t(), predicate()) :: [boolean](external_link)()

Tests if every element in the iterable matches `predicate`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# any?(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec any?(t(), predicate()) :: [boolean](external_link)()

Tests if any element in the iterable matches `predicate`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# append(iterable, element)

[ __ View Source ](external_link)
    
    
    @spec append(t(), element()) :: t()

Append an element onto the end of the iterable.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# at(iterable, index)

[ __ View Source ](external_link)
    
    
    @spec at(t(), [non_neg_integer](external_link)()) :: {:ok, [non_neg_integer](external_link)(), t()} | :done

Returns the element `index` items from the beginning of the iterator.

Note that all preceding elements, as well as the returned element, will be consumed from the iterable.

##  __ Return values

  * `{:ok, element, new_iterable}` \- the next element and an updated iterable.
  * `:done` \- the iterable was exhausted before the element was found.



> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# chunk_by(iterable, chunker)

[ __ View Source ](external_link)
    
    
    @spec chunk_by(t(), (element() -> [any](external_link)())) :: t()

Creates an iterable that only emits elements for which `fun` returns a new value.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# chunk_every(iterable, count, step, leftover)

[ __ View Source ](external_link)
    
    
    @spec chunk_every(t(), [pos_integer](external_link)(), [pos_integer](external_link)(), t() | :discard) :: t()

Creates an iterable that chunks into `count` size elements, where each new chunk starts `step` elements into the enumerable.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# chunk_while(iterable, acc, chunk_fun, after_fun)

[ __ View Source ](external_link)
    
    
    @spec chunk_while(
      t(),
      acc,
      (element(), acc -> {:cont, chunk, acc} | {:cont, acc} | {:halt, acc}),
      (acc -> {:cont, chunk, acc} | {:cont, acc})
    ) :: t()
    when acc: [any](external_link)(), chunk: [any](external_link)()

Creates an iterable that chunks based on a chunk function.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# concat(iterable)

[ __ View Source ](external_link)
    
    
    @spec concat(t()) :: t()

Creates an iterable that iterates each iterable in an iterable.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# count(iterable)

[ __ View Source ](external_link)
    
    
    @spec count(t()) :: [non_neg_integer](external_link)()

Consumes the iterable, counting the number of iterations remaining.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# count(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec count(t(), (element() -> [as_boolean](external_link)([any](external_link)()))) :: [non_neg_integer](external_link)()

Consumes the iterable, counting the number of elements for which `fun` returns a truthy value.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# cycle(iterable)

[ __ View Source ](external_link)
    
    
    @spec cycle(t()) :: t()

Creates an iterable that cycles it's elements eternally.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# dedup(iterable)

[ __ View Source ](external_link)
    
    
    @spec dedup(t()) :: t()

Creates an iterable that only emits elements if they are different from the previous element.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# dedup_by(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec dedup_by(t(), (element() -> [any](external_link)())) :: t()

Creates an iterable that only emits elements if they are different from the previous element.

The function `fun` maps every element to a term which is used to determine if two elements are duplicates.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# drop(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec drop(t(), [non_neg_integer](external_link)()) :: t()

Creates an iterable which drops the first `how_many` elements.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# drop_every(iterable, nth)

[ __ View Source ](external_link)
    
    
    @spec drop_every(t(), [non_neg_integer](external_link)()) :: t()

Returns a new iterable with every `nth` element in the `iterable` dropped, starting with the first element.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# drop_while(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec drop_while(t(), predicate()) :: t()

Drops elements at the beginning of the `iterable` while `predicate` returns a truthy value.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# each(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec each(t(), (element() -> [any](external_link)())) :: :done

Consumes the iterable and applies `fun` to each element.

Primarily used for side-effects.

Always returns `:done`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# empty?(iter)

[ __ View Source ](external_link)
    
    
    @spec empty?(t()) :: [boolean](external_link)()

Determines if the iterable is empty.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# filter(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec filter(t(), predicate()) :: t()

Creates an iterable which drops elements for which `predicate` doesn't return a truthy value.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# find(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec find(t(), predicate()) :: {:ok, element(), t()} | :done

Searches for the first element in the iterable which matches `predicate`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# find_index(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec find_index(t(), predicate()) :: {:ok, [non_neg_integer](external_link)(), t()} | :done

Returns the index of the first element in the iterable which matches `predicate`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# find_value(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec find_value(t(), (element() -> result)) :: {:ok, result, t()} | :done
    when result: [any](external_link)()

Returns the first non-falsy result of `fun`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# flat_map(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec flat_map(t(), (element() -> t() | element())) :: t()

Creates an iterable which works like `map/2` but flattens nested iterables.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# flatten(iterable)

[ __ View Source ](external_link)
    
    
    @spec flatten(t()) :: t()

Creates an iterable which flattens nested iterables.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# intersperse(iterable, separator)

[ __ View Source ](external_link)
    
    
    @spec intersperse(t(), [any](external_link)()) :: t()

Creates a new iterable which places `separator` between adjacent items of the original iterable.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# map(iterable, mapper)

[ __ View Source ](external_link)
    
    
    @spec map(t(), (element() -> new_element)) :: t() when new_element: [any](external_link)()

Creates a new iterable which applies `mapper` to each element and using it's result as the new element value.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# map_every(iterable, nth, mapper)

[ __ View Source ](external_link)
    
    
    @spec map_every(t(), [non_neg_integer](external_link)(), (element() -> new_element)) :: t()
    when new_element: [any](external_link)()

Creates a new iterable which applies `mapper` on every `nth` element of the iterable, starting with the first element.

The first element is always mapped unless `nth` is `0`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# max(iterable, sorter)

[ __ View Source ](external_link)
    
    
    @spec max(t(), (element(), element() -> [boolean](external_link)())) :: {:ok, element()} | :done

Returns the maximal element in the `iterable` according to Erlang's term ordering.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# max_by(iterable, mapper, sorter)

[ __ View Source ](external_link)
    
    
    @spec max_by(t(), (element() -> new_element), (new_element, new_element -> [boolean](external_link)())) ::
      {:ok, element()} | :done
    when new_element: element()

Returns the maximal element in the `iterable` as calculated by `mapper`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# member?(iterable, element)

[ __ View Source ](external_link)
    
    
    @spec member?(t(), element()) :: [boolean](external_link)()

Is the element a member of the iterable?

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# min(iterable, sorter)

[ __ View Source ](external_link)
    
    
    @spec min(t(), (element(), element() -> [boolean](external_link)())) :: {:ok, element()} | :done

Returns the minimal element in the `iterable` according to Erlang's term ordering.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# min_by(iterable, mapper, sorter)

[ __ View Source ](external_link)
    
    
    @spec min_by(t(), (element() -> new_element), (new_element, new_element -> [boolean](external_link)())) ::
      {:ok, element()} | :done
    when new_element: element()

Returns the minimal element in the `iterable` as calculated by `mapper`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# min_max(iterable)

[ __ View Source ](external_link)
    
    
    @spec min_max(t()) :: {:ok, element(), element()} | :done

Return the minimal and maximal element of the iterable.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# next(iterable)

[ __ View Source ](external_link)
    
    
    @spec next(t()) :: {:ok, element(), t()} | :done

Advance the iterable and return the next value.

This is the only required callback in the `Iterable` protocol.

##  __ Return values

  * `{:ok, element, new_iterable}` \- returns the next element and an updated iterable.
  * `:done` \- the iterable is exhausted.



__ Link to this function

# peek(iterable)

[ __ View Source ](external_link)
    
    
    @spec peek(t()) :: {:ok, element(), t()} | :done
    
    
    @spec peek(t()) :: {:ok, [element()], [non_neg_integer](external_link)(), t()} | :done

Peeks at the first element of the iterable, without consuming it.

##  __ Return values

  * `{:ok, element, new_iterable}` \- the next element and an updated iterable.
  * `:done` \- the iterable is exhausted.



> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# peek(iterable, how_many)

[ __ View Source ](external_link)

Peeks at the first n elements of the iterable, without consuming it.

##  __ Return values

  * `{:ok, [element], how_many, new_iterable}` \- the peekable elements and an updated iterable. Note that `how_many` may not be the same as you asked for if the underlying iterable is exhausted.
  * `:done` \- the iterable is exhausted.



> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# prepend(iterable, element)

[ __ View Source ](external_link)
    
    
    @spec prepend(t(), element()) :: t()

Creates an iterable which prepends an element to the beginning of another iterable.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# step_by(iterable, step_size)

[ __ View Source ](external_link)
    
    
    @spec step_by(t(), [pos_integer](external_link)()) :: t()

Creates an iterable starting at the same point, but stepping by `step_size` each iteration.

The first element of the iterable will always be returned, regardless of the step given.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# take_chunk(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec take_chunk(t(), [non_neg_integer](external_link)()) :: {:ok, t(), t()} | {:done, t()}

Collects `how_many` elements into a chunk and returns it as well as the remaining iterable.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# take_head(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec take_head(t(), [non_neg_integer](external_link)()) :: t()

Creates an iterable which takes the first `how_many` elements.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# take_tail(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec take_tail(t(), [non_neg_integer](external_link)()) :: t()

Creates an iterable which takes the last `how_many` elements.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# take_while(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec take_while(t(), predicate()) :: t()

Creates an iterable which emits elements until `predicate` returns `false`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# to_list(iterable)

[ __ View Source ](external_link)
    
    
    @spec to_list(t()) :: [element()]

Convert the iterable into a list.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# uniq(iterable)

[ __ View Source ](external_link)
    
    
    @spec uniq(t()) :: t()

Creates an iterable that returns only unique elements.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# with_index(iterable)

[ __ View Source ](external_link)
    
    
    @spec with_index(t()) :: t()

Creates an iterable which emits the current iteration count as well as the next value.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.

__ Link to this function

# zip(t, zipper)

[ __ View Source ](external_link)
    
    
    @spec zip(t(), ([element()] -> [any](external_link)())) :: t()

Zips corresponding elements from a number of iterables into an iterable of results as computed by `zipper`.

> #### Optional callback
> 
> A default implementation of this function exists in the [`Iter.Impl`](external_link) module.
> 
> You can add it to your protocol implementation by adding `use Iter.Impl`.
