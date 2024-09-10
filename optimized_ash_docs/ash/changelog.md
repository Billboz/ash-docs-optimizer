# Changelog — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Changelog
  - __ [v3.4.8](external_link) (2024-09-09)
    - __ Bug Fixes:
  - __ [v3.4.7](external_link) (2024-09-06)
    - __ Improvements:
  - __ [v3.4.6](external_link) (2024-09-06)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.4.5](external_link) (2024-09-05)
    - __ Bug Fixes:
  - __ [v3.4.4](external_link) (2024-09-05)
  - __ [v3.4.3](external_link) (2024-09-04)
    - __ Bug Fixes:
  - __ [v3.4.2](external_link) (2024-09-04)
    - __ Bug Fixes:
    - __ Improvements with backwards compatibility configurations
    - __ Improvements:
  - __ [v3.4.1](external_link) (2024-08-13)
    - __ Bug Fixes:
  - __ [v3.4.0](external_link) (2024-08-12)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.3.3](external_link) (2024-08-01)
    - __ Bug Fixes:
  - __ [v3.3.2](external_link) (2024-08-01)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.3.1](external_link) (2024-07-30)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.3.0](external_link) (2024-07-27)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.2.6](external_link) (2024-07-22)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.2.5](external_link) (2024-07-22)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.2.4](external_link) (2024-07-18)
    - __ Bug Fixes:
  - __ [v3.2.3](external_link) (2024-07-18)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.2.2](external_link) (2024-07-17)
    - __ Features:
    - __ Bug Fixes:
  - __ [v3.2.1](external_link) (2024-07-17)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.2.0](external_link) (2024-07-15)
    - __ Features:
    - __ Improvements:
  - __ [v3.1.8](external_link) (2024-07-14)
    - __ Bug Fixes:
  - __ [v3.1.7](external_link) (2024-07-14)
    - __ Bug Fixes:
  - __ [v3.1.6](external_link) (2024-07-14)
    - __ Bug Fixes:
  - __ [v3.1.5](external_link) (2024-07-14)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.1.4](external_link) (2024-07-13)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.1.3](external_link) (2024-07-11)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.1.2](external_link) (2024-07-10)
    - __ Bug Fixes:
  - __ [v3.1.1](external_link) (2024-07-10)
    - __ Bug Fixes:
  - __ [v3.1.0](external_link) (2024-07-09)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.16](external_link) (2024-06-21)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.15](external_link) (2024-06-18)
    - __ Improvements:
  - __ [v3.0.14](external_link) (2024-06-18)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.13](external_link) (2024-06-17)
    - __ Bug Fixes:
  - __ [v3.0.12](external_link) (2024-06-14)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.11](external_link) (2024-06-11)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.10](external_link) (2024-06-06)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.9](external_link) (2024-05-31)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.8](external_link) (2024-05-28)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.7](external_link) (2024-05-24)
    - __ Improvements:
  - __ [v3.0.6](external_link) (2024-05-23)
    - __ Bug Fixes:
  - __ [v3.0.5](external_link) (2024-05-23)
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.4](external_link) (2024-05-22)
    - __ Bug Fixes:
  - __ [3.0.3](external_link) (2024-05-22)
    - __ Features:
    - __ Bug Fixes:
    - __ Improvements:
  - __ [v3.0.2](external_link) (2024-05-15)
    - __ Improvements:
    - __ Bug Fixes:
  - __ [v3.0.1](external_link) (2024-05-14)
    - __ Features:
    - __ Bug Fixes:
  - __ [v3.0.0](external_link)
  - __ 3.0
    - __ Breaking Changes:
    - __ Features:
    - __ Improvements:
    - __ Bug Fixes:

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Changelog

##  __ [v3.4.8](external_link) (2024-09-09)

###  __ Bug Fixes:

  * [[`Ash.Policy.Authorizer`](external_link)] support passing a forbidden error for policy breakdowns per the docs

  * [[`Ash.Policy.Authorizer`](external_link)] don't report the action as the actor for policy breakdowns

  * [[`Ash.Changeset`](external_link)] check `changeset.action` before raising a required primary action error

  * [bulk actions] ensure proper return types for `:stream` strategy bulk update/destroys




##  __ [v3.4.7](external_link) (2024-09-06)

###  __ Improvements:

  * [[`Ash.Resource.Igniter`](external_link)] add `add_bypass` and `add_policy` igniter utilities



##  __ [v3.4.6](external_link) (2024-09-06)

###  __ Bug Fixes:

  * [loading relationships] don't select destination attributes that don't exist

  * [[`Ash.Filter.Runtime`](external_link)] properly pass actor when running filters at runtime

  * [[`Ash.Type.Struct`](external_link)] misplaced curly bracket when handling struct type casting

  * [bulk/atomic updates] properly leverage atomic upgrade read action for an update action




