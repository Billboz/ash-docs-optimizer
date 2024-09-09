# AshPagify.Error.Query.InvalidParamsError — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Error.Query.InvalidParamsError exception (ash_pagify v1.0.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- exception()

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Error.Query.InvalidParamsError exception (ash_pagify v1.0.2)

Raised when parameter validation fails.

This can occur under a number of circumstances, such as:

  * Pagination parameters are improperly formatted or invalid.
  * Filter values are incompatible with the respective field's type or specified operator.
  * Ordering parameters are not provided in the correct format.



#  __ Summary

##  Types

t()

##  Functions

exception()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPagify.Error.Query.InvalidParamsError{
      __exception__: true,
      bread_crumbs: [term](external_link)(),
      class: [term](external_link)(),
      errors: [keyword](external_link)(),
      params: [map](external_link)(),
      path: [term](external_link)(),
      splode: [term](external_link)(),
      stacktrace: [term](external_link)(),
      vars: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# exception()

[ __ View Source ](external_link)
