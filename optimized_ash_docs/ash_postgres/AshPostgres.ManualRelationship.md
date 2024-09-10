# AshPostgres.ManualRelationship — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.ManualRelationship behaviour (ash_postgres v2.3.1)
- __ Summary
  - Callbacks
- __ Callbacks
- ash_postgres_join( source_query, opts, current_binding, destination_binding, type, destination_query )
- ash_postgres_subquery(opts, current_binding, destination_binding, destination_query)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.ManualRelationship behaviour (ash_postgres v2.3.1)

A behavior for postgres-specific manual relationship functionality

#  __ Summary

##  Callbacks

ash_postgres_join( source_query, opts, current_binding, destination_binding, type, destination_query )

ash_postgres_subquery(opts, current_binding, destination_binding, destination_query)

#  __ Callbacks

__

# ash_postgres_join( source_query, opts, current_binding, destination_binding, type, destination_query )

[ __](external_link)
    
    
    @callback ash_postgres_join(
      source_query :: [Ecto.Query.t](external_link)(),
      opts :: [Keyword.t](external_link)(),
      current_binding :: [term](external_link)(),
      destination_binding :: [term](external_link)(),
      type :: :inner | :left,
      destination_query :: [Ecto.Query.t](external_link)()
    ) :: {:ok, [Ecto.Query.t](external_link)()} | {:error, [term](external_link)()}

__

# ash_postgres_subquery(opts, current_binding, destination_binding, destination_query)

[ __](external_link)
    
    
    @callback ash_postgres_subquery(
      opts :: [Keyword.t](external_link)(),
      current_binding :: [term](external_link)(),
      destination_binding :: [term](external_link)(),
      destination_query :: [Ecto.Query.t](external_link)()
    ) :: {:ok, [Ecto.Query.t](external_link)()} | {:error, [term](external_link)()}
