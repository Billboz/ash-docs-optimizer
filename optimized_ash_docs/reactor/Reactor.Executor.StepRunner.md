# Reactor.Executor.StepRunner — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Executor.StepRunner (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- run(reactor, state, step, concurrency_key)
- run_async(reactor, state, step, concurrency_key, process_contexts)
- undo(reactor, state, step, value, concurrency_key)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Executor.StepRunner (reactor v0.9.1)

Run an individual step, including compensation if possible.

#  __ Summary

##  Functions

run(reactor, state, step, concurrency_key)

Collect the arguments and and run a step, with compensation if required.

run_async(reactor, state, step, concurrency_key, process_contexts)

Run a step inside a task.

undo(reactor, state, step, value, concurrency_key)

Undo a step if possible.

#  __ Functions

__ Link to this function

# run(reactor, state, step, concurrency_key)

[ __ View Source ](external_link)
    
    
    @spec run(
      [Reactor.t](external_link)(),
      [Reactor.Executor.State.t](external_link)(),
      [Reactor.Step.t](external_link)(),
      [Reactor.Executor.ConcurrencyTracker.pool_key](external_link)()
    ) ::
      {:ok, [any](external_link)(), [[Reactor.Step.t](external_link)()]}
      | :retry
      | {:retry, [any](external_link)()}
      | {:error | :halt, [any](external_link)()}

Collect the arguments and and run a step, with compensation if required.

__ Link to this function

# run_async(reactor, state, step, concurrency_key, process_contexts)

[ __ View Source ](external_link)
    
    
    @spec run_async(
      [Reactor.t](external_link)(),
      [Reactor.Executor.State.t](external_link)(),
      [Reactor.Step.t](external_link)(),
      [Reactor.Executor.ConcurrencyTracker.pool_key](external_link)(),
      [map](external_link)()
    ) ::
      {:ok, [any](external_link)(), [[Reactor.Step.t](external_link)()]}
      | :retry
      | {:retry, [any](external_link)()}
      | {:error | :halt, [any](external_link)()}

Run a step inside a task.

This is a simple wrapper around `run/4` except that it emits more events.

__ Link to this function

# undo(reactor, state, step, value, concurrency_key)

[ __ View Source ](external_link)
    
    
    @spec undo(
      [Reactor.t](external_link)(),
      [Reactor.Executor.State.t](external_link)(),
      [Reactor.Step.t](external_link)(),
      [any](external_link)(),
      [Reactor.Executor.ConcurrencyTracker.pool_key](external_link)()
    ) :: :ok | {:error, [any](external_link)()}

Undo a step if possible.
