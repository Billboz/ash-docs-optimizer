# API Reference — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) API Reference ash v3.4.8
  - __ Modules
  - __ Mix Tasks

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) API Reference ash v3.4.8

##  __ Modules

[Ash](external_link)

The primary interface to call actions and interact with resources.

[Ash.ActionInput](external_link)

Input for a custom action

[Ash.Actions.Read.AsyncLimiter](external_link)

A utility for limiting the number of concurrent async operations

[Ash.Authorizer](external_link)

The interface for an ash authorizer

[Ash.BulkResult](external_link)

The return value for bulk actions.

[Ash.Changeset](external_link)

Changesets are used to create and update data in Ash.

[Ash.Changeset.ManagedRelationshipHelpers](external_link)

Tools for introspecting managed relationships.

[Ash.Changeset.OriginalDataNotAvailable](external_link)

A value placed in changeset.data to indicate that the original data is not available

[Ash.CiString](external_link)

Represents a case insensitive string

[Ash.CodeInterface](external_link)

Used to define the functions of a code interface for a resource.

[Ash.Context](external_link)

Functions for working with the context provided to various callbacks in Ash.

[Ash.CustomExpression](external_link)

A module for defining custom functions that can be called in Ash expressions.

[Ash.DataLayer](external_link)

The behaviour for backing resource actions with persistence layers.

[Ash.DataLayer.Ets](external_link)

An ETS (Erlang Term Storage) backed Ash Datalayer, for testing and lightweight usage.

[Ash.DataLayer.Ets.Info](external_link)

Introspection helpers for the Ets data layer

[Ash.DataLayer.Mnesia](external_link)

An Mnesia backed Ash Datalayer.

[Ash.DataLayer.Mnesia.Info](external_link)

Introspection helpers for Ash.DataLayer.Mnesia

[Ash.DataLayer.Simple](external_link)

A data layer that returns structs.

[Ash.DataLayer.Verifiers.RequirePreCheckWith](external_link)

Ensures that all identities have a `pre_check_with` configured, or raises.

[Ash.Domain](external_link)

A domain allows you to interact with your resources, and holds domain-wide configuration.

[Ash.Domain.Dsl.ResourceReference](external_link)

A resource reference in a domain

[Ash.Domain.Igniter](external_link)

Codemods for working with Ash.Domain modules

[Ash.Domain.Info](external_link)

Introspection tools for Ash.Domain

[Ash.Domain.Info.Diagram](external_link)

Generate Mermaid diagrams from a specified domain.

[Ash.Domain.Info.Livebook](external_link)

Generate a Livebook from a specified domain.

[Ash.Domain.Verifiers.EnsureNoEmbeds](external_link)

Ensures that all resources for a given domain are not embeds.

[Ash.Domain.Verifiers.ValidateRelatedResourceInclusion](external_link)

Ensures that all related resources are included in a domain.

[Ash.Error](external_link)

Tools and utilities used by Ash to manage and conform errors

[Ash.Error.Action.InvalidArgument](external_link)

Used when an invalid value is provided for an action argument

[Ash.Error.Changes.ActionRequiresActor](external_link)

Used when an actor is referenced in a filter template, but no actor exists

[Ash.Error.Changes.InvalidArgument](external_link)

Used when an invalid value is provided for an action argument

[Ash.Error.Changes.InvalidAttribute](external_link)

Used when an invalid value is provided for an attribute change

[Ash.Error.Changes.InvalidChanges](external_link)

Used when a change is provided that covers multiple attributes/relationships

[Ash.Error.Changes.InvalidRelationship](external_link)

Used when an invalid value is provided for a relationship change

[Ash.Error.Changes.NoSuchAttribute](external_link)

Used when a change is provided for an attribute that does not exist

[Ash.Error.Changes.NoSuchRelationship](external_link)

Used when a change is provided for an relationship that does not exist

[Ash.Error.Changes.Required](external_link)

Used when an attribute or relationship is required

[Ash.Error.Changes.StaleRecord](external_link)

Used when a stale record is attempted to be updated or deleted

[Ash.Error.Exception](external_link)

Tooling for creating an Ash exception

[Ash.Error.Forbidden](external_link)

Used when authorization for an action fails

[Ash.Error.Forbidden.CannotFilterCreates](external_link)

Used when a create action would be filtered

[Ash.Error.Forbidden.DomainRequiresActor](external_link)

Used when a domain that has `require_actor? true` is provided no actor

[Ash.Error.Forbidden.DomainRequiresAuthorization](external_link)

Used when a domain that has `authorize :always` is provided authorize?: false

[Ash.Error.Forbidden.ForbiddenField](external_link)

Raised in cases where access to a specific field was prevented

[Ash.Error.Forbidden.InitialDataRequired](external_link)

Used when initial data was not supplied when it was required

[Ash.Error.Forbidden.MustPassStrictCheck](external_link)

Used when unreachable code/conditions are reached in the framework

[Ash.Error.Forbidden.Placeholder](external_link)

A placeholder exception that the user should never see

[Ash.Error.Forbidden.Policy](external_link)

Raised when policy authorization for an action fails

[Ash.Error.Framework](external_link)

