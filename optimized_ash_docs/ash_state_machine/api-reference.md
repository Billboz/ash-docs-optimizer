# API Reference — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) API Reference ash_state_machine v0.2.6
  - __ Modules
  - __ Mix Tasks

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash_state_machine v0.2.6

##  __ Modules

[AshStateMachine](external_link)

Provides tools for defining and working with resource-backed state machines.

[AshStateMachine.BuiltinChanges](external_link)

Changes for working with AshStateMachine resources.

[AshStateMachine.Charts](external_link)

Returns a mermaid flow chart of a given state machine resource.

[AshStateMachine.Checks.ValidNextState](external_link)

A policy for pre_flight checking if a state transition is allowed.

[AshStateMachine.Errors.InvalidInitialState](external_link)

Used when an initial state is set that is not a valid initial state

[AshStateMachine.Errors.NoMatchingTransition](external_link)

Used when a state change occurs in an action with no matching transition

[AshStateMachine.Info](external_link)

Introspection helpers for [`AshStateMachine`](external_link)

[AshStateMachine.StateMachine.Options](external_link)

Mod Docs

[AshStateMachine.StateMachine.Transitions.Transition](external_link)

Mod docs

[AshStateMachine.StateMachine.Transitions.Transition.Options](external_link)

Mod Docs

[AshStateMachine.Transition](external_link)

The configuration for an transition.

[AshStateMachine.Transitions](external_link)

MOD DOCS

##  __ Mix Tasks

[mix ash_state_machine.generate_flow_charts](external_link)

Generates a Mermaid Flow Chart for each [`Ash.Resource`](3.4.1/Ash.Resource.html) with the [`AshStateMachine`](external_link) extension alongside the resource.

[ Next Page →  Home  ](external_link)
