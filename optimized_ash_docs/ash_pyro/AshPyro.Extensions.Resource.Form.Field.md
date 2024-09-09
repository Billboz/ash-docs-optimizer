# AshPyro.Extensions.Resource.Form.Field — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.Form.Field (AshPyro v0.2.1)
- __ Summary
  - Types
  - Functions
- __ Types
- field_type()
- t()
- __ Functions
- fetch(term, key)
- get(term, key, default)
- get_and_update(term, key, fun)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.Form.Field (AshPyro v0.2.1)

The configuration of a form field in the [`AshPyro.Extensions.Resource`](external_link) extension.

#  __ Summary

##  Types

field_type()

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

# field_type()

[ __ View Source ](external_link)
    
    
    @type field_type() ::
      :default | :long_text | :short_text | :autocomplete | :select | :nested_form

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPyro.Extensions.Resource.Form.Field{
      autocomplete_option_label_key: [atom](external_link)(),
      autocomplete_option_value_key: [atom](external_link)(),
      autocomplete_search_action: [atom](external_link)(),
      autocomplete_search_arg: [atom](external_link)(),
      autofocus: [boolean](external_link)(),
      class: [String.t](external_link)(),
      description: [String.t](external_link)(),
      input_class: [String.t](external_link)(),
      label: [String.t](external_link)(),
      name: [atom](external_link)(),
      options: [list](external_link)(),
      path: [[atom](external_link)()],
      prompt: [String.t](external_link)(),
      type: field_type()
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
