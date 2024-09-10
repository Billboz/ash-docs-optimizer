# Ash.Query — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- around_action_fun()
- around_callback()
- around_result()
- around_transaction_fun()
- t()
- __ Functions
- accessing(query, types \\\ [:attributes, :relationships, :calculations, :aggregates], only_public? \\\ true)
- add_error(query, keys \\\ [], message)
- after_action(query, func)
- aggregate(query, name, kind, relationship)
- aggregate(query, name, kind, relationship, opts)
- apply_to(query, records, opts \\\ [])
- around_transaction(query, func)
- authorize_results(query, func)
- before_action(query, func, opts \\\ [])
- build(resource, domain \\\ nil, keyword)
  - __ Options
- calculate(query, name, type, module_and_opts, arguments \\\ %{}, constraints \\\ [], extra_context \\\ %{}, new_calculation_opts \\\ [])
- clear_result(query)
- data_layer_query(ash_query, opts \\\ [])
- delete_argument(query, argument_or_arguments)
- deselect(query, fields)
- distinct(query, distincts)
- distinct_sort(query, sorts, opts \\\ [])
- ensure_selected(query, fields)
- equivalent_to(query, expr)
- equivalent_to?(query, expr)
- fetch_argument(query, argument)
- filter(query, filter)
- filter_input(query, filter)
- for_read(query, action_name, args \\\ %{}, opts \\\ [])
    - __ Arguments
    - __ Opts
- get_argument(query, argument)
- limit(query, limit)
- load(query, load_statement, opts \\\ [])
- load_calculation_as(query, calc_name, as_name, opts_or_args \\\ %{}, opts \\\ [])
- load_through(query, type, name, load)
- loading?(query, item)
- lock(query, lock_type)
- merge_query_load(left, right, context)
- new(resource, opts \\\ [])
- offset(query, offset)
- page(query, page_opts)
    - __ Limit/offset pagination
    - __ Keyset pagination
- put_context(query, key, value)
- select(query, fields, opts \\\ [])
- selecting?(query, field)
- set_argument(query, argument, value)
- set_arguments(query, map)
- set_context(query, map)
- set_domain(query, domain)
- set_result(query, result)
- set_tenant(query, tenant)
- sort(query, sorts, opts \\\ [])
  - __ Options
- sort_input(query, sorts, opts \\\ [])
- struct?(arg1)
- subset_of(query, expr)
- subset_of?(query, expr)
- superset_of(query, expr)
- superset_of?(query, expr)
- timeout(query, timeout)
- unload(query, fields)
- unset(query, keys)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query (ash v3.4.8)

A data structure for reading data from a resource.

Ash queries are used for read actions and loads, and ultimately map to queries to a resource's data layer.

Queries are run by calling `Ash.read`.

Examples:
    
    
    MyApp.Post
    |> Ash.Query.filter(likes > 10)
    |> Ash.Query.sort([:title])
    |> Ash.read!()
    
    MyApp.Author
    |> Ash.Query.aggregate(:published_post_count, :posts, query: [filter: [published: true]])
    |> Ash.Query.sort(published_post_count: :desc)
    |> Ash.Query.limit(10)
    |> Ash.read!()
    
    MyApp.Author
    |> Ash.Query.load([:post_count, :comment_count])
    |> Ash.Query.load(posts: [:comments])
    |> Ash.read!()

#  __ Summary

##  Types

around_action_fun()

around_callback()

around_result()

around_transaction_fun()

t()

##  Functions

accessing(query, types \\\ [:attributes, :relationships, :calculations, :aggregates], only_public? \\\ true)

Returns a list of attributes, aggregates, relationships, and calculations that are being loaded

add_error(query, keys \\\ [], message)

after_action(query, func)

aggregate(query, name, kind, relationship)

Adds an aggregation to the query.

aggregate(query, name, kind, relationship, opts)

apply_to(query, records, opts \\\ [])

around_transaction(query, func)

Adds an around_transaction hook to the query.

authorize_results(query, func)

before_action(query, func, opts \\\ [])

Adds a before_action hook to the query.

