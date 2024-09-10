# What is AshSqlite? — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) What is AshSqlite?

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) What is AshSqlite?

AshSqlite is the SQLite [`Ash.DataLayer`](3.0.8/Ash.DataLayer.html) for [Ash Framework](external_link). This doesn't have all of the features of [AshPostgres](external_link), but it does support most of the features of Ash data layers. The main feature missing is Aggregate support.

Use this to persist records in a SQLite table. For example, the resource below would be persisted in a table called `tweets`:
    
    
    defmodule MyApp.Tweet do
      use Ash.Resource,
        data_layer: AshSQLite.DataLayer
    
      attributes do
        integer_primary_key :id
        attribute :text, :string
      end
    
      relationships do
        belongs_to :author, MyApp.User
      end
    
      sqlite do
        table "tweets"
        repo MyApp.Repo
      end
    end

The table might look like this:

id| text| author_id  
---|---|---  
1| "Hello, world!"| 1  
  
Creating records would add to the table, destroying records would remove from the table, and updating records would update the table.

[ ← Previous Page  Getting Started With AshSqlite  ](external_link)

[ Next Page →  References  ](external_link)
