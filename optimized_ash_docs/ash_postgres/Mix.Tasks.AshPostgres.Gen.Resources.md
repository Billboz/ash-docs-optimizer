# mix ash_postgres.gen.resources — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) mix ash_postgres.gen.resources (ash_postgres v2.3.1)
  - __ Example
  - __ Domain
  - __ Options
  - __ Tables

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_postgres.gen.resources (ash_postgres v2.3.1)

Generates or updates resources based on a database schema

##  __ Example

`mix ash_postgres.gen.resource MyApp.MyDomain`

##  __ Domain

The domain will be generated if it does not exist. If you aren't sure, we suggest using something like `MyApp.App`.

##  __ Options

  * `repo`, `r` \- The repo or repos to generate resources for, comma separated. Can be specified multiple times. Defaults to all repos.
  * `tables`, `t` \- Defaults to `public.*`. The tables to generate resources for, comma separated. Can be specified multiple times. See the section on tables for more.
  * `skip-tables`, `s` \- The tables to skip generating resources for, comma separated. Can be specified multiple times. See the section on tables for more.
  * `snapshots-only` \- Only generate snapshots for the generated resources, and not migraitons.
  * `extend`, `e` \- Extension or extensions to apply to the generated resources. See [`mix ash.patch.extend`](3.4.4/Mix.Tasks.Ash.Patch.Extend.html) for more.
  * `yes`, `y` \- Answer yes (or skip) to all questions.



##  __ Tables

When specifying tables to include with `--tables`, you can specify the table name, or the schema and table name separated by a period. For example, `users` will generate resources for the `users` table in the `public` schema, but `accounts.users` will generate resources for the `users` table in the `accounts` schema.

To include all tables in a given schema, add a period only with no table name, i.e `schema.`, i.e `accounts.`.

When skipping tables with `--skip-tables`, the same rules apply, except that the `schema.` format is not supported.
