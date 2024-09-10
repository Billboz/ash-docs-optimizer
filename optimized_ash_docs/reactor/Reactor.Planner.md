# Reactor.Planner — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Planner (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- plan(reactor)
- plan!(reactor)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Planner (reactor v0.9.1)

Build an execution plan for a Reactor.

Converts any unplanned steps into vertices in a graph with directed edges between them representing their dependencies (arguments).

#  __ Summary

##  Functions

plan(reactor)

Build an execution plan for a Reactor.

plan!(reactor)

Raising version of `plan/1`.

#  __ Functions

__ Link to this function

# plan(reactor)

[ __ View Source ](external_link)
    
    
    @spec plan([Reactor.t](external_link)()) :: {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Build an execution plan for a Reactor.

Builds a graph of the step dependencies, resolves them and then builds an execution plan.

__ Link to this function

# plan!(reactor)

[ __ View Source ](external_link)
    
    
    @spec plan!([Reactor.t](external_link)()) :: [Reactor.t](external_link)() | [no_return](external_link)()

Raising version of `plan/1`.
