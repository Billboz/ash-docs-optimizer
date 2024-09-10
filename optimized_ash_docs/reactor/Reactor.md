# Reactor — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor (reactor v0.9.1)
  - __ Usage
    - __ Options
- __ Summary
  - Types
  - Functions
- __ Types
- async_option()
- concurrency_key_option()
- context()
- context_arg()
- halt_timeout_option()
- inputs()
- max_concurrency_option()
- max_iterations_option()
- options()
- state()
- t()
- timeout_option()
- __ Functions
- is_reactor(reactor)
- run(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])
  - __ Arguments
  - __ Options
- run!(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor (reactor v0.9.1)

Reactor is a dynamic, concurrent, dependency resolving saga orchestrator.

##  __ Usage

You can construct a reactor using the [`Reactor`](external_link) Spark DSL:
    
    
    defmodule HelloWorldReactor do
      @moduledoc false
      use Reactor
    
      input :whom
    
      step :greet, Greeter do
        argument :whom, input(:whom)
      end
    
      return :greet
    end
    
    
    iex> Reactor.run(HelloWorldReactor, %{whom: "Dear Reader"})
    {:ok, "Hello, Dear Reader!"}

or you can build it programmatically:
    
    
    iex> reactor = Builder.new()
    ...> {:ok, reactor} = Builder.add_input(reactor, :whom)
    ...> {:ok, reactor} = Builder.add_step(reactor, :greet, Greeter, whom: {:input, :whom})
    ...> {:ok, reactor} = Builder.return(reactor, :greet)
    ...> Reactor.run(reactor, %{whom: nil})
    {:ok, "Hello, World!"}

###  __ Options

  * `:extensions` (list of module that adopts [`Spark.Dsl.Extension`](external_link)) - A list of DSL extensions to add to the [`Spark.Dsl`](external_link)

  * `:otp_app` ([`atom/0`](external_link)) - The otp_app to use for any application configurable options

  * `:fragments` (list of [`module/0`](external_link)) - Fragments to include in the [`Spark.Dsl`](external_link). See the fragments guide for more.




#  __ Summary

##  Types

async_option()

When set to `false` forces the Reactor to run every step synchronously, regardless of the step configuration.

concurrency_key_option()

Use a `Reactor.Executor.ConcurrencyTracker.pool_key` to allow this Reactor to share it's concurrency pool with other Reactor instances.

context()

context_arg()

halt_timeout_option()

How long to wait for asynchronous steps to complete when halting.

inputs()

max_concurrency_option()

Specify the maximum number of asynchronous steps which can be run in parallel.

max_iterations_option()

The maximum number of iterations which after which the Reactor will halt.

options()

state()

t()

timeout_option()

Specify the amount of execution time after which to halt processing.

##  Functions

is_reactor(reactor)

A guard which returns true if the value is a Reactor struct

run(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

Attempt to run a Reactor.

run!(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

Raising version of `run/4`.

#  __ Types

__ Link to this type

# async_option()

[ __ View Source ](external_link)
    
    
    @type async_option() :: {:async?, [boolean](external_link)()}

When set to `false` forces the Reactor to run every step synchronously, regardless of the step configuration.

Defaults to `true`.

__ Link to this type

# concurrency_key_option()

[ __ View Source ](external_link)
    
    
    @type concurrency_key_option() :: {:concurrency_key, [reference](external_link)()}

Use a `Reactor.Executor.ConcurrencyTracker.pool_key` to allow this Reactor to share it's concurrency pool with other Reactor instances.

If you do not specify one then the Reactor will initialise a new pool and place it in it's context for any child Reactors to re-use.

Only used if `async?` is set to `true`.

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: %{optional([atom](external_link)()) => [any](external_link)()}

__ Link to this type

# context_arg()

[ __ View Source ](external_link)
    
    
    @type context_arg() :: [Enumerable.t](external_link)({[atom](external_link)(), [any](external_link)()})

__ Link to this type

# halt_timeout_option()

[ __ View Source ](external_link)
    
    
    @type halt_timeout_option() :: {:halt_timeout, [pos_integer](external_link)() | :infinity}

How long to wait for asynchronous steps to complete when halting.

Defaults to 5000ms.

__ Link to this type

# inputs()

[ __ View Source ](external_link)
    
    
    @type inputs() :: %{optional([atom](external_link)()) => [any](external_link)()}

__ Link to this type

# max_concurrency_option()

[ __ View Source ](external_link)
    
    
    @type max_concurrency_option() :: {:max_concurrency, [pos_integer](external_link)()}

Specify the maximum number of asynchronous steps which can be run in parallel.

Defaults to the result of [`System.schedulers_online/0`](external_link). Only used if `async?` is set to `true`.

__ Link to this type

# max_iterations_option()

[ __ View Source ](external_link)
    
    
    @type max_iterations_option() :: {:max_iterations, [pos_integer](external_link)() | :infinity}

The maximum number of iterations which after which the Reactor will halt.

Defaults to `:infinity`.

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() ::
      Enumerable.t(
        max_concurrency_option()
        | timeout_option()
        | max_iterations_option()
        | halt_timeout_option()
        | async_option()
        | concurrency_key_option()
      )

__ Link to this type

# state()

[ __ View Source ](external_link)
    
    
    @type state() :: :pending | :executing | :halted | :failed | :successful

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor{
      context: context(),
      id: [any](external_link)(),
      inputs: [[atom](external_link)()],
      intermediate_results: %{required([any](external_link)()) => [any](external_link)()},
      middleware: [[Reactor.Middleware.t](external_link)()],
      plan: nil | [Graph.t](external_link)(),
      return: [any](external_link)(),
      state: state(),
      steps: [[Reactor.Step.t](external_link)()],
      undo: [{[Reactor.Step.t](external_link)(), [any](external_link)()}]
    }

__ Link to this type

# timeout_option()

[ __ View Source ](external_link)
    
    
    @type timeout_option() :: {:timeout, [pos_integer](external_link)() | :infinity}

Specify the amount of execution time after which to halt processing.

Note that this is not a hard limit. The Reactor will stop when the first step completes _after_ the timeout has expired.

Defaults to `:infinity`.

#  __ Functions

__ Link to this macro

# is_reactor(reactor)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_reactor([any](external_link)()) :: [Macro.t](external_link)()

A guard which returns true if the value is a Reactor struct

__ Link to this function

# run(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec run(t() | [module](external_link)(), inputs(), context_arg(), options()) ::
      {:ok, [any](external_link)()} | {:error, [any](external_link)()} | {:halted, t()}

Attempt to run a Reactor.

##  __ Arguments

  * `reactor` \- The Reactor to run, either a Reactor DSL module, or a Reactor struct.
  * `inputs` \- A map of values passed in to satisfy the Reactor's expected inputs.
  * `context` \- An arbitrary map that will be merged into the Reactor context and passed into each step.



##  __ Options

  * `:max_concurrency` ([`pos_integer/0`](external_link)) - The maximum number of processes to use to run the Reactor

  * `:timeout` \- How long to allow the Reactor to run for The default value is `:infinity`.

  * `:max_iterations` \- The maximum number of times to allow the Reactor to loop The default value is `:infinity`.

  * `:async_option` ([`boolean/0`](external_link)) - Whether to allow the Reactor to start processes The default value is `true`.




__ Link to this function

# run!(reactor, inputs \\\ %{}, context \\\ %{}, options \\\ [])

[ __ View Source ](external_link)
    
    
    @spec run!(t() | [module](external_link)(), inputs(), context_arg(), options()) :: [any](external_link)() | [no_return](external_link)()

Raising version of `run/4`.
