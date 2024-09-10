# Reactor.Executor — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Executor (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- run(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Executor (reactor v0.9.1)

The Reactor executor.

The executor handles the main loop of running a Reactor.

The algorithm is somewhat confusing, so here it is in pseudocode:

  1. Find any async tasks (from a previous loop) which are completed. Either recurse or continue if none are found.
  2. Find any async steps in the plan which are ready to run (they have no in-edges in the graph) and start as many as possible (given the constraints of `max_concurrency` and the state of the concurrency pool). Either start over, or continue if none are found.
  3. Find a single synchronous step which is ready to run and execute it. If there was one then recurse, otherwise continue.
  4. Check if there are no more steps left in the plan (there are zero vertices). If so, collect the return value and exit, otherwise recurse.



Whenever a step is run, whether run synchronously or asynchronously, the following happens:

  1. When the step is successful: a. If the step is undoable (ie `Step.can?(module, :undo)?` returns `true`) then the step and the result are stored in the Reactor's undo stack. b. If the result is depended upon by another step (the graph has out-edges for the step) _or_ the step is asking the reactor to halt then the result is stored in the Reactor's intermediate results. c. The step is removed from the graph (along with it's out-edges, freeing up it's dependents to run).
  2. When the step is unsuccessful (returns an error tuple or raises): a. If the step can be compensated then compensation is attempted up to five times before giving up. b. The reactor iterates it's undo stack calling undo on each step.
  3. When a step or compensation asks for a retry then the step is placed back in the graph to be run again next iteration.



#  __ Summary

##  Functions

run(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

Run a reactor.

#  __ Functions

__ Link to this function

# run(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec run([Reactor.t](external_link)(), [Reactor.inputs](external_link)(), [Reactor.context](external_link)(), [Reactor.options](external_link)()) ::
      {:ok, [any](external_link)()} | {:halted, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Run a reactor.

Provided a Reactor which has been planned and the correct inputs, then run the Reactor until completion, halting or failure.

You probably shouldn't call this directly, but use [`Reactor.run/4`](external_link) instead.
