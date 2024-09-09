# mix ash_postgres.drop — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) mix ash_postgres.drop (ash_postgres v2.3.1)
  - __ Examples
  - __ Command line options

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_postgres.drop (ash_postgres v2.3.1)

Drop the storage for the given repository.

##  __ Examples
    
    
    mix ash_postgres.drop
    mix ash_postgres.drop -r MyApp.Repo1,MyApp.Repo2

##  __ Command line options

  * `--domains` \- the domains who's repos should be dropped
  * `-q`, `--quiet` \- run the command quietly
  * `-f`, `--force` \- do not ask for confirmation when dropping the database. Configuration is asked only when `:start_permanent` is set to true (typically in production)
  * `--force-drop` \- force the database to be dropped even if it has connections to it (requires PostgreSQL 13+)
  * `--no-compile` \- do not compile before dropping
  * `--no-deps-check` \- do not compile before dropping


