# AshSqlite.Repo — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) AshSqlite.Repo behaviour (ash_sqlite v0.1.3)
- __ Summary
  - Callbacks
- __ Callbacks
- installed_extensions()
- migrations_path()
- min_pg_version()
- override_migration_type(atom)

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) AshSqlite.Repo behaviour (ash_sqlite v0.1.3)

Resources that use [`AshSqlite.DataLayer`](external_link) use a `Repo` to access the database.

This repo is a thin wrapper around an [`Ecto.Repo`](external_link).

You can use [`Ecto.Repo`](external_link)'s `init/2` to configure your repo like normal, but instead of returning `{:ok, config}`, use `super(config)` to pass the configuration to the [`AshSqlite.Repo`](external_link) implementation.

#  __ Summary

##  Callbacks

installed_extensions()

Use this to inform the data layer about what extensions are installed

migrations_path()

The path where your migrations are stored

min_pg_version()

Use this to inform the data layer about the oldest potential sqlite version it will be run on.

override_migration_type(atom)

Allows overriding a given migration type for _all_ fields, for example if you wanted to always use :timestamptz for :utc_datetime fields

#  __ Callbacks

__ Link to this callback

# installed_extensions()

[ __ View Source ](external_link)
    
    
    @callback installed_extensions() :: [[String.t](external_link)()]

Use this to inform the data layer about what extensions are installed

__ Link to this callback

# migrations_path()

[ __ View Source ](external_link)
    
    
    @callback migrations_path() :: [String.t](external_link)() | nil

The path where your migrations are stored

__ Link to this callback

# min_pg_version()

[ __ View Source ](external_link)
    
    
    @callback min_pg_version() :: [integer](external_link)()

Use this to inform the data layer about the oldest potential sqlite version it will be run on.

Must be an integer greater than or equal to 13.

__ Link to this callback

# override_migration_type(atom)

[ __ View Source ](external_link)
    
    
    @callback override_migration_type([atom](external_link)()) :: [atom](external_link)()

Allows overriding a given migration type for _all_ fields, for example if you wanted to always use :timestamptz for :utc_datetime fields
