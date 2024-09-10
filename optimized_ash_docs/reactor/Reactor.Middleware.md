# Reactor.Middleware — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Middleware behaviour (reactor v0.9.1)
- __ Summary
  - Types
  - Callbacks
- __ Types
- context()
- error_or_errors()
- result()
- step_event()
- t()
- __ Callbacks
- complete(result, context)
- error(error_or_errors, context)
- event(step_event, t, context)
- get_process_context()
- halt(context)
- init(context)
- set_process_context(any)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Middleware behaviour (reactor v0.9.1)

The Middleware behaviour.

By implementing this behaviour you can modify the internal state of the Reactor during startup, execution and shutdown.

Middlewares can be added to the reactor either with the `middlewares` DSL section or by the `add_middleware/2`, etc, functions in [`Reactor.Builder`](external_link).

All callbacks in this behaviour are optional so you can define only the parts you need for your feature.

#  __ Summary

##  Types

context()

error_or_errors()

result()

step_event()

t()

##  Callbacks

complete(result, context)

The complete callback will be called with the successful result of the Reactor.

error(error_or_errors, context)

The error callback will be called the final error value(s) of the Reactor.

event(step_event, t, context)

Receive events about the execution of the Reactor.

get_process_context()

Called before starting an asynchronous step in order to retrieve any context information that needs to be passed into the new process.

halt(context)

The halt callback will be called with the Reactor context when halting.

init(context)

The init callback will be called with the Reactor context when starting up.

set_process_context(any)

Called inside a new asynchronous step in order to set context information into the new process.

#  __ Types

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: [Reactor.context](external_link)()

__ Link to this type

# error_or_errors()

[ __ View Source ](external_link)
    
    
    @type error_or_errors() :: [Exception.t](external_link)() | [[Exception.t](external_link)()]

__ Link to this type

# result()

[ __ View Source ](external_link)
    
    
    @type result() :: [any](external_link)()

__ Link to this type

# step_event()

[ __ View Source ](external_link)
    
    
    @type step_event() ::
      :compensate_complete
      | :compensate_retry
      | :run_retry
      | :undo_complete
      | :undo_retry
      | :undo_start
      | {:compensate_continue, [any](external_link)()}
      | {:compensate_error, error_or_errors()}
      | {:compensate_retry, [any](external_link)()}
      | {:compensate_start, [any](external_link)()}
      | {:process_start, [pid](external_link)()}
      | {:process_terminate, [pid](external_link)()}
      | {:run_complete, result()}
      | {:run_error, error_or_errors()}
      | {:run_halt, [any](external_link)()}
      | {:run_retry, [any](external_link)()}
      | {:run_start, arguments :: [Reactor.inputs](external_link)()}
      | {:undo_error, error_or_errors()}
      | {:undo_retry, [any](external_link)()}

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

#  __ Callbacks

__ Link to this callback

# complete(result, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback complete(result(), context()) :: {:ok, result()} | {:error, [any](external_link)()}

The complete callback will be called with the successful result of the Reactor.

This gives you the opportunity to modify the return value or to perform clean up of any non-reactor-managed resources (eg notifications).

Note that these callbacks are called in an arbitrary order meaning that the result value passed may have already been altered by another callback.

If any callback returns an error then any remaining callbacks will not be called.

__ Link to this callback

# error(error_or_errors, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback error(error_or_errors(), context()) :: :ok | {:error, [any](external_link)()}

The error callback will be called the final error value(s) of the Reactor.

This gives you the opportunity to modify the return value or to perform clean up of any non-reactor-managed resources (eg notifications).

Note that these callbacks are called in an arbitrary order meaning that the error value passed may have already been altered by another callback.

Here a return value of `:ok` will continue calls to other callbacks without modifying the error value.

__ Link to this callback

# event(step_event, t, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback event(step_event(), [Reactor.Step.t](external_link)(), [Reactor.context](external_link)()) :: :ok

Receive events about the execution of the Reactor.

This callback will block the Reactor, so it's encouraged that you do anything expensive in another process.

__ Link to this callback

# get_process_context()

[ __ View Source ](external_link) (optional)
    
    
    @callback get_process_context() :: [any](external_link)()

Called before starting an asynchronous step in order to retrieve any context information that needs to be passed into the new process.

This is most likely used by tracers to copy span information from the parent process to the child process.

__ Link to this callback

# halt(context)

[ __ View Source ](external_link) (optional)
    
    
    @callback halt(context()) :: {:ok, context()} | {:error, [any](external_link)()}

The halt callback will be called with the Reactor context when halting.

This allows you to clean up any non-reactor-managed resources or modify the context for later re-use by a future `init/1` callback.

__ Link to this callback

# init(context)

[ __ View Source ](external_link) (optional)
    
    
    @callback init(context()) :: {:ok, context()} | {:error, [any](external_link)()}

The init callback will be called with the Reactor context when starting up.

This gives you the opportunity to modify the context or to perform any initialisation of any non-reactor-managed resources (eg notifications).

__ Link to this callback

# set_process_context(any)

[ __ View Source ](external_link) (optional)
    
    
    @callback set_process_context([any](external_link)()) :: :ok

Called inside a new asynchronous step in order to set context information into the new process.

This is most likely used by tracers to copy span information from the parent process to the child process.
