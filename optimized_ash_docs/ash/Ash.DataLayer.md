# Ash.DataLayer — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.DataLayer behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- bulk_create_options()
- bulk_update_options()
- data_layer_query()
- feature()
- lateral_join_link()
- lock_type()
- t()
- transaction_reason()
- __ Callbacks
- add_aggregate(data_layer_query, t, t)
- add_aggregates(data_layer_query, list, t)
- add_calculation(data_layer_query, t, expression, t)
- add_calculations(data_layer_query, list, t)
- bulk_create(t, t, options)
- calculate(t, list, context)
- can?(arg1, feature)
- create(t, t)
- destroy(t, t)
- destroy_query(data_layer_query, t, t, opts)
- distinct(data_layer_query, list, resource)
- distinct_sort(data_layer_query, t, resource)
- filter(data_layer_query, t, resource)
- functions(t)
- in_transaction?(t)
- limit(data_layer_query, limit, resource)
- lock(data_layer_query, lock_type, resource)
- offset(data_layer_query, offset, resource)
- prefer_lateral_join_for_many_to_many?()
- resource_to_query(t, t)
- return_query(data_layer_query, t)
- rollback(t, term)
- run_aggregate_query(data_layer_query, list, t)
- run_aggregate_query_with_lateral_join(data_layer_query, list, list, destination_resource, list)
- run_query(data_layer_query, t)
- run_query_with_lateral_join(data_layer_query, list, source_resource, list)
- select(data_layer_query, select, resource)
- set_context(t, data_layer_query, map)
- set_tenant(t, data_layer_query, term)
- sort(data_layer_query, t, resource)
- source(t)
- transaction(t, function, arg3, reason)
- transform_query(t)
- update(t, t)
- update_query(data_layer_query, t, t, opts)
- upsert(t, t, list)
- upsert(t, t, list, arg4)
- __ Functions
- add_aggregates(query, aggregates, resource)
- add_calculations(query, calculations, resource)
- bulk_create(resource, changesets, options)
- calculate(resource, exprs, context)
- can?(feature, resource)
- create(resource, changeset)
- data_layer(resource)
- data_layer_can?(resource, feature)
- data_layer_functions(resource)
- destroy(resource, changeset)
- destroy_query(query, changeset, opts)
- distinct(query, distinct, resource)
- distinct_sort(query, sort, resource)
- filter(query, filter, resource)
- functions(resource)
- in_transaction?(resource)
- limit(query, limit, resource)
- lock(query, lock_type, resource)
- offset(query, offset, resource)
- prefer_lateral_join_for_many_to_many?(data_layer)
- resource_to_query(resource, domain)
- return_query(query, resource)
- rollback(resource, term)
- run_aggregate_query(query, aggregates, resource)
- run_aggregate_query_with_lateral_join(query, aggregates, root_data, destination_resource, path)
- run_query(query, central_resource)
- run_query_with_lateral_join(query, root_data, destination_resource, path)
- select(query, select, resource)
- set_context(resource, query, map)
- set_tenant(resource, query, term)
- sort(query, sort, resource)
- source(resource)
- transaction(resource_or_resources, func, timeout \\\ nil, reason \\\ %{type: :custom, metadata: %{}})
- transform_query(query)
- update(resource, changeset)
- update_query(query, changeset, opts)
- upsert(resource, changeset, keys, identity \\\ nil)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.DataLayer behaviour (ash v3.4.8)

The behaviour for backing resource actions with persistence layers.

#  __ Summary

##  Types

bulk_create_options()

bulk_update_options()

data_layer_query()

feature()

lateral_join_link()

lock_type()

t()

transaction_reason()

##  Callbacks

add_aggregate(data_layer_query, t, t)

add_aggregates(data_layer_query, list, t)

add_calculation(data_layer_query, t, expression, t)

add_calculations(data_layer_query, list, t)

bulk_create(t, t, options)

calculate(t, list, context)

can?(arg1, feature)

create(t, t)

destroy(t, t)

destroy_query(data_layer_query, t, t, opts)

distinct(data_layer_query, list, resource)

distinct_sort(data_layer_query, t, resource)

filter(data_layer_query, t, resource)

functions(t)

in_transaction?(t)

limit(data_layer_query, limit, resource)

lock(data_layer_query, lock_type, resource)

