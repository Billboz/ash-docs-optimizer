# Ash.Resource.Igniter — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Igniter (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- add_action(igniter, resource, action)
- add_attribute(igniter, resource, attribute)
- add_bypass(igniter, resource, condition, body)
- add_policy(igniter, resource, condition, body)
- domain(igniter, resource)
- list_resources(igniter)
- resource_mods()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Igniter (ash v3.4.8)

Codemods for working with Ash.Resource modules

#  __ Summary

##  Functions

add_action(igniter, resource, action)

Adds the given code block to the resource's `actions` block

add_attribute(igniter, resource, attribute)

Adds the given code block to the resource's `attributes` block

add_bypass(igniter, resource, condition, body)

Adds a bypass to the top of the resource's `policies` block

add_policy(igniter, resource, condition, body)

Adds a policy to the bottom of the resource's `policies` block

domain(igniter, resource)

Gets the domain from the given resource module

list_resources(igniter)

List all resource modules found in the project

resource_mods()

#  __ Functions

__ Link to this function

# add_action(igniter, resource, action)

[ __ View Source ](external_link)

Adds the given code block to the resource's `actions` block

__ Link to this function

# add_attribute(igniter, resource, attribute)

[ __ View Source ](external_link)

Adds the given code block to the resource's `attributes` block

__ Link to this function

# add_bypass(igniter, resource, condition, body)

[ __ View Source ](external_link)

Adds a bypass to the top of the resource's `policies` block

__ Link to this function

# add_policy(igniter, resource, condition, body)

[ __ View Source ](external_link)

Adds a policy to the bottom of the resource's `policies` block

__ Link to this function

# domain(igniter, resource)

[ __ View Source ](external_link)
    
    
    @spec domain([Igniter.t](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, [Igniter.t](external_link)(), [Ash.Domain.t](external_link)()} | {:error, [Igniter.t](external_link)()}

Gets the domain from the given resource module

__ Link to this function

# list_resources(igniter)

[ __ View Source ](external_link)

List all resource modules found in the project

__ Link to this function

# resource_mods()

[ __ View Source ](external_link)
