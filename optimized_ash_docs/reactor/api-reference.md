# API Reference — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) API Reference reactor v0.9.1
  - __ Modules

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) API Reference reactor v0.9.1

##  __ Modules

[Reactor](external_link)

Reactor is a dynamic, concurrent, dependency resolving saga orchestrator.

[Reactor.Argument](external_link)

A step argument.

[Reactor.Argument.Build](external_link)

A protocol which can be used to convert something into an argument.

[Reactor.Builder](external_link)

Build a new Reactor programmatically.

[Reactor.Builder.Compose](external_link)

Handle composition of Reactors for the builder.

[Reactor.Builder.Input](external_link)

Handle adding inputs to Reactors for the builder.

[Reactor.Builder.Step](external_link)

Handle building and adding steps to Reactors for the builder.

[Reactor.Dsl.Argument](external_link)

The struct used to store `argument` DSL entities.

[Reactor.Dsl.Around](external_link)

The `around` DSL entity struct.

[Reactor.Dsl.Build](external_link)

A protocol which DSL entities must implement.

[Reactor.Dsl.Collect](external_link)

The struct used to store collect DSL entities.

[Reactor.Dsl.Compose](external_link)

The `compose` DSL entity struct.

[Reactor.Dsl.Debug](external_link)

The `debug` DSL entity struct.

[Reactor.Dsl.Group](external_link)

The `group` DSL entity struct.

[Reactor.Dsl.Info](external_link)

Introspection for the Reactor DSL.

[Reactor.Dsl.Input](external_link)

The struct used to store input DSL entities.

[Reactor.Dsl.Map](external_link)

The `map` DSL entity struct.

[Reactor.Dsl.Middleware](external_link)

The `middleware` DSL entity struct.

[Reactor.Dsl.Step](external_link)

The struct used to store step DSL entities.

[Reactor.Dsl.Switch](external_link)

The `switch` DSL entity struct.

[Reactor.Dsl.Switch.Default](external_link)

The `default` DSL entity struct.

[Reactor.Dsl.Switch.Match](external_link)

The `matches?` DSL entity struct.

[Reactor.Dsl.Verifier](external_link)

Runs [`Reactor.Dsl.Build.verify/2`](external_link) for all the entities in the reactor.

[Reactor.Dsl.WaitFor](external_link)

The struct used to store `wait_for` DSL entities.

[Reactor.Error](external_link)

Uses `splode` to manage various classes of error.

[Reactor.Error.Internal](external_link)

The [Splode error class](external_link) for Reactor-caused errors.

[Reactor.Error.Internal.ComposeError](external_link)

This error is returned when two Reactors cannot be composed together.

[Reactor.Error.Internal.MissingReturnResultError](external_link)

This error is returned when the Reactor's return name doesn't match any of the known step results.

[Reactor.Error.Internal.PlanError](external_link)

This error is returned when the step graph cannot be built.

[Reactor.Error.Internal.UnreachableError](external_link)

An error that should never happen.

[Reactor.Error.Invalid](external_link)

The [Splode error class](external_link) for user-caused errors.

[Reactor.Error.Invalid.ArgumentSubpathError](external_link)

This error is returned when an argument cannot have a subpath applied to it.

[Reactor.Error.Invalid.CompensateStepError](external_link)

This error is returned when an error occurs during step compensation.

[Reactor.Error.Invalid.InvalidResultError](external_link)

This error is returned when a step returns an invalid result.

[Reactor.Error.Invalid.MissingArgumentError](external_link)

This error is returned when an expected argument is not passed to a step.

[Reactor.Error.Invalid.MissingInputError](external_link)

Error raised when a required Reactor input is missing.

[Reactor.Error.Invalid.MissingResultError](external_link)

This error is returned when a step attempts to consume an intermediate result which is not present in the Reactor state.

[Reactor.Error.Invalid.RetriesExceededError](external_link)