###  __ Improvements:

  * [[`Ash.Policy.Authorizer`](external_link)] show informative error explaining the use of filter checks with create actions

  * [[`Ash.Policy.Authorizer`](external_link)] show the actor's primary key in policy breakdowns

  * [[`Ash.Policy.Authorizer`](external_link)] add an expanded description option to checks

  * [[`Ash.Policy.Authorizer`](external_link)] use expanded description to display filled in filter templates in policy breakdowns

  * [[`Ash.Changeset`](external_link) ] Add [`Ash.Changeset.is_valid/1`](external_link) guard. (#1437)




##  __ [v3.4.5](external_link) (2024-09-05)

###  __ Bug Fixes:

  * [update actions] fix type definition for `atomic_upgrade_with`



##  __ [v3.4.4](external_link) (2024-09-05)

##  __ [v3.4.3](external_link) (2024-09-04)

###  __ Bug Fixes:

  * [loading relationships] properly await tasks from lazy loading multiple relationships



##  __ [v3.4.2](external_link) (2024-09-04)

###  __ Bug Fixes:

  * [soft destroys] honor `return_destroyed?` in soft destroy actions

  * [[`Ash.Resource.Change`](external_link)] correctly handle return values of batch callbacks (#1424)

  * [read actions] ensure that async limiter is cleared up front

  * [bulk creates] honor bulk upsert condition (#1432)

  * [bulk updates] ensure that update_defaults are set on streaming updates

  * [bulk actions] honor `skip_global_validations?` in bulk actions

  * [pagination] honor the `countable` option in pagination

  * [read actions] return proper data shape when doing a read in a transaction

  * [notifications] ensure that `from` is properly set on all notifications

  * [notifications] fix typo in bulk destroy not clearing ash_started_transaction state

  * [calculations] traverse calculated relationships when rewriting transient calculation values

  * [calculations] don't unload calculation dependencies when `lazy?` is set

  * [[`Ash.DataLayer.Ets`](external_link)] handle no_attributes when joining lateral join relationship data

  * [[`Ash.DataLayer.Ets`](external_link)] fix ets lateral join source field usage

  * [[`Ash.DataLayer.Ets`](external_link)] properly apply distinct in ets




###  __ Improvements with backwards compatibility configurations

These configurations default to the current behavior, but in 4.0 (someday) will be removed, and the new option will be the only option.

  * [pagination] make default page type configurable, defaulting to `:offset`.


    
    
    # set this configuration to adopt the new preferred behavior
    config :ash,
      default_page_type: :keyset

  * [[`Ash.Policy.Authorizer`](external_link)] make read policies more consistent, always preferring to filter over raise



Currently, some read actions can still return a `Forbidden` error, even though policies are meant to filter out records by default. Now, it will always filter, unless you set `access_type :strict` in the policy.
    
    
    # set this configuration to adopt the new preferred behavior
    config :ash, :policies,
      no_filter_static_forbidden_reads?: false

###  __ Improvements:

  * [[`Ash.Policy.Authorizer`](external_link)] show an explanation when a forbidden is because no policies applied

  * [[`Ash.Policy.Authorizer`](external_link)] error at compile for bypasses that will have no effect

  * [[`Ash.Resource.ManualRead`](external_link)] add `load_relationships/5` callback to manual reads

  * [[`mix ash.gen.resource`](external_link)] add `uuid-v7-primary-key` option to [`mix ash.gen.resource`](external_link)

  * [[`Ash.Resource.Change.CascadeUpdate`](external_link)] add cascade update built in change (#1398)

  * [[`Ash.Resource.Change.CascadeDestroy`](external_link)] add `read_action` option to `cascade_destroy`

  * [inline aggregates] support `expr` and `expr_type` options when building aggregates

  * [create actions] Implement condition for upsert (#1386)

  * [optimization] do not add relationship filter when building relationship authorization

  * [optimization] don't list telemetry handlers if app is compiling

  * [optimization] do not call tracer `set_metadata` with span type that it ignores (#1400)

  * [optimization] optimize filter expr traversal

  * [optimization] Add a case for handling mapsets in Filter.map (#1427)

  * [optimization] Cache always selected fields and use mapsets for building select list (#1428)

  * [optimization] add pattern for Ash.Query.Call in Filter.map (#1416)

  * [optimization] prevent unnecessary calls to `Ash.load`

  * [optimization] cache action known inputs individually

  * [optimization] cache action required inputs all together

  * [optimization] optimize to avoid inspects in changesets

  * [optimization] optimize to avoid expensive `String.valid?` check in uuid type

  * [optimization] add `async?` option to calculations, default to false

  * [optimization] optimize field checking for loading fields in query

  * [optimization] allow functions in tracers for lazy loading metadata

  * [optimization] don't start processes for single items in list

  * [optimization] Optimize option validation with compile time validators (#1387)




##  __ [v3.4.1](external_link) (2024-08-13)

###  __ Bug Fixes:

  * [authorization] properly pass actor, action, tenant etc. to lazy loaded relationships



##  __ [v3.4.0](external_link) (2024-08-12)

###  __ Features:

  * [[`Ash.Policy.Authorizer`](external_link)] add policy groups

  * [authorization] support `authorize_with` option on `Ash.read`, allowing to error if any forbidden matching data exists

  * [[`Ash.Resource`](external_link)] Add `@type t` typespec to resource if it doesn't exist




###  __ Bug Fixes:

  * [calculations] remove pattern match error when exceptions come from calculations

  * [calculations] resolve nested expression calculation references in runtime filters

  * [arrays] Fix error with nil value on structure types (#1380)

  * [bulk actions] Pass options without :templated tuple to after_batch (#1376)

  * [bulk actions] `after_batch` arguments for `bulk_create` with `return_records?` disabled (#1371)

  * [bulk actions] set `upsert?` option when managing relationships in bulk creation

  * [[`Ash.Resource`](external_link)] check for `nil` resource_calculation in [`Ash.Resource.loaded?/2`](external_link)

  * [[`Ash.Expr`](external_link)] properly consider not-loaded record calculations as `:unknown`

  * [atomic updates] handle `nil` in atomic array casting

  * [aggregates] respect previously validated-for-action query for aggregates

  * [[`mix ash.gen.resource`](external_link)] use `timestamps()` instead of `timestamps`

  * [belongs_to relationships] prefer `source_attribute` is required, instead of relationship name




###  __ Improvements:

  * [performance] optimizations around allocating strings

  * [performance] optimizations around list operations for embedded resources

  * [performance] prune calculations made unnecessary by field policies

  * [performance] add optimized path for casting embeds when they are simple

  * [performance] add `include_embedded_source_by_default?` config to optimize embeds

  * [error messages] show proper error message when trying to accept non-writable attributes

  * [error messages] add "hints" to `NoSuchInput` errors to make any errors clearer

  * [[`Ash.Expr`](external_link)] warn on usage of `== nil`

  * [[`Ash.Expr`](external_link)] implement [`Comp`](external_link) for atoms & strings, comparing atoms as strings

  * [embedded resources] increase cases where embedded attribute can be updated atomically

  * [[`Ash.Type.Struct`](external_link)] support `:fields` constraint on `:struct` type, enabling persistence

  * [bulk actions] Warn on bulk action `return_stream?` without any other `return_*?` options enabled. (#1370)

  * [calculations] ensure the called calculation function is always in the stacktrace

  * [dependencies] remove `:comparable` as a dependency

  * [[`Ash.Resource`](external_link)] Add default values to resulting Resource struct (#1364)




##  __ [v3.3.3](external_link) (2024-08-01)

###  __ Bug Fixes:

  * delete ash_notifications from pdict after reading



##  __ [v3.3.2](external_link) (2024-08-01)

###  __ Bug Fixes:

  * [[`Ash.Igniter`](external_link)] properly parse multiple occurrences of :keep arguments

  * [calculations] properly key nested calculations and add additional tests

  * [calculations] pass relationship path down when merging query loads

  * [[`mix ash.codegen`](external_link)] don't set `--name nil` when calling codegen tasks

  * [[`Ash.Filter`](external_link)] fix behavior of synthesized joins across data layers




###  __ Improvements:

  * [[`mix ash.gen.resource`](external_link)] add `--timestamps` argument to add timestamps to the resource



##  __ [v3.3.1](external_link) (2024-07-30)

###  __ Bug Fixes:

  * [[`mix ash.gen.domain`](external_link)] properly parse domain module in [`mix ash.gen.domain`](external_link)

  * [[`Ash.Resource.Change`](external_link), [`Ash.Resource.Validation`](external_link)] properly handle mixed atomic & non-atomic validations/changes

  * [[`Ash.Filter`](external_link)] properly find data layer predicates when name is provided as a string

  * [relationships] set `accessing_from` and join read action for many_to_many relationships correctly (#1355)




###  __ Improvements:

  * [[`Ash.Resource.Change`](external_link)] implement `change/3` automatically if batch callbacks are defined



##  __ [v3.3.0](external_link) (2024-07-27)

###  __ Features:

  * [[`Ash.Type.File`](external_link)] Add Ash.Type.File (#1337)



###  __ Bug Fixes:

  * [bulk actions] ensure that statuses are set correctly on bulk actions

  * [bulk actions] properly transfer process context(tracers) for bulk actions

  * [embedded resources] properly display identity/primary key mismatch error on lists of embeds

  * [[`Ash.Type.NewType`](external_link)] apply constraints to NewType even when casting an array (#1341)

  * [[`Ash.Query`](external_link)] pass reuse_values? true when loading in Ash.Query.apply_to/2 (#1346)

  * [code interfaces] honor `skip_unknown_inputs` in code interfaces

  * [notifications] don't gather notifications except for in the top level transaction starter

  * [generic actions] support `skip_unknown_inputs` on generic actions

  * [atomic updates] ensure `changed?` context is set on atomic changesets (we assume it is `true`, its up to extensions to handle)

  * [[`Ash.Type.CiString`](external_link), [`Ash.Type.String`](external_link)] Update string/ci_string generators to ensure min_length (#1335)

  * [[`Ash`](external_link)] handle `{record, action, input}` types in `Ash.can?`

  * [bulk actions] only call `batch_change` if it is defined, never `change` in bulk create




###  __ Improvements:

  * [[`mix ash.gen.resource`](external_link)] better positional argument handling with igniter

  * [[`Ash.Expr`](external_link)] use `:utc_datetime_usec` for `now()` return type

  * [[`mix ash.install`](external_link)] don't install sat solver in initial installation

  * [[`Ash.Policy.Authorizer`](external_link)] validate that a solver exists at compile time when using policies

  * [[`Ash.Type.Enum`](external_link)] Expose type t() on Ash.Type.Enum implementations (#1338)

  * [[`Ash.Resource`](external_link)] add :* as a valid value in `skip_unknown_inputs`

  * [[`Ash.Resource`](external_link)] add `skip_unknown_inputs` to individual actions

  * [embedded resources] add `skip_unknown_inputs` constraint to embedded resources

  * [embedded resources] automatically fall back to a default domain when working with embeds

  * [[`Ash`](external_link)] handle 3 tuple in `Ash.can?`

  * [[`Ash.Error`](external_link)] add `Ash.Error.error_descriptions`




##  __ [v3.2.6](external_link) (2024-07-22)

###  __ Bug Fixes:

  * [bulk actions] fallback to `authorize_with` when authorizing bulk destroy actions

  * [bulk actions] don't refer to non-existent `batch_change/4`




###  __ Improvements:

  * [bulk actions] Replace incorrect function_exported?-checks in bulk-actions, add has-defs for change modules (#1330)



##  __ [v3.2.5](external_link) (2024-07-22)

###  __ Bug Fixes:

  * [destroy actions] apply atomic validations on non-bulk destroy actions

  * [[`Ash.Policy.Info`](external_link)] add default to private_fields_policy in Ash.Policy.Info (#1329)

  * [relating_to_actor] make `relating_to_actor` built-in-check aware of atomics

  * [[`Ash.Expr`](external_link)] remove redundant overload of `Ash.Expr.get_path` (#1328)

  * [[`Ash.Type.NewType`](external_link)] cast_input/2 of Ash.Type.NewType returning :ok (#1324)

  * [[`Ash.Reactor`](external_link)] warnings emitted by removed reactor behaviour function. (#1325)




###  __ Improvements:

  * [bulk actions] add `authorize_with` fallback option to bulk actions

  * [[`Ash.Policy.Authorizer`](external_link)] allow policy conditions to be applied inside their block




##  __ [v3.2.4](external_link) (2024-07-18)

###  __ Bug Fixes:

  * [transaction hooks] fix warning on transaction hooks violating their semantics



##  __ [v3.2.3](external_link) (2024-07-18)

###  __ Bug Fixes:

  * [[`mix ash.patch.extend`](external_link)] properly convert extension string into a module

  * [[`mix ash.patch.extend`](external_link)] only display available to extend

  * [[`mix ash.install`](external_link)] mix igniter.install ash --example case clause error (#1317)

  * [multitenancy] only use attribute for filtering when multitenancy strategy == :attribute




###  __ Improvements:

  * [[`Ash.Resource.Igniter`](external_link)] Add `Ash.Resource.Igniter.domain` to get the domain of a resource



##  __ [v3.2.2](external_link) (2024-07-17)

###  __ Features:

  * [[`Ash.Reactor`](external_link)] Add ash_step wrapper (#1311)



###  __ Bug Fixes:

  * [bulk destroys] honor atomic validations in destroy actions using `filter`

  * [Ash.Type.Vector] handle casting nil vectors (#1316)

  * [Ash.Type] don't override `nil` handling in [`Ash.Type.cast_input/3`](external_link)




##  __ [v3.2.1](external_link) (2024-07-17)

###  __ Bug Fixes:

  * properly honor the `include_nil?` option

  * store after_action hooks added outside of changes for atomic upgrade

  * don't use `type/3` in string interpolation

  * properly pass `include_nil?` from when building query aggregates




###  __ Improvements:

  * allow skipping initialization of types in unions



##  __ [v3.2.0](external_link) (2024-07-15)

###  __ Features:

  * [field policies] Allow field policies to hide private fields (#1289)



Use the `private_fields :include | :show | :hide` option in the `field_policies` section of your resource to control how private fields are handled by field policies.

For example:
    
    
    # hide all private fields when authorizing
    field_policies :hide
    
    # the current behavior. Private fields are ignored by field policies
    field_policies :show
    
    # private fields can have field policies like any other field
    field_policies :include

###  __ Improvements:

  * [[`Ash.Domain.Igniter`](external_link)] add [`Ash.Domain.Igniter.list_domains/1`](external_link)

  * [[`Ash.Resource.Igniter`](external_link)] add [`Ash.Resource.Igniter.list_resources/1`](external_link)




##  __ [v3.1.8](external_link) (2024-07-14)

###  __ Bug Fixes:

  * [bulk actions] use `unpaginated_read` when simulating streaming for low limit queries



##  __ [v3.1.7](external_link) (2024-07-14)

###  __ Bug Fixes:

  * [Ash.Query] don't use `:same` return type for most operators

  * [Ash.Query] don't use returns as basis type unless explicitly allowed




##  __ [v3.1.6](external_link) (2024-07-14)

###  __ Bug Fixes:

  * [Ash.Query] ensure `today` has properly configured returns type

  * [Ash.Type] module type apply_constraints for nil fix (#1313)




##  __ [v3.1.5](external_link) (2024-07-14)

###  __ Bug Fixes:

  * [Ash.Type] don't specify that `get_path` is a predicate function



###  __ Improvements:

  * [Ash.Expr] add `Ash.Expr.determine_type(mod, children)`

  * [Ash.Query] add return typing to functions




##  __ [v3.1.4](external_link) (2024-07-13)

###  __ Bug Fixes:

  * [code interface] properly omit destroyed result in code interfaces

  * [Ash.Type.Integer] properly compare `expr` to `min` with `min` integer constraint

  * [Ash.Reactor] Make action ctx-values from reactor-ctx take precedence if set. (#1308)




###  __ Improvements:

  * [Ash.Resource.Change] support returning a list of atomics from atomic change callbacks

  * [Ash.Type] add `cast_atomic_constraints` callback and use it in core types

  * [Ash.Expr] improve type signature for `if/3`

  * [Ash.Expr] simpler and/or short circuiting




##  __ [v3.1.3](external_link) (2024-07-11)

###  __ Bug Fixes:

  * [bulk actions] ensure that errors in queries do not raise in atomic upgrades/single atomics

  * [Ash.Type.Integer] use correct contraint when validating min int (#1298)

  * [Ash.Filter] don't refer to private attributes when parsing filter inputs that refer to relationships (#1280)




###  __ Improvements:

  * [Ash.Query] add `strict?` option to `Ash.Query.load` (#1302)



##  __ [v3.1.2](external_link) (2024-07-10)

###  __ Bug Fixes:

  * [bulk actions] ensure that manual action configurations are honored for bulk actions



##  __ [v3.1.1](external_link) (2024-07-10)

###  __ Bug Fixes:

  * [ash.install] installer doesn't need to add spark as a dependency, just run its installer



##  __ [v3.1.0](external_link) (2024-07-09)

###  __ Features:

  * [Generators] add [`mix ash.install`](external_link) (call with `mix igniter.install ash`)

  * [Generators] add [`mix ash.gen.resource`](external_link)

  * [Generators] add [`mix ash.gen.base_resource`](external_link)

  * [Generators] add [`mix ash.gen.domain`](external_link)

  * [Generators] add `mix ash.extend`

  * [Ash.Type.UUIDv7] Add built in [`Ash.Type.UUIDv7`](external_link) type, and `uuid_v7_primary_key` builder




###  __ Bug Fixes:

  * [atomics] sort primary key changes ahead of others in atomic changes

  * [Ash.Changeet] fix typespec for Changeset.around_transaction/2 (#1292)

  * [multitenancy] ensure tenancy is always enforced on create/update/destroy actions

  * [loading relationships] lateral join on `from_many? true` relationships

  * [calculations] don't reuse calculations/aggregates if `authorize?` is true

  * [aggregates] ensure aggregate context is fully configured in `Ash.aggregate`

  * [bulk actions] properly transfer changeset.context on streamed batch changesets

  * [bulk actions] ensure notifications are dispatched from bulk actions

  * [lazy loading] lazy-loading logic for calculations/aggregates was inversed (#1275)

  * [error handling] properly match on async task exceptions

  * [policies] ensure `context` is available in policy template expressions

  * [policies] ensure forbidden errors behave the same when using implicit bulk version of code interface functions

  * [manual relationships] compare keys in manual relationships when using 'complex' types (#1270)

  * [Ash.Filter] cover more cases in filter input parsing (#1261)

  * [has_one relationships] automatically set `from_many?` if a `has_one` has a `sort` applied

  * [Ash.Filter] fix match error when synthesizing joins across data layers

  * [Ash.DataLayer.Ets] properly support multitenancy when referencing relationships

  * [Ash.Type.Union] initialize & validate each subtype of a union




###  __ Improvements:

  * [Ash.Type.Enum] allow overriding `cast_stored/2` and `dump_to_native/2`

  * [Ash.DataLayer.Simple] support offset in the simple data layer

  * [Ash.Changeset] allow after_action hooks in fully atomic changesets




##  __ [v3.0.16](external_link) (2024-06-21)

###  __ Bug Fixes:

  * [bulk updates] use the proper opts when calling manual updates in bulk updates

  * [pagination] apply pagination at runtime for non lateral join queries

  * [multitenancy] consider multitenancy when checking if through-join is unique

  * [Ash.Changeset] don't run any `before_action` hooks if changeset is invalidated in prior hook

  * [atomic upgrade] only prevent atomic upgrade when hooks were explicitly added




###  __ Improvements:

  * [Ash.Error] retain error context on overridden messages



##  __ [v3.0.15](external_link) (2024-06-18)

###  __ Improvements:

  * [Ash.Type] add optional `matches_type?/2` callback to [`Ash.Type`](external_link)

  * [Ash.Domain] add `backwards_compatible_interface?` option to `use Ash.Domain`




##  __ [v3.0.14](external_link) (2024-06-18)

###  __ Bug Fixes:

  * [many-to-many relationships] apply join relationship filter when loading many_to_many relationships

  * [Ash.Query] ensure we honor any computed select changes when loading through attributes




###  __ Improvements:

  * [Ash.Policy.Authorier] add `subject` and `context` keys to policy context



##  __ [v3.0.13](external_link) (2024-06-17)

###  __ Bug Fixes:

  * [parallelism] don't start async limiter tasks if async is disabled

  * [Ash.Domain] properly set default timeout to `:infinity`

  * [upserts] pass down `identity` when doing upserts, for new feature support

  * [Ash.Changeset] ensure that `before_transaction` hook errors fail the operation

  * [Ash.Changeset] ensure that `before_transaction` hook errors still trigger `after_transaction` hooks

  * [bulk updates] abort bulk updates on before transaction hook errors




##  __ [v3.0.12](external_link) (2024-06-14)

###  __ Bug Fixes:

  * [atomic updates] fix expression interpolation for cast_atomic for integer, decimal, float

  * [generic actions] set default argument values on generic actions

  * [generic actions] support [`^arg/1`](external_link) and similar constructions in filter policies on generic actions




###  __ Improvements:

  * [Ash.Resource] set a `module` when validating accepts



##  __ [v3.0.11](external_link) (2024-06-11)

###  __ Bug Fixes:

  * [loading through attributes] only apply load through for attributes that are being selected directly

  * [relationship loading] ensure we lateral join with `from_many?: true` or any `:many` cardinality relationships

  * [create/update/destroy actions] correctly load paginated relationships after create, update, delete (#1229)

  * [bulk create/update/destroy] load relationships on bulk operations (#1234)

  * [Ash.Type.Atom] return proper `{:ok, value}` from `Ash.Type.Atom.apply_constraints/2`

  * [Ash.Filter] fix the compare/2 implementations (#1232)

  * [Ash.Filter] return proper value from short-circuit filter hydration

  * [Ash.Seed] fix seed not working when :**keep_nil** is generated using seed_input (#1228)

  * [Ash.Generator] pass resource to Ash.Seed.seed! in Ash.Generator.seed! (#1227)




###  __ Improvements:

  * [Ash.Resource] validate `require_attributes` (error) and `allow_nil_input` (warning) at compile time

  * [Ash.Seed] add tenant option to Ash.Seed.seed! (#1230)




##  __ [v3.0.10](external_link) (2024-06-06)

###  __ Bug Fixes:

  * [Ash.Union] ensure that union types w/ explicit tags have constraints applied

  * [multitenancy] don't update tenant on update, instead enforce it

  * [compare/2 validation] Do not compare nil values in `compare` validation (#1223)

  * [bulk actions] ensure context is properly set on bulk manual action invocations




###  __ Improvements:

  * [Ash.Resource] detect invalid resources placed in relationships on domains verifier

  * [Ash.Resource] warn at compile time on types that don't define `atomic_update/2`




##  __ [v3.0.9](external_link) (2024-05-31)

###  __ Bug Fixes:

  * [Ash.Filter] use correct boolean operation names in Filter.find/4 (#1214)

  * [aggregates] when hydrating nested aggregates, use correct related resource/path pair

  * [aggregates] retain `ref_path` when authorizing aggregates

  * [relationship loading] ensure that belongs_to relationships are properly not reloaded with `lazy?: true`

  * [bulk actions] implement rollback on after hooks for bulk actions

  * [bulk actions] check if in transaction before trying to roll it back




###  __ Improvements:

  * compatibility with elixir 1.17



##  __ [v3.0.8](external_link) (2024-05-28)

###  __ Bug Fixes:

  * [bulk updates] missing `else` caused manual updates not to work with `bulk_update`

  * [Ash.Policy.Authorizer] properly compose multiple filter-checks in policy conditions

  * [Ash.Policy.Authorizer] properly honor trailing policies that are constantly false




###  __ Improvements:

  * [Ash.Notifier] verify notifiers all use the [`Ash.Notifier`](external_link) behaviour



##  __ [v3.0.7](external_link) (2024-05-24)

###  __ Improvements:

  * [identities] support `nils_distinct?` on identities

  * [identties] support `where` option on `identities`

  * [identities] allow calculations in identity keys




##  __ [v3.0.6](external_link) (2024-05-23)

###  __ Bug Fixes:

  * [policies] don't raise an error when authorizing against previous values without atomic upgrades

  * [calculations] handle subquery-requiring calculations in `calculate/2`, ensuring we have a primary key

  * [Ash.DataLayer] resolve mixup between atomic upsert vs update capability of datalayers (#1198)




##  __ [v3.0.5](external_link) (2024-05-23)

###  __ Bug Fixes:

  * [mix ash.*] only use `Mix.deps_tree` if defined (its only defined for elixir 1.15+)



###  __ Improvements:

  * [atomic upgrade] add `atomic_upgrade?` flag to update/destroy actions

  * [atomic upgrade] do not do atomic upgrade by default unless `require_atomic?` is `true`

  * [atomic upgrade] allow configuring the read action used by atomic upgrades




##  __ [v3.0.4](external_link) (2024-05-22)

###  __ Bug Fixes:

  * [bulk update/destroy] ensure that all notifications are sent



##  __ [3.0.3](external_link) (2024-05-22)

###  __ Features:

  * [relationship pagination] allow retrieving the count of paginated relationships (#1183)

  * [Ash.Reactor] Add `bulk_create` step type.

  * [Ash.Reactor] Add `bulk_update` step type. (#1185)




###  __ Bug Fixes:

  * [Ash.Actions.Read] properly hydrate and scope sorts with query context

  * [Ash.Changeset] handle list of atomic conditions coming from atomic validation implementation (#1194) (#1195)

  * [embedded resources] handle nil value for old_values when casting arrays (#1191)

  * [Ash.Query] use [`Ash.Sort.parse_input/3`](external_link) in [`Ash.Query.sort_input/2`](external_link)

  * [Ash.Resource.Validation.Changing] works correctly in atomics, and can eagerly detect changing (#1178)

  * [atomic updates] check the where condition before checking validation atomicity (#1177)

  * [bulk actions] don't emit after batch notifications if `notify?: false`

  * [Ash.Resource] prefer resource domain over option domain (#1176)

  * [bulk update/destroy] don't require domain for empty stream bulk update and destroy (#1175)

  * [Ash.Generator] only return valid non nil values items from generator (#1121)

  * [bulk destroy] properly validate action when calling bulk destroy

  * [code interface] allow all strategies for bulk actions in code interfaces by default

  * [code interfaces] honor `get?` for bulk update/bulk destroy




###  __ Improvements:

  * [Ash.Query] support anonymous aggregates and calculations in sorts

  * [sensitive fields] Implement `show_sensitive?` config (#1180)

  * [Ash.Query] support `filter_input` and `sort_input` in [`Ash.Query.build/2`](external_link)

  * [Ash.Changeset] add `template_requires_actor` check for changesets

  * [bulk update/destroy] don't use queries for streaming if they have hooks

  * [Ash.Policy.Check.ChangingAttributes] consider `from: nil` in `changing_attributes/1` check




##  __ [v3.0.2](external_link) (2024-05-15)

###  __ Improvements:

  * [Ash.Expr] add pattern matching for clarity on values accepted by `ref/1` and `ref/2`

  * [Ash.Expr] add `can_return_nil?/1` callback to Ash expressions, allowing for various optimizations

  * [Ash.Type.NewType] raise argument error on unknown options in [`Ash.Type.NewType`](external_link). Helps with typos & misunderstandings

  * [embedded resources] use the `source` configuration for attributes in embedded resources (it was previously just ignored)

  * [Ash.Policy.Authorizer] better type specification for checks, to get better autocomplete and compile time validation

  * [Ash.Error.Invalid.NoSuchInput] added a `did_you_mean` field and used it in the error message




###  __ Bug Fixes:

  * [Ash.Resource] properly persist simple_notifiers (they were being ignored before)

  * [code interface] accept single ids in code interface as subject for destroy/update

  * [bulk update] ensure that the `changed?` context is set in after action hooks on batches

  * [relationships] allow for inferred domains when authorizing join queries

  * [Ash.Expr] don't treat `nil` as not a valid value when type casting lists

  * [atomic upgrade] keep data's metadata in atomic upgraded update (#1165)




##  __ [v3.0.1](external_link) (2024-05-14)

###  __ Features:

  * [Ash.Resource.Change.Builtins] Add `cascade_destroy` to builtin changes.



###  __ Bug Fixes:

  * [calculations] calculation eager evaluation bug caused `exists` to eager evaluate when we didn't actually have the related data

  * [field policies] fix field policy rewrite errors on non-success cases (#1163)

  * [embedded resources] fix embedded resource authorization (#1159) (#1160)

  * infinite recursion if query is empty (#1158)

  * [Ash.DataLayer.Ets] ensure that changeset filters are honored in ETS destroy/update_query

  * [update/destroy actions] don't rollback transactions on stale records, ignore stale records in bulk actions

  * [bulk creates] don't check required belongs to fields until after setting them in bulk creation

  * [code interface] check require_reference? when generating update code interface (#1152)




##  __ [v3.0.0](external_link)

##  __ 3.0

We are starting the changelog fresh. See `documentation/2.0-CHANGELOG.md` in GitHub for the old changelogs.

###  __ Breaking Changes:

For a guide on adjusting to these breaking changes, see the [upgrade guide](external_link)

  * [Ash.Api] has been renamed to [`Ash.Domain`](external_link), and references to the concept have been renamed as well, i.e in options and in the DSL
  * [Ash] we now call functions on this, isntead of the domain. i.e `Ash.create` and `Ash.read`. The generated functions are now marked as deprecated
  * [Ash] remove process context functionality. You can no longer store the actor/tenant in the context with `Ash.set_actor` and so on
  * [private?] deprecate `private?: false` in favor of the more explicit `public?: true`
  * [default_accept] default `default_accept` is now `[]`
  * [action lifecycle] after transaction hooks cannot be added from inside of other lifecycle hooks
  * [Ash.NotLoaded] use `%Ash.NotLoaded{}` for unselected values, instead of `nil`
  * [require_atomic?] now defaults to `true`, requiring opt-out of atomic behavior
  * [authorization] default `api.authorization.authorize` to `:by_default`
  * [Ash.Registry] has been removed
  * [actions] `domain` must always be known when constructing changesets
  * [Ash.Notifier] `requires_original_data?/2` callback defaults to `false`
  * [Ash.Notifier.PubSub] default to `previous_values?: false`, allowing notifications to be sent for atomic updates
  * [unknown inputs] all action invocations now use `UnknownInput` errors when given an input they don't accept
  * [policies] `requires_original_data?/2` callback on checks defaults to `false`
  * [Ash.Calculation] has been renamed to [`Ash.Resource.Calculation`](external_link)
  * [Ash.Resource.Calculation] "strict mode" has been added and defaults to `true`. This causes only explicitly requested fields from relationships to be loaded
  * [Ash.Query.Calculation] positional arguments are now an options list
  * [calculations] anonymous function calculations in a resource now take lists and return lists, instead of a single record (like standard calculations do)
  * [context] The context argument passed to many different callbacks is now a struct, tailored to that specific context. For example, in a calculation you will receive an [`Ash.Resource.Calculation.Context`](external_link)
  * [after_action/before_action] These builtin changes now accept a 3rd context argument
  * [picosat_elixir] is now optional (`simple_sat` is now an alternative)
  * [Ash.Changeset] `Ash.Changeset.new!` has been removed
  * [Ash.Changeset] `Ash.Changeset.new/2` has been removed ([`Ash.Changeset.new/1`](external_link) is still available)
  * [Ash.Changeset] `changeset.filters` is now `changeset.filter`
  * [Ash.Changeset] reverse order of before action & before transaction hooks. They now run in the action they are added. They used to run in reverse order.
  * [Ash.CiString] [`Ash.CiString.new/1`](external_link) returns `nil` on `nil` input
  * [belongs_to.attribute_writable?] add `attribute_public?` for controlling publicity, and default `attribute_writable?` to `true`.
  * [Ash.Filter.TemplateHelpers] removed, all functions needed for expressions are now defined in [`Ash.Expr`](external_link)
  * [Ash.Expr] keyword lists are no longer special cased in ash expressions, and requiring pinning like any other value.
  * [Ash.Resource] default read actions are now paginatable with keyset and offset pagination (but pagination is not required)
  * [Ash.Resource] default actions require explicit accept lists (or will use `default_accept`). i.e `defaults [:read, create: [:first_name, :last_name]]`
  * [Ash.Resource] `simple_notifiers` is now an option to `use Ash.Resource`, instead of being in the DSL at `resource.simple_notifiers`
  * [Ash.Flow] has been removed and put in its own package `ash_flow`. It is being deprecated in favor of [`Reactor`](external_link)
  * [Ash.Error] the implementation has been extracted out to [`Splode`](external_link). Defining new [`Ash.Error`](external_link)s is now done by defining a new [`Splode.Error`](external_link)
  * [Ash.Query] swap position of sort order and arguments in calculation sorting, i.e instead of `calculation: {:asc, %{...args}}` it is now `calculation: {%{...args}, :asc}`
  * [Ash.Resource.Aggregate] add `include_nil?` aggregate option, and default it to `false` (so `list` and `first` aggregates do not consider `nil` values by default)
  * [Ash.Policy.FilterCheck] now accepts `context` arguments, like `Ash.Policy.FilterCheckWithContext`
  * [Ash.Policy.FilterCheckWithContext] has been removed, use [`Ash.Policy.FilterCheck`](external_link)



###  __ Features:

  * [Ash.Type] add new remove_nil_items? array type constraint (#1116)
  * [Ash.Query] Paginatable relationships (#1050)
  * [Ash.DataLayer] new `calculate/3` callback that allows for data layers to compute the result of expressions outside the context of a query. Used to power [`Ash.calculate/3`](external_link).
  * [validations] new builtin validations, `attributes_present/2` and `attributes_absent/2`
  * [multitenancy] configurable multitenancy behaviour on read actions (#1030)
  * [Ash.Reactor] Add new `change` step type which can be used to modify changesets.
  * [Ash.Changeset] add `Ash.Changeset.update_change/2` function and builtin change (#976)
  * [Ash.Domain] code interfaces can now be defined on the domain
  * [Ash.Domain] policies can now be defined on the domain, and will run before resource policies
  * [Ash.ToTenant] add [`Ash.ToTenant`](external_link), allowing for passing arbitrary values as tenants
  * [Ash] add `Ash.read_first` (like `Ash.read_one`, but applies a limit automatically)
  * [Ash] support a second optional `input` option for `create`, `update` and `destroy`, allowing for things like `Ash.create!(Post, %{text: "text"}, opts)`
  * [sensitive?] support `sensitive?` option in query aggregate/calculation (#963)
  * [Ash.Resource] support `require_reference?: false` on code interfaces, for when an update or destroy action uniquely identifies a record (or for bulk update/destroy)
  * [Ash.Resource] notifiers can now be specified for specific actions, using the `notifiers` option
  * [mix ash.rollback] delegates to extensions to trigger their rollback tasks
  * [Ash.Query] add [`Ash.Query.apply_to/3`](external_link), to "apply" the query to a set of records (i.e filter, sort, distinct, etc.)
  * [Ash.CustomExpression] Use [`Ash.CustomExpression`](external_link) to extend Ash's expression syntax in a data-layer agnostic way
  * [code interface] Code interface functions now support bulk actions, in a "do what I mean" way. For example: `Domain.deactive(post)` can also be `Post |> Ash.Query.filter(active == true) |> Domain.deactive()`



###  __ Improvements:

  * [Ash.Actions.Sort] allow providing a stream of records to sort, and performance improvements
  * [bulk actions] add `read_action` option to bulk actions (#1088)
  * [Ash.stream] support streaming with offset, or even _no_ pagination
  * [Ash.DataLayer.Ets] add debug logging, similar to ecto query debug logging
  * [Ash.DataLayer.Ets] support update_query, destroy_query and [`Ash.Changeset.filter/2`](external_link)
  * [Embedded resources] don't add `autogenerated_id` to embeds if they don't have a primary key
  * [Ash.Resource] you can now omit the return type of generic actions, indicating it either succeeds or fails, returning `:ok` or `{:error, error}`
  * [Ash.Resource] Generic actions can now accept a Reactor module, running it directly. (#993)
  * [Ash.Resource] support `allow_nil_input` dsl option in update/destroy actions (#964)
  * [Ash.Resource] The `filter` option can now be supplied multiple times in read actions and in relationships. They will be combined with `and`
  * [Ash.Resource] private attributes can now be accepted as action inputs
  * [Ash.Expr] is now imported automatically into places you will likely use it, like changes, validations, checks and calculations.
  * [Ash.Query] is now required automatically in places you will likely use it, as above
  * [sortable?] fields may mark themselves as unusable in sorts by using `sortable? false`
  * [sensitive?] calculations and aggregates may now also be marked as `sensitive?`



###  __ Bug Fixes:

  * [Ash.Type] apply array type `nil_items?` constraint after item constraints are applied (#1115)
  * [Ash.DataLayer.Ets] fix ETS data layer's support for lateral joining
  * [bulk actions] ensure transaction is rolled back on data layer errors during streaming
  * [bulk actions] set `notify?: true` when `return_notifications?: true` is set
  * [Ash.Changeset] `attributes_present?/2` -> `attribute_present?/2`
  * [Ash.Filter] don't eager evaluate `type/3` because data layers require type information
  * [Ash.Changeset] when comparing identities for `manage_relationship`, we now properly cast the values. Before, `"1"` and `1` were not considered equal for integer primary keys/identity fields
  * Many more bug fixes were added, but few are relevant enough to list here



[ ← Previous Page  Alternatives  ](external_link)

[ Next Page →  Domains  ](external_link)
