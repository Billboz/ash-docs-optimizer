# Reactor.Executor.Hooks — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Executor.Hooks (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- complete(reactor, result, context)
- error(reactor, reason, context)
- event(reactor, event, step, context)
- get_process_contexts(reactor)
- halt(reactor, context)
- init(reactor, context)
- set_process_contexts(contexts)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Executor.Hooks (reactor v0.9.1)

Handles the execution of reactor middleware hooks.

#  __ Summary

##  Functions

complete(reactor, result, context)

Run the completion hooks allowing the result to be replaced

error(reactor, reason, context)

Run the error hooks allowing the error to be replaced

event(reactor, event, step, context)

Emit a step event.

get_process_contexts(reactor)

Run any get_process_context hooks

halt(reactor, context)

Run the halt hooks collecting the new context as it goes

init(reactor, context)

Run the init hooks collecting the new context as it goes

set_process_contexts(contexts)

Run set_process_context hooks given the result of `get_process_contexts/1`

#  __ Functions

__ Link to this function

# complete(reactor, result, context)

[ __ View Source ](external_link)
    
    
    @spec complete([Reactor.t](external_link)(), [any](external_link)(), [Reactor.context](external_link)()) ::
      {:ok, [any](external_link)()} | {:error, [any](external_link)()}

Run the completion hooks allowing the result to be replaced

__ Link to this function

# error(reactor, reason, context)

[ __ View Source ](external_link)
    
    
    @spec error([Reactor.t](external_link)(), [any](external_link)(), [Reactor.context](external_link)()) :: {:error, [any](external_link)()}

Run the error hooks allowing the error to be replaced

__ Link to this function

# event(reactor, event, step, context)

[ __ View Source ](external_link)
    
    
    @spec event(
      [Reactor.t](external_link)(),
      [Reactor.Middleware.step_event](external_link)(),
      [Reactor.Step.t](external_link)(),
      [Reactor.context](external_link)()
    ) :: :ok

Emit a step event.

__ Link to this function

# get_process_contexts(reactor)

[ __ View Source ](external_link)
    
    
    @spec get_process_contexts([Reactor.t](external_link)()) :: %{
      optional([Reactor.Middleware.t](external_link)()) => [any](external_link)()
    }

Run any get_process_context hooks

__ Link to this function

# halt(reactor, context)

[ __ View Source ](external_link)
    
    
    @spec halt([Reactor.t](external_link)(), [Reactor.context](external_link)()) ::
      {:ok, [Reactor.context](external_link)()} | {:error, [any](external_link)()}

Run the halt hooks collecting the new context as it goes

__ Link to this function

# init(reactor, context)

[ __ View Source ](external_link)
    
    
    @spec init([Reactor.t](external_link)(), [Reactor.context](external_link)()) ::
      {:ok, [Reactor.context](external_link)()} | {:error, [any](external_link)()}

Run the init hooks collecting the new context as it goes

__ Link to this function

# set_process_contexts(contexts)

[ __ View Source ](external_link)
    
    
    @spec set_process_contexts(%{optional([Reactor.Middleware.t](external_link)()) => [any](external_link)()}) :: :ok

Run set_process_context hooks given the result of `get_process_contexts/1`
