# Ash.CustomExpression — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.CustomExpression behaviour (ash v3.4.8)
    - __ Options
    - __ Registering Your Expression
- __ Summary
  - Callbacks
- __ Callbacks
- arguments()
- expression(data_layer, arguments)
- name()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.CustomExpression behaviour (ash v3.4.8)

A module for defining custom functions that can be called in Ash expressions.

For example:
    
    
    defmodule MyApp.Expressions.LevenshteinDistance do
      use Ash.CustomExpression,
        name: :levenshtein,
        arguments: [
          [:string, :string]
        ]
    
      def expression(AshPostgres.DataLayer, [left, right]) do
        {:ok, expr(fragment("levenshtein(?, ?)", left, right))}
      end
    
      # It is good practice to always define an expression for `Ash.DataLayer.Simple`,
      # as that is what Ash will use to run your custom expression in Elixir.
      # This allows us to completely avoid communicating with the database in some cases.
    
      def expression(data_layer, [left, right]) when data_layer in [
        Ash.DataLayer.Ets,
        Ash.DataLayer.Simple
      ] do
        {:ok, expr(fragment(&__MODULE__.levenshtein/2, left, right))}
      end
    
      # always define this fallback clause as well
      def expression(_data_layer, _args), do: :unknown
    
      @doc "Computes the levenshtein distance of two strings"
      def levenshtein(left, right) do
        # ......
      end
    end

###  __ Options

  * `name` \- The name of the custom expression. This is the name that will be used in Ash expressions.
  * `arguments` \- A list of lists of types that the custom expression accepts. Each list represents a set of arguments that the custom expression can accept.
  * `predicate?` \- Whether this expression can be exposed as a predicate in filter interfaces. Defaults to `false`.



###  __ Registering Your Expression

Use compile-time configuration to register your custom expressions
    
    
    config :ash, :custom_expressions, [MyApp.Expressions.LevenshteinDistance]

#  __ Summary

##  Callbacks

arguments()

expression(data_layer, arguments)

name()

#  __ Callbacks

__ Link to this callback

# arguments()

[ __ View Source ](external_link)
    
    
    @callback arguments() :: [[[Ash.Type.t](external_link)() | {[Ash.Type.t](external_link)(), [Keyword.t](external_link)()}]]

__ Link to this callback

# expression(data_layer, arguments)

[ __ View Source ](external_link)
    
    
    @callback expression(
      data_layer :: [Ash.DataLayer.t](external_link)(),
      arguments :: [[Ash.Expr.t](external_link)()]
    ) :: {:ok, [Ash.Expr.t](external_link)()} | :unknown

__ Link to this callback

# name()

[ __ View Source ](external_link)
    
    
    @callback name() :: [atom](external_link)()
