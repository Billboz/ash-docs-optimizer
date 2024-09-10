# AshStateMachine.Checks.ValidNextState — ash_state_machine v0.2.6

Project: ash_state_machine v0.2.6

## Table of Contents

- [ __ View Source ](external_link) AshStateMachine.Checks.ValidNextState (ash_state_machine v0.2.6)
- __ Summary
  - Functions
- __ Functions
- auto_filter(actor, authorizer, opts)
- auto_filter_not(actor, authorizer, opts)
- check(actor, data, authorizer, opts)
- describe(_)
- filter(actor, context, options)
- reject(actor, authorizer, opts)
- requires_original_data?(_, _)
- strict_check(actor, authorizer, opts)
- strict_check_context(opts)
- type()

__

Search documentation of ash_state_machine __ __

__ Settings

#  [ __ View Source ](external_link) AshStateMachine.Checks.ValidNextState (ash_state_machine v0.2.6)

A policy for pre_flight checking if a state transition is allowed.

#  __ Summary

##  Functions

auto_filter(actor, authorizer, opts)

Callback implementation for [`Ash.Policy.Check.auto_filter/3`](3.4.1/Ash.Policy.Check.html#c:auto_filter/3).

auto_filter_not(actor, authorizer, opts)

check(actor, data, authorizer, opts)

Callback implementation for [`Ash.Policy.Check.check/4`](3.4.1/Ash.Policy.Check.html#c:check/4).

describe(_)

Callback implementation for [`Ash.Policy.Check.describe/1`](3.4.1/Ash.Policy.Check.html#c:describe/1).

filter(actor, context, options)

Callback implementation for [`Ash.Policy.FilterCheck.filter/3`](3.4.1/Ash.Policy.FilterCheck.html#c:filter/3).

reject(actor, authorizer, opts)

Callback implementation for [`Ash.Policy.FilterCheck.reject/3`](3.4.1/Ash.Policy.FilterCheck.html#c:reject/3).

requires_original_data?(_, _)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](3.4.1/Ash.Policy.Check.html#c:requires_original_data?/2).

strict_check(actor, authorizer, opts)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](3.4.1/Ash.Policy.Check.html#c:strict_check/3).

strict_check_context(opts)

type()

Callback implementation for [`Ash.Policy.Check.type/0`](3.4.1/Ash.Policy.Check.html#c:type/0).

#  __ Functions

__

# auto_filter(actor, authorizer, opts)

[ __](external_link)

Callback implementation for [`Ash.Policy.Check.auto_filter/3`](3.4.1/Ash.Policy.Check.html#c:auto_filter/3).

__

# auto_filter_not(actor, authorizer, opts)

[ __](external_link)

__

# check(actor, data, authorizer, opts)

[ __](external_link)

Callback implementation for [`Ash.Policy.Check.check/4`](3.4.1/Ash.Policy.Check.html#c:check/4).

__

# describe(_)

[ __](external_link)

Callback implementation for [`Ash.Policy.Check.describe/1`](3.4.1/Ash.Policy.Check.html#c:describe/1).

__

# filter(actor, context, options)

[ __](external_link)

Callback implementation for [`Ash.Policy.FilterCheck.filter/3`](3.4.1/Ash.Policy.FilterCheck.html#c:filter/3).

__

# reject(actor, authorizer, opts)

[ __](external_link)

Callback implementation for [`Ash.Policy.FilterCheck.reject/3`](3.4.1/Ash.Policy.FilterCheck.html#c:reject/3).

__

# requires_original_data?(_, _)

[ __](external_link)

Callback implementation for [`Ash.Policy.Check.requires_original_data?/2`](3.4.1/Ash.Policy.Check.html#c:requires_original_data?/2).

__

# strict_check(actor, authorizer, opts)

[ __](external_link)

Callback implementation for [`Ash.Policy.Check.strict_check/3`](3.4.1/Ash.Policy.Check.html#c:strict_check/3).

__

# strict_check_context(opts)

[ __](external_link)

__

# type()

[ __](external_link)

Callback implementation for [`Ash.Policy.Check.type/0`](3.4.1/Ash.Policy.Check.html#c:type/0).