Used when an unknown/generic framework error occurs

[Ash.Error.Framework.AssumptionFailed](external_link)

Used when unreachable code/conditions are reached in the framework

[Ash.Error.Framework.CanNotBeAtomic](external_link)

Used when a change that is only atomic cannot be done atomically

[Ash.Error.Framework.FlagAssertionFailed](external_link)

Used when unreachable code/conditions are reached in the framework

[Ash.Error.Framework.InvalidReturnType](external_link)

Used when a callback returns an invalid type

[Ash.Error.Framework.MustBeAtomic](external_link)

Used when an action that must be atomic cannot be done atomically

[Ash.Error.Framework.SynchronousEngineStuck](external_link)

Used when the sycnrhonous engine cannot proceed

[Ash.Error.Invalid](external_link)

The top level invalid error

[Ash.Error.Invalid.ActionRequiresPagination](external_link)

Used when page option is passed but pagination is not enabled.

[Ash.Error.Invalid.AtomicsNotSupported](external_link)

Used when atomics for the given action type are not not supported by the data layer, but one is used.

[Ash.Error.Invalid.InvalidPrimaryKey](external_link)

Used when an invalid primary key is given to [`Ash.get/2`](external_link)

[Ash.Error.Invalid.LimitRequired](external_link)

Used when no limit is provided, pagination is required, and no default page size is configured

[Ash.Error.Invalid.MultipleResults](external_link)

Used when multiple results are returned in a case where only one result was expected

[Ash.Error.Invalid.NoIdentityFound](external_link)

Used when an identity name is used that does not reference identity on the resource

[Ash.Error.Invalid.NoMatchingBulkStrategy](external_link)

Used when an identity name is used that does not reference identity on the resource

[Ash.Error.Invalid.NoPrimaryAction](external_link)

Used when an action name is provided that doesn't exist

[Ash.Error.Invalid.NoSuchAction](external_link)

Used when an action name is provided that doesn't exist

[Ash.Error.Invalid.NoSuchInput](external_link)

Used when an input is provided to an action or calculation that is not accepted

[Ash.Error.Invalid.NoSuchResource](external_link)

Used when a resource or alias is provided that doesn't exist

[Ash.Error.Invalid.NonCountableAction](external_link)

Used when page[:count] option is passed but the action's pagination is not countable.

[Ash.Error.Invalid.NonStreamableAction](external_link)

Used when Ash.stream is used with an action that does not support keyset pagination

[Ash.Error.Invalid.PaginationRequired](external_link)

Used when `page: false` is provided but pagination is required

[Ash.Error.Invalid.ResourceNotAllowed](external_link)

Used when a resource or alias is provided that cannot be used with the given domain

[Ash.Error.Invalid.TenantRequired](external_link)

Used when a tenant is not specified

[Ash.Error.Invalid.Timeout](external_link)

Used when a request to a domain times out.

[Ash.Error.Invalid.TimeoutNotSupported](external_link)

Used when timeouts are not supported by the data layer, but one is set

[Ash.Error.Invalid.Unavailable](external_link)

Used when a given resource is unavailable.

[Ash.Error.Load.InvalidQuery](external_link)

Used when an invalid query is provided in a load

[Ash.Error.Load.NoSuchRelationship](external_link)

Used when attempting to load a relationship that does not exist

[Ash.Error.Page.InvalidKeyset](external_link)

Used when a value is provided for a keyset that cannot be Base64 decoded.

[Ash.Error.Query.AggregatesNotSupported](external_link)

Used when the data_layer does not support aggregates, or filtering/sorting them

[Ash.Error.Query.CalculationRequiresPrimaryKey](external_link)

Used when a calculation requires a primary key but was not supplied with one

[Ash.Error.Query.CalculationsNotSupported](external_link)

Used when the data_layer does not support calculations, or filtering/sorting them

[Ash.Error.Query.InvalidArgument](external_link)

Used when an invalid value is provided for an action argument

[Ash.Error.Query.InvalidCalculationArgument](external_link)

Used when an invalid value is provided for a calculation argument

[Ash.Error.Query.InvalidExpression](external_link)

Used when an invalid expression is used in a filter

[Ash.Error.Query.InvalidFilterReference](external_link)

Used when an invalid reference is used in a filter

[Ash.Error.Query.InvalidFilterValue](external_link)

Used when an invalid value is provided for a filter

[Ash.Error.Query.InvalidLimit](external_link)

Used when an invalid limit is provided

[Ash.Error.Query.InvalidLoad](external_link)

Used when an invalid load is provided

[Ash.Error.Query.InvalidOffset](external_link)

Used when an invalid offset is provided

[Ash.Error.Query.InvalidPage](external_link)

Used when an invalid page option is provided

[Ash.Error.Query.InvalidQuery](external_link)

A generic error that can be used to add an error to a query for a specific field

[Ash.Error.Query.InvalidSortOrder](external_link)

Used when an invalid sort order is provided

[Ash.Error.Query.LockNotSupported](external_link)

Used when the data_layer does not support a given lock type

[Ash.Error.Query.NoComplexSortsWithKeysetPagination](external_link)

Due to the filter-based implementation of keyset pagination, it cannot be used with sorts on calculations.

