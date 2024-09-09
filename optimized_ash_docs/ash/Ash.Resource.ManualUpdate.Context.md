# Ash.Resource.ManualUpdate.Context — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.ManualUpdate.Context (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.ManualUpdate.Context (ash v3.4.8)

The context passed into manual update action functions

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.ManualUpdate.Context{
      actor: [any](external_link)(),
      authorize?: [boolean](external_link)(),
      batch_size: [pos_integer](external_link)(),
      domain: [Ash.Domain.t](external_link)(),
      return_records?: [boolean](external_link)(),
      select: [[atom](external_link)()],
      tenant: [any](external_link)(),
      tracer: [[module](external_link)()]
    }
