# Ash.Resource.Change.Builtins — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource.Change.Builtins (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- after_action(callback, opts \\\ [])
  - __ Example
- after_transaction(callback, opts \\\ [])
  - __ Example
- atomic_update(attribute, expr, opts \\\ [])
- before_action(callback, opts \\\ [])
  - __ Example
- before_transaction(callback, opts \\\ [])
  - __ Example
- cascade_destroy(relationship, opts \\\ [])
  - __ Options
  - __ Example
- cascade_update(relationship, opts \\\ [])
  - __ Options
  - __ Example
- debug_log(label \\\ nil)
- ensure_selected(value)
  - __ Example
- filter(filter)
- get_and_lock(lock)
- get_and_lock_for_update()
- increment(attribute, opts \\\ [])
- load(value)
  - __ Example
- manage_relationship(argument, relationship_name \\\ nil, opts)
  - __ Examples
- optimistic_lock(attribute)
- prevent_change(attribute)
  - __ Examples
- relate_actor(relationship, opts \\\ [])
  - __ Options
  - __ Examples
- select(value)
  - __ Example
- set_attribute(attribute, value, opts \\\ [])
  - __ Options
  - __ Examples
- set_context(context)
  - __ Examples
- set_new_attribute(attribute, value)
  - __ Examples
- update_change(attribute, function)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource.Change.Builtins (ash v3.4.8)

Built in changes that are available to all resources

The functions in this module are imported by default in the actions section.

#  __ Summary

##  Functions

after_action(callback, opts \\\ [])

Directly attach an `after_action` function to the current change.

after_transaction(callback, opts \\\ [])

Directly attach an `after_transaction` function to the current change.

atomic_update(attribute, expr, opts \\\ [])

Updates an attribute using an expression. See [`Ash.Changeset.atomic_update/3`](external_link) for more.

before_action(callback, opts \\\ [])

Directly attach a `before_action` function to the current change.

before_transaction(callback, opts \\\ [])

Directly attach a `before_transaction` function to the current change.

cascade_destroy(relationship, opts \\\ [])

Cascade this resource's destroy action to a related resource's destroy action.

cascade_update(relationship, opts \\\ [])

Cascade a resource's update action to a related resource's update action.

debug_log(label \\\ nil)

ensure_selected(value)

Passes the provided value into [`Ash.Changeset.ensure_selected/2`](external_link)

filter(filter)

Applies a filter to the changeset. Has no effect for create actions.

get_and_lock(lock)

Re-fetches the record being updated and locks it with the given type.

get_and_lock_for_update()

Re-fetches the record being updated and locks it for update.

increment(attribute, opts \\\ [])

Increments an attribute's value by the amount specified, which defaults to 1.

load(value)

Passes the provided value into `Ash.load` after the action has completed.

manage_relationship(argument, relationship_name \\\ nil, opts)

Calls [`Ash.Changeset.manage_relationship/4`](external_link) with the changeset and relationship provided, using the value provided for the named argument.

optimistic_lock(attribute)

Apply an "optimistic lock" on a record being updated or destroyed.

prevent_change(attribute)

Clears a change off of the changeset before the action runs.

relate_actor(relationship, opts \\\ [])

Relates the actor to the data being changed, as the provided relationship.

select(value)

Passes the provided value into [`Ash.Changeset.select/3`](external_link)

set_attribute(attribute, value, opts \\\ [])

Sets the attribute to the value provided.

set_context(context)

Merges the given query context.

set_new_attribute(attribute, value)

Sets the attribute to the value provided if the attribute is not already being changed.

update_change(attribute, function)

Updates an existing attribute change by applying a function to it.

#  __ Functions

__ Link to this macro

# after_action(callback, opts \\\ [])

[ __ View Source ](external_link) (macro)

Directly attach an `after_action` function to the current change.

See [`Ash.Changeset.after_action/3`](external_link) for more information.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

##  __ Example
    
    
    change after_action(fn changeset, record, _context ->
      Logger.debug("Successfully executed action #{changeset.action.name} on #{inspect(changeset.resource)}")
      {:ok, record}
    end)

__ Link to this macro

# after_transaction(callback, opts \\\ [])

[ __ View Source ](external_link) (macro)

Directly attach an `after_transaction` function to the current change.

See [`Ash.Changeset.after_transaction/3`](external_link) for more information.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

