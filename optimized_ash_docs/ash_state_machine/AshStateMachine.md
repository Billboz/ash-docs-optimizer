# AshStateMachine — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) AshStateMachine (ash_state_machine v0.2.6)
- __ Summary
  - Functions
- __ Functions
- possible_next_states(record)
- possible_next_states(record, action_name)
- state_machine(body)
- transition_state(changeset, target)

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) AshStateMachine (ash_state_machine v0.2.6)

Provides tools for defining and working with resource-backed state machines.

#  __ Summary

##  Functions

possible_next_states(record)

A reusable helper which returns all possible next states for a record (regardless of action).

possible_next_states(record, action_name)

A reusable helper which returns all possible next states for a record given a specific action.

state_machine(body)

Hello!

transition_state(changeset, target)

A utility to transition the state of a changeset, honoring the rules of the resource.

#  __ Functions

__

# possible_next_states(record)

[ __](external_link)
    
    
    @spec possible_next_states([Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)()) :: [[atom](external_link)()]

A reusable helper which returns all possible next states for a record (regardless of action).

__

# possible_next_states(record, action_name)

[ __](external_link)
    
    
    @spec possible_next_states([Ash.Resource.record](3.4.1/Ash.Resource.html#t:record/0)(), [atom](external_link)()) :: [[atom](external_link)()]

A reusable helper which returns all possible next states for a record given a specific action.

__

# state_machine(body)

[ __](external_link) (macro)

Hello!

__

# transition_state(changeset, target)

[ __](external_link)

A utility to transition the state of a changeset, honoring the rules of the resource.
