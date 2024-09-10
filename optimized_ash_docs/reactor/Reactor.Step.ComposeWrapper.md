# Reactor.Step.ComposeWrapper — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.ComposeWrapper (reactor v0.9.1)
  - __ Options

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.ComposeWrapper (reactor v0.9.1)

When doing run-time composition of Reactors we need to dynamically rewrite any dynamically emitted steps to have the correct namespace.

Yes, this gets hairy, fast.

##  __ Options

  * `original` \- the original value of the Step's `impl` key.
  * `prefix` \- a list of values to be placed in the `name` before the original value.



> #### Tip
> 
> This is dynamically injected into steps by [`Reactor.Step.Compose`](external_link).
> 
> Most likely you will never need to use this step directly.
