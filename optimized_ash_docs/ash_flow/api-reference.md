# API Reference — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) API Reference ash_flow v0.1.1
  - __ Modules
  - __ Mix Tasks

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash_flow v0.1.1

##  __ Modules

[Ash.Error.EngineError](external_link)

Used when the Ash engine has an internal error

[Ash.Error.Flow.Halted](external_link)

Used when a flow has been halted for some reason

[Ash.Flow](external_link)

A flow is a static definition of a set of steps to be run.

[Ash.Flow.Argument](external_link)

An argument to a flow

[Ash.Flow.Chart.Mermaid](external_link)

Tools to render an Ash.Flow as a mermaid chart.

[Ash.Flow.Executor](external_link)

A flow executor runs a given flow module

[Ash.Flow.Executor.AshEngine](external_link)

Executes the requests using the Ash engine, which can parallelize individual steps when possible.

[Ash.Flow.Info](external_link)

Flow introspection functions.

[Ash.Flow.Result](external_link)

The result of running a flow.

[Ash.Flow.Step](external_link)

A behaviour for implementing a custom step in a flow.

[Ash.Flow.Step.Branch](external_link)

Represents a branching set of steps in an Ash.Flow

[Ash.Flow.Step.Create](external_link)

Represents a create action step in an Ash.Flow

[Ash.Flow.Step.Custom](external_link)

Represents a custom step in an Ash.Flow

[Ash.Flow.Step.Debug](external_link)

Represents a debug step in an Ash.Flow

[Ash.Flow.Step.Destroy](external_link)

Represents a destroy action step in an Ash.Flow

[Ash.Flow.Step.Map](external_link)

Represents a map grouping of steps in an Ash.Flow

[Ash.Flow.Step.Read](external_link)

Represents a read action step in an Ash.Flow

[Ash.Flow.Step.RunFlow](external_link)

Represents a nested flow step in an Ash.Flow

[Ash.Flow.Step.Transaction](external_link)

Represents steps grouped into a transaction in an Ash.Flow

[Ash.Flow.Step.Update](external_link)

Represents an update action step in an Ash.Flow

[Ash.Flow.StepHelpers](external_link)

Template functions available while declaring steps.

[Ash.Flow.Template](external_link)

Helpers for working with Ash.Flow templates.

[Ash.Flow.Transformers.SetDomain](external_link)

Sets the domain on the steps of a flow to the default domain, unless an domain is set explicitly.

[Ash.Flow.Verifiers.ValidateNoEmptySteps](external_link)

Validates that no nested steps contain no steps

[Ash.Flow.Verifiers.ValidateUniqueNames](external_link)

Validates that steps have unique names.

[Ash.Flow.Verifiers.VerifyReturn](external_link)

Ensures that all steps in a return statement are returnable

[AshFlow](external_link)

Documentation for [`AshFlow`](external_link).

##  __ Mix Tasks

[mix ash.generate_flow_charts](external_link)

Generates a Mermaid Flow Chart for each [`Ash.Flow`](external_link) alongside the flow.

[ Next Page →  Flows  ](external_link)
