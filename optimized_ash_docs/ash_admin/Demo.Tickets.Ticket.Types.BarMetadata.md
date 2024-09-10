# Demo.Tickets.Ticket.Types.BarMetadata — ash_admin v0.11.5

Project: ash_admin v0.11.5

## Table of Contents

- [ __ View Source ](external_link) Demo.Tickets.Ticket.Types.BarMetadata (ash_admin v0.11.5)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- apply_constraints_array(term, constraints)
- cast_input(input, constraints)
- cast_stored(value, constraints)
- check_atomic(value, constraints)
- default_short_name()
- dump_to_native(value, _)
- fetch_key(map, atom)
- get_rewrites(merged_load, calculation, path, _)
- handle_change_array(old_values, new_values, constraints)
- input(opts)
- input(opts, action)
- load(record, load, constraints, context)
- prepare_change_array(old_values, new_uncasted_values, constraints)
- rewrite(value, rewrites, constraints)
- storage_type(_)

__

Search documentation of ash_admin __ __

__ Settings

#  [ __ View Source ](external_link) Demo.Tickets.Ticket.Types.BarMetadata (ash_admin v0.11.5)

#  __ Summary

##  Types

t()

##  Functions

apply_constraints_array(term, constraints)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](3.4.1/Ash.Type.html#c:apply_constraints_array/2).

cast_input(input, constraints)

Callback implementation for [`Ash.Type.cast_input/2`](3.4.1/Ash.Type.html#c:cast_input/2).

cast_stored(value, constraints)

Callback implementation for [`Ash.Type.cast_stored/2`](3.4.1/Ash.Type.html#c:cast_stored/2).

check_atomic(value, constraints)

default_short_name()

dump_to_native(value, _)

Callback implementation for [`Ash.Type.dump_to_native/2`](3.4.1/Ash.Type.html#c:dump_to_native/2).

fetch_key(map, atom)

get_rewrites(merged_load, calculation, path, _)

Callback implementation for [`Ash.Type.get_rewrites/4`](3.4.1/Ash.Type.html#c:get_rewrites/4).

handle_change_array(old_values, new_values, constraints)

Callback implementation for [`Ash.Type.handle_change_array/3`](3.4.1/Ash.Type.html#c:handle_change_array/3).

input(opts)

Validates that the keys in the provided input are valid for at least one action on the resource.

input(opts, action)

Same as `input/1`, except restricts the keys to values accepted by the action provided.

load(record, load, constraints, context)

Callback implementation for [`Ash.Type.load/4`](3.4.1/Ash.Type.html#c:load/4).

prepare_change_array(old_values, new_uncasted_values, constraints)

Callback implementation for [`Ash.Type.prepare_change_array/3`](3.4.1/Ash.Type.html#c:prepare_change_array/3).

rewrite(value, rewrites, constraints)

Callback implementation for [`Ash.Type.rewrite/3`](3.4.1/Ash.Type.html#c:rewrite/3).

storage_type(_)

Callback implementation for [`Ash.Type.storage_type/1`](3.4.1/Ash.Type.html#c:storage_type/1).

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Demo.Tickets.Ticket.Types.BarMetadata{
      __lateral_join_source__: [term](external_link)(),
      __meta__: [term](external_link)(),
      __metadata__: [term](external_link)(),
      __order__: [term](external_link)(),
      aggregates: [term](external_link)(),
      bar: [term](external_link)(),
      calculations: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# apply_constraints_array(term, constraints)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.apply_constraints_array/2`](3.4.1/Ash.Type.html#c:apply_constraints_array/2).

__ Link to this function

# cast_input(input, constraints)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.cast_input/2`](3.4.1/Ash.Type.html#c:cast_input/2).

__ Link to this function

# cast_stored(value, constraints)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.cast_stored/2`](3.4.1/Ash.Type.html#c:cast_stored/2).

__ Link to this function

# check_atomic(value, constraints)

[ __ View Source ](external_link)

__ Link to this function

# default_short_name()

[ __ View Source ](external_link)

__ Link to this function

# dump_to_native(value, _)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.dump_to_native/2`](3.4.1/Ash.Type.html#c:dump_to_native/2).

__ Link to this function

# fetch_key(map, atom)

[ __ View Source ](external_link)

__ Link to this function

# get_rewrites(merged_load, calculation, path, _)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.get_rewrites/4`](3.4.1/Ash.Type.html#c:get_rewrites/4).

__ Link to this function

# handle_change_array(old_values, new_values, constraints)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.handle_change_array/3`](3.4.1/Ash.Type.html#c:handle_change_array/3).

__ Link to this function

# input(opts)

[ __ View Source ](external_link)
    
    
    @spec input(values :: [map](external_link)() | [Keyword.t](external_link)()) :: [map](external_link)() | [no_return](external_link)()

Validates that the keys in the provided input are valid for at least one action on the resource.

Raises a KeyError error at compile time if not. This exists because generally a struct should only ever be created by Ash as a result of a successful action. You should not be creating records manually in code, e.g `%MyResource{value: 1, value: 2}`. Generally that is fine, but often with embedded resources it is nice to be able to validate the keys that are being provided, e.g
    
    
    Resource
    |> Ash.Changeset.for_create(:create, %{embedded: EmbeddedResource.input(foo: 1, bar: 2)})
    |> Ash.create()

__ Link to this function

# input(opts, action)

[ __ View Source ](external_link)
    
    
    @spec input(values :: [map](external_link)() | [Keyword.t](external_link)(), action :: [atom](external_link)()) :: [map](external_link)() | [no_return](external_link)()

Same as `input/1`, except restricts the keys to values accepted by the action provided.

__ Link to this function

# load(record, load, constraints, context)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.load/4`](3.4.1/Ash.Type.html#c:load/4).

__ Link to this function

# prepare_change_array(old_values, new_uncasted_values, constraints)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.prepare_change_array/3`](3.4.1/Ash.Type.html#c:prepare_change_array/3).

__ Link to this function

# rewrite(value, rewrites, constraints)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.rewrite/3`](3.4.1/Ash.Type.html#c:rewrite/3).

__ Link to this function

# storage_type(_)

[ __ View Source ](external_link)

Callback implementation for [`Ash.Type.storage_type/1`](3.4.1/Ash.Type.html#c:storage_type/1).
