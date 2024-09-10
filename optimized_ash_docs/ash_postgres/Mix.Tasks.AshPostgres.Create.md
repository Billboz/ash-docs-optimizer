# mix ash_postgres.create — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) mix ash_postgres.create (ash_postgres v2.3.1)
  - __ Examples
  - __ Command line options

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_postgres.create (ash_postgres v2.3.1)

Create the storage for repos in all resources for the given (or configured) domains.

##  __ Examples
    
    
    mix ash_postgres.create
    mix ash_postgres.create --domains MyApp.Domain1,MyApp.Domain2

##  __ Command line options

  * `--domains` \- the domains who's repos you want to migrate.
  * `--quiet` \- do not log output
  * `--no-compile` \- do not compile before creating
  * `--no-deps-check` \- do not compile before creating


