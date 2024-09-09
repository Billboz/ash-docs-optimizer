# AshTable.Table — ash_table v0.2.0

Project: ash_table v0.2.0

## Table of Contents

- AshTable.Table (ash_table v0.2.0)
- __ Summary
  - Types
  - Functions
- __ Types
- sort()
- __ Functions
- noreply(term)
- ok(term)
- render(assigns)
- sort_class(column_key, arg)
- sort_direction(column_key, sort)
- sort_normalized_keys(keys)
- toggle_direction(arg)

__

Search documentation of ash_table __ __

__ Settings

#  AshTable.Table (ash_table v0.2.0)

Generic sortable table component

Expects the following parameters as assigns:

  * `id` \- necessary, as this is a stateful LiveView component
  * `query` \- An Ash Query or Resource module
  * `sort` (optional) - a `sort/0` specifying the initial sort direction
  * `limit` \- page size
  * `offset` \- initial offset for pagination
  * `col` columns
    * attribute - the field this column displays, used to sort
    * apply_sort - optional arity 2 function which takes query, direction as args
  * `caption` (optional)
  * `read_options` \- an options keyword list of options that will be passed into `Ash.read` when data is fetched. This allows for specifying `:tenant`, `:actor`, etc.



#  __ Summary

##  Types

sort()

##  Functions

noreply(term)

ok(term)

render(assigns)

Callback implementation for [`Phoenix.LiveComponent.render/1`](external_link).

sort_class(column_key, arg)

sort_direction(column_key, sort)

sort_normalized_keys(keys)

toggle_direction(arg)

#  __ Types

__ Link to this type

# sort()
    
    
    @type sort() :: {[atom](external_link)() | nil, :asc | :desc}

#  __ Functions

__ Link to this function

# noreply(term)

__ Link to this function

# ok(term)

__ Link to this function

# render(assigns)

Callback implementation for [`Phoenix.LiveComponent.render/1`](external_link).

__ Link to this function

# sort_class(column_key, arg)

__ Link to this function

# sort_direction(column_key, sort)

__ Link to this function

# sort_normalized_keys(keys)

__ Link to this function

# toggle_direction(arg)