This error is returned when a step attempts to retry more times that is allowed.

[Reactor.Error.Invalid.RunStepError](external_link)

This error is returned when an error occurs during step execution.

[Reactor.Error.Invalid.TransformError](external_link)

An error which occurs when building and running transforms.

[Reactor.Error.Invalid.UndoRetriesExceededError](external_link)

An error used when a step runs out of retry events and no other error is thrown.

[Reactor.Error.Invalid.UndoStepError](external_link)

This error is returned when an error occurs when attempting to undo step execution.

[Reactor.Error.Unknown](external_link)

The [Splode error class](external_link) for unknown errors.

[Reactor.Error.Unknown.UnknownError](external_link)

An error used to wrap unknown errors.

[Reactor.Error.Validation](external_link)

The [Splode error class](external_link) for validation errors.

[Reactor.Error.Validation.MissingReturnError](external_link)

An error returned when a Reactor cannot be validated because of a missing return value.

[Reactor.Error.Validation.StateError](external_link)

An error returned when a Reactor is in an unexpected state.

[Reactor.Executor](external_link)

The Reactor executor.

[Reactor.Executor.Async](external_link)

Handle the asynchronous execution of a batch of steps, along with any mutations to the reactor or execution state.

[Reactor.Executor.ConcurrencyTracker](external_link)

Manage shared concurrency pools for multiple Reactors.

[Reactor.Executor.Hooks](external_link)

Handles the execution of reactor middleware hooks.

[Reactor.Executor.Init](external_link)

Handle argument checking and state setup for a Reactor run.

[Reactor.Executor.State](external_link)

Contains the reactor execution state.

[Reactor.Executor.StepRunner](external_link)

Run an individual step, including compensation if possible.

[Reactor.Executor.Sync](external_link)

Handle the synchronous execution of a single step, along with any mutations to the reactor or execution state.

[Reactor.Info](external_link)

Introspection for the Reactor DSL.

[Reactor.Middleware](external_link)

The Middleware behaviour.

[Reactor.Middleware.Telemetry](external_link)

A Reactor middleware that emits telemetry events.

[Reactor.Planner](external_link)

Build an execution plan for a Reactor.

[Reactor.Step](external_link)

The Step behaviour and struct.

[Reactor.Step.AnonFn](external_link)

The built-in step for executing in-line DSL anonymous functions.

[Reactor.Step.Around](external_link)

Wrap the execution of a number of steps in a function.

[Reactor.Step.Compose](external_link)

A built-in step which can embed one reactor inside another.

[Reactor.Step.ComposeWrapper](external_link)

When doing run-time composition of Reactors we need to dynamically rewrite any dynamically emitted steps to have the correct namespace.

[Reactor.Step.Debug](external_link)

A very simple step which sends debug information to [`Logger`](external_link).

[Reactor.Step.Group](external_link)

Wrap the execution of a number of steps with before/after functions.

[Reactor.Step.Map](external_link)

Given an iterable input run the provided steps for each element and collect the results into a new value.

[Reactor.Step.ReturnAllArguments](external_link)

A very simple step which simply returns all it's arguments unchanged.

[Reactor.Step.ReturnArgument](external_link)

A very simple step which simply returns the named argument, if provided.

[Reactor.Step.Switch](external_link)

Conditionally decide which steps should be run at runtime.

[Reactor.Step.Transform](external_link)

The built-in step for executing input and argument transformations.

[Reactor.Step.TransformAll](external_link)

A built-in step which applies a transformation function to all it's arguments.

[Reactor.Template](external_link)

Templates used to refer to some sort of computed value.

[Reactor.Template.Element](external_link)

The `element` template.

[Reactor.Template.Input](external_link)

The `input` template.

[Reactor.Template.Result](external_link)

The `result` template.

[Reactor.Template.Value](external_link)

A statically `value` template.

[ Next Page →  Read Me  ](external_link)
