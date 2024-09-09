# Ash.NotLoaded — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.NotLoaded (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.NotLoaded (ash v3.4.8)

Used when a field hasn't been loaded or selected.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.NotLoaded{
      field: [atom](external_link)(),
      type: :relationship | :calculation | :aggregate | :attribute
    }
