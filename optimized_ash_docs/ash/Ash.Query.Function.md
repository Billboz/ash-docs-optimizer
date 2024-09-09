# Ash.Query.Function — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Function behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- arg()
- __ Callbacks
- args()
- can_return_nil?(func)
- eager_evaluate?()
- evaluate(func)
- evaluate_nil_inputs?()
- name()
- new(list)
- partial_evaluate(func)
- predicate?()
- private?()
- returns()
- __ Functions
- evaluate(func)
- new(mod, args)
- ordinal(num)
- try_cast_arguments(configured_args, args)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Function behaviour (ash v3.4.8)

A function is a predicate with an arguments list.

For more information on being a predicate, see [`Ash.Filter.Predicate`](external_link). Most of the complexities are there. A function must meet both behaviours.

#  __ Summary

##  Types

arg()

##  Callbacks

args()

The number and types of arguments supported.

can_return_nil?(func)

Whether or not the function return nil.

eager_evaluate?()

Whether or not the function can be evaluated eagerly. For example, `now()` cannot be.

evaluate(func)

Evaluate a function when all arguments are known valid values

evaluate_nil_inputs?()

If `true`, will be allowed to evaluate `nil` inputs.

name()

The name of the function

new(list)

Instantiate a new function with the provided arguments

partial_evaluate(func)

Evaluate a function when some or no arguments are known valid values

predicate?()

Whether or not the function is a predicate (takes a reference as the first argument, a value as the second, and returns a boolean)

private?()

Whether or not the function should be usable when parsing input.

returns()

The return type for each corresponding set of args.

##  Functions

evaluate(func)

Evaluate the operator with provided inputs

new(mod, args)

ordinal(num)

Attaches the appropriate suffix to refer to an ordinal number, e.g 1 -> "1st"

try_cast_arguments(configured_args, args)

#  __ Types

__ Link to this type

# arg()

[ __ View Source ](external_link)
    
    
    @type arg() :: [any](external_link)()

#  __ Callbacks

__ Link to this callback

# args()

[ __ View Source ](external_link)
    
    
    @callback args() :: [arg()] | :var_args

The number and types of arguments supported.

__ Link to this callback

# can_return_nil?(func)

[ __ View Source ](external_link)
    
    
    @callback can_return_nil?(func :: [map](external_link)()) :: [boolean](external_link)()

Whether or not the function return nil.

__ Link to this callback

# eager_evaluate?()

[ __ View Source ](external_link)
    
    
    @callback eager_evaluate?() :: [boolean](external_link)()

Whether or not the function can be evaluated eagerly. For example, `now()` cannot be.

__ Link to this callback

# evaluate(func)

[ __ View Source ](external_link)
    
    
    @callback evaluate(func :: [map](external_link)()) :: :unknown | {:known, [term](external_link)()} | {:error, [term](external_link)()}

Evaluate a function when all arguments are known valid values

__ Link to this callback

# evaluate_nil_inputs?()

[ __ View Source ](external_link)
    
    
    @callback evaluate_nil_inputs?() :: [boolean](external_link)()

If `true`, will be allowed to evaluate `nil` inputs.

If `false` (the default), any `nil` inputs will cause a `nil` return.

__ Link to this callback

# name()

[ __ View Source ](external_link)
    
    
    @callback name() :: [atom](external_link)()

The name of the function

__ Link to this callback

# new(list)

[ __ View Source ](external_link)
    
    
    @callback new([[term](external_link)()]) :: {:ok, [term](external_link)()} | {:error, [String.t](external_link)() | [Exception.t](external_link)()}

Instantiate a new function with the provided arguments

__ Link to this callback

# partial_evaluate(func)

[ __ View Source ](external_link) (optional)
    
    
    @callback partial_evaluate(func) :: {:ok, func} | {:error, [term](external_link)()} when func: [map](external_link)()

Evaluate a function when some or no arguments are known valid values

__ Link to this callback

# predicate?()

[ __ View Source ](external_link)
    
    
    @callback predicate?() :: [boolean](external_link)()

Whether or not the function is a predicate (takes a reference as the first argument, a value as the second, and returns a boolean)

__ Link to this callback

# private?()

[ __ View Source ](external_link)
    
    
    @callback private?() :: [boolean](external_link)()

Whether or not the function should be usable when parsing input.

__ Link to this callback

# returns()

[ __ View Source ](external_link)
    
    
    @callback returns() ::
      [[Ash.Type.t](external_link)() | {[Ash.Type.t](external_link)(), constraints :: [Keyword.t](external_link)()}]
      | [Ash.Type.t](external_link)()
      | {[Ash.Type.t](external_link)(), constraints :: [Keyword.t](external_link)()}
      | :unknown

The return type for each corresponding set of args.

#  __ Functions

__ Link to this function

# evaluate(func)

[ __ View Source ](external_link)

Evaluate the operator with provided inputs

__ Link to this function

# new(mod, args)

[ __ View Source ](external_link)

__ Link to this function

# ordinal(num)

[ __ View Source ](external_link)

Attaches the appropriate suffix to refer to an ordinal number, e.g 1 -> "1st"

__ Link to this function

# try_cast_arguments(configured_args, args)

[ __ View Source ](external_link)
