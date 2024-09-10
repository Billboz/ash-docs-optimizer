# Ash.Filter — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Filter (ash v3.4.8)
  - __ Security Concerns
  - __ Writing a filter
    - __ Built In Predicates
    - __ BooleanExpression syntax
    - __ Expressions
    - __ Keyword list syntax
    - __ Other formats
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- add_to_filter(base, addition, op \\\ :and, aggregates \\\ %{}, calculations \\\ %{}, context \\\ %{})
- add_to_filter!(base, addition, op \\\ :and, aggregates \\\ %{}, calculations \\\ %{}, context \\\ %{})
- builtin_functions()
- builtin_operators()
- builtin_predicate_operators()
- builtins()
- custom_expression(name, args)
- do_hydrate_refs(filter, context)
- find(expr, pred, ors? \\\ true, ands? \\\ true)
- find_simple_equality_predicate(expression, attribute)
- find_value(expr, pred)
- flat_map(expression, func)
- get_filter(resource, id)
- get_function(key, resource, public?)
- get_operator(key)
- get_predicate_function(key, resource, public?)
- hydrate_refs(value, context)
- list_predicates(expression)
- list_refs(expression, no_longer_simple? \\\ false, in_an_eq? \\\ false, expand_calculations? \\\ false, expand_get_path? \\\ false)
- map(filter, func)
- move_exprs_to_relationship_path(refs, path)
- move_to_relationship_path(expression, relationship_path)
- parse(resource, statement, context \\\ %{})
    - __ Important
- parse!(resource, statement, context \\\ %{})
- parse_input(resource, statement)
- parse_input!(resource, statement)
- prefix_refs(expr, path)
- put_at_path(value, list)
- relationship_paths(filter_or_expression, include_exists? \\\ false, with_refs? \\\ false, expand_aggregates? \\\ false)
- run_other_data_layer_filters(domain, resource, filter, tenant)
- strict_subset_of(filter, candidate)
- strict_subset_of?(filter, candidate)
- to_simple_filter(map, opts \\\ [])
- update_aggregates(expression, mapper, nested_path \\\ [], parent_paths \\\ [])
- used_aggregates(filter, relationship_path \\\ [], return_refs? \\\ false)
- used_calculations(filter, resource, relationship_path \\\ [], calculations \\\ %{}, aggregates \\\ %{}, return_refs? \\\ false)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Filter (ash v3.4.8)

The representation of a filter in Ash.

##  __ Security Concerns

If you are using a map with string keys, it is likely that you are parsing input. It is important to note that, instead of passing a filter supplied from an external source directly to [`Ash.Query.filter/2`](external_link), you should call `Ash.Filter.parse_input/2`. This ensures that the filter only uses public attributes, relationships, aggregates and calculations, honors field policies and any policies on related resources.

##  __ Writing a filter

###  __ Built In Predicates

  * `is_nil`
  * `==`
  * `!=`
  * `in`
  * `<`
  * `>`
  * `<=`
  * `>=`
  * `&&`
  * `||`
  * `<>`
  * `/`
  * `-`
  * `*`
  * `+`
  * `equals` (alias for `==`)
  * `not_equals` (alias for `!=`)
  * `gt` (alias for `>`)
  * `lt` (alias for `<`)
  * `gte` (alias for `>=`)
  * `lte` (alias for `<=`)
  * `eq` (alias for `==`)
  * `not_eq` (alias for `!=`)
  * `less_than` (alias for `<`)
  * `greater_than` (alias for `>`)
  * `less_than_or_equal` (alias for `<=`)
  * `greater_than_or_equal` (alias for `>=`)
  * `and` (alias for `&&`)
  * `or` (alias for `||`)
  * `concat` (alias for `<>`)
  * `div` (alias for `/`)
  * `minus` (alias for `-`)
  * `times` (alias for `*`)
  * `plus` (alias for `+`)



###  __ BooleanExpression syntax

The expression syntax ultimately just builds the keyword list style filter, but with lots of conveniences that would be very annoying to do manually.

Examples
    
    
    Ash.Query.filter(resource, name == "Zardoz")
    Ash.Query.filter(resource, first_name == "Zar" and last_name == "Doz")
    Ash.Query.filter(resource, first_name == "Zar" and last_name in ["Doz", "Daz"] and high_score > 10)
    Ash.Query.filter(resource, first_name == "Zar" or last_name == "Doz" or (high_score > 10 and high_score < -10))

###  __ Expressions

More complex filters can be built using Ash Expressions.

Examples
    
    
    # Filter based on the contents of a string attribute
    Ash.Query.filter(Helpdesk.Support.Ticket, contains(subject, "2"))
    # Filter based on the attribute of a joined relationship:
    Ash.Query.filter(Helpdesk.Support.Ticket, representative.name == ^name)

See the [Expressions guide](external_link) guide for more information.

