# Change Log — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v0.1.3](external_link) (2024-05-31)
    - __ Bug Fixes:
  - __ [v0.1.2](external_link) (2024-05-11)
  - __ [v0.1.2-rc.1](external_link) (2024-05-06)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.2-rc.0](external_link) (2024-04-15)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.1](external_link) (2023-10-12)
    - __ Improvements:
  - __ [v0.1.0](external_link) (2023-10-12)
    - __ Improvements:

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v0.1.3](external_link) (2024-05-31)

###  __ Bug Fixes:

  * use [`Ecto.ParameterizedType.init/2`](external_link)

  * handle new/old ecto parameterized type format




##  __ [v0.1.2](external_link) (2024-05-11)

##  __ [v0.1.2-rc.1](external_link) (2024-05-06)

###  __ Bug Fixes:

  * properly scope deletes to the records in question

  * update ash_sqlite to get `ilike` behavior fix




###  __ Improvements:

  * support `contains` function



##  __ [v0.1.2-rc.0](external_link) (2024-04-15)

###  __ Bug Fixes:

  * reenable mix tasks that we need to call



###  __ Improvements:

  * support [`mix ash.rollback`](3.0.8/Mix.Tasks.Ash.Rollback.html)

  * support Ash 3.0, leverage `ash_sql` package

  * fix datetime migration type discovery




##  __ [v0.1.1](external_link) (2023-10-12)

###  __ Improvements:

  * add `SqliteMigrationDefault`

  * support query aggregates




##  __ [v0.1.0](external_link) (2023-10-12)

###  __ Improvements:

  * Port and adjust `AshPostgres` to [`AshSqlite`](external_link)



[ ← Previous Page  DSL: AshSqlite.DataLayer  ](external_link)
