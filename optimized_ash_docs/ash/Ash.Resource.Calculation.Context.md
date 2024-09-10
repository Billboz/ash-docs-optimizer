# Ash.Resource.Calculation.Context — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Calculation.Context (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Calculation.Context (ash v3.4.8)

The context and arguments of a calculation

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Calculation.Context{
      actor: [term](external_link)() | nil,
      arguments: [map](external_link)(),
      authorize?: [boolean](external_link)(),
      constraints: [Keyword.t](external_link)(),
      domain: [module](external_link)(),
      resource: [module](external_link)(),
      source_context: [map](external_link)(),
      tenant: [term](external_link)(),
      tracer: [module](external_link)() | nil,
      type: [Ash.Type.t](external_link)()
    }
