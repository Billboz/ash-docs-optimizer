# Change Log — ash_double_entry v1.0.6

Project: ash_double_entry v1.0.6

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v1.0.6](external_link) (2024-08-03)
    - __ Bug Fixes:
  - __ [v1.0.5](external_link) (2024-08-03)
    - __ Bug Fixes:
  - __ [v1.0.4](external_link) (2024-07-03)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.0.3](external_link) (2024-06-23)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v1.0.2](external_link) (2024-06-18)
    - __ Improvements:
  - __ [v1.0.1](external_link) (2024-05-11)
    - __ Bug Fixes:
  - __ [v1.0.0](external_link) (2024-05-10)
  - __ [v1.0.0-rc.1](external_link) (2024-04-29)
    - __ Improvements:
  - __ [v1.0.0-rc.0](external_link) (2024-04-01)
    - __ Breaking Changes:
    - __ Bug Fixes:
  - __ [v0.2.4](external_link) (2024-02-14)
    - __ Bug Fixes:
  - __ [v0.2.3](external_link) (2023-12-23)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.2.2](external_link) (2023-12-10)
    - __ Improvements:
  - __ [v0.2.1](external_link) (2023-12-10)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.2.0](external_link) (2023-12-06)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.1.2](external_link) (2023-08-19)
  - __ [v0.1.1](external_link) (2023-08-19)
    - __ Bug Fixes:
  - __ [v0.1.0](external_link) (2023-08-19)
    - __ Bug Fixes:
    - __ Improvements:

__

Search documentation of ash_double_entry __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v1.0.6](external_link) (2024-08-03)

###  __ Bug Fixes:

  * properly set authorize option when updating transfers



##  __ [v1.0.5](external_link) (2024-08-03)

###  __ Bug Fixes:

  * set `authorize?` properly when creating balances



##  __ [v1.0.4](external_link) (2024-07-03)

###  __ Bug Fixes:

  * better validations around atomics



###  __ Improvements:

  * allow skipping balance updates on request

  * don't destroy balances by default




##  __ [v1.0.3](external_link) (2024-06-23)

###  __ Bug Fixes:

  * set a default for `create_accept`



###  __ Improvements:

  * use a guaranteed-last ulid for `balance_as_of` calculation

  * accept attributes on transfer create

  * don't use raising variations of resource calls




##  __ [v1.0.2](external_link) (2024-06-18)

###  __ Improvements:

  * set context indicating that `ash_double_entry?` is performing an action



##  __ [v1.0.1](external_link) (2024-05-11)

###  __ Bug Fixes:

  * [AshDoubleEntry.Balance] use `a + -b`, instead of `a - b` (which is not supported by our AshPostgresExtension)



##  __ [v1.0.0](external_link) (2024-05-10)

##  __ [v1.0.0-rc.1](external_link) (2024-04-29)

###  __ Improvements:

  * update to support new atomics & bulk actions



##  __ [v1.0.0-rc.0](external_link) (2024-04-01)

###  __ Breaking Changes:

  * update to Ash 3.0



###  __ Bug Fixes:

  * correct amount_delta calculation from destorying (#13)



##  __ [v0.2.4](external_link) (2024-02-14)

###  __ Bug Fixes:

  * properly update future balances from destroys

  * incorrect balance when adding transfer later (#12)




##  __ [v0.2.3](external_link) (2023-12-23)

###  __ Bug Fixes:

  * make expression pure



###  __ Improvements:

  * support updating transfer's amount (#8)



##  __ [v0.2.2](external_link) (2023-12-10)

###  __ Improvements:

  * support updating transfers, but not important fields



##  __ [v0.2.1](external_link) (2023-12-10)

###  __ Bug Fixes:

  * use Money..add! For correct return

  * properly set context on account read in balance verification




###  __ Improvements:

  * support destroying transfers

  * set `context_to_opts` when constructing the query




##  __ [v0.2.0](external_link) (2023-12-06)

###  __ Features:

  * use AshMoney



###  __ Bug Fixes:

  * ensure transformers run before `BelongsToAttribute`

  * update ash for fix




###  __ Improvements:

  * migrate to AshMoney

  * update ash




##  __ [v0.1.2](external_link) (2023-08-19)

  * Documentation updates & AshHq indexing fixes



##  __ [v0.1.1](external_link) (2023-08-19)

###  __ Bug Fixes:

  * properly calculate balance_as_of_ulid when transfer is to or from account



##  __ [v0.1.0](external_link) (2023-08-19)

###  __ Bug Fixes:

  * create balances after transfer is created

  * don't require pagination




###  __ Improvements:

  * add CI & check commands

  * wrap up initial implementaiton, add guides

  * initial test suite & functionality




[ ← Previous Page  DSL: AshDoubleEntry.Transfer  ](external_link)
