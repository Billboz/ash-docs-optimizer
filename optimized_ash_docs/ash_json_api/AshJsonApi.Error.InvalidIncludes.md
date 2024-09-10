# AshJsonApi.Error.InvalidIncludes — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.Error.InvalidIncludes exception (ash_json_api v1.4.7)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- exception()

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.Error.InvalidIncludes exception (ash_json_api v1.4.7)

Returned when the includes string provided in the query parameter `include` is invalid.

#  __ Summary

##  Types

t()

##  Functions

exception()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshJsonApi.Error.InvalidIncludes{
      __exception__: true,
      bread_crumbs: [term](external_link)(),
      class: [term](external_link)(),
      includes: [term](external_link)(),
      path: [term](external_link)(),
      splode: [term](external_link)(),
      stacktrace: [term](external_link)(),
      vars: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# exception()

[ __ View Source ](external_link)
