# Igniter.Code.Common — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Code.Common (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- add_code(zipper, new_code, placement \\\ :after)
  - __ Example:
- current_env(zipper)
- expand_alias(zipper)
- expand_aliases(zipper)
- expand_literal(zipper)
- extendable_block?(arg1)
- maybe_move_to_block(zipper)
- maybe_move_to_single_child_block(zipper)
- move_next(zipper, pred)
- move_right(zipper, pred)
- move_to(zipper, pred)
- move_to_cursor(zipper, pattern)
- move_to_cursor_match_in_scope(zipper, patterns)
- move_to_do_block(zipper)
- move_to_pattern(zipper, pattern)
- move_to_zipper(zipper, pred)
- node_matches_pattern?(zipper, pattern)
  - __ Examples:
- nodes_equal?(left, right)
- nth_right(zipper, n)
- replace_code(zipper, code)
- rightmost(zipper)
- update_all_matches(zipper, pred, fun)
- use_aliases(new_code, current_code)
- within(top_zipper, fun)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Code.Common (igniter v0.3.29)

General purpose utilities for working with [`Sourceror.Zipper`](external_link).

#  __ Summary

##  Functions

add_code(zipper, new_code, placement \\\ :after)

Adds the provided code to the zipper.

current_env(zipper)

Expands the environment at the current zipper position and returns the expanded environment. Currently used for properly working with aliases.

expand_alias(zipper)

expand_aliases(zipper)

expand_literal(zipper)

Expands a literal value using the env at the cursor, if possible

extendable_block?(arg1)

maybe_move_to_block(zipper)

Enters a block, and moves to the first child, or returns the zipper unmodified.

maybe_move_to_single_child_block(zipper)

Enters a block with a single child, and moves to that child, or returns the zipper unmodified

move_next(zipper, pred)

Moves nextwards (depth-first), until the provided predicate returns `true`.

move_right(zipper, pred)

Moves rightwards, entering blocks (and exiting them if no match is found), until the provided predicate returns `true`.

move_to(zipper, pred)

Moves to the next node that matches the predicate.

move_to_cursor(zipper, pattern)

Matches and moves to the location of a `__cursor__` in provided source code.

move_to_cursor_match_in_scope(zipper, patterns)

Moves to the cursor that matches the provided pattern or one of the provided patterns, in the current scope.

move_to_do_block(zipper)

Moves to a do block for the current call.

move_to_pattern(zipper, pattern)

Moves to the next node that matches the given pattern.

move_to_zipper(zipper, pred)

Moves to the next zipper that matches the predicate.

node_matches_pattern?(zipper, pattern)

Returns `true` if the current node matches the given pattern.

nodes_equal?(left, right)

nth_right(zipper, n)

Moves the zipper right n times, returning `:error` if it can't move that many times.

replace_code(zipper, code)

rightmost(zipper)

Moves the zipper all the way to the right, potentially entering a single value block.

update_all_matches(zipper, pred, fun)

Updates all nodes matching the given predicate with the given function.

use_aliases(new_code, current_code)

Replaces full module names in `new_code` with any aliases for that module found in the `current_code` environment.

within(top_zipper, fun)

Runs the function `fun` on the subtree of the currently focused `node` and returns the updated `zipper`.

#  __ Functions

__ Link to this function

# add_code(zipper, new_code, placement \\\ :after)

[ __ View Source ](external_link)
    
    
    @spec add_code([Sourceror.Zipper.t](external_link)(), [String.t](external_link)() | [Macro.t](external_link)(), :after | :before) ::
      [Sourceror.Zipper.t](external_link)()

Adds the provided code to the zipper.

Use `placement` to determine if the code goes `:after` or `:before` the current node.

##  __ Example:
    
    
    existing_zipper = """
    IO.inspect("Hello, world!")
    """
    |> Sourceror.parse_string!()
    |> Sourceror.Zipper.zip()
    
    new_code = """
    IO.inspect("Goodbye, world!")
    """
    
    existing_zipper
    |> Igniter.Common.add_code(new_code)
    |> Sourceror.Zipper.root()
    |> Sourceror.to_string()

Which will produce
    
    
    """
    IO.inspect("Hello, world!")
    IO.inspect("Goodbye, world!")
    """

__ Link to this function

# current_env(zipper)

[ __ View Source ](external_link)

Expands the environment at the current zipper position and returns the expanded environment. Currently used for properly working with aliases.

__ Link to this function

# expand_alias(zipper)

[ __ View Source ](external_link)
    
    
    @spec expand_alias([Sourceror.Zipper.t](external_link)()) :: [Sourceror.Zipper.t](external_link)()

__ Link to this function

# expand_aliases(zipper)

[ __ View Source ](external_link)
    
    
    @spec expand_aliases([Sourceror.Zipper.t](external_link)()) :: [Sourceror.Zipper.t](external_link)()

__ Link to this function

# expand_literal(zipper)

[ __ View Source ](external_link)
    
    
    @spec expand_literal([Sourceror.Zipper.t](external_link)()) :: {:ok, [any](external_link)()} | :error

Expands a literal value using the env at the cursor, if possible

__ Link to this function

# extendable_block?(arg1)

[ __ View Source ](external_link)

__ Link to this function

# maybe_move_to_block(zipper)

[ __ View Source ](external_link)
    
    
    @spec maybe_move_to_block([Sourceror.Zipper.t](external_link)()) :: [Sourceror.Zipper.t](external_link)()

Enters a block, and moves to the first child, or returns the zipper unmodified.