build(resource, domain \\\ nil, keyword)

Builds a query from a keyword list.

calculate(query, name, type, module_and_opts, arguments \\\ %{}, constraints \\\ [], extra_context \\\ %{}, new_calculation_opts \\\ [])

Adds a calculation to the query.

clear_result(query)

Removes a result set previously with `set_result/2`

data_layer_query(ash_query, opts \\\ [])

Return the underlying data layer query for an ash query

delete_argument(query, argument_or_arguments)

Remove an argument from the query

deselect(query, fields)

Ensure the the specified attributes are `nil` in the query results.

distinct(query, distincts)

Get results distinct on the provided fields.

distinct_sort(query, sorts, opts \\\ [])

Set a sort to determine how distinct records are selected.

ensure_selected(query, fields)

Ensures that the given attributes are selected.

equivalent_to(query, expr)

Determines if the filter statement of a query is equivalent to the provided expression.

equivalent_to?(query, expr)

Same as `equivalent_to/2` but always returns a boolean. `:maybe` returns `false`.

fetch_argument(query, argument)

fetches the value of an argument provided to the query or `:error`

filter(query, filter)

Attach a filter statement to the query.

filter_input(query, filter)

Attach a filter statement to the query labelled as user input.

for_read(query, action_name, args \\\ %{}, opts \\\ [])

Creates a query for a given read action and prepares it.

get_argument(query, argument)

Gets the value of an argument provided to the query

limit(query, limit)

Limit the results returned from the query

load(query, load_statement, opts \\\ [])

Loads relationships, calculations, or aggregates on the resource.

load_calculation_as(query, calc_name, as_name, opts_or_args \\\ %{}, opts \\\ [])

Adds a resource calculation to the query as a custom calculation with the provided name.

load_through(query, type, name, load)

Adds a load statement to the result of an attribute or calculation.

loading?(query, item)

Returns true if the field/relationship or path to field/relationship is being loaded.

lock(query, lock_type)

Lock the query results.

merge_query_load(left, right, context)

Merges two query's load statements, for the purpose of handling calculation requirements.

new(resource, opts \\\ [])

Create a new query

offset(query, offset)

Skip the first n records

page(query, page_opts)

Sets the pagination options of the query.

put_context(query, key, value)

Sets a specific context key to a specific value

select(query, fields, opts \\\ [])

Ensure that only the specified _attributes_ are present in the results.

selecting?(query, field)

set_argument(query, argument, value)

Add an argument to the query, which can be used in filter templates on actions

set_arguments(query, map)

Merge a map of arguments to the arguments list

set_context(query, map)

Merge a map of values into the query context

set_domain(query, domain)

Set the query's domain, and any loaded query's domain

set_result(query, result)

Set the result of the action. This will prevent running the underlying datalayer behavior

set_tenant(query, tenant)

sort(query, sorts, opts \\\ [])

Sort the results based on attributes, aggregates or calculations.

sort_input(query, sorts, opts \\\ [])

Attach a sort statement to the query labelled as user input.

struct?(arg1)

subset_of(query, expr)

Determines if the provided expression would return data that is a suprset of the data returned by the filter on the query.

subset_of?(query, expr)

Same as `subset_of/2` but always returns a boolean. `:maybe` returns `false`.

superset_of(query, expr)

Determines if the provided expression would return data that is a subset of the data returned by the filter on the query.

superset_of?(query, expr)

Same as `superset_of/2` but always returns a boolean. `:maybe` returns `false`.

timeout(query, timeout)

unload(query, fields)

Removes a field from the list of fields to load

unset(query, keys)

#  __ Types

__ Link to this type

# around_action_fun()

[ __ View Source ](external_link)
    
    
    @type around_action_fun() :: (t(), around_callback() -> around_result())

__ Link to this type

# around_callback()

[ __ View Source ](external_link)
    
    
    @type around_callback() :: (t() -> around_result())

__ Link to this type

# around_result()

[ __ View Source ](external_link)
    
    
    @type around_result() :: {:ok, [[Ash.Resource.record](external_link)()]} | {:error, [Ash.Error.t](external_link)()}

