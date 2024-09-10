# Ash.Changeset — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Changeset (ash v3.4.8)
- Changeset lifecycle
  - __ Action Lifecycle
- __ Summary
  - Types
  - Functions
- __ Types
- after_action_fun()
- after_transaction_fun()
- around_action_callback()
- around_action_fun()
- around_action_result()
- around_transaction_callback()
- around_transaction_fun()
- around_transaction_result()
- before_action_fun()
- before_transaction_fun()
- error_info()
- manage_relationship_type()
- phase()
- t()
- __ Functions
- accessing(changeset, types \\\ [:attributes, :relationships, :calculations, :attributes], only_public? \\\ true)
- add_error(changeset, errors, path \\\ [])
  - __ Error Data
- after_action(changeset, func, opts \\\ [])
- after_transaction(changeset, func, opts \\\ [])
- apply_attributes(changeset, opts \\\ [])
- around_action(changeset, func)
- around_transaction(changeset, func)
- atomic_ref(changeset, field)
- atomic_update(changeset, atomics)
- atomic_update(changeset, key, value)
- attribute_present?(changeset, attribute)
- before_action(changeset, func, opts \\\ [])
- before_transaction(changeset, func, opts \\\ [])
- change_attribute(changeset, attribute, value)
- change_attributes(changeset, changes)
- change_default_attribute(changeset, attribute, value)
- change_new_attribute(changeset, attribute, value)
- change_new_attribute_lazy(changeset, attribute, func)
- changing_attribute?(changeset, attribute)
- changing_attributes?(changeset)
- changing_relationship?(changeset, relationship)
- clear_change(changeset, field)
- delete_argument(changeset, argument_or_arguments)
- deselect(changeset, fields)
- ensure_selected(changeset, fields)
- expand_upsert_fields(fields, resource)
- fetch_argument(changeset, argument)
- fetch_argument_or_change(changeset, attribute)
- fetch_change(changeset, attribute)
- filter(changeset, expr)
- for_action(initial, action, params \\\ %{}, opts \\\ [])
- for_create(initial, action, params \\\ %{}, opts \\\ [])
    - __ Params
    - __ Opts
    - __ Customization
    - __ What does this function do?
- for_destroy(initial, action_or_name, params \\\ %{}, opts \\\ [])
    - __ Opts
    - __ What does this function do?
- for_update(initial, action, params \\\ %{}, opts \\\ [])
    - __ What does this function do?
- force_change_attribute(changeset, attribute, value)
- force_change_attributes(changeset, changes)
- force_change_new_attribute(changeset, attribute, value)
- force_change_new_attribute_lazy(changeset, attribute, func)
- force_set_argument(changeset, argument, value)
- force_set_arguments(changeset, map)
- fully_atomic_changeset(resource, action, params, opts \\\ [])
- get_argument(changeset, argument)
- get_argument_or_attribute(changeset, attribute)
- get_attribute(changeset, attribute)
- get_data(changeset, attribute)
- handle_errors(changeset, func)
- handle_params(changeset, action, params, handle_params_opts \\\ [])
- is_valid(changeset)
- load(changeset, load)
- loading?(changeset, path)
- manage_relationship(changeset, relationship, input, opts \\\ [])
  - __ Options
  - __ Using records as input
- manage_relationship_opts(atom)
- new(record_or_resource)
- prepare_changeset_for_action(changeset, action, opts)
- present?(changeset, attribute)
- put_context(changeset, key, value)
- run_atomic_change(changeset, map, context)
- run_before_transaction_hooks(changeset)
- select(changeset, fields, opts \\\ [])
- selecting?(changeset, field)
- set_argument(changeset, argument, value)
- set_arguments(changeset, map)
- set_context(changeset, map)
- set_on_upsert(changeset, upsert_keys)
- set_result(changeset, result)
- set_tenant(changeset, tenant)
- timeout(changeset, timeout, default \\\ nil)
- update_change(changeset, attribute, fun)
  - __ Invalid value handling
