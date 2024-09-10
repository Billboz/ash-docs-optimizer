# mix ash_sqlite.drop — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) mix ash_sqlite.drop (ash_sqlite v0.1.3)
  - __ Examples
  - __ Command line options

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) mix ash_sqlite.drop (ash_sqlite v0.1.3)

Drop the storage for the given repository.

##  __ Examples
    
    
    mix ash_sqlite.drop
    mix ash_sqlite.drop -r MyApp.Domain1,MyApp.Domain2

##  __ Command line options

  * `--doains` \- the domains who's repos should be dropped
  * `-q`, `--quiet` \- run the command quietly
  * `-f`, `--force` \- do not ask for confirmation when dropping the database. Configuration is asked only when `:start_permanent` is set to true (typically in production)
  * `--no-compile` \- do not compile before dropping
  * `--no-deps-check` \- do not compile before dropping


