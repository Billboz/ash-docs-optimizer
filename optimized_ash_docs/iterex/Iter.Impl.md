# Iter.Impl — iterex v0.1.2

Project: iterex v0.1.2

## Table of Contents

- [ __ View Source ](external_link) Iter.Impl (iterex v0.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- element()
- iterable()
- predicate()
- __ Functions
- __using__(_)
- all?(iterable, predicate)
  - __ Examples
- any?(iterable, predicate)
  - __ Examples
- append(iterable, element)
  - __ Examples
- at(iterable, n)
  - __ Example
- chunk_by(iterable, chunker)
  - __ Example
- chunk_every(iterable, count, step, leftover)
  - __ Examples
- chunk_while(iterable, acc, chunk_fun, after_fun)
  - __ Examples
- concat(iterable)
  - __ Example
- count(iterable)
  - __ Examples
- count(iterable, fun)
  - __ Example
- cycle(iterable)
  - __ Example
- dedup(iterable)
  - __ Example
- dedup_by(iterable, fun)
  - __ Example
- drop(iterable, how_many)
  - __ Examples
- drop_every(iterable, nth)
  - __ Examples
- drop_while(iterable, predicate)
  - __ Example
- each(iterable, fun)
  - __ Example
- empty?(iterable)
  - __ Example
- filter(iterable, predicate)
  - __ Example
- find(iterable, predicate)
  - __ Example
- find_index(iterable, predicate)
  - __ Examples
- find_value(iterable, fun)
  - __ Example
- flat_map(iterable, fun)
  - __ Example
- flatten(iterable)
  - __ Example
- intersperse(iterable, separator)
  - __ Example
- map(iterable, mapper)
  - __ Example
- map_every(iterable, nth, mapper)
  - __ Examples
- max(iterable, sorter)
  - __ Examples
- max_by(iterable, mapper, sorter)
  - __ Example
- member?(iterable, element)
- min(iterable, sorter)
  - __ Examples
- min_by(iterable, mapper, sorter)
  - __ Example
- min_max(iterable)
  - __ Example
- peek(iterable)
  - __ Example
- peek(iterable, how_many)
  - __ Example
- prepend(iterable, element)
  - __ Example
- step_by(iterable, step_size)
  - __ Example
- take_chunk(iterable, how_many)
  - __ Example
- take_head(iterable, how_many)
  - __ Example
- take_tail(iterable, how_many)
  - __ Example
- take_while(iterable, predicate)
  - __ Example
- to_list(iterable)
- uniq(iterable)
  - __ Example
- with_index(iterable)
  - __ Examples
- zip(iterable, zipper)
  - __ Example

__

Search documentation of iterex __ __

__ Settings

#  [ __ View Source ](external_link) Iter.Impl (iterex v0.1.2)

The default implementations of all [`Iter.Iterable`](external_link) callbacks except `next/1`.

By adding `use Iter.Impl` to your [`Iter.Iterable`](external_link) definition all of the default functions will be automatically delegated and marked as overridable.

This allows you to implement only those callbacks which can reasonably be made faster for your particular iterable, and not have to implement all of them.

For example, here's a fictional implementation of iterable for [`List`](external_link):
    
    
    defimpl Iter.Iterable, for: List do
      use Iter.Impl
    
      def next([head | tail]), do: {:ok, head, tail}
      def next([]), do: :done
    
      def peek([]), do: :done
      def peek([head | _] = list), do: {:ok, head, list}
    
      def empty?([]), do: true
      def empty?(_), do: false
    end

Be aware that all the default implementations rely on your implementation of `next/1` which you always must provide.

#  __ Summary

##  Types

element()

iterable()

predicate()

##  Functions

__using__(_)

Generate overridable delegations to the default iterable callbacks.

all?(iterable, predicate)

Tests if every element in the iterable matches `predicate`.

any?(iterable, predicate)

Tests if any element in the iterable matches `predicate`.

append(iterable, element)

Creates an iterable that appends an element to the end of the iterable.

at(iterable, n)

Returns the element `index` items from the beginning of the iterable.

chunk_by(iterable, chunker)

Creates an iterable that chunks elements by subsequent return values of `fun`.

chunk_every(iterable, count, step, leftover)

Creates an iterable that chunks elements into `count` sized chunks of `step` spacing.

chunk_while(iterable, acc, chunk_fun, after_fun)

Creates an iterable that chunks based on a chunk function.

concat(iterable)

Takes an iterable and iterates each iterable in an iterable.

count(iterable)

Consumes the iterable, returning the number of elements within

count(iterable, fun)

Consumes the iterable, returning the number of elements for which `fun` returns a truthy value.

cycle(iterable)

Creates an iterator that cycles it's elements eternally.

dedup(iterable)

Creates an iterable that only emits elements if they are different from the previous element.

dedup_by(iterable, fun)

Creates an iterable that only emits elements if they are different from the previous element.

drop(iterable, how_many)

Creates an iterable which drops the first `how_many` elements.

drop_every(iterable, nth)

Returns a new iterable with every `nth` element in the `iterable` dropped, starting with the first element.

drop_while(iterable, predicate)

Drops elements at the beginning of `iterable` while fun returns a truthy value.

each(iterable, fun)

Consumes the iterable and applies `fun` to each element.

empty?(iterable)

Determines if the iterable is empty.

filter(iterable, predicate)

Creates an iterable which drops elements for which `predicate` doesn't return true.

find(iterable, predicate)

Searches for the first element in the iterable which matches `predicate`.

find_index(iterable, predicate)

Returns the index of the first element in the iterable which matches `predicate`.

find_value(iterable, fun)

Returns the first truthy value returned by `fun`.

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

Finds the minimal and maximal elements in the iterable.

peek(iterable)

Peeks at the first element of the iterable, without consuming it.

peek(iterable, how_many)

Peeks at the first `how_many` elements of the iterable, without consuming them.

prepend(iterable, element)

Creates a new iterable which places `element` at the beginning of the iterable.

step_by(iterable, step_size)

Creates an iterable starting at the same point, but stepping by `how_many` each iteration.

take_chunk(iterable, how_many)

Collects the first `how_many` elements into a new iterable and returns it along with the advanced initial iterable.

take_head(iterable, how_many)

Creates an iterable which takes the first `how_many` elements.

take_tail(iterable, how_many)

Creates an iterable which takes the last `how_many` elements.

take_while(iterable, predicate)

Creates an iterable which emits elements until `predicate` returns `false`.

to_list(iterable)

Convert the iterable into a list.

uniq(iterable)

Creates an iterable that only emits unique elements.

with_index(iterable)

Creates an iterable which emits the current iteration count as well as the next value.

zip(iterable, zipper)

Zips corresponding elements from a finite collection of iterables into one iterable of results as computed by `zipper`.

#  __ Types

__ Link to this type

# element()

[ __ View Source ](external_link)
    
    
    @type element() :: [Iter.Iterable.element](external_link)()

__ Link to this type

# iterable()

[ __ View Source ](external_link)
    
    
    @type iterable() :: [Iter.Iterable.t](external_link)()

__ Link to this type

# predicate()

[ __ View Source ](external_link)
    
    
    @type predicate() :: [Iter.Iterable.predicate](external_link)()

#  __ Functions

__ Link to this macro

# __using__(_)

[ __ View Source ](external_link) (macro)

Generate overridable delegations to the default iterable callbacks.

__ Link to this function

# all?(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec all?(iterable(), predicate()) :: [boolean](external_link)()

Tests if every element in the iterable matches `predicate`.

##  __ Examples
    
    
    iex> Impl.all?([2, 4, 6, 8], &(rem(&1, 2) == 0))
    true
    
    iex> Impl.all?([2, 3, 4], &(rem(&1, 2) == 0))
    false

__ Link to this function

# any?(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec any?(iterable(), predicate()) :: [boolean](external_link)()

Tests if any element in the iterable matches `predicate`.

##  __ Examples
    
    
    iex> Impl.any?([2, 4, 6], &(rem(&1, 2) == 1))
    false
    
    iex> Impl.any?([2, 3, 4], &(rem(&1, 2) == 1))
    true

__ Link to this function

# append(iterable, element)

[ __ View Source ](external_link)
    
    
    @spec append(iterable(), element()) :: iterable()

Creates an iterable that appends an element to the end of the iterable.

##  __ Examples
    
    
    iex> Impl.append(1..3, 4)
    ...> |> Impl.to_list()
    [1, 2, 3, 4]

__ Link to this function

# at(iterable, n)

[ __ View Source ](external_link)
    
    
    @spec at(iterable(), [non_neg_integer](external_link)()) :: {:ok, element(), iterable()} | :done

Returns the element `index` items from the beginning of the iterable.

##  __ Example
    
    
    iex> Impl.at([:a, :b, :c], 1)
    {:ok, :b, [:c]}

__ Link to this function

# chunk_by(iterable, chunker)

[ __ View Source ](external_link)
    
    
    @spec chunk_by(iterable(), (element() -> [any](external_link)())) :: iterable()

Creates an iterable that chunks elements by subsequent return values of `fun`.

##  __ Example
    
    
    iex> Impl.chunk_by([1, 2, 2, 3, 4, 4, 6, 7, 7], &(rem(&1, 2) == 1))
    ...> |> Impl.to_list()
    [[1], [2, 2], [3], [4, 4, 6], [7, 7]]

__ Link to this function

# chunk_every(iterable, count, step, leftover)

[ __ View Source ](external_link)
    
    
    @spec chunk_every(iterable(), [pos_integer](external_link)(), [pos_integer](external_link)(), iterable() | :discard) ::
      iterable()

Creates an iterable that chunks elements into `count` sized chunks of `step` spacing.

##  __ Examples
    
    
    iex> Impl.chunk_every([1, 2, 3, 4, 5, 6], 2, 2, []) |> Impl.to_list()
    [[1, 2], [3, 4], [5, 6]]
    
    iex> Impl.chunk_every([1, 2, 3, 4, 5, 6], 3, 2, :discard) |> Impl.to_list()
    [[1, 2, 3], [3, 4, 5]]
    
    iex> Impl.chunk_every([1, 2, 3, 4, 5, 6], 3, 2, [7]) |> Impl.to_list()
    [[1, 2, 3], [3, 4, 5], [5, 6, 7]]
    
    iex> Impl.chunk_every([1, 2, 3, 4, 5, 6], 3, 3, []) |> Impl.to_list()
    [[1, 2, 3], [4, 5, 6]]
    
    iex> cycler = Impl.cycle([0])
    iex> Impl.chunk_every([1, 2, 3, 4], 3, 3, cycler) |> Impl.to_list()
    [[1, 2, 3], [4, 0, 0]]

__ Link to this function

# chunk_while(iterable, acc, chunk_fun, after_fun)

[ __ View Source ](external_link)
    
    
    @spec chunk_while(
      iterable(),
      acc,
      (element(), acc -> {:cont, chunk, acc} | {:cont, acc} | {:halt, acc}),
      (acc -> {:cont, chunk, acc} | {:cont, acc})
    ) :: iterable()
    when acc: [any](external_link)(), chunk: [any](external_link)()

Creates an iterable that chunks based on a chunk function.

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
    iex> iter = 1..10 |> Impl.chunk_while([], chunk_fun, after_fun)
    iex> Impl.to_list(iter)
    [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]

__ Link to this function

# concat(iterable)

[ __ View Source ](external_link)
    
    
    @spec concat(iterable()) :: iterable()

Takes an iterable and iterates each iterable in an iterable.

##  __ Example
    
    
    iex> Impl.concat([1..3, 2..4, 3..5]) |> Impl.to_list()
    [1, 2, 3, 2, 3, 4, 3, 4, 5]

__ Link to this function

# count(iterable)

[ __ View Source ](external_link)
    
    
    @spec count(iterable()) :: [non_neg_integer](external_link)()

Consumes the iterable, returning the number of elements within

##  __ Examples
    
    
    iex> Impl.count([])
    0
    
    iex> Impl.count([1,2,3])
    3

__ Link to this function

# count(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec count(iterable(), (element() -> [as_boolean](external_link)([any](external_link)()))) :: [non_neg_integer](external_link)()

Consumes the iterable, returning the number of elements for which `fun` returns a truthy value.

##  __ Example
    
    
    iex> 1..5
    ...> |> Impl.count(&(rem(&1, 2) == 0))
    2

__ Link to this function

# cycle(iterable)

[ __ View Source ](external_link)
    
    
    @spec cycle(iterable()) :: iterable()

Creates an iterator that cycles it's elements eternally.

##  __ Example
    
    
    iex> Impl.cycle(1..3)
    ...> |> Impl.take_head(5)
    ...> |> Impl.to_list()
    [1, 2, 3, 1, 2]

__ Link to this function

# dedup(iterable)

[ __ View Source ](external_link)
    
    
    @spec dedup(iterable()) :: iterable()

Creates an iterable that only emits elements if they are different from the previous element.

##  __ Example
    
    
    iex> Impl.dedup([:a, :a, :b, :c, :b, :c, :c, :d])
    ...> |> Impl.to_list()
    [:a, :b, :c, :b, :c, :d]

__ Link to this function

# dedup_by(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec dedup_by(iterable(), (element() -> [any](external_link)())) :: iterable()

Creates an iterable that only emits elements if they are different from the previous element.

The function `fun` maps every element to a term which is used to determine if two elements are duplicates.

##  __ Example
    
    
    iex> [{1, :a}, {2, :b}, {2, :c}, {1, :a}]
    ...> |> Impl.dedup_by(&elem(&1, 0))
    ...> |> Impl.to_list()
    [{1, :a}, {2, :b}, {1, :a}]

__ Link to this function

# drop(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec drop(iterable(), [non_neg_integer](external_link)()) :: iterable()

Creates an iterable which drops the first `how_many` elements.

##  __ Examples
    
    
    iex> Impl.drop([1, 2, 3], 2)
    ...> |> Impl.to_list()
    [3]
    
    iex> Impl.drop([1, 2, 3], 0)
    ...> |> Impl.to_list()
    [1, 2, 3]
    
    iex> Impl.drop([1, 2, 3], -2)
    ...> |> Impl.to_list()
    [1]

__ Link to this function

# drop_every(iterable, nth)

[ __ View Source ](external_link)
    
    
    @spec drop_every(iterable(), [non_neg_integer](external_link)()) :: iterable()

Returns a new iterable with every `nth` element in the `iterable` dropped, starting with the first element.

##  __ Examples
    
    
    iex> 1..10
    ...> |> Impl.drop_every(2)
    ...> |> Impl.to_list()
    [2, 4, 6, 8, 10]
    
    iex> 1..12
    ...> |> Impl.drop_every(3)
    ...> |> Impl.to_list()
    [2, 3, 5, 6, 8, 9, 11, 12]
    
    iex> 1..10
    ...> |> Impl.drop_every(0)
    ...> |> Impl.to_list()
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    iex> [1, 2, 3]
    ...> |> Impl.drop_every(1)
    ...> |> Impl.to_list()
    []

__ Link to this function

# drop_while(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec drop_while(iterable(), predicate()) :: iterable()

Drops elements at the beginning of `iterable` while fun returns a truthy value.

##  __ Example
    
    
    iex> [1, 2, 3, 2, 1]
    ...> |> Impl.drop_while(&(&1 < 3))
    ...> |> Impl.to_list()
    [3, 2, 1]

__ Link to this function

# each(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec each(iterable(), (element() -> [any](external_link)())) :: :done

Consumes the iterable and applies `fun` to each element.

Primarily used for side-effects.

Always returns `:done`.

##  __ Example
    
    
    Impl.each([1, 2, 3], &IO.puts("#{&1}"))
    "1"
    "2"
    "3"
    #=> :done

__ Link to this function

# empty?(iterable)

[ __ View Source ](external_link)
    
    
    @spec empty?(iterable()) :: [boolean](external_link)()

Determines if the iterable is empty.

##  __ Example
    
    
    iex> Impl.empty?([])
    true
    
    iex> Impl.empty?(1..20)
    false

__ Link to this function

# filter(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec filter(iterable(), predicate()) :: iterable()

Creates an iterable which drops elements for which `predicate` doesn't return true.

##  __ Example
    
    
    iex> Impl.filter([1, 2, 3, 4], &(rem(&1, 2) == 1))
    ...> |> Impl.to_list()
    [1, 3]

__ Link to this function

# find(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec find(iterable(), predicate()) :: {:ok, element()} | :done

Searches for the first element in the iterable which matches `predicate`.

##  __ Example
    
    
    iex> Impl.find([1, 2, 3, 4], &(&1 > 2))
    {:ok, 3, [4]}
    
    iex> Impl.find([1, 2, 3, 4], &(&1 > 4))
    :done

__ Link to this function

# find_index(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec find_index(iterable(), predicate()) ::
      {:ok, [non_neg_integer](external_link)(), iterable()} | :done

Returns the index of the first element in the iterable which matches `predicate`.

##  __ Examples
    
    
    iex> Impl.find_index([1, 2, 3, 4], &(&1 > 2))
    {:ok, 2, [4]}
    
    iex> Impl.find_index([1, 2, 3, 4], &(&1 > 4))
    :done

__ Link to this function

# find_value(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec find_value(iterable(), (element() -> result)) ::
      {:ok, result, iterable()} | :done
    when result: [any](external_link)()

Returns the first truthy value returned by `fun`.

##  __ Example
    
    
    iex> Impl.find_value([1, 2, 3, 4], fn
    ...>   i when i > 2 -> i * 2
    ...>   _ -> nil
    ...> end)
    {:ok, 6, [4]}

__ Link to this function

# flat_map(iterable, fun)

[ __ View Source ](external_link)
    
    
    @spec flat_map(iterable(), (element() -> iterable() | element())) :: iterable()

Creates an iterable which works like `map/2` but flattens nested iterables.

##  __ Example
    
    
    iex> [:a, :b, :c]
    ...> |> Impl.flat_map(&[&1, &1])
    ...> |> Impl.to_list()
    [:a, :a, :b, :b, :c, :c]

__ Link to this function

# flatten(iterable)

[ __ View Source ](external_link)
    
    
    @spec flatten(iterable()) :: iterable()

Creates an iterable which flattens nested iterables.

##  __ Example
    
    
    iex> Impl.flatten([[1, 2], [3, [4, [5, 6]]]])
    ...> |> Impl.to_list()
    [1, 2, 3, 4, 5, 6]

__ Link to this function

# intersperse(iterable, separator)

[ __ View Source ](external_link)
    
    
    @spec intersperse(iterable(), [any](external_link)()) :: iterable()

Creates a new iterable which places `separator` between adjacent items of the original iterable.

##  __ Example
    
    
    iex> Impl.intersperse([:a, :b, :c], :wat)
    ...> |> Impl.to_list()
    [:a, :wat, :b, :wat, :c]

__ Link to this function

# map(iterable, mapper)

[ __ View Source ](external_link)
    
    
    @spec map(iterable(), (element() -> new_element)) :: iterable()
    when new_element: [any](external_link)()

Creates a new iterable which applies `mapper` to each element and using it's result as the new element value.

##  __ Example
    
    
    iex> Impl.map([1, 2, 3], &(&1 * &1))
    ...> |> Impl.to_list()
    [1, 4, 9]

__ Link to this function

# map_every(iterable, nth, mapper)

[ __ View Source ](external_link)
    
    
    @spec map_every(iterable(), [non_neg_integer](external_link)(), (element() -> new_element)) ::
      iterable()
    when new_element: [any](external_link)()

Creates a new iterable which applies `mapper` on every `nth` element of the iterable, starting with the first element.

The first element is always mapped unless `nth` is `0`.

##  __ Examples
    
    
    iex> Impl.map_every(1..10, 2, fn x -> x + 1000 end)
    ...> |> Impl.to_list()
    [1001, 2, 1003, 4, 1005, 6, 1007, 8, 1009, 10]
    
    iex> Impl.map_every(1..10, 3, fn x -> x + 1000 end)
    ...> |> Impl.to_list()
    [1001, 2, 3, 1004, 5, 6, 1007, 8, 9, 1010]
    
    iex> Impl.map_every(1..5, 0, fn x -> x + 1000 end)
    ...> |> Impl.to_list()
    [1, 2, 3, 4, 5]
    
    iex> Impl.map_every([1, 2, 3], 1, fn x -> x + 1000 end)
    ...> |> Impl.to_list()
    [1001, 1002, 1003]

__ Link to this function

# max(iterable, sorter)

[ __ View Source ](external_link)
    
    
    @spec max(iterable(), (element(), element() -> [boolean](external_link)())) :: {:ok, element()} | :done

Returns the maximal element in the `iterable` according to Erlang's term ordering.

##  __ Examples
    
    
    iex> Impl.max([1, 3, 2], &>=/2)
    {:ok, 3}
    
    iex> Impl.max([], &>=/2)
    :done

__ Link to this function

# max_by(iterable, mapper, sorter)

[ __ View Source ](external_link)
    
    
    @spec max_by(
      iterable(),
      (element() -> new_element),
      (new_element, new_element -> [boolean](external_link)())
    ) ::
      {:ok, element()} | :done
    when new_element: element()

Returns the maximal element in the `iterable` as calculated by `mapper`.

##  __ Example
    
    
    iex> Impl.max_by(["a", "aa", "aaa"], &String.length/1, &>=/2)
    {:ok, "aaa"}
    
    iex> Impl.max_by([], &String.length/1, &>=/2)
    :done

__ Link to this function

# member?(iterable, element)

[ __ View Source ](external_link)
    
    
    @spec member?(iterable(), element()) :: [boolean](external_link)()

Is the element a member of the iterable?

__ Link to this function

# min(iterable, sorter)

[ __ View Source ](external_link)
    
    
    @spec min(iterable(), (element(), element() -> [boolean](external_link)())) :: {:ok, element()} | :done

Returns the minimal element in the `iterable` according to Erlang's term ordering.

##  __ Examples
    
    
    iex> Impl.min([1, 3, 2], &<=/2)
    {:ok, 1}
    
    iex> Impl.min([], &<=/2)
    :done

__ Link to this function

# min_by(iterable, mapper, sorter)

[ __ View Source ](external_link)
    
    
    @spec min_by(
      iterable(),
      (element() -> new_element),
      (new_element, new_element -> [boolean](external_link)())
    ) ::
      {:ok, element()} | :done
    when new_element: element()

Returns the minimal element in the `iterable` as calculated by `mapper`.

##  __ Example
    
    
    iex> Impl.min_by(["a", "aa", "aaa"], &String.length/1, &<=/2)
    {:ok, "a"}
    
    iex> Impl.min_by([], &String.length/1, &<=/2)
    :done

__ Link to this function

# min_max(iterable)

[ __ View Source ](external_link)
    
    
    @spec min_max(iterable()) :: {:ok, element(), element()} | :done

Finds the minimal and maximal elements in the iterable.

##  __ Example
    
    
    iex> Impl.min_max(1..12)
    {:ok, 1, 12}
    
    iex> Impl.min_max([])
    :done

__ Link to this function

# peek(iterable)

[ __ View Source ](external_link)
    
    
    @spec peek(iterable()) :: {:ok, element(), iterable()} | :done

Peeks at the first element of the iterable, without consuming it.

> #### Warning
> 
> Many iterables cannot be peeked, so this function simulates peeking by consuming an element from the iterable and returning a new iterable which pushes that element back on to the front.

##  __ Example
    
    
    iex> {:ok, :a, iterable} = Impl.peek([:a, :b, :c])
    ...> Impl.to_list(iterable)
    [:a, :b, :c]

__ Link to this function

# peek(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec peek(iterable(), how_many :: [pos_integer](external_link)()) ::
      {:ok, [element()], [non_neg_integer](external_link)(), iterable()} | :done

Peeks at the first `how_many` elements of the iterable, without consuming them.

> #### Warning
> 
> Many iterables cannot be peeked, so this function simulates peeking by consuming elements from the iterable and returning a new iterable which pushes those elements back on to the front.

##  __ Example
    
    
    iex> {:ok, [:a, :b, :c], 3, iterable} = Impl.peek([:a, :b, :c, :d], 3)
    ...> Impl.to_list(iterable)
    [:a, :b, :c, :d]

__ Link to this function

# prepend(iterable, element)

[ __ View Source ](external_link)
    
    
    @spec prepend(iterable(), element()) :: iterable()

Creates a new iterable which places `element` at the beginning of the iterable.

##  __ Example
    
    
    iex> 1..5
    ...> |> Impl.prepend(6)
    ...> |> Impl.to_list()
    [6, 1, 2, 3, 4, 5]

__ Link to this function

# step_by(iterable, step_size)

[ __ View Source ](external_link)
    
    
    @spec step_by(iterable(), [non_neg_integer](external_link)()) :: iterable()

Creates an iterable starting at the same point, but stepping by `how_many` each iteration.

##  __ Example
    
    
    iex> [0, 1, 2, 3, 4, 5]
    ...> |> Impl.step_by(2)
    ...> |> Impl.to_list()
    [0, 2, 4]

__ Link to this function

# take_chunk(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec take_chunk(iterable(), [pos_integer](external_link)()) ::
      {:ok, iterable(), iterable()} | {:done, iterable()}

Collects the first `how_many` elements into a new iterable and returns it along with the advanced initial iterable.

This is very much like `take/2` except that it returns the remaining iterable so that it can be called repeatedly.

##  __ Example
    
    
    iex> iter = 1..9
    ...> {:ok, [1, 2, 3], iter} = Impl.take_chunk(iter, 3)
    ...> {:ok, [4, 5, 6], iter} = Impl.take_chunk(iter, 3)
    ...> Impl.to_list(iter)
    [7, 8, 9]

__ Link to this function

# take_head(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec take_head(iterable(), [non_neg_integer](external_link)()) :: iterable()

Creates an iterable which takes the first `how_many` elements.

##  __ Example
    
    
    iex> Impl.take_head(1..5, 0)
    ...> |> Impl.to_list()
    []
    
    iex> Impl.take_head(1..5, 3)
    ...> |> Impl.to_list()
    [1, 2, 3]

__ Link to this function

# take_tail(iterable, how_many)

[ __ View Source ](external_link)
    
    
    @spec take_tail(iterable(), [non_neg_integer](external_link)()) :: iterable()

Creates an iterable which takes the last `how_many` elements.

##  __ Example
    
    
    iex> Impl.take_tail(1..5, 0)
    ...> |> Impl.to_list()
    []
    
    iex> Impl.take_tail(1..5, 3)
    ...> |> Impl.to_list()
    [3, 4, 5]

__ Link to this function

# take_while(iterable, predicate)

[ __ View Source ](external_link)
    
    
    @spec take_while(iterable(), predicate()) :: iterable()

Creates an iterable which emits elements until `predicate` returns `false`.

##  __ Example
    
    
    iex> [1, 2, 3]
    ...> |> Impl.take_while(&(&1 < 3))
    ...> |> Impl.to_list()
    [1, 2]

__ Link to this function

# to_list(iterable)

[ __ View Source ](external_link)
    
    
    @spec to_list(iterable()) :: [element()]

Convert the iterable into a list.

__ Link to this function

# uniq(iterable)

[ __ View Source ](external_link)
    
    
    @spec uniq(iterable()) :: iterable()

Creates an iterable that only emits unique elements.

##  __ Example
    
    
    iex> Impl.uniq([:a, :a, :b, :c, :b, :c, :c, :d])
    ...> |> Impl.to_list()
    [:a, :b, :c, :d]

__ Link to this function

# with_index(iterable)

[ __ View Source ](external_link)
    
    
    @spec with_index(iterable()) :: iterable()

Creates an iterable which emits the current iteration count as well as the next value.

This is analogous to [`Enum.with_index/1`](external_link) except that counting starts from the beginning of the iterable, meaning you can convert an iterable into an enumerator after consuming some if it.

##  __ Examples

iex> Impl.with_index([:a, :b, :c]) ...> |> Impl.to_list() [a: 0, b: 1, c: 2]

iex> [:a, :b, :c, :d] ...> |> Impl.drop(2) ...> |> Impl.with_index() ...> |> Impl.to_list() [c: 0, d: 1]

__ Link to this function

# zip(iterable, zipper)

[ __ View Source ](external_link)
    
    
    @spec zip(iterable(), ([element()] -> [any](external_link)())) :: iterable()

Zips corresponding elements from a finite collection of iterables into one iterable of results as computed by `zipper`.

##  __ Example

iex> Impl.zip([1..3, 4..6, 7..9], &List.to_tuple/1) ...> |> Impl.to_list() [{1, 4, 7}, {2, 5, 8}, {3, 6, 9}]