__ Link to this type

# around_transaction_fun()

[ __ View Source ](external_link)
    
    
    @type around_transaction_fun() :: (t() ->
                                   {:ok, [Ash.Resource.record](external_link)()} | {:error, [any](external_link)()})

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Query{
      __validated_for_action__: [atom](external_link)() | nil,
      action: [Ash.Resource.Actions.Read.t](external_link)() | nil,
      action_failed?: [boolean](external_link)(),
      after_action: [
        (t(), [[Ash.Resource.record](external_link)()] ->
           {:ok, [[Ash.Resource.record](external_link)()]}
           | {:ok, [[Ash.Resource.record](external_link)()], [[Ash.Notifier.Notification.t](external_link)()]}
           | {:error, [any](external_link)()})
      ],
      aggregates: %{optional([atom](external_link)()) => [Ash.Filter.t](external_link)()},
      arguments: %{optional([atom](external_link)()) => [any](external_link)()},
      around_transaction: [term](external_link)(),
      authorize_results: [
        (t(), [[Ash.Resource.record](external_link)()] ->
           {:ok, [[Ash.Resource.record](external_link)()]} | {:error, [any](external_link)()})
      ],
      before_action: [(t() -> t())],
      calculations: %{optional([atom](external_link)()) => :wat},
      context: [map](external_link)(),
      distinct: [[atom](external_link)()],
      distinct_sort: [term](external_link)(),
      domain: [module](external_link)() | nil,
      errors: [[Ash.Error.t](external_link)()],
      filter: [Ash.Filter.t](external_link)() | nil,
      invalid_keys: [term](external_link)(),
      limit: nil | [non_neg_integer](external_link)(),
      load: [keyword](external_link)([keyword](external_link)()),
      load_through: [term](external_link)(),
      lock: [term](external_link)(),
      offset: [non_neg_integer](external_link)(),
      page: [keyword](external_link)() | nil,
      params: %{optional([atom](external_link)() | [binary](external_link)()) => [any](external_link)()},
      phase: :preparing | :before_action | :after_action | :executing,
      resource: [module](external_link)(),
      select: nil | [[atom](external_link)()],
      sort: [[atom](external_link)() | {[atom](external_link)(), :asc | :desc}],
      sort_input_indices: [term](external_link)(),
      tenant: [term](external_link)(),
      timeout: [pos_integer](external_link)() | nil,
      to_tenant: [term](external_link)(),
      valid?: [boolean](external_link)()
    }

#  __ Functions

__ Link to this function

# accessing(query, types \\\ [:attributes, :relationships, :calculations, :aggregates], only_public? \\\ true)

[ __ View Source ](external_link)

Returns a list of attributes, aggregates, relationships, and calculations that are being loaded

Provide a list of field types to narrow down the returned results.

__ Link to this function

# add_error(query, keys \\\ [], message)

[ __ View Source ](external_link)

__ Link to this function

# after_action(query, func)

[ __ View Source ](external_link)
    
    
    @spec after_action(
      t(),
      (t(), [[Ash.Resource.record](external_link)()] ->
         {:ok, [[Ash.Resource.record](external_link)()]}
         | {:ok, [[Ash.Resource.record](external_link)()], [[Ash.Notifier.Notification.t](external_link)()]}
         | {:error, [term](external_link)()})
    ) :: t()

__ Link to this function

# aggregate(query, name, kind, relationship)

[ __ View Source ](external_link)

Adds an aggregation to the query.

Aggregations are made available on the `aggregates` field of the records returned

The filter option accepts either a filter or a keyword list of options to supply to build a limiting query for that aggregate. See the DSL docs for each aggregate type in the [Resource DSL docs](external_link) for more information.

Options:

  * query: The query over the destination resource to use as a base for aggregation
  * default: The default value to use if the aggregate returns nil
  * filterable?: Whether or not this aggregate may be referenced in filters
  * type: The type of the aggregate
  * constraints: Type constraints for the aggregate's type
  * implementation: An implementation used when the aggregate kind is custom
  * read_action: The read action to use on the destination resource
  * authorize?: Whether or not to authorize access to this aggregate
  * join_filters: A map of relationship paths to filter expressions. See the aggregates guide for more.



