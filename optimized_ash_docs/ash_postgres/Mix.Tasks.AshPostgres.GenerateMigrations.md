# mix ash_postgres.generate_migrations — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) mix ash_postgres.generate_migrations (ash_postgres v2.3.1)
      - Snapshots
      - Dropping columns
      - Conflicts/Multiple Resources
      - Defaults
      - Identities
- __ Summary
  - Functions
- __ Functions
- run(args)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_postgres.generate_migrations (ash_postgres v2.3.1)

Generates migrations, and stores a snapshot of your resources.

Options:

  * `domains` \- a comma separated list of Domain modules, for which migrations will be generated
  * `snapshot-path` \- a custom path to store the snapshots, defaults to "priv/resource_snapshots"
  * `migration-path` \- a custom path to store the migrations, defaults to "priv". Migrations are stored in a folder for each repo, so `priv/repo_name/migrations`
  * `tenant-migration-path` \- Same as `migration_path`, except for any tenant specific migrations
  * `drop-columns` \- whether or not to drop columns as attributes are removed. See below for more
  * `name` \- names the generated migrations, prepending with the timestamp. The default is `migrate_resources_<n>`, where `<n>` is the count of migrations matching `*migrate_resources*` plus one. For example, `--name add_special_column` would get a name like `20210708181402_add_special_column.exs`



Flags:

  * `quiet` \- messages for file creations will not be printed
  * `no-format` \- files that are created will not be formatted with the code formatter
  * `dry-run` \- no files are created, instead the new migration is printed
  * `check` \- no files are created, returns an exit(1) code if the current snapshots and resources don't fit
  * `snapshots-only` \- no migrations are generated, only snapshots are stored



#### Snapshots

Snapshots are stored in a folder for each table that migrations are generated for. Each snapshot is stored in a file with a timestamp of when it was generated. This is important because it allows for simultaneous work to be done on separate branches, and for rolling back changes more easily, e.g removing a generated migration, and deleting the most recent snapshot, without having to redo all of it

#### Dropping columns

Generally speaking, it is bad practice to drop columns when you deploy a change that would remove an attribute. The main reasons for this are backwards compatibility and rolling restarts. If you deploy an attribute removal, and run migrations. Regardless of your deployment sstrategy, you won't be able to roll back, because the data has been deleted. In a rolling restart situation, some of the machines/pods/whatever may still be running after the column has been deleted, causing errors. With this in mind, its best not to delete those columns until later, after the data has been confirmed unnecessary. To that end, you can pass `--dont-drop-columns` to tell it to comment out those statements.

#### Conflicts/Multiple Resources

The migration generator can support multiple schemas using the same table. It will raise on conflicts that it can't resolve, like the same field with different types. It will prompt to resolve conflicts that can be resolved with human input. For example, if you remove an attribute and add an attribute, it will ask you if you are renaming the column in question. If not, it will remove one column and add the other.

Additionally, it lowers things to the database where possible:

#### Defaults

There are three anonymous functions that will translate to database-specific defaults currently:

  * `&Ash.UUID.generate/0` \- Only if `uuid-ossp` is in your `c:AshPostgres.Repo.installed_extensions()`
  * `&Ecto.UUID.generate/0` \- Only if `uuid-ossp` is in your `c:AshPostgres.Repo.installed_extensions()`
  * `&DateTime.utc_now/0`



Non-function default values will be dumped to their native type and inspected. This may not work for some types, and may require manual intervention/patches to the migration generator code.

#### Identities

Identities will cause the migration generator to generate unique constraints. If multiple resources target the same table, you will be asked to select the primary key, and any others will be added as unique constraints.

#  __ Summary

##  Functions

run(args)

Callback implementation for [`Mix.Task.run/1`](external_link).

#  __ Functions

__

# run(args)

[ __](external_link)

Callback implementation for [`Mix.Task.run/1`](external_link).
