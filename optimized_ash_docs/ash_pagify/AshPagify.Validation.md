# AshPagify.Validation — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Validation (ash_pagify v1.0.2)
- __ Summary
  - Functions
- __ Functions
- validate_filter_form(params, opts)
  - __ Examples
- validate_filters(params, opts)
  - __ Examples
- validate_order_by(params, opts)
  - __ Examples
- validate_pagination(params, opts)
  - __ Examples
- validate_params(query_or_resource, params, opts \\\ [])
- validate_scopes(params, ash_pagify_scopes, default_scopes \\\ nil, opts \\\ [])
  - __ Examples
- validate_search(params, opts)

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Validation (ash_pagify v1.0.2)

Utilities for validating and transforming full-text search, scoping, filtering, ordering, and pagination parameters.

#  __ Summary

##  Functions

validate_filter_form(params, opts)

Validates the form filter in the given parameters.

validate_filters(params, opts)

Validates the filters in the given parameters.

validate_order_by(params, opts)

Validates the order by in the given parameters.

validate_pagination(params, opts)

Validates the pagination parameters in the given parameters.

validate_params(query_or_resource, params, opts \\\ [])

validate_scopes(params, ash_pagify_scopes, default_scopes \\\ nil, opts \\\ [])

Validates the scopes in the given parameters.

validate_search(params, opts)

Validates the search attribute in the given parameters.

#  __ Functions

__ Link to this function

# validate_filter_form(params, opts)

[ __ View Source ](external_link)
    
    
    @spec validate_filter_form([map](external_link)(), [Keyword.t](external_link)()) :: [map](external_link)()

Validates the form filter in the given parameters.

Uses `AshPagify.FormFilter.validate/3` to parse the form filter.

If `replace_invalid_params?` is `true`, invalid filter_form parameters are removed and an error is added to the `:errors` key in the returned map. If `replace_invalid_params?` is `false`, invalid filter_form parameters are not removed and an error is added to the `:errors` key in the returned map.

If the `:filter_form` key is `nil`, it is returned as is.

##  __ Examples
    
    
    iex> AshPagify.Validation.validate_filter_form(%{}, for: Post)
    %{}
    
    iex> AshPagify.Validation.validate_filter_form(%{filter_form: nil}, for: Post)
    %{filter_form: nil}
    
    iex> %{filter_form: filter_form} = AshPagify.Validation.validate_filter_form(%{filter_form: %{}}, for: Post)
    iex> filter_form
    %{}
    
    iex> %{filter_form: filter_form} = AshPagify.Validation.validate_filter_form(%{filter_form: %{}}, for: Post, replace_invalid_params?: true)
    iex> filter_form
    %{}
    
    iex> %{filter_form: filter_form, errors: errors} = AshPagify.Validation.validate_filter_form(%{filter_form:  %{"field" => "non_existent", "operator" => "eq", "value" => "Post 1"}}, for: Post)
    iex> filter_form
    %{"field" => "non_existent", "operator" => "eq", "value" => "Post 1"}
    iex> errors
    [filter_form: [{:field, {"No such field non_existent", []}}]]
    
    iex> %{filter_form: filter_form, errors: errors} = AshPagify.Validation.validate_filter_form(%{filter_form:  %{"field" => "non_existent", "operator" => "eq", "value" => "Post 1"}}, for: Post, replace_invalid_params?: true)
    iex> filter_form
    %{}
    iex> errors
    [filter_form: [{:field, {"No such field non_existent", []}}]]

__ Link to this function

# validate_filters(params, opts)

[ __ View Source ](external_link)
    
    
    @spec validate_filters([map](external_link)(), [Keyword.t](external_link)()) :: [map](external_link)()

Validates the filters in the given parameters.

If `replace_invalid_params?` is `true`, invalid filters are removed and an error is added to the `:errors` key in the returned map. If `replace_invalid_params?` is `false`, invalid filters are not removed and an error is added to the `:errors` key in the returned map. Only the first error is added to the `:errors` key.

If the `:filters` key is `nil`, it is returned as is.