##  __ Example
    
    
    change after_transaction(fn
      changeset, {:ok, record}, _context ->
        Logger.debug("Successfully executed transaction for action #{changeset.action.name} on #{inspect(changeset.resource)}")
        {:ok, record}
      changeset, {:error, reason}, _context ->
        Logger.debug("Failed to execute transaction for action #{changeset.action.name} on #{inspect(changeset.resource)}, reason: #{inspect(reason)}")
        {:error, reason}
    end)

__ Link to this function

# atomic_update(attribute, expr, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec atomic_update(attribute :: [atom](external_link)(), expr :: [Ash.Expr.t](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Change.ref](external_link)()

Updates an attribute using an expression. See [`Ash.Changeset.atomic_update/3`](external_link) for more.

Options:

  * `:cast_atomic?` \- set to `false` to ignore atomic type casting logic. Defaults to `true`.



__ Link to this macro

# before_action(callback, opts \\\ [])

[ __ View Source ](external_link) (macro)

Directly attach a `before_action` function to the current change.

See [`Ash.Changeset.before_action/3`](external_link) for more information.

Provide the option `append?: true` to place the hook after all other hooks instead of before.

##  __ Example
    
    
    change before_action(fn changeset, _context ->
      Logger.debug("About to execute #{changeset.action.name} on #{inspect(changeset.resource)}")
    
      changeset
    end)

__ Link to this macro

# before_transaction(callback, opts \\\ [])

[ __ View Source ](external_link) (macro)

Directly attach a `before_transaction` function to the current change.

See [`Ash.Changeset.before_transaction/3`](external_link) for more information.

Provide the option `append?: true` to place the hook after all other hooks instead of before.

##  __ Example
    
    
    change before_transaction(fn changeset, _context ->
      Logger.debug("About to execute transaction for #{changeset.action.name} on #{inspect(changeset.resource)}")
    
      changeset
    end)

__ Link to this function

# cascade_destroy(relationship, opts \\\ [])

[ __ View Source ](external_link)

Cascade this resource's destroy action to a related resource's destroy action.

Adds an after-action hook that explicitly calls destroy on any records related via the named relationship. It will optimise for bulk destroys where possible.

