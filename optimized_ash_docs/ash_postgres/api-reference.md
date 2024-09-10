# API Reference — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) API Reference ash_postgres v2.3.1
  - __ Modules
  - __ Mix Tasks

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash_postgres v2.3.1

##  __ Modules

[AshPostgres](external_link)

The AshPostgres extension gives you tools to map a resource to a postgres database table.

[AshPostgres.CheckConstraint](external_link)

Represents a configured check constraint on the table backing a resource

[AshPostgres.CustomAggregate](external_link)

A custom aggregate implementation for ecto.

[AshPostgres.CustomExtension](external_link)

A custom extension implementation.

[AshPostgres.CustomIndex](external_link)

Represents a custom index on the table backing a resource

[AshPostgres.DataLayer](external_link)

A postgres data layer that leverages Ecto's postgres capabilities.

[AshPostgres.DataLayer.CheckConstraints](external_link)

MOD DOCS

[AshPostgres.DataLayer.CustomIndexes](external_link)

MOD DOCS

[AshPostgres.DataLayer.CustomStatements](external_link)

MOD DOCS

[AshPostgres.DataLayer.Info](external_link)

Introspection functions for 

[AshPostgres.DataLayer.ManageTenant](external_link)

MOD DOCS

[AshPostgres.DataLayer.ManageTenant.Options](external_link)

Mod Docs

[AshPostgres.DataLayer.Postgres.CheckConstraints.CheckConstraint](external_link)

Mod docs

[AshPostgres.DataLayer.Postgres.CheckConstraints.CheckConstraint.Options](external_link)

Mod Docs

[AshPostgres.DataLayer.Postgres.CustomIndexes.Index](external_link)

Mod docs

[AshPostgres.DataLayer.Postgres.CustomIndexes.Index.Options](external_link)

Mod Docs

[AshPostgres.DataLayer.Postgres.CustomStatements.Statement](external_link)

Mod docs

[AshPostgres.DataLayer.Postgres.CustomStatements.Statement.Options](external_link)

Mod Docs

[AshPostgres.DataLayer.Postgres.Options](external_link)

Mod Docs

[AshPostgres.DataLayer.Postgres.References.Reference](external_link)

Mod docs

[AshPostgres.DataLayer.Postgres.References.Reference.Options](external_link)

Mod Docs

[AshPostgres.DataLayer.References](external_link)

MOD DOCS

[AshPostgres.DataLayer.References.Options](external_link)

Mod Docs

[AshPostgres.Extensions.Vector](external_link)

An extension that adds support for the `vector` type.

[AshPostgres.Functions.Binding](external_link)

Refers to the current table binding.

[AshPostgres.Functions.ILike](external_link)

Maps to the builtin postgres function `ilike`.

[AshPostgres.Functions.Like](external_link)

Maps to the builtin postgres function `like`.

[AshPostgres.Functions.TrigramSimilarity](external_link)

Maps to the builtin postgres trigram similarity function. Requires `pgtrgm` extension to be installed.

[AshPostgres.Functions.VectorCosineDistance](external_link)

Maps to the vector cosine distance operator. Requires `vector` extension to be installed.

[AshPostgres.Igniter](external_link)

Codemods and utilities for working with AshPostgres & Igniter

[AshPostgres.ManualRelationship](external_link)

A behavior for postgres-specific manual relationship functionality

[AshPostgres.Migration](external_link)

Utilities for use in migrations

[AshPostgres.Reference](external_link)

Represents the configuration of a reference (i.e foreign key).

[AshPostgres.Repo](external_link)

Resources that use [`AshPostgres.DataLayer`](external_link) use a `Repo` to access the database.

[AshPostgres.Statement](external_link)

Represents a custom statement to be run in generated migrations

[AshPostgres.Timestamptz](external_link)

Implements the PostgresSQL [timestamptz](external_link) (aka `timestamp with time zone`) type.

[AshPostgres.TimestamptzUsec](external_link)

Implements the PostgresSQL [timestamptz](external_link) (aka `timestamp with time zone`) type with nanosecond precision.

[AshPostgres.Tsquery](external_link)

A thin wrapper around `:string` for working with tsquery types in calculations.

[AshPostgres.Tsvector](external_link)

A thin wrapper around `:string` for working with tsvector types in calculations.

[AshPostgres.Type](external_link)

Postgres specific callbacks for [`Ash.Type`](3.4.4/Ash.Type.html).

[EctoMigrationDefault](external_link)

Allows configuring how values are translated to default values in migrations.

##  __ Mix Tasks

[mix ash_postgres.create](external_link)

Create the storage for repos in all resources for the given (or configured) domains.

[mix ash_postgres.drop](external_link)

Drop the storage for the given repository.

[mix ash_postgres.gen.resources](external_link)

Generates or updates resources based on a database schema

[mix ash_postgres.generate_migrations](external_link)

Generates migrations, and stores a snapshot of your resources.

[mix ash_postgres.install](external_link)

Installs AshPostgres. Should be run with `mix igniter.install ash_postgres`

[mix ash_postgres.migrate](external_link)

Runs the pending migrations for the given repository.

[mix ash_postgres.rollback](external_link)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

[mix ash_postgres.squash_snapshots](external_link)

Cleans snapshots folder, leaving only one snapshot per resource.

[ Next Page →  Home  ](external_link)
