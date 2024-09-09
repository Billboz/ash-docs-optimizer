# AshPostgres.Repo — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.Repo behaviour (ash_postgres v2.3.1)
  - __ Installed Extensions
  - __ Transaction Hooks
- __ Summary
  - Callbacks
- __ Callbacks
- all_tenants()
- create?()
- default_prefix()
- drop?()
- installed_extensions()
- migrations_path()
- min_pg_version()
- on_transaction_begin(reason)
  - __ Combining with other tools
- override_migration_type(atom)
- tenant_migrations_path()

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.Repo behaviour (ash_postgres v2.3.1)

Resources that use [`AshPostgres.DataLayer`](external_link) use a `Repo` to access the database.

This repo is a thin wrapper around an [`Ecto.Repo`](external_link).

You can use [`Ecto.Repo`](external_link)'s `init/2` to configure your repo like normal, but instead of returning `{:ok, config}`, use `super(config)` to pass the configuration to the [`AshPostgres.Repo`](external_link) implementation.

##  __ Installed Extensions

To configure your list of installed extensions, define `installed_extensions/0`

Extensions can be a string, representing a standard postgres extension, or a module that implements [`AshPostgres.CustomExtension`](external_link). That custom extension will be called to generate migrations that serve a specific purpose.

Extensions that are relevant to ash_postgres:

  * "ash-functions" - This isn't really an extension, but it expresses that certain functions should be added when generating migrations, to support the `||` and `&&` operators in expressions.
  * `"uuid-ossp"` \- Sets UUID primary keys defaults in the migration generator
  * `"pg_trgm"` \- Makes the [`AshPostgres.Functions.TrigramSimilarity`](external_link) function available
  * "citext" - Allows case insensitive fields to be used
  * `"vector"` \- Makes the [`AshPostgres.Functions.VectorCosineDistance`](external_link) function available. See [`AshPostgres.Extensions.Vector`](external_link) for more setup instructions.


    
    
    def installed_extensions() do
      ["pg_trgm", "uuid-ossp", "vector", YourCustomExtension]
    end

##  __ Transaction Hooks

You can define `on_transaction_begin/1`, which will be invoked whenever a transaction is started for Ash.

This will be invoked with a map containing a `type` key and metadata.
    
    
    %{type: :create, %{resource: YourApp.YourResource, action: :action}}

#  __ Summary

##  Callbacks

all_tenants()

Return a list of all schema names (only relevant for a multitenant implementation)

create?()

Should the repo should be created by [`mix ash_postgres.create`](external_link)?

default_prefix()

The default prefix(postgres schema) to use when building queries

drop?()

Should the repo should be dropped by [`mix ash_postgres.drop`](external_link)?

installed_extensions()

Use this to inform the data layer about what extensions are installed

migrations_path()

The path where your migrations are stored

min_pg_version()

Configure the version of postgres that is being used.

on_transaction_begin(reason)

Use this to inform the data layer about the oldest potential postgres version it will be run on.

override_migration_type(atom)

Allows overriding a given migration type for _all_ fields, for example if you wanted to always use :timestamptz for :utc_datetime fields

tenant_migrations_path()

The path where your tenant migrations are stored (only relevant for a multitenant implementation)

#  __ Callbacks

__

# all_tenants()

[ __](external_link)
    
    
    @callback all_tenants() :: [[String.t](external_link)()]

Return a list of all schema names (only relevant for a multitenant implementation)

__

# create?()

[ __](external_link)
    
    
    @callback create?() :: [boolean](external_link)()

Should the repo should be created by [`mix ash_postgres.create`](external_link)?

__

# default_prefix()

[ __](external_link)
    
    
    @callback default_prefix() :: [String.t](external_link)()

The default prefix(postgres schema) to use when building queries

__

# drop?()

[ __](external_link)
    
    
    @callback drop?() :: [boolean](external_link)()

Should the repo should be dropped by [`mix ash_postgres.drop`](external_link)?

__

# installed_extensions()

[ __](external_link)
    
    
    @callback installed_extensions() :: [[String.t](external_link)() | [module](external_link)()]

Use this to inform the data layer about what extensions are installed

__

# migrations_path()

[ __](external_link)
    
    
    @callback migrations_path() :: [String.t](external_link)() | nil

The path where your migrations are stored

__

# min_pg_version()

[ __](external_link)
    
    
    @callback min_pg_version() :: [Version.t](external_link)()

Configure the version of postgres that is being used.

__

# on_transaction_begin(reason)

[ __](external_link)
    
    
    @callback on_transaction_begin(reason :: [Ash.DataLayer.transaction_reason](3.4.4/Ash.DataLayer.html#t:transaction_reason/0)()) :: [term](external_link)()

Use this to inform the data layer about the oldest potential postgres version it will be run on.

Must be an integer greater than or equal to 13.

##  __ Combining with other tools

For things like `Fly.Repo`, where you might need to have more fine grained control over the repo module, you can use the `define_ecto_repo?: false` option to `use AshPostgres.Repo`.

__

# override_migration_type(atom)

[ __](external_link)
    
    
    @callback override_migration_type([atom](external_link)()) :: [atom](external_link)()

Allows overriding a given migration type for _all_ fields, for example if you wanted to always use :timestamptz for :utc_datetime fields

__

# tenant_migrations_path()

[ __](external_link)
    
    
    @callback tenant_migrations_path() :: [String.t](external_link)() | nil

The path where your tenant migrations are stored (only relevant for a multitenant implementation)
