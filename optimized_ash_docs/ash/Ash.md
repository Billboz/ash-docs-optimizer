# Ash — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- aggregate()
- load_statement()
- page_request()
- record_or_records()
- record_with_args()
- resource_with_args()
- __ Functions
- aggregate(query, aggregate_or_aggregates, opts \\\ [])
- aggregate!(query, aggregate_or_aggregates, opts \\\ [])
- avg(query, field, opts \\\ [])
- avg!(query, field, opts \\\ [])
- bulk_create(inputs, resource, action, opts \\\ [])
  - __ Assumptions
  - __ Performance/Feasibility
  - __ Changes/Validations
  - __ After Action Hooks
  - __ Options
- bulk_create!(inputs, resource, action, opts \\\ [])
- bulk_destroy(query_or_stream, action, input, opts \\\ [])
  - __ Options
- bulk_destroy!(stream_or_query, action, input, opts \\\ [])
- bulk_update(query_or_stream, action, input, opts \\\ [])
  - __ Options
- bulk_update!(stream_or_query, action, input, opts \\\ [])
- calculate(resource_or_record, calculation, opts \\\ [])
- calculate!(resource_or_record, calculation, opts \\\ [])
- calculate_opts()
- can(action_or_query_or_changeset, actor, opts \\\ [])
    - __ Accepted inputs
    - __ Options
- can?(action_or_query_or_changeset, actor, opts \\\ [])
    - __ Options
- context_to_opts(map, add_to \\\ [])
- count(query, opts \\\ [])
- count!(query, opts \\\ [])
- create(changeset_or_resource, params_or_opts \\\ %{}, opts \\\ [])
- create!(changeset_or_resource, params \\\ %{}, opts \\\ [])
- destroy(changeset_or_record, opts \\\ [])
- destroy!(changeset_or_record, opts \\\ [])
- exists(query, opts \\\ [])
- exists?(query, opts \\\ [])
- first(query, field, opts \\\ [])
- first!(query, field, opts \\\ [])
- get(resource, id, opts \\\ [])
- get!(resource, id, opts \\\ [])
- list(query, field, opts \\\ [])
- list!(query, field, opts \\\ [])
- load(data, query, opts \\\ [])
- load!(data, query, opts \\\ [])
- max(query, field, opts \\\ [])
- max!(query, field, opts \\\ [])
- min(query, field, opts \\\ [])
- min!(query, field, opts \\\ [])
- page(page, n)
- page!(page, request)
- read(query, opts \\\ [])
  - __ Pagination
      - Limit/offset pagination
      - Keyset pagination
- read!(query, opts \\\ [])
- read_first(query, opts \\\ [])
  - __ Options
- read_first!(query, opts \\\ [])
- read_one(query, opts \\\ [])
  - __ Options
- read_one!(query, opts \\\ [])
- reload(record, opts \\\ [])
- reload!(record, opts \\\ [])
- run_action(input, opts \\\ [])
- run_action!(input, opts \\\ [])
- stream!(query, opts \\\ [])
  - __ Strategies
    - __ Keyset
    - __ Offset
    - __ Full Read
  - __ Options
- sum(query, field, opts \\\ [])
- sum!(query, field, opts \\\ [])
- update(changeset_or_record, params_or_opts \\\ %{}, opts \\\ [])
- update!(changeset_or_record, params_or_opts \\\ %{}, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash (ash v3.4.8)

The primary interface to call actions and interact with resources.

#  __ Summary

##  Types

aggregate()

load_statement()

page_request()

record_or_records()

record_with_args()

resource_with_args()

##  Functions

aggregate(query, aggregate_or_aggregates, opts \\\ [])

Runs an aggregate or aggregates over a resource query

aggregate!(query, aggregate_or_aggregates, opts \\\ [])

Runs an aggregate or aggregates over a resource query. See `aggregate/3` for more.

avg(query, field, opts \\\ [])

Fetches the average of all values of a given field.

avg!(query, field, opts \\\ [])

Fetches the average of all values of a given field or raises an error.

bulk_create(inputs, resource, action, opts \\\ [])

Creates many records.

bulk_create!(inputs, resource, action, opts \\\ [])

Creates many records, raising any errors that are returned. See `bulk_create/4` for more.

bulk_destroy(query_or_stream, action, input, opts \\\ [])

Destroys all items in the provided enumerable or query with the provided input.

bulk_destroy!(stream_or_query, action, input, opts \\\ [])

Destroys all items in the provided enumerable or query with the provided input.

bulk_update(query_or_stream, action, input, opts \\\ [])

Updates all items in the provided enumerable or query with the provided input.

bulk_update!(stream_or_query, action, input, opts \\\ [])

Updates all items in the provided enumerable or query with the provided input.

calculate(resource_or_record, calculation, opts \\\ [])

Evaluates the calculation on the resource.

calculate!(resource_or_record, calculation, opts \\\ [])

Evaluates the calculation on the resource or raises an error. See `calculate/3` for more.

calculate_opts()

can(action_or_query_or_changeset, actor, opts \\\ [])

Returns whether or not the user can perform the action, or `:maybe`, returning any errors.

can?(action_or_query_or_changeset, actor, opts \\\ [])

Returns whether or not the user can perform the action, or raises on errors.

context_to_opts(map, add_to \\\ []) deprecated

See [`Ash.Context.to_opts/2`](external_link).

count(query, opts \\\ [])

Fetches the count of results that would be returned from a given query.

count!(query, opts \\\ [])

Fetches the count of results that would be returned from a given query, or raises an error.

create(changeset_or_resource, params_or_opts \\\ %{}, opts \\\ [])

Create a record.

create!(changeset_or_resource, params \\\ %{}, opts \\\ [])

Create a record or raises an error. See `create/2` for more information.

destroy(changeset_or_record, opts \\\ [])

Destroy a record.

destroy!(changeset_or_record, opts \\\ [])

Destroy a record. See `destroy/2` for more information.

exists(query, opts \\\ [])

Returns whether or not the query would return any results.

exists?(query, opts \\\ [])

Returns whether or not the query would return any results, or raises an error.

first(query, field, opts \\\ [])

Fetches the first value for a given field, or raises an error.

first!(query, field, opts \\\ [])

Fetches the first value for a given field.

get(resource, id, opts \\\ [])

Get a record by an identifier.

get!(resource, id, opts \\\ [])

Get a record by an identifier, or raises an error. See `get/3` for more.

list(query, field, opts \\\ [])

Fetches a list of all values of a given field.

list!(query, field, opts \\\ [])

Fetches a list of all values of a given field or raises an error.

load(data, query, opts \\\ [])

Load fields or relationships on already fetched records.

load!(data, query, opts \\\ [])

Load fields or relationships on already fetched records. See `load/3` for more information.

max(query, field, opts \\\ [])

Fetches the greatest of all values of a given field.

max!(query, field, opts \\\ [])

Fetches the greatest of all values of a given field or raises an error.

min(query, field, opts \\\ [])

Fetches the least of all values of a given field.

min!(query, field, opts \\\ [])

Fetches the least of all values of a given field or raises an error.

page(page, n)

Fetch a page relative to the provided page.

page!(page, request)

Fetch a page relative to the provided page or raises an error

read(query, opts \\\ [])

Runs an [`Ash.Query`](external_link).

read!(query, opts \\\ [])

Run an [`Ash.Query`](external_link). See `read/2` for more.

read_first(query, opts \\\ [])

Runs a query on a resource, returning a first result, nil, or an error.

read_first!(query, opts \\\ [])

Runs an ash query, returning the first result or raise an error. See `read_first/2` for more.

read_one(query, opts \\\ [])

Runs a query on a resource, returning a single result, nil, or an error.

read_one!(query, opts \\\ [])

Runs an ash query, returning a single result or raise an error. See `read_one/2` for more.

reload(record, opts \\\ [])

Refetches a record by primary key. See `reload/2` for more.

reload!(record, opts \\\ [])

Refetches a record by primary key or raises an error. See `reload/2` for more.

run_action(input, opts \\\ [])

Runs a generic action.

run_action!(input, opts \\\ [])

Runs a generic action or raises an error. See `run_action/2` for more

stream!(query, opts \\\ [])

Streams the results of a query.

sum(query, field, opts \\\ [])

Fetches the sum of a given field.

sum!(query, field, opts \\\ [])

Fetches the sum of a given field or raises an error.

update(changeset_or_record, params_or_opts \\\ %{}, opts \\\ [])

Update a record.

update!(changeset_or_record, params_or_opts \\\ %{}, opts \\\ [])

Update a record. See `update/2` for more information.

#  __ Types

__ Link to this type

# aggregate()

[ __ View Source ](external_link)
    
    
    @type aggregate() ::
      [Ash.Query.Aggregate.t](external_link)()
      | {name :: [atom](external_link)(), kind :: [atom](external_link)()}
      | {name :: [atom](external_link)(), kind :: [atom](external_link)(), opts :: [Keyword.t](external_link)()}

__ Link to this type

# load_statement()

[ __ View Source ](external_link)
    
    
    @type load_statement() ::
      [Ash.Query.t](external_link)()
      | [[atom](external_link)()]
      | [atom](external_link)()
      | [Keyword.t](external_link)()
      | [[atom](external_link)() | {[atom](external_link)(), [atom](external_link)() | [Keyword.t](external_link)()}]

__ Link to this type

# page_request()

[ __ View Source ](external_link)
    
    
    @type page_request() :: :next | :prev | :first | :last | :self | [integer](external_link)()

__ Link to this type

# record_or_records()

[ __ View Source ](external_link)
    
    
    @type record_or_records() :: [Ash.Resource.record](external_link)() | [[Ash.Resource.record](external_link)()]

__ Link to this type

# record_with_args()

[ __ View Source ](external_link)
    
    
    @type record_with_args() :: {[Ash.Resource.record](external_link)(), [map](external_link)() | [Keyword.t](external_link)()}

__ Link to this type

# resource_with_args()

[ __ View Source ](external_link)
    
    
    @type resource_with_args() :: {[Ash.Resource.t](external_link)(), [map](external_link)() | [Keyword.t](external_link)()}

#  __ Functions

__ Link to this function

# aggregate(query, aggregate_or_aggregates, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec aggregate(
      [Ash.Query.t](external_link)() | [Ash.Resource.t](external_link)(),
      aggregates :: aggregate() | [aggregate()],
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [term](external_link)()} | {:error, [Ash.Error.t](external_link)()}

