# Ash.Resource.Calculation.Argument — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Calculation.Argument (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- schema()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Calculation.Argument (ash v3.4.8)

An argument to a calculation

#  __ Summary

##  Types

t()

##  Functions

schema()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Calculation.Argument{
      allow_expr?: [boolean](external_link)(),
      allow_nil?: [boolean](external_link)(),
      constraints: [keyword](external_link)(),
      default: [any](external_link)(),
      name: [atom](external_link)(),
      type: [Ash.Type.t](external_link)()
    }

#  __ Functions

__ Link to this function

# schema()

[ __ View Source ](external_link)