##  __ Examples
    
    
    iex> AshPagify.Validation.validate_filters(%{}, for: Post)
    %{}
    
    iex> AshPagify.Validation.validate_filters(%{filters: nil}, for: Post)
    %{filters: nil}
    
    iex> %{filters: filters} = AshPagify.Validation.validate_filters(%{filters: [%{name: "Post 1"}]}, for: Post)
    iex> filters
    #Ash.Filter<name == "Post 1">
    
    iex> %{filters: filters, errors: errors} = AshPagify.Validation.validate_filters(%{filters: 1}, for: Post, replace_invalid_params?: true)
    iex> filters
    nil
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      filters: [
        %Ash.Error.Query.InvalidFilterValue{value: 1}
      ]
    ]
    
    iex> %{filters: filters, errors: errors} = AshPagify.Validation.validate_filters(%{filters: 1}, for: Post)
    iex> filters
    1
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      filters: [
        %Ash.Error.Query.InvalidFilterValue{value: 1}
      ]
    ]

__ Link to this function

# validate_order_by(params, opts)

[ __ View Source ](external_link)
    
    
    @spec validate_order_by([map](external_link)(), [Keyword.t](external_link)()) :: [map](external_link)()

Validates the order by in the given parameters.

If `replace_invalid_params?` is `true`, invalid order by values are removed and an error is added to the `:errors` key in the returned map. If `replace_invalid_params?` is `false`, invalid order by values are not removed and an error is added to the `:errors` key in the returned map. Only the first error is added to the `:errors` key.

If the `:order_by` key is `nil`, it is returned as is.

##  __ Examples
    
    
    iex> AshPagify.Validation.validate_order_by(%{}, for: Post)
    %{}
    
    iex> AshPagify.Validation.validate_order_by(%{order_by: nil}, for: Post)
    %{order_by: nil}
    
    iex> %{order_by: order_by} = AshPagify.Validation.validate_order_by(%{order_by: ["name"]}, for: Post)
    iex> order_by
    [name: :asc]
    
    iex> %{order_by: order_by} = AshPagify.Validation.validate_order_by(%{order_by: "++name"}, for: Post)
    iex> order_by
    [name: :asc_nils_first]
    
    iex> %{order_by: order_by} = AshPagify.Validation.validate_order_by(%{order_by: "name,--comments_count"}, for: Post)
    iex> order_by
    [name: :asc, comments_count: :desc_nils_last]
    
    iex> %{order_by: order_by, errors: errors} = AshPagify.Validation.validate_order_by(%{order_by: "--name,non_existent"}, for: Post, replace_invalid_params?: true)
    iex> order_by
    [name: :desc_nils_last]
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      order_by: [
        %Ash.Error.Query.NoSuchField{field: "non_existent", resource: Post}
      ]
    ]

__ Link to this function

# validate_pagination(params, opts)

[ __ View Source ](external_link)
    
    
    @spec validate_pagination([map](external_link)(), [Keyword.t](external_link)()) :: [map](external_link)()

Validates the pagination parameters in the given parameters.

If `replace_invalid_params?` is `true`, invalid pagination parameters are removed / replaced and an error is added to the `:errors` key in the returned map. If `replace_invalid_params?` is `false`, invalid pagination parameters are not removed and an error is added to the `:errors` key in the returned map.

If the `:limit` key is `nil`, the default_limit value is applied.

If the `:offset` key is `nil`, it is returned as is.

##  __ Examples
    
    
    iex> AshPagify.Validation.validate_pagination(%{}, for: Post)
    %{limit: 15, offset: 0}
    
    iex> AshPagify.Validation.validate_pagination(%{limit: nil}, for: Post)
    %{limit: 15, offset: 0}
    
    iex> %{limit: limit} = AshPagify.Validation.validate_pagination(%{limit: 10}, for: Post)
    iex> limit
    10
    
    iex> %{limit: limit, errors: errors} = AshPagify.Validation.validate_pagination(%{limit: 0}, for: Post, replace_invalid_params?: true)
    iex> limit
    15
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      limit: [
        %Ash.Error.Query.InvalidLimit{limit: 0}
      ]
    ]
    
    iex> %{limit: limit} = AshPagify.Validation.validate_pagination(%{limit: 100}, for: Post)
    iex> limit
    100
    
    iex> %{limit: limit, errors: errors} = AshPagify.Validation.validate_pagination(%{limit: -1}, for: Post, replace_invalid_params?: true)
    iex> limit
    15
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      limit: [
        %Ash.Error.Query.InvalidLimit{limit: -1}
      ]
    ]
    
    iex> %{offset: offset} = AshPagify.Validation.validate_pagination(%{offset: 10}, for: Post)
    iex> offset
    10
    
    iex> %{offset: offset, errors: errors} = AshPagify.Validation.validate_pagination(%{offset: -1}, for: Post, replace_invalid_params?: true)
    iex> offset
    0
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      offset: [
        %Ash.Error.Query.InvalidOffset{offset: -1}
      ]
    ]
    
    iex> %{offset: offset, errors: errors} = AshPagify.Validation.validate_pagination(%{offset: -1}, for: Post)
    iex> offset
    -1
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      offset: [
        %Ash.Error.Query.InvalidOffset{offset: -1}
      ]
    ]