__ Link to this function

# maybe_move_to_single_child_block(zipper)

[ __ View Source ](external_link)
    
    
    @spec maybe_move_to_single_child_block([Sourceror.Zipper.t](external_link)()) :: [Sourceror.Zipper.t](external_link)()

Enters a block with a single child, and moves to that child, or returns the zipper unmodified

__ Link to this function

# move_next(zipper, pred)

[ __ View Source ](external_link)
    
    
    @spec move_next([Sourceror.Zipper.t](external_link)(), ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)())) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves nextwards (depth-first), until the provided predicate returns `true`.

Returns `:error` if the end is reached without finding a match.

__ Link to this function

# move_right(zipper, pred)

[ __ View Source ](external_link)
    
    
    @spec move_right([Sourceror.Zipper.t](external_link)(), ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)())) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves rightwards, entering blocks (and exiting them if no match is found), until the provided predicate returns `true`.

Returns `:error` if the end is reached without finding a match.

__ Link to this function

# move_to(zipper, pred)

[ __ View Source ](external_link)
    
    
    @spec move_to([Sourceror.Zipper.t](external_link)(), ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)())) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error
    
    
    @spec move_to([Sourceror.Zipper.t](external_link)(), ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)())) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves to the next node that matches the predicate.

__ Link to this function

# move_to_cursor(zipper, pattern)

[ __ View Source ](external_link)
    
    
    @spec move_to_cursor([Sourceror.Zipper.t](external_link)(), [Sourceror.Zipper.t](external_link)() | [String.t](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Matches and moves to the location of a `__cursor__` in provided source code.

Use `__cursor__()` to match a cursor in the provided source code. Use `__` to skip any code at a point.

For example:
    
    
    zipper =
      """
      if true do
        10
      end
      """
      |> Sourceror.Zipper.zip()
    
    pattern =
      """
      if __ do
        __cursor__()
      end
      """
    
    zipper
    |> Igniter.Code.Common.move_to_cursor(pattern)
    |> Zipper.node()
    # => 10

__ Link to this function

# move_to_cursor_match_in_scope(zipper, patterns)

[ __ View Source ](external_link)
    
    
    @spec move_to_cursor_match_in_scope([Sourceror.Zipper.t](external_link)(), [String.t](external_link)() | [[String.t](external_link)()]) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves to the cursor that matches the provided pattern or one of the provided patterns, in the current scope.

See `move_to_cursor/2` for an example of a pattern

__ Link to this function

# move_to_do_block(zipper)

[ __ View Source ](external_link)
    
    
    @spec move_to_do_block([Sourceror.Zipper.t](external_link)()) :: {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves to a do block for the current call.

For example, at a node like:
    
    
    foo do
      10
    end

You would get a zipper back at `10`.

__ Link to this macro

# move_to_pattern(zipper, pattern)

[ __ View Source ](external_link) (macro)

Moves to the next node that matches the given pattern.

__ Link to this function

# move_to_zipper(zipper, pred)

[ __ View Source ](external_link)

Moves to the next zipper that matches the predicate.

__ Link to this macro

# node_matches_pattern?(zipper, pattern)

[ __ View Source ](external_link) (macro)

Returns `true` if the current node matches the given pattern.

##  __ Examples:
    
    
    list_zipper =
      "[1, 2, 3]"
      |> Sourceror.parse_string!()
      |> Sourceror.Zipper.zip()
    
    Common.node_matches_pattern?(list_zipper, value when is_list(value)) # true

__ Link to this function

# nodes_equal?(left, right)

[ __ View Source ](external_link)
    
    
    @spec nodes_equal?([Sourceror.Zipper.t](external_link)() | [Macro.t](external_link)(), [Macro.t](external_link)()) :: [boolean](external_link)()

__ Link to this function

# nth_right(zipper, n)

[ __ View Source ](external_link)
    
    
    @spec nth_right([Sourceror.Zipper.t](external_link)(), [non_neg_integer](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves the zipper right n times, returning `:error` if it can't move that many times.

__ Link to this function

# replace_code(zipper, code)

[ __ View Source ](external_link)

__ Link to this function

# rightmost(zipper)

[ __ View Source ](external_link)
    
    
    @spec rightmost([Sourceror.Zipper.t](external_link)()) :: [Sourceror.Zipper.t](external_link)()

Moves the zipper all the way to the right, potentially entering a single value block.

__ Link to this function

# update_all_matches(zipper, pred, fun)

[ __ View Source ](external_link)
    
    
    @spec update_all_matches(
      [Sourceror.Zipper.t](external_link)(),
      ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)()),
      ([Sourceror.Zipper.t](external_link)() ->
         {:ok, [Sourceror.Zipper.t](external_link)() | {:code, [term](external_link)()}} | {:warning | :error, [term](external_link)()})
    ) :: {:ok, [Sourceror.Zipper.t](external_link)()} | {:warning | :error, [term](external_link)()}

Updates all nodes matching the given predicate with the given function.

Recurses until the predicate no longer returns false

__ Link to this function

# use_aliases(new_code, current_code)

[ __ View Source ](external_link)

Replaces full module names in `new_code` with any aliases for that module found in the `current_code` environment.

__ Link to this function

# within(top_zipper, fun)

[ __ View Source ](external_link)

Runs the function `fun` on the subtree of the currently focused `node` and returns the updated `zipper`.

`fun` must return {:ok, zipper} or `:error`, which may be positioned at the top of the subtree.
