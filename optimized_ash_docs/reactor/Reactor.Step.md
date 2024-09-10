# Reactor.Step — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Step behaviour (reactor v0.9.1)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- capability()
- compensate_result()
- run_result()
- step()
- t()
- undo_result()
- __ Callbacks
- async?(step)
- can?(step, capability)
- compensate(reason, arguments, context, options)
  - __ Arguments
  - __ Return values
- run(arguments, context, options)
  - __ Arguments
  - __ Return values
- undo(value, arguments, context, options)
  - __ Arguments
  - __ Return values
- __ Functions
- async?(step)
- can?(step, capability)
- compensate(step, reason, arguments, context)
- run(step, arguments, context)
- undo(step, value, arguments, context)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Step behaviour (reactor v0.9.1)

The Step behaviour and struct.

Implement this behaviour to make steps for your Reactor.

#  __ Summary

##  Types

capability()

Optional capabilities which may be implemented by the step module.

compensate_result()

Possible valid return values for the `compensate/4` callback.

run_result()

Possible valid return values for the `run/3` callback.

step()

t()

undo_result()

Possible valid return values for the `undo/4` callback.

##  Callbacks

async?(step)

Detect if the step can be run asynchronously at runtime.

can?(step, capability)

Detect the capabilities of the step at runtime.

compensate(reason, arguments, context, options)

Compensate for the failure of the step.

run(arguments, context, options)

Execute the step.

undo(value, arguments, context, options)

Undo a previously successful execution of the step.

##  Functions

async?(step)

Is the step able to be run asynchronously?

can?(step, capability)

Find out of a step has a capability.

compensate(step, reason, arguments, context)

Compensate a step

run(step, arguments, context)

Execute a step.

undo(step, value, arguments, context)

Undo a step

#  __ Types

__ Link to this type

# capability()

[ __ View Source ](external_link)
    
    
    @type capability() :: :compensate | :undo

Optional capabilities which may be implemented by the step module.

This allows us to optimise out calls steps which cannot be undone, etc.

__ Link to this type

# compensate_result()

[ __ View Source ](external_link)
    
    
    @type compensate_result() ::
      {:continue, value :: [any](external_link)()}
      | :ok
      | :retry
      | {:error | :retry, reason :: [any](external_link)()}

Possible valid return values for the `compensate/4` callback.

__ Link to this type

# run_result()

[ __ View Source ](external_link)
    
    
    @type run_result() ::
      {:ok, value :: [any](external_link)()}
      | {:ok, value :: [any](external_link)(), [t()]}
      | :retry
      | {:halt | :error | :retry, reason :: [any](external_link)()}

Possible valid return values for the `run/3` callback.

__ Link to this type

# step()