[Ash.Error.Query.NoReadAction](external_link)

Used when a resource would be read but has no read action

[Ash.Error.Query.NoSuchAttribute](external_link)

Used when an attribute that doesn't exist is used in a query

[Ash.Error.Query.NoSuchField](external_link)

Used when a field(attrbute, calculation, aggregate or relationship) that doesn't exist is used in a query

[Ash.Error.Query.NoSuchFilterPredicate](external_link)

Used when a filter predicate that does not exist is referenced

[Ash.Error.Query.NoSuchFunction](external_link)

Used when an function that doesn't exist is used in a query

[Ash.Error.Query.NoSuchOperator](external_link)

Used when an operator that doesn't exist is used in a query

[Ash.Error.Query.NoSuchRelationship](external_link)

Used when an relationship that doesn't exist is used in a query

[Ash.Error.Query.NotFound](external_link)

Used when an entity that not exist is referenced

[Ash.Error.Query.ReadActionRequired](external_link)

Used when a relationship is filtered and the destination does not have a default read action

[Ash.Error.Query.ReadActionRequiresActor](external_link)

Used when an actor is referenced in a filter template, but no actor exists

[Ash.Error.Query.Required](external_link)

Used when a filter or argument is required in a query

[Ash.Error.Query.UnsortableField](external_link)

Used when attempting to sort on a field that cannot be used for sorting

[Ash.Error.Query.UnsupportedPredicate](external_link)

Used when the data_layer does not support a provided predicate

[Ash.Error.SimpleDataLayer.NoDataProvided](external_link)

Used when no data was provided to the simple data layer

[Ash.Error.Stacktrace](external_link)

A placeholder for a stacktrace so that we can avoid printing it everywhere

[Ash.Error.Unknown](external_link)

The top level unknown error container

[Ash.Error.Unknown.UnknownError](external_link)

Used when an unknown error occurs

[Ash.Expr](external_link)

Tools to build Ash expressions

[Ash.Extension](external_link)

A behavior of additional callbacks that extensions can implement, specific to Ash.

[Ash.Filter](external_link)

The representation of a filter in Ash.

[Ash.Filter.Predicate](external_link)

Represents a predicate which can be simplified and/or compared with other predicates

[Ash.Filter.Runtime](external_link)

Checks a record to see if it matches a filter statement.

[Ash.Filter.Simple](external_link)

Represents a simplified filter, with a simple list of predicates

[Ash.Filter.Simple.Not](external_link)

A negated predicate

[Ash.ForbiddenField](external_link)

Represents a field that was hidden due to authorization rules.

[Ash.Generator](external_link)

Tools for generating input to Ash resource actions, as well as for seeds.

[Ash.Igniter](external_link)

Codemods and utilities for working with Ash & Igniter

[Ash.Mix.Tasks.Helpers](external_link)

Helpers for Ash Mix tasks.

[Ash.NotLoaded](external_link)

Used when a field hasn't been loaded or selected.

[Ash.Notifier](external_link)

A notifier is an extension that receives various events

[Ash.Notifier.Notification](external_link)

Represents a notification that will be handled by a resource's notifiers

[Ash.Notifier.PubSub](external_link)

A builtin notifier to help you publish events over any kind of pub-sub tooling.

[Ash.Notifier.PubSub.Info](external_link)

Introspection helpers for Ash.Notifier.PubSub

[Ash.Notifier.PubSub.Publication](external_link)

Represents a configured publication from the pubsub notifier on an Ash.Resource

[Ash.OptionsHelpers](external_link)

Helpers for working with nimble options

[Ash.Page](external_link)

Types for Ash pages

[Ash.Page.Keyset](external_link)

A page of results from `keyset` based pagination.

[Ash.Page.Offset](external_link)

A page of results from `offset` based pagination.

[Ash.PlugHelpers](external_link)

Helpers for working with the Plug connection.

[Ash.Policy.Authorizer](external_link)

An authorization extension for ash resources.

[Ash.Policy.Authorizer.Transformers.AddMissingFieldPolicies](external_link)

Adds field policies for any missing fields

[Ash.Policy.Authorizer.Transformers.CacheFieldPolicies](external_link)

Cache field policies for each field

[Ash.Policy.Chart.Mermaid](external_link)

Generates policy mermaid charts

[Ash.Policy.Check](external_link)

A behaviour for declaring checks, which can be used to easily construct authorization rules.

[Ash.Policy.Check.AccessingFrom](external_link)

This check is true when the current action is being run "through" a relationship.

[Ash.Policy.Check.Action](external_link)

This check is true when the action name matches the provided action name.

[Ash.Policy.Check.ActionType](external_link)

This check is true when the action type matches the provided type

[Ash.Policy.Check.ActorAttributeEquals](external_link)

This check is true when the value of the specified attribute of the actor equals the specified value.

[Ash.Policy.Check.ActorPresent](external_link)

This check is true when there is an actor specified, and false when the actor is `nil`.

[Ash.Policy.Check.Builtins](external_link)

The global authorization checks built into ash

[Ash.Policy.Check.ChangingAttributes](external_link)

This check is true when attribute changes correspond to the provided options.

