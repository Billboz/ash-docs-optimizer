# Change Log — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) Change Log
  - __ [v0.2.6](external_link) (2024-08-31)
    - __ Bug Fixes:
  - __ [v0.2.5](external_link) (2024-07-13)
    - __ Improvements:
  - __ [v0.2.4](external_link) (2024-06-17)
    - __ Bug Fixes:
  - __ [v0.2.3](external_link) (2024-05-10)
  - __ [v0.2.3-rc.1](external_link) (2024-05-04)
    - __ Improvements:
  - __ [v0.2.3-rc.0](external_link) (2024-03-29)
    - __ Improvements:
  - __ [v0.2.2](external_link) (2023-09-15)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v0.2.1](external_link) (2023-09-08)
    - __ Bug Fixes:
  - __ [v0.2.0](external_link) (2023-09-08)
    - __ Features:
    - __ Improvements:
  - __ [v0.1.5](external_link) (2023-08-04)
    - __ Improvements:
  - __ [v0.1.4](external_link) (2023-05-03)
    - __ Bug Fixes:
  - __ [v0.1.3](external_link) (2023-04-28)
    - __ Bug Fixes:
  - __ [v0.1.2](external_link) (2023-04-28)
  - __ [v0.1.1](external_link) (2023-04-23)
    - __ Improvements:
  - __ [v0.1.0](external_link) (2023-04-23)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](external_link) for commit guidelines.

##  __ [v0.2.6](external_link) (2024-08-31)

###  __ Bug Fixes:

  * don't return tuple from `valid_next_state`



##  __ [v0.2.5](external_link) (2024-07-13)

###  __ Improvements:

  * simplify atomic state transition with new ash feature



##  __ [v0.2.4](external_link) (2024-06-17)

###  __ Bug Fixes:

  * support accepting the `:state` attribute



##  __ [v0.2.3](external_link) (2024-05-10)

##  __ [v0.2.3-rc.1](external_link) (2024-05-04)

###  __ Improvements:

  * policy for including state machine in `can?` checks

  * optimize atomic state transition check

  * add atomic implementation




##  __ [v0.2.3-rc.0](external_link) (2024-03-29)

###  __ Improvements:

  * update to Ash 3.0



##  __ [v0.2.2](external_link) (2023-09-15)

###  __ Bug Fixes:

  * scrub `:*` from the list of states

  * proper entity path in replace logic




###  __ Improvements:

  * Add `possible_next_states` helper. (#9)

  * Add `possible_next_states` helper.

  * detect states used that don't exist and log an error




##  __ [v0.2.1](external_link) (2023-09-08)

###  __ Bug Fixes:

  * Allow `next_state` to to match transitions from *. (#7)



##  __ [v0.2.0](external_link) (2023-09-08)

###  __ Features:

  * Add `next_state` builtin change. (#6)



###  __ Improvements:

  * exclude star from state_machine_all_states/1 to avoid inclusion in add_attribuet builder (#4)



##  __ [v0.1.5](external_link) (2023-08-04)

###  __ Improvements:

  * support :* in states



##  __ [v0.1.4](external_link) (2023-05-03)

###  __ Bug Fixes:

  * Rename `from` to `old_state` in `NoMatchingTransition` error (#3)



##  __ [v0.1.3](external_link) (2023-04-28)

###  __ Bug Fixes:

  * == not != for checking all states



##  __ [v0.1.2](external_link) (2023-04-28)

##  __ [v0.1.1](external_link) (2023-04-23)

###  __ Improvements:

  * make state diagrams the default chart



##  __ [v0.1.0](external_link) (2023-04-23)

###  __ Features:

  * add mix task `ash_state_machine.generate_flow_charts` (#1)



###  __ Bug Fixes:

  * action does not uniquely identify a transition

  * require `allow_nil? false` on state attribute




###  __ Improvements:

  * require `initial_states`

  * fix lint/credo, handle all changeset types

  * require from/to

  * flow chart generation

  * support `:*` as a transition action name to match all




[ ← Previous Page  DSL: AshStateMachine  ](external_link)