offset(data_layer_query, offset, resource)

prefer_lateral_join_for_many_to_many?()

resource_to_query(t, t)

return_query(data_layer_query, t)

rollback(t, term)

run_aggregate_query(data_layer_query, list, t)

run_aggregate_query_with_lateral_join(data_layer_query, list, list, destination_resource, list)

run_query(data_layer_query, t)

run_query_with_lateral_join(data_layer_query, list, source_resource, list)

select(data_layer_query, select, resource)

set_context(t, data_layer_query, map)

set_tenant(t, data_layer_query, term)

sort(data_layer_query, t, resource)

source(t)

transaction(t, function, arg3, reason)

transform_query(t)

update(t, t)

update_query(data_layer_query, t, t, opts)

upsert(t, t, list)

upsert(t, t, list, arg4)

##  Functions

add_aggregates(query, aggregates, resource)

add_calculations(query, calculations, resource)

bulk_create(resource, changesets, options)

calculate(resource, exprs, context)

can?(feature, resource)

create(resource, changeset)

data_layer(resource)

The data layer of the resource, or nil if it does not have one

data_layer_can?(resource, feature)

Whether or not the data layer supports a specific feature

data_layer_functions(resource)

Custom functions supported by the data layer of the resource

destroy(resource, changeset)

destroy_query(query, changeset, opts)

distinct(query, distinct, resource)

distinct_sort(query, sort, resource)

filter(query, filter, resource)

functions(resource)

in_transaction?(resource)

limit(query, limit, resource)

lock(query, lock_type, resource)

offset(query, offset, resource)

prefer_lateral_join_for_many_to_many?(data_layer)

Whether or not lateral joins should be used for many to many relationships by default

resource_to_query(resource, domain)

return_query(query, resource)

rollback(resource, term)

Rolls back the current transaction

run_aggregate_query(query, aggregates, resource)

run_aggregate_query_with_lateral_join(query, aggregates, root_data, destination_resource, path)

run_query(query, central_resource)

run_query_with_lateral_join(query, root_data, destination_resource, path)

select(query, select, resource)

set_context(resource, query, map)

set_tenant(resource, query, term)

sort(query, sort, resource)

source(resource)

transaction(resource_or_resources, func, timeout \\\ nil, reason \\\ %{type: :custom, metadata: %{}})

Wraps the execution of the function in a transaction with the resource's data_layer

transform_query(query)

update(resource, changeset)

update_query(query, changeset, opts)

upsert(resource, changeset, keys, identity \\\ nil)

#  __ Types

__ Link to this type

# bulk_create_options()

[ __ View Source ](external_link)
    
    
    @type bulk_create_options() :: %{
      batch_size: [pos_integer](external_link)(),
      return_records?: [boolean](external_link)(),
      upsert?: [boolean](external_link)(),
      upsert_keys: nil | [[atom](external_link)()],
      upsert_condition: [Ash.Expr.t](external_link)() | nil,
      identity: [Ash.Resource.Identity.t](external_link)() | nil,
      select: [[atom](external_link)()],
      upsert_fields:
        nil
        | [[atom](external_link)()]
        | :replace_all
        | {:replace, [[atom](external_link)()]}
        | {:replace_all_except, [[atom](external_link)()]},
      tenant: [term](external_link)()
    }

__ Link to this type

# bulk_update_options()

[ __ View Source ](external_link)
    
    
    @type bulk_update_options() :: %{
      return_records?: [boolean](external_link)(),
      calculations: [{[Ash.Query.Calculation.t](external_link)(), [Ash.Expr.t](external_link)()}],
      select: [[atom](external_link)()],
      tenant: [term](external_link)()
    }

__ Link to this type

# data_layer_query()

[ __ View Source ](external_link)
    
    
    @type data_layer_query() :: [struct](external_link)()

__ Link to this type

# feature()

