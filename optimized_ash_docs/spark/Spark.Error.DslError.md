# Spark.Error.DslError — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Error.DslError exception (spark v2.2.24)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Error.DslError exception (spark v2.2.24)

Used when a DSL is incorrectly configured.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Spark.Error.DslError{
      __exception__: true,
      message: [String.t](external_link)() | [any](external_link)(),
      module: nil | [module](external_link)(),
      path: [:atom],
      stacktrace: [any](external_link)()
    }
