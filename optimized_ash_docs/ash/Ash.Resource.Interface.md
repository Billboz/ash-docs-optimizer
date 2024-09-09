# Ash.Resource.Interface — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Interface (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- interface_options(atom, interface)
- schema()
- transform(definition)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Interface (ash v3.4.8)

Represents a function in a resource's code interface

#  __ Summary

##  Types

t()

##  Functions

interface_options(atom, interface)

schema()

transform(definition)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Interface{
      action: [term](external_link)(),
      args: [term](external_link)(),
      get?: [term](external_link)(),
      get_by: [term](external_link)(),
      get_by_identity: [term](external_link)(),
      name: [term](external_link)(),
      not_found_error?: [term](external_link)(),
      require_reference?: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# interface_options(atom, interface)

[ __ View Source ](external_link)

__ Link to this function

# schema()

[ __ View Source ](external_link)

__ Link to this function

# transform(definition)

[ __ View Source ](external_link)
