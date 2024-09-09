# Change Log — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v2.1.2](external_link) (2024-09-03)
    - __ Bug Fixes:
  - __ [v2.1.1](external_link) (2024-08-01)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.1.0](external_link) (2024-07-26)
    - __ Bug Fixes:
  - __ [v2.0.4](external_link) (2024-06-13)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.0.3](external_link) (2024-06-05)
    - __ Bug Fixes:
  - __ [v2.0.2](external_link) (2024-05-22)
    - __ Bug Fixes:
  - __ [v2.0.1](external_link) (2024-05-17)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v2.0.0](external_link) (2024-04-30)
    - __ Improvements:
    - __ Bug Fixes:

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v2.1.2](external_link) (2024-09-03)

###  __ Bug Fixes:

  * spec `update_form` to accept functions of lists



##  __ [v2.1.1](external_link) (2024-08-01)

###  __ Bug Fixes:

  * Use :public? instead of :private? (#221)



###  __ Improvements:

  * raise an error on usage of old option name



##  __ [v2.1.0](external_link) (2024-07-26)

###  __ Bug Fixes:

  * ensure we `prepare_source` for all read action forms



##  __ [v2.0.4](external_link) (2024-06-13)

###  __ Bug Fixes:

  * various fixes for union form handling

  * properly fill union values on update

  * ensure changing union type is reflected in param transformer




###  __ Improvements:

  * honor `_union_type` when applying input



##  __ [v2.0.3](external_link) (2024-06-05)

###  __ Bug Fixes:

  * properly (i.e safely) encode ci strings to iodata and params

  * various union param handling fixes

  * properly transform nested params

  * make sure that _index is correctly updated before and after removal for sparse forms (#196) (#197)




##  __ [v2.0.2](external_link) (2024-05-22)

###  __ Bug Fixes:

  * don't assume all embeds have a create/update action



##  __ [v2.0.1](external_link) (2024-05-17)

###  __ Bug Fixes:

  * improve union handling

  * Convert entered action names into atoms for lookup in the resource (#187)

  * various fixes around union forms




###  __ Improvements:

  * support adding a form by inserting to an index



##  __ [v2.0.0](external_link) (2024-04-30)

The changelog is being restarted. See `/documentation/1.0-CHANGELOG.md` in GitHub for the old changelog.

###  __ Improvements:

  * [AshPhoenix.Form] better error message with hints for accepted/non accepted missing forms



###  __ Bug Fixes:

  * [AshPhoenix.Form] don't use `public_attributes?`, check for all accepted attributes. In Ash 3.0, private attributes can be accepted

  * [AshPhoenix.Form]

  * Pass the tenant to [`Ash.can/3`](3.4.1/Ash.html#can/3) and [`Ash.can?/3`](3.4.1/Ash.html#can?/3). (#165)

  * Pass the tenant to [`Ash.can/3`](3.4.1/Ash.html#can/3) and [`Ash.can?/3`](3.4.1/Ash.html#can?/3).




[ ← Previous Page  Union Forms  ](external_link)