__ Link to this function

# aggregate(query, name, kind, relationship, opts)

[ __ View Source ](external_link)

__ Link to this function

# apply_to(query, records, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec apply_to(t(), records :: [[Ash.Resource.record](external_link)()], opts :: [Keyword.t](external_link)()) ::
      {:ok, [[Ash.Resource.record](external_link)()]}

__ Link to this function

# around_transaction(query, func)

[ __ View Source ](external_link)
    
    
    @spec around_transaction(t(), around_transaction_fun()) :: t()

Adds an around_transaction hook to the query.

Your function will get the query, and a callback that must be called with a query (that may be modified). The callback will return `{:ok, results}` or `{:error, error}`. You can modify these values, but the return value must be one of those types.

The around_transaction calls happen first, and then (after they each resolve their callbacks) the `before_action` hooks are called, followed by the `after_action` hooks being run. Then, the code that appeared _after_ the callbacks were called is then run.

Warning: using this without understanding how it works can cause big problems. You _must_ call the callback function that is provided to your hook, and the return value must contain the same structure that was given to you, i.e `{:ok, result_of_action}`.

__ Link to this function

# authorize_results(query, func)

[ __ View Source ](external_link)
    
    
    @spec authorize_results(
      t(),
      (t(), [[Ash.Resource.record](external_link)()] ->
         {:ok, [[Ash.Resource.record](external_link)()]}
         | {:ok, [[Ash.Resource.record](external_link)()], [[Ash.Notifier.Notification.t](external_link)()]}
         | {:error, [term](external_link)()})
    ) :: t()

__ Link to this function

# before_action(query, func, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec before_action(
      query :: t(),
      fun :: (t() -> t() | {t(), [[Ash.Notifier.Notification.t](external_link)()]}),
      opts :: [Keyword.t](external_link)()
    ) :: t()

Adds a before_action hook to the query.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

__ Link to this function

# build(resource, domain \\\ nil, keyword)

[ __ View Source ](external_link)
    
    
    @spec build([Ash.Resource.t](external_link)() | t(), [Ash.Domain.t](external_link)() | nil, [Keyword.t](external_link)()) :: t()

Builds a query from a keyword list.

This is used by certain query constructs like aggregates. It can also be used to manipulate a data structure before passing it to an ash query. It allows for building an entire query struct using only a keyword list.

For example:
    
    
    Ash.Query.build(MyResource, filter: [name: "fred"], sort: [name: :asc], load: [:foo, :bar], offset: 10)

If you want to use the expression style filters, you can use `expr/1`.

For example:
    
    
    import Ash.Expr, only: [expr: 1]
    
    Ash.Query.build(Myresource, filter: expr(name == "marge"))

##  __ Options

  * `:filter` ([`term/0`](external_link)) - A filter keyword, map or expression

  * `:filter_input` ([`term/0`](external_link)) - A filter keyword or map, provided as input from an external source

  * `:sort` ([`term/0`](external_link)) - A sort list or keyword

  * `:sort_input` ([`term/0`](external_link)) - A sort list or keyword, provided as input from an external source

  * `:distinct_sort` ([`term/0`](external_link)) - A distinct_sort list or keyword

  * `:limit` ([`integer/0`](external_link)) - A limit to apply

  * `:offset` ([`integer/0`](external_link)) - An offset to apply

  * `:load` ([`term/0`](external_link)) - A load statement to add to the query

  * `:select` ([`term/0`](external_link)) - A select statement to add to the query

  * `:ensure_selected` ([`term/0`](external_link)) - An ensure_selected statement to add to the query

  * `:aggregate` ([`term/0`](external_link)) - A custom aggregate to add to the query. Can be `{name, type, relationship}` or `{name, type, relationship, build_opts}`

  * `:calculate` ([`term/0`](external_link)) - A custom calculation to add to the query. Can be `{name, module_and_opts}` or `{name, module_and_opts, context}`

  * `:distinct` (list of [`atom/0`](external_link)) - A distinct clause to add to the query

  * `:context` ([`map/0`](external_link)) - A map to merge into the query context




