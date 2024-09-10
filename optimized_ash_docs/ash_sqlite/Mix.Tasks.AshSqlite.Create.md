# mix ash_sqlite.create — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) mix ash_sqlite.create (ash_sqlite v0.1.3)
  - __ Examples
  - __ Command line options

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_sqlite.create (ash_sqlite v0.1.3)

Create the storage for repos in all resources for the given (or configured) domains.

##  __ Examples
    
    
    mix ash_sqlite.create
    mix ash_sqlite.create --domains MyApp.Domain1,MyApp.Domain2

##  __ Command line options

  * `--domains` \- the domains who's repos you want to migrate.
  * `--quiet` \- do not log output
  * `--no-compile` \- do not compile before creating
  * `--no-deps-check` \- do not compile before creating


