# Ash.Query.Operator — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Operator behaviour (ash v3.4.8)
- __ Summary
  - Callbacks
  - Functions
- __ Callbacks
- can_return_nil?(func)
- evaluate(term)
- evaluate_nil_inputs?()
- new(term, term)
- predicate?()
- returns()
- to_string(struct, t)
- types()
- __ Functions
- evaluate(op)
- new(mod, left, right)
- operator_overloads(operator)
- operator_symbols()
- operators()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Operator behaviour (ash v3.4.8)

An operator is a predicate with a `left` and a `right`

For more information on being a predicate, see [`Ash.Filter.Predicate`](external_link). Most of the complexities are there. An operator must meet both behaviours.

#  __ Summary

##  Callbacks

can_return_nil?(func)

Whether or not the operator can evaluate to nil.

evaluate(term)

Evaluates the operator in Elixir

evaluate_nil_inputs?()

If `true`, will be allowed to evaluate `nil` inputs.

new(term, term)

Create a new predicate. There are various return types possible

predicate?()

returns()

The types that the expression can return. Should be one entry in the list for each entry in `types`.

to_string(struct, t)

The implementation of the inspect protocol.

types()

The types accepted by the operator. Defaults to `[:same, :any]`, which is any values of the same type.

##  Functions

evaluate(op)

Evaluate the operator with provided inputs

new(mod, left, right)

Create a new operator. Pass the module and the left and right values

operator_overloads(operator)

Get type overloads for the given operator

operator_symbols()

operators()

#  __ Callbacks

__ Link to this callback

# can_return_nil?(func)

[ __ View Source ](external_link)
    
    
    @callback can_return_nil?(func :: [map](external_link)()) :: [boolean](external_link)()

Whether or not the operator can evaluate to nil.

__ Link to this callback

# evaluate(term)

[ __ View Source ](external_link)
    
    
    @callback evaluate([term](external_link)()) :: [term](external_link)()

Evaluates the operator in Elixir

__ Link to this callback

# evaluate_nil_inputs?()

[ __ View Source ](external_link)
    
    
    @callback evaluate_nil_inputs?() :: [boolean](external_link)()

If `true`, will be allowed to evaluate `nil` inputs.

If `false` (the default), any `nil` inputs will cause a `nil` return.

__ Link to this callback

# new(term, term)

[ __ View Source ](external_link)
    
    
    @callback new([term](external_link)(), [term](external_link)()) ::
      {:ok, [term](external_link)(), [term](external_link)()} | {:ok, [term](external_link)()} | {:known, [boolean](external_link)()} | {:error, [term](external_link)()}

Create a new predicate. There are various return types possible:

  * `{:ok, left, right}` \- Return the left/right values of the operator
  * `{:ok, operator}` \- Return the operator itself, this or the one above are acceptable
  * `{:known, boolean}` \- If the value is already known, e.g `1 == 1`
  * `{:error, error}` \- If there was an error creating the operator



__ Link to this callback

# predicate?()

[ __ View Source ](external_link)
    
    
    @callback predicate?() :: [boolean](external_link)()

__ Link to this callback

# returns()

[ __ View Source ](external_link)
    
    
    @callback returns() :: [
      :any | :same | [Ash.Type.t](external_link)() | {[Ash.Type.t](external_link)(), constraints :: [Keyword.t](external_link)()}
    ]

The types that the expression can return. Should be one entry in the list for each entry in `types`.

__ Link to this callback

# to_string(struct, t)

[ __ View Source ](external_link)
    
    
    @callback to_string(
      [struct](external_link)(),
      [Inspect.Opts.t](external_link)()
    ) :: [term](external_link)()

The implementation of the inspect protocol.

If not defined, it will be inferred

__ Link to this callback

# types()

[ __ View Source ](external_link)
    
    
    @callback types() :: [
      :any | :same | [[Ash.Type.t](external_link)() | {[Ash.Type.t](external_link)(), constraints :: [Keyword.t](external_link)()}]
    ]

The types accepted by the operator. Defaults to `[:same, :any]`, which is any values of the same type.

#  __ Functions

__ Link to this function

# evaluate(op)

[ __ View Source ](external_link)

Evaluate the operator with provided inputs

__ Link to this function

# new(mod, left, right)

[ __ View Source ](external_link)

Create a new operator. Pass the module and the left and right values

__ Link to this function

# operator_overloads(operator)

[ __ View Source ](external_link)

Get type overloads for the given operator

__ Link to this function

# operator_symbols()

[ __ View Source ](external_link)

__ Link to this function

# operators()

[ __ View Source ](external_link)
