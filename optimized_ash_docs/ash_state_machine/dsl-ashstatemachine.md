# DSL: AshStateMachine — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) DSL: AshStateMachine
  - __ state_machine
    - __ Nested DSLs
    - __ Options
  - __ state_machine.transitions
    - __ Wildcards
    - __ Nested DSLs
  - __ state_machine.transitions.transition
    - __ Arguments
    - __ Options
    - __ Introspection

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) DSL: AshStateMachine

Provides tools for defining and working with resource-backed state machines.

##  __ state_machine

###  __ Nested DSLs

  * transitions
    * transition



###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`initial_states`| `list(atom)`| | The allowed starting states of this state machine.  
`deprecated_states`| `list(atom)`| `[]`| A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.  
`extra_states`| `list(atom)`| `[]`| A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.  
`state_attribute`| `atom`| `:state`| The attribute to store the state in.  
`default_initial_state`| `atom`| | The default initial state  
  
##  __ state_machine.transitions

###  __ Wildcards

Use `:*` to represent "any action" when used in place of an action, or "any state" when used in place of a state.

For example:
    
    
    transition :*, from: :*, to: :*

The full list of states is derived at compile time from the transitions. Use the `extra_states` to express that certain types should be included in that list even though no transitions go to/from that state explicitly. This is necessary for cases where there are states that use `:*` and no transition explicitly leads to that transition.

###  __ Nested DSLs

  * transition



##  __ state_machine.transitions.transition
    
    
    transition action

###  __ Arguments

Name| Type| Default| Docs  
---|---|---|---  
`action`| `atom`| | The corresponding action that is invoked for the transition. Use `:*` to allow any update action to perform this transition.  
  
###  __ Options

Name| Type| Default| Docs  
---|---|---|---  
`from`| `list(atom) | atom`| | The states in which this action may be called. If not specified, then any state is accepted. Use `:*` to refer to all states.  
`to`| `list(atom) | atom`| | The states that this action may move to. If not specified, then any state is accepted. Use `:*` to refer to all states.  
  
###  __ Introspection

Target: [`AshStateMachine.Transition`](external_link)

[ ← Previous Page  Working with Ash.can?  ](external_link)

[ Next Page →  Change Log  ](external_link)
