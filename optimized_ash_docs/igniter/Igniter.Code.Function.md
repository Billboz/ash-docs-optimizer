# Igniter.Code.Function — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Code.Function (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- append_argument(zipper, value)
- argument_equals?(zipper, index, term)
- argument_matches_pattern?(zipper, index, pattern)
- argument_matches_predicate?(zipper, index, func)
- function_call?(zipper)
- function_call?(zipper, name, arity \\\ :any)
- move_to_def(zipper, fun, arity)
- move_to_defp(zipper, fun, arity)
- move_to_function_call(zipper, name, arity, predicate \\\ fn _ -> true end)
- move_to_function_call_in_current_scope(zipper, name, arity, predicate \\\ fn _ -> true end)
- move_to_nth_argument(zipper, index)
- update_nth_argument(zipper, index, func)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Code.Function (igniter v0.3.29)

Utilities for working with functions.

#  __ Summary

##  Functions

append_argument(zipper, value)

Appends an argument to a function call, leaving the zipper at the function call's node.

argument_equals?(zipper, index, term)

Checks if the provided function call (in a Zipper) has an argument that equals `term` at `index`.

argument_matches_pattern?(zipper, index, pattern)

Returns `true` if the argument at the provided index exists and matches the provided pattern

argument_matches_predicate?(zipper, index, func)

Returns true if the argument at the given index matches the provided predicate

function_call?(zipper)

Returns `true` if the node is a function call

function_call?(zipper, name, arity \\\ :any)

Returns `true` if the node is a function call of the given name

move_to_def(zipper, fun, arity)

move_to_defp(zipper, fun, arity)

move_to_function_call(zipper, name, arity, predicate \\\ fn _ -> true end)

Moves to a function call by the given name and arity, matching the given predicate, in the current or lower scope

move_to_function_call_in_current_scope(zipper, name, arity, predicate \\\ fn _ -> true end)

Moves to a function call by the given name and arity, matching the given predicate, in the current scope

move_to_nth_argument(zipper, index)

Moves to the `nth` argument of a function call.

update_nth_argument(zipper, index, func)

Updates the `nth` argument of a function call, leaving the zipper at the function call's node.

#  __ Functions

__ Link to this function

# append_argument(zipper, value)

[ __ View Source ](external_link)
    
    
    @spec append_argument([Sourceror.Zipper.t](external_link)(), [any](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Appends an argument to a function call, leaving the zipper at the function call's node.

__ Link to this function

# argument_equals?(zipper, index, term)

[ __ View Source ](external_link)
    
    
    @spec argument_equals?([Sourceror.Zipper.t](external_link)(), [integer](external_link)(), [any](external_link)()) :: [boolean](external_link)()

Checks if the provided function call (in a Zipper) has an argument that equals `term` at `index`.

__ Link to this macro

# argument_matches_pattern?(zipper, index, pattern)

[ __ View Source ](external_link) (macro)

Returns `true` if the argument at the provided index exists and matches the provided pattern

Note: to check for argument equality, use `argument_equals?/3` instead.

__ Link to this function

# argument_matches_predicate?(zipper, index, func)

[ __ View Source ](external_link)
    
    
    @spec argument_matches_predicate?(
      [Sourceror.Zipper.t](external_link)(),
      [non_neg_integer](external_link)(),
      ([Sourceror.Zipper.t](external_link)() ->
         [boolean](external_link)())
    ) :: [boolean](external_link)()

Returns true if the argument at the given index matches the provided predicate

__ Link to this function

# function_call?(zipper)

[ __ View Source ](external_link)
    
    
    @spec function_call?([Sourceror.Zipper.t](external_link)()) :: [boolean](external_link)()

Returns `true` if the node is a function call

__ Link to this function

# function_call?(zipper, name, arity \\\ :any)

[ __ View Source ](external_link)
    
    
    @spec function_call?(
      [Sourceror.Zipper.t](external_link)(),
      [atom](external_link)() | {[module](external_link)(), [atom](external_link)()},
      arity :: [integer](external_link)() | :any
    ) ::
      [boolean](external_link)()

Returns `true` if the node is a function call of the given name

If an `atom` is provided, it only matches functions in the form of `function(name)`.

If an `{module, atom}` is provided, it matches functions called on the given module, taking into account any imports or aliases.

__ Link to this function

# move_to_def(zipper, fun, arity)

[ __ View Source ](external_link)
    
    
    @spec move_to_def(
      [Sourceror.Zipper.t](external_link)(),
      fun :: [atom](external_link)(),
      arity :: [integer](external_link)() | [[integer](external_link)()]
    ) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

__ Link to this function

# move_to_defp(zipper, fun, arity)

[ __ View Source ](external_link)
    
    
    @spec move_to_defp(
      [Sourceror.Zipper.t](external_link)(),
      fun :: [atom](external_link)(),
      arity :: [integer](external_link)() | [[integer](external_link)()]
    ) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

__ Link to this function

# move_to_function_call(zipper, name, arity, predicate \\\ fn _ -> true end)

[ __ View Source ](external_link)

Moves to a function call by the given name and arity, matching the given predicate, in the current or lower scope

__ Link to this function

# move_to_function_call_in_current_scope(zipper, name, arity, predicate \\\ fn _ -> true end)

[ __ View Source ](external_link)

Moves to a function call by the given name and arity, matching the given predicate, in the current scope

__ Link to this function

# move_to_nth_argument(zipper, index)

[ __ View Source ](external_link)
    
    
    @spec move_to_nth_argument(
      [Sourceror.Zipper.t](external_link)(),
      [non_neg_integer](external_link)()
    ) :: {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves to the `nth` argument of a function call.

__ Link to this function

# update_nth_argument(zipper, index, func)

[ __ View Source ](external_link)
    
    
    @spec update_nth_argument(
      [Sourceror.Zipper.t](external_link)(),
      [non_neg_integer](external_link)(),
      ([Sourceror.Zipper.t](external_link)() -> {:ok, [Sourceror.Zipper.t](external_link)()} | :error)
    ) :: {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Updates the `nth` argument of a function call, leaving the zipper at the function call's node.
