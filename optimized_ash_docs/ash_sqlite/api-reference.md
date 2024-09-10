# API Reference — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) API Reference ash_sqlite v0.1.3
  - __ Modules
  - __ Mix Tasks

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash_sqlite v0.1.3

##  __ Modules

[AshSqlite](external_link)

The AshSqlite extension gives you tools to map a resource to a sqlite database table.

[AshSqlite.CustomExtension](external_link)

A custom extension implementation.

[AshSqlite.CustomIndex](external_link)

Represents a custom index on the table backing a resource

[AshSqlite.DataLayer](external_link)

A sqlite data layer that leverages Ecto's sqlite capabilities.

[AshSqlite.DataLayer.Info](external_link)

Introspection functions for 

[AshSqlite.Functions.ILike](external_link)

Maps to the builtin sqlite function `ilike`.

[AshSqlite.Functions.Like](external_link)

Maps to the builtin sqlite function `like`.

[AshSqlite.ManualRelationship](external_link)

A behavior for sqlite-specific manual relationship functionality

[AshSqlite.Reference](external_link)

Represents the configuration of a reference (i.e foreign key).

[AshSqlite.Repo](external_link)

Resources that use [`AshSqlite.DataLayer`](external_link) use a `Repo` to access the database.

[AshSqlite.Statement](external_link)

Represents a custom statement to be run in generated migrations

[AshSqlite.Type](external_link)

Sqlite specific callbacks for [`Ash.Type`](3.0.8/Ash.Type.html).

##  __ Mix Tasks

[mix ash_sqlite.create](external_link)

Create the storage for repos in all resources for the given (or configured) domains.

[mix ash_sqlite.drop](external_link)

Drop the storage for the given repository.

[mix ash_sqlite.generate_migrations](external_link)

Generates migrations, and stores a snapshot of your resources.

[mix ash_sqlite.migrate](external_link)

Runs the pending migrations for the given repository.

[mix ash_sqlite.rollback](external_link)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

[ Next Page →  Home  ](external_link)
