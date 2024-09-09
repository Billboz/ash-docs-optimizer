# Ash.Resource.Calculation.Builtins — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Calculation.Builtins (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- concat(keys, separator \\\ "")
  - __ Examples

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Calculation.Builtins (ash v3.4.8)

Built in calculations that are automatically imported in the calculations section

#  __ Summary

##  Functions

concat(keys, separator \\\ "")

An example concatenation calculation, that accepts the delimiter as an argument

#  __ Functions

__ Link to this function

# concat(keys, separator \\\ "")

[ __ View Source ](external_link)
    
    
    @spec concat(keys :: [[atom](external_link)()], separator :: [String.t](external_link)()) ::
      [Ash.Resource.Calculation.ref](external_link)()

An example concatenation calculation, that accepts the delimiter as an argument

##  __ Examples
    
    
    calculate :full_name, :string, concat([:first_name, :last_name], " ")
