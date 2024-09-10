# Reactor.Executor.State — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Executor.State (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Executor.State (reactor v0.9.1)

Contains the reactor execution state.

This is run-time only information.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Executor.State{
      async?: [boolean](external_link)(),
      concurrency_key: [Reactor.Executor.ConcurrencyTracker.pool_key](external_link)(),
      current_tasks: %{required([Task.t](external_link)()) => [Reactor.Step.t](external_link)()},
      errors: [[any](external_link)()],
      halt_timeout: [pos_integer](external_link)() | :infinity,
      max_concurrency: [pos_integer](external_link)(),
      max_iterations: [pos_integer](external_link)() | :infinity,
      pool_owner: [boolean](external_link)(),
      retries: %{required([reference](external_link)()) => [pos_integer](external_link)()},
      started_at: [DateTime.t](external_link)(),
      timeout: [pos_integer](external_link)() | :infinity
    }
