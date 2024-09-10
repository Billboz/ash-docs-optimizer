# Change Log — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v2.3.1](external_link) (2024-09-05)
    - __ Improvements:
  - __ [v2.3.0](external_link) (2024-09-05)
    - __ Features:
  - __ [v2.2.5](external_link) (2024-09-04)
    - __ Improvements:
  - __ [v2.2.4](external_link) (2024-09-03)
    - __ Bug Fixes:
  - __ [v2.2.3](external_link) (2024-08-18)
    - __ Bug Fixes:
  - __ [v2.2.2](external_link) (2024-08-17)
    - __ Bug Fixes:
  - __ [v2.2.1](external_link) (2024-08-16)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.2.0](external_link) (2024-08-13)
    - __ Bug Fixes:
  - __ [v2.1.19](external_link) (2024-08-12)
    - __ Bug Fixes:
  - __ [v2.1.18](external_link) (2024-08-09)
    - __ Improvements:
  - __ [v2.1.17](external_link) (2024-07-27)
    - __ Improvements:
  - __ [v2.1.16](external_link) (2024-07-25)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.15](external_link) (2024-07-23)
    - __ Bug Fixes:
  - __ [v2.1.14](external_link) (2024-07-22)
    - __ Bug Fixes:
  - __ [v2.1.13](external_link) (2024-07-22)
    - __ Bug Fixes:
  - __ [v2.1.12](external_link) (2024-07-19)
    - __ Bug Fixes:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.10](external_link) (2024-07-18)
    - __ Bug Fixes:
  - __ [v2.1.9](external_link) (2024-07-18)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.8](external_link) (2024-07-17)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.7](external_link) (2024-07-17)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.6](external_link) (2024-07-16)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.5](external_link) (2024-07-15)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.4](external_link) (2024-07-14)
    - __ Improvements:
  - __ [v2.1.3](external_link) (2024-07-14)
    - __ Improvements:
  - __ [v2.1.2](external_link) (2024-07-13)
  - __ [v2.1.1](external_link) (2024-07-10)
    - __ Bug Fixes:
  - __ [v2.1.0](external_link) (2024-07-10)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.0.12](external_link) (2024-06-20)
    - __ Bug Fixes:
  - __ [v2.0.11](external_link) (2024-06-19)
    - __ Bug Fixes:
  - __ [v2.0.10](external_link) (2024-06-18)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.0.9](external_link) (2024-06-13)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.0.8](external_link) (2024-06-06)
  - __ [v2.0.7](external_link) (2024-06-06)
    - __ Bug Fixes:
  - __ [v2.0.6](external_link) (2024-05-29)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.0.5](external_link) (2024-05-24)
    - __ Improvements:
  - __ [v2.0.4](external_link) (2024-05-23)
    - __ Bug Fixes:
  - __ [v2.0.3](external_link) (2024-05-22)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.0.2](external_link) (2024-05-15)
    - __ Bug Fixes:
  - __ [v2.0.1](external_link) (2024-05-12)
    - __ Bug Fixes:
  - __ [v2.0.0](external_link)
    - __ Breaking Changes:
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v2.3.1](external_link) (2024-09-05)

###  __ Improvements:

  * [`mix ash_postgres.gen.migrations`] better imported index names

  * [`mix ash_postgres.gen.migrations`] add `--extend` option, forwarded to generated resource




##  __ [v2.3.0](external_link) (2024-09-05)

###  __ Features:

  * [[`mix ash_postgres.gen.resources`](external_link)] Add [`mix ash_postgres.gen.resources`](external_link) for importing tables from an existing database as resources



##  __ [v2.2.5](external_link) (2024-09-04)

###  __ Improvements:

  * [[`AshPostgres.DataLayer`](external_link)] support ash main upsert_condition logic



##  __ [v2.2.4](external_link) (2024-09-03)

###  __ Bug Fixes:

  * [[`AshPostgres.DataLayer`](external_link)] ensure default bindings are present on data layer

  * [[`AshPostgres.DataLayer`](external_link)] properly traverse newtypes when determining types