- with_hooks(changeset, func, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Changeset (ash v3.4.8)

Changesets are used to create and update data in Ash.

Create a changeset with `new/1` or `new/2`, and alter the attributes and relationships using the functions provided in this module. Nothing in this module actually incurs changes in a data layer. To commit a changeset, see [`Ash.create/2`](external_link) and [`Ash.update/2`](external_link).

# Changeset lifecycle

##  __ Action Lifecycle

The following example illustrates the hook lifecycle of a changeset.
    
    
    defmodule AshChangesetLifeCycleExample do
      def change(changeset, _, _) do
        changeset
        # execute code both before and after the transaction
        |> Ash.Changeset.around_transaction(fn changeset, callback ->
          callback.(changeset)
        end)
        # execute code before the transaction is started. Use for things like external calls
        |> Ash.Changeset.before_transaction(fn changeset -> changeset end)
        # execute code in the transaction, before and after the data layer is called
        |> Ash.Changeset.around_action(fn changeset, callback ->
          callback.(changeset)
        end)
        # execute code in the transaction, before the data layer is called
        |> Ash.Changeset.before_action(fn changeset -> changeset end)
        # execute code in the transaction, after the data layer is called, only if the action is successful
        |> Ash.Changeset.after_action(fn changeset, result -> {:ok, result} end)
        # execute code after the transaction, both in success and error cases
        |> Ash.Changeset.after_transaction(fn changeset, success_or_error_result -> success_or_error_result end
      end
    end

#  __ Summary

##  Types

after_action_fun()

after_transaction_fun()

around_action_callback()

around_action_fun()

around_action_result()

around_transaction_callback()

around_transaction_fun()

around_transaction_result()

before_action_fun()

before_transaction_fun()

error_info()

manage_relationship_type()

phase()

t()

##  Functions

accessing(changeset, types \\\ [:attributes, :relationships, :calculations, :attributes], only_public? \\\ true)

Returns a list of attributes, aggregates, relationships, and calculations that are being loaded

add_error(changeset, errors, path \\\ [])

Adds an error to the changesets errors list, and marks the change as `valid?: false`.

after_action(changeset, func, opts \\\ [])

Adds an after_action hook to the changeset.

after_transaction(changeset, func, opts \\\ [])

Adds an after_transaction hook to the changeset. Cannot be called within other hooks.

apply_attributes(changeset, opts \\\ [])

Returns the original data with attribute changes merged, if the changeset is valid.

around_action(changeset, func)

Adds an around_action hook to the changeset.

around_transaction(changeset, func)

Adds an around_transaction hook to the changeset.

atomic_ref(changeset, field)

Gets a reference to a field, or the current atomic update expression of that field.

atomic_update(changeset, atomics)

Adds multiple atomic changes to the changeset

atomic_update(changeset, key, value)

Adds an atomic change to the changeset.

attribute_present?(changeset, attribute)

Checks if an attribute is not nil, either in the original data, or that it is not being changed to a `nil` value if it is changing.

before_action(changeset, func, opts \\\ [])

Adds a before_action hook to the changeset.

before_transaction(changeset, func, opts \\\ [])

Adds a before_transaction hook to the changeset.

change_attribute(changeset, attribute, value)

Adds a change to the changeset, unless the value matches the existing value.

change_attributes(changeset, changes)

Calls `change_attribute/3` for each key/value pair provided.

change_default_attribute(changeset, attribute, value)

The same as `change_attribute`, but annotates that the attribute is currently holding a default value.

change_new_attribute(changeset, attribute, value)

Change an attribute only if is not currently being changed

change_new_attribute_lazy(changeset, attribute, func)

Change an attribute if is not currently being changed, by calling the provided function.

changing_attribute?(changeset, attribute)

Returns true if an attribute exists in the changes

changing_attributes?(changeset)

Returns true if any attributes on the resource are being changed.

changing_relationship?(changeset, relationship)

Returns true if a relationship exists in the changes

clear_change(changeset, field)

Clears an attribute or relationship change off of the changeset.

delete_argument(changeset, argument_or_arguments)

Remove an argument from the changeset

deselect(changeset, fields)

Ensure the the specified attributes are `nil` in the changeset results.

ensure_selected(changeset, fields)

Ensures that the given attributes are selected.

expand_upsert_fields(fields, resource)

Turns the special case {:replace, fields}, :replace_all and {:replace_all_except, fields} upsert_fields options into a list of fields

fetch_argument(changeset, argument)

Fetches the value of an argument provided to the changeset or `:error`.

fetch_argument_or_change(changeset, attribute)

Gets the value of an argument provided to the changeset, falling back to `Ash.Changeset.fetch_change/2` if nothing was provided.

fetch_change(changeset, attribute)

Gets the new value for an attribute, or `:error` if it is not being changed.

filter(changeset, expr)

Adds a filter for a record being updated or destroyed.

for_action(initial, action, params \\\ %{}, opts \\\ [])

Constructs a changeset for a given action, and validates it.

for_create(initial, action, params \\\ %{}, opts \\\ [])

Constructs a changeset for a given create action, and validates it.

for_destroy(initial, action_or_name, params \\\ %{}, opts \\\ [])

Constructs a changeset for a given destroy action, and validates it.

for_update(initial, action, params \\\ %{}, opts \\\ [])

Constructs a changeset for a given update action, and validates it.

force_change_attribute(changeset, attribute, value)

Changes an attribute even if it isn't writable

force_change_attributes(changeset, changes)

Calls `force_change_attribute/3` for each key/value pair provided.

force_change_new_attribute(changeset, attribute, value)

Force change an attribute if it is not currently being changed.

force_change_new_attribute_lazy(changeset, attribute, func)

Force change an attribute if it is not currently being changed, by calling the provided function.

force_set_argument(changeset, argument, value)

Add an argument to the changeset, which will be provided to the action.

force_set_arguments(changeset, map)

Merge a map of arguments to the arguments list.

fully_atomic_changeset(resource, action, params, opts \\\ [])

get_argument(changeset, argument)

Gets the value of an argument provided to the changeset.

get_argument_or_attribute(changeset, attribute)

Gets the value of an argument provided to the changeset, falling back to `Ash.Changeset.get_attribute/2` if nothing was provided.

get_attribute(changeset, attribute)

Gets the changing value or the original value of an attribute.

get_data(changeset, attribute)

Gets the original value for an attribute

handle_errors(changeset, func)

Sets a custom error handler on the changeset.

handle_params(changeset, action, params, handle_params_opts \\\ [])

is_valid(changeset)

A guard which checks if the Changeset is valid.

load(changeset, load)

Calls the provided load statement on the result of the action at the very end of the action.

loading?(changeset, path)

Returns true if the field/relationship or path to field/relationship is being loaded.

manage_relationship(changeset, relationship, input, opts \\\ [])

Manages the related records by creating, updating, or destroying them as necessary.

manage_relationship_opts(atom)

new(record_or_resource)

Returns a new changeset over a resource.

prepare_changeset_for_action(changeset, action, opts)

present?(changeset, attribute)

Checks if an argument is not nil or an attribute is not nil, either in the original data, or that it is not being changed to a `nil` value if it is changing.

put_context(changeset, key, value)

Puts a key/value in the changeset context that can be used later.

run_atomic_change(changeset, map, context)

run_before_transaction_hooks(changeset)

select(changeset, fields, opts \\\ [])

Ensure that only the specified attributes are present in the results.

selecting?(changeset, field)

set_argument(changeset, argument, value)

Add an argument to the changeset, which will be provided to the action.

set_arguments(changeset, map)

Merge a map of arguments to the arguments list.

set_context(changeset, map)

Deep merges the provided map into the changeset context that can be used later.

set_on_upsert(changeset, upsert_keys)

set_result(changeset, result)

Set the result of the action. This will prevent running the underlying datalayer behavior

set_tenant(changeset, tenant)

timeout(changeset, timeout, default \\\ nil)

update_change(changeset, attribute, fun)

Updates an existing attribute change by applying a function to it.

with_hooks(changeset, func, opts \\\ [])

Wraps a function in the before/after action hooks of a changeset.

#  __ Types

__ Link to this type

# after_action_fun()

[ __ View Source ](external_link)
    
    
    @type after_action_fun() :: (t(), [Ash.Resource.record](external_link)() ->
                             {:ok, [Ash.Resource.record](external_link)()}
                             | {:ok, [Ash.Resource.record](external_link)(),
                                [[Ash.Notifier.Notification.t](external_link)()]}
                             | {:error, [any](external_link)()})

__ Link to this type

# after_transaction_fun()

[ __ View Source ](external_link)
    
    
    @type after_transaction_fun() :: (t(),
                                {:ok, [Ash.Resource.record](external_link)()}
                                | {:error, [any](external_link)()} ->
                                  {:ok, [Ash.Resource.record](external_link)()} | {:error, [any](external_link)()})

__ Link to this type

# around_action_callback()

[ __ View Source ](external_link)
    
    
    @type around_action_callback() :: (t() -> around_action_result())

__ Link to this type

# around_action_fun()

[ __ View Source ](external_link)
    
    
    @type around_action_fun() :: (t(), around_action_callback() -> around_action_result())

__ Link to this type

# around_action_result()

[ __ View Source ](external_link)
    
    
    @type around_action_result() ::
      {:ok, [Ash.Resource.record](external_link)(), t(),
       %{notifications: [[Ash.Notifier.Notification.t](external_link)()]}}
      | {:error, [Ash.Error.t](external_link)()}

__ Link to this type

# around_transaction_callback()

[ __ View Source ](external_link)
    
    
    @type around_transaction_callback() :: (t() -> around_transaction_result())

__ Link to this type

# around_transaction_fun()

[ __ View Source ](external_link)
    
    
    @type around_transaction_fun() :: (t(), around_transaction_callback() ->
                                   around_transaction_result())

__ Link to this type

# around_transaction_result()

[ __ View Source ](external_link)
    
    
    @type around_transaction_result() :: {:ok, [Ash.Resource.record](external_link)()} | {:error, [any](external_link)()}

__ Link to this type

# before_action_fun()

[ __ View Source ](external_link)
    
    
    @type before_action_fun() :: (t() ->
                              t()
                              | {t(),
                                 %{notifications: [[Ash.Notifier.Notification.t](external_link)()]}})

__ Link to this type

# before_transaction_fun()

[ __ View Source ](external_link)
    
    
    @type before_transaction_fun() :: (t() -> t())

__ Link to this type

# error_info()

[ __ View Source ](external_link)
    
    
    @type error_info() ::
      [String.t](external_link)()
      | [field: [atom](external_link)(), fields: [[atom](external_link)()], message: [String.t](external_link)(), value: [any](external_link)()]
      | %{:__struct__ => [atom](external_link)(), required([atom](external_link)()) => [any](external_link)()}

__ Link to this type

# manage_relationship_type()

[ __ View Source ](external_link)
    
    
    @type manage_relationship_type() ::
      :append_and_remove | :append | :remove | :direct_control | :create

__ Link to this type

# phase()

[ __ View Source ](external_link)
    
    
    @type phase() ::
      :around_transaction
      | :around_action
      | :after_transaction
      | :before_transaction
      | :after_action
      | :before_action
      | :validate
      | :pending
      | :atomic

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Changeset{
      __validated_for_action__: [atom](external_link)() | nil,
      action: [Ash.Resource.Actions.action](external_link)() | nil,
      action_failed?: [boolean](external_link)(),
      action_type: [Ash.Resource.Actions.action_type](external_link)() | nil,
      added_filter: [Ash.Filter.t](external_link)() | nil,
      after_action: [after_action_fun() | {after_action_fun(), [map](external_link)()}],
      after_transaction: [
        after_transaction_fun() | {after_transaction_fun(), [map](external_link)()}
      ],
      arguments: %{optional([atom](external_link)()) => [any](external_link)()},
      around_action: [around_action_fun() | {around_action_fun(), [map](external_link)()}],
      around_transaction: [
        around_transaction_fun() | {around_transaction_fun(), [map](external_link)()}
      ],
      atomic_after_action: [term](external_link)(),
      atomic_changes: [term](external_link)(),
      atomic_validations: [term](external_link)(),
      atomics: [Keyword.t](external_link)(),
      attribute_changes: [term](external_link)(),
      attributes: %{optional([atom](external_link)()) => [any](external_link)()},
      before_action: [before_action_fun() | {around_action_fun(), [map](external_link)()}],
      before_transaction: [
        before_transaction_fun() | {before_transaction_fun(), [map](external_link)()}
      ],
      casted_arguments: [term](external_link)(),
      casted_attributes: [term](external_link)(),
      context: [map](external_link)(),
      context_changes: [term](external_link)(),
      data: [Ash.Resource.record](external_link)() | nil,
      defaults: [[atom](external_link)()],
      dirty_hooks: [term](external_link)(),
      domain: [module](external_link)() | nil,
      errors: [[Ash.Error.t](external_link)()],
      filter: [Ash.Filter.t](external_link)() | nil,
      handle_errors:
        nil
        | (t(), error :: [any](external_link)() ->
             :ignore | t() | (error :: [any](external_link)()) | {error :: [any](external_link)(), t()}),
      invalid_keys: [MapSet.t](external_link)(),
      load: [keyword](external_link)([keyword](external_link)()),
      params: %{optional([atom](external_link)() | [binary](external_link)()) => [any](external_link)()},
      phase: phase(),
      relationships: %{
        optional([atom](external_link)()) =>
          %{optional([atom](external_link)() | [binary](external_link)()) => [any](external_link)()}
          | [%{optional([atom](external_link)() | [binary](external_link)()) => [any](external_link)()}]
      },
      resource: [module](external_link)(),
      select: [[atom](external_link)()] | nil,
      tenant: [term](external_link)(),
      timeout: [pos_integer](external_link)() | nil,
      to_tenant: [term](external_link)(),
      valid?: [boolean](external_link)()
    }

#  __ Functions

__ Link to this function

# accessing(changeset, types \\\ [:attributes, :relationships, :calculations, :attributes], only_public? \\\ true)

[ __ View Source ](external_link)

Returns a list of attributes, aggregates, relationships, and calculations that are being loaded

Provide a list of field types to narrow down the returned results.

__ Link to this function

# add_error(changeset, errors, path \\\ [])

[ __ View Source ](external_link)
    
    
    @spec add_error(t(), error_info() | [error_info()], [Keyword.t](external_link)()) :: t()

Adds an error to the changesets errors list, and marks the change as `valid?: false`.

##  __ Error Data

The given `errors` argument can be a string, a keyword list, a struct, or a list of any of the three.

If `errors` is a keyword list, or a list of keyword lists, the following keys are supported in the keyword list:

  * `field` (atom) - the field that the error is for. This is required, unless `fields` is given.
  * `fields` (list of atoms) - the fields that the error is for. This is required, unless `field` is given.
  * `message` (string) - the error message
  * `value` (any) - (optional) the field value that caused the error



__ Link to this function

# after_action(changeset, func, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec after_action(
      t(),
      after_action_fun(),
      [Keyword.t](external_link)()
    ) :: t()

Adds an after_action hook to the changeset.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

__ Link to this function

# after_transaction(changeset, func, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec after_transaction(
      t(),
      after_transaction_fun(),
      [Keyword.t](external_link)()
    ) :: t()

