# AshCubDB.Serde — ash_cubdb v0.6.2

Project: ash_cubdb v0.6.2

## Table of Contents

- [ __ View Source ](external_link) AshCubDB.Serde (ash_cubdb v0.6.2)
- __ Summary
  - Functions
- __ Functions
- deserialise(resource, key, data)
- serialise(record)

__

Search documentation of ash_cubdb __ __

__ Settings

#  [ __ View Source ](external_link) AshCubDB.Serde (ash_cubdb v0.6.2)

Handle serialising and deserialising of records into CubDB.

#  __ Summary

##  Functions

deserialise(resource, key, data)

Convert the key and data back into a record..

serialise(record)

Serialise the record into key and value tuples for storage in CubDB.

#  __ Functions

__ Link to this function

# deserialise(resource, key, data)

[ __ View Source ](external_link)
    
    
    @spec deserialise([Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)(), [tuple](external_link)(), [tuple](external_link)()) ::
      {:ok, [Ash.Resource.record](3.0.0/Ash.Resource.html#t:record/0)()} | {:error, [any](external_link)()}

Convert the key and data back into a record..

__ Link to this function

# serialise(record)

[ __ View Source ](external_link)
    
    
    @spec serialise([Ash.Resource.record](3.0.0/Ash.Resource.html#t:record/0)()) :: {:ok, [tuple](external_link)(), [tuple](external_link)()} | {:error, [any](external_link)()}

Serialise the record into key and value tuples for storage in CubDB.
