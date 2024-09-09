# Getting Started with State Machines — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) Getting Started with State Machines
  - __ Get familiar with Ash resources
  - __ Bring in the ash_state_machine dependency
  - __ Add the extension to your resource
  - __ Add initial states, and a default initial state
  - __ Add allowed transitions
  - __ Use `transition_state` in your actions
    - __ For simple/static state transitions
    - __ For dynamic/conditional state transitions
  - __ Making a resource into a state machine

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) Getting Started with State Machines

##  __ Get familiar with Ash resources

If you haven't already, read the [Ash Getting Started Guide](get-started.html), and familiarize yourself with Ash and Ash resources.

##  __ Bring in the ash_state_machine dependency
    
    
    {:ash_state_machine, "~> 0.2.6"}

##  __ Add the extension to your resource
    
    
    use Ash.Resource,
      extensions: [AshStateMachine]

##  __ Add initial states, and a default initial state
    
    
    use Ash.Resource,
      extensions: [AshStateMachine]
    
    ...
    
    state_machine do
      initial_states [:pending]
      default_initial_state :pending
    end

##  __ Add allowed transitions
    
    
    state_machine do
      initial_states [:pending]
      default_initial_state :pending
    
      transitions do
        # `:begin` action can move state from `:pending` to `:started`/`:aborted`
        transition :begin, from: :pending, to: [:started, :aborted]
      end
    end

##  __ Use `transition_state` in your actions

###  __ For simple/static state transitions
    
    
    actions do
      update :begin do
        # for a static state transition
        change transition_state(:started)
      end
    end

###  __ For dynamic/conditional state transitions
    
    
    defmodule Start do
      use Ash.Resource.Change
    
      def change(changeset, _, _) do
        if ready_to_start?(changeset) do
          AshStateMachine.transition_state(changeset, :started)
        else
          AshStateMachine.transition_state(changeset, :aborted)
        end
      end
    end
    
    actions do
      update :begin do
        # for a dynamic state transition
        change Start
      end
    end

##  __ Making a resource into a state machine

The concept of a state machine (in this case a "Finite State Machine"), essentially involves a single `state`, with specified transitions between states. For example, you might have an order state machine with states `[:pending, :on_its_way, :delivered]`. However, you can't go from `:pending` to `:delivered` (probably), and so you want to only allow certain transitions in certain circumstances, i.e `:pending -> :on_its_way -> :delivered`.

This extension's goal is to help you write clear and clean state machines, with all of the extensibility and power of Ash resources and actions.

[ ← Previous Page  Home  ](external_link)

[ Next Page →  What is AshStateMachine?  ](external_link)
