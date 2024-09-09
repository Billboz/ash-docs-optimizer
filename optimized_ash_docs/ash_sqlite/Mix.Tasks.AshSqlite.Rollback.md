# mix ash_sqlite.rollback — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) mix ash_sqlite.rollback (ash_sqlite v0.1.3)
  - __ Examples
  - __ Command line options

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_sqlite.rollback (ash_sqlite v0.1.3)

Reverts applied migrations in the given repository. Migrations are expected at "priv/YOUR_REPO/migrations" directory of the current application but it can be configured by specifying the `:priv` key under the repository configuration. Runs the latest applied migration by default. To roll back to a version number, supply `--to version_number`. To roll back a specific number of times, use `--step n`. To undo all applied migrations, provide `--all`.

This is only really useful if your domain or domains only use a single repo. If you have multiple repos and you want to run a single migration and/or migrate/roll them back to different points, you will need to use the ecto specific task, [`mix ecto.migrate`](external_link) and provide your repo name.

##  __ Examples
    
    
    mix ash_sqlite.rollback
    mix ash_sqlite.rollback -r Custom.Repo
    mix ash_sqlite.rollback -n 3
    mix ash_sqlite.rollback --step 3
    mix ash_sqlite.rollback -v 20080906120000
    mix ash_sqlite.rollback --to 20080906120000

##  __ Command line options

  * `--domains` \- the domains who's repos should be rolledback
  * `--all` \- revert all applied migrations
  * `--step` / `-n` \- revert n number of applied migrations
  * `--to` / `-v` \- revert all migrations down to and including version
  * `--quiet` \- do not log migration commands
  * `--pool-size` \- the pool size if the repository is started only for the task (defaults to 1)
  * `--log-sql` \- log the raw sql migrations are running