[Ash.Policy.Check.ChangingRelationships](external_link)

This check is true when the specified relationship is changing

[Ash.Policy.Check.ContextEquals](external_link)

This check is true when the value of the specified key or path in the changeset or query context equals the specified value.

[Ash.Policy.Check.Expression](external_link)

The check module used for `expr`s in policies

[Ash.Policy.Check.FilteringOn](external_link)

This check is true when the field provided is being referenced anywhere in a filter statement.

[Ash.Policy.Check.Loading](external_link)

This check is true when the field or relationship, or path to field, is being loaded and false when it is not.

[Ash.Policy.Check.Matches](external_link)

This check is true when the specified function returns true

[Ash.Policy.Check.RelatesToActorVia](external_link)

This check passes if the data relates to the actor via the specified relationship or path of relationships.

[Ash.Policy.Check.RelatingToActor](external_link)

This check is true when the specified relationship is being changed to the current actor.

[Ash.Policy.Check.Resource](external_link)

This check is true when the resource matches the provided resource name or names.

[Ash.Policy.Check.Selecting](external_link)

This check is true when the field is being selected and false when it is not.

[Ash.Policy.Check.Static](external_link)

This check is always the result provided

[Ash.Policy.FieldPolicy](external_link)

Represents a field policy in an Ash.Resource

[Ash.Policy.FilterCheck](external_link)

A type of check that is represented by a filter statement

[Ash.Policy.Info](external_link)

An authorization extension for ash resources.

[Ash.Policy.Policy](external_link)

Represents a policy on an Ash.Resource

[Ash.Policy.PolicyGroup](external_link)

Represents a policy group on an Ash.Resource

[Ash.Policy.SimpleCheck](external_link)

A type of check that operates only on request context, never on the data

[Ash.ProcessHelpers](external_link)

Helpers for working with processes and Ash actions.

[Ash.Query](external_link)

A data structure for reading data from a resource.

[Ash.Query.Aggregate](external_link)

Represents an aggregated association value

[Ash.Query.BooleanExpression](external_link)

Represents a boolean expression

[Ash.Query.Calculation](external_link)

Represents a calculated attribute requested on a query

[Ash.Query.Call](external_link)

Represents a function call/AST node in an Ash query expression

[Ash.Query.Exists](external_link)

Determines if a given related entity exists.

[Ash.Query.Function](external_link)

A function is a predicate with an arguments list.

[Ash.Query.Function.Ago](external_link)

Subtracts the given interval from the current time in UTC.

[Ash.Query.Function.At](external_link)

Gets an element in the list by index

[Ash.Query.Function.CompositeType](external_link)

Constructs a composite type in a way that is natively understood by the data layer

[Ash.Query.Function.Contains](external_link)

Returns true if the first string contains the second.

[Ash.Query.Function.CountNils](external_link)

Returns the count of nil.

[Ash.Query.Function.DateAdd](external_link)

Adds the given interval to the current time in UTC

[Ash.Query.Function.DateTimeAdd](external_link)

Adds the given interval to the current time in UTC

[Ash.Query.Function.Error](external_link)

If the predicate is truthy, the provided exception is raised with the provided values.

[Ash.Query.Function.Fragment](external_link)

Adds the given interval from the current time in UTC.

[Ash.Query.Function.FromNow](external_link)

Adds the given interval from the current time in UTC.

[Ash.Query.Function.GetPath](external_link)

Gets the value at the provided path in the value, which must be a map or embed.

[Ash.Query.Function.If](external_link)

If predicate is truthy, then the second argument is returned, otherwise the third.

[Ash.Query.Function.IsNil](external_link)

true if the provided field is nil

[Ash.Query.Function.Lazy](external_link)

Runs the provided MFA and returns the result as a known value.

[Ash.Query.Function.Length](external_link)

Returns the length of a list attribute defined by the composite type `{:array, Type}`.

[Ash.Query.Function.Minus](external_link)

Multiplies the value by negative one

[Ash.Query.Function.Now](external_link)

Returns the current datetime

[Ash.Query.Function.Round](external_link)

Rounds a float, decimal or integer to the given number of points

[Ash.Query.Function.StringDowncase](external_link)

Downcase a string

[Ash.Query.Function.StringJoin](external_link)

Joins a list of values.

[Ash.Query.Function.StringLength](external_link)

Trims whitespace from a string

[Ash.Query.Function.StringSplit](external_link)

Split a string into a list of strings

[Ash.Query.Function.StringTrim](external_link)

Trims whitespace from a string

[Ash.Query.Function.Today](external_link)

Returns the current datetime

[Ash.Query.Function.Type](external_link)

Casts the value to a given type. Can also be used to provide type hints to data layers, where appropriate.

[Ash.Query.Not](external_link)

Represents the negation of the contained expression

[Ash.Query.Operator](external_link)

An operator is a predicate with a `left` and a `right`

[Ash.Query.Operator.Basic](external_link)

[Ash.Query.Operator.Eq](external_link)

left == right

[Ash.Query.Operator.GreaterThan](external_link)

left > right

[Ash.Query.Operator.GreaterThanOrEqual](external_link)

left >= right

[Ash.Query.Operator.In](external_link)