Adds an after_transaction hook to the changeset. Cannot be called within other hooks.

`after_transaction` hooks differ from `after_action` hooks in that they are run on success _and_ failure of the action or some previous hook.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

__ Link to this function

# apply_attributes(changeset, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec apply_attributes(t(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.record](external_link)()} | {:error, t()}

Returns the original data with attribute changes merged, if the changeset is valid.

Options:

  * force? - applies current attributes even if the changeset is not valid



__ Link to this function

# around_action(changeset, func)

[ __ View Source ](external_link)
    
    
    @spec around_action(t(), around_action_fun()) :: t()

Adds an around_action hook to the changeset.

Your function will get the changeset, and a callback that must be called with a changeset (that may be modified). The callback will return `{:ok, result, instructions}` or `{:error, error}`. You can modify these values, but the return value must be one of those types. Instructions contains the notifications in its `notifications` key, i.e `%{notifications: [%Ash.Resource.Notification{}, ...]}`.

The around_action calls happen first, and then (after they each resolve their callbacks) the `before_action` hooks are called, followed by the action itself occurring at the data layer and then the `after_action` hooks being run. Then, the code that appeared _after_ the callbacks were called is then run.

For example:
    
    
    changeset
    |> Ash.Changeset.around_action(fn changeset, callback ->
      IO.puts("first around: before")
      result = callback.(changeset)
      IO.puts("first around: after")
    
      result
    end)
    |> Ash.Changeset.around_action(fn changeset, callback ->
      IO.puts("second around: before")
      result = callback.(changeset)
      IO.puts("second around: after")
    
      result
    end)
    |> Ash.Changeset.before_action(fn changeset ->
      IO.puts("first before")
      changeset
    end, append?: true)
    |> Ash.Changeset.before_action(fn changeset ->
      IO.puts("second before")
      changeset
    end, append?: true)
    |> Ash.Changeset.after_action(fn changeset, result ->
      IO.puts("first after")
      {:ok, result}
    end)
    |> Ash.Changeset.after_action(fn changeset, result ->
      IO.puts("second after")
      {:ok, result}
    end)

This would print:
    
    
    first around: before
    second around: before
    first before
    second before
                 <-- action happens here
    first after
    second after
    second around: after <-- Notice that because of the callbacks, the after of the around hooks is reversed from the before
    first around: after

Warning: using this without understanding how it works can cause big problems. You _must_ call the callback function that is provided to your hook, and the return value must contain the same structure that was given to you, i.e `{:ok, result_of_action, instructions}`.

You can almost always get the same effect by using `before_action`, setting some context on the changeset and reading it out in an `after_action` hook.

__ Link to this function

# around_transaction(changeset, func)

[ __ View Source ](external_link)
    
    
    @spec around_transaction(t(), around_transaction_fun()) :: t()

Adds an around_transaction hook to the changeset.

Your function will get the changeset, and a callback that must be called with a changeset (that may be modified). The callback will return `{:ok, result}` or `{:error, error}`. You can modify these values, but the return value must be one of those types.

