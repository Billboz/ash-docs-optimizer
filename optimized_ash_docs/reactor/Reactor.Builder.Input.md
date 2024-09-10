# Reactor.Builder.Input — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Builder.Input (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- add_input(reactor, name, transform)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Builder.Input (reactor v0.9.1)

Handle adding inputs to Reactors for the builder.

You should not use this module directly, but instead use [`Reactor.Builder.add_input/3`](external_link).

#  __ Summary

##  Functions

add_input(reactor, name, transform)

Add a named input to the reactor.

#  __ Functions

__ Link to this function

# add_input(reactor, name, transform)

[ __ View Source ](external_link)
    
    
    @spec add_input(
      [Reactor.t](external_link)(),
      [any](external_link)(),
      nil | ([any](external_link)() -> [any](external_link)()) | {[Reactor.Step.step](external_link)(), [keyword](external_link)()}
    ) ::
      {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Add a named input to the reactor.
