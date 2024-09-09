# AshPyro.Extensions.Resource.Info — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.Info (AshPyro v0.2.1)
- __ Summary
  - Functions
- __ Functions
- data_table_for(resource, action_name)
  - __ Examples
- form_field(resource, action, field)
- form_for(resource, action_name)
  - __ Examples
- page_for(resource, page_name)
  - __ Examples
- resource_by_path(resource, list)

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.Info (AshPyro v0.2.1)

Helpers to introspect the [`AshPyro.Extensions.Resource`](external_link) Ash extension. Intended for use in components that automatically build UI from resource configuration.

#  __ Summary

##  Functions

data_table_for(resource, action_name)

Returns the data table defined in the [`AshPyro.Extensions.Resource`](external_link) extension for the given action.

form_field(resource, action, field)

form_for(resource, action_name)

Returns the form fields defined in the [`AshPyro.Extensions.Resource`](external_link) extension for the given action.

page_for(resource, page_name)

Returns the page defined in the [`AshPyro.Extensions.Resource`](external_link) extension for the given page name.

resource_by_path(resource, list)

Get a resource via a path from starting resource.

#  __ Functions

__ Link to this function

# data_table_for(resource, action_name)

[ __ View Source ](external_link)
    
    
    @spec data_table_for([Ash.Resource.t](2.18.2/Ash.Resource.html#t:t/0)(), [atom](external_link)()) ::
      [AshPyro.Extensions.Resource.DataTable] | nil

Returns the data table defined in the [`AshPyro.Extensions.Resource`](external_link) extension for the given action.

##  __ Examples
    
    
    iex> data_table_for(AshPyro.Extensions.Resource.InfoTest.User, :list) |> Map.get(:name)
    :list

__ Link to this function

# form_field(resource, action, field)

[ __ View Source ](external_link)

__ Link to this function

# form_for(resource, action_name)

[ __ View Source ](external_link)
    
    
    @spec form_for([Ash.Resource.t](2.18.2/Ash.Resource.html#t:t/0)(), [atom](external_link)()) ::
      AshPyro.Extensions.Resource.Form.Action | nil

Returns the form fields defined in the [`AshPyro.Extensions.Resource`](external_link) extension for the given action.

##  __ Examples
    
    
    iex> form_for(AshPyro.Extensions.Resource.InfoTest.User, :create) |> Map.get(:fields) |> Enum.map(& &1.name)
    [:primary, :authorization, :friendships, :notes]

__ Link to this function

# page_for(resource, page_name)

[ __ View Source ](external_link)
    
    
    @spec page_for([Ash.Resource.t](2.18.2/Ash.Resource.html#t:t/0)(), [atom](external_link)()) ::
      AshPyro.Extensions.Resource.LiveView.Page | nil

Returns the page defined in the [`AshPyro.Extensions.Resource`](external_link) extension for the given page name.

##  __ Examples
    
    
    iex> page_for(AshPyro.Extensions.Resource.InfoTest.User, :companies) |> Map.get(:name)
    :companies

__ Link to this function

# resource_by_path(resource, list)

[ __ View Source ](external_link)
    
    
    @spec resource_by_path([Ash.Resource.t](2.18.2/Ash.Resource.html#t:t/0)(), [[atom](external_link)() | [binary](external_link)()]) :: [Ash.Resource.t](2.18.2/Ash.Resource.html#t:t/0)()

Get a resource via a path from starting resource.