__ Link to this function

# calculate(query, name, type, module_and_opts, arguments \\\ %{}, constraints \\\ [], extra_context \\\ %{}, new_calculation_opts \\\ [])

[ __ View Source ](external_link)

Adds a calculation to the query.

Calculations are made available on the `calculations` field of the records returned

The `module_and_opts` argument accepts either a `module` or a `{module, opts}`. For more information on what that module should look like, see [`Ash.Resource.Calculation`](external_link).

__ Link to this function

# clear_result(query)

[ __ View Source ](external_link)
    
    
    @spec clear_result(t()) :: t()

Removes a result set previously with `set_result/2`

__ Link to this function

# data_layer_query(ash_query, opts \\\ [])

[ __ View Source ](external_link)

Return the underlying data layer query for an ash query

__ Link to this function

# delete_argument(query, argument_or_arguments)

[ __ View Source ](external_link)

Remove an argument from the query

__ Link to this function

# deselect(query, fields)

[ __ View Source ](external_link)

Ensure the the specified attributes are `nil` in the query results.

__ Link to this function

# distinct(query, distincts)

[ __ View Source ](external_link)
    
    
    @spec distinct(t() | [Ash.Resource.t](external_link)(), [Ash.Sort.t](external_link)()) :: t()

Get results distinct on the provided fields.

Takes a list of fields to distinct on. Each call is additive, so to remove the `distinct` use `unset/2`.

Examples:
    
    
    Ash.Query.distinct(query, [:first_name, :last_name])
    
    Ash.Query.distinct(query, :email)

__ Link to this function

# distinct_sort(query, sorts, opts \\\ [])

[ __ View Source ](external_link)

Set a sort to determine how distinct records are selected.

If none is set, any sort applied to the query will be used.

This is useful if you want to control how the `distinct` records are selected without affecting (necessarily, it may affect it if there is no sort applied) the overall sort of the query

__ Link to this function

# ensure_selected(query, fields)

[ __ View Source ](external_link)

Ensures that the given attributes are selected.

The first call to `select/2` will _limit_ the fields to only the provided fields. Use `ensure_selected/2` to say "select this field (or these fields) without deselecting anything else".

See `select/2` for more.

__ Link to this macro

# equivalent_to(query, expr)

[ __ View Source ](external_link) (macro)

Determines if the filter statement of a query is equivalent to the provided expression.

This uses the satisfiability solver that is used when solving for policy authorizations. In complex scenarios, or when using custom database expressions, (like fragments in ash_postgres), this function may return `:maybe`. Use `supserset_of?` to always return a boolean.

__ Link to this macro

# equivalent_to?(query, expr)

[ __ View Source ](external_link) (macro)

Same as `equivalent_to/2` but always returns a boolean. `:maybe` returns `false`.

__ Link to this function

# fetch_argument(query, argument)

[ __ View Source ](external_link)
    
    
    @spec fetch_argument(t(), [atom](external_link)()) :: {:ok, [term](external_link)()} | :error

fetches the value of an argument provided to the query or `:error`

__ Link to this macro

# filter(query, filter)

[ __ View Source ](external_link) (macro)

Attach a filter statement to the query.

The filter is applied as an "and" to any filters currently on the query. For more information on writing filters, see: [`Ash.Filter`](external_link).

__ Link to this function

# filter_input(query, filter)

[ __ View Source ](external_link)

Attach a filter statement to the query labelled as user input.

Filters added as user input (or filters constructed with `Ash.Filter.parse_input`) will honor any field policies on resources by replacing any references to the field with `nil` in cases where the actor should not be able to see the given field.

This function does not expect the expression style filter (because an external source could never reasonably provide that). Instead, use the keyword/map style syntax. For example:

`expr(name == "fred")`

could be any of

  * map syntax: `%{"name" => %{"eq" => "fred"}}`
  * keyword syntax: `[name: [eq: "fred"]]`



See [`Ash.Filter`](external_link) for more.

__ Link to this function

