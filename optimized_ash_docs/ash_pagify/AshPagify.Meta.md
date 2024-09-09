# AshPagify.Meta — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Meta (ash_pagify v1.0.2)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- with_errors(params, errors, opts)
  - __ Example

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Meta (ash_pagify v1.0.2)

Defines a struct for holding meta information of a query result.

#  __ Summary

##  Types

t()

Meta information for a query result.

##  Functions

with_errors(params, errors, opts)

Returns a [`AshPagify.Meta`](external_link) struct with the given params, errors, and opts.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPagify.Meta{
      ash_pagify: [AshPagify.t](external_link)(),
      current_limit: [pos_integer](external_link)() | nil,
      current_offset: [non_neg_integer](external_link)() | nil,
      current_page: [pos_integer](external_link)() | nil,
      current_search: [String.t](external_link)() | nil,
      default_scopes: [map](external_link)() | nil,
      errors: [{[atom](external_link)(), [term](external_link)()}] | nil,
      has_next_page?: [boolean](external_link)(),
      has_previous_page?: [boolean](external_link)(),
      next_offset: [non_neg_integer](external_link)() | nil,
      opts: [Keyword.t](external_link)(),
      params: %{optional([String.t](external_link)()) => [term](external_link)()},
      previous_offset: [non_neg_integer](external_link)() | nil,
      resource: [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)() | nil,
      total_count: [non_neg_integer](external_link)() | nil,
      total_pages: [non_neg_integer](external_link)() | nil
    }

Meta information for a query result.

  * `:current_limit` \- The `:limit` value used in the query
  * `:current_offset` \- The `:offset` value used in the query
  * `:current_page` \- A derived value when using offset-based pagination. Note that the value will be rounded if the offset lies between pages.
  * `:current_search` \- The current full-text search term.
  * `:default_scopes` \- Default scopes loaded for this resource and query.
  * `:errors` \- Any validation errors that occurred.
  * `:has_previous_page?`, `:has_next_page?` \- Whether there are previous or next pages based on the current page and total pages.
  * `:previous_offset`, `:next_offset` \- Values based on `:current_page` and `:current_offset`/`current_limit`.
  * `:opts` \- The options passed to the [`AshPagify`](external_link) struct.
  * `:ash_pagify` \- The [`AshPagify`](external_link) struct used in the query.
  * `:params` \- The original, unvalidated params that were passed. Only set if validation errors occurred.
  * `:resource` \- The [`Ash.Resource`](3.3.3/Ash.Resource.html) that was queried.
  * `:total_count` \- The total count of records for the given query.
  * `:total_pages` \- The total page count based on the total record count and the limit.



#  __ Functions

__ Link to this function

# with_errors(params, errors, opts)

[ __ View Source ](external_link)

Returns a [`AshPagify.Meta`](external_link) struct with the given params, errors, and opts.

This function is used internally to build error responses in case of validation errors. You can use it to add additional parameter validation.

##  __ Example

In this list function, the given parameters are first validated with [`AshPagify.validate/2`](external_link), which returns a [`AshPagify`](external_link) struct on success. You can then pass that struct to a custom validation function, along with the original parameters and the opts, which both are needed to call this function.
    
    
    def list_posts(%{} = params) do
      opts = []
    
      with {:ok, %AshPagify{} = ash_pagify} <- AshPagify.validate(Post, params, opts),
           {:ok, %AshPagify{} = ash_pagify} <- custom_validation(ash_pagify, params, opts) do
        AshPagify.run(Post, ash_pagify, opts)
      end
    end

In your custom validation function, you can retrieve and manipulate the filter values in the [`AshPagify`](external_link) struct.
    
    
    defp custom_validation(%AshPagify{} = ash_pagify, %{} = params, opts) do
      filters = ash_pagify.filters
    
      if Keyword.get(filters, :name) != nil do
        errors = [filters: [%Ash.Error.Query.InvalidFilterReference{field: :name}]]
        {:error, AshPagify.Meta.with_errors(params, errors, opts)}
      else
        {:ok, ash_pagify}
      end
    end