left in [1, 2, 3]

[Ash.Query.Operator.IsNil](external_link)

left is_nil true/false

[Ash.Query.Operator.LessThan](external_link)

left < right

[Ash.Query.Operator.LessThanOrEqual](external_link)

left <= right

[Ash.Query.Operator.NotEq](external_link)

left != right

[Ash.Query.Parent](external_link)

Used to access values from the "source" of a given expression.

[Ash.Query.Ref](external_link)

Represents a relation/attribute reference

[Ash.Query.UpsertConflict](external_link)

Returns the conflicting new information.

[Ash.Reactor](external_link)

[`Ash.Reactor`](external_link) is a [`Reactor`](external_link) extension which provides steps for working with Ash resources and actions.

[Ash.Reactor.ActionStep](external_link)

The Reactor step which is used to execute generic actions.

[Ash.Reactor.AshStep](external_link)

A reactor step which runs a step-module or an anonymous function, and enqueues any returned notifications before returning.

[Ash.Reactor.BulkCreateStep](external_link)

The Reactor stop which is used to execute create actions in bulk.

[Ash.Reactor.BulkUpdateStep](external_link)

The Reactor stop which is used to execute create actions in bulk.

[Ash.Reactor.ChangeStep](external_link)

The Reactor step which is used to execute change steps.

[Ash.Reactor.CreateStep](external_link)

The Reactor step which is used to execute create actions.

[Ash.Reactor.DestroyStep](external_link)

The Reactor step which is used to execute update actions.

[Ash.Reactor.Dsl.Action](external_link)

The `action` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.ActionLoad](external_link)

Add a load statement to an action.

[Ash.Reactor.Dsl.ActionTransformer](external_link)

Responsible for transforming actions.

[Ash.Reactor.Dsl.Actor](external_link)

Specify the actor used to execute an action.

[Ash.Reactor.Dsl.AshStep](external_link)

The ash_step DSL module.

[Ash.Reactor.Dsl.BulkCreate](external_link)

The `bulk_create` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.BulkUpdate](external_link)

The `bulk_update` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.Change](external_link)

The `change` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.Create](external_link)

The `create` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.Destroy](external_link)

The `destroy` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.Inputs](external_link)

The `inputs` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.Load](external_link)

The `load` step entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.MiddlewareTransformer](external_link)

Ensures that the required middlewares are added to the Reactor.

[Ash.Reactor.Dsl.Read](external_link)

The `read` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.ReadOne](external_link)

The `read_one` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.Tenant](external_link)

Specify the tenant used to execute an action.

[Ash.Reactor.Dsl.Transaction](external_link)

The `transaction` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.Dsl.Update](external_link)

The `update` entity for the [`Ash.Reactor`](external_link) reactor extension.

[Ash.Reactor.LoadStep](external_link)

The Reactor step which is used to execute load steps.

[Ash.Reactor.MergeInputsStep](external_link)

A custom step which merges any number of `inputs` results into a single map.

[Ash.Reactor.Notifications](external_link)

Reactor middleware used to collect and emit notifications upon successful completion of the Reactor.

[Ash.Reactor.ReadOneStep](external_link)

The Reactor step which is used to execute get actions.

[Ash.Reactor.ReadStep](external_link)

The Reactor step which is used to execute read actions.

[Ash.Reactor.Tracer](external_link)

Reactor middleware which threads Ash's tracing information through to new processes spawned by Reactor.

[Ash.Reactor.TransactionStep](external_link)

The Reactor step which is used to wrap other steps in an Ash data layer transaction.

[Ash.Reactor.UpdateStep](external_link)

The Reactor step which is used to execute update actions.

[Ash.Resource](external_link)

A resource is a static definition of an entity in your system.

[Ash.Resource.Actions](external_link)

Types for Ash actions

[Ash.Resource.Actions.Action](external_link)

Represents a custom action on a resource.

[Ash.Resource.Actions.Argument](external_link)

Represents an argument to an action

[Ash.Resource.Actions.Create](external_link)

Represents a create action on a resource.

[Ash.Resource.Actions.Destroy](external_link)

Represents a destroy action on a resource.

[Ash.Resource.Actions.Implementation](external_link)

An implementation of a generic action.

[Ash.Resource.Actions.Implementation.Context](external_link)

The context passed into generic action functions

[Ash.Resource.Actions.Metadata](external_link)

Represents metadata from an action

[Ash.Resource.Actions.Read](external_link)

Represents a read action on a resource.

[Ash.Resource.Actions.Read.Pagination](external_link)

Represents the pagination configuration of a read action

[Ash.Resource.Actions.Update](external_link)

Represents a update action on a resource.

[Ash.Resource.Aggregate](external_link)

Represents a named aggregate on the resource that can be loaded

[Ash.Resource.Aggregate.CustomAggregate](external_link)

The root behavior for a custom aggregate.

[Ash.Resource.Aggregate.JoinFilter](external_link)

Represents a join filter on a resource aggregate

[Ash.Resource.Attribute](external_link)

Represents an attribute on a resource

[Ash.Resource.Attribute.Helpers](external_link)

Helpers for building attributes

[Ash.Resource.Builder](external_link)

