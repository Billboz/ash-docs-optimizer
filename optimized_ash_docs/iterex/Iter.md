# Iter — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter (iterex v0.1.2)
  - __ Explicit conversion
  - __ Lazy by default
- __ Summary
  - Types
  - Functions
- __ Types
- element()
- mapper()
- predicate()
- sorter()
- t()
- __ Functions
- all?(iter)
  - __ Examples
- all?(iter, predicate)
  - __ Examples
- any?(iter)
  - __ Examples
- any?(iter, predicate)
  - __ Examples
- append(iter, element)
  - __ Example
- at(iter, index)
  - __ Return values
  - __ Examples
- chunk_by(iter, fun)
  - __ Examples
- chunk_every(iter, count)
- chunk_every(iter, count, step)
  - __ Examples
- chunk_every(iter, count, step, leftover)
- chunk_while(iter, acc, chunk_fun, after_fun)
  - __ Examples
- concat(iter)
  - __ Example
- concat(lhs, rhs)
  - __ Example
- count(iter)
  - __ Example
- count(iter, fun)
  - __ Example
- count_until(iter, limit)
  - __ Examples
- count_until(iter, predicate, limit)
  - __ Examples
- cycle(iter)
- dedup(iter)
  - __ Example
- dedup_by(iter, fun)
  - __ Example
- drop(iter, how_many)
  - __ Examples
- drop_every(iter, nth)
  - __ Examples
- drop_while(iter, predicate)
  - __ Example
- each(iter, fun)
  - __ Example
- empty()
  - __ Example
- empty?(iter)
  - __ Examples
- filter(iter, predicate)
  - __ Example
- find(iter, predicate)
  - __ Example
- find_index(iter, predicate)
  - __ Example
- find_value(iter, fun)
  - __ Example
- flat_map(iter, mapper)
  - __ Example
- flatten(iter)
  - __ Example
- from(iter)
- from_enum(enumerable)
- intersperse(iter, separator)
  - __ Examples
- is_iter(iter)
- iterate(start_value, next_fun)
- map(iter, mapper)
  - __ Example
- map_every(iter, nth, mapper)
  - __ Examples
- max(iter, sorter \\\ &>=/2)
  - __ Example
- max_by(iter, mapper, sorter \\\ &>=/2)
  - __ Example
- member?(iter, element)
  - __ Examples
- min(iter, sorter \\\ &<=/2)
  - __ Example
- min_by(iter, mapper, sorter \\\ &<=/2)
  - __ Example
- min_max(iter)
  - __ Example
- next(iter)
  - __ Return values
- peek(iter)
  - __ Example
- peek(iter, how_many)
  - __ Example
- prepend(iter, element)
  - __ Example
- reject(iter, predicate)
  - __ Example
- repeatedly(generator_fun)
  - __ Examples
- resource(start_fun, next_fun, after_fun)
- step_by(iter, step)
  - __ Examples
- take(iter, count)
  - __ Examples
- take_chunk(iter, how_many)
  - __ Example
- take_while(iter, predicate)
  - __ Example
- to_list(iter)
- to_stream(iter)
  - __ Example
- uniq(iter)
  - __ Example
- with_index(iter)
  - __ Example
- zip(iter)
  - __ Example
- zip(lhs, rhs)
  - __ Example
- zip_with(iter, zipper)
  - __ Example
- zip_with(lhs, rhs, zipper)
  - __ Example

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter (iterex v0.1.2)

Functions for working with iterators.

An iterator is a struct that wraps any value which implements the [`Iter.Iterable`](external_link) protocol. Lists, maps and ranges are all common data types which can be used as iterators.

##  __ Explicit conversion

Whilst the [`Iter.Iterable`](external_link) protocol is designed to work with many different types, you must explicitly convert your iterables into an iterator using `Iter.from/1`. This allows for easy pattern matching of iterators as well as for default implementations of Elixir's [`Enum`](external_link) and [`Collectable`](external_link) protocols.

Any value passed to `Iter.from/1` must implement the [`Iter.IntoIterable`](external_link) protocol.

##  __ Lazy by default

Like Elixir's [`Stream`](external_link), an [`Iter`](external_link) is lazy by default. Any function which returns an `Iter.t` does so by simply composing iterables on top of each other. No iteration is performed until it is needed, and then only the minimum amount needed to return the result.

#  __ Summary

##  Types

element()

mapper()

predicate()

sorter()

t()

##  Functions

all?(iter)

Returns `true` if all elements in the iterator are truthy.

all?(iter, predicate)

Returns `true` if `fun.(element)` is truthy for all elements in the iterator.

any?(iter)

Returns `true` if at least one element in the iterator is truthy.

any?(iter, predicate)

Returns `true` if `fun.(element)` is truthy for at least one element in the iterator.

append(iter, element)

Append a new element to the end of the iterable.

at(iter, index)

Return the element `index` items from the beginning of the iterator.

chunk_by(iter, fun)

Chunks the iterator by buffering elements for which `fun` returns the same value.

chunk_every(iter, count)

Shortcut to `chunk_every(iterable, count, count)`.

chunk_every(iter, count, step)

Consumes the iterator in chunks, containing `count` elements each, where each new chunk steps `step` elements into the iterator.

chunk_every(iter, count, step, leftover)

chunk_while(iter, acc, chunk_fun, after_fun)

Chunks the iterator with fine grained control of when every chunk is emitted.

concat(iter)

Creates an iterator that concatenates an iterator of iterators.

concat(lhs, rhs)

Creates an iterator that iterates the first argument, followed by the second argument.

count(iter)

Count the number of elements remaining in the iterator.

count(iter, fun)

Count the number of elements for which `fun` returns a truthy value.

count_until(iter, limit)

Counts the elements in iterator stopping at `limit`.

count_until(iter, predicate, limit)

Counts the elements of iterator for which `predicate` returns a truthy value, stopping at `limit`.

cycle(iter)

Create an iterator that cycles it's elements eternally.

dedup(iter)

