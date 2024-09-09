# Change Log — ash_paper_trail v0.1.4

Project: ash_paper_trail v0.1.4

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v0.1.4](external_link) (2024-07-10)
    - __ Bug Fixes:
  - __ [v0.1.3](external_link) (2024-07-10)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.2](external_link) (2024-05-10)
    - __ Bug Fixes:
  - __ [v0.1.2-rc.0](external_link) (2024-03-30)
    - __ Improvements:
  - __ [v0.1.1](external_link) (2024-03-30)
    - __ Bug Fixes:
  - __ [v0.1.0](external_link) (2024-01-31)
    - __ Breaking Changes:
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:

__

Search documentation of ash_paper_trail __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v0.1.4](external_link) (2024-07-10)

###  __ Bug Fixes:

  * use [`String.to_atom/1`](external_link) instead of `to_existing_atom`



##  __ [v0.1.3](external_link) (2024-07-10)

###  __ Bug Fixes:

  * fix bulk destroy handling

  * Check if [`Ash.Domain`](3.1.2/Ash.Domain.html) requires authorization (#82)




###  __ Improvements:

  * pick new values off of result

  * allow opts to be passed to the generated relationship (#92)

  * add `include_versions?` option

  * add `atomic/3` callback to `CreateNewVersion`

  * set context that can be used in policies




##  __ [v0.1.2](external_link) (2024-05-10)

###  __ Bug Fixes:

  * fix tenant attribute must allow_nil?: true (#56)

  * Replace private in AshPaperTrail.Resource.Changes.CreateNewVersion with public (#54)




##  __ [v0.1.2-rc.0](external_link) (2024-03-30)

###  __ Improvements:

  * update to Ash 3.0



##  __ [v0.1.1](external_link) (2024-03-30)

###  __ Bug Fixes:

  * correctly carry over first primary key attribute type and constraints (#36)

  * carry over first primary key attribute type and constraints




##  __ [v0.1.0](external_link) (2024-01-31)

###  __ Breaking Changes:

  * remove defaults for ignored_attributes (#27)



###  __ Features:

  * Full diff change tracking mode (#18)



###  __ Bug Fixes:

  * Honour upstream attribute constraints. (#31)

  * properly set added relationship sources

  * take only existing attributes for private attributes

  * update deps and fix introspection




###  __ Improvements:

  * belongs_to_actor (#16)

  * add store_action_name option (#14)

  * support embedded resources (#10)

  * use api resources or registry (#6)

  * update to latest ash and use new docs

  * flesh out options/tools

  * make it all work, add some tests




[ ← Previous Page  DSL: AshPaperTrail.Domain  ](external_link)
