# Reactor.Executor.Async — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Executor.Async (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- collect_remaining_tasks_for_shutdown(reactor, state)
- handle_completed_steps(reactor, state)
- start_steps(reactor, state, steps, supervisor \\\ {:via, PartitionSupervisor, {Reactor.TaskSupervisor, self()}})

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Executor.Async (reactor v0.9.1)

Handle the asynchronous execution of a batch of steps, along with any mutations to the reactor or execution state.

#  __ Summary

##  Functions

collect_remaining_tasks_for_shutdown(reactor, state)

When the Reactor needs to shut down for any reason, we need to await all the currently running asynchronous steps and delete any task vertices.

handle_completed_steps(reactor, state)

Handle zero or one completed async steps and then decide what to do.

start_steps(reactor, state, steps, supervisor \\\ {:via, PartitionSupervisor, {Reactor.TaskSupervisor, self()}})

Start as many of the provided steps as possible.

#  __ Functions

__ Link to this function

# collect_remaining_tasks_for_shutdown(reactor, state)

[ __ View Source ](external_link)
    
    
    @spec collect_remaining_tasks_for_shutdown([Reactor.t](external_link)(), [Reactor.Executor.State.t](external_link)()) ::
      {[Reactor.t](external_link)(), [Reactor.Executor.State.t](external_link)()}

When the Reactor needs to shut down for any reason, we need to await all the currently running asynchronous steps and delete any task vertices.

__ Link to this function

# handle_completed_steps(reactor, state)

[ __ View Source ](external_link)
    
    
    @spec handle_completed_steps([Reactor.t](external_link)(), [Reactor.Executor.State.t](external_link)()) ::
      {:recurse | :continue | :undo | :halt, [Reactor.t](external_link)(),
       [Reactor.Executor.State.t](external_link)()}

Handle zero or one completed async steps and then decide what to do.

__ Link to this function

# start_steps(reactor, state, steps, supervisor \\\ {:via, PartitionSupervisor, {Reactor.TaskSupervisor, self()}})

[ __ View Source ](external_link)
    
    
    @spec start_steps(
      [Reactor.t](external_link)(),
      [Reactor.Executor.State.t](external_link)(),
      [[Reactor.Step.t](external_link)()],
      [Supervisor.supervisor](external_link)()
    ) ::
      {:continue | :recurse, [Reactor.t](external_link)(), [Reactor.Executor.State.t](external_link)()}
      | {:error, [any](external_link)()}

Start as many of the provided steps as possible.

Takes into account he maximum concurrency and available work slots.