Runs an aggregate or aggregates over a resource query

If you pass an `%Ash.Query.Aggregate{}`, gotten from `Ash.Query.Aggregate.new()`, the query provided as the first argument to this function will not apply. For this reason, it is preferred that you pass in the tuple format, i.e

Prefer this: `Api.aggregate(query, {:count_of_things, :count})`

Over this: `Api.aggregate(query, Ash.Query.Aggregate.new(...))`

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access




__ Link to this function

# aggregate!(query, aggregate_or_aggregates, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec aggregate!(
      [Ash.Query.t](external_link)() | [Ash.Resource.t](external_link)(),
      aggregates :: aggregate() | [aggregate()],
      opts :: [Keyword.t](external_link)()
    ) :: [term](external_link)() | [no_return](external_link)()

Runs an aggregate or aggregates over a resource query. See `aggregate/3` for more.

__ Link to this function

# avg(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the average of all values of a given field.

__ Link to this function

# avg!(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the average of all values of a given field or raises an error.

__ Link to this function

# bulk_create(inputs, resource, action, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec bulk_create(
      [Enumerable.t](external_link)([map](external_link)()),
      resource :: [Ash.Resource.t](external_link)(),
      action :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      [Ash.BulkResult.t](external_link)()
      | Enumerable.t(
          {:ok, [Ash.Resource.record](external_link)()}
          | {:error, [Ash.Changeset.t](external_link)() | [Ash.Error.t](external_link)()}
          | {:notification, [Ash.Notifier.Notification.t](external_link)()}
        )

Creates many records.

##  __ Assumptions

We assume that the input is a list of changesets all for the same action, or a list of input maps for the same action with the `:resource` and `:action` option provided to illustrate which action it is for.

##  __ Performance/Feasibility

The performance of this operation depends on the data layer in question. Data layers like AshPostgres will choose reasonable batch sizes in an attempt to handle large bulk actions, but that does not mean that you can pass a list of 500k inputs and expect things to go off without a hitch (although it might). If you need to do large data processing, you should look into projects like GenStage and Broadway. With that said, if you want to do things like support CSV upload and you place some reasonable limits on the size this is a great tool. You'll need to test it yourself, YMMV.

Passing `return_records?: true` can significantly increase the time it takes to perform the operation, and can also make the operation completely unreasonable due to the memory requirement. If you want to do very large bulk creates and display all of the results, the suggestion is to annotate them with a "bulk_create_id" in the data layer, and then read the records with that `bulk_create_id` so that they can be retrieved later if necessary.

##  __ Changes/Validations

Changes will be applied in the order they are given on the actions as normal. Any change that exposes the `bulk_change` callbacks will be applied on the entire list.

##  __ After Action Hooks

The following requirements must be met for `after_action` hooks to function properly. If they are not met, and an after_action hook being applied to a changeset in a `change`.

  1. `return_records?` must be set to `true`.
  2. The changeset must be setting the primary key as part of its changes, so that we know which result applies to which changeset.



It is possible to use `after_action` hooks with `bulk_change/3`, but you need to return the hooks along with the changesets. This allows for setting up `after_action` hooks that don't need access to the returned record, or `after_action` hooks that can operate on the entire list at once. See the documentation for that callback for more on how to do accomplish that.