Remove consecutive duplicate elements from the iterator.

dedup_by(iter, fun)

Remove consecutive elements for which `fun` returns duplicate values from the iterator.

drop(iter, how_many)

Returns a new iterator which drops the first `how_many` elements.

drop_every(iter, nth)

Returns a new iterator with every `nth` element in the iterator dropped, starting with the first element.

drop_while(iter, predicate)

Returns a new iterator which drops elements at the beginning of the iterator until `predicate` returns a truthy value.

each(iter, fun)

Call `fun` for every element in the iterator.

empty()

Returns an iterator that contains no elements.

empty?(iter)

Determines if the iterator is empty.

filter(iter, predicate)

Remove elements for which `predicate` returns a truthy value.

find(iter, predicate)

Searches for the first element in the iterator which matches `predicate`.

find_index(iter, predicate)

Finds the index of the first value in the iterator that matches `predicate`.

find_value(iter, fun)

Similar to `find/3`, but returns the value of the function invocation instead of the element itself.

flat_map(iter, mapper)

Maps `fun` over the iterator flattening the result.

flatten(iter)

Flattens nested iterators.

from(iter)

Convert anything that implements [`Iter.IntoIterable`](external_link) into an [`Iter`](external_link).

from_enum(enumerable)

Convert an [`Enumerable`](external_link) into an [`Iter`](external_link).

intersperse(iter, separator)

Intersperses `separator` between each element of the iterator.

is_iter(iter)

Is the passed value an iterator?

iterate(start_value, next_fun)

Emits a sequence of values, starting with `start_value`. Successive values are generated by calling `next_fun` on the previous value.

map(iter, mapper)

Apply `fun` to each element in the iterator and collect the result.

map_every(iter, nth, mapper)

Creates a new iterator which applies `mapper` on every `nth` element of the iterator, starting with the first element.

max(iter, sorter \\\ &>=/2)

Returns the maximal element in the iterator according to Erlang's term sorting.

max_by(iter, mapper, sorter \\\ &>=/2)

Returns the maximal element in the iterator as calculated by `mapper`.

member?(iter, element)

Checks if `element` is a member of `iterable`.

min(iter, sorter \\\ &<=/2)

Returns the minimal element in the iterator according to Erlang's term sorting.

min_by(iter, mapper, sorter \\\ &<=/2)

Returns the minimal element in the iterator as calculated by `mapper`.

min_max(iter)

Returns the minimal and maximal element in the iterator according to Erlang's term ordering.

next(iter)

Advance the iterator and return the next value.

peek(iter)

Peeks at the first element of the iterator, without consuming it.

peek(iter, how_many)

Peeks at the first `how_many` elements of the iterator, without consuming them.

prepend(iter, element)

Prepend a new element to the beginning of the iterable.

reject(iter, predicate)

Keep elements for which `predicate` returns a truthy value.

repeatedly(generator_fun)

Returns an iterator generated by calling `generator_fun` repeatedly.

resource(start_fun, next_fun, after_fun)

Create an iterator from a resource.

step_by(iter, step)

Creates an iterator starting at the same point, but stepping by `step_size` each iteration.

take(iter, count)

Takes the next `count` elements from the iterable and stops iteration.

take_chunk(iter, how_many)

Collects the first `how_many` elements into a new iterator and returns it along with the advanced initial iterator.

take_while(iter, predicate)

Creates an iterable which emits elements until `predicate` returns `false`.

to_list(iter)

Convert an iterator into a list.

to_stream(iter)

Convert an iterator into an Elixir stream.

uniq(iter)

Creates a new iterator which returns only unique elements.

with_index(iter)

Creates a new iterator which replaces each element with a tuple containing the original element and the count of elements so far.

zip(iter)

Zips corresponding elements from a finite collection of iterators into one iterator of tuples.

zip(lhs, rhs)

Zips to iterators together.

zip_with(iter, zipper)

Zips corresponding elements from a finite collection of iterators into a new iterator, transforming them with `zip_fun` as it goes.

zip_with(lhs, rhs, zipper)

Zips corresponding elements from two iterators into a new one, transforming them with `zip_fun` as it goes.

#  __ Types

__ Link to this type

# element()

[ __ View Source ](external_link)
    
    
    @type element() :: [any](external_link)()

__ Link to this type

# mapper()

[ __ View Source ](external_link)
    
    
    @type mapper() :: (element() -> [any](external_link)())

__ Link to this type

# predicate()

[ __ View Source ](external_link)
    
    
    @type predicate() :: (element() -> [as_boolean](external_link)([any](external_link)()))

__ Link to this type

# sorter()

[ __ View Source ](external_link)
    
    
    @type sorter() :: (element(), element() -> [as_boolean](external_link)([any](external_link)()))

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Iter{iterable: [Iter.Iterable.t](external_link)()}

#  __ Functions

__ Link to this function

# all?(iter)

[ __ View Source ](external_link)
    
    
    @spec all?(t()) :: [boolean](external_link)()

Returns `true` if all elements in the iterator are truthy.

##  __ Examples
    
    
    iex> [1, 2, false]
    ...> |> Iter.from()
    ...> |> Iter.all?()
    false
    
    iex> [1, 2, nil]
    ...> |> Iter.from()
    ...> |> Iter.all?()
    false
    
    iex> [1, 2, 3]
    ...> |> Iter.from()
    ...> |> Iter.all?()
    true

__ Link to this function

# all?(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec all?(t(), predicate()) :: [boolean](external_link)()

Returns `true` if `fun.(element)` is truthy for all elements in the iterator.

Iterates over the iterator and invokes `fun` on each element. If `fun` ever returns a falsy value (`false` or `nil`), iteration stops immediately and `false` is returned. Otherwise `true` is returned.