[ __ View Source ](external_link)
    
    
    @type feature() ::
      :transact
      | :multitenancy
      | {:atomic, :update}
      | {:atomic, :upsert}
      | {:lateral_join, [[Ash.Resource.t](external_link)()]}
      | {:join, [Ash.Resource.t](external_link)()}
      | {:aggregate, [Ash.Query.Aggregate.kind](external_link)()}
      | {:aggregate_relationship, [Ash.Resource.Relationships.relationship](external_link)()}
      | {:query_aggregate, [Ash.Query.Aggregate.kind](external_link)()}
      | :select
      | :expr_error
      | :expression_calculation_sort
      | :aggregate_filter
      | :aggregate_sort
      | :boolean_filter
      | :async_engine
      | :bulk_create
      | :update_query
      | :destroy_query
      | :create
      | :read
      | :update
      | :destroy
      | :limit
      | :offset
      | :transact
      | :filter
      | :composite_type
      | {:lock, lock_type()}
      | {:filter_expr, [struct](external_link)()}
      | {:filter_relationship, [Ash.Resource.Relationships.relationship](external_link)()}
      | :sort
      | {:sort, [Ash.Type.t](external_link)()}
      | :upsert
      | :composite_primary_key

__ Link to this type

# lateral_join_link()

[ __ View Source ](external_link)
    
    
    @type lateral_join_link() ::
      {[Ash.Resource.t](external_link)(), [atom](external_link)(), [atom](external_link)(), [Ash.Resource.Relationships.relationship](external_link)()}

__ Link to this type

# lock_type()

