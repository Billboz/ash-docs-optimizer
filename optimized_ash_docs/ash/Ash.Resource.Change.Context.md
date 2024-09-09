# Ash.Resource.Change.Context — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Change.Context (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Change.Context (ash v3.4.8)

The context for a change.

This is passed into various callbacks for [`Ash.Resource.Change`](external_link).

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.Change.Context{
      actor: [Ash.Resource.record](external_link)() | nil,
      authorize?: [boolean](external_link)() | nil,
      bulk?: [boolean](external_link)(),
      tenant: [term](external_link)(),
      tracer: [Ash.Tracer.t](external_link)() | [[Ash.Tracer.t](external_link)()] | nil
    }