##  __ Options

  * `:upsert?` ([`boolean/0`](external_link)) - If a conflict is found based on the primary key, the record is updated in the database (requires upsert support) The default value is `false`.

  * `:upsert_identity` ([`atom/0`](external_link)) - The identity to use when detecting conflicts for `upsert?`, e.g. `upsert_identity: :full_name`. By default, the primary key is used. Has no effect if `upsert?: true` is not provided

  * `:upsert_fields` \- The fields to upsert. If not set, the action's `upsert_fields` is used. Unlike singular `create`, `bulk_create` with `upsert?` requires that `upsert_fields` be specified explicitly in one of these two locations.

  * `:upsert_condition` ([`term/0`](external_link)) - An expression to check if the record should be updated when there's a conflict.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

  * `:return_notifications?` ([`boolean/0`](external_link)) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.  
If a transaction is ongoing, and this is false, notifications will be discarded, otherwise the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)  
To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications that can be sent, and returns the rest. The default value is `false`.

  * `:rollback_on_error?` ([`boolean/0`](external_link)) - Whether or not to rollback the transaction on error, if the resource is in a transaction.  
If the action has `transaction? false` this option has no effect. If an error is returned from the data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

  * `:notification_metadata` ([`term/0`](external_link)) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

  * `:read_action` ([`atom/0`](external_link)) - The action to use when building the read query.

  * `:assume_casted?` ([`boolean/0`](external_link)) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

  * `:load` ([`term/0`](external_link)) - A load statement to apply to records. Ignored if `return_records?` is not true.

  * `:select` (list of [`atom/0`](external_link)) - A select statement to apply to records. Ignored if `return_records?` is not true.

  * `:authorize_query_with` \- If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

  * `:authorize_changeset_with` \- If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

  * `:authorize_with` \- If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Valid values are :filter, :error The default value is `:filter`.

  * `:context` ([`map/0`](external_link)) - Context to set on each changeset

  * `:sorted?` ([`boolean/0`](external_link)) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

  * `:return_records?` ([`boolean/0`](external_link)) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

  * `:return_errors?` ([`boolean/0`](external_link)) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `false`.

  * `:batch_size` ([`pos_integer/0`](external_link)) - The number of records to include in each batch. Defaults to the `default_limit` or `max_page_size` of the action, or 100.

  * `:return_stream?` ([`boolean/0`](external_link)) - If set to `true`, instead of an [`Ash.BulkResult`](external_link), a mixed stream is returned.  
Potential elements:  
`{:notification, notification}` \- if `return_notifications?` is set to `true` `{:ok, record}` \- if `return_records?` is set to `true` `{:error, error}` \- an error that occurred. May be changeset or an invidual error. The default value is `false`.

  * `:return_nothing?` ([`boolean/0`](external_link)) - Mutes warnings about returning nothing.  
Only relevant if `return_stream?` is set to `true` and all other `return_*?` options are set to `false`. The default value is `false`.

  * `:stop_on_error?` ([`boolean/0`](external_link)) - If true, the first encountered error will stop the action and be returned. Otherwise, errors will be skipped. The default value is `false`.

  * `:notify?` ([`boolean/0`](external_link)) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return the results from each batch. This may be intensive for large bulk actions.  
Notifications will be automatically sent unless `return_notifications?` is set to `true`. The default value is `false`.

  * `:transaction` \- Whether or not to wrap the entire execution in a transaction, each batch, or not at all.  
Keep in mind:  
`before_transaction` and `after_transaction` hooks attached to changesets will have to be run _inside_ the transaction if you choose `transaction: :all`. Valid values are :all, :batch, false The default value is `:batch`.

  * `:max_concurrency` ([`non_neg_integer/0`](external_link)) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.




__ Link to this function

# bulk_create!(inputs, resource, action, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec bulk_create!([Enumerable.t](external_link)([map](external_link)()), [Ash.Resource.t](external_link)(), [atom](external_link)(), [Keyword.t](external_link)()) ::
      [Ash.BulkResult.t](external_link)() | [no_return](external_link)()

Creates many records, raising any errors that are returned. See `bulk_create/4` for more.

__ Link to this function

# bulk_destroy(query_or_stream, action, input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec bulk_destroy(
      [Enumerable.t](external_link)([Ash.Resource.record](external_link)()) | [Ash.Query.t](external_link)(),
      [atom](external_link)(),
      input :: [map](external_link)(),
      [Keyword.t](external_link)()
    ) :: [Ash.BulkResult.t](external_link)()

Destroys all items in the provided enumerable or query with the provided input.

The input is a map of valid inputs for the action. The input will be applied to all records in the enumerable/query.

If the data layer supports destroying from a query, and the destroy action can be done fully atomically, it will be updated in a single pass using the data layer.

Otherwise, this will stream each record and update it.

##  __ Options

  * `:resource` ([`Ash.Resource`](external_link)) - The resource being destroyed. This must be provided if the input given is a stream, so we know ahead of time what the resource being updated is.

  * `:stream_batch_size` ([`integer/0`](external_link)) - Batch size to use if provided a query and the query must be streamed

  * `:authorize_query?` ([`boolean/0`](external_link)) - If a query is given, determines whether or not authorization is run on that query. The default value is `true`.

  * `:strategy` \- The strategy or strategies to enable. :stream is used in all cases if the data layer does not support atomics. Valid values are :atomic, :atomic_batches, :stream The default value is `:atomic`.

  * `:filter` ([`term/0`](external_link)) - A filter to apply to records. This is also applied to a stream of inputs.

  * `:allow_stream_with` \- The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read The default value is `:keyset`.

  * `:stream_with` \- The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read

  * `:page` \- Pagination options, see [the pagination docs for more](external_link).

  * `:lock` ([`term/0`](external_link)) - A lock statement to add onto the query

  * `:return_query?` ([`boolean/0`](external_link)) - If `true`, the query that was ultimately used is returned as a third tuple element.  
The query goes through many potential changes during a request, potentially adding authorization filters, or replacing relationships for other data layers with their corresponding ids. This option can be used to get the true query that was sent to the data layer. The default value is `false`.

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

  * `:return_notifications?` ([`boolean/0`](external_link)) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.  
If a transaction is ongoing, and this is false, notifications will be discarded, otherwise the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)  
To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications that can be sent, and returns the rest. The default value is `false`.

  * `:rollback_on_error?` ([`boolean/0`](external_link)) - Whether or not to rollback the transaction on error, if the resource is in a transaction.  
If the action has `transaction? false` this option has no effect. If an error is returned from the data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

  * `:notification_metadata` ([`term/0`](external_link)) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

  * `:read_action` ([`atom/0`](external_link)) - The action to use when building the read query.

  * `:assume_casted?` ([`boolean/0`](external_link)) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

  * `:load` ([`term/0`](external_link)) - A load statement to apply to records. Ignored if `return_records?` is not true.

  * `:select` (list of [`atom/0`](external_link)) - A select statement to apply to records. Ignored if `return_records?` is not true.

  * `:authorize_query_with` \- If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

  * `:authorize_changeset_with` \- If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

  * `:authorize_with` \- If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Valid values are :filter, :error The default value is `:filter`.

  * `:context` ([`map/0`](external_link)) - Context to set on each changeset

  * `:sorted?` ([`boolean/0`](external_link)) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

  * `:return_records?` ([`boolean/0`](external_link)) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

  * `:return_errors?` ([`boolean/0`](external_link)) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `false`.

  * `:batch_size` ([`pos_integer/0`](external_link)) - The number of records to include in each batch. Defaults to the `default_limit` or `max_page_size` of the action, or 100.

  * `:return_stream?` ([`boolean/0`](external_link)) - If set to `true`, instead of an [`Ash.BulkResult`](external_link), a mixed stream is returned.  
