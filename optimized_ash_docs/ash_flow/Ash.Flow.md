# Ash.Flow — ash_flow v0.1.1

Project: ash_flow v0.1.1

## Table of Contents

- [ __ View Source ](external_link) Ash.Flow (ash_flow v0.1.1)
    - __ Options
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- do_fetch_in(value, arg2)
- element_refs(input)
- handle_modifiers(action_input)
- run(flow, input, opts \\\ [])
- run!(flow, input, opts \\\ [])

__

Search documentation of ash_flow __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Flow (ash_flow v0.1.1)

A flow is a static definition of a set of steps to be run.

See the [guide](external_link) for more.

###  __ Options

  * `:extensions` (list of module that adopts [`Spark.Dsl.Extension`](external_link)) - A list of DSL extensions to add to the [`Spark.Dsl`](external_link)

  * `:otp_app` ([`atom/0`](external_link)) - The otp_app to use for any application configurable options

  * `:fragments` (list of [`module/0`](external_link)) - Fragments to include in the [`Spark.Dsl`](external_link). See the fragments guide for more.




#  __ Summary

##  Types

t()

##  Functions

do_fetch_in(value, arg2)

element_refs(input)

See [`Ash.Flow.Template.element_refs/1`](external_link).

handle_modifiers(action_input)

run(flow, input, opts \\\ [])

run!(flow, input, opts \\\ [])

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

#  __ Functions

__ Link to this function

# do_fetch_in(value, arg2)

[ __ View Source ](external_link)

__ Link to this function

# element_refs(input)

[ __ View Source ](external_link)

See [`Ash.Flow.Template.element_refs/1`](external_link).

__ Link to this function

# handle_modifiers(action_input)

[ __ View Source ](external_link)

__ Link to this function

# run(flow, input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec run([any](external_link)(), [any](external_link)(), [Keyword.t](external_link)()) :: [Ash.Flow.Result.t](external_link)()

__ Link to this function

# run!(flow, input, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec run!([any](external_link)(), [any](external_link)(), [Keyword.t](external_link)()) :: [Ash.Flow.Result.t](external_link)() | [no_return](external_link)()
