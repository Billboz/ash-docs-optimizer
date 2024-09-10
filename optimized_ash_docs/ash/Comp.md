# Comp — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Comp (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- left()
- right()
- __ Functions
- compare(left, right)
  - __ Examples
- defcomparable(arg1, arg2, list)
  - __ Examples
- eq()
- equal?(left, right)
  - __ Examples
- greater_or_equal?(left, right)
  - __ Examples
- greater_than?(left, right)
  - __ Examples
- gt()
- less_or_equal?(left, right)
  - __ Examples
- less_than?(left, right)
  - __ Examples
- lt()
- max(left, right)
  - __ Examples
- min(left, right)
  - __ Examples
- not_equal?(left, right)
  - __ Examples
- type_of(v)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Comp (ash v3.4.8)

Provides utilities to implement and work with [`Comparable`](external_link) types

#  __ Summary

##  Types

left()

right()

##  Functions

compare(left, right)

Compare left and right term

defcomparable(arg1, arg2, list)

Helper to define ordering relation for pair of types, accepts two `term :: type` pairs and block of code where relation is described.

eq()

equal?(left, right)

Is left term equal to right term?

greater_or_equal?(left, right)

Is left term greater or equal to right term?

greater_than?(left, right)

Is left term greater than right term?

gt()

less_or_equal?(left, right)

Is left term less or equal to right term?

less_than?(left, right)

Is left term less than right term?

lt()

max(left, right)

Returns the biggest of the two given terms, if terms are equal - then the first one is returned

min(left, right)

Returns the smallest of the two given terms, if terms are equal - then the first one is returned

not_equal?(left, right)

Is left term not equal to right term?

type_of(v)

#  __ Types

__ Link to this type

# left()

[ __ View Source ](external_link)
    
    
    @type left() :: [term](external_link)()

__ Link to this type

# right()

[ __ View Source ](external_link)
    
    
    @type right() :: [term](external_link)()

#  __ Functions

__ Link to this function

# compare(left, right)

[ __ View Source ](external_link)
    
    
    @spec compare(left(), right()) :: [Comparable.ord](external_link)()

Compare left and right term

##  __ Examples
    
    
    iex> Comp.compare(1, 2)
    :lt
    iex> Comp.compare(2, 1)
    :gt
    iex> Comp.compare(1, 1)
    :eq

__ Link to this macro

# defcomparable(arg1, arg2, list)

[ __ View Source ](external_link) (macro)

Helper to define ordering relation for pair of types, accepts two `term :: type` pairs and block of code where relation is described.

##  __ Examples
    
    
    iex> quote do
    ...>   use Comp
    ...>   defmodule Foo do
    ...>     defstruct [:value, :meta]
    ...>   end
    ...>   defmodule Bar do
    ...>     defstruct [:value, :meta]
    ...>   end
    ...>   defcomparable %Foo{value: left} :: Foo, %Foo{value: right} :: Foo do
    ...>     Comp.compare(left, right)
    ...>   end
    ...>   defcomparable %Foo{value: left} :: Foo, %Bar{value: right} :: Bar do
    ...>     Comp.compare(left, right)
    ...>   end
    ...>   defcomparable %Foo{value: left} :: Foo, right :: Integer do
    ...>     Comp.compare(left, right)
    ...>   end
    ...> end
    ...> |> Code.compile_quoted
    iex> quote do
    ...>   x = %Foo{value: 1, meta: 1}
    ...>   y = %Foo{value: 1, meta: 2}
    ...>   Comp.equal?(x, y) && Comp.equal?(y, x)
    ...> end
    ...> |> Code.eval_quoted
    ...> |> elem(0)
    true
    iex> quote do
    ...>   x = %Foo{value: 1, meta: 1}
    ...>   y = %Bar{value: 1, meta: 2}
    ...>   Comp.equal?(x, y) && Comp.equal?(y, x)
    ...> end
    ...> |> Code.eval_quoted
    ...> |> elem(0)
    true
    iex> quote do
    ...>   x = %Foo{value: 1, meta: 1}
    ...>   y = 1
    ...>   Comp.equal?(x, y) && Comp.equal?(y, x)
    ...> end
    ...> |> Code.eval_quoted
    ...> |> elem(0)
    true

__ Link to this macro

# eq()

[ __ View Source ](external_link) (macro)

__ Link to this function

# equal?(left, right)

[ __ View Source ](external_link)
    
    
    @spec equal?(left(), right()) :: [boolean](external_link)()

Is left term equal to right term?

##  __ Examples
    
    
    iex> Comp.equal?(1, 1)
    true
    iex> Comp.equal?(1, :hello)
    false

__ Link to this function

# greater_or_equal?(left, right)

[ __ View Source ](external_link)
    
    
    @spec greater_or_equal?(left(), right()) :: [boolean](external_link)()

Is left term greater or equal to right term?

##  __ Examples
    
    
    iex> Comp.greater_or_equal?(1, 1)
    true
    iex> Comp.greater_or_equal?(1, 2)
    false
    iex> Comp.greater_or_equal?(2, 1)
    true

__ Link to this function

# greater_than?(left, right)

[ __ View Source ](external_link)
    
    
    @spec greater_than?(left(), right()) :: [boolean](external_link)()

Is left term greater than right term?

##  __ Examples
    
    
    iex> Comp.greater_than?(1, 1)
    false
    iex> Comp.greater_than?(1, 2)
    false
    iex> Comp.greater_than?(2, 1)
    true

__ Link to this macro

# gt()

[ __ View Source ](external_link) (macro)

__ Link to this function

# less_or_equal?(left, right)

[ __ View Source ](external_link)
    
    
    @spec less_or_equal?(left(), right()) :: [boolean](external_link)()

Is left term less or equal to right term?

##  __ Examples
    
    
    iex> Comp.less_or_equal?(1, 1)
    true
    iex> Comp.less_or_equal?(1, 2)
    true
    iex> Comp.less_or_equal?(2, 1)
    false

__ Link to this function

# less_than?(left, right)

[ __ View Source ](external_link)
    
    
    @spec less_than?(left(), right()) :: [boolean](external_link)()

Is left term less than right term?

##  __ Examples
    
    
    iex> Comp.less_than?(1, 1)
    false
    iex> Comp.less_than?(1, 2)
    true
    iex> Comp.less_than?(2, 1)
    false

__ Link to this macro

# lt()

[ __ View Source ](external_link) (macro)

__ Link to this function

# max(left, right)

[ __ View Source ](external_link)
    
    
    @spec max(left(), right()) :: left() | right()

Returns the biggest of the two given terms, if terms are equal - then the first one is returned

##  __ Examples
    
    
    iex> Comp.max(1, 1)
    1
    iex> Comp.max(1, 2)
    2
    iex> Comp.max(2, 1)
    2

__ Link to this function

# min(left, right)

[ __ View Source ](external_link)
    
    
    @spec min(left(), right()) :: left() | right()

Returns the smallest of the two given terms, if terms are equal - then the first one is returned

##  __ Examples
    
    
    iex> Comp.min(1, 1)
    1
    iex> Comp.min(1, 2)
    1
    iex> Comp.min(2, 1)
    1

__ Link to this function

# not_equal?(left, right)

[ __ View Source ](external_link)
    
    
    @spec not_equal?(left(), right()) :: [boolean](external_link)()

Is left term not equal to right term?

##  __ Examples
    
    
    iex> Comp.not_equal?(1, 1)
    false
    iex> Comp.not_equal?(1, :hello)
    true

__ Link to this function

# type_of(v)

[ __ View Source ](external_link)
