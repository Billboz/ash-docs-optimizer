# Ash.ToTenant — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.ToTenant protocol (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- to_tenant(value, resource)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.ToTenant protocol (ash v3.4.8)

Converts a value to a tenant. To add this to a resource, implement the protocol like so:application

What this should do is entirely dependent on how you've set up your tenants. This example assumes that you want the tenant to be `org_#{organization_id}`, but it could also be something like `organization.schema`.
    
    
    defmodule MyApp.Organization do
      use Ash.Resource, ...
    
      ...
    
      defimpl Ash.ToTenant do
        def to_tenant(%{id: id}, _resource), do: "org_#{id}"
      end
    end

#  __ Summary

##  Types

t()

##  Functions

to_tenant(value, resource)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

#  __ Functions

__ Link to this function

# to_tenant(value, resource)

[ __ View Source ](external_link)
    
    
    @spec to_tenant(t(), [Ash.Resource.t](external_link)()) :: [term](external_link)()
