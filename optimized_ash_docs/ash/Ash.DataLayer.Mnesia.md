# Ash.DataLayer.Mnesia — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.DataLayer.Mnesia (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- mnesia(body)
- start(domain, resources \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.DataLayer.Mnesia (ash v3.4.8)

An Mnesia backed Ash Datalayer.

In your application initialization, you will need to call `Mnesia.create_schema([node()])`.

Additionally, you will want to create your mnesia tables there.

This data layer is _unoptimized_ , fetching all records from a table and filtering them in memory. For that reason, it is not recommended to use it with large amounts of data. It can be great for prototyping or light usage, though.

#  __ Summary

##  Functions

mnesia(body)

start(domain, resources \\\ [])

Creates the table for each mnesia resource in a domain

#  __ Functions

__ Link to this macro

# mnesia(body)

[ __ View Source ](external_link) (macro)

__ Link to this function

# start(domain, resources \\\ [])

[ __ View Source ](external_link)

Creates the table for each mnesia resource in a domain