# for_read(query, action_name, args \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)

Creates a query for a given read action and prepares it.

Multitenancy is _not_ validated until an action is called. This allows you to avoid specifying a tenant until just before calling the domain action.

###  __ Arguments

Provide a map or keyword list of arguments for the read action

###  __ Opts

  * `:actor` ([`term/0`](external_link)) - set the actor, which can be used in any [`Ash.Resource.Change`](external_link)s configured on the action. (in the `context` argument)

  * `:authorize?` ([`boolean/0`](external_link)) - set authorize?, which can be used in any [`Ash.Resource.Change`](external_link)s configured on the action. (in the `context` argument)

  * `:tracer` (one or a list of module that adopts [`Ash.Tracer`](external_link)) - A tracer to use. Will be carried over to the action. For more information see [`Ash.Tracer`](external_link).

  * `:tenant` (value that implements the [`Ash.ToTenant`](external_link) protocol) - set the tenant on the query

  * `:skip_unknown_inputs` \- A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.




__ Link to this function

# get_argument(query, argument)

[ __ View Source ](external_link)
    
    
    @spec get_argument(t(), [atom](external_link)()) :: [term](external_link)()

Gets the value of an argument provided to the query

__ Link to this function

# limit(query, limit)

[ __ View Source ](external_link)
    
    
    @spec limit(t() | [Ash.Resource.t](external_link)(), nil | [integer](external_link)()) :: t()

Limit the results returned from the query

__ Link to this function

# load(query, load_statement, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec load(
      t() | [Ash.Resource.t](external_link)(),
      [atom](external_link)()
      | [Ash.Query.Calculation.t](external_link)()
      | [Ash.Query.Aggregate.t](external_link)()
      | [[atom](external_link)() | [Ash.Query.Calculation.t](external_link)() | [Ash.Query.Aggregate.t](external_link)()]
      | [{[atom](external_link)() | [Ash.Query.Calculation.t](external_link)() | [Ash.Query.Aggregate.t](external_link)(), [term](external_link)()}],
      [Keyword.t](external_link)()
    ) :: t()

Loads relationships, calculations, or aggregates on the resource.

By default, loading attributes has no effects, as all attributes are returned.
    
    
    # Loading nested relationships
    Ash.Query.load(query, [comments: [:author, :ratings]])
    
    # Loading relationships with a query
    Ash.Query.load(query, [comments: [author: author_query]])

By passing the `strict?: true` option, only specified attributes will be loaded when passing a list of fields to fetch on a relationship, which allows for more optimized data-fetching.

The select statement of any queries inside the load statement will not be affected.

Example:
    
    
    Ash.load(category, [:name, posts: [:title, :published_at]], strict?: true)

Here, the only fields that will be loaded on the `posts` relationship are `title` and `published_at`, in addition to any other fields that are required to be loaded, like the primary and relevant foreign keys. This entails that when using `strict?: true` and loading nested relationships, you will also always have to specify all the attributes you want to load alongside the nested relationships.

Example:
    
    
    Ash.load(post, [:title, :published_at, :other_needed_attribute, category: [:name]], strict?: true)

If no fields are specified on a relationship when using `strict?: true`, all attributes will be loaded by default.

Example:
    
    
    Ash.load(category, [:name, :posts], strict?: true)

__ Link to this function

# load_calculation_as(query, calc_name, as_name, opts_or_args \\\ %{}, opts \\\ [])

[ __ View Source ](external_link)

Adds a resource calculation to the query as a custom calculation with the provided name.

Example:
    
    
    Ash.Query.load_calculation_as(query, :calculation, :some_name, args: %{}, load_through: [:foo])

__ Link to this function

# load_through(query, type, name, load)

[ __ View Source ](external_link)

Adds a load statement to the result of an attribute or calculation.

Uses [`Ash.Type.load/5`](external_link) to request that the type load nested data.

__ Link to this function

# loading?(query, item)

[ __ View Source ](external_link)

Returns true if the field/relationship or path to field/relationship is being loaded.

