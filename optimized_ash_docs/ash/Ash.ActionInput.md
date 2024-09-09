# Ash.ActionInput — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.ActionInput (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- add_error(input, errors, path \\\ [])
- fetch_argument(input, argument)
- for_action(resource_or_input, action, params, opts \\\ [])
- get_argument(input, argument)
- new(resource, domain \\\ nil)
- set_argument(input, argument, value)
- set_context(input, map)
- set_tenant(input, tenant)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.ActionInput (ash v3.4.8)

Input for a custom action

#  __ Summary

##  Types

t()

##  Functions

add_error(input, errors, path \\\ [])

Adds an error to the input errors list, and marks the input as `valid?: false`

fetch_argument(input, argument)

Fetches the value of an argument provided to the input or `:error`.

for_action(resource_or_input, action, params, opts \\\ [])

Creates a new input for a generic action

get_argument(input, argument)

Gets the value of an argument provided to the input.

new(resource, domain \\\ nil)

set_argument(input, argument, value)

Set an argument value

set_context(input, map)

Deep merges the provided map into the input context that can be used later

set_tenant(input, tenant)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.ActionInput{
      action: [Ash.Resource.Actions.Action.t](external_link)() | nil,
      arguments: [map](external_link)(),
      context: [map](external_link)(),
      domain: [Ash.Domain.t](external_link)(),
      errors: [term](external_link)(),
      invalid_keys: [MapSet.t](external_link)(),
      params: [map](external_link)(),
      resource: [Ash.Resource.t](external_link)(),
      tenant: [term](external_link)(),
      valid?: [boolean](external_link)()
    }

#  __ Functions

__ Link to this function

# add_error(input, errors, path \\\ [])

[ __ View Source ](external_link)

Adds an error to the input errors list, and marks the input as `valid?: false`

__ Link to this function

# fetch_argument(input, argument)

[ __ View Source ](external_link)
    
    
    @spec fetch_argument(t(), [atom](external_link)() | [String.t](external_link)()) :: {:ok, [term](external_link)()} | :error

Fetches the value of an argument provided to the input or `:error`.

__ Link to this function

# for_action(resource_or_input, action, params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec for_action(
      resource_or_input :: [Ash.Resource.t](external_link)() | t(),
      action :: [atom](external_link)(),
      params :: [map](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: t()

Creates a new input for a generic action

__ Link to this function

# get_argument(input, argument)

[ __ View Source ](external_link)
    
    
    @spec get_argument(t(), [atom](external_link)() | [String.t](external_link)()) :: [term](external_link)()

Gets the value of an argument provided to the input.

__ Link to this function

# new(resource, domain \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# set_argument(input, argument, value)

[ __ View Source ](external_link)
    
    
    @spec set_argument(input :: t(), name :: [atom](external_link)(), value :: [term](external_link)()) :: t()

Set an argument value

__ Link to this function

# set_context(input, map)

[ __ View Source ](external_link)
    
    
    @spec set_context(t(), [map](external_link)() | nil) :: t()

Deep merges the provided map into the input context that can be used later

Do not use the `private` key in your custom context, as that is reserved for internal use.

__ Link to this function

# set_tenant(input, tenant)

[ __ View Source ](external_link)
    
    
    @spec set_tenant(t(), [Ash.ToTenant.t](external_link)()) :: t()