[ __ View Source ](external_link)
    
    
    @type lock_type() :: :for_update | [term](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

__ Link to this type

# transaction_reason()

[ __ View Source ](external_link)
    
    
    @type transaction_reason() ::
      %{
        :type => :create,
        :metadata => %{resource: [Ash.Resource.t](external_link)(), action: [atom](external_link)()},
        optional(:data_layer_context) => %{}
      }
      | %{
          :type => :update,
          :metadata => %{
            resource: [Ash.Resource.t](external_link)(),
            action: [atom](external_link)(),
            record: [Ash.Resource.record](external_link)(),
            actor: [term](external_link)()
          },
          optional(:data_layer_context) => %{}
        }
      | %{
          :type => :destroy,
          :metadata => %{
            resource: [Ash.Resource.t](external_link)(),
            action: [atom](external_link)(),
            record: [Ash.Resource.record](external_link)(),
            actor: [term](external_link)()
          },
          optional(:data_layer_context) => %{}
        }
      | %{
          :type => :read,
          :metadata => %{
            resource: [Ash.Resource.t](external_link)(),
            query: [Ash.Query.t](external_link)(),
            actor: [term](external_link)()
          },
          optional(:data_layer_context) => %{}
        }
      | %{
          :type => :flow_transaction,
          :metadata => %{
            resource: [Ash.Resource.t](external_link)(),
            input: [Ash.ActionInput.t](external_link)(),
            action: [atom](external_link)(),
            actor: [term](external_link)()
          },
          optional(:data_layer_context) => %{}
        }
      | %{
          :type => :generic,
          :metadata => %{
            step_name: [atom](external_link)() | [[term](external_link)()],
            flow: [module](external_link)(),
            actor: [term](external_link)()
          },
          optional(:data_layer_context) => %{}
        }
      | %{type: :custom, metadata: [map](external_link)()}
      | %{type: [atom](external_link)(), metadata: [map](external_link)()}

#  __ Callbacks

__ Link to this callback

# add_aggregate(data_layer_query, t, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback add_aggregate(
      data_layer_query(),
      [Ash.Query.Aggregate.t](external_link)(),
      [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# add_aggregates(data_layer_query, list, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback add_aggregates(
      data_layer_query(),
      [[Ash.Query.Aggregate.t](external_link)()],
      [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# add_calculation(data_layer_query, t, expression, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback add_calculation(
      data_layer_query(),
      [Ash.Query.Calculation.t](external_link)(),
      expression :: [any](external_link)(),
      [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# add_calculations(data_layer_query, list, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback add_calculations(
      data_layer_query(),
      [{[Ash.Query.Calculation.t](external_link)(), expression :: [any](external_link)()}],
      [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# bulk_create(t, t, options)

[ __ View Source ](external_link) (optional)
    
    
    @callback bulk_create(
      [Ash.Resource.t](external_link)(),
      [Enumerable.t](external_link)([Ash.Changeset.t](external_link)()),
      options :: bulk_create_options()
    ) ::
      :ok
      | {:ok, [Enumerable.t](external_link)([Ash.Resource.record](external_link)())}
      | {:error, [Ash.Error.t](external_link)()}
      | {:error, :no_rollback, [Ash.Error.t](external_link)()}

__ Link to this callback

# calculate(t, list, context)

[ __ View Source ](external_link) (optional)
    
    
    @callback calculate([Ash.Resource.t](external_link)(), [[Ash.Expr.t](external_link)()], context :: [map](external_link)()) ::
      {:ok, [term](external_link)()} | {:error, [term](external_link)()}

__ Link to this callback

# can?(arg1, feature)

[ __ View Source ](external_link)
    
    
    @callback can?([Ash.Resource.t](external_link)() | [Spark.Dsl.t](external_link)(), feature()) :: [boolean](external_link)()

__ Link to this callback

# create(t, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback create([Ash.Resource.t](external_link)(), [Ash.Changeset.t](external_link)()) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

__ Link to this callback

# destroy(t, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback destroy([Ash.Resource.t](external_link)(), [Ash.Changeset.t](external_link)()) :: :ok | {:error, [term](external_link)()}

__ Link to this callback

# destroy_query(data_layer_query, t, t, opts)

[ __ View Source ](external_link) (optional)
    
    
    @callback destroy_query(
      data_layer_query(),
      [Ash.Changeset.t](external_link)(),
      [Ash.Resource.t](external_link)(),
      opts :: bulk_update_options()
    ) ::
      :ok
      | {:ok, [Enumerable.t](external_link)([Ash.Resource.record](external_link)())}
      | {:error, [Ash.Error.t](external_link)()}
      | {:error, :no_rollback, [Ash.Error.t](external_link)()}

__ Link to this callback

# distinct(data_layer_query, list, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback distinct(data_layer_query(), [[atom](external_link)()], resource :: [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# distinct_sort(data_layer_query, t, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback distinct_sort(data_layer_query(), [Ash.Sort.t](external_link)(), resource :: [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# filter(data_layer_query, t, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback filter(data_layer_query(), [Ash.Filter.t](external_link)(), resource :: [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# functions(t)

[ __ View Source ](external_link) (optional)
    
    
    @callback functions([Ash.Resource.t](external_link)()) :: [[module](external_link)()]

__ Link to this callback

# in_transaction?(t)

[ __ View Source ](external_link) (optional)
    
    
    @callback in_transaction?([Ash.Resource.t](external_link)()) :: [boolean](external_link)()

__ Link to this callback

# limit(data_layer_query, limit, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback limit(
      data_layer_query(),
      limit :: [non_neg_integer](external_link)(),
      resource :: [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# lock(data_layer_query, lock_type, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback lock(data_layer_query(), lock_type(), resource :: [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# offset(data_layer_query, offset, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback offset(
      data_layer_query(),
      offset :: [non_neg_integer](external_link)(),
      resource :: [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# prefer_lateral_join_for_many_to_many?()

[ __ View Source ](external_link) (optional)
    
    
    @callback prefer_lateral_join_for_many_to_many?() :: [boolean](external_link)()

__ Link to this callback

# resource_to_query(t, t)

[ __ View Source ](external_link)
    
    
    @callback resource_to_query([Ash.Resource.t](external_link)(), [Ash.Domain.t](external_link)()) :: data_layer_query()

__ Link to this callback

# return_query(data_layer_query, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback return_query(data_layer_query(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# rollback(t, term)

[ __ View Source ](external_link) (optional)
    
    
    @callback rollback([Ash.Resource.t](external_link)(), [term](external_link)()) :: [no_return](external_link)()

__ Link to this callback

# run_aggregate_query(data_layer_query, list, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback run_aggregate_query(
      data_layer_query(),
      [[Ash.Query.Aggregate.t](external_link)()],
      [Ash.Resource.t](external_link)()
    ) :: {:ok, [map](external_link)()} | {:error, [term](external_link)()}

__ Link to this callback

# run_aggregate_query_with_lateral_join(data_layer_query, list, list, destination_resource, list)

[ __ View Source ](external_link) (optional)
    
    
    @callback run_aggregate_query_with_lateral_join(
      data_layer_query(),
      [[Ash.Query.Aggregate.t](external_link)()],
      [[Ash.Resource.record](external_link)()],
      destination_resource :: [Ash.Resource.t](external_link)(),
      [lateral_join_link()]
    ) :: {:ok, [[Ash.Resource.t](external_link)()]} | {:error, [term](external_link)()}

__ Link to this callback

# run_query(data_layer_query, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback run_query(data_layer_query(), [Ash.Resource.t](external_link)()) ::
      {:ok, [[Ash.Resource.record](external_link)()]}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

__ Link to this callback

# run_query_with_lateral_join(data_layer_query, list, source_resource, list)

[ __ View Source ](external_link) (optional)
    
    
    @callback run_query_with_lateral_join(
      data_layer_query(),
      [[Ash.Resource.record](external_link)()],
      source_resource :: [Ash.Resource.t](external_link)(),
      [lateral_join_link()]
    ) :: {:ok, [[Ash.Resource.record](external_link)()]} | {:error, [term](external_link)()}

__ Link to this callback

# select(data_layer_query, select, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback select(
      data_layer_query(),
      select :: [[atom](external_link)()],
      resource :: [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# set_context(t, data_layer_query, map)

[ __ View Source ](external_link) (optional)
    
    
    @callback set_context([Ash.Resource.t](external_link)(), data_layer_query(), [map](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# set_tenant(t, data_layer_query, term)

[ __ View Source ](external_link) (optional)
    
    
    @callback set_tenant([Ash.Resource.t](external_link)(), data_layer_query(), [term](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# sort(data_layer_query, t, resource)

[ __ View Source ](external_link) (optional)
    
    
    @callback sort(data_layer_query(), [Ash.Sort.t](external_link)(), resource :: [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this callback

# source(t)

[ __ View Source ](external_link) (optional)
    
    
    @callback source([Ash.Resource.t](external_link)()) :: [String.t](external_link)()

__ Link to this callback

# transaction(t, function, arg3, reason)

[ __ View Source ](external_link) (optional)
    
    
    @callback transaction(
      [Ash.Resource.t](external_link)(),
      (-> [term](external_link)()),
      nil | [pos_integer](external_link)(),
      reason :: transaction_reason()
    ) :: {:ok, [term](external_link)()} | {:error, [term](external_link)()}

__ Link to this callback

# transform_query(t)

[ __ View Source ](external_link) (optional)
    
    
    @callback transform_query([Ash.Query.t](external_link)()) :: [Ash.Query.t](external_link)()

__ Link to this callback

# update(t, t)

[ __ View Source ](external_link) (optional)
    
    
    @callback update([Ash.Resource.t](external_link)(), [Ash.Changeset.t](external_link)()) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

__ Link to this callback

# update_query(data_layer_query, t, t, opts)

[ __ View Source ](external_link) (optional)
    
    
    @callback update_query(
      data_layer_query(),
      [Ash.Changeset.t](external_link)(),
      [Ash.Resource.t](external_link)(),
      opts :: bulk_update_options()
    ) ::
      :ok
      | {:ok, [Enumerable.t](external_link)([Ash.Resource.record](external_link)())}
      | {:error, [Ash.Error.t](external_link)()}
      | {:error, :no_rollback, [Ash.Error.t](external_link)()}

__ Link to this callback

# upsert(t, t, list)

[ __ View Source ](external_link) (optional)
    
    
    @callback upsert([Ash.Resource.t](external_link)(), [Ash.Changeset.t](external_link)(), [[atom](external_link)()]) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

__ Link to this callback

# upsert(t, t, list, arg4)

[ __ View Source ](external_link) (optional)
    
    
    @callback upsert(
      [Ash.Resource.t](external_link)(),
      [Ash.Changeset.t](external_link)(),
      [[atom](external_link)()],
      [Ash.Resource.Identity.t](external_link)() | nil
    ) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

#  __ Functions

__ Link to this function

# add_aggregates(query, aggregates, resource)

[ __ View Source ](external_link)
    
    
    @spec add_aggregates(data_layer_query(), [[Ash.Query.Aggregate.t](external_link)()], [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# add_calculations(query, calculations, resource)

[ __ View Source ](external_link)
    
    
    @spec add_calculations(
      data_layer_query(),
      [{[Ash.Query.Calculation.t](external_link)(), expression :: [term](external_link)()}],
      [Ash.Resource.t](external_link)()
    ) :: {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# bulk_create(resource, changesets, options)

[ __ View Source ](external_link)
    
    
    @spec bulk_create(
      [Ash.Resource.t](external_link)(),
      [Enumerable.t](external_link)([Ash.Changeset.t](external_link)()),
      options :: bulk_create_options()
    ) ::
      :ok
      | {:ok, [Enumerable.t](external_link)([Ash.Resource.record](external_link)())}
      | {:error, [Ash.Error.t](external_link)()}
      | {:error, :no_rollback, [Ash.Error.t](external_link)()}

__ Link to this function

# calculate(resource, exprs, context)

[ __ View Source ](external_link)
    
    
    @spec calculate([Ash.Resource.t](external_link)(), [[Ash.Expr.t](external_link)()], context :: [map](external_link)()) ::
      {:ok, [[term](external_link)()]} | {:error, [Ash.Error.t](external_link)()}

__ Link to this function

# can?(feature, resource)

[ __ View Source ](external_link)
    
    
    @spec can?(feature(), [Ash.Resource.t](external_link)() | [Spark.Dsl.t](external_link)()) :: [boolean](external_link)()

__ Link to this function

# create(resource, changeset)

[ __ View Source ](external_link)
    
    
    @spec create([Ash.Resource.t](external_link)(), [Ash.Changeset.t](external_link)()) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

__ Link to this function

# data_layer(resource)

[ __ View Source ](external_link)
    
    
    @spec data_layer([Ash.Resource.t](external_link)() | [Spark.Dsl.t](external_link)()) :: t() | nil

The data layer of the resource, or nil if it does not have one

__ Link to this function

# data_layer_can?(resource, feature)

[ __ View Source ](external_link)
    
    
    @spec data_layer_can?([Ash.Resource.t](external_link)() | [Spark.Dsl.t](external_link)(), feature()) :: [boolean](external_link)()

Whether or not the data layer supports a specific feature

__ Link to this function

# data_layer_functions(resource)

[ __ View Source ](external_link)
    
    
    @spec data_layer_functions([Ash.Resource.t](external_link)()) :: [map](external_link)()

Custom functions supported by the data layer of the resource

__ Link to this function

# destroy(resource, changeset)

[ __ View Source ](external_link)
    
    
    @spec destroy([Ash.Resource.t](external_link)(), [Ash.Changeset.t](external_link)()) ::
      :ok | {:error, [term](external_link)()} | {:error, :no_rollback, [term](external_link)()}

__ Link to this function

# destroy_query(query, changeset, opts)

[ __ View Source ](external_link)
    
    
    @spec destroy_query(
      data_layer_query(),
      [Ash.Changeset.t](external_link)(),
      opts :: bulk_update_options()
    ) ::
      :ok
      | {:ok, [Enumerable.t](external_link)([Ash.Resource.record](external_link)())}
      | {:error, [Ash.Error.t](external_link)()}
      | {:error, :no_rollback, [Ash.Error.t](external_link)()}

__ Link to this function

# distinct(query, distinct, resource)

[ __ View Source ](external_link)
    
    
    @spec distinct(data_layer_query(), [Ash.Sort.t](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# distinct_sort(query, sort, resource)

[ __ View Source ](external_link)
    
    
    @spec distinct_sort(data_layer_query(), [Ash.Sort.t](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# filter(query, filter, resource)

[ __ View Source ](external_link)
    
    
    @spec filter(data_layer_query(), [Ash.Filter.t](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# functions(resource)

[ __ View Source ](external_link)

__ Link to this function

# in_transaction?(resource)

[ __ View Source ](external_link)

__ Link to this function

# limit(query, limit, resource)

[ __ View Source ](external_link)
    
    
    @spec limit(data_layer_query(), limit :: [non_neg_integer](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# lock(query, lock_type, resource)

[ __ View Source ](external_link)
    
    
    @spec lock(
      data_layer_query(),
      lock_type :: lock_type() | nil,
      resource :: [Ash.Resource.t](external_link)()
    ) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# offset(query, offset, resource)

[ __ View Source ](external_link)
    
    
    @spec offset(data_layer_query(), offset :: [non_neg_integer](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# prefer_lateral_join_for_many_to_many?(data_layer)

[ __ View Source ](external_link)
    
    
    @spec prefer_lateral_join_for_many_to_many?(t()) :: [boolean](external_link)()

Whether or not lateral joins should be used for many to many relationships by default

__ Link to this function

# resource_to_query(resource, domain)

[ __ View Source ](external_link)
    
    
    @spec resource_to_query([Ash.Resource.t](external_link)(), [Ash.Domain.t](external_link)()) :: data_layer_query()

__ Link to this function

# return_query(query, resource)

[ __ View Source ](external_link)
    
    
    @spec return_query(data_layer_query(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# rollback(resource, term)

[ __ View Source ](external_link)
    
    
    @spec rollback([Ash.Resource.t](external_link)() | [[Ash.Resource.t](external_link)()], [term](external_link)()) :: [no_return](external_link)()

Rolls back the current transaction

__ Link to this function

# run_aggregate_query(query, aggregates, resource)

[ __ View Source ](external_link)
    
    
    @spec run_aggregate_query(
      data_layer_query(),
      [[Ash.Query.Aggregate.t](external_link)()],
      [Ash.Resource.t](external_link)()
    ) :: {:ok, [map](external_link)()} | {:error, [term](external_link)()}

__ Link to this function

# run_aggregate_query_with_lateral_join(query, aggregates, root_data, destination_resource, path)

[ __ View Source ](external_link)

__ Link to this function

# run_query(query, central_resource)

[ __ View Source ](external_link)
    
    
    @spec run_query(data_layer_query(), central_resource :: [Ash.Resource.t](external_link)()) ::
      {:ok, [[Ash.Resource.record](external_link)()]}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

__ Link to this function

# run_query_with_lateral_join(query, root_data, destination_resource, path)

[ __ View Source ](external_link)

__ Link to this function

# select(query, select, resource)

[ __ View Source ](external_link)
    
    
    @spec select(data_layer_query(), select :: [[atom](external_link)()], [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# set_context(resource, query, map)

[ __ View Source ](external_link)
    
    
    @spec set_context([Ash.Resource.t](external_link)(), data_layer_query(), [map](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# set_tenant(resource, query, term)

[ __ View Source ](external_link)
    
    
    @spec set_tenant([Ash.Resource.t](external_link)(), data_layer_query(), [String.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# sort(query, sort, resource)

[ __ View Source ](external_link)
    
    
    @spec sort(data_layer_query(), [Ash.Sort.t](external_link)(), [Ash.Resource.t](external_link)()) ::
      {:ok, data_layer_query()} | {:error, [term](external_link)()}

__ Link to this function

# source(resource)

[ __ View Source ](external_link)
    
    
    @spec source([Ash.Resource.t](external_link)()) :: [String.t](external_link)()

__ Link to this function

# transaction(resource_or_resources, func, timeout \\\ nil, reason \\\ %{type: :custom, metadata: %{}})

[ __ View Source ](external_link)
    
    
    @spec transaction(
      [Ash.Resource.t](external_link)() | [[Ash.Resource.t](external_link)()],
      (-> [term](external_link)()),
      nil | [pos_integer](external_link)(),
      reason :: transaction_reason()
    ) :: [term](external_link)()

Wraps the execution of the function in a transaction with the resource's data_layer

__ Link to this function

# transform_query(query)

[ __ View Source ](external_link)

__ Link to this function

# update(resource, changeset)

[ __ View Source ](external_link)
    
    
    @spec update([Ash.Resource.t](external_link)(), [Ash.Changeset.t](external_link)()) ::
      {:ok, [Ash.Resource.record](external_link)()}
      | {:error, [term](external_link)()}
      | {:error, :no_rollback, [term](external_link)()}

__ Link to this function

# update_query(query, changeset, opts)

[ __ View Source ](external_link)
    
    
    @spec update_query(
      data_layer_query(),
      [Ash.Changeset.t](external_link)(),
      opts :: bulk_update_options()
    ) ::
      :ok
      | {:ok, [Enumerable.t](external_link)([Ash.Resource.record](external_link)())}
      | {:error, [Ash.Error.t](external_link)()}
      | {:error, :no_rollback, [Ash.Error.t](external_link)()}

__ Link to this function

# upsert(resource, changeset, keys, identity \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec upsert(
      [Ash.Resource.t](external_link)(),
      [Ash.Changeset.t](external_link)(),
      [[atom](external_link)()],
      identity :: [Ash.Resource.Identity.t](external_link)() | nil
    ) :: {:ok, [Ash.Resource.record](external_link)()} | {:error, [term](external_link)()}