The around_transaction calls happen first, and then (after they each resolve their callbacks) the `before_transaction` hooks are called, followed by the action hooks and then the `after_transaction` hooks being run. Then, the code that appeared _after_ the callbacks were called is then run.

For example:
    
    
    changeset
    |> Ash.Changeset.around_transaction(fn changeset, callback ->
      IO.puts("first around: before")
      result = callback.(changeset)
      IO.puts("first around: after")
    
      result
    end)
    |> Ash.Changeset.around_transaction(fn changeset, callback ->
      IO.puts("second around: before")
      result = callback.(changeset)
      IO.puts("second around: after")
    
      result
    end)
    |> Ash.Changeset.before_transaction(fn changeset ->
      IO.puts("first before")
      changeset
    end, append?: true)
    |> Ash.Changeset.before_transaction(fn changeset ->
      IO.puts("second before")
      changeset
    end, append?: true)
    |> Ash.Changeset.after_transaction(fn changeset, result ->
      IO.puts("first after")
      result
    end)
    |> Ash.Changeset.after_transaction(fn changeset, result ->
      IO.puts("second after")
      result
    end)

This would print:
    
    
    first around: before
    second around: before
    first before
    second before
                 <-- action hooks happens here
    first after
    second after
    second around: after <-- Notice that because of the callbacks, the after of the around hooks is reversed from the before
    first around: after

Warning: using this without understanding how it works can cause big problems. You _must_ call the callback function that is provided to your hook, and the return value must contain the same structure that was given to you, i.e `{:ok, result_of_action}`.

You can almost always get the same effect by using `before_transaction`, setting some context on the changeset and reading it out in an `after_transaction` hook.

__ Link to this function

# atomic_ref(changeset, field)

[ __ View Source ](external_link)

Gets a reference to a field, or the current atomic update expression of that field.

__ Link to this function

# atomic_update(changeset, atomics)

[ __ View Source ](external_link)
    
    
    @spec atomic_update(t(), [map](external_link)() | [Keyword.t](external_link)()) :: t()

Adds multiple atomic changes to the changeset

See `atomic_update/3` for more information.

__ Link to this function

# atomic_update(changeset, key, value)

[ __ View Source ](external_link)
    
    
    @spec atomic_update(t(), [atom](external_link)(), {:atomic, [Ash.Expr.t](external_link)()} | [Ash.Expr.t](external_link)()) :: t()

Adds an atomic change to the changeset.

Atomic changes are applied by the data layer, and as such have guarantees that are not given by changes that are based on looking at the previous value and updating it. Here is an example of a change that is not safe to do concurrently:
    
    
    change fn changeset, _ ->
      Ash.Changeset.change_attribute(changeset, :score, changeset.data.score + 1)
    end

If two processes run this concurrently, they will both read the same value of `score`, and set the new score to the same value. This means that one of the increments will be lost. If you were to instead do this using `atomic_update`, you would get the correct result:
    
    
    Ash.Changeset.atomic_update(changeset, :score, [expr(score + 1)])

There are drawbacks/things to consider, however. The first is that atomic update results are not known until after the action is run. The following functional validation would not be able to enforce the score being less than 10, because the atomic happens after the validation.
    
    
    validate fn changeset, _ ->
      if Ash.Changeset.get_attribute(changeset, :score) < 10 do
        :ok
      else
        {:error, field: :score, message: "must be less than 10"}
      end
    end

If you want to use atomic updates, it is suggested to write module-based validations & changes, and implement the appropriate atomic callbacks on those modules. All builtin validations and changes implement these callbacks in addition to the standard callbacks. Validations will only be run atomically when the entire action is being run atomically or if one of the relevant fields is being updated atomically.

__ Link to this function

# attribute_present?(changeset, attribute)

[ __ View Source ](external_link)

Checks if an attribute is not nil, either in the original data, or that it is not being changed to a `nil` value if it is changing.

This also accounts for the `accessing_from` context that is set when using `manage_relationship`, so it is aware that a particular value _will_ be set by `manage_relationship` even if it isn't currently being set.

__ Link to this function

# before_action(changeset, func, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec before_action(
      changeset :: t(),
      fun :: before_action_fun(),
      opts :: [Keyword.t](external_link)()
    ) :: t()

Adds a before_action hook to the changeset.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

__ Link to this function

# before_transaction(changeset, func, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec before_transaction(
      t(),
      before_transaction_fun(),
      [Keyword.t](external_link)()
    ) :: t()

Adds a before_transaction hook to the changeset.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

__ Link to this function

# change_attribute(changeset, attribute, value)

[ __ View Source ](external_link)
    
    
    @spec change_attribute(t(), [atom](external_link)(), [any](external_link)()) :: t()

Adds a change to the changeset, unless the value matches the existing value.

__ Link to this function

# change_attributes(changeset, changes)

[ __ View Source ](external_link)
    
    
    @spec change_attributes(t(), [map](external_link)() | [Keyword.t](external_link)()) :: t()

Calls `change_attribute/3` for each key/value pair provided.

__ Link to this function

# change_default_attribute(changeset, attribute, value)

[ __ View Source ](external_link)
    
    
    @spec change_default_attribute(t(), [atom](external_link)(), [any](external_link)()) :: t()

The same as `change_attribute`, but annotates that the attribute is currently holding a default value.

This information can be used in changes to see if a value was explicitly set or if it was set by being the default. Additionally, this is used in `upsert` actions to not overwrite existing values with the default.

__ Link to this function

# change_new_attribute(changeset, attribute, value)

[ __ View Source ](external_link)
    
    
    @spec change_new_attribute(t(), [atom](external_link)(), [term](external_link)()) :: t()

Change an attribute only if is not currently being changed

__ Link to this function

# change_new_attribute_lazy(changeset, attribute, func)

[ __ View Source ](external_link)
    
    
    @spec change_new_attribute_lazy(t(), [atom](external_link)(), (-> [any](external_link)())) :: t()

Change an attribute if is not currently being changed, by calling the provided function.

Use this if you want to only perform some expensive calculation for an attribute value only if there isn't already a change for that attribute.

__ Link to this function

# changing_attribute?(changeset, attribute)

[ __ View Source ](external_link)
    
    
    @spec changing_attribute?(t(), [atom](external_link)()) :: [boolean](external_link)()

Returns true if an attribute exists in the changes

__ Link to this function

# changing_attributes?(changeset)

[ __ View Source ](external_link)
    
    
    @spec changing_attributes?(t()) :: [boolean](external_link)()

Returns true if any attributes on the resource are being changed.

__ Link to this function

# changing_relationship?(changeset, relationship)

[ __ View Source ](external_link)
    
    
    @spec changing_relationship?(t(), [atom](external_link)()) :: [boolean](external_link)()

Returns true if a relationship exists in the changes

__ Link to this function

# clear_change(changeset, field)

[ __ View Source ](external_link)

Clears an attribute or relationship change off of the changeset.

__ Link to this function

# delete_argument(changeset, argument_or_arguments)

[ __ View Source ](external_link)

Remove an argument from the changeset

__ Link to this function

# deselect(changeset, fields)

[ __ View Source ](external_link)

Ensure the the specified attributes are `nil` in the changeset results.

__ Link to this function

# ensure_selected(changeset, fields)

[ __ View Source ](external_link)

Ensures that the given attributes are selected.

The first call to `select/2` will _limit_ the fields to only the provided fields. Use `ensure_selected/2` to say "select this field (or these fields) without deselecting anything else".

See `select/2` for more.

__ Link to this function

# expand_upsert_fields(fields, resource)

[ __ View Source ](external_link)