###  __ Keyword list syntax

A filter is a nested keyword list (with some exceptions, like `true` for everything and `false` for nothing).

The key is the "predicate" (or "condition") and the value is the parameter. You can use `and` and `or` to create nested filters. Data layers can expose custom predicates. Eventually, you will be able to define your own custom predicates, which will be a mechanism for you to attach complex filters supported by the data layer to your queries.

**Important** In a given keyword list, all predicates are considered to be "ands". So `[or: [first_name: "Tom", last_name: "Bombadil"]]` doesn't mean 'First name == "tom" or last_name == "bombadil"'. To say that, you want to provide a list of filters, like so: `[or: [[first_name: "Tom"], [last_name: "Bombadil"]]]`

Some example filters:
    
    
    Ash.Query.filter(resource, [name: "Zardoz"])
    Ash.Query.filter(resource, [first_name: "Zar", last_name: "Doz"])
    Ash.Query.filter(resource, [first_name: "Zar", last_name: [in: ["Doz", "Daz"]], high_score: [greater_than: 10]])
    Ash.Query.filter(resource, [or: [
      [first_name: "Zar"],
      [last_name: "Doz"],
      [or: [
        [high_score: [greater_than: 10]]],
        [high_score: [less_than: -10]]
      ]
    ]])

###  __ Other formats

Maps are also accepted, as are maps with string keys. Technically, a list of `[{"string_key", value}]` would also work.

#  __ Summary

##  Types

t()

##  Functions

add_to_filter(base, addition, op \\\ :and, aggregates \\\ %{}, calculations \\\ %{}, context \\\ %{})

add_to_filter!(base, addition, op \\\ :and, aggregates \\\ %{}, calculations \\\ %{}, context \\\ %{})

builtin_functions()

builtin_operators()

builtin_predicate_operators()

builtins()

custom_expression(name, args)

do_hydrate_refs(filter, context)

find(expr, pred, ors? \\\ true, ands? \\\ true)

Find an expression inside of a filter that matches the provided predicate

find_simple_equality_predicate(expression, attribute)

Can be used to find a simple equality predicate on an attribute

find_value(expr, pred)

flat_map(expression, func)

get_filter(resource, id)

Returns a filter statement that would find a single record based on the input.

get_function(key, resource, public?)

get_operator(key)

get_predicate_function(key, resource, public?)

hydrate_refs(value, context)

list_predicates(expression)

list_refs(expression, no_longer_simple? \\\ false, in_an_eq? \\\ false, expand_calculations? \\\ false, expand_get_path? \\\ false)

map(filter, func)

move_exprs_to_relationship_path(refs, path)

move_to_relationship_path(expression, relationship_path)

parse(resource, statement, context \\\ %{})

Parses a filter statement

parse!(resource, statement, context \\\ %{})

Parses a filter statement

parse_input(resource, statement)

Parses a filter statement, accepting only public attributes/relationships, honoring field policies & related resource policies.

parse_input!(resource, statement)

Parses a filter statement, accepting only public attributes/relationships, honoring field policies & related resource policies, raising on errors.

prefix_refs(expr, path)

put_at_path(value, list)

relationship_paths(filter_or_expression, include_exists? \\\ false, with_refs? \\\ false, expand_aggregates? \\\ false)

run_other_data_layer_filters(domain, resource, filter, tenant)

strict_subset_of(filter, candidate)

Returns true if the second argument is a strict subset (always returns the same or less data) of the first

strict_subset_of?(filter, candidate)

to_simple_filter(map, opts \\\ [])

Transform an expression based filter to a simple filter, which is just a list of predicates

update_aggregates(expression, mapper, nested_path \\\ [], parent_paths \\\ [])

used_aggregates(filter, relationship_path \\\ [], return_refs? \\\ false)

used_calculations(filter, resource, relationship_path \\\ [], calculations \\\ %{}, aggregates \\\ %{}, return_refs? \\\ false)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Filter{expression: [term](external_link)(), resource: [term](external_link)()}

#  __ Functions

__ Link to this function

# add_to_filter(base, addition, op \\\ :and, aggregates \\\ %{}, calculations \\\ %{}, context \\\ %{})

[ __ View Source ](external_link)

__ Link to this function

# add_to_filter!(base, addition, op \\\ :and, aggregates \\\ %{}, calculations \\\ %{}, context \\\ %{})

[ __ View Source ](external_link)

__ Link to this function

# builtin_functions()

[ __ View Source ](external_link)

__ Link to this function

# builtin_operators()

[ __ View Source ](external_link)

__ Link to this function

# builtin_predicate_operators()

[ __ View Source ](external_link)

__ Link to this function

# builtins()

[ __ View Source ](external_link)

__ Link to this function

# custom_expression(name, args)

[ __ View Source ](external_link)

__ Link to this function

