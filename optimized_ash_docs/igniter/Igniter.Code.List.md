# Igniter.Code.List — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Code.List (igniter v0.3.29)
- __ Summary
  - Types
  - Functions
- __ Types
- equality_pred()
- __ Functions
- append_new_to_list(zipper, quoted, equality_pred \\\ &Common.nodes_equal?/2)
- append_to_list(zipper, quoted)
- find_list_item_index(zipper, pred)
- list?(zipper)
- move_to_list_item(zipper, pred)
- prepend_new_to_list(zipper, quoted, equality_pred \\\ &Common.nodes_equal?/2)
- prepend_to_list(zipper, quoted)
- remove_from_list(zipper, predicate)
- remove_index(zipper, index)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Code.List (igniter v0.3.29)

Utilities for working with lists.

#  __ Summary

##  Types

equality_pred()

##  Functions

append_new_to_list(zipper, quoted, equality_pred \\\ &Common.nodes_equal?/2)

Appends `quoted` to the list unless it is already present, determined by `equality_pred`.

append_to_list(zipper, quoted)

Appends `quoted` to the list

find_list_item_index(zipper, pred)

Finds the index of the first list item that satisfies `pred`

list?(zipper)

Returns true if the `zipper` is at a list literal

move_to_list_item(zipper, pred)

Moves to the list item matching the given predicate

prepend_new_to_list(zipper, quoted, equality_pred \\\ &Common.nodes_equal?/2)

Prepends `quoted` to the list unless it is already present, determined by `equality_pred`.

prepend_to_list(zipper, quoted)

Prepends `quoted` to the list

remove_from_list(zipper, predicate)

remove_index(zipper, index)

Removes the item at the given index, returning `:error` if nothing is at that index

#  __ Types

__ Link to this type

# equality_pred()

[ __ View Source ](external_link)
    
    
    @type equality_pred() :: ([Sourceror.Zipper.t](external_link)(), [Macro.t](external_link)() -> [boolean](external_link)())

#  __ Functions

__ Link to this function

# append_new_to_list(zipper, quoted, equality_pred \\\ &Common.nodes_equal?/2)

[ __ View Source ](external_link)
    
    
    @spec append_new_to_list([Sourceror.Zipper.t](external_link)(), quoted :: [Macro.t](external_link)(), equality_pred()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Appends `quoted` to the list unless it is already present, determined by `equality_pred`.

__ Link to this function

# append_to_list(zipper, quoted)

[ __ View Source ](external_link)
    
    
    @spec append_to_list([Sourceror.Zipper.t](external_link)(), quoted :: [Macro.t](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Appends `quoted` to the list

__ Link to this function

# find_list_item_index(zipper, pred)

[ __ View Source ](external_link)
    
    
    @spec find_list_item_index([Sourceror.Zipper.t](external_link)(), ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)())) ::
      [integer](external_link)() | nil

Finds the index of the first list item that satisfies `pred`

__ Link to this function

# list?(zipper)

[ __ View Source ](external_link)
    
    
    @spec list?([Sourceror.Zipper.t](external_link)()) :: [boolean](external_link)()

Returns true if the `zipper` is at a list literal

__ Link to this function

# move_to_list_item(zipper, pred)

[ __ View Source ](external_link)
    
    
    @spec move_to_list_item([Sourceror.Zipper.t](external_link)(), ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)())) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves to the list item matching the given predicate

__ Link to this function

# prepend_new_to_list(zipper, quoted, equality_pred \\\ &Common.nodes_equal?/2)

[ __ View Source ](external_link)
    
    
    @spec prepend_new_to_list([Sourceror.Zipper.t](external_link)(), quoted :: [Macro.t](external_link)(), equality_pred()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Prepends `quoted` to the list unless it is already present, determined by `equality_pred`.

__ Link to this function

# prepend_to_list(zipper, quoted)

[ __ View Source ](external_link)
    
    
    @spec prepend_to_list([Sourceror.Zipper.t](external_link)(), quoted :: [Macro.t](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Prepends `quoted` to the list

__ Link to this function

# remove_from_list(zipper, predicate)

[ __ View Source ](external_link)
    
    
    @spec remove_from_list(
      [Sourceror.Zipper.t](external_link)(),
      predicate :: ([Sourceror.Zipper.t](external_link)() -> [boolean](external_link)())
    ) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

__ Link to this function

# remove_index(zipper, index)

[ __ View Source ](external_link)
    
    
    @spec remove_index([Sourceror.Zipper.t](external_link)(), index :: [non_neg_integer](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Removes the item at the given index, returning `:error` if nothing is at that index
