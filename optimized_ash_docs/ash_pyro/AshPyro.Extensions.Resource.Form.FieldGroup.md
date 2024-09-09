# AshPyro.Extensions.Resource.Form.FieldGroup — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.Form.FieldGroup (AshPyro v0.2.1)
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

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.Form.FieldGroup (AshPyro v0.2.1)

A group of form fields in the [`AshPyro.Extensions.Resource`](external_link) extension.

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
    
    
    @type t() :: %AshPyro.Extensions.Resource.Form.FieldGroup{
      class: [String.t](external_link)(),
      fields: [[AshPyro.Extensions.Resource.Form.Field.t](external_link)()],
      label: [String.t](external_link)(),
      name: [String.t](external_link)(),
      path: [[atom](external_link)()]
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
