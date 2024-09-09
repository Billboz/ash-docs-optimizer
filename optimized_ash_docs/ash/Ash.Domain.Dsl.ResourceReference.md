# Ash.Domain.Dsl.ResourceReference — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Domain.Dsl.ResourceReference (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Domain.Dsl.ResourceReference (ash v3.4.8)

A resource reference in a domain

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Domain.Dsl.ResourceReference{
      definitions: [
        [Ash.Resource.Interface.t](external_link)() | [Ash.Resource.CalculationInterface.t](external_link)()
      ],
      resource: [module](external_link)()
    }
