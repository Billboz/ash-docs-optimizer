# What is AshPostgres? — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) What is AshPostgres?
    - __ What versions are supported?

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) What is AshPostgres?

AshPostgres is the PostgreSQL [`Ash.DataLayer`](3.4.4/Ash.DataLayer.html) for [Ash Framework](external_link). This is the most fully-featured Ash data layer, and unless you need a specific characteristic or feature of another data layer, you should use [`AshPostgres`](external_link).

###  __ What versions are supported?

Any version higher than 13 is fully supported. Versions lower than this can be made to work, but certain edge cases may need to be manually handled. This becomes more and more true the further back in versions that you go.

Use this to persist records in a PostgreSQL table or view. For example, the resource below would be persisted in a table called `tweets`:
    
    
    defmodule MyApp.Tweet do
      use Ash.Resource,
        data_layer: AshPostgres.DataLayer
    
      attributes do
        integer_primary_key :id
        attribute :text, :string
      end
    
      relationships do
        belongs_to :author, MyApp.User
      end
    
      postgres do
        table "tweets"
        repo MyApp.Repo
      end
    end

The table might look like this:

id| text| author_id  
---|---|---  
1| "Hello, world!"| 1  
  
Creating records would add to the table, destroying records would remove from the table, and updating records would update the table.

[ ← Previous Page  Setting AshPostgres up with an existing database  ](external_link)

[ Next Page →  References  ](external_link)