It accepts an atom or a list of atoms, which is treated for as a "path", i.e:
    
    
    Resource |> Ash.Query.load(friends: [enemies: [:score]]) |> Ash.Query.loading?([:friends, :enemies, :score])
    iex> true
    
    Resource |> Ash.Query.load(friends: [enemies: [:score]]) |> Ash.Query.loading?([:friends, :score])
    iex> false
    
    Resource |> Ash.Query.load(friends: [enemies: [:score]]) |> Ash.Query.loading?(:friends)
    iex> true

__ Link to this function

# lock(query, lock_type)

[ __ View Source ](external_link)
    
    
    @spec lock(t() | [Ash.Resource.t](external_link)(), [Ash.DataLayer.lock_type](external_link)()) :: t()

Lock the query results.

This must be run while in a transaction, and is not supported by all data layers.

__ Link to this function

# merge_query_load(left, right, context)

[ __ View Source ](external_link)

Merges two query's load statements, for the purpose of handling calculation requirements.

This should only be used if you are writing a custom type that is loadable. See the callback documentation for [`Ash.Type.merge_load/4`](external_link) for more.

__ Link to this function

# new(resource, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec new([Ash.Resource.t](external_link)() | t(), opts :: [Keyword.t](external_link)()) :: t()

Create a new query

__ Link to this function

# offset(query, offset)

[ __ View Source ](external_link)
    
    
    @spec offset(t() | [Ash.Resource.t](external_link)(), nil | [integer](external_link)()) :: t()

Skip the first n records

__ Link to this function

# page(query, page_opts)

[ __ View Source ](external_link)
    
    
    @spec page(t() | [Ash.Resource.t](external_link)(), [Keyword.t](external_link)()) :: t()

Sets the pagination options of the query.

Pass `nil` to disable pagination.

###  __ Limit/offset pagination

  * `:offset` ([`non_neg_integer/0`](external_link)) - The number of records to skip from the beginning of the query

  * `:limit` ([`pos_integer/0`](external_link)) - The number of records to include in the page

  * `:filter` ([`term/0`](external_link)) - A filter to apply for pagination purposes, that should not be considered in the full count.  
This is used by the liveview paginator to only fetch the records that were _already_ on the page when refreshing data, to avoid pages jittering.

  * `:count` ([`boolean/0`](external_link)) - Whether or not to return the page with a full count of all records




###  __ Keyset pagination

  * `:before` ([`String.t/0`](external_link)) - Get records that appear before the provided keyset (mutually exclusive with `after`)

  * `:after` ([`String.t/0`](external_link)) - Get records that appear after the provided keyset (mutually exclusive with `before`)

  * `:limit` ([`pos_integer/0`](external_link)) - How many records to include in the page

  * `:filter` ([`term/0`](external_link)) - See the `filter` option for offset pagination, this behaves the same.

  * `:count` ([`boolean/0`](external_link)) - Whether or not to return the page with a full count of all records




__ Link to this function

# put_context(query, key, value)

[ __ View Source ](external_link)
    
    
    @spec put_context(t() | [Ash.Resource.t](external_link)(), [atom](external_link)(), [term](external_link)()) :: t()

Sets a specific context key to a specific value

See `set_context/2` for more information.

__ Link to this function

# select(query, fields, opts \\\ [])

[ __ View Source ](external_link)

Ensure that only the specified _attributes_ are present in the results.

The first call to `select/2` will replace the default behavior of selecting all attributes. Subsequent calls to `select/2` will combine the provided fields unless the `replace?` option is provided with a value of `true`.

If a field has been deselected, selecting it again will override that (because a single list of fields is tracked for selection)

Primary key attributes are always selected and cannot be deselected.

When attempting to load a relationship (or manage it with [`Ash.Changeset.manage_relationship/3`](external_link)), if the source field is not selected on the query/provided data an error will be produced. If loading a relationship with a query, an error is produced if the query does not select the destination field of the relationship.

Use `ensure_selected/2` if you wish to make sure a field has been selected, without deselecting any other fields.

__ Link to this function

# selecting?(query, field)

[ __ View Source ](external_link)

__ Link to this function

# set_argument(query, argument, value)

