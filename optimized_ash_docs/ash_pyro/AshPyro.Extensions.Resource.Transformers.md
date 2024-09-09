# AshPyro.Extensions.Resource.Transformers — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.Transformers (AshPyro v0.2.1)
- __ Summary
  - Functions
- __ Functions
- default_label(name)
- filter_actions(dsl, filter)
- get_action(dsl, action)
- get_nested(value, keys, default \\\ nil)
  - __ Examples
- handle_errors(errors, label, dsl \\\ nil)
- inherit_pyro_config(dsl, kind, entity_name, key, default \\\ nil)
- resource_field_type(dsl, field_name)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.Transformers (AshPyro v0.2.1)

Tooling for Ash resource transformation.

#  __ Summary

##  Functions

default_label(name)

Extract a default humanized label from an entity name.

filter_actions(dsl, filter)

Get a filtered list of actions from the resource DSL.

get_action(dsl, action)

Get a specific action from the resource DSL.

get_nested(value, keys, default \\\ nil)

Safely get nested values from maps or keyword lists that may be `nil` or an otherwise non-map value at any point. Great for accessing nested assigns in a template.

handle_errors(errors, label, dsl \\\ nil)

Collect all accumulated errors and log raise them all at once.

inherit_pyro_config(dsl, kind, entity_name, key, default \\\ nil)

Inherit a value from another enitity by name.

resource_field_type(dsl, field_name)

Get the type of a resources field. Used to determine how to render it in the UI.

#  __ Functions

__ Link to this function

# default_label(name)

[ __ View Source ](external_link)

Extract a default humanized label from an entity name.

__ Link to this function

# filter_actions(dsl, filter)

[ __ View Source ](external_link)

Get a filtered list of actions from the resource DSL.

__ Link to this function

# get_action(dsl, action)

[ __ View Source ](external_link)

Get a specific action from the resource DSL.

__ Link to this function

# get_nested(value, keys, default \\\ nil)

[ __ View Source ](external_link)

Safely get nested values from maps or keyword lists that may be `nil` or an otherwise non-map value at any point. Great for accessing nested assigns in a template.

##  __ Examples
    
    
    iex> get_nested(nil, [:one, :two, :three])
    nil
    
    iex> get_nested(%{one: nil}, [:one, :two, :three])
    nil
    
    iex> get_nested(%{one: %{two: %{three: 3}}}, [:one, :two, :three])
    3
    
    iex> get_nested(%{one: %{two: [three: 3]}}, [:one, :two, :three])
    3
    
    iex> get_nested([one: :nope], [:one, :two, :three])
    nil
    
    iex> get_nested([one: :nope], [:one, :two, :three], :default)
    :default

__ Link to this function

# handle_errors(errors, label, dsl \\\ nil)

[ __ View Source ](external_link)

Collect all accumulated errors and log raise them all at once.

__ Link to this function

# inherit_pyro_config(dsl, kind, entity_name, key, default \\\ nil)

[ __ View Source ](external_link)

Inherit a value from another enitity by name.

__ Link to this function

# resource_field_type(dsl, field_name)

[ __ View Source ](external_link)

Get the type of a resources field. Used to determine how to render it in the UI.
