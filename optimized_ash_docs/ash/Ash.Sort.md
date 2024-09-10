# Ash.Sort — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Sort (ash v3.4.8)
  - __ Important
- __ Summary
  - Types
  - Functions
- __ Types
- sort_item()
- sort_order()
- t()
- __ Functions
- expr_sort(expression, type \\\ nil)
- parse_input(resource, sort, handler \\\ nil)
    - __ Sort Strings
    - __ A list of sort strings
  - __ Handling specific values
- parse_input!(resource, sort, handler \\\ nil)
- parse_sort(resource, sort, handler \\\ nil)
- reverse(sort)
- runtime_sort(results, sort, domain \\\ nil)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Sort (ash v3.4.8)

Utilities and types for sorting.

##  __ Important

Keyset pagination cannot currently be used in conjunction with aggregate and calculation sorting. Combining them will result in an error on the query.

#  __ Summary

##  Types

sort_item()

sort_order()

t()

##  Functions

expr_sort(expression, type \\\ nil)

Builds an expression to be used in a sort statement.

parse_input(resource, sort, handler \\\ nil)

A utility for parsing sorts provided from external input. Only allows sorting on public fields.

parse_input!(resource, sort, handler \\\ nil)

Same as `parse_input/2` except raises any errors

parse_sort(resource, sort, handler \\\ nil)

reverse(sort)

Reverses an Ash sort statement.

runtime_sort(results, sort, domain \\\ nil)

A utility for sorting a list of records at runtime.

#  __ Types

__ Link to this type

# sort_item()

[ __ View Source ](external_link)
    
    
    @type sort_item() ::
      [atom](external_link)()
      | {[atom](external_link)(), sort_order()}
      | %Ash.Query.Calculation{
          async?: [term](external_link)(),
          calc_name: [term](external_link)(),
          constraints: [term](external_link)(),
          context: [term](external_link)(),
          filterable?: [term](external_link)(),
          load: [term](external_link)(),
          module: [term](external_link)(),
          name: [term](external_link)(),
          opts: [term](external_link)(),
          required_loads: [term](external_link)(),
          select: [term](external_link)(),
          sensitive?: [term](external_link)(),
          sortable?: [term](external_link)(),
          type: [term](external_link)()
        }
      | {%Ash.Query.Calculation{
           async?: [term](external_link)(),
           calc_name: [term](external_link)(),
           constraints: [term](external_link)(),
           context: [term](external_link)(),
           filterable?: [term](external_link)(),
           load: [term](external_link)(),
           module: [term](external_link)(),
           name: [term](external_link)(),
           opts: [term](external_link)(),
           required_loads: [term](external_link)(),
           select: [term](external_link)(),
           sensitive?: [term](external_link)(),
           sortable?: [term](external_link)(),
           type: [term](external_link)()
         }, sort_order()}
      | {[atom](external_link)(), {[Keyword.t](external_link)() | [map](external_link)(), sort_order()}}

__ Link to this type

# sort_order()

[ __ View Source ](external_link)
    
    
    @type sort_order() ::
      :asc
      | :desc
      | :asc_nils_first
      | :asc_nils_last
      | :desc_nils_first
      | :desc_nils_last

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [sort_item()] | sort_item()

#  __ Functions

__ Link to this macro

# expr_sort(expression, type \\\ nil)

[ __ View Source ](external_link) (macro)
    
    
    @spec expr_sort([Ash.Expr.t](external_link)(), [Ash.Type.t](external_link)() | nil) :: [Ash.Expr.t](external_link)()

Builds an expression to be used in a sort statement.

For example:
    
    
    Ash.Query.sort(query, Ash.Sort.expr_sort(author.full_name, :string))
    
    Ash.Query.sort(query, [{Ash.Sort.expr_sort(author.full_name, :string), :desc_nils_first}])

__ Link to this function

# parse_input(resource, sort, handler \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec parse_input(
      [Ash.Resource.t](external_link)(),
      [String.t](external_link)()
      | [[atom](external_link)() | [String.t](external_link)() | {[atom](external_link)(), sort_order()} | [[String.t](external_link)()]]
      | nil,
      nil | ([String.t](external_link)() -> nil | [atom](external_link)() | {[atom](external_link)(), [map](external_link)()})
    ) :: {:ok, t()} | {:error, [term](external_link)()}

A utility for parsing sorts provided from external input. Only allows sorting on public fields.

The supported formats are:

###  __ Sort Strings

A comma separated list of fields to sort on, each with an optional prefix.

The prefixes are:

  * "+" - Same as no prefix. Sorts `:asc`.
  * "++" - Sorts `:asc_nils_first`
  * "-" - Sorts `:desc`
  * "--" - Sorts `:desc_nils_last`



For example
    
    
    "foo,-bar,++baz,--buz"

###  __ A list of sort strings

Same prefix rules as above, but provided as a list.

For example:
    
    
    ["foo", "-bar", "++baz", "--buz"]

##  __ Handling specific values

A handler function may be provided that takes a string, and returns the relevant sort It won't be given any prefixes, only the field. This allows for things like parsing the calculation values out of the sort, or setting calculation values if they are not included in the sort string.

To return calculation parameters, return `{:field, %{param: :value}}`. This will end up as something like `{:field, {%{param: :value}, :desc}}`, with the corresponding sort order.

This handler function will only be called if you pass in a string or list of strings for the sort. Atoms will be assumed to have already been handled. The handler should return `nil` if it is not handling the given field.

__ Link to this function

# parse_input!(resource, sort, handler \\\ nil)

[ __ View Source ](external_link)

Same as `parse_input/2` except raises any errors

See `parse_input/2` for more.

__ Link to this function

# parse_sort(resource, sort, handler \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# reverse(sort)

[ __ View Source ](external_link)

Reverses an Ash sort statement.

__ Link to this function

# runtime_sort(results, sort, domain \\\ nil)

[ __ View Source ](external_link)

A utility for sorting a list of records at runtime.

For example:
    
    
    Ash.Sort.runtime_sort([record1, record2, record3], name: :asc, type: :desc_nils_last)

Keep in mind that it is unrealistic to expect this runtime sort to always be exactly the same as a sort that may have been applied by your data layer. This is especially true for strings. For example, `Postgres` strings have a collation that affects their sorting, making it unpredictable from the perspective of a tool using the database: <https://www.postgresql.org/docs/current/collation.html>