Potential elements:  
`{:notification, notification}` \- if `return_notifications?` is set to `true` `{:ok, record}` \- if `return_records?` is set to `true` `{:error, error}` \- an error that occurred. May be changeset or an invidual error. The default value is `false`.

  * `:return_nothing?` ([`boolean/0`](external_link)) - Mutes warnings about returning nothing.  
Only relevant if `return_stream?` is set to `true` and all other `return_*?` options are set to `false`. The default value is `false`.

  * `:stop_on_error?` ([`boolean/0`](external_link)) - If true, the first encountered error will stop the action and be returned. Otherwise, errors will be skipped. The default value is `false`.

  * `:notify?` ([`boolean/0`](external_link)) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return the results from each batch. This may be intensive for large bulk actions.  
Notifications will be automatically sent unless `return_notifications?` is set to `true`. The default value is `false`.

  * `:transaction` \- Whether or not to wrap the entire execution in a transaction, each batch, or not at all.  
Keep in mind:  
`before_transaction` and `after_transaction` hooks attached to changesets will have to be run _inside_ the transaction if you choose `transaction: :all`. Valid values are :all, :batch, false The default value is `:batch`.

  * `:max_concurrency` ([`non_neg_integer/0`](external_link)) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.




__ Link to this function

# bulk_destroy!(stream_or_query, action, input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec bulk_destroy!(
      [Enumerable.t](external_link)([Ash.Resource.record](external_link)()) | [Ash.Query.t](external_link)(),
      action :: [atom](external_link)(),
      input :: [map](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Ash.BulkResult.t](external_link)() | [no_return](external_link)()

Destroys all items in the provided enumerable or query with the provided input.

See `bulk_destroy/4` for more.

__ Link to this function

# bulk_update(query_or_stream, action, input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec bulk_update(
      [Enumerable.t](external_link)([Ash.Resource.record](external_link)()) | [Ash.Query.t](external_link)(),
      [atom](external_link)(),
      input :: [map](external_link)(),
      [Keyword.t](external_link)()
    ) :: [Ash.BulkResult.t](external_link)()

Updates all items in the provided enumerable or query with the provided input.

The input is a map of valid inputs for the action. The input will be applied to all records in the enumerable/query.

If the data layer supports updating from a query, and the update action can be done fully atomically, it will be updated in a single pass using the data layer.

Otherwise, this will stream each record and update it.

##  __ Options

  * `:resource` ([`Ash.Resource`](external_link)) - The resource being updated. This must be provided if the input given is a stream, so we know ahead of time what the resource being updated is.

  * `:atomic_update` ([`map/0`](external_link)) - A map of atomic updates to apply. See [`Ash.Changeset.atomic_update/3`](external_link) for more.

  * `:stream_batch_size` ([`integer/0`](external_link)) - Batch size to use if provided a query and the query must be streamed

  * `:authorize_query?` ([`boolean/0`](external_link)) - If a query is given, determines whether or not authorization is run on that query. The default value is `true`.

  * `:filter` ([`term/0`](external_link)) - A filter to apply to records. This is also applied to a stream of inputs.

  * `:strategy` \- The strategy or strategies to enable. :stream is used in all cases if the data layer does not support atomics. Valid values are :atomic, :atomic_batches, :stream The default value is `[:atomic]`.

  * `:allow_stream_with` \- The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read The default value is `:keyset`.

  * `:stream_with` \- The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read

  * `:page` \- Pagination options, see [the pagination docs for more](external_link).

  * `:lock` ([`term/0`](external_link)) - A lock statement to add onto the query

  * `:return_query?` ([`boolean/0`](external_link)) - If `true`, the query that was ultimately used is returned as a third tuple element.  
The query goes through many potential changes during a request, potentially adding authorization filters, or replacing relationships for other data layers with their corresponding ids. This option can be used to get the true query that was sent to the data layer. The default value is `false`.

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

  * `:return_notifications?` ([`boolean/0`](external_link)) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.  
If a transaction is ongoing, and this is false, notifications will be discarded, otherwise the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)  
To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications that can be sent, and returns the rest. The default value is `false`.

  * `:rollback_on_error?` ([`boolean/0`](external_link)) - Whether or not to rollback the transaction on error, if the resource is in a transaction.  
If the action has `transaction? false` this option has no effect. If an error is returned from the data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

  * `:notification_metadata` ([`term/0`](external_link)) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

  * `:read_action` ([`atom/0`](external_link)) - The action to use when building the read query.

  * `:assume_casted?` ([`boolean/0`](external_link)) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

  * `:load` ([`term/0`](external_link)) - A load statement to apply to records. Ignored if `return_records?` is not true.

  * `:select` (list of [`atom/0`](external_link)) - A select statement to apply to records. Ignored if `return_records?` is not true.

  * `:authorize_query_with` \- If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

  * `:authorize_changeset_with` \- If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

  * `:authorize_with` \- If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Valid values are :filter, :error The default value is `:filter`.

  * `:context` ([`map/0`](external_link)) - Context to set on each changeset

  * `:sorted?` ([`boolean/0`](external_link)) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

  * `:return_records?` ([`boolean/0`](external_link)) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

  * `:return_errors?` ([`boolean/0`](external_link)) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `false`.

  * `:batch_size` ([`pos_integer/0`](external_link)) - The number of records to include in each batch. Defaults to the `default_limit` or `max_page_size` of the action, or 100.

  * `:return_stream?` ([`boolean/0`](external_link)) - If set to `true`, instead of an [`Ash.BulkResult`](external_link), a mixed stream is returned.  
Potential elements:  
`{:notification, notification}` \- if `return_notifications?` is set to `true` `{:ok, record}` \- if `return_records?` is set to `true` `{:error, error}` \- an error that occurred. May be changeset or an invidual error. The default value is `false`.

  * `:return_nothing?` ([`boolean/0`](external_link)) - Mutes warnings about returning nothing.  
Only relevant if `return_stream?` is set to `true` and all other `return_*?` options are set to `false`. The default value is `false`.

  * `:stop_on_error?` ([`boolean/0`](external_link)) - If true, the first encountered error will stop the action and be returned. Otherwise, errors will be skipped. The default value is `false`.

  * `:notify?` ([`boolean/0`](external_link)) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return the results from each batch. This may be intensive for large bulk actions.  
Notifications will be automatically sent unless `return_notifications?` is set to `true`. The default value is `false`.

  * `:transaction` \- Whether or not to wrap the entire execution in a transaction, each batch, or not at all.  
