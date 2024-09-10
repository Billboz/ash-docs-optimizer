# Ash.Resource.Relationships — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Relationships (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- cardinality()
- relationship()
- type()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Relationships (ash v3.4.8)

Types Ash relationships

#  __ Summary

##  Types

cardinality()

relationship()

type()

#  __ Types

__ Link to this type

# cardinality()

[ __ View Source ](external_link)
    
    
    @type cardinality() :: :many | :one

__ Link to this type

# relationship()

[ __ View Source ](external_link)
    
    
    @type relationship() ::
      [Ash.Resource.Relationships.HasOne.t](external_link)()
      | [Ash.Resource.Relationships.BelongsTo.t](external_link)()
      | [Ash.Resource.Relationships.HasMany.t](external_link)()
      | [Ash.Resource.Relationships.ManyToMany.t](external_link)()

__ Link to this type

# type()

[ __ View Source ](external_link)
    
    
    @type type() :: :has_many | :has_one | :belongs_to | :many_to_many