[ __ View Source ](external_link)

Add an argument to the query, which can be used in filter templates on actions

__ Link to this function

# set_arguments(query, map)

[ __ View Source ](external_link)

Merge a map of arguments to the arguments list

__ Link to this function

# set_context(query, map)

[ __ View Source ](external_link)
    
    
    @spec set_context(t() | [Ash.Resource.t](external_link)(), [map](external_link)() | nil) :: t()

Merge a map of values into the query context

__ Link to this function

# set_domain(query, domain)

[ __ View Source ](external_link)

Set the query's domain, and any loaded query's domain

__ Link to this function

# set_result(query, result)

[ __ View Source ](external_link)
    
    
    @spec set_result(t(), [term](external_link)()) :: t()

Set the result of the action. This will prevent running the underlying datalayer behavior

__ Link to this function

# set_tenant(query, tenant)

[ __ View Source ](external_link)
    
    
    @spec set_tenant(t() | [Ash.Resource.t](external_link)(), [Ash.ToTenant.t](external_link)()) :: t()

__ Link to this function

# sort(query, sorts, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec sort(t() | [Ash.Resource.t](external_link)(), [Ash.Sort.t](external_link)(), opts :: [Keyword.t](external_link)()) :: t()

Sort the results based on attributes, aggregates or calculations.

Calculations are supported if they are defined with expressions, which can be done one of two ways.

  1. with the shorthand `calculate :calc, :type, expr(a + b)`
  2. By defining `expression/2` in a custom calculation module



See the guide on calculations for more.

Takes a list of fields to sort on, or a keyword list/mixed keyword list of fields and sort directions. The default sort direction is `:asc`.

Examples:
    
    
    Ash.Query.sort(query, [:foo, :bar])
    
    Ash.Query.sort(query, [:foo, bar: :desc])
    
    Ash.Query.sort(query, [foo: :desc, bar: :asc])

##  __ Options

  * `prepend?` \- set to `true` to put your sort at the front of the list of a sort is already specified



__ Link to this function

# sort_input(query, sorts, opts \\\ [])

[ __ View Source ](external_link)

Attach a sort statement to the query labelled as user input.

Sorts added as user input (or filters constructed with `Ash.Filter.parse_input`) will honor any field policies on resources by replacing any references to the field with `nil` in cases where the actor should not be able to see the given field.

__ Link to this function

# struct?(arg1)

[ __ View Source ](external_link)

__ Link to this macro

# subset_of(query, expr)

[ __ View Source ](external_link) (macro)

Determines if the provided expression would return data that is a suprset of the data returned by the filter on the query.

This uses the satisfiability solver that is used when solving for policy authorizations. In complex scenarios, or when using custom database expressions, (like fragments in ash_postgres), this function may return `:maybe`. Use `subset_of?` to always return a boolean.

__ Link to this macro

# subset_of?(query, expr)

[ __ View Source ](external_link) (macro)

Same as `subset_of/2` but always returns a boolean. `:maybe` returns `false`.

__ Link to this macro

# superset_of(query, expr)

[ __ View Source ](external_link) (macro)

Determines if the provided expression would return data that is a subset of the data returned by the filter on the query.

This uses the satisfiability solver that is used when solving for policy authorizations. In complex scenarios, or when using custom database expressions, (like fragments in ash_postgres), this function may return `:maybe`. Use `supserset_of?` to always return a boolean.

__ Link to this macro

# superset_of?(query, expr)

[ __ View Source ](external_link) (macro)

Same as `superset_of/2` but always returns a boolean. `:maybe` returns `false`.

__ Link to this function

# timeout(query, timeout)

[ __ View Source ](external_link)

__ Link to this function

# unload(query, fields)

[ __ View Source ](external_link)
    
    
    @spec unload(t(), [[atom](external_link)()]) :: t()

Removes a field from the list of fields to load

__ Link to this function

# unset(query, keys)

[ __ View Source ](external_link)
    
    
    @spec unset([Ash.Resource.t](external_link)() | t(), [atom](external_link)() | [[atom](external_link)()]) :: t()
