# mix ash_postgres.rollback — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) mix ash_postgres.rollback (ash_postgres v2.3.1)
  - __ Examples
  - __ Command line options

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_postgres.rollback (ash_postgres v2.3.1)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

This is only really useful if your domains only use a single repo. If you have multiple repos and you want to run a single migration and/or migrate/roll them back to different points, you will need to use the ecto specific task, [`mix ecto.migrate`](external_link) and provide your repo name.

##  __ Examples
    
    
    mix ash_postgres.rollback
    mix ash_postgres.rollback -r Custom.Repo
    mix ash_postgres.rollback -n 3
    mix ash_postgres.rollback --step 3
    mix ash_postgres.rollback -v 20080906120000
    mix ash_postgres.rollback --to 20080906120000

##  __ Command line options

  * `--domains` \- the domains who's repos should be rolledback
  * `--all` \- revert all applied migrations
  * `--step` / `-n` \- revert n number of applied migrations
  * `--to` / `-v` \- revert all migrations down to and including version
  * `--quiet` \- do not log migration commands
  * `--prefix` \- the prefix to run migrations on
  * `--pool-size` \- the pool size if the repository is started only for the task (defaults to 1)
  * `--log-sql` \- log the raw sql migrations are running
  * `--tenants` \- roll back tenant migrations
  * `--only-tenants` \- in combo with `--tenants`, only rolls back the provided tenants, e.g `tenant1,tenant2,tenant3`
  * `--except-tenants` \- in combo with `--tenants`, does not rollback the provided tenants, e.g `tenant1,tenant2,tenant3`