> #### Beware database constraints
> 
> Think carefully before using this change with data layers which enforce referential integrity (ie PostgreSQL and SQLite) and you may need to defer constraints for the relationship in question.
> 
> See also:
> 
>   1. [`postgres.references.reference.deferrable` DSL](external_link)
>   2. [`sqlite.references.reference.deferrable` DSL](external_link)
>   3. [PostgreSQL's `SET CONSTRAINTS` documentation](external_link)
>   4. [SQLite's `PRAGMA defer_foreign_keys` documentation](external_link)
> 


> #### Cascading notifications
> 
> By default notifications are disabled for the related destroy. This is to avoid potentially sending a **lot** of notifications for high-cardinality relationships.

##  __ Options

  * `:relationship` ([`atom/0`](external_link)) - Required. The name of the relationship to work on

  * `:action` ([`atom/0`](external_link)) - The name of the destroy action to call on the related resource. Uses the primary destroy by default.

  * `:read_action` ([`atom/0`](external_link)) - The name of the read action to call on the related resource to find results to be destroyed

  * `:return_notifications?` ([`boolean/0`](external_link)) - Return notifications for all destroyed records? The default value is `false`.

  * `:domain` ([`Ash.Domain`](external_link)) - 




##  __ Example
    
    
    change cascade_destroy(:relationship)

__ Link to this function

# cascade_update(relationship, opts \\\ [])

[ __ View Source ](external_link)

Cascade a resource's update action to a related resource's update action.

Adds an after-action hook that explicitly calls update on any records related via the named relationship. It will optimise for bulk updates where possible.

Allows you to copy fields from the arguments or changes to the destination, this way you can cascade a bunch of changes downstream.

> #### Beware database constraints
> 
> Think carefully before using this change with data layers which enforce referential integrity (ie PostgreSQL and SQLite) and you may need to defer constraints for the relationship in question.
> 
> See also:
> 
>   1. [`postgres.references.reference.deferrable` DSL](external_link)
>   2. [`sqlite.references.reference.deferrable` DSL](external_link)
>   3. [PostgreSQL's `SET CONSTRAINTS` documentation](external_link)
>   4. [SQLite's `PRAGMA defer_foreign_keys` documentation](external_link)
> 


> #### Cascading notifications
> 
> By default notifications are disabled for the related updates. This is to avoid potentially sending a **lot** of notifications for high-cardinality relationships.

##  __ Options

  * `:relationship` ([`atom/0`](external_link)) - Required. The name of the relationship to work on

  * `:action` ([`atom/0`](external_link)) - The name of the update action to call on the related resource. Uses the primary update by default.

  * `:copy_inputs` (list of [`atom/0`](external_link)) - A list of fields to copy & pass on to the downstream update. The source action cannot be atomic. The default value is `[]`.

  * `:read_action` ([`atom/0`](external_link)) - The name of the read action to call on the related resource to find results to be updated

  * `:return_notifications?` ([`boolean/0`](external_link)) - Return notifications for all updated records? The default value is `false`.

  * `:domain` ([`Ash.Domain`](external_link)) - 




##  __ Example
    
    
    change cascade_update(:relationship1)
    change cascade_update(:relationship2, copy_inputs: [:field1, :field2])

__ Link to this function

# debug_log(label \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec debug_log(label :: [String.t](external_link)() | nil) :: [Ash.Resource.Change.ref](external_link)()

__ Link to this function

# ensure_selected(value)

[ __ View Source ](external_link)
    
    
    @spec ensure_selected(select :: [atom](external_link)() | [[atom](external_link)()]) :: [Ash.Resource.Change.ref](external_link)()

Passes the provided value into [`Ash.Changeset.ensure_selected/2`](external_link)

If the value is not already selected, this makes sure it is. Does not deselect anything else.

##  __ Example
    
    
    change ensure_selected([:necessary_field])

__ Link to this function

# filter(filter)

[ __ View Source ](external_link)
    
    
    @spec filter(expr :: [Ash.Expr.t](external_link)()) :: [Ash.Resource.Change.ref](external_link)()

Applies a filter to the changeset. Has no effect for create actions.

This ensures that only things matching the provided filter are updated or destroyed.

__ Link to this function

# get_and_lock(lock)

[ __ View Source ](external_link)
    
    
    @spec get_and_lock(lock :: [Ash.DataLayer.lock_type](external_link)()) :: [Ash.Resource.Change.ref](external_link)()

Re-fetches the record being updated and locks it with the given type.

This happens in a `before_action` hook (so that it is done as part of the transaction).

If your resource has global validations (in the top level `validations` block), you may want to add `delay_global_validations? true` to your action to ensure they happen on the locked record.

__ Link to this function

# get_and_lock_for_update()

[ __ View Source ](external_link)
    
    
    @spec get_and_lock_for_update() :: [Ash.Resource.Change.ref](external_link)()

Re-fetches the record being updated and locks it for update.

Only usable with data layers that support locking `:for_update`.

This happens in a `before_action` hook (so that it is done as part of the transaction).

If your resource has global validations (in the top level `validations` block), you may want to add `delay_global_validations? true` to your action to ensure they happen on the locked record.

__ Link to this function

# increment(attribute, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec increment(attribute :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) :: [Ash.Resource.Change.ref](external_link)()

Increments an attribute's value by the amount specified, which defaults to 1.

Options:

  * `:amount` \- Defaults to 1
  * `:overflow_limit` \- Defaults to `nil`. If the value is over the overflow limit it will roll-over to the amount being incremented by (for common database limit support)



__ Link to this function

# load(value)

[ __ View Source ](external_link)
    
    
    @spec load(load :: [term](external_link)()) :: [Ash.Resource.Change.ref](external_link)()

Passes the provided value into `Ash.load` after the action has completed.

##  __ Example
    
    
    change load(:comments)
    change load([:friend_count, :friends])

__ Link to this function

# manage_relationship(argument, relationship_name \\\ nil, opts)

[ __ View Source ](external_link)
    
    
    @spec manage_relationship(
      argument :: [atom](external_link)(),
      relationship_name :: [atom](external_link)() | nil,
      opts :: [Keyword.t](external_link)()
    ) :: [Ash.Resource.Change.ref](external_link)()

Calls [`Ash.Changeset.manage_relationship/4`](external_link) with the changeset and relationship provided, using the value provided for the named argument.

If relationship_name is not specified, it is assumed to be the same as the argument.

For information on the available options, see [`Ash.Changeset.manage_relationship/4`](external_link).

##  __ Examples
    
    
    change manage_relationship(:comments, type: :append)
    change manage_relationship(:remove_comments, :comments, type: :remove)

__ Link to this function

# optimistic_lock(attribute)

[ __ View Source ](external_link)

Apply an "optimistic lock" on a record being updated or destroyed.

See [`Ash.Resource.Change.OptimisticLock`](external_link) for more.

__ Link to this function

# prevent_change(attribute)

[ __ View Source ](external_link)
    
    
    @spec prevent_change(attribute :: [atom](external_link)()) :: [Ash.Resource.Change.ref](external_link)()

Clears a change off of the changeset before the action runs.

Does not fail if it is being changed, but ensures it is cleared just before the action.

Can be useful if a change is only used in validations but shouldn't ultimately be written to the data layer.

##  __ Examples
    
    
    change prevent_change(:email)

__ Link to this function

# relate_actor(relationship, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec relate_actor(relationship :: [atom](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.Change.ref](external_link)()

Relates the actor to the data being changed, as the provided relationship.

##  __ Options

  * `:allow_nil?` ([`boolean/0`](external_link)) - Whether or not to allow the actor to be nil, in which case nothing will happen. The default value is `false`.

  * `:field` ([`atom/0`](external_link)) - The field of the actor to set the relationship to




##  __ Examples
    
    
    change relate_actor(:owner, allow_nil?: true)

__ Link to this function

# select(value)

[ __ View Source ](external_link)
    
    
    @spec select(select :: [atom](external_link)() | [[atom](external_link)()]) :: [Ash.Resource.Change.ref](external_link)()

Passes the provided value into [`Ash.Changeset.select/3`](external_link)

Keep in mind, this will _limit_ the fields that are selected. You may want `ensure_selected/1` if you want to make sure that something is selected, without deselecting anything else.

Selecting in changesets does not actually do a select in the data layer. It nils out any fields that were not selected after completing the action. This can be useful if you are writing policies that have to do with specific fields being selected.

##  __ Example
    
    
    change select([:name])

__ Link to this function

# set_attribute(attribute, value, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec set_attribute(
      attribute :: [atom](external_link)(),
      (-> [term](external_link)()) | {:_arg, :status} | [term](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Ash.Resource.Change.ref](external_link)()

Sets the attribute to the value provided.

If a zero argument function is provided, it is called to determine the value.

Use `arg(:argument_name)` to use the value of the given argument. If the argument is not supplied then nothing happens.

##  __ Options

  * `:set_when_nil?` ([`boolean/0`](external_link)) - When false, decline setting the attribute if it is nil. The default value is `true`.

  * `:new?` ([`boolean/0`](external_link)) - When true, sets the attribute to the value provided if the attribute is not already being changed. The default value is `false`.




##  __ Examples
    
    
    change set_attribute(:active, false)
    change set_attribute(:opened_at, &DateTime.utc_now/0)
    change set_attribute(:status, arg(:status))
    change set_attribute(:encrypted_data, arg(:data), set_when_nil?: false)

__ Link to this function

# set_context(context)

[ __ View Source ](external_link)
    
    
    @spec set_context(context :: [map](external_link)() | [mfa](external_link)()) :: [Ash.Resource.Change.ref](external_link)()

Merges the given query context.

If an MFA is provided, it will be called with the changeset. The MFA should return `{:ok, context_to_be_merged}` or `{:error, term}`

##  __ Examples
    
    
    change set_context(%{something_used_internally: true})
    change set_context({MyApp.Context, :set_context, []})

__ Link to this function

# set_new_attribute(attribute, value)

[ __ View Source ](external_link)
    
    
    @spec set_new_attribute(
      relationship :: [atom](external_link)(),
      (-> [term](external_link)()) | {:_arg, :status} | [term](external_link)()
    ) ::
      [Ash.Resource.Change.ref](external_link)()

Sets the attribute to the value provided if the attribute is not already being changed.

If a zero argument function is provided, it is called to determine the value.

Use `arg(:argument_name)` to use the value of the given argument. If the argument is not supplied then nothing happens.

##  __ Examples
    
    
    change set_new_attribute(:active, false)
    change set_new_attribute(:opened_at, &DateTime.utc_now/0)
    change set_new_attribute(:status, arg(:status))

__ Link to this macro

# update_change(attribute, function)

[ __ View Source ](external_link) (macro)

Updates an existing attribute change by applying a function to it.

The update function gets called with the value already cast to the correct type, and only gets called on valid changesets, so the value is guaranteed to have passed validations and constraints.
