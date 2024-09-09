# AshPyro.Extensions.Resource.DataTable.ActionType — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.DataTable.ActionType (AshPyro v0.2.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- fetch(term, key)
- get(term, key, default)
- get_and_update(term, key, fun)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.DataTable.ActionType (AshPyro v0.2.1)

A data table for action(s) of a given type in the [`AshPyro.Extensions.Resource`](external_link) extension.

#  __ Summary

##  Types

t()

##  Functions

fetch(term, key)

See [`Map.fetch/2`](external_link).

get(term, key, default)

See [`Map.get/3`](external_link).

get_and_update(term, key, fun)

See [`Map.get_and_update/3`](external_link).

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPyro.Extensions.Resource.DataTable.ActionType{
      class: [AshPyro.Extensions.Resource.Schema.css_class](external_link)(),
      columns: [AshPyro.Extensions.Resource.DataTable.Column],
      default_display: [[atom](external_link)()],
      default_sort: [AshPyro.Extensions.Resource.Schema.sort](external_link)(),
      exclude: [[atom](external_link)()],
      name: [atom](external_link)()
    }

#  __ Functions

__ Link to this function

# fetch(term, key)

[ __ View Source ](external_link)

See [`Map.fetch/2`](external_link).

__ Link to this function

# get(term, key, default)

[ __ View Source ](external_link)

See [`Map.get/3`](external_link).

__ Link to this function

# get_and_update(term, key, fun)

[ __ View Source ](external_link)

See [`Map.get_and_update/3`](external_link).