Turns the special case {:replace, fields}, :replace_all and {:replace_all_except, fields} upsert_fields options into a list of fields

__ Link to this function

# fetch_argument(changeset, argument)

[ __ View Source ](external_link)
    
    
    @spec fetch_argument(t(), [atom](external_link)()) :: {:ok, [term](external_link)()} | :error

Fetches the value of an argument provided to the changeset or `:error`.

__ Link to this function

# fetch_argument_or_change(changeset, attribute)

[ __ View Source ](external_link)
    
    
    @spec fetch_argument_or_change(t(), [atom](external_link)()) :: {:ok, [any](external_link)()} | :error

Gets the value of an argument provided to the changeset, falling back to `Ash.Changeset.fetch_change/2` if nothing was provided.

__ Link to this function

# fetch_change(changeset, attribute)

[ __ View Source ](external_link)
    
    
    @spec fetch_change(t(), [atom](external_link)()) :: {:ok, [any](external_link)()} | :error

Gets the new value for an attribute, or `:error` if it is not being changed.

__ Link to this function

# filter(changeset, expr)

[ __ View Source ](external_link)
    
    
    @spec filter(t(), [Ash.Expr.t](external_link)()) :: t()

Adds a filter for a record being updated or destroyed.

Used by optimistic locking. See [`Ash.Resource.Change.Builtins.optimistic_lock/1`](external_link) for more.

__ Link to this function

# for_action(initial, action, params \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)

Constructs a changeset for a given action, and validates it.

Calls `for_create/4`, `for_update/4` or `for_destroy/4` based on the type of action passed in.

See those functions for more explanation.

__ Link to this function

# for_create(initial, action, params \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)

Constructs a changeset for a given create action, and validates it.

Anything that is modified prior to `for_create/4` is validated against the rules of the action, while _anything after it is not_. This runs any `change`s contained on your action. To have your logic execute _only_ during the action, you can use `after_action/2` or `before_action/2`.

Multitenancy is _not_ validated until an action is called. This allows you to avoid specifying a tenant until just before calling the domain action.

###  __ Params

`params` may be attributes, relationships, or arguments. You can safely pass user/form input directly into this function. Only public attributes and relationships are supported. If you want to change private attributes as well, see the Customization section below. `params` are stored directly as given in the `params` field of the changeset, which is used

###  __ Opts

  * `:require?` ([`boolean/0`](external_link)) - If set to `false`, values are only required when the action is run (instead of immediately). The default value is `false`.

  * `:actor` ([`term/0`](external_link)) - set the actor, which can be used in any [`Ash.Resource.Change`](external_link)s configured on the action. (in the `context` argument)

  * `:authorize?` ([`term/0`](external_link)) - set authorize?, which can be used in any [`Ash.Resource.Change`](external_link)s configured on the action. (in the `context` argument)

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer to use. Will be carried over to the action. For more information see [`Ash.Tracer`](external_link).

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - set the tenant on the changeset

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input




###  __ Customization

A changeset can be provided as the first argument, instead of a resource, to allow setting specific attributes ahead of time.

For example:
    
    
    MyResource
    |> Ash.Changeset.new()
    |> Ash.Changeset.change_attribute(:foo, 1)
    |> Ash.Changeset.for_create(:create, ...opts)

Once a changeset has been validated by `for_create/4` (or `for_update/4`), it isn't validated again in the action. New changes added are validated individually, though. This allows you to create a changeset according to a given action, and then add custom changes if necessary.

###  __ What does this function do?

The following steps are run when calling `Ash.Changeset.for_create/4`.

  * Cast input params | This is any arguments in addition to any accepted attributes

  * Set argument defaults
  * Require any missing arguments
  * Validate all provided attributes are accepted
  * Require any accepted attributes that are `allow_nil?` false
  * Set any default values for attributes
  * Run action changes & validations
  * Run validations, or add them in `before_action` hooks if using `[Ash.Resource.Dsl.actions.create.validate.before_action?](external_link)`. Any global validations are skipped if the action has `skip_global_validations?` set to `true`.



__ Link to this function

# for_destroy(initial, action_or_name, params \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)

Constructs a changeset for a given destroy action, and validates it.

###  __ Opts

  * `:actor` \- set the actor, which can be used in any [`Ash.Resource.Change`](external_link)s configured on the action. (in the `context` argument)
  * `:tenant` \- set the tenant on the changeset



Anything that is modified prior to `for_destroy/4` is validated against the rules of the action, while _anything after it is not_.

Once a changeset has been validated by `for_destroy/4`, it isn't validated again in the action. New changes added are validated individually, though. This allows you to create a changeset according to a given action, and then add custom changes if necessary.

###  __ What does this function do?

The following steps are run when calling `Ash.Changeset.for_destroy/4`.

  * Cast input params | This is any arguments in addition to any accepted attributes

  * Set argument defaults
  * Require any missing arguments
  * Validate all provided attributes are accepted
  * Require any accepted attributes that are `allow_nil?` false
  * Set any default values for attributes
  * Run action changes & validations
  * Run validations, or add them in `before_action` hooks if using `[Ash.Resource.Dsl.actions.destroy.validate.before_action?](external_link)`. Any global validations are skipped if the action has `skip_global_validations?` set to `true`.



__ Link to this function

# for_update(initial, action, params \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)

Constructs a changeset for a given update action, and validates it.

Anything that is modified prior to `for_update/4` is validated against the rules of the action, while _anything after it is not_.

###  __ What does this function do?

The following steps are run when calling `Ash.Changeset.for_update/4`.

  * Cast input params | This is any arguments in addition to any accepted attributes

  * Set argument defaults
  * Require any missing arguments
  * Validate all provided attributes are accepted
  * Require any accepted attributes that are `allow_nil?` false
  * Set any default values for attributes
  * Run action changes & validations
  * Run validations, or add them in `before_action` hooks if using `[Ash.Resource.Dsl.actions.update.validate.before_action?](external_link)`. Any global validations are skipped if the action has `skip_global_validations?` set to `true`.



__ Link to this function

# force_change_attribute(changeset, attribute, value)

[ __ View Source ](external_link)
    
    
    @spec force_change_attribute(t(), [atom](external_link)(), [any](external_link)()) :: t()

Changes an attribute even if it isn't writable

__ Link to this function

# force_change_attributes(changeset, changes)

[ __ View Source ](external_link)
    
    
    @spec force_change_attributes(t(), [map](external_link)() | [Keyword.t](external_link)()) :: t()

Calls `force_change_attribute/3` for each key/value pair provided.

__ Link to this function

# force_change_new_attribute(changeset, attribute, value)

[ __ View Source ](external_link)
    
    
    @spec force_change_new_attribute(t(), [atom](external_link)(), [term](external_link)()) :: t()

Force change an attribute if it is not currently being changed.

See `change_new_attribute/3` for more.

__ Link to this function

# force_change_new_attribute_lazy(changeset, attribute, func)

[ __ View Source ](external_link)
    
    
    @spec force_change_new_attribute_lazy(t(), [atom](external_link)(), (-> [any](external_link)())) :: t()

Force change an attribute if it is not currently being changed, by calling the provided function.

See `change_new_attribute_lazy/3` for more.

__ Link to this function

# force_set_argument(changeset, argument, value)

[ __ View Source ](external_link)

Add an argument to the changeset, which will be provided to the action.

Does not show a warning when used in before/after action hooks.

__ Link to this function

# force_set_arguments(changeset, map)

[ __ View Source ](external_link)

