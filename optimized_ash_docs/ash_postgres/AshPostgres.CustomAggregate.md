# AshPostgres.CustomAggregate — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.CustomAggregate behaviour (ash_postgres v2.3.1)
- __ Summary
  - Callbacks
- __ Callbacks
- dynamic(opts, binding)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.CustomAggregate behaviour (ash_postgres v2.3.1)

A custom aggregate implementation for ecto.

#  __ Summary

##  Callbacks

dynamic(opts, binding)

The dynamic expression to create the aggregate.

#  __ Callbacks

__

# dynamic(opts, binding)

[ __](external_link)
    
    
    @callback dynamic(opts :: [Keyword.t](external_link)(), binding :: [integer](external_link)()) :: [Ecto.Query.dynamic_expr](external_link)()

The dynamic expression to create the aggregate.

The binding refers to the resource being aggregated, use `as(^binding)` to reference it.

For example:
    
    
    Ecto.Query.dynamic(
      [],
      fragment("string_agg(?, ?)", field(as(^binding), ^opts[:field]), ^opts[:delimiter])
    )
