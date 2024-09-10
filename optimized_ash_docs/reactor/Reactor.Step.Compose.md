# Reactor.Step.Compose — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step.Compose (reactor v0.9.1)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step.Compose (reactor v0.9.1)

A built-in step which can embed one reactor inside another.

This is different to the `Builder.compose` and DSL `compose` methods. Those methods build a new reactor by combining the steps of the two input reactors, whereas this step expands the provided reactor at runtime and dynamically inserts it's steps into the running reactor.

If emitting the reactor's steps into the current reactor would be recursive, then the reactor is directly executed within the step using [`Reactor.run/4`](external_link).
