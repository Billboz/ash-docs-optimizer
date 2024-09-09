# Calculations — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Calculations
  - __ Primer
  - __ Declaring calculations on a resource
    - __ Expression Calculations
    - __ Module Calculations
  - __ Custom calculations in the query
  - __ Arguments in calculations

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Calculations

Calculations in Ash allow for displaying complex values as a top level value of a resource.

##  __ Primer

##  __ Declaring calculations on a resource

###  __ Expression Calculations

The simplest kind of calculation refers to an Ash expression. For example:
    
    
    calculations do
      calculate :full_name, :string, expr(first_name <> " " <> last_name)
    end

See the [Expressions guide](external_link) for more.

###  __ Module Calculations

When calculations require more complex code or can't be pushed down into the data layer, a module that uses [`Ash.Resource.Calculation`](external_link) can be used.
    
    
    defmodule Concat do
      # An example concatenation calculation, that accepts the delimiter as an argument,
      #and the fields to concatenate as options
      use Ash.Resource.Calculation
    
      # Optional callback that verifies the passed in options (and optionally transforms them)
      @impl true
      def init(opts) do
        if opts[:keys] && is_list(opts[:keys]) && Enum.all?(opts[:keys], &is_atom/1) do
          {:ok, opts}
        else
          {:error, "Expected a `keys` option for which keys to concat"}
        end
      end
    
      @impl true
      # A callback to tell Ash what keys must be loaded/selected when running this calculation
      # you can include related data here, but be sure to include the attributes you need from said related data
      # i.e `posts: [:title, :body]`.
      def load(_query, opts, _context) do
        opts[:keys]
      end
    
      @impl true
      def calculate(records, opts, %{separator: separator}) do
        Enum.map(records, fn record ->
          Enum.map_join(opts[:keys], separator, fn key ->
            to_string(Map.get(record, key))
          end)
        end)
      end
    
      # You can implement this callback to make this calculation possible in the data layer
      # *and* in elixir. Ash expressions are already executable in Elixir or in the data layer, but this gives you fine grain control over how it is done
      # @impl true
      # def expression(opts, context) do
      # end
    end
    
    # Usage in a resource
    calculations do
      calculate :full_name, :string, {Concat, keys: [:first_name, :last_name]} do
        # You need to use the [allow_empty?: true, trim?: false] constraints here.
        # The separator could be an empty string or require a leading or trailing space,
        # but would be trimmed or even set to `nil` without the constraints shown below.
        argument :separator, :string do
          allow_nil? false
          constraints [allow_empty?: true, trim?: false]
          default ""
        end
      end
    end

See the documentation for the calculations section in [Resource DSL docs](external_link) and the [`Ash.Resource.Calculation`](external_link) docs for more information.

The calculations declared on a resource allow for declaring a set of named calculations that can be used by extensions. They can also be loaded in the query using [`Ash.Query.load/2`](external_link), or after the fact using [`Ash.load/3`](external_link). Calculations declared on the resource will be keys in the resource's struct.

##  __ Custom calculations in the query

Example:
    
    
    User
    |> Ash.Query.calculate(:full_name, {Concat, keys: [:first_name, :last_name]}, :string, %{separator: ","})

See the documentation for [`Ash.Query.calculate/4`](external_link) for more information.

##  __ Arguments in calculations

Using the above example with arguments, you can load a calculation with arguments like so:
    
    
    load(full_name: [separator: ","])

If the calculation uses an expression, you can also filter and sort on it like so:
    
    
    query
    |> Ash.Query.filter(full_name(separator: " ") == "Zach Daniel")
    |> Ash.Query.sort(full_name: {%{separator: " "}, :asc})

[ ← Previous Page  Relationships  ](external_link)

[ Next Page →  Aggregates  ](external_link)
