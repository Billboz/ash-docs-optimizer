# Reactor.Builder.Step — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Builder.Step (reactor v0.9.1)
- __ Summary
  - Functions
- __ Functions
- add_step(reactor, name, impl, arguments, options)
  - __ Arguments
  - __ Options
- new_step(name, impl, arguments, options)
  - __ Arguments
  - __ Options

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Builder.Step (reactor v0.9.1)

Handle building and adding steps to Reactors for the builder.

You should not use this module directly, but instead use [`Reactor.Builder.new_step/4`](external_link) and [`Reactor.Builder.add_step/5`](external_link).

#  __ Summary

##  Functions

add_step(reactor, name, impl, arguments, options)

Build and add a new step to a Reactor.

new_step(name, impl, arguments, options)

Dynamically build a new step for later use.

#  __ Functions

__ Link to this function

# add_step(reactor, name, impl, arguments, options)

[ __ View Source ](external_link)
    
    
    @spec add_step(
      [Reactor.t](external_link)(),
      [any](external_link)(),
      [Reactor.Builder.impl](external_link)(),
      [[Reactor.Builder.step_argument](external_link)()],
      [Reactor.Builder.step_options](external_link)()
    ) :: {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Build and add a new step to a Reactor.

##  __ Arguments

  * `reactor` \- An existing Reactor struct to add the step to.
  * `name` \- The proposed name of the new step.
  * `impl` \- A module implementing the [`Reactor.Step`](external_link) behaviour (or a tuple containing the module and options).
  * `arguments` \- A list of [`Reactor.Argument`](external_link) structs or shorthand keyword lists.



##  __ Options

  * `:async?` ([`boolean/0`](external_link)) - Allow the step to be run asynchronously? The default value is `true`.

  * `:max_retries` \- The maximum number of times the step can ask to be retried The default value is `100`.

  * `:transform` \- A function which can modify all incoming arguments

  * `:context` ([`map/0`](external_link)) - Context which will be merged with the reactor context when calling this step

  * `:ref` \- What sort of step reference to generate Valid values are :step_name, :make_ref The default value is `:make_ref`.




__ Link to this function

# new_step(name, impl, arguments, options)

[ __ View Source ](external_link)
    
    
    @spec new_step(
      [any](external_link)(),
      [Reactor.Builder.impl](external_link)(),
      [[Reactor.Builder.step_argument](external_link)()],
      [Reactor.Builder.step_options](external_link)()
    ) :: {:ok, [Reactor.Step.t](external_link)()} | {:error, [any](external_link)()}

Dynamically build a new step for later use.

You're most likely to use this when dynamically returning new steps from an existing step.

##  __ Arguments

  * `name` \- The name of the new step.
  * `impl` \- A module implementing the [`Reactor.Step`](external_link) behaviour (or a tuple containing the module and options).
  * `arguments` \- A list of [`Reactor.Argument`](external_link) structs or shorthand keyword lists.



##  __ Options

  * `:async?` ([`boolean/0`](external_link)) - Allow the step to be run asynchronously? The default value is `true`.

  * `:max_retries` \- The maximum number of times the step can ask to be retried The default value is `100`.

  * `:transform` \- A function which can modify all incoming arguments

  * `:context` ([`map/0`](external_link)) - Context which will be merged with the reactor context when calling this step

  * `:ref` \- What sort of step reference to generate Valid values are :step_name, :make_ref The default value is `:make_ref`.



