# Ash.Query.Calculation — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Query.Calculation (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- new(name, module, calc_opts, type, constraints, opts \\\ [])
  - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Query.Calculation (ash v3.4.8)

Represents a calculated attribute requested on a query

#  __ Summary

##  Types

t()

##  Functions

new(name, module, calc_opts, type, constraints, opts \\\ [])

Creates a new query calculation.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Query.Calculation{
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

#  __ Functions

__ Link to this function

# new(name, module, calc_opts, type, constraints, opts \\\ [])

[ __ View Source ](external_link)

Creates a new query calculation.

##  __ Options

  * `:arguments` ([`map/0`](external_link)) - Arguments to pass to the calculation The default value is `%{}`.

  * `:async?` ([`boolean/0`](external_link)) - Whether or not this calculation should be run asynchronously The default value is `false`.

  * `:filterable?` ([`boolean/0`](external_link)) - Whether or not this calculation can be filtered on The default value is `true`.

  * `:sortable?` ([`boolean/0`](external_link)) - Whether or not this calculation can be sorted on The default value is `true`.

  * `:sensitive?` ([`boolean/0`](external_link)) - Whether or not references to this calculation will be considered sensitive The default value is `false`.

  * `:load` ([`term/0`](external_link)) - Loads that are required for the calculation.

  * `:source_context` ([`map/0`](external_link)) - Context from the source query or changeset. The default value is `%{}`.



