# Splitting Up Large DSLs — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Splitting Up Large DSLs
  - __ Fragments
    - __ Example

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Splitting Up Large DSLs

When building large DSLs, we face similar problems as things like large configuration files. It can be hard to find what we're looking for, and we can end up scrolling through a lot of DSL code to find what we're interested in. We generally suggest avoiding splitting up your DSLs by default, but it is important to know how to do so when the need arises.

##  __ Fragments

Spark offers a tool called [`Spark.Dsl.Fragment`](external_link), which allows you to compose a single DSL from multiple smaller DSL modules. There are a few important properties and caveats to understand:

  1. Fragments are _not_ designed for sharing code between instances of a spark DSL. They are not dynamic. For creating behavior that extends across multiple instances of a DSL, you should write an extension.

  2. A DSL has all extensions that any of its fragments has.

  3. Fragments must express what they are a fragment _of_.




###  __ Example
    
    
    defmodule MyApp.Accounts.User.Fragments.DataLayer do
      use Spark.Dsl.Fragment,
        of: Ash.Resource,
        data_layer: AshPostgres.DataLayer
    
      postgres do
        table "users"
        repo MyApp.Repo
        ...
      end
    end
    
    defmodule MyApp.Accounts.User do
      use Ash.Resource,
        fragments: [MyApp.Accounts.User.Fragments.DataLayer]
    
      ...
    end

[ ← Previous Page  Writing Extensions  ](external_link)

[ Next Page →  Spark  ](external_link)
