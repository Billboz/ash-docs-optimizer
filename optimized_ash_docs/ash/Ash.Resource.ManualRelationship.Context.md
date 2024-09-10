# Ash.Resource.ManualRelationship.Context — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.ManualRelationship.Context (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.ManualRelationship.Context (ash v3.4.8)

The context passed into manual relationship functions

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Resource.ManualRelationship.Context{
      actor: [term](external_link)(),
      authorize?: [boolean](external_link)(),
      domain: [module](external_link)(),
      query: [Ash.Query.t](external_link)(),
      relationship: [Ash.Resource.Relationships.relationship](external_link)(),
      tenant: [term](external_link)()
    }