##  __ [v2.2.3](external_link) (2024-08-18)

###  __ Bug Fixes:

  * [[`mix ash_postgres.install`](external_link)] was not adding ash_functions/min_pg_version



##  __ [v2.2.2](external_link) (2024-08-17)

###  __ Bug Fixes:

  * [[`mix ash_postgres.install`](external_link)] properly handle new igniter installer functions



##  __ [v2.2.1](external_link) (2024-08-16)

###  __ Bug Fixes:

  * [[`AshPostgres.DataLayer`](external_link)] set a proper default for `skip_unique_indexes`



###  __ Improvements:

  * [[`mix ash_postgres.install`](external_link)] include `min_pg_version` in new generators



##  __ [v2.2.0](external_link) (2024-08-13)

###  __ Bug Fixes:

  * [[`AshPostgres.Repo`](external_link)] remove [`Agent`](external_link) "convenience" for determining min pg version



We need to require that users provide this function. To that end we're adding a warning in a minor release branch telling users to define this. The agent was acting as a bottleneck that all queries must go through, causing nontrivial performance issues at scale.

  * [upserts] handle filter condition on create (#368)



##  __ [v2.1.19](external_link) (2024-08-12)

###  __ Bug Fixes:

  * [ecto compatibility] we missed a change when preparing for ecto 3.12 parameterized type changes

  * [exists aggregates] update ash_sql for exists aggregate fixes




##  __ [v2.1.18](external_link) (2024-08-09)

###  __ Improvements:

  * [`ash_postgres.gen.migration`] dynamically select and allow setting a repo



##  __ [v2.1.17](external_link) (2024-07-27)

###  __ Improvements:

  * [`ash_sql`] update ash & ash_sql for various fixes



##  __ [v2.1.16](external_link) (2024-07-25)

###  __ Bug Fixes:

  * [updates] don't overwrite non-updated fields on update

  * [[`mix ash_postgres.generate_migrations`](external_link)] ensure app is compiled before using repo modules




###  __ Improvements:

  * [`ash_sql`] update ash_sql for cleaner queries



##  __ [v2.1.15](external_link) (2024-07-23)

###  __ Bug Fixes:

  * [query building] use a subquery if any exists aggregates are in play



##  __ [v2.1.14](external_link) (2024-07-22)

###  __ Bug Fixes:

  * [multitenancy] properly convert tenant to string when building lateral join



##  __ [v2.1.13](external_link) (2024-07-22)

###  __ Bug Fixes:

  * [atomic validations] update ash & ash_sql for fixes, test atomic validations in destroys



##  __ [v2.1.12](external_link) (2024-07-19)

###  __ Bug Fixes:

  * [[`mix ash_postgres.install`](external_link)] properly add prod config in installer



###  __ Bug Fixes:

  * [[`mix ash_postgres.install`](external_link)] properly perform or don't perform configuration modification code

  * [`has_many` relationships] allow non-unique has_many source_attributes (#355)




###  __ Improvements:

  * [[`mix ash_postgres.install`](external_link)] prepend `:postgres` to section order

  * [[`mix ash.patch.extend`](3.4.4/Mix.Tasks.Ash.Patch.Extend.html)] pluralize table name in extender




##  __ [v2.1.10](external_link) (2024-07-18)

###  __ Bug Fixes:

  * [lateral joins] allow non-unique has_many source_attributes (#355)



##  __ [v2.1.9](external_link) (2024-07-18)

###  __ Bug Fixes:

###  __ Improvements:

  * [[`mix ash.gen.resource`](3.4.4/Mix.Tasks.Ash.Gen.Resource.html)] pluralize table name in extender



##  __ [v2.1.8](external_link) (2024-07-17)

###  __ Bug Fixes:

  * [aggregates] update ash_sql & ash for include_nil? fix (and test it)

  * [aggregates] ensure synthesized query aggregates have context set




###  __ Improvements:

  * [installers] update igniter dependencies

  * [expressions] add `binding()` expression, for referring to the current table




##  __ [v2.1.7](external_link) (2024-07-17)

###  __ Bug Fixes:

  * update to latest ash version for aggregate fix

  * update ash_sql for include_nil? fix and test it

  * ensure synthesized query aggregates have context set




###  __ Improvements:

  * update ash/igniter dependencies

  * add `binding()` expression

  * use latest type casting code from ash

  * support new type determination code




##  __ [v2.1.6](external_link) (2024-07-16)

###  __ Bug Fixes:

  * ensure synthesized query aggregates have context set



###  __ Improvements:

  * update ash/igniter dependencies

  * add `binding()` expression

  * use latest type casting code from ash

  * support new type determination code




##  __ [v2.1.5](external_link) (2024-07-15)

###  __ Bug Fixes:

  * ensure synthesized query aggregates have context set



###  __ Improvements:

  * [[`Ash.Expr`](3.4.4/Ash.Expr.html)] add `binding()` expression to refer to current table

  * [[`Ash.Expr`](3.4.4/Ash.Expr.html)] use latest type casting code from ash




##  __ [v2.1.4](external_link) (2024-07-14)

###  __ Improvements:

  * [[`Ash.Expr`](3.4.4/Ash.Expr.html)] use latest type casting code from ash



##  __ [v2.1.3](external_link) (2024-07-14)

###  __ Improvements:

  * [[`Ash.Expr`](3.4.4/Ash.Expr.html)] support new type determination code



##  __ [v2.1.2](external_link) (2024-07-13)

  * [query builder] update ash & improve type casting behavior



##  __ [v2.1.1](external_link) (2024-07-10)

###  __ Bug Fixes:

  * [mix ash_postgres.install] properly interpolate module names in installer



##  __ [v2.1.0](external_link) (2024-07-10)

###  __ Features:

  * [AshPostgres.DataLayer] add `storage_types` configuration (#342)
  * [generators] add [`mix ash_postgres.install`](external_link) (`mix igniter.install ash_postgres`)



###  __ Bug Fixes:

  * [AshPostgres.DataLayer] ensure that `from_many?` relationships in lateral join have a limit applied

  * [migration generator] properly delete args passed from migrate to ecto




###  __ Improvements:

  * [Ash.Type.UUIDv7] add support for `:uuid_v7` type (#333)

  * [migration generator] order keys in snapshot json (#339)




##  __ [v2.0.12](external_link) (2024-06-20)

###  __ Bug Fixes:

  * [migration generator] only add references indexes if they've changed



##  __ [v2.0.11](external_link) (2024-06-19)

###  __ Bug Fixes:

  * [AshPostgres.DataLayer] rework expression type detection

  * [migration generator] ensure index keys are atoms in generated migrations (#332)




##  __ [v2.0.10](external_link) (2024-06-18)

###  __ Bug Fixes:

  * [AshPostgres.DataLayer] update ash_sql to fix query generation issues

  * [migration generator] ensure that parens are always added to calculation generated SQL

  * [migration generator] properly get calculation sql




###  __ Improvements:

  * [AshPostgres.DataLayer] better type handling using new type inference

  * [identities] identities w/ calculations and where clauses in upserts




##  __ [v2.0.9](external_link) (2024-06-13)

###  __ Features:

  * [migration generator] autogenerate index in references (#321)



###  __ Bug Fixes:

  * [AshPostgres.DataLayer] fix invalid select on sorting by some calculations

  * [AshPostgres.DataLayer] fix error message displaying in identity verifier

  * [lateral joining] ensure that context multitenancy is properly applied to lateral many-to-many joins

  * [migration generator] don't assume old snapshots have `index?` key for attributes

  * [ash.rollback] `list_tenants` -> `all_tenants`

  * [ash.rollback] when checking for roll back-able migrations, only check `Path.basename`




###  __ Improvements:

  * [migration generator] don't sort identity keys.



##  __ [v2.0.8](external_link) (2024-06-06)

##  __ [v2.0.7](external_link) (2024-06-06)

###  __ Bug Fixes:

  * [fix] update ash_sql and fix issues retaining lateral join context

  * [fix] ensure that all current attribute values are selected on bulk update shifted root query




##  __ [v2.0.6](external_link) (2024-05-29)

###  __ Bug Fixes:

  * [atomic updates] properly support aggregate references in atomic updates

  * [migration generator] ensure that identities are dropped when where/nils_distinct? are changed

  * [migration generator] ensure that `where` is wrapped in parenthesis

  * [ecto compatibility] support old/new parameterized type format




###  __ Improvements:

  * [identities] require clarification of index names > 63 characters

  * [mix ash_postgres.squash_snapshots] add `ash_postgres.squash_snapshots` mix task (#302)




##  __ [v2.0.5](external_link) (2024-05-24)

###  __ Improvements:

  * [idenities] update `ash` and support new `identity` features



##  __ [v2.0.4](external_link) (2024-05-23)

###  __ Bug Fixes:

[updates] ensure update's reselect all changing values

##  __ [v2.0.3](external_link) (2024-05-22)

###  __ Bug Fixes:

[updates] handle complex maps/list on update

[Ash.Query] support anonymous aggregates in sorts

[exists] ensure parent_as bindings properly reference binding names

[migration generator] add and remove custom indexes in tandem properly

###  __ Improvements:

[references] support `on_delete: :nilify` for specific columns (#289)

##  __ [v2.0.2](external_link) (2024-05-15)

###  __ Bug Fixes:

  * [update_query/destroy_query] rework the update and destroy query builder to support multiple kinds of joining

  * [mix ash_postgres.migrate] remove duplicate repo flags (#285)

  * [Ash.Error.Changes.StaleRecord] ensure filter is included in stale record error messages we return

  * [AshPostgres.MigrationGenerator] properly parse previous version from migration generation




##  __ [v2.0.1](external_link) (2024-05-12)

###  __ Bug Fixes:

  * [AshPostgres.MigrationGenerator] properly parse previous version of custom extensions when generating migrations



##  __ [v2.0.0](external_link)

The changelog is starting over. Please see `/documentation/1.0-CHANGELOG.md` in GitHub for previous changelogs.

###  __ Breaking Changes:

  * [Ash.Type.UUID] change defaults in migrations for uuids to `gen_random_uuid()`
  * [Ash.Type.DateTime] Use UTC for default generated timestamps (#131)
  * [AshPostgres.DataLayer] must now know the min_pg_version that will be used. By default we check this at repo startup by asking the database, but you can also define it yourself.
  * [AshPostgres.DataLayer] Now requires postgres version 14 or higher



###  __ Features:

  * [AshPostgres.Timestamptz] add timestamptz types (#266)
  * [AshPostgres.Repo] add `create?` and `drop?` callbacks to [`AshPostgres.Repo`](external_link) (#143)
  * [AshPostgres.DataLayer] support `c:AshDataLayer.calculate/3` capability



###  __ Bug Fixes:

  * [AshPostgres.MigrationGenerator] honor dry_run option in extension migrations
  * [AshPostgres.MigrationGenerator] don't wait for shell input when checking migrations
  * [AshPostgres.DataLayer] ensure limit/offset triggers joining for update/destroy query
  * [AshPostgres.DataLayer] properly honor `limit` in bulk operations
  * [AshPostgres.DataLayer] ensure that `exists` with a filter paired with `from_many?` functions properly



###  __ Improvements:

  * [AshPostgres.Repo] warn on missing ash-functions at compile time
  * [AshPostgres.Repo] add default implementation for pg_version, and rename to `min_pg_version`
  * [mix ash.rollback] support [`mix ash.rollback`](3.4.4/Mix.Tasks.Ash.Rollback.html) with interactive rollback
  * [AshSql] move many internals out to `AshSql` package to be shared



[ ← Previous Page  Manual Relationships  ](external_link)

[ Next Page →  DSL: AshPostgres.DataLayer  ](external_link)
