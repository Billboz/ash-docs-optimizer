# Igniter.Code.Tuple — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Code.Tuple (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- append_elem(zipper, quoted)
- tuple?(item)
- tuple_elem(item, elem)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Code.Tuple (igniter v0.3.29)

Utilities for working with tuples.

#  __ Summary

##  Functions

append_elem(zipper, quoted)

Appends `quoted` to the elem

tuple?(item)

Returns `true` if the zipper is at a literal tuple, `false` if not.

tuple_elem(item, elem)

Returns a zipper at the tuple element at the given index, or `:error` if the index is out of bounds.

#  __ Functions

__ Link to this function

# append_elem(zipper, quoted)

[ __ View Source ](external_link)
    
    
    @spec append_elem([Sourceror.Zipper.t](external_link)(), quoted :: [Macro.t](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Appends `quoted` to the elem

__ Link to this function

# tuple?(item)

[ __ View Source ](external_link)
    
    
    @spec tuple?([Sourceror.Zipper.t](external_link)()) :: [boolean](external_link)()

Returns `true` if the zipper is at a literal tuple, `false` if not.

__ Link to this function

# tuple_elem(item, elem)

[ __ View Source ](external_link)
    
    
    @spec tuple_elem([Sourceror.Zipper.t](external_link)(), elem :: [non_neg_integer](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Returns a zipper at the tuple element at the given index, or `:error` if the index is out of bounds.