Tools for transforming resources in DSL Transformers.

[Ash.Resource.Calculation](external_link)

The behaviour for defining a module calculation, and the struct for storing a defined calculation.

[Ash.Resource.Calculation.Argument](external_link)

An argument to a calculation

[Ash.Resource.Calculation.Builtins](external_link)

Built in calculations that are automatically imported in the calculations section

[Ash.Resource.Calculation.Context](external_link)

The context and arguments of a calculation

[Ash.Resource.Calculation.LoadAttribute](external_link)

Loads an attribute as a calculation.

[Ash.Resource.Calculation.LoadRelationship](external_link)

Loads a relationship as a calculation.

[Ash.Resource.CalculationInterface](external_link)

Represents a function that evaluates a calculation in a resource's code interface

[Ash.Resource.Change](external_link)

The behaviour for an action-specific resource change.

[Ash.Resource.Change.Builtins](external_link)

Built in changes that are available to all resources

[Ash.Resource.Change.CascadeDestroy](external_link)

Cascade a resource's destroy action to a related resource's destroy action.

[Ash.Resource.Change.CascadeUpdate](external_link)

Cascade a resource's update action to a related resource's update action.

[Ash.Resource.Change.Context](external_link)

The context for a change.

[Ash.Resource.Change.GetAndLock](external_link)

Refetches the record being updated or destroyed, and locks it with the given type.

[Ash.Resource.Change.GetAndLockForUpdate](external_link)

Refetches the record being updated or destroyed, and locks it for update.

[Ash.Resource.Change.Increment](external_link)

Increments an attribute's value by the amount specified, which defaults to 1.

[Ash.Resource.Change.OptimisticLock](external_link)

Apply an "optimistic lock" on a record being updated or destroyed.

[Ash.Resource.Dsl.Filter](external_link)

Introspection target for a filter for read actions and relationships

[Ash.Resource.Identity](external_link)

Represents a unique constraint on a resource

[Ash.Resource.Igniter](external_link)

Codemods for working with Ash.Resource modules

[Ash.Resource.Info](external_link)

Introspection for resources

[Ash.Resource.Interface](external_link)

Represents a function in a resource's code interface

[Ash.Resource.ManualCreate](external_link)

A module to implement manual create actions.

[Ash.Resource.ManualCreate.Context](external_link)

The context passed into manual update action functions

[Ash.Resource.ManualDestroy](external_link)

A module to implement manual destroy actions.

[Ash.Resource.ManualDestroy.Context](external_link)

The context passed into manual update action functions

[Ash.Resource.ManualRead](external_link)

A module to implement manual read actions.

[Ash.Resource.ManualRelationship](external_link)

A module to implement manual relationships.

[Ash.Resource.ManualRelationship.Context](external_link)

The context passed into manual relationship functions

[Ash.Resource.ManualUpdate](external_link)

A module to implement manual update actions.

[Ash.Resource.ManualUpdate.Context](external_link)

The context passed into manual update action functions

[Ash.Resource.Preparation](external_link)

The behaviour for an action-specific query preparation.

[Ash.Resource.Preparation.Builtins](external_link)

Builtin query preparations

[Ash.Resource.Preparation.Context](external_link)

The context for a preparation.

[Ash.Resource.Relationships](external_link)

Types Ash relationships

[Ash.Resource.Relationships.BelongsTo](external_link)

Represents a belongs_to relationship on a resource

[Ash.Resource.Relationships.HasMany](external_link)

Represents a has_many relationship on a resource

[Ash.Resource.Relationships.HasOne](external_link)

Represents a has_one relationship on a resource

[Ash.Resource.Relationships.ManyToMany](external_link)

Represents a many_to_many relationship on a resource

[Ash.Resource.Transformers.AttributesByName](external_link)

Persists attribute_names and attributes_by_name.

[Ash.Resource.Transformers.BelongsToAttribute](external_link)

Creates the attribute for belongs_to relationships that have `define_attribute?: true`

[Ash.Resource.Transformers.CacheActionInputs](external_link)

Stores the set of valid input keys for each action

[Ash.Resource.Transformers.CacheCalculations](external_link)

Persists commonly used calculation information.

[Ash.Resource.Transformers.CachePrimaryKey](external_link)

Validates and caches the primary key of a resource

[Ash.Resource.Transformers.CacheRelationships](external_link)

Persists commonly used relationship information.

[Ash.Resource.Transformers.CacheUniqueKeys](external_link)

Stores the set of unique keys for a resource

[Ash.Resource.Transformers.CreateJoinRelationship](external_link)

Creates an automatically named `has_many` relationship for each many_to_many.

[Ash.Resource.Transformers.DefaultAccept](external_link)

Sets the default `accept` for each action

[Ash.Resource.Transformers.GetByReadActions](external_link)

Transform any read actions which contain a `get_by` option.

[Ash.Resource.Transformers.HasDestinationField](external_link)

Guesses the `destination_attribute` for has many and has one relationships unless provided

[Ash.Resource.Transformers.ManyToManyDestinationAttributeOnJoinResource](external_link)

Guesses the `destination_attribute_on_join_resource` for many to many relationships unless provided.