Merge a map of arguments to the arguments list.

Does not show a warning when used in before/after action hooks.

__ Link to this function

# fully_atomic_changeset(resource, action, params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec fully_atomic_changeset(
      resource :: [Ash.Resource.t](external_link)(),
      action :: [atom](external_link)() | [Ash.Resource.Actions.action](external_link)(),
      params :: [map](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: t() | {:not_atomic, [String.t](external_link)()}

__ Link to this function

# get_argument(changeset, argument)

[ __ View Source ](external_link)
    
    
    @spec get_argument(t(), [atom](external_link)()) :: [term](external_link)()

Gets the value of an argument provided to the changeset.

__ Link to this function

# get_argument_or_attribute(changeset, attribute)

[ __ View Source ](external_link)
    
    
    @spec get_argument_or_attribute(t(), [atom](external_link)()) :: [term](external_link)()

Gets the value of an argument provided to the changeset, falling back to `Ash.Changeset.get_attribute/2` if nothing was provided.

__ Link to this function

# get_attribute(changeset, attribute)

[ __ View Source ](external_link)
    
    
    @spec get_attribute(t(), [atom](external_link)()) :: [term](external_link)()

Gets the changing value or the original value of an attribute.

__ Link to this function

# get_data(changeset, attribute)

[ __ View Source ](external_link)
    
    
    @spec get_data(t(), [atom](external_link)()) :: [term](external_link)()

Gets the original value for an attribute

__ Link to this function

# handle_errors(changeset, func)

[ __ View Source ](external_link)
    
    
    @spec handle_errors(
      t(),
      (t(), error :: [term](external_link)() ->
         :ignore | t() | (error :: [term](external_link)()) | {error :: [term](external_link)(), t()})
      | {[module](external_link)(), [atom](external_link)(), [[term](external_link)()]}
    ) :: t()

Sets a custom error handler on the changeset.

The error handler should be a two argument function or an mfa, in which case the first two arguments will be set to the changeset and the error, w/ the supplied arguments following those.

Any errors generated are passed to `handle_errors`, which can return any of the following:

  * `:ignore` \- the error is discarded, and the changeset is not marked as invalid
  * `changeset` \- a new (or the same) changeset. The error is not added (you'll want to add an error yourself), but the changeset _is_ marked as invalid.
  * `{changeset, error}` \- a new (or the same) error and changeset. The error is added to the changeset, and the changeset is marked as invalid.
  * `anything_else` \- is treated as a new, transformed version of the error. The result is added as an error to the changeset, and the changeset is marked as invalid.



__ Link to this function

# handle_params(changeset, action, params, handle_params_opts \\\ [])

[ __ View Source ](external_link)

__ Link to this macro

# is_valid(changeset)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_valid(t()) :: [Macro.output](external_link)()

A guard which checks if the Changeset is valid.

__ Link to this function

# load(changeset, load)

[ __ View Source ](external_link)
    
    
    @spec load(t(), [term](external_link)()) :: t()

Calls the provided load statement on the result of the action at the very end of the action.

__ Link to this function

# loading?(changeset, path)

[ __ View Source ](external_link)

Returns true if the field/relationship or path to field/relationship is being loaded.

It accepts an atom or a list of atoms, which is treated for as a "path", i.e:
    
    
    Resource |> Ash.Changeset.load(friends: [enemies: [:score]]) |> Ash.Changeset.loading?([:friends, :enemies, :score])
    iex> true
    
    Resource |> Ash.Changeset.load(friends: [enemies: [:score]]) |> Ash.Changeset.loading?([:friends, :score])
    iex> false
    
    Resource |> Ash.Changeset.load(friends: [enemies: [:score]]) |> Ash.Changeset.loading?(:friends)
    iex> true

__ Link to this function

# manage_relationship(changeset, relationship, input, opts \\\ [])

[ __ View Source ](external_link)

Manages the related records by creating, updating, or destroying them as necessary.

Keep in mind that the default values for all `on_*` are `:ignore`, meaning nothing will happen unless you provide instructions.

The input provided to `manage_relationship` should be a map, in the case of to_one relationships, or a list of maps in the case of to_many relationships. The following steps are followed for each input provided:

  * The input is checked against the currently related records to find any matches. The primary key and unique identities are used to find matches.
  * For any input that had a match in the current relationship, the `:on_match` behavior is triggered
  * For any input that does not have a match:
    * if there is `on_lookup` behavior:
      * we try to find the record in the data layer.
      * if the record is found, the on_lookup behavior is triggered
      * if the record is not found, the `on_no_match` behavior is triggered
    * if there is no `on_lookup` behavior:
      * the `on_no_match` behavior is triggered
  * finally, for any records present in the _current relationship_ that had no match _in the input_ , the `on_missing` behavior is triggered



##  __ Options

  * `:type` \- If the `type` is specified, the default values of each option is modified to match that `type` of operation.  
This allows for specifying certain operations much more succinctly. The defaults that are modified are listed below: 

    * `:append_and_remove`
        
                [
          on_lookup: :relate,
          on_no_match: :error,
          on_match: :ignore,
          on_missing: :unrelate
        ]  

    * `:append`
        
                [
          on_lookup: :relate,
          on_no_match: :error,
          on_match: :ignore,
          on_missing: :ignore
        ]  

    * `:remove`
        
                [
          on_no_match: :error,
          on_match: :unrelate,
          on_missing: :ignore
        ]  

    * `:direct_control`
        
                [
          on_lookup: :ignore,
          on_no_match: :create,
          on_match: :update,
          on_missing: :destroy
        ]  

    * `:create`
        
                [
          on_no_match: :create,
          on_match: :ignore
        ]

Valid values are :append_and_remove, :append, :remove, :direct_control, :create
  * `:authorize?` ([`boolean/0`](external_link)) - Authorize reads and changes to the destination records, if the primary change is being authorized as well. The default value is `true`.

  * `:eager_validate_with` ([`atom/0`](external_link)) - Validates that any referenced entities exist _before_ the action is being performed, using the provided domain for the read. The default value is `false`.

  * `:on_no_match` ([`term/0`](external_link)) - Instructions for handling records where no matching record existed in the relationship. 

    * `:ignore` (default) - those inputs are ignored
    * `:match` \- For `has_one` and `belongs_to` only, any input is treated as a match for an existing value. For `has_many` and `many_to_many`, this is the same as `:ignore`.
    * `:create` \- the records are created using the destination's primary create action
    * `{:create, :action_name}` \- the records are created using the specified action on the destination resource
    * `{:create, :action_name, :join_table_action_name, [:list, :of, :join_table, :params]}` \- Same as `{:create, :action_name}` but takes the list of params specified out and applies them when creating the join record, with the provided join_table_action_name.
    * `:error` \- an error is returned indicating that a record would have been created
      * If `on_lookup` is set, and the data contained a primary key or identity, then the error is a `NotFound` error
      * Otherwise, an `InvalidRelationship` error is returned The default value is `:ignore`.
  * `:value_is_key` ([`atom/0`](external_link)) - Configures what key to use when a single value is provided.  
This is useful when you use things like a list of strings i.e `friend_emails` to manage the relationship, instead of a list of maps.  
By default, we assume it is the primary key of the destination resource, unless it is a composite primary key.

  * `:identity_priority` (list of [`atom/0`](external_link)) - The list, in priority order, of identities to use when looking up records for `on_lookup`, and matching records with `on_match`.  
Use `:_primary_key` to prioritize checking a match with the primary key. All identities, along with `:_primary_key` are checked regardless, this only allows ensuring that some are checked first. Defaults to the list provided by `use_identities`, so you typically won't need this option.

  * `:use_identities` (list of [`atom/0`](external_link)) - A list of identities that may be used to look up and compare records. Use `:_primary_key` to include the primary key. By default, only `[:_primary_key]` is used.

  * `:on_lookup` ([`term/0`](external_link)) - Before creating a record (because no match was found in the relationship), the record can be looked up and related. 

    * `:ignore` (default) - Does not look for existing entries (matches in the current relationship are still considered updates)
    * `:relate` \- Same as calling `{:relate, primary_action_name}`
    * `{:relate, :action_name}` \- the records are looked up by primary key/the first identity that is found (using the primary read action), and related. The action should be:
      * `many_to_many` \- a create action on the join resource
      * `has_many` \- an update action on the destination resource
      * `has_one` \- an update action on the destination resource
      * `belongs_to` \- an update action on the source resource
    * `{:relate, :action_name, :read_action_name}` \- Same as the above, but customizes the read action called to search for matches.
    * `:relate_and_update` \- Same as `:relate`, but the remaining parameters from the lookup are passed into the action that is used to change the relationship key
    * `{:relate_and_update, :action_name}` \- Same as the above, but customizes the action used. The action should be:
      * `many_to_many` \- a create action on the join resource
      * `has_many` \- an update action on the destination resource
      * `has_one` \- an update action on the destination resource
      * `belongs_to` \- an update action on the source resource
    * `{:relate_and_update, :action_name, :read_action_name}` \- Same as the above, but customizes the read action called to search for matches.
    * `{:relate_and_update, :action_name, :read_action_name, [:list, :of, :join_table, :params]}` \- Same as the above, but uses the provided list of parameters when creating the join row (only relevant for many to many relationships). Use `:*` to _only_ update the join record, and pass all parameters to its action The default value is `:ignore`.
  * `:on_match` ([`term/0`](external_link)) - Instructions for handling records where a matching record existed in the relationship already. 

    * `:ignore` (default) - those inputs are ignored
    * `:update` \- the record is updated using the destination's primary update action
    * `{:update, :action_name}` \- the record is updated using the specified action on the destination resource
    * `{:update, :action_name, :join_table_action_name, [:list, :of, :params]}` \- Same as `{:update, :action_name}` but takes the list of params specified out and applies them as an update to the join record (only valid for many to many)
    * `:update_join` \- update only the join record (only valid for many to many)
    * `{:update_join, :join_table_action_name}` \- use the specified update action on a join resource
    * `{:update_join, :join_table_action_name, [:list, :of, :params]}` \- pass specified params from input into a join resource update action
    * `{:destroy, :action_name}` \- the record is destroyed using the specified action on the destination resource. The action should be:
      * `many_to_many` \- a destroy action on the join record
      * `has_many` \- a destroy action on the destination resource
      * `has_one` \- a destroy action on the destination resource
      * `belongs_to` \- a destroy action on the destination resource
    * `:error` \- an error is returned indicating that a record would have been updated
    * `:no_match` \- follows the `on_no_match` instructions with these records
    * `:missing` \- follows the `on_missing` instructions with these records
    * `:unrelate` \- the related item is not destroyed, but the data is "unrelated", making this behave like `remove_from_relationship/3`. The action should be:
      * `many_to_many` \- the join resource row is destroyed
      * `has_many` \- the `destination_attribute` (on the related record) is set to `nil`
      * `has_one` \- the `destination_attribute` (on the related record) is set to `nil`
      * `belongs_to` \- the `source_attribute` (on this record) is set to `nil`
    * `{:unrelate, :action_name}` \- the record is unrelated using the provided update action. The action should be:
      * `many_to_many` \- a destroy action on the join resource
      * `has_many` \- an update action on the destination resource
      * `has_one` \- an update action on the destination resource
      * `belongs_to` \- an update action on the source resource The default value is `:ignore`.
  * `:on_missing` ([`term/0`](external_link)) - Instructions for handling records that existed in the current relationship but not in the input. 

    * `:ignore` (default) - those inputs are ignored
    * `:destroy` \- the record is destroyed using the destination's primary destroy action
    * `{:destroy, :action_name}` \- the record is destroyed using the specified action on the destination resource
    * `{:destroy, :action_name, :join_resource_action_name}` \- the record is destroyed using the specified action on the destination resource, but first the join resource is destroyed with its specified action
    * `:error` \- an error is returned indicating that a record would have been updated
    * `:unrelate` \- the related item is not destroyed, but the data is "unrelated", making this behave like `remove_from_relationship/3`. The action should be:
      * `many_to_many` \- the join resource row is destroyed
      * `has_many` \- the `destination_attribute` (on the related record) is set to `nil`
      * `has_one` \- the `destination_attribute` (on the related record) is set to `nil`
      * `belongs_to` \- the `source_attribute` (on this record) is set to `nil`
    * `{:unrelate, :action_name}` \- the record is unrelated using the provided update action. The action should be:
      * `many_to_many` \- a destroy action on the join resource
      * `has_many` \- an update action on the destination resource
      * `has_one` \- an update action on the destination resource
      * `belongs_to` \- an update action on the source resource The default value is `:ignore`.
  * `:error_path` ([`term/0`](external_link)) - By default, errors added to the changeset will use the path `[:relationship_name]`, or `[:relationship_name, <index>]`. If you want to modify this path, you can specify `error_path`, e.g if had a `change` on an action that takes an argument and uses that argument data to call `manage_relationship`, you may want any generated errors to appear under the name of that argument, so you could specify `error_path: :argument_name` when calling `manage_relationship`.

  * `:join_keys` (list of [`atom/0`](external_link)) - For many to many relationships specifies the parameters to pick from the input and pass into a join resource action. Applicable in cases like `on_no_match: :create`, `on_match: :update` and `on_lookup: :relate`. Can be overwritten by a full form instruction tuple which contains join parameters at the end.

  * `:meta` ([`term/0`](external_link)) - Freeform data that will be retained along with the options, which can be used to track/manage the changes that are added to the `relationships` key.

  * `:ignore?` ([`term/0`](external_link)) - This tells Ash to ignore the provided inputs when actually running the action. This can be useful for building up a set of instructions that you intend to handle manually. The default value is `false`.




Each call to this function adds new records that will be handled according to their options. For example, if you tracked "tags to add" and "tags to remove" in separate fields, you could input them like so:
    
    
    changeset
    |> Ash.Changeset.manage_relationship(
      :tags,
      [%{name: "backend"}],
      on_lookup: :relate, #relate that tag if it exists in the database
      on_no_match: :error # error if a tag with that name doesn't exist
    )
    |> Ash.Changeset.manage_relationship(
      :tags,
      [%{name: "frontend"}],
      on_no_match: :error, # error if a tag with that name doesn't exist in the relationship
      on_match: :unrelate # if a tag with that name is related, unrelate it
    )

When calling this multiple times with the `on_missing` option set, the list of records that are considered missing are checked after each set of inputs is processed. For example, if you manage the relationship once with `on_missing: :unrelate`, the records missing from your input will be removed, and _then_ your next call to `manage_relationship` will be resolved (with those records unrelated). For this reason, it is suggested that you don't call this function multiple times with an `on_missing` instruction, as you may be surprised by the result.

If you want the input to update existing entities, you need to ensure that the primary key (or unique identity) is provided as part of the input. See the example below:
    
    
    changeset
    |> Ash.Changeset.manage_relationship(
      :comments,
      [%{rating: 10, contents: "foo"}],
      on_no_match: {:create, :create_action},
      on_missing: :ignore
    )
    |> Ash.Changeset.manage_relationship(
      :comments,
      [%{id: 10, rating: 10, contents: "foo"}],
      on_match: {:update, :update_action},
      on_no_match: {:create, :create_action})

This is a simple way to manage a relationship. If you need custom behavior, you can customize the action that is called, which allows you to add arguments/changes. However, at some point you may want to forego this function and make the changes yourself. For example:
    
    
    input = [%{id: 10, rating: 10, contents: "foo"}]
    
    changeset
    |> Ash.Changeset.after_action(fn _changeset, result ->
      # An example of updating comments based on a result of other changes
      for comment <- input do
        comment = Ash.get(Comment, comment.id)
    
        comment
        |> Map.update(:rating, 0, &(&1 * result.rating_weight))
        |> Ash.update!()
      end
    
      {:ok, result}
    end)

##  __ Using records as input

Records can be supplied as the input values. If you do:

  * if it would be looked up due to `on_lookup`, the record is used as-is
  * if it would be created due to `on_no_match`, the record is used as-is
  * Instead of specifying `join_keys`, those keys must go in `__metadata__.join_keys`. If `join_keys` is specified in the options, it is ignored.



For example:
    
    
    post1 =
      changeset
      |> Ash.create!()
      |> Ash.Resource.put_metadata(:join_keys, %{type: "a"})
    
    post1 =
      changeset2
      |> Ash.create!()
      |> Ash.Resource.put_metadata(:join_keys, %{type: "b"})
    
    author = Ash.create!(author_changeset)
    
    Ash.Changeset.manage_relationship(
      author,
      :posts,
      [post1, post2],
      on_lookup: :relate
    )

__ Link to this function

# manage_relationship_opts(atom)

[ __ View Source ](external_link)
    
    
    @spec manage_relationship_opts(manage_relationship_type()) :: [Keyword.t](external_link)()

__ Link to this function

# new(record_or_resource)

[ __ View Source ](external_link)
    
    
    @spec new([Ash.Resource.t](external_link)() | [Ash.Resource.record](external_link)()) :: t()

Returns a new changeset over a resource.

_Warning_ : You almost always want to use `for_action` or `for_create`, etc. over this function if possible.

You can use this to start a changeset and make changes prior to calling `for_action`. This is not typically necessary, but can be useful as an escape hatch. For example:
    
    
    Resource
    |> Ash.Changeset.new()
    |> Ash.Changeset.change_attribute(:name, "foobar")
    |> Ash.Changeset.for_action(...)

__ Link to this function

# prepare_changeset_for_action(changeset, action, opts)

[ __ View Source ](external_link)

__ Link to this function

# present?(changeset, attribute)

[ __ View Source ](external_link)

Checks if an argument is not nil or an attribute is not nil, either in the original data, or that it is not being changed to a `nil` value if it is changing.

This also accounts for the `accessing_from` context that is set when using `manage_relationship`, so it is aware that a particular value _will_ be set by `manage_relationship` even if it isn't currently being set.

__ Link to this function

# put_context(changeset, key, value)

[ __ View Source ](external_link)
    
    
    @spec put_context(t(), [atom](external_link)(), [term](external_link)()) :: t()

Puts a key/value in the changeset context that can be used later.

Do not use the `private` key in your custom context, as that is reserved for internal use.

__ Link to this function

# run_atomic_change(changeset, map, context)

[ __ View Source ](external_link)

__ Link to this function

# run_before_transaction_hooks(changeset)

[ __ View Source ](external_link)

__ Link to this function

# select(changeset, fields, opts \\\ [])

[ __ View Source ](external_link)

Ensure that only the specified attributes are present in the results.

The first call to `select/2` will replace the default behavior of selecting all attributes. Subsequent calls to `select/2` will combine the provided fields unless the `replace?` option is provided with a value of `true`.

If a field has been deselected, selecting it again will override that (because a single list of fields is tracked for selection)

Primary key attributes always selected and cannot be deselected.

When attempting to load a relationship (or manage it with `Ash.Changeset.manage_relationship/3`), if the source field is not selected on the query/provided data an error will be produced. If loading a relationship with a query, an error is produced if the query does not select the destination field of the relationship.

Datalayers currently are not notified of the `select` for a changeset(unlike queries), and creates/updates select all fields when they are performed. A select provided on a changeset sets the unselected fields to `nil` before returning the result.

Use `ensure_selected/2` if you wish to make sure a field has been selected, without deselecting any other fields.

__ Link to this function

# selecting?(changeset, field)

[ __ View Source ](external_link)

__ Link to this function

# set_argument(changeset, argument, value)

[ __ View Source ](external_link)

Add an argument to the changeset, which will be provided to the action.

__ Link to this function

# set_arguments(changeset, map)

[ __ View Source ](external_link)

Merge a map of arguments to the arguments list.

__ Link to this function

# set_context(changeset, map)

[ __ View Source ](external_link)
    
    
    @spec set_context(t(), [map](external_link)() | nil) :: t()

Deep merges the provided map into the changeset context that can be used later.

Do not use the `private` key in your custom context, as that is reserved for internal use.

__ Link to this function

# set_on_upsert(changeset, upsert_keys)

[ __ View Source ](external_link)
    
    
    @spec set_on_upsert(t(), [[atom](external_link)()]) :: [Keyword.t](external_link)()

__ Link to this function

# set_result(changeset, result)

[ __ View Source ](external_link)
    
    
    @spec set_result(t(), [term](external_link)()) :: t()

Set the result of the action. This will prevent running the underlying datalayer behavior

__ Link to this function

# set_tenant(changeset, tenant)

[ __ View Source ](external_link)
    
    
    @spec set_tenant(t(), [Ash.ToTenant.t](external_link)()) :: t()

__ Link to this function

# timeout(changeset, timeout, default \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec timeout(t(), nil | [pos_integer](external_link)(), nil | [pos_integer](external_link)()) :: t()

__ Link to this function

# update_change(changeset, attribute, fun)

[ __ View Source ](external_link)
    
    
    @spec update_change(t(), [atom](external_link)(), ([any](external_link)() -> [any](external_link)())) :: t()

Updates an existing attribute change by applying a function to it.

This is useful for applying some kind of normalization to the attribute.
    
    
    Ash.Changeset.update_change(changeset, :serial, &String.downcase/1)

The update function gets called with the value already cast to the correct type.
    
    
    changeset
    |> Ash.Changeset.change_attribute(:integer_attribute, "3")
    |> Ash.Changeset.update_change(:integer_attribute, fn x -> x + 1 end)

##  __ Invalid value handling

If `update_change` is called with a changeset that has not been validated yet, the update function must handle potentially invalid and `nil` values.

To only deal with valid values, you can call `update_change` in a `before_action` hook.

__ Link to this function

# with_hooks(changeset, func, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec with_hooks(
      t(),
      (t() ->
         {:ok, [term](external_link)(), %{notifications: [[Ash.Notifier.Notification.t](external_link)()]}}
         | {:error, [term](external_link)()}),
      [Keyword.t](external_link)()
    ) ::
      {:ok, [term](external_link)(), t(), %{notifications: [[Ash.Notifier.Notification.t](external_link)()]}}
      | {:error, [term](external_link)()}

Wraps a function in the before/after action hooks of a changeset.

The function takes a changeset and if it returns `{:ok, result}`, the result will be passed through the after action hooks.
