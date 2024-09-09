# AshCubDB.Migration — ash_cubdb v0.6.2

Project: ash_cubdb v0.6.2

## Table of Contents

- [ __ View Source ](external_link) AshCubDB.Migration (ash_cubdb v0.6.2)
- __ Summary
  - Functions
- __ Functions
- check(db, resource)

__

Search documentation of ash_cubdb __ __

__ Settings

#  [ __ View Source ](external_link) AshCubDB.Migration (ash_cubdb v0.6.2)

We store and check metadata when opening a database to ensure that the resource and attributes match, and possibly perform migrations.

#  __ Summary

##  Functions

check(db, resource)

Check that a newly opened database doesn't need to be migrated.

#  __ Functions

__ Link to this function

# check(db, resource)

[ __ View Source ](external_link)
    
    
    @spec check([GenServer.server](external_link)(), [Ash.Resource.t](3.0.0/Ash.Resource.html#t:t/0)()) :: :ok | {:error, [any](external_link)()}

Check that a newly opened database doesn't need to be migrated.