Keep in mind:  
`before_transaction` and `after_transaction` hooks attached to changesets will have to be run _inside_ the transaction if you choose `transaction: :all`. Valid values are :all, :batch, false The default value is `:batch`.

  * `:max_concurrency` ([`non_neg_integer/0`](external_link)) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.




__ Link to this function

# bulk_update!(stream_or_query, action, input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec bulk_update!(
      [Enumerable.t](external_link)([Ash.Resource.record](external_link)()) | [Ash.Query.t](external_link)(),
      action :: [atom](external_link)(),
      input :: [map](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [Ash.BulkResult.t](external_link)() | [no_return](external_link)()

Updates all items in the provided enumerable or query with the provided input.

See `bulk_update/4` for more.

__ Link to this function

# calculate(resource_or_record, calculation, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec calculate(
      resource_or_record :: [Ash.Resource.t](external_link)() | [Ash.Resource.record](external_link)(),
      calculation :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [term](external_link)()} | {:error, [term](external_link)()}

Evaluates the calculation on the resource.

If a record is provided, its field values will be used to evaluate the calculation.

  * `:args` ([`map/0`](external_link)) - Values for arguments referenced by the calculation. The default value is `%{}`.

  * `:refs` ([`map/0`](external_link)) - Values for references used by the calculation. The default value is `%{}`.

  * `:actor` ([`term/0`](external_link)) - The actor for handling [`^actor/1`](external_link) templates, supplied to calculation context.

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - The tenant, supplied to calculation context.

  * `:authorize?` ([`boolean/0`](external_link)) - Whether or not the request is being authorized, provided to calculation context. The default value is `true`.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer, provided to the calculation context.

  * `:record` ([`term/0`](external_link)) - A record to use as the base of the calculation

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use for the action




__ Link to this function

# calculate!(resource_or_record, calculation, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec calculate!(
      resource_or_record :: [Ash.Resource.t](external_link)() | [Ash.Resource.record](external_link)(),
      calculation :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [term](external_link)() | [no_return](external_link)()

Evaluates the calculation on the resource or raises an error. See `calculate/3` for more.

__ Link to this function

# calculate_opts()

[ __ View Source ](external_link)

__ Link to this function

# can(action_or_query_or_changeset, actor, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec can(
      action_or_query_or_changeset ::
        [Ash.Query.t](external_link)()
        | [Ash.Changeset.t](external_link)()
        | [Ash.ActionInput.t](external_link)()
        | {[Ash.Resource.t](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)()}
        | {[Ash.Resource.t](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)(), input :: [map](external_link)()}
        | {[Ash.Resource.record](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)()}
        | {[Ash.Resource.record](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)(),
           input :: [map](external_link)()},
      actor :: [term](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      {:ok, [boolean](external_link)() | :maybe}
      | {:ok, true, [Ash.Changeset.t](external_link)() | [Ash.Query.t](external_link)()}
      | {:ok, true, [Ash.Changeset.t](external_link)(), [Ash.Query.t](external_link)()}
      | {:ok, false, [Exception.t](external_link)()}
      | {:error, [term](external_link)()}

Returns whether or not the user can perform the action, or `:maybe`, returning any errors.

In cases with "runtime" checks (checks after the action), we may not be able to determine an answer, and so the value `:maybe` will be returned from `can/2`. The `can?` function assumes that `:maybe` means `true`. Keep in mind, this is just for doing things like "can they do this" in a UI, so assuming `:maybe` is `true` is fine. The actual action invocation will be properly checked regardless. If you have runtime checks, you may need to use `can` instead of `can?`, or configure what `:maybe` means.

###  __ Accepted inputs

You can pass many different inputs as the subject to `can/3`.
    
    
    # Can this user run this query.
    Ash.Query.t()
    
    # Can this user run this changeset.
    Ash.Changeset.t()
    
    # Can this user run this action.
    Ash.ActionInput.t()
    
    # Can this user run this action.
    {Ash.Resource.t(), :action}
    
    # Can this user run this action.
    {Ash.Resource.t(), %Action{}}
    
    # Can this user run this action with this input.
    {Ash.Resource.t(), :atom, %{...input}}
    
    # Can this user run this action with this input.
    {Ash.Resource.t(), %Action{}, %{...input}}

###  __ Options

  * `:maybe_is` ([`term/0`](external_link)) - If the actor _may_ be able to perform the action, what value should be returned. The default value is `:maybe`.

  * `:filter_with` \- If set to `:error`, the query will raise an error on a match. If set to `:filter` the query will filter out unauthorized access. Valid values are :filter, :error The default value is `:filter`.

  * `:pre_flight?` ([`boolean/0`](external_link)) - Whether or not this is a pre_flight check (which may perform optimized in-memory checks) or the final proper check. The default value is `true`.

  * `:run_queries?` ([`boolean/0`](external_link)) - Whether or not to run queries. If set to `true`, `:maybe` will not be returned. The default value is `true`.

  * `:data` \- The record or records specifically attempting to be acted upon.

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - The tenant to use for authorization

  * `:alter_source?` ([`boolean/0`](external_link)) - If set to `true`, the source being authorized is returned so it can be run. The default value is `false`.

  * `:base_query` ([`term/0`](external_link)) - A base query on which to apply an generated filters

  * `:no_check?` ([`boolean/0`](external_link)) - Whether or not authorization must pass at the strict/filter step, or if post-checks are allowed to be run The default value is `false`.

  * `:on_must_pass_strict_check` ([`term/0`](external_link)) - Override the value returned when `no_check?` is `true` but a check must be run.

  * `:atomic_changeset` ([`term/0`](external_link)) - A base query on which to apply an generated filters

  * `:return_forbidden_error?` ([`boolean/0`](external_link)) - Whether or not to return a forbidden error in cases of not being authorized. The default value is `false`.




__ Link to this function

# can?(action_or_query_or_changeset, actor, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec can?(
      query_or_changeset_or_action ::
        [Ash.Query.t](external_link)()
        | [Ash.Changeset.t](external_link)()
        | [Ash.ActionInput.t](external_link)()
        | {[Ash.Resource.t](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)()}
        | {[Ash.Resource.t](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)(), input :: [map](external_link)()}
        | {[Ash.Resource.record](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)()}
        | {[Ash.Resource.record](external_link)(), [atom](external_link)() | [Ash.Resource.Actions.action](external_link)(),
           input :: [map](external_link)()},
      actor :: [term](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) :: [boolean](external_link)() | [no_return](external_link)()

Returns whether or not the user can perform the action, or raises on errors.

Calls `can/3` with a `maybe_is: true`. See `can/3` for more info.

###  __ Options

  * `:maybe_is` ([`term/0`](external_link)) - If the actor _may_ be able to perform the action, what value should be returned. The default value is `true`.

  * `:filter_with` \- If set to `:error`, the query will raise an error on a match. If set to `:filter` the query will filter out unauthorized access. Valid values are :filter, :error The default value is `:filter`.

  * `:pre_flight?` ([`boolean/0`](external_link)) - Whether or not this is a pre_flight check (which may perform optimized in-memory checks) or the final proper check. The default value is `true`.

  * `:run_queries?` ([`boolean/0`](external_link)) - Whether or not to run queries. If set to `true`, `:maybe` will not be returned. The default value is `true`.

  * `:data` \- The record or records specifically attempting to be acted upon.

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - The tenant to use for authorization

  * `:alter_source?` ([`boolean/0`](external_link)) - If set to `true`, the source being authorized is returned so it can be run. The default value is `false`.

  * `:base_query` ([`term/0`](external_link)) - A base query on which to apply an generated filters

  * `:no_check?` ([`boolean/0`](external_link)) - Whether or not authorization must pass at the strict/filter step, or if post-checks are allowed to be run The default value is `false`.

  * `:on_must_pass_strict_check` ([`term/0`](external_link)) - Override the value returned when `no_check?` is `true` but a check must be run.

  * `:atomic_changeset` ([`term/0`](external_link)) - A base query on which to apply an generated filters

  * `:return_forbidden_error?` ([`boolean/0`](external_link)) - Whether or not to return a forbidden error in cases of not being authorized. The default value is `false`.




__ Link to this function

# context_to_opts(map, add_to \\\ [])

[ __ View Source ](external_link)

This function is deprecated. Converts a context map to opts to be passed into an action. . 

See [`Ash.Context.to_opts/2`](external_link).

__ Link to this function

# count(query, opts \\\ [])

[ __ View Source ](external_link)

Fetches the count of results that would be returned from a given query.

__ Link to this function

# count!(query, opts \\\ [])

[ __ View Source ](external_link)

Fetches the count of results that would be returned from a given query, or raises an error.

__ Link to this function

# create(changeset_or_resource, params_or_opts \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec create(
      changset_or_resource :: [Ash.Changeset.t](external_link)() | [Ash.Resource.t](external_link)(),
      params_or_opts :: [map](external_link)() | [Keyword.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:ok, [Ash.Resource.record](external_link)(), [[Ash.Notifier.Notification.t](external_link)()]}
      | {:error, [term](external_link)()}

Create a record.

  * `:upsert?` ([`boolean/0`](external_link)) - If a conflict is found based on the primary key, the record is updated in the database (requires upsert support) The default value is `false`.

  * `:upsert_identity` ([`atom/0`](external_link)) - The identity to use when detecting conflicts for `upsert?`, e.g. `upsert_identity: :full_name`. By default, the primary key is used. Has no effect if `upsert?: true` is not provided

  * `:upsert_fields` \- The fields to upsert. If not set, the action's upsert_fields is used, and if that is not set, then any fields not being set to defaults are written.

  * `:upsert_condition` ([`term/0`](external_link)) - An expression to check if the record should be updated when there's a conflict.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

  * `:return_notifications?` ([`boolean/0`](external_link)) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.  
If a transaction is ongoing, and this is false, notifications will be discarded, otherwise the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)  
To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications that can be sent, and returns the rest. The default value is `false`.

  * `:rollback_on_error?` ([`boolean/0`](external_link)) - Whether or not to rollback the transaction on error, if the resource is in a transaction.  
