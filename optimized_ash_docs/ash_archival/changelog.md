# Change Log — ash_archival v1.0.3

Project: ash_archival v1.0.3

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v1.0.3](external_link) (2024-08-16)
    - __ Improvements:
  - __ [v1.0.2](external_link) (2024-07-11)
    - __ Improvements:
  - __ [v1.0.1](external_link) (2024-06-23)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.0.0](external_link) (2024-05-10)
    - __ Improvements:
  - __ [v1.0.0](external_link) (2024-05-10)
    - __ Improvements:
  - __ [v1.0.0](external_link) (2024-05-10)
    - __ Improvements:
  - __ [v1.0.0](external_link)
    - __ Breaking Changes:
    - __ Improvements:
    - __ Improvements:

__

Search documentation of ash_archival __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v1.0.3](external_link) (2024-08-16)

###  __ Improvements:

  * deprecate exclude_upsert_actions, as it had unintended side effects

  * add `exclude_upsert_actions` configuration




##  __ [v1.0.2](external_link) (2024-07-11)

###  __ Improvements:

  * only add archive attribute if it doesn't already exists



##  __ [v1.0.1](external_link) (2024-06-23)

###  __ Bug Fixes:

  * set `ash_archival` on the bulk destroy read query

  * ensure `ash_archival: true` is set on all destroy invocations




###  __ Improvements:

  * update ash for `atomic_upgrade_with` feature



##  __ [v1.0.0](external_link) (2024-05-10)

###  __ Improvements:

  * support `base_filter? true` option



##  __ [v1.0.0](external_link) (2024-05-10)

###  __ Improvements:

  * support `base_filter? true` option



##  __ [v1.0.0](external_link) (2024-05-10)

###  __ Improvements:

  * support `base_filter? true` option



##  __ [v1.0.0](external_link)

The changelog is being restarted. See `/documentation/0.x-CHANGELOG.md` in GitHub for previous changelogs.

###  __ Breaking Changes:

  * [AshArchival] don't use `base_filter` anymore, allowing for more flexible design



###  __ Improvements:

  * [AshArchival] support filters on upsert actions



###  __ Improvements:

  * [AshArchival] rewritten to support atomics & bulk actions to take advantage of new bulk actions
  * [AshArchival] add `exclude_read_actions` to exclude some actions from filtering archived items
  * [AshArchival] add `exclude_destroy_actions` to exclude some actions from being intercepted



[ ← Previous Page  Home  ](external_link)

[ Next Page →  Get Started with AshArchival  ](external_link)
