# AshStateMachine.Info — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) AshStateMachine.Info (ash_state_machine v0.2.6)
- __ Summary
  - Functions
- __ Functions
- state_machine_all_states(resource_or_dsl)
- state_machine_default_initial_state(dsl_or_extended)
- state_machine_default_initial_state!(dsl_or_extended)
- state_machine_deprecated_states(dsl_or_extended)
- state_machine_deprecated_states!(dsl_or_extended)
- state_machine_extra_states(dsl_or_extended)
- state_machine_extra_states!(dsl_or_extended)
- state_machine_initial_states(dsl_or_extended)
- state_machine_initial_states!(dsl_or_extended)
- state_machine_options(dsl_or_extended)
- state_machine_state_attribute(dsl_or_extended)
- state_machine_state_attribute!(dsl_or_extended)
- state_machine_transitions(dsl_or_extended)
- state_machine_transitions(resource_or_dsl, name)

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) AshStateMachine.Info (ash_state_machine v0.2.6)

Introspection helpers for [`AshStateMachine`](external_link)

#  __ Summary

##  Functions

state_machine_all_states(resource_or_dsl)

state_machine_default_initial_state(dsl_or_extended)

The default initial state

state_machine_default_initial_state!(dsl_or_extended)

The default initial state

state_machine_deprecated_states(dsl_or_extended)

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

state_machine_deprecated_states!(dsl_or_extended)

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

state_machine_extra_states(dsl_or_extended)

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

state_machine_extra_states!(dsl_or_extended)

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

state_machine_initial_states(dsl_or_extended)

The allowed starting states of this state machine.

state_machine_initial_states!(dsl_or_extended)

The allowed starting states of this state machine.

state_machine_options(dsl_or_extended)

state_machine DSL options

state_machine_state_attribute(dsl_or_extended)

The attribute to store the state in.

state_machine_state_attribute!(dsl_or_extended)

The attribute to store the state in.

state_machine_transitions(dsl_or_extended)

state_machine.transitions DSL entities

state_machine_transitions(resource_or_dsl, name)

#  __ Functions

__

# state_machine_all_states(resource_or_dsl)

[ __](external_link)
    
    
    @spec state_machine_all_states([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)() | [map](external_link)()) :: [[atom](external_link)()]

__

# state_machine_default_initial_state(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_default_initial_state(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The default initial state

__

# state_machine_default_initial_state!(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_default_initial_state!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The default initial state

__

# state_machine_deprecated_states(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_deprecated_states(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

__

# state_machine_deprecated_states!(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_deprecated_states!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A list of states that have been deprecated but are still valid. These will still be in the possible list of states, but `:*` will not include them.

__

# state_machine_extra_states(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_extra_states(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

__

# state_machine_extra_states!(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_extra_states!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

A list of states that may be used by transitions to/from `:*`. See the docs on wildcards for more.

__

# state_machine_initial_states(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_initial_states(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [[atom](external_link)()]} | :error

The allowed starting states of this state machine.

__

# state_machine_initial_states!(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_initial_states!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [[atom](external_link)()] | [no_return](external_link)()

The allowed starting states of this state machine.

__

# state_machine_options(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_options(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: %{
      required([atom](external_link)()) => [any](external_link)()
    }

state_machine DSL options

Returns a map containing the and any configured or default values.

__

# state_machine_state_attribute(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_state_attribute(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      {:ok, [atom](external_link)()} | :error

The attribute to store the state in.

__

# state_machine_state_attribute!(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_state_attribute!(dsl_or_extended :: [module](external_link)() | [map](external_link)()) ::
      [atom](external_link)() | [no_return](external_link)()

The attribute to store the state in.

__

# state_machine_transitions(dsl_or_extended)

[ __](external_link)
    
    
    @spec state_machine_transitions(dsl_or_extended :: [module](external_link)() | [map](external_link)()) :: [[struct](external_link)()]

state_machine.transitions DSL entities

__

# state_machine_transitions(resource_or_dsl, name)

[ __](external_link)
    
    
    @spec state_machine_transitions([Ash.Resource.t](3.4.1/Ash.Resource.html#t:t/0)() | [map](external_link)(), name :: [atom](external_link)()) :: [
      [AshStateMachine.Transition.t](external_link)()
    ]
