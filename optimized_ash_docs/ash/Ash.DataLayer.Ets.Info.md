# Ash.DataLayer.Ets.Info — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.DataLayer.Ets.Info (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- private?(resource)
- table(resource)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.DataLayer.Ets.Info (ash v3.4.8)

Introspection helpers for the Ets data layer

#  __ Summary

##  Functions

private?(resource)

Whether or not the ets table for the resource should be private

table(resource)

The ets table name for a resource

#  __ Functions

__ Link to this function

# private?(resource)

[ __ View Source ](external_link)
    
    
    @spec private?([Ash.Resource.t](external_link)() | [Spark.Dsl.t](external_link)()) :: [boolean](external_link)()

Whether or not the ets table for the resource should be private

__ Link to this function

# table(resource)

[ __ View Source ](external_link)
    
    
    @spec table([Ash.Resource.t](external_link)() | [Spark.Dsl.t](external_link)()) :: [boolean](external_link)()

The ets table name for a resource
