# Ash.Query.Aggregate — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Aggregate (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- kind()
- t()
- __ Functions
- default_value(atom)
- new(resource, name, kind, opts \\\ [])
- new!(resource, name, kind, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Aggregate (ash v3.4.8)

Represents an aggregated association value

#  __ Summary

##  Types

kind()

t()

##  Functions

default_value(atom)

new(resource, name, kind, opts \\\ [])

Create a new aggregate, used with `Query.aggregate` or `Ash.aggregate`

new!(resource, name, kind, opts \\\ [])

#  __ Types

__ Link to this type

# kind()

[ __ View Source ](external_link)
    
    
    @type kind() ::
      :custom | :exists | :avg | :min | :max | :list | :sum | :first | :count

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Query.Aggregate{
      agg_name: [term](external_link)(),
      authorize?: [term](external_link)(),
      constraints: [term](external_link)(),
      context: [term](external_link)(),
      default_value: [term](external_link)(),
      field: [term](external_link)(),
      filterable?: [term](external_link)(),
      implementation: [term](external_link)(),
      include_nil?: [term](external_link)(),
      join_filters: [term](external_link)(),
      kind: [term](external_link)(),
      load: [term](external_link)(),
      name: [term](external_link)(),
      query: [term](external_link)(),
      read_action: [term](external_link)(),
      relationship_path: [term](external_link)(),
      resource: [term](external_link)(),
      sensitive?: [term](external_link)(),
      sortable?: [term](external_link)(),
      type: [term](external_link)(),
      uniq?: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# default_value(atom)

[ __ View Source ](external_link)

__ Link to this function

# new(resource, name, kind, opts \\\ [])

[ __ View Source ](external_link)

Create a new aggregate, used with `Query.aggregate` or `Ash.aggregate`

Options:

  * `:path` (list of [`atom/0`](external_link)) - The relationship path to aggregate over. Only used when adding aggregates to a query. The default value is `[]`.

  * `:query` ([`term/0`](external_link)) - A base query to use for the aggregate, or a keyword list to be passed to [`Ash.Query.build/2`](external_link)

  * `:field` \- The field to use for the aggregate. Not necessary for all aggregate types.

  * `:expr` ([`term/0`](external_link)) - An expression to aggregate, cannot be used with `field`.

  * `:expr_type` \- The type of the expression, required if `expr` is used.

  * `:arguments` ([`map/0`](external_link)) - Arguments to pass to the field, if field is a calculation.

  * `:default` ([`term/0`](external_link)) - A default value to use for the aggregate if it returns `nil`.

  * `:filterable?` ([`boolean/0`](external_link)) - Whether or not this aggregate may be used in filters. The default value is `true`.

  * `:sortable?` ([`boolean/0`](external_link)) - Whether or not this aggregate may be used in sorts. The default value is `true`.

  * `:type` ([`term/0`](external_link)) - A type to use for the aggregate.

  * `:constraints` ([`term/0`](external_link)) - Type constraints to use for the aggregate. The default value is `[]`.

  * `:implementation` ([`term/0`](external_link)) - The implementation for any custom aggregates.

  * `:read_action` ([`atom/0`](external_link)) - The read action to use for the aggregate, defaults to the primary read action.

  * `:uniq?` ([`boolean/0`](external_link)) - Whether or not to only consider unique values. Only relevant for `count` and `list` aggregates. The default value is `false`.

  * `:include_nil?` ([`boolean/0`](external_link)) - Whether or not to include `nil` values in the aggregate. Only relevant for `list` and `first` aggregates. The default value is `false`.

  * `:join_filters` (map of one or a list of [`atom/0`](external_link) keys and [`term/0`](external_link) values) - A map of relationship paths (an atom or list of atoms), to an expression to apply when fetching the aggregate data. See the aggregates guide for more. The default value is `%{}`.

  * `:sensitive?` ([`boolean/0`](external_link)) - Whether or not references to this aggregate will be considered sensitive The default value is `false`.

  * `:authorize?` ([`boolean/0`](external_link)) - Whether or not the aggregate query should authorize based on the target action.  
See `[Ash.Resource.Dsl.aggregates.count](external_link)` for more information. The default value is `true`.




__ Link to this function

# new!(resource, name, kind, opts \\\ [])

[ __ View Source ](external_link)