__ Link to this function

# validate_params(query_or_resource, params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec validate_params([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), [map](external_link)(), [Keyword.t](external_link)()) ::
      {:ok, [AshPagify.t](external_link)()} | {:error, [any](external_link)(), [map](external_link)()}

__ Link to this function

# validate_scopes(params, ash_pagify_scopes, default_scopes \\\ nil, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec validate_scopes([map](external_link)(), [map](external_link)(), [map](external_link)() | nil, [Keyword.t](external_link)()) :: [map](external_link)()

Validates the scopes in the given parameters.

If `replace_invalid_params?` is `true`, invalid scopes are removed and an error is added to the `:errors` key in the returned map. If `replace_invalid_params?` is `false`, invalid scopes are not removed and an error is added to the `:errors` key in the returned map. Only the first error is added to the `:errors` key.

If the `:scopes` key is `nil`, it is returned as is.

##  __ Examples
    
    
    iex> ash_pagify_scopes = %{}
    iex> AshPagify.Validation.validate_scopes(%{}, ash_pagify_scopes)
    %{}
    
    iex> ash_pagify_scopes = %{}
    iex> AshPagify.Validation.validate_scopes(%{scopes: nil}, ash_pagify_scopes)
    %{scopes: nil}
    
    iex> ash_pagify_scopes = %{}
    iex> %{scopes: scopes} = AshPagify.Validation.validate_scopes(%{scopes: %{role: :admin}}, ash_pagify_scopes)
    iex> scopes
    %{role: :admin}
    
    iex> ash_pagify_scopes = %{}
    iex> %{scopes: scopes, errors: errors} = AshPagify.Validation.validate_scopes(%{scopes: %{role: :non_existent}}, ash_pagify_scopes)
    iex> scopes
    %{role: :non_existent}
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      scopes: [
        %AshPagify.Error.Query.NoSuchScope{group: :role, name: :non_existent}
      ]
    ]
    
    iex> ash_pagify_scopes = %{}
    iex> %{scopes: scopes, errors: errors} = AshPagify.Validation.validate_scopes(%{scopes: %{role: :non_existent}}, ash_pagify_scopes, nil, replace_invalid_params?: true)
    iex> scopes
    nil
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      scopes: [
        %AshPagify.Error.Query.NoSuchScope{group: :role, name: :non_existent}
      ]
    ]
    
    iex> ash_pagify_scopes = %{}
    iex> %{scopes: scopes, errors: errors} = AshPagify.Validation.validate_scopes(%{scopes: %{non_existent: :admin}}, ash_pagify_scopes)
    iex> scopes
    %{non_existent: :admin}
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      scopes: [
        %AshPagify.Error.Query.NoSuchScope{group: :non_existent, name: :admin}
      ]
    ]
    
    iex> ash_pagify_scopes = %{}
    iex> %{scopes: scopes, errors: errors} = AshPagify.Validation.validate_scopes(%{scopes: %{non_existent: :admin}}, ash_pagify_scopes, nil, replace_invalid_params?: true)
    iex> scopes
    nil
    iex> AshPagify.Error.clear_stacktrace(errors)
    [
      scopes: [
        %AshPagify.Error.Query.NoSuchScope{group: :non_existent, name: :admin}
      ]
    ]

__ Link to this function

# validate_search(params, opts)

[ __ View Source ](external_link)
    
    
    @spec validate_search([map](external_link)(), [Keyword.t](external_link)()) :: [map](external_link)()

Validates the search attribute in the given parameters.

In case full_text_search is configured, we validate if the given search attribute is a valid full text search attribute.

If `replace_invalid_params?` is `true`, invalid search parameters are removed and an error is added to the `:errors` key in the returned map. If `replace_invalid_params?` is `false`, invalid search parameters are not removed and an error is added to the `:errors` key in the returned map. Only the first error is added to the `:errors` key.

If the `:search` key is `nil` or an empty string, it is returned as is.