[Ash.Resource.Transformers.ManyToManySourceAttributeOnJoinResource](external_link)

Guesses the `source_attribute_on_join_resource` for many to many relationships unless provided.

[Ash.Resource.Transformers.RequireUniqueActionNames](external_link)

Ensures that all actions have unique names.

[Ash.Resource.Transformers.RequireUniqueFieldNames](external_link)

Confirms that a resource does not have multiple fields(attributes, calculations, aggregates, and relationships) with the same name.

[Ash.Resource.Transformers.SetPrimaryActions](external_link)

Validates the primary action configuration

[Ash.Resource.Transformers.SetRelationshipSource](external_link)

Sets the `source` key on relationships to be the resource they were defined on

[Ash.Resource.Transformers.ValidationsAndChangesForType](external_link)

Persists global changes/validations and what type they go on.

[Ash.Resource.Validation](external_link)

Represents a validation in Ash.

[Ash.Resource.Validation.ActionIs](external_link)

Validates that the action is the specified action.

[Ash.Resource.Validation.Builtins](external_link)

Built in validations that are available to all resources

[Ash.Resource.Validation.Context](external_link)

Context for a validation.

[Ash.Resource.Verifiers.EnsureAggregateFieldIsAttributeOrCalculation](external_link)

Ensures that the field at the end of the path is an attribute or calculation.

[Ash.Resource.Verifiers.NoReservedFieldNames](external_link)

Confirms that a resource does not use reserved names for field names.

[Ash.Resource.Verifiers.ValidateAccept](external_link)

Validates that accept and reject lists only contain valid attributes

[Ash.Resource.Verifiers.ValidateActionTypesSupported](external_link)

Confirms that all action types declared on a resource are supported by its data layer

[Ash.Resource.Verifiers.ValidateAggregatesSupported](external_link)

Confirms that all aggregates are supported by the data layer

[Ash.Resource.Verifiers.ValidateEagerIdentities](external_link)

Confirms that eager identities are not declared on a resource with no primary read.

[Ash.Resource.Verifiers.ValidateManagedRelationshipOpts](external_link)

Confirms that all action types declared on a resource are supported by its data layer

[Ash.Resource.Verifiers.ValidateMultitenancy](external_link)

Ensures that the multitenancy configuration is valid for the given resource

[Ash.Resource.Verifiers.ValidatePrimaryKey](external_link)

Validates and caches the primary key of a resource

[Ash.Resource.Verifiers.ValidateRelationshipAttributes](external_link)

Validates that all relationships point to valid fields

[Ash.Resource.Verifiers.ValidateRelationshipAttributesMatch](external_link)

Shows a warning on potentially incompatible relationship attributes.

[Ash.Resource.Verifiers.VerifyActionsAtomic](external_link)

Raises an error on update or destroy actions with `require_atomic?` set to true when it is known at compile time that they will not be atomic.

[Ash.Resource.Verifiers.VerifyGenericActionReactorInputs](external_link)

Returns an error if a generic action calls a Reactor module without specifying an argument for all expected inputs.

[Ash.Resource.Verifiers.VerifyIdentityFields](external_link)

Raises an error on potentially incompatible identity attributes.

[Ash.Resource.Verifiers.VerifyPrimaryKeyPresent](external_link)

Raises an error when a required primary key is missing

[Ash.Resource.Verifiers.VerifyReservedCalculationArguments](external_link)

Verifies that standard context keys are not used as calculation arguments

[Ash.SatSolver](external_link)

Tools for working with the satsolver that drives filter subset checking (for authorization)

[Ash.Seed](external_link)

Helpers for seeding data, useful for quickly creating lots of data either for database seeding or testing.

[Ash.Sort](external_link)

Utilities and types for sorting.

[Ash.Test](external_link)

Testing helpers for Ash.

[Ash.ToTenant](external_link)

Converts a value to a tenant. To add this to a resource, implement the protocol like so:application

[Ash.Tracer](external_link)

A behaviour for implementing tracing for an Ash application.

[Ash.Tracer.Simple](external_link)

A simple tracer that can send traces to the current process or call a module with the trace.

[Ash.Tracer.Simple.Span](external_link)

A span produced by [`Ash.Tracer.Simple`](external_link)

[Ash.Type](external_link)

The [`Ash.Type`](external_link) behaviour is used to define a value type in Ash.

[Ash.Type.Atom](external_link)

Stores an atom as a string in the database

[Ash.Type.Binary](external_link)

Represents a binary.

[Ash.Type.Boolean](external_link)

Represents a boolean.

[Ash.Type.CiString](external_link)

Stores a case insensitive string in the database

[Ash.Type.Comparable](external_link)

Helpers for working with [`Comparable`](external_link)

[Ash.Type.Date](external_link)

Represents a date in the database

[Ash.Type.DateTime](external_link)

Represents a datetime, with configurable precision and timezone.

[Ash.Type.Decimal](external_link)

Represents a decimal.

[Ash.Type.DurationName](external_link)

An interval of time, primarily meant to be used in expression functions

[Ash.Type.Enum](external_link)

A type for abstracting enums into a single type.

[Ash.Type.File](external_link)

A type that represents a file on the filesystem.