[ __ View Source ](external_link)
    
    
    @type step() :: [module](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Step{
      arguments: [[Reactor.Argument.t](external_link)()],
      async?: [boolean](external_link)() | ([keyword](external_link)() -> [boolean](external_link)()),
      context: %{optional([atom](external_link)()) => [any](external_link)()},
      impl: [module](external_link)() | {[module](external_link)(), [keyword](external_link)()},
      max_retries: [non_neg_integer](external_link)() | :infinity,
      name: [any](external_link)(),
      ref: nil | [reference](external_link)(),
      transform: nil | ([any](external_link)() -> [any](external_link)()) | {[module](external_link)(), [keyword](external_link)()} | [mfa](external_link)()
    }

__ Link to this type

# undo_result()

[ __ View Source ](external_link)
    
    
    @type undo_result() :: :ok | :retry | {:retry | :error, reason :: [any](external_link)()}

Possible valid return values for the `undo/4` callback.

#  __ Callbacks

__ Link to this callback

# async?(step)

[ __ View Source ](external_link)
    
    
    @callback async?(step :: t()) :: [boolean](external_link)()

Detect if the step can be run asynchronously at runtime.

> This callback is automatically defined by `use Reactor.Step` however you're free to override it if you need a specific behaviour.

This callback is called when Reactor is deciding whether to run a step asynchronously.

The default implementation of this callback checks returns the the value of the steps's `async?` key if it is boolean, or calls it with the steps's options if it is a function.

__ Link to this callback

# can?(step, capability)

[ __ View Source ](external_link)
    
    
    @callback can?(step :: t(), capability()) :: [boolean](external_link)()

Detect the capabilities of the step at runtime.

> This callback is automatically defined by `use Reactor.Step` however you're free to override it if you need specific behaviour.

Whenever Reactor would like to either undo a change made by the step, or compensate a step failure this callback is called to detect whether the step module is capable of the desired action.

The default implementation of this callback checks to see if the optional callback is defined on the current module.

__ Link to this callback

# compensate(reason, arguments, context, options)

[ __ View Source ](external_link) (optional)
    
    
    @callback compensate(
      reason :: [any](external_link)(),
      arguments :: [Reactor.inputs](external_link)(),
      context :: [Reactor.context](external_link)(),
      options :: [keyword](external_link)()
    ) :: compensate_result()

Compensate for the failure of the step.

> Do not implement this callback if your step doesn't support compensation.

If `run/3` returned an error then this callback will be called the error reason and the original arguments.

This provides you the opportunity to handle the error in a number of ways and direct the reactor as to what to do next.

##  __ Arguments

  * `reason` \- the error reason returned from `run/3`.
  * `arguments` \- the arguments passed to the step.
  * `context` \- the reactor context.
  * `options` \- a keyword list of options provided to the step (if any).



##  __ Return values

  * `{:continue, value}` if you're able to provide a valid result for the step (perhaps by re-running the original computation) then return that within a `:continue` tuple and execution will continue as planned.
  * `:ok` the step was successfully compensated and the reactor should continue undoing upstream changes.
  * `:retry` or `{:retry, reason}` if you would like the reactor to attempt to re-run the step. You can optionally supply an error reason which will be used in the event that the step runs out of retries, otherwise a [`Reactor.Error.Invalid.RetriesExceededError`](external_link) will be used.
  * `{:error, reason}` if compensation was unsuccessful.



__ Link to this callback

# run(arguments, context, options)

[ __ View Source ](external_link)
    
    
    @callback run(
      arguments :: [Reactor.inputs](external_link)(),
      context :: [Reactor.context](external_link)(),
      options :: [keyword](external_link)()
    ) :: run_result()

Execute the step.

This is the function that implements the behaviour you wish to execute. You will receive arguments as per the `t:Step.t` definition along with their corresponding values as a map and a copy of the current reactor context.

##  __ Arguments

  * `arguments` \- A map of arguments as per the `t:Step.t` definition we're called from.
  * `context` \- The reactor context.
  * `options` \- A keyword list of options provided to the step (if any).



##  __ Return values

  * `{:ok, value}` the step completed successfully it returns the value in an ok tuple.
  * `{:ok, value, [step]}` the step completed successfully and wants to add new steps to the reactor.
  * `{:error, reason}` the if step failed, return an error tuple.
  * `:retry` or `{:retry, reason}` the step failed, but is retryable. You can optionally supply an error reason which will be used in the event that the step runs out of retries, otherwise a `Reactor.Error.RetriesExceededError` will be used.
  * `{:halt, reason}` terminate (or pause) reactor execution. If there are actively running steps the reactor will wait for them to finish and then return the incomplete state for later resumption.



__ Link to this callback

# undo(value, arguments, context, options)

[ __ View Source ](external_link) (optional)
    
    
    @callback undo(
      value :: [any](external_link)(),
      arguments :: [Reactor.inputs](external_link)(),
      [Reactor.context](external_link)(),
      options :: [keyword](external_link)()
    ) :: undo_result()

Undo a previously successful execution of the step.

> Do not implement this callback if your step doesn't support undoing.

This callback is called when the reactor encounters an unhandled error later in it's execution run and must undo the work previously done.

##  __ Arguments

  * `value` \- the return value of the previously successful call to `run/3`.
  * `arguments` \- the arguments passed to the step.
  * `context` \- the reactor context.
  * `options` \- a keyword list of options provided to the step (if any).



##  __ Return values

  * `:ok` the step was successfully undo and the reactor should continue rolling back.
  * `{:error, reason}` there was an error while attempting to compensate. The reactor will collect the error and continue rolling back.
  * `:retry` if you would like the reactor to attempt to undo the again later
    * possibly in the case of a network failure for example.



#  __ Functions

__ Link to this function

# async?(step)

[ __ View Source ](external_link)
    
    
    @spec async?(t()) :: [boolean](external_link)()

Is the step able to be run asynchronously?

__ Link to this function

# can?(step, capability)

[ __ View Source ](external_link)
    
    
    @spec can?(t(), capability()) :: [boolean](external_link)()

Find out of a step has a capability.

__ Link to this function

# compensate(step, reason, arguments, context)

[ __ View Source ](external_link)
    
    
    @spec compensate(
      t(),
      reason :: [any](external_link)(),
      arguments :: [Reactor.inputs](external_link)(),
      context :: [Reactor.context](external_link)()
    ) :: compensate_result()

Compensate a step

__ Link to this function

# run(step, arguments, context)

[ __ View Source ](external_link)
    
    
    @spec run(t(), arguments :: [Reactor.inputs](external_link)(), context :: [Reactor.context](external_link)()) ::
      run_result()

Execute a step.

__ Link to this function

# undo(step, value, arguments, context)

[ __ View Source ](external_link)
    
    
    @spec undo(
      t(),
      value :: [any](external_link)(),
      arguments :: [Reactor.inputs](external_link)(),
      context :: [Reactor.context](external_link)()
    ) ::
      undo_result()

Undo a step
