# mix ash_sqlite.migrate — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) mix ash_sqlite.migrate (ash_sqlite v0.1.3)
  - __ Examples
  - __ Command line options

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_sqlite.migrate (ash_sqlite v0.1.3)

Runs the pending migrations for the given repository.

Migrations are expected at "priv/YOUR_REPO/migrations" directory of the current application, where "YOUR_REPO" is the last segment in your repository name. For example, the repository `MyApp.Repo` will use "priv/repo/migrations". The repository `Whatever.MyRepo` will use "priv/my_repo/migrations".

This task runs all pending migrations by default. To migrate up to a specific version number, supply `--to version_number`. To migrate a specific number of times, use `--step n`.

This is only really useful if your domain or domains only use a single repo. If you have multiple repos and you want to run a single migration and/or migrate/roll them back to different points, you will need to use the ecto specific task, [`mix ecto.migrate`](external_link) and provide your repo name.

If a repository has not yet been started, one will be started outside your application supervision tree and shutdown afterwards.

##  __ Examples
    
    
    mix ash_sqlite.migrate
    mix ash_sqlite.migrate --domains MyApp.Domain1,MyApp.Domain2
    
    mix ash_sqlite.migrate -n 3
    mix ash_sqlite.migrate --step 3
    
    mix ash_sqlite.migrate --to 20080906120000

##  __ Command line options

  * `--domains` \- the domains who's repos should be migrated

  * `--all` \- run all pending migrations

  * `--step`, `-n` \- run n number of pending migrations

  * `--to` \- run all migrations up to and including version

  * `--quiet` \- do not log migration commands

  * `--pool-size` \- the pool size if the repository is started only for the task (defaults to 2)

  * `--log-sql` \- log the raw sql migrations are running

  * `--strict-version-order` \- abort when applying a migration with old timestamp

  * `--no-compile` \- does not compile applications before migrating

  * `--no-deps-check` \- does not check depedendencies before migrating

  * `--migrations-path` \- the path to load the migrations from, defaults to `"priv/repo/migrations"`. This option may be given multiple times in which case the migrations are loaded from all the given directories and sorted as if they were in the same one.

Note, if you have migrations paths e.g. `a/` and `b/`, and run `mix ecto.migrate --migrations-path a/`, the latest migrations from `a/` will be run (even if `b/` contains the overall latest migrations.)