# do_hydrate_refs(filter, context)

[ __ View Source ](external_link)

__ Link to this function

# find(expr, pred, ors? \\\ true, ands? \\\ true)

[ __ View Source ](external_link)

Find an expression inside of a filter that matches the provided predicate

__ Link to this function

# find_simple_equality_predicate(expression, attribute)

[ __ View Source ](external_link)

Can be used to find a simple equality predicate on an attribute

Use this when your attribute is configured with `filterable? :simple_equality`, and you want to to find the value that it is being filtered on with (if any).

__ Link to this function

# find_value(expr, pred)

[ __ View Source ](external_link)

__ Link to this function

# flat_map(expression, func)

[ __ View Source ](external_link)

__ Link to this function

# get_filter(resource, id)

[ __ View Source ](external_link)

Returns a filter statement that would find a single record based on the input.

For example:
    
    
    iex> get_filter(MyApp.Post, 1)
    {:ok, %{id: 1}} #using primary key
    iex> get_filter(MyApp.Post, id: 1)
    {:ok, %{id: 1}} #using primary key
    iex> get_filter(MyApp.Post, author_id: 1, publication_id: 2, first_name: "fred")
    {:ok, %{author_id: 1, publication_id: 1}} # using a unique identity
    iex> get_filter(MyApp.Post, first_name: "fred")
    :error # not enough information

__ Link to this function

# get_function(key, resource, public?)

[ __ View Source ](external_link)

__ Link to this function

# get_operator(key)

[ __ View Source ](external_link)

__ Link to this function

# get_predicate_function(key, resource, public?)

[ __ View Source ](external_link)

__ Link to this function

# hydrate_refs(value, context)

[ __ View Source ](external_link)

__ Link to this function

# list_predicates(expression)

[ __ View Source ](external_link)

__ Link to this function

# list_refs(expression, no_longer_simple? \\\ false, in_an_eq? \\\ false, expand_calculations? \\\ false, expand_get_path? \\\ false)

[ __ View Source ](external_link)

__ Link to this function

# map(filter, func)

[ __ View Source ](external_link)

__ Link to this function

# move_exprs_to_relationship_path(refs, path)

[ __ View Source ](external_link)

__ Link to this function

# move_to_relationship_path(expression, relationship_path)

[ __ View Source ](external_link)

__ Link to this function

# parse(resource, statement, context \\\ %{})

[ __ View Source ](external_link)

Parses a filter statement

See the module documentation for more information on the supported formats for filter statements.

###  __ Important

If you are trying to validate a filter supplied from an external/untrusted source, be sure to use `parse_input/2` instead! The only difference is that it only accepts filters over public attributes/relationships.

__ Link to this function

# parse!(resource, statement, context \\\ %{})

[ __ View Source ](external_link)

Parses a filter statement

See `parse/2` for more

__ Link to this function

# parse_input(resource, statement)

[ __ View Source ](external_link)

Parses a filter statement, accepting only public attributes/relationships, honoring field policies & related resource policies.

See `parse/2` for more

__ Link to this function

# parse_input!(resource, statement)

[ __ View Source ](external_link)

Parses a filter statement, accepting only public attributes/relationships, honoring field policies & related resource policies, raising on errors.

See `parse_input/2` for more

__ Link to this function

# prefix_refs(expr, path)

[ __ View Source ](external_link)

__ Link to this function

# put_at_path(value, list)

[ __ View Source ](external_link)

__ Link to this function

# relationship_paths(filter_or_expression, include_exists? \\\ false, with_refs? \\\ false, expand_aggregates? \\\ false)

[ __ View Source ](external_link)

__ Link to this function

# run_other_data_layer_filters(domain, resource, filter, tenant)

[ __ View Source ](external_link)

__ Link to this function

# strict_subset_of(filter, candidate)

[ __ View Source ](external_link)

Returns true if the second argument is a strict subset (always returns the same or less data) of the first

__ Link to this function

# strict_subset_of?(filter, candidate)

[ __ View Source ](external_link)

__ Link to this function

# to_simple_filter(map, opts \\\ [])

[ __ View Source ](external_link)

Transform an expression based filter to a simple filter, which is just a list of predicates

Options:

  * `:skip_invalid?` ([`boolean/0`](external_link)) - If an invalid filter expression is reached that can't be used with a simple filter (like an `or` statement, or a non-predicate expression), it will be ignored instead of raising an error. The default value is `false`.



__ Link to this function

# update_aggregates(expression, mapper, nested_path \\\ [], parent_paths \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# used_aggregates(filter, relationship_path \\\ [], return_refs? \\\ false)

[ __ View Source ](external_link)

__ Link to this function

# used_calculations(filter, resource, relationship_path \\\ [], calculations \\\ %{}, aggregates \\\ %{}, return_refs? \\\ false)

[ __ View Source ](external_link)
