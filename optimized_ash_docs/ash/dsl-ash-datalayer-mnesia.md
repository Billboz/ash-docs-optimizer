# DSL: Ash.DataLayer.Mnesia — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.DataLayer.Mnesia
  - __ mnesia
    - __ Examples
    - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.DataLayer.Mnesia

An Mnesia backed Ash Datalayer.

In your application initialization, you will need to call `Mnesia.create_schema([node()])`.

Additionally, you will want to create your mnesia tables there.

This data layer is _unoptimized_ , fetching all records from a table and filtering them in memory. For that reason, it is not recommended to use it with large amounts of data. It can be great for prototyping or light usage, though.

##  __ mnesia

A section for configuring the mnesia data layer

###  __ Examples
    
    
    mnesia do
      table :custom_table
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`table`| `atom`| | The table name to use, defaults to the name of the resource  
  
[ ← Previous Page  DSL: Ash.DataLayer.Ets  ](external_link)

[ Next Page →  DSL: Ash.Reactor  ](external_link)
