# Reactor.Executor.Sync — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Executor.Sync (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- run(reactor, state, step)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Executor.Sync (reactor v0.9.1)

Handle the synchronous execution of a single step, along with any mutations to the reactor or execution state.

#  __ Summary

##  Functions

run(reactor, state, step)

Try and run a step synchronously.

#  __ Functions

__ Link to this function

# run(reactor, state, step)

[ __ View Source ](external_link)
    
    
    @spec run([Reactor.t](external_link)(), [Reactor.Executor.State.t](external_link)(), [Reactor.Step.t](external_link)() | nil) ::
      {:continue | :recurse | :halt | :undo, [Reactor.t](external_link)(),
       [Reactor.Executor.State.t](external_link)()}

Try and run a step synchronously.
