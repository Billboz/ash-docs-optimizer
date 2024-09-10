# DSL: Ash.DataLayer.Ets — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) DSL: Ash.DataLayer.Ets
  - __ ets
    - __ Examples
    - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) DSL: Ash.DataLayer.Ets

An ETS (Erlang Term Storage) backed Ash Datalayer, for testing and lightweight usage.

Remember, this does not have support for transactions! This is not recommended for production use, especially in multi-user applications. It can, however, be great for prototyping.

##  __ ets

A section for configuring the ets data layer

###  __ Examples
    
    
    ets do
      # Used in testing
      private? true
    end
    

###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`private?`| `boolean`| `false`| Sets the ets table protection to private, and scopes it to only this process. The table name will not be used directly if this is true, to allow multiple processes to use this resource separately.  
`table`| `atom`| | The name of the table. Defaults to the resource name.  
  
[ ← Previous Page  DSL: Ash.Policy.Authorizer  ](external_link)

[ Next Page →  DSL: Ash.DataLayer.Mnesia  ](external_link)