If the action has `transaction? false` this option has no effect. If an error is returned from the data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

  * `:notification_metadata` ([`term/0`](external_link)) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:load` ([`term/0`](external_link)) - A load statement to add onto the changeset




__ Link to this function

# create!(changeset_or_resource, params \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec create!(
      changset_or_resource :: [Ash.Changeset.t](external_link)() | [Ash.Resource.t](external_link)(),
      params_or_opts :: [map](external_link)() | [Keyword.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      [Ash.Resource.record](external_link)()
      | {[Ash.Resource.record](external_link)(), [[Ash.Notifier.Notification.t](external_link)()]}
      | [no_return](external_link)()

Create a record or raises an error. See `create/2` for more information.

__ Link to this function

# destroy(changeset_or_record, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec destroy([Ash.Changeset.t](external_link)() | [Ash.Resource.record](external_link)(), opts :: [Keyword.t](external_link)()) ::
      :ok
      | {:ok, [Ash.Resource.record](external_link)()}
      | {:ok, [[Ash.Notifier.Notification.t](external_link)()]}
      | {:ok, [Ash.Resource.record](external_link)(), [[Ash.Notifier.Notification.t](external_link)()]}
      | {:error, [term](external_link)()}

Destroy a record.

  * `:return_destroyed?` ([`boolean/0`](external_link)) - If true, the destroyed record is included in the return result, e.g `{:ok, destroyed}` or `{:ok, destroyed, notifications}` The default value is `false`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

  * `:return_notifications?` ([`boolean/0`](external_link)) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.  
If a transaction is ongoing, and this is false, notifications will be discarded, otherwise the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)  
To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications that can be sent, and returns the rest. The default value is `false`.

  * `:rollback_on_error?` ([`boolean/0`](external_link)) - Whether or not to rollback the transaction on error, if the resource is in a transaction.  
If the action has `transaction? false` this option has no effect. If an error is returned from the data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

  * `:notification_metadata` ([`term/0`](external_link)) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:load` ([`term/0`](external_link)) - A load statement to add onto the changeset




__ Link to this function

# destroy!(changeset_or_record, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec destroy!([Ash.Changeset.t](external_link)() | [Ash.Resource.record](external_link)(), opts :: [Keyword.t](external_link)()) ::
      :ok
      | [Ash.Resource.record](external_link)()
      | [[Ash.Notifier.Notification.t](external_link)()]
      | {[Ash.Resource.record](external_link)(), [[Ash.Notifier.Notification.t](external_link)()]}
      | [no_return](external_link)()

Destroy a record. See `destroy/2` for more information.

__ Link to this function

# exists(query, opts \\\ [])

[ __ View Source ](external_link)

Returns whether or not the query would return any results.

__ Link to this function

# exists?(query, opts \\\ [])

[ __ View Source ](external_link)

Returns whether or not the query would return any results, or raises an error.

__ Link to this function

# first(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the first value for a given field, or raises an error.

__ Link to this function

# first!(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the first value for a given field.

__ Link to this function

# get(resource, id, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec get([Ash.Resource.t](external_link)(), [term](external_link)(), [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.record](external_link)()} | {:error, [term](external_link)()}

Get a record by an identifier.

For a resource with a composite primary key, pass a keyword list or map, e.g `Ash.get(MyResource, %{first_key: 1, second_key: 2})`

Additionally, a keyword list or map of keys matching an identity can be provided.

  * `:error?` ([`boolean/0`](external_link)) - Whether or not an error should be returned or raised when the record is not found. If set to false, `nil` will be returned. The default value is `true`.

  * `:load` ([`term/0`](external_link)) - Fields or relationships to load in the query. See [`Ash.Query.load/2`](external_link)

  * `:lock` ([`term/0`](external_link)) - A lock statement to add onto the query

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access




__ Link to this function

# get!(resource, id, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec get!([Ash.Resource.t](external_link)(), [term](external_link)(), [Keyword.t](external_link)()) ::
      [Ash.Resource.record](external_link)() | [no_return](external_link)()

Get a record by an identifier, or raises an error. See `get/3` for more.

