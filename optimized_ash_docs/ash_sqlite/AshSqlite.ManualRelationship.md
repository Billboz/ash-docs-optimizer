# AshSqlite.ManualRelationship — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) AshSqlite.ManualRelationship behaviour (ash_sqlite v0.1.3)
- __ Summary
  - Callbacks
- __ Callbacks
- ash_sqlite_join(source_query, opts, current_binding, destination_binding, type, destination_query)
- ash_sqlite_subquery(opts, current_binding, destination_binding, destination_query)

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) AshSqlite.ManualRelationship behaviour (ash_sqlite v0.1.3)

A behavior for sqlite-specific manual relationship functionality

#  __ Summary

##  Callbacks

ash_sqlite_join(source_query, opts, current_binding, destination_binding, type, destination_query)

ash_sqlite_subquery(opts, current_binding, destination_binding, destination_query)

#  __ Callbacks

__ Link to this callback

# ash_sqlite_join(source_query, opts, current_binding, destination_binding, type, destination_query)

[ __ View Source ](external_link)
    
    
    @callback ash_sqlite_join(
      source_query :: [Ecto.Query.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      current_binding :: [term](external_link)(),
      destination_binding :: [term](external_link)(),
      type :: :inner | :left,
      destination_query :: [Ecto.Query.t](external_link)()
    ) :: {:ok, [Ecto.Query.t](external_link)()} | {:error, [term](external_link)()}

__ Link to this callback

# ash_sqlite_subquery(opts, current_binding, destination_binding, destination_query)

[ __ View Source ](external_link)
    
    
    @callback ash_sqlite_subquery(
      opts :: [Keyword.t](external_link)(),
      current_binding :: [term](external_link)(),
      destination_binding :: [term](external_link)(),
      destination_query :: [Ecto.Query.t](external_link)()
    ) :: {:ok, [Ecto.Query.t](external_link)()} | {:error, [term](external_link)()}
