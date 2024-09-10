# Spark.Dsl.Builder — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Dsl.Builder (spark v2.2.24)
- __ Summary
  - Types
  - Functions
- __ Types
- input()
- result()
- __ Functions
- defbuilder(arg, list)
- defbuilderp(arg, list)
- handle_nested_builders(opts, nested)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Dsl.Builder (spark v2.2.24)

Utilities for building DSL objects programatically, generally used in transformers.

#  __ Summary

##  Types

input()

result()

##  Functions

defbuilder(arg, list)

defbuilderp(arg, list)

handle_nested_builders(opts, nested)

Handles nested values that may be `{:ok, result}` or `{:error, term}`, returning any errors and unwrapping any ok values

#  __ Types

__ Link to this type

# input()

[ __ View Source ](external_link)
    
    
    @type input() :: {:ok, [Spark.Dsl.t](external_link)()} | {:error, [term](external_link)()} | [Spark.Dsl.t](external_link)()

__ Link to this type

# result()

[ __ View Source ](external_link)
    
    
    @type result() :: {:ok, [Spark.Dsl.t](external_link)()} | {:error, [term](external_link)()}

#  __ Functions

__ Link to this macro

# defbuilder(arg, list)

[ __ View Source ](external_link) (macro)

__ Link to this macro

# defbuilderp(arg, list)

[ __ View Source ](external_link) (macro)

__ Link to this function

# handle_nested_builders(opts, nested)

[ __ View Source ](external_link)

Handles nested values that may be `{:ok, result}` or `{:error, term}`, returning any errors and unwrapping any ok values

This allows users of builders to do things like:
    
    
    dsl_state
    |> Ash.Resource.Builder.add_new_action(:update, :publish,
      changes: [
        Ash.Resource.Builder.build_action_change(
          Ash.Resource.Change.Builtins.set_attribute(:state, :published)
        )
      ]
    )

If your builder function calls `handle_nested_builders/2` with their input before building the thing its building.