__ Link to this function

# list(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches a list of all values of a given field.

__ Link to this function

# list!(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches a list of all values of a given field or raises an error.

__ Link to this function

# load(data, query, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec load(
      record_or_records :: [Ash.Resource.record](external_link)() | [[Ash.Resource.record](external_link)()],
      query :: load_statement(),
      opts :: [Keyword.t](external_link)()
    ) :: {:ok, [Ash.Resource.record](external_link)() | [[Ash.Resource.record](external_link)()]} | {:error, [term](external_link)()}

Load fields or relationships on already fetched records.

Accepts a list of non-loaded fields and loads them on the provided records or a query, in which case the loaded fields of the query are used. Relationship loads can be nested, for example: `Ash.load(record, [posts: [:comments]])`.

  * `:lazy?` ([`boolean/0`](external_link)) - If set to true, values will only be loaded if the related value isn't currently loaded. The default value is `false`.

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:strict?` ([`boolean/0`](external_link)) - If set to true, only specified attributes will be loaded when passing a list of fields to fetch on a relationship, which allows for more optimized data-fetching.  
See [`Ash.Query.load/2`](external_link). The default value is `false`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access




__ Link to this function

# load!(data, query, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec load!(
      record_or_records ::
        record_or_records()
        | {:ok, record_or_records()}
        | :error
        | {:error, [term](external_link)()}
        | :ok
        | [Ash.Page.page](external_link)(),
      query :: load_statement(),
      opts :: [Keyword.t](external_link)()
    ) :: [Ash.Resource.record](external_link)() | [[Ash.Resource.record](external_link)()] | [no_return](external_link)()

Load fields or relationships on already fetched records. See `load/3` for more information.

__ Link to this function

# max(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the greatest of all values of a given field.

__ Link to this function

# max!(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the greatest of all values of a given field or raises an error.

__ Link to this function

# min(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the least of all values of a given field.

__ Link to this function

# min!(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the least of all values of a given field or raises an error.

__ Link to this function

# page(page, n)

[ __ View Source ](external_link)
    
    
    @spec page([Ash.Page.page](external_link)(), page_request()) ::
      {:ok, [Ash.Page.page](external_link)()} | {:error, [Ash.Error.t](external_link)()}

Fetch a page relative to the provided page.

__ Link to this function

# page!(page, request)

[ __ View Source ](external_link)
    
    
    @spec page!([Ash.Page.page](external_link)(), page_request()) :: [Ash.Page.page](external_link)() | [no_return](external_link)()

Fetch a page relative to the provided page or raises an error

__ Link to this function

# read(query, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec read([Ash.Query.t](external_link)() | [Ash.Resource.t](external_link)(), [Keyword.t](external_link)()) ::
      {:ok, [[Ash.Resource.record](external_link)()] | [Ash.Page.page](external_link)()} | {:error, [term](external_link)()}

Runs an [`Ash.Query`](external_link).

For more information on building a query, see [`Ash.Query`](external_link).

  * `:page` \- Pagination options, see [the pagination docs for more](external_link).

  * `:load` ([`term/0`](external_link)) - A load statement to add onto the query

  * `:max_concurrency` ([`non_neg_integer/0`](external_link)) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

  * `:lock` ([`term/0`](external_link)) - A lock statement to add onto the query

  * `:return_query?` ([`boolean/0`](external_link)) - If `true`, the query that was ultimately used is returned as a third tuple element.  
The query goes through many potential changes during a request, potentially adding authorization filters, or replacing relationships for other data layers with their corresponding ids. This option can be used to get the true query that was sent to the data layer. The default value is `false`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:authorize_with` \- If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authroization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access




##  __ Pagination

#### Limit/offset pagination

  * `:offset` ([`non_neg_integer/0`](external_link)) - The number of records to skip from the beginning of the query

  * `:limit` ([`pos_integer/0`](external_link)) - The number of records to include in the page

  * `:filter` ([`term/0`](external_link)) - A filter to apply for pagination purposes, that should not be considered in the full count.  
This is used by the liveview paginator to only fetch the records that were _already_ on the page when refreshing data, to avoid pages jittering.

  * `:count` ([`boolean/0`](external_link)) - Whether or not to return the page with a full count of all records




#### Keyset pagination

  * `:before` ([`String.t/0`](external_link)) - Get records that appear before the provided keyset (mutually exclusive with `after`)

  * `:after` ([`String.t/0`](external_link)) - Get records that appear after the provided keyset (mutually exclusive with `before`)

  * `:limit` ([`pos_integer/0`](external_link)) - How many records to include in the page

  * `:filter` ([`term/0`](external_link)) - See the `filter` option for offset pagination, this behaves the same.

  * `:count` ([`boolean/0`](external_link)) - Whether or not to return the page with a full count of all records




__ Link to this function

# read!(query, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec read!([Ash.Query.t](external_link)() | [Ash.Resource.t](external_link)(), [Keyword.t](external_link)()) ::
      [[Ash.Resource.record](external_link)()] | [Ash.Page.page](external_link)() | [no_return](external_link)()

Run an [`Ash.Query`](external_link). See `read/2` for more.

__ Link to this function

# read_first(query, opts \\\ [])

[ __ View Source ](external_link)

Runs a query on a resource, returning a first result, nil, or an error.

Query is automatically limited to only return one result, unlike `read_one/3`

##  __ Options

  * `:not_found_error?` ([`boolean/0`](external_link)) - Whether or not to return an [`Ash.Error.Query.NotFound`](external_link) if no record is found. The default value is `false`.

  * `:page` \- Pagination options, see [the pagination docs for more](external_link).

  * `:load` ([`term/0`](external_link)) - A load statement to add onto the query

  * `:max_concurrency` ([`non_neg_integer/0`](external_link)) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

  * `:lock` ([`term/0`](external_link)) - A lock statement to add onto the query

  * `:return_query?` ([`boolean/0`](external_link)) - If `true`, the query that was ultimately used is returned as a third tuple element.  
The query goes through many potential changes during a request, potentially adding authorization filters, or replacing relationships for other data layers with their corresponding ids. This option can be used to get the true query that was sent to the data layer. The default value is `false`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:authorize_with` \- If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authroization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access




__ Link to this function

# read_first!(query, opts \\\ [])

[ __ View Source ](external_link)

Runs an ash query, returning the first result or raise an error. See `read_first/2` for more.

__ Link to this function

# read_one(query, opts \\\ [])

[ __ View Source ](external_link)

Runs a query on a resource, returning a single result, nil, or an error.

If more than one result would be returned, an error is returned instead.

##  __ Options

  * `:not_found_error?` ([`boolean/0`](external_link)) - Whether or not to return an [`Ash.Error.Query.NotFound`](external_link) if no record is found. The default value is `false`.

  * `:page` \- Pagination options, see [the pagination docs for more](external_link).

  * `:load` ([`term/0`](external_link)) - A load statement to add onto the query

  * `:max_concurrency` ([`non_neg_integer/0`](external_link)) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

  * `:lock` ([`term/0`](external_link)) - A lock statement to add onto the query

  * `:return_query?` ([`boolean/0`](external_link)) - If `true`, the query that was ultimately used is returned as a third tuple element.  
The query goes through many potential changes during a request, potentially adding authorization filters, or replacing relationships for other data layers with their corresponding ids. This option can be used to get the true query that was sent to the data layer. The default value is `false`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:authorize_with` \- If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authroization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access