[Ash.Type.File.Implementation](external_link)

Behaviour for file implementations that are compatible with [`Ash.Type.File`](external_link).

[Ash.Type.File.Source](external_link)

Protocol for allowing the casting of something into an [`Ash.Type.File`](external_link).

[Ash.Type.Float](external_link)

Represents a float (floating point number)

[Ash.Type.Function](external_link)

Represents a function.

[Ash.Type.Integer](external_link)

Represents a simple integer

[Ash.Type.Keyword](external_link)

Represents a keyword list, stored as a `:map` in the database.

[Ash.Type.Map](external_link)

Represents a map stored in the database.

[Ash.Type.Module](external_link)

Stores a module as a string in the database.

[Ash.Type.NaiveDatetime](external_link)

Represents a Naive datetime

[Ash.Type.NewType](external_link)

Allows defining a new type that is the combination of an existing type and custom constraints

[Ash.Type.String](external_link)

Stores a string in the database.

[Ash.Type.Struct](external_link)

Represents a struct.

[Ash.Type.Term](external_link)

Represents a raw elixir term in the database

[Ash.Type.Time](external_link)

Represents a time in the database

[Ash.Type.UUID](external_link)

Represents a UUID.

[Ash.Type.UUIDv7](external_link)

Represents a UUID.

[Ash.Type.Union](external_link)

A union between multiple types, distinguished with a tag or by attempting to validate.

[Ash.Type.UrlEncodedBinary](external_link)

Represents a binary that attempts to decode input strings as a url encoded base64 string.

[Ash.Type.UtcDatetime](external_link)

Represents a utc datetime. A wrapper around `:datetime` for backwards compatibility.

[Ash.Type.UtcDatetimeUsec](external_link)

Represents a utc datetime with `nanosecond` precision. A wrapper around `:datetime` for backwards compatibility.

[Ash.Type.Vector](external_link)

Represents a vector.

[Ash.UUID](external_link)

Helpers for working with UUIDs

[Ash.UUIDv7](external_link)

Helpers for working with UUIDs version 7.

[Ash.Union](external_link)

A wrapper for values that are sourced from [`Ash.Type.Union`](external_link).

[Ash.Vector](external_link)

A vector struct for Ash.

[Comp](external_link)

Provides utilities to implement and work with [`Comparable`](external_link) types

[Comparable](external_link)

Protocol which describes ordering relation for pair of types

[Comparable.Type.Any.To.Any](external_link)

[Comparable.Type.Ash.CiString.To.Ash.CiString](external_link)

[Comparable.Type.Ash.CiString.To.BitString](external_link)

[Comparable.Type.Atom.To.BitString](external_link)

[Comparable.Type.BitString.To.Ash.CiString](external_link)

[Comparable.Type.BitString.To.Atom](external_link)

[Comparable.Type.BitString.To.Decimal](external_link)

[Comparable.Type.Date.To.Date](external_link)

[Comparable.Type.DateTime.To.DateTime](external_link)

[Comparable.Type.Decimal.To.BitString](external_link)

[Comparable.Type.Decimal.To.Decimal](external_link)

[Comparable.Type.Decimal.To.Float](external_link)

[Comparable.Type.Decimal.To.Integer](external_link)

[Comparable.Type.Float.To.Decimal](external_link)

[Comparable.Type.Integer.To.Decimal](external_link)

[Comparable.Type.List.To.List](external_link)

[Comparable.Type.Map.To.Map](external_link)

[Comparable.Type.NaiveDateTime.To.NaiveDateTime](external_link)

[Comparable.Type.Time.To.Time](external_link)

[Comparable.Type.Tuple.To.Tuple](external_link)

##  __ Mix Tasks

[mix ash.codegen](external_link)

Runs all codegen tasks for any extension on any resource/domain in your application.

[mix ash.gen.base_resource](external_link)

Generates a base resource

[mix ash.gen.domain](external_link)

Generates an Ash.Domain

[mix ash.gen.enum](external_link)

Generates an Ash.Type.Enum

[mix ash.gen.resource](external_link)

Generate and configure an Ash.Resource.

[mix ash.generate_livebook](external_link)

Generates a Livebook for each Ash domain.

[mix ash.generate_policy_charts](external_link)

Generates a Mermaid Flow Chart for a given resource's policies.

[mix ash.generate_resource_diagrams](external_link)

Generates a Mermaid Resource Diagram for each Ash domain.

[mix ash.install](external_link)

Installs Ash into a project. Should be called with `mix igniter.install ash`

[mix ash.migrate](external_link)

Runs all migration tasks for any extension on any resource/domain in your application.

[mix ash.patch.extend](external_link)

Adds an extension or extensions to the domain/resource

[mix ash.reset](external_link)

Runs all tear down tasks for any extension on any resource/domain in your application, followed by setup tasks.

[mix ash.rollback](external_link)

Runs all rollback tasks for any extension on any resource/domain in your application.

[mix ash.setup](external_link)

Runs all setup tasks for any extension on any resource/domain in your application.

[mix ash.tear_down](external_link)

Runs all tear down tasks for any extension on any resource/domain in your application.

[ Next Page →  Home  ](external_link)