##  __ Examples
    
    
    iex> [2, 4, 6]
    ...> |> Iter.from()
    ...> |> Iter.all?(&(rem(&1, 2) == 0))
    true
    
    iex> [2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.all?(&(rem(&1, 2) == 0))
    false
    
    iex> []
    ...> |> Iter.from()
    ...> |> Iter.all?()
    true

__ Link to this function

# any?(iter)

[ __ View Source ](external_link)
    
    
    @spec any?(t()) :: [boolean](external_link)()

Returns `true` if at least one element in the iterator is truthy.

When an element is a truthy value (neither `false` nor `nil`) iteration stops immediately and `true` is returned. In all other cases `false` is returned.

##  __ Examples
    
    
    iex> [false, false, false]
    ...> |> Iter.from()
    ...> |> Iter.any?()
    false
    
    iex> [false, true, false]
    ...> |> Iter.from()
    ...> |> Iter.any?()
    true
    
    iex> []
    ...> |> Iter.from()
    ...> |> Iter.any?()
    false

__ Link to this function

# any?(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec any?(t(), predicate()) :: [boolean](external_link)()

Returns `true` if `fun.(element)` is truthy for at least one element in the iterator.

Consumes the iterator and invokes `fun` on each element. When an invocation of `fun` returns a truthy value (neither `false` nor `nil`) iteration stops immediately and `true` is returned. In all other cases `false` is returned.

##  __ Examples
    
    
    iex> [2, 4, 6]
    ...> |> Iter.from()
    ...> |> Iter.any?(&(rem(&1, 2) == 1))
    false
    
    iex> [2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.any?(&(rem(&1, 2) == 1))
    true
    
    iex> []
    ...> |> Iter.from()
    ...> |> Iter.any?(&(rem(&1, 2) == 1))
    false

__ Link to this function

# append(iter, element)

[ __ View Source ](external_link)
    
    
    @spec append(t(), element()) :: t()

Append a new element to the end of the iterable.

##  __ Example
    
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.append(4)
    ...> |> Iter.to_list()
    [1, 2, 3, 4]

__ Link to this function

# at(iter, index)

[ __ View Source ](external_link)
    
    
    @spec at(t(), [non_neg_integer](external_link)()) :: {:ok, element(), t()} | :done

Return the element `index` items from the beginning of the iterator.

Works by advancing the iterator the specified number of elements and then returning the element requested and an iterator of the remaining elements.

##  __ Return values

  * `{:ok, element, new_iterator}` \- the element requested and the iterator of the remaining elements.
  * `:done` \- the iterator was exhausted before the element was found.



##  __ Examples
    
    
    iex> 10..20
    ...> |> Iter.from()
    ...> |> Iter.at(5)
    {:ok, 15, Iter.from(16..20)}

__ Link to this function

# chunk_by(iter, fun)

[ __ View Source ](external_link)
    
    
    @spec chunk_by(t(), (element() -> [any](external_link)())) :: t()

Chunks the iterator by buffering elements for which `fun` returns the same value.

Elements are only emitted when `fun` returns a new value or `iterable` is exhausted.

##  __ Examples
    
    
    iex> [1, 2, 2, 3, 4, 4, 6, 7, 7]
    ...> |> Iter.from()
    ...> |> Iter.chunk_by(&(rem(&1, 2) == 1))
    ...> |> Iter.to_list()
    [[1], [2, 2], [3], [4, 4, 6], [7, 7]]

__ Link to this function

# chunk_every(iter, count)

[ __ View Source ](external_link)
    
    
    @spec chunk_every(t(), [pos_integer](external_link)()) :: t()

Shortcut to `chunk_every(iterable, count, count)`.

__ Link to this function

# chunk_every(iter, count, step)

[ __ View Source ](external_link)

Consumes the iterator in chunks, containing `count` elements each, where each new chunk steps `step` elements into the iterator.

`step` is optional and, if not passed defaults to `count`, i.e. chunks do not overlap. Chunking will stop as soon as the iterable is exhausted or when we emit an incomplete chunk.

If the last chunk does not have `chunk` elements to fill the chunk, elements are taken from `leftover` to fill in the chunk, if `leftover` does not have enough elements to fill the chunk, then a partial chunk is returned with less than `count` elements.

If `:discard` is given in `leftover` the last chunk is discarded unless it has exactly `count` elements.

##  __ Examples
    
    
    iex> [a, b, c] = [1, 2, 3, 4, 5, 6]
    ...> |> Iter.from()
    ...> |> Iter.chunk_every(2)
    ...> |> Iter.to_list()
    iex> Iter.to_list(a)
    [1, 2]
    iex> Iter.to_list(b)
    [3, 4]
    iex> Iter.to_list(c)
    [5, 6]
    
    iex> [a, b] = [1, 2, 3, 4, 5, 6]
    ...> |> Iter.from()
    ...> |> Iter.chunk_every(3, 2, :discard)
    ...> |> Iter.to_list()
    iex> Iter.to_list(a)
    [1, 2, 3]
    iex> Iter.to_list(b)
    [3, 4, 5]
    
    iex> [a, b, c] = [1, 2, 3, 4, 5, 6]
    ...> |> Iter.from()
    ...> |> Iter.chunk_every(3, 2, [7] |> Iter.from())
    ...> |> Iter.to_list()
    iex> Iter.to_list(a)
    [1, 2, 3]
    iex> Iter.to_list(b)
    [3, 4, 5]
    iex> Iter.to_list(c)
    [5, 6, 7]
    
    iex> [a, b] = [1, 2, 3, 4, 5, 6]
    ...> |> Iter.from()
    ...> |> Iter.chunk_every(3, 3, [] |> Iter.from())
    ...> |> Iter.to_list()
    iex> Iter.to_list(a)
    [1, 2, 3]
    iex> Iter.to_list(b)
    [4, 5, 6]
    
    iex> [a, b] = [1, 2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.chunk_every(3, 3, [0] |> Iter.from() |> Iter.cycle())
    ...> |> Iter.to_list()
    iex> Iter.to_list(a)
    [1, 2, 3]
    iex> Iter.to_list(b)
    [4, 0, 0]

__ Link to this function

# chunk_every(iter, count, step, leftover)

[ __ View Source ](external_link)
    
    
    @spec chunk_every(t(), [pos_integer](external_link)(), [pos_integer](external_link)(), t() | :discard) :: [Enumerable.t](external_link)()

__ Link to this function

# chunk_while(iter, acc, chunk_fun, after_fun)

[ __ View Source ](external_link)
    
    
    @spec chunk_while(
      t(),
      acc,
      (element(), acc -> {:cont, chunk, acc} | {:cont, acc} | {:halt, acc}),
      (acc -> {:cont, chunk, acc} | {:cont, acc})
    ) :: t()
    when acc: [any](external_link)(), chunk: [any](external_link)()

Chunks the iterator with fine grained control of when every chunk is emitted.

`chunk_fun` receives the current element and the accumulator and must return `{:cont, element, acc}` to emit the given chunk and continue with accumulator or `{:cont, acc}` to not emit any chunk and continue with the return accumulator.

`after_fun` is invoked when iteration is done and must also return `{:cont, element, acc}` or `{:cont, acc}`.

##  __ Examples
    
    
    iex> chunk_fun = fn element, acc ->
    ...>   if rem(element, 2) == 0 do
    ...>     {:cont, Enum.reverse([element | acc]), []}
    ...>   else
    ...>     {:cont, [element | acc]}
    ...>   end
    ...> end
    iex> after_fun = fn
    ...>   [] -> {:cont, []}
    ...>   acc -> {:cont, Enum.reverse(acc), []}
    ...> end
    iex> 1..10
    ...> |> Iter.from()
    ...> |> Iter.chunk_while([], chunk_fun, after_fun)
    ...> |> Iter.to_list()
    [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]

__ Link to this function

# concat(iter)

[ __ View Source ](external_link)
    
    
    @spec concat(t()) :: t()

Creates an iterator that concatenates an iterator of iterators.

##  __ Example
    
    
    iex> [Iter.from(1..2), Iter.from(3..4)]
    ...> |> Iter.from()
    ...> |> Iter.concat()
    ...> |> Iter.to_list()
    [1, 2, 3, 4]

__ Link to this function

# concat(lhs, rhs)

[ __ View Source ](external_link)
    
    
    @spec concat(t(), t()) :: t()

Creates an iterator that iterates the first argument, followed by the second argument.

##  __ Example
    
    
    iex> lhs = Iter.from(1..3)
    ...> rhs = Iter.from(4..6)
    ...> Iter.concat(lhs, rhs) |> Iter.to_list()
    [1, 2, 3, 4, 5, 6]

__ Link to this function

# count(iter)

[ __ View Source ](external_link)
    
    
    @spec count(t()) :: [non_neg_integer](external_link)()

Count the number of elements remaining in the iterator.

Some iterators can be counted without consuming the iterator, but most cannot and you should consider the iterator passed to this function as having been exhausted.

##  __ Example
    
    
    iex> 1..10
    ...> |> Iter.from()
    ...> |> Iter.count()
    10

__ Link to this function

# count(iter, fun)

[ __ View Source ](external_link)
    
    
    @spec count(t(), (element() -> [as_boolean](external_link)([any](external_link)()))) :: [non_neg_integer](external_link)()

Count the number of elements for which `fun` returns a truthy value.

##  __ Example
    
    
    iex> 1..5
    ...> |> Iter.from()
    ...> |> Iter.count(&(rem(&1, 2) == 0))
    2

__ Link to this function

# count_until(iter, limit)

[ __ View Source ](external_link)
    
    
    @spec count_until(t(), [pos_integer](external_link)()) :: {:ok, [non_neg_integer](external_link)(), t()}

Counts the elements in iterator stopping at `limit`.

##  __ Examples
    
    
    iex> 1..20
    ...> |> Iter.from()
    ...> |> Iter.count_until(5)
    {:ok, 5, Iter.from(6..20)}
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.count_until(5)
    {:ok, 3, Iter.empty()}
    
    iex> []
    ...> |> Iter.from()
    ...> |> Iter.count_until(5)
    {:ok, 0, Iter.empty()}

__ Link to this function

# count_until(iter, predicate, limit)

[ __ View Source ](external_link)
    
    
    @spec count_until(t(), predicate(), [pos_integer](external_link)()) :: {:ok, [non_neg_integer](external_link)(), t()}

Counts the elements of iterator for which `predicate` returns a truthy value, stopping at `limit`.

##  __ Examples
    
    
    iex> 1..20
    ...> |> Iter.from()
    ...> |> Iter.count_until(&(rem(&1, 2) == 0), 7)
    {:ok, 7, Iter.from(15..20)}
    
    iex> 1..20
    ...> |> Iter.from()
    ...> |> Iter.count_until(&(rem(&1, 2) == 0), 11)
    {:ok, 10, Iter.empty()}

__ Link to this function

# cycle(iter)

[ __ View Source ](external_link)
    
    
    @spec cycle(t()) :: t() | [no_return](external_link)()

Create an iterator that cycles it's elements eternally.
    
    
    iex> [:a, :b, :c]
    ...> |> Iter.from()
    ...> |> Iter.cycle()
    ...> |> Iter.take(5)
    ...> |> Iter.to_list()
    [:a, :b, :c, :a, :b]

__ Link to this function

# dedup(iter)

[ __ View Source ](external_link)
    
    
    @spec dedup(t()) :: t()

Remove consecutive duplicate elements from the iterator.

##  __ Example
    
    
    iex> [1, 1, 2, 3, 3, 4, 5, 4]
    ...> |> Iter.from()
    ...> |> Iter.dedup()
    ...> |> Iter.to_list()
    [1, 2, 3, 4, 5, 4]

__ Link to this function

# dedup_by(iter, fun)

[ __ View Source ](external_link)
    
    
    @spec dedup_by(t(), (element() -> [any](external_link)())) :: t()

Remove consecutive elements for which `fun` returns duplicate values from the iterator.

##  __ Example

iex> [{1, :a}, {2, :b}, {2, :c}, {1, :a}] ...> |> Iter.from() ...> |> Iter.dedup_by(&elem(&1, 0)) ...> |> Iter.to_list() [{1, :a}, {2, :b}, {1, :a}]

__ Link to this function

# drop(iter, how_many)

[ __ View Source ](external_link)
    
    
    @spec drop(t(), [non_neg_integer](external_link)()) :: t()

Returns a new iterator which drops the first `how_many` elements.

##  __ Examples
    
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.drop(2)
    ...> |> Iter.to_list()
    [3]

__ Link to this function

# drop_every(iter, nth)

[ __ View Source ](external_link)
    
    
    @spec drop_every(t(), [non_neg_integer](external_link)()) :: t()

Returns a new iterator with every `nth` element in the iterator dropped, starting with the first element.

##  __ Examples
    
    
    iex> 1..10
    ...> |> Iter.from()
    ...> |> Iter.drop_every(2)
    ...> |> Iter.to_list()
    [2, 4, 6, 8, 10]
    
    iex> 1..10
    ...> |> Iter.from()
    ...> |> Iter.drop_every(0)
    ...> |> Iter.to_list()
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    iex> [1, 2, 3]
    ...> |> Iter.from()
    ...> |> Iter.drop_every(1)
    ...> |> Iter.to_list()
    []

__ Link to this function

# drop_while(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec drop_while(t(), predicate()) :: t()

Returns a new iterator which drops elements at the beginning of the iterator until `predicate` returns a truthy value.

##  __ Example
    
    
    iex> [1, 2, 3, 2, 1]
    ...> |> Iter.from()
    ...> |> Iter.drop_while(&(&1 < 3))
    ...> |> Iter.to_list()
    [3, 2, 1]

__ Link to this function

# each(iter, fun)

[ __ View Source ](external_link)
    
    
    @spec each(t(), (element() -> [any](external_link)())) :: :done

Call `fun` for every element in the iterator.

The return value is not used.

##  __ Example
    
    
    ["marty", "doc"]
    |> Iter.from()
    |> Iter.each(&IO.puts/1)
    "marty"
    "doc"
    #=> :done

__ Link to this function

# empty()

[ __ View Source ](external_link)
    
    
    @spec empty() :: t()

Returns an iterator that contains no elements.

##  __ Example
    
    
    iex> Iter.empty()
    ...> |> Iter.to_list()
    []

__ Link to this function

# empty?(iter)

[ __ View Source ](external_link)
    
    
    @spec empty?(t()) :: [boolean](external_link)()

Determines if the iterator is empty.

##  __ Examples
    
    
    iex> Iter.empty()
    ...> |> Iter.empty?()
    true
    
    iex> 1..20
    ...> |> Iter.from()
    ...> |> Iter.empty?
    false

__ Link to this function

# filter(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec filter(t(), predicate()) :: t()

Remove elements for which `predicate` returns a truthy value.

##  __ Example
    
    
    iex> [1, 2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.filter(&(rem(&1, 2) == 0))
    ...> |> Iter.to_list()
    [2, 4]

__ Link to this function

# find(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec find(t(), predicate()) :: {:ok, element(), t()} | :done

Searches for the first element in the iterator which matches `predicate`.

##  __ Example
    
    
    iex> [1, 2, 3, 4, 5]
    ...> |> Iter.from()
    ...> |> Iter.find(&(&1 > 3))
    {:ok, 4, Iter.from([5])}
    
    iex> [1, 2, 3]
    ...> |> Iter.from()
    ...> |> Iter.find(&(&1 > 4))
    :done

__ Link to this function

# find_index(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec find_index(t(), predicate()) :: {:ok, [non_neg_integer](external_link)(), t()} | :done

Finds the index of the first value in the iterator that matches `predicate`.

##  __ Example
    
    
    iex> [1, 2, 3, 4, 5]
    ...> |> Iter.from()
    ...> |> Iter.find_index(&(&1 > 3))
    {:ok, 3, Iter.from([5])}

__ Link to this function

# find_value(iter, fun)

[ __ View Source ](external_link)
    
    
    @spec find_value(t(), (element() -> [any](external_link)())) :: {:ok, [any](external_link)(), t()} | :done

Similar to `find/3`, but returns the value of the function invocation instead of the element itself.

##  __ Example
    
    
    iex> [2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.find_value(fn x ->
    ...>   if x > 2, do: x * x
    ...> end)
    {:ok, 9, Iter.from([4])}
    
    iex> [2, 4, 6]
    ...> |> Iter.from()
    ...> |> Iter.find_value(&(rem(&1, 2) == 1))
    :done
    
    iex> [2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.find_value(&(rem(&1, 2) == 1))
    {:ok, true, Iter.from([4])}

__ Link to this function

# flat_map(iter, mapper)

[ __ View Source ](external_link)
    
    
    @spec flat_map(t(), mapper()) :: t()

Maps `fun` over the iterator flattening the result.

##  __ Example
    
    
    iex> [:a, :b, :c]
    ...> |> Iter.from()
    ...> |> Iter.flat_map(&Iter.from([&1, &1]))
    ...> |> Iter.to_list()
    [:a, :a, :b, :b, :c, :c]

__ Link to this function

# flatten(iter)

[ __ View Source ](external_link)
    
    
    @spec flatten(t()) :: t()

Flattens nested iterators.

##  __ Example
    
    
    iex> [[:a, :a], [:b, :b], [:c, :c]]
    ...> |> Iter.from()
    ...> |> Iter.flatten()
    ...> |> Iter.to_list()
    [:a, :a, :b, :b, :c, :c]

__ Link to this function

# from(iter)

[ __ View Source ](external_link)
    
    
    @spec from([Iter.IntoIterable.t](external_link)()) :: t()

Convert anything that implements [`Iter.IntoIterable`](external_link) into an [`Iter`](external_link).

__ Link to this function

# from_enum(enumerable)

[ __ View Source ](external_link)
    
    
    @spec from_enum([Enumerable.t](external_link)()) :: t()

Convert an [`Enumerable`](external_link) into an [`Iter`](external_link).

Provides an [`Enumerable`](external_link) compatible source for [`Iter`](external_link) using a [`GenServer`](external_link) to orchestrate reduction and block as required.

> #### Warning
> 
> You should almost always implement `IntoIterable` for your enumerable and use `from/1` rather than resort to calling this function. Unfortunately it cannot always be avoided.

__ Link to this function

# intersperse(iter, separator)

[ __ View Source ](external_link)
    
    
    @spec intersperse(t(), [any](external_link)()) :: t()

Intersperses `separator` between each element of the iterator.

##  __ Examples
    
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.intersperse(0)
    ...> |> Iter.to_list()
    [1, 0, 2, 0, 3]
    
    iex> [1]
    ...> |> Iter.from()
    ...> |> Iter.intersperse(0)
    ...> |> Iter.to_list()
    [1]
    
    iex> []
    ...> |> Iter.from()
    ...> |> Iter.intersperse(0)
    ...> |> Iter.to_list()
    []

__ Link to this macro

# is_iter(iter)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_iter([any](external_link)()) :: [Macro.output](external_link)()

Is the passed value an iterator?

__ Link to this function

# iterate(start_value, next_fun)

[ __ View Source ](external_link)
    
    
    @spec iterate(element(), (element() -> element())) :: t()

Emits a sequence of values, starting with `start_value`. Successive values are generated by calling `next_fun` on the previous value.
    
    
    iex> Iter.iterate(0, &(&1 + 1))
    ...> |> Iter.take(5)
    ...> |> Iter.to_list()
    [0, 1, 2, 3, 4]

__ Link to this function

# map(iter, mapper)

[ __ View Source ](external_link)
    
    
    @spec map(t(), mapper()) :: t()

Apply `fun` to each element in the iterator and collect the result.

##  __ Example
    
    
    iex> [1, 2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.map(&(&1 * 2))
    ...> |> Iter.to_list()
    [2, 4, 6, 8]

__ Link to this function

# map_every(iter, nth, mapper)

[ __ View Source ](external_link)
    
    
    @spec map_every(t(), [non_neg_integer](external_link)(), (element() -> new_element)) :: t()
    when new_element: [any](external_link)()

Creates a new iterator which applies `mapper` on every `nth` element of the iterator, starting with the first element.

The first element is always mapped unless `nth` is `0`.

##  __ Examples
    
    
    iex> 1..10
    ...> |> Iter.from()
    ...> |> Iter.map_every(2, fn x -> x + 1000 end)
    ...> |> Iter.to_list()
    [1001, 2, 1003, 4, 1005, 6, 1007, 8, 1009, 10]
    
    iex> 1..10
    ...> |> Iter.from()
    ...> |> Iter.map_every(3, fn x -> x + 1000 end)
    ...> |> Iter.to_list()
    [1001, 2, 3, 1004, 5, 6, 1007, 8, 9, 1010]
    
    iex> 1..5
    ...> |> Iter.from()
    ...> |> Iter.map_every(0, fn x -> x + 1000 end)
    ...> |> Iter.to_list()
    [1, 2, 3, 4, 5]
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.map_every(1, fn x -> x + 1000 end)
    ...> |> Iter.to_list()
    [1001, 1002, 1003]

__ Link to this function

# max(iter, sorter \\\ &>=/2)

[ __ View Source ](external_link)
    
    
    @spec max(t(), sorter()) :: {:ok, element()} | :done

Returns the maximal element in the iterator according to Erlang's term sorting.

##  __ Example
    
    
    iex> [1, 4, 3, 2]
    ...> |> Iter.from()
    ...> |> Iter.max()
    {:ok, 4}
    
    iex> Iter.empty()
    ...> |> Iter.max()
    :done

__ Link to this function

# max_by(iter, mapper, sorter \\\ &>=/2)

[ __ View Source ](external_link)
    
    
    @spec max_by(t(), mapper(), sorter()) :: {:ok, element()} | :done

Returns the maximal element in the iterator as calculated by `mapper`.

##  __ Example
    
    
    iex> ["a", "aa", "aaa"]
    ...> |> Iter.from()
    ...> |> Iter.max_by(&String.length/1)
    {:ok, "aaa"}
    
    iex> Iter.empty()
    ...> |> Iter.max_by(&String.length/1)
    :done

__ Link to this function

# member?(iter, element)

[ __ View Source ](external_link)
    
    
    @spec member?(t(), element()) :: [boolean](external_link)()

Checks if `element` is a member of `iterable`.

##  __ Examples
    
    
    iex> 1..5
    ...> |> Iter.from()
    ...> |> Iter.member?(3)
    true
    
    iex> 1..5
    ...> |> Iter.from()
    ...> |> Iter.member?(6)
    false

__ Link to this function

# min(iter, sorter \\\ &<=/2)

[ __ View Source ](external_link)
    
    
    @spec min(t(), sorter()) :: {:ok, element()} | :done

Returns the minimal element in the iterator according to Erlang's term sorting.

##  __ Example
    
    
    iex> [1, 4, 3, 2]
    ...> |> Iter.from()
    ...> |> Iter.min()
    {:ok, 1}

__ Link to this function

# min_by(iter, mapper, sorter \\\ &<=/2)

[ __ View Source ](external_link)
    
    
    @spec min_by(t(), mapper(), sorter()) :: {:ok, element()} | :done

Returns the minimal element in the iterator as calculated by `mapper`.

##  __ Example
    
    
    iex> ["a", "aa", "aaa"]
    ...> |> Iter.from()
    ...> |> Iter.min_by(&String.length/1)
    {:ok, "a"}
    
    iex> Iter.empty()
    ...> |> Iter.min_by(&String.length/1)
    :done

__ Link to this function

# min_max(iter)

[ __ View Source ](external_link)
    
    
    @spec min_max(t()) :: {:ok, min, max} | :done when min: element(), max: element()

Returns the minimal and maximal element in the iterator according to Erlang's term ordering.

##  __ Example
    
    
    iex> [2, 3, 1]
    ...> |> Iter.from()
    ...> |> Iter.min_max()
    {:ok, 1, 3}
    
    iex> Iter.empty()
    ...> |> Iter.min_max()
    :done

__ Link to this function

# next(iter)

[ __ View Source ](external_link)
    
    
    @spec next(t()) :: {:ok, element(), t()} | :done

Advance the iterator and return the next value.

##  __ Return values

  * `{:ok, element, new_iterator}` \- returns the next element and an updated iterator.
  * `:done` \- the iterator is exhausted.



__ Link to this function

# peek(iter)

[ __ View Source ](external_link)
    
    
    @spec peek(t()) :: {:ok, element(), t()} | :done

Peeks at the first element of the iterator, without consuming it.

> #### Warning
> 
> Many iterators cannot be peeked, so this function simulates peeking by consuming an element from the iterator and returning a new iterator which pushes that element back onto the front.

##  __ Example
    
    
    iex> {:ok, 1, iter} = 1..3
    ...> |> Iter.from()
    ...> |> Iter.peek()
    ...> Iter.to_list(iter)
    [1, 2, 3]

__ Link to this function

# peek(iter, how_many)

[ __ View Source ](external_link)
    
    
    @spec peek(t(), how_many :: [pos_integer](external_link)()) ::
      {:ok, [element()], [non_neg_integer](external_link)(), t()} | :done

Peeks at the first `how_many` elements of the iterator, without consuming them.

> #### Warning
> 
> Many iterables cannot be peeked, so this function simulates peeking by consuming elements from the iterator and returning a new iterator which pushes those elements back on to the front.

Because it's possible to try and peek past the end of an iterator you shouldn't expect the number of elements returned to always be the same as how many you asked for. For this reason the return value includes the number of elements that were able to be peeked.

##  __ Example
    
    
    iex> {:ok, peeks, 3, iter} = 1..5
    ...> |> Iter.from()
    ...> |> Iter.peek(3)
    iex> Iter.to_list(peeks)
    [1, 2, 3]
    iex> Iter.to_list(iter)
    [1, 2, 3, 4, 5]
    
    iex> {:ok, peeks, 3, iter} = 1..3
    ...> |> Iter.from()
    ...> |> Iter.peek(5)
    iex> Iter.to_list(peeks)
    [1, 2, 3]
    iex> Iter.to_list(iter)
    [1, 2, 3]

__ Link to this function

# prepend(iter, element)

[ __ View Source ](external_link)
    
    
    @spec prepend(t(), element()) :: t()

Prepend a new element to the beginning of the iterable.

##  __ Example
    
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.prepend(4)
    ...> |> Iter.to_list()
    [4, 1, 2, 3]

__ Link to this function

# reject(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec reject(t(), predicate()) :: t()

Keep elements for which `predicate` returns a truthy value.

##  __ Example
    
    
    iex> [1, 2, 3, 4]
    ...> |> Iter.from()
    ...> |> Iter.reject(&(rem(&1, 2) == 0))
    ...> |> Iter.to_list()
    [1, 3]

__ Link to this function

# repeatedly(generator_fun)

[ __ View Source ](external_link)
    
    
    @spec repeatedly((-> element())) :: t()

Returns an iterator generated by calling `generator_fun` repeatedly.

##  __ Examples
    
    
    # Although not necessary, let's seed the random algorithm
    iex> :rand.seed(:exsss, {1, 2, 3})
    iex> Iter.repeatedly(&:rand.uniform/0) |> Iter.take(3) |> Iter.to_list()
    [0.5455598952593053, 0.6039309974353404, 0.6684893034823949]

__ Link to this function

# resource(start_fun, next_fun, after_fun)

[ __ View Source ](external_link)
    
    
    @spec resource(
      start_fun :: (-> acc),
      next_fun :: (acc -> {[element()], acc} | {:halt, acc}),
      after_fun :: (acc -> [any](external_link)())
    ) :: t()
    when acc: [any](external_link)()

Create an iterator from a resource.
    
    
    iex> Iter.resource(
    ...>   fn ->
    ...>     {:ok, pid} = StringIO.open("Marty")
    ...>     pid
    ...>   end,
    ...>   fn pid ->
    ...>     case IO.read(pid, 1) do
    ...>       :eof -> {:halt, pid}
    ...>       char -> {[char], pid}
    ...>     end
    ...>   end,
    ...>   fn pid ->
    ...>     StringIO.close(pid)
    ...>   end
    ...> )
    ...> |> Iter.to_list()
    ["M", "a", "r", "t", "y"]

__ Link to this function

# step_by(iter, step)

[ __ View Source ](external_link)
    
    
    @spec step_by(t(), [pos_integer](external_link)()) :: t()

Creates an iterator starting at the same point, but stepping by `step_size` each iteration.

The first element of the iterator will always be returned, regardless of the step given.

##  __ Examples
    
    
      iex> 1..9
      ...> |> Iter.from()
      ...> |> Iter.step_by(3)
      ...> |> Iter.to_list()
      [1, 4, 7]

__ Link to this function

# take(iter, count)

[ __ View Source ](external_link)
    
    
    @spec take(t(), [integer](external_link)()) :: t()

Takes the next `count` elements from the iterable and stops iteration.

If a negative count is given, the last count values will be taken. For such, the collection is fully enumerated keeping up to `count` elements in memory. Once the end of the collection is reached, the last `count` elements will be iterated. Therefore, using a negative count on an infinite collection will never return.

The rest of the underlying iterable is discarded.

##  __ Examples
    
    
    iex> Iter.empty()
    ...> |> Iter.take(3)
    ...> |> Iter.to_list()
    []
    
    iex> Iter.empty()
    ...> |> Iter.take(-3)
    ...> |> Iter.to_list()
    []
    
    iex> 1..5
    ...> |> Iter.from()
    ...> |> Iter.take(3)
    ...> |> Iter.to_list()
    [1, 2, 3]
    
    iex> 1..5
    ...> |> Iter.from()
    ...> |> Iter.take(-3)
    ...> |> Iter.to_list()
    [3, 4, 5]

__ Link to this function

# take_chunk(iter, how_many)

[ __ View Source ](external_link)
    
    
    @spec take_chunk(t(), [pos_integer](external_link)()) :: {:ok, t(), t()} | {:done, t()}

Collects the first `how_many` elements into a new iterator and returns it along with the advanced initial iterator.

This is very much like `take/2` except that it returns the remaining iterator so that it can be called repeatedly.

##  __ Example
    
    
    iex> iter = Iter.from(1..9)
    ...> {:ok, chunk_a, iter} = Iter.take_chunk(iter, 3)
    ...> {:ok, chunk_b, remainder} = Iter.take_chunk(iter, 3)
    ...> Iter.to_list(chunk_a)
    [1, 2, 3]
    iex> Iter.to_list(chunk_b)
    [4, 5, 6]
    iex> Iter.to_list(remainder)
    [7, 8, 9]

__ Link to this function

# take_while(iter, predicate)

[ __ View Source ](external_link)
    
    
    @spec take_while(t(), predicate()) :: t()

Creates an iterable which emits elements until `predicate` returns `false`.

The rest of the underlying iterable is discarded.

##  __ Example
    
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.take_while(&(&1 < 3))
    ...> |> Iter.to_list()
    [1, 2]

__ Link to this function

# to_list(iter)

[ __ View Source ](external_link)
    
    
    @spec to_list(t()) :: [element()]

Convert an iterator into a list.

__ Link to this function

# to_stream(iter)

[ __ View Source ](external_link)
    
    
    @spec to_stream(t()) :: [Enumerable.t](external_link)()

Convert an iterator into an Elixir stream.

##  __ Example
    
    
    iex> [:a, :b, :c]
    ...> |> Iter.from()
    ...> |> Iter.cycle()
    ...> |> Iter.to_stream()
    ...> |> Enum.take(5)
    [:a, :b, :c, :a, :b]

__ Link to this function

# uniq(iter)

[ __ View Source ](external_link)
    
    
    @spec uniq(t()) :: t()

Creates a new iterator which returns only unique elements.

> #### Warning
> 
> Except for specific data structures (eg [`MapSet`](external_link) and [`Range`](external_link)) most iterators will need to store a set of "seen values" in order to provide this function. In such cases memory usage will grow in direct relation to the number of unique elements in the iterator.

##  __ Example
    
    
    iex> 1..5
    ...> |> Iter.from()
    ...> |> Iter.uniq()
    Iter.from(1..5)
    
    iex> [1, 2, 3, 2, 1]
    ...> |> Iter.from()
    ...> |> Iter.uniq()
    ...> |> Iter.to_list()
    [1, 2, 3]

__ Link to this function

# with_index(iter)

[ __ View Source ](external_link)
    
    
    @spec with_index(t()) :: t()

Creates a new iterator which replaces each element with a tuple containing the original element and the count of elements so far.

##  __ Example
    
    
    iex> 1..3
    ...> |> Iter.from()
    ...> |> Iter.with_index()
    ...> |> Iter.to_list()
    [{1, 0}, {2, 1}, {3, 2}]

__ Link to this function

# zip(iter)

[ __ View Source ](external_link)
    
    
    @spec zip(t()) :: t()

Zips corresponding elements from a finite collection of iterators into one iterator of tuples.

The zipping finishes as soon as any iterable in the collection is exhausted.

##  __ Example
    
    
    iex> first = Iter.from(1..3)
    ...> second = Iter.from([:a, :b, :c])
    ...> third = Iter.from(["a", "b", "c"])
    ...> [first, second, third]
    ...> |> Iter.from()
    ...> |> Iter.zip()
    ...> |> Iter.to_list()
    [{1, :a, "a"}, {2, :b, "b"}, {3, :c, "c"}]

__ Link to this function

# zip(lhs, rhs)

[ __ View Source ](external_link)
    
    
    @spec zip(t(), t()) :: t()

Zips to iterators together.

The zipping finishes as soon as either iterator is exhausted.

##  __ Example
    
    
    iex> first = Iter.from(1..3)
    ...> second = Iter.from([:a, :b, :c])
    ...> Iter.zip(first, second)
    ...> |> Iter.to_list()
    [{1, :a}, {2, :b}, {3, :c}]

__ Link to this function

# zip_with(iter, zipper)

[ __ View Source ](external_link)
    
    
    @spec zip_with(t(), ([element()] -> [any](external_link)())) :: t()

Zips corresponding elements from a finite collection of iterators into a new iterator, transforming them with `zip_fun` as it goes.

The first element from each of the iterators will be put into a list which is then passed to the one-arity `zip_fun` function. Then, the second elements from each of the iterators are put into a list, and so on until any of the iterators are exhausted.

##  __ Example
    
    
    iex> first = Iter.from(1..3)
    ...> second = Iter.from(4..6)
    ...> third = Iter.from(7..9)
    ...> [first, second, third]
    ...> |> Iter.from()
    ...> |> Iter.zip_with(fn [a, b, c] -> a + b + c end)
    ...> |> Iter.to_list()
    [12, 15, 18]

__ Link to this function

# zip_with(lhs, rhs, zipper)

[ __ View Source ](external_link)
    
    
    @spec zip_with(t(), t(), (element(), element() -> [any](external_link)())) :: t()

Zips corresponding elements from two iterators into a new one, transforming them with `zip_fun` as it goes.

The `zip_fun` will be called with the first elements from the iterators, then the second elements and so on.

##  __ Example
    
    
    iex> first = Iter.from(1..3)
    ...> second = Iter.from(4..6)
    ...> Iter.zip_with(first, second, &(&1 + &2))
    ...> |> Iter.to_list()
    [5, 7, 9]