__ Link to this function

# read_one!(query, opts \\\ [])

[ __ View Source ](external_link)

Runs an ash query, returning a single result or raise an error. See `read_one/2` for more.

__ Link to this function

# reload(record, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec reload(record :: [Ash.Resource.record](external_link)(), opts :: [Keyword.t](external_link)()) ::
      {:ok, [Ash.Resource.record](external_link)()} | {:error, [Ash.Error.t](external_link)()}

Refetches a record by primary key. See `reload/2` for more.

__ Link to this function

# reload!(record, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec reload!(record :: [Ash.Resource.record](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [Ash.Resource.record](external_link)() | [no_return](external_link)()

Refetches a record by primary key or raises an error. See `reload/2` for more.

__ Link to this function

# run_action(input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec run_action(input :: [Ash.ActionInput.t](external_link)(), opts :: [Keyword.t](external_link)()) ::
      :ok | {:ok, [term](external_link)()} | {:error, [Ash.Error.t](external_link)()}

Runs a generic action.

Options:

  * `:actor` ([`term/0`](external_link)) - The actor for handling [`^actor/1`](external_link) templates, supplied to calculation context.

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - The tenant, supplied to calculation context.

  * `:authorize?` ([`boolean/0`](external_link)) - Whether or not the request should be authorized.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer, provided to the calculation context.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use for the action

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.




__ Link to this function

# run_action!(input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec run_action!(input :: [Ash.ActionInput.t](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [term](external_link)() | [no_return](external_link)()

Runs a generic action or raises an error. See `run_action/2` for more

__ Link to this function

# stream!(query, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec stream!(query :: [Ash.Query.t](external_link)() | [Ash.Resource.t](external_link)(), opts :: [Keyword.t](external_link)()) ::
      [Enumerable.t](external_link)([Ash.Resource.record](external_link)())

Streams the results of a query.

##  __ Strategies

There are three strategies supported, and the best one available is always chosen. They are, in order from best to worst:

  * `:keyset`
  * `:offset`
  * `:full_read`



By default, only `:keyset` is supported. If you want to allow worse strategies to be used, pass the worst one you wish to allow as the `allow_stream_with` option, i.e `allow_stream_with: :full_read`. If you wish to specify a specific strategy to use, pass `stream_with: :strategy_name`.

###  __ Keyset

This utilizes keyset pagination to accomplish this stream. The action must support keyset pagination. This is the most efficient way to stream a query, because it works by using filters which can benefit from indexes in the data layer.

###  __ Offset

This utilizes offset/limit to accomplish this stream. If the action supports offset pagination, that will be used. Otherwise, if the data layer supports limit/offset, then explicit limits/offsets will be used. This is a much less efficient way of streaming a resource than `keyset`. To use limit/offset to reliably stream, a sort must always be applied, and limit/offset in the data layer will generally require sorting the entire table to figure out what is in each batch.

###  __ Full Read

This reads the entire table into memory with no limit. This is, generally speaking, the least efficient.

##  __ Options

  * `:batch_size` ([`integer/0`](external_link)) - How many records to request in each query run. Defaults to the pagination limits on the resource, or 250.

  * `:allow_stream_with` \- The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read The default value is `:keyset`.

  * `:stream_with` \- The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read

  * `:page` \- Pagination options, see [the pagination docs for more](external_link).

  * `:load` ([`term/0`](external_link)) - A load statement to add onto the query

  * `:max_concurrency` ([`non_neg_integer/0`](external_link)) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

  * `:lock` ([`term/0`](external_link)) - A lock statement to add onto the query

  * `:return_query?` ([`boolean/0`](external_link)) - If `true`, the query that was ultimately used is returned as a third tuple element.  
The query goes through many potential changes during a request, potentially adding authorization filters, or replacing relationships for other data layers with their corresponding ids. This option can be used to get the true query that was sent to the data layer. The default value is `false`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:reuse_values?` ([`boolean/0`](external_link)) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  * `:authorize_with` \- If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authroization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access




__ Link to this function

# sum(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the sum of a given field.

__ Link to this function

# sum!(query, field, opts \\\ [])

[ __ View Source ](external_link)

Fetches the sum of a given field or raises an error.

__ Link to this function

# update(changeset_or_record, params_or_opts \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec update(
      changeset_or_record :: [Ash.Changeset.t](external_link)() | [Ash.Resource.record](external_link)(),
      params_or_opts :: [map](external_link)() | [Keyword.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:ok, [Ash.Resource.record](external_link)(), [[Ash.Notifier.Notification.t](external_link)()]}
      | {:error, [term](external_link)()}

Update a record.

  * `:params` ([`map/0`](external_link)) - Parameters to supply, ignored if the input is a changeset, only used when an identifier is given.

  * `:atomic_upgrade?` ([`boolean/0`](external_link)) - If true the action will be done atomically if it can (and is configured to do so), ignoring the in memory transformations and validations. You should not generally need to disable this. The default value is `true`.

  * `:domain` ([`Ash.Domain`](external_link)) - The domain to use.

  * `:timeout` ([`timeout/0`](external_link)) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer that implements the [`Ash.Tracer`](external_link) behaviour. See that module for more.

  * `:action` ([`term/0`](external_link)) - The action to use, either an Action struct or the name of the action

  * `:authorize?` \- If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

  * `:context` ([`map/0`](external_link)) - Context to set on the query, changeset, or input

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - A tenant to set on the query or changeset

  * `:actor` ([`term/0`](external_link)) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

  * `:return_notifications?` ([`boolean/0`](external_link)) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.  
If a transaction is ongoing, and this is false, notifications will be discarded, otherwise the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)  
To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications that can be sent, and returns the rest. The default value is `false`.

  * `:rollback_on_error?` ([`boolean/0`](external_link)) - Whether or not to rollback the transaction on error, if the resource is in a transaction.  
If the action has `transaction? false` this option has no effect. If an error is returned from the data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

  * `:notification_metadata` ([`term/0`](external_link)) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

  * `:load` ([`term/0`](external_link)) - A load statement to add onto the changeset




__ Link to this function

# update!(changeset_or_record, params_or_opts \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec update!(
      changeset_or_record :: [Ash.Changeset.t](external_link)() | [Ash.Resource.record](external_link)(),
      params_or_opts :: [map](external_link)() | [Keyword.t](external_link)(),
      opts :: [Keyword.t](external_link)()
    ) ::
      [Ash.Resource.record](external_link)()
      | {[Ash.Resource.record](external_link)(), [[Ash.Notifier.Notification.t](external_link)()]}
      | [no_return](external_link)()

Update a record. See `update/2` for more information.
