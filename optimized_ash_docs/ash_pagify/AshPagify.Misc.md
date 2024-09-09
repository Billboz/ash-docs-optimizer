# AshPagify.Misc — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Misc (ash_pagify v1.0.2)
- __ Summary
  - Functions
- __ Functions
- atomize_keys(map_or_struct, opts \\\ [])
  - __ Example
- coerce_maybe_empty_map(maybe_empty_map)
  - __ Example
- deep_merge(left, right)
- get_global_opts(component)
- list_merge(left, right)
- map_merge(left, right)
- maybe_put(params, key, value, default \\\ nil)
- maybe_put_compiled_ash_pagify_scopes(query_or_resource, opts \\\ [])
  - __ Example
- maybe_put_scopes(keywords, ash_pagify, opts \\\ [])
- remove_nil_values(map_or_struct)
  - __ Example
- stringify_keys(map_or_struct, opts \\\ [])
  - __ Example
- unique_keywords(keyword_list)
  - __ Example
- walk(map_or_list, serializer \\\ &default_serializer/2, opts \\\ [], current_depth \\\ 1)
  - __ Example

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Misc (ash_pagify v1.0.2)

Miscellaneous functions for AshPagify.

#  __ Summary

##  Functions

atomize_keys(map_or_struct, opts \\\ [])

Convert map string keys to :atom keys. This is useful when you have a map that was created from JSON or other external source and you want to convert the keys to atoms.

coerce_maybe_empty_map(maybe_empty_map)

Coerce a maybe empty map to nil if it is empty.

deep_merge(left, right)

Deeply merges two maps or lists, preferring values from the right map or list.

get_global_opts(component)

Returns the global opts derived from a function referenced in the application environment.

list_merge(left, right)

Deep merges two lists, preferring values from the right list.

map_merge(left, right)

Deeply merges two maps, preferring values from the right map.

maybe_put(params, key, value, default \\\ nil)

Puts a `value` under `key` only if the value is not `nil`, `[]`, `""`, or `%{}`.

maybe_put_compiled_ash_pagify_scopes(query_or_resource, opts \\\ [])

Put compiled ash_pagify scopes into the options if they are not already there.

maybe_put_scopes(keywords, ash_pagify, opts \\\ [])

Puts the scopes params of a AshPagify struct into a keyword list only if they don't match the defaults either passed as last argument or loaded on the fly.

remove_nil_values(map_or_struct)

Remove nil values from a map or struct. Does not work with nested maps.

stringify_keys(map_or_struct, opts \\\ [])

Convert map :atom keys to string keys.

unique_keywords(keyword_list)

Returns a list of unique keywords from a list of keywords while preserving the order of the first occurrence of each keyword.

walk(map_or_list, serializer \\\ &default_serializer/2, opts \\\ [], current_depth \\\ 1)

Walks a map or list and applies a serializer to the keys.

#  __ Functions

__ Link to this function

# atomize_keys(map_or_struct, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec atomize_keys([map](external_link)() | [struct](external_link)(), [Keyword.t](external_link)()) :: [map](external_link)() | [struct](external_link)()

Convert map string keys to :atom keys. This is useful when you have a map that was created from JSON or other external source and you want to convert the keys to atoms.

You can specify a list of keys to convert or a depth to which to convert keys. If you specify a depth of 1, only the top level keys will be converted. If you specify a depth of 2, the top level keys and the keys of any maps in the top level will be converted. And so on.

If you set the existing? option to true, the function will use the [`String.to_existing_atom/1`](external_link) function to convert the keys.

List of options:

  * `keys`: A list of keys to convert. If a key is not in the list, it will not be converted. Default is an empty list and all keys will be converted.
  * `depth`: The depth to which to convert keys. Default is nil and all keys will be converted.
  * `existing?`: If true, the function will use [`String.to_existing_atom/1`](external_link) to convert the keys. Default is false.



##  __ Example
    
    
    iex> AshPagify.Misc.atomize_keys(%{"a" => 1, "b" => 2})
    %{a: 1, b: 2}
    
    iex> AshPagify.Misc.atomize_keys(%{"a" => 1, "b" => %{"c" => 3}})
    %{a: 1, b: %{c: 3}}
    
    iex> AshPagify.Misc.atomize_keys(%{"a" => 1, "b" => %{"c" => 3}}, keys: ["b"])
    %{"a" => 1, b: %{"c" => 3}}
    
    iex> AshPagify.Misc.atomize_keys(%{"a" => 1, "b" => %{"c" => 3}}, keys: ["b", "c"])
    %{"a" => 1, b: %{c: 3}}
    
    iex> AshPagify.Misc.atomize_keys(%{"a" => 1, "b" => %{"c" => 3}}, keys: ["b", "d"], depth: 1)
    %{"a" => 1, b: %{"c" => 3}}
    
    iex> AshPagify.Misc.atomize_keys(%{"a" => 1, "b" => %{"c" => 3}}, keys: ["b", "c"], depth: 2)
    %{"a" => 1, b: %{c: 3}}

__ Link to this function

# coerce_maybe_empty_map(maybe_empty_map)

[ __ View Source ](external_link)
    
    
    @spec coerce_maybe_empty_map([any](external_link)()) :: [map](external_link)() | nil

Coerce a maybe empty map to nil if it is empty.

##  __ Example
    
    
    iex> AshPagify.Misc.coerce_maybe_empty_map(%{})
    nil
    
    iex> AshPagify.Misc.coerce_maybe_empty_map(%{a: 1})
    %{a: 1}
    
    iex> AshPagify.Misc.coerce_maybe_empty_map(nil)
    nil

__ Link to this function

# deep_merge(left, right)

[ __ View Source ](external_link)
    
    
    @spec deep_merge([map](external_link)() | [list](external_link)(), [map](external_link)() | [list](external_link)()) :: [map](external_link)() | [list](external_link)()

Deeply merges two maps or lists, preferring values from the right map or list.

If a key exists in both maps or lists, and both values are maps or lists as well, these can be merged recursively. If a key exists in both maps or lists, but at least one of the values is NOT a map or list, we fall back to standard merge behavior, preferring the value on the right.

Example:
    
    
    iex> AshPagify.Misc.deep_merge(%{a: 1, b: %{c: 2}}, %{b: %{d: 3}})
    %{a: 1, b: %{c: 2, d: 3}}

one level of maps without conflict
    
    
    iex> AshPagify.Misc.deep_merge(%{a: 1}, %{b: 2})
    %{a: 1, b: 2}

two levels of maps without conflict
    
    
    iex> AshPagify.Misc.deep_merge(%{a: [%{b: 1}]}, %{a: [%{c: 3}]})
    %{a: [%{b: 1}, %{c: 3}]}

three levels of maps without conflict
    
    
    iex> AshPagify.Misc.deep_merge(%{a: %{b: %{c: 1}}}, %{a: %{b: %{d: 2}}})
    %{a: %{b: %{c: 1, d: 2}}}

non-map value in left
    
    
    iex> AshPagify.Misc.deep_merge(%{a: 1}, %{a: %{b: 2}})
    %{a: %{b:  2}}

non-map value in right
    
    
    iex> AshPagify.Misc.deep_merge(%{a: %{b: 1}}, %{a: 2})
    %{a: 2}

non-map value in both
    
    
    iex> AshPagify.Misc.deep_merge(%{a: 1}, %{a: 2})
    %{a: 2}

map of list
    
    
    iex> AshPagify.Misc.deep_merge(%{a: [1, 2]}, %{a: [2, 3]})
    %{a: [1, 2, 3]}

map of list of map
    
    
    iex> AshPagify.Misc.deep_merge(%{a: [%{b: 1}, %{c: 2}]}, %{a: [%{c: 3}, %{d: 4}]})
    %{a: [%{b: 1}, %{c: 3}, %{d: 4}]}

map of different types
    
    
    iex> AshPagify.Misc.deep_merge(%{a: [1, 2]}, %{a: %{b: 2}})
    %{a: %{b: 2}}

map of list of different types
    
    
    iex> AshPagify.Misc.deep_merge(%{a: [1, 2]}, %{a: [%{b: 2}]})
    %{a: [1, 2, %{b: 2}]}

__ Link to this function

# get_global_opts(component)

[ __ View Source ](external_link)
    
    
    @spec get_global_opts([atom](external_link)()) :: [keyword](external_link)()

Returns the global opts derived from a function referenced in the application environment.

__ Link to this function

# list_merge(left, right)

[ __ View Source ](external_link)
    
    
    @spec list_merge([keyword](external_link)(), [keyword](external_link)()) :: [keyword](external_link)()

Deep merges two lists, preferring values from the right list.

If a key exists in both lists, and both values are lists as well, these can be merged recursively. If a key exists in both lists, but at least one of the values is NOT a list, we fall back to standard merge behavior, preferring the value on the right.

Example:
    
    
    iex> list_merge(
    ...>   [aria: [role: "navigation"]],
    ...>   [aria: [label: "pagination"]]
    ...> )
    [aria: [role: "navigation", label: "pagination"]]
    
    iex> list_merge(
    ...>   [class: "a"],
    ...>   [class: "b"]
    ...> )
    [class: "b"]

__ Link to this function

# map_merge(left, right)

[ __ View Source ](external_link)
    
    
    @spec map_merge([map](external_link)(), [map](external_link)()) :: [map](external_link)()

Deeply merges two maps, preferring values from the right map.

If a key exists in both maps, and both values are maps as well, these can be merged recursively. If a key exists in both maps, but at least one of the values is NOT a map, we fall back to standard merge behavior, preferring the value on the right.

Example:
    
    
    iex> AshPagify.Misc.map_merge(%{a: 1, b: %{c: 2}}, %{b: %{d: 3}})
    %{a: 1, b: %{c: 2, d: 3}}

one level of maps without conflict
    
    
    iex> AshPagify.Misc.map_merge(%{a: 1}, %{b: 2})
    %{a: 1, b: 2}

two levels of maps without conflict
    
    
    iex> AshPagify.Misc.map_merge(%{a: %{b: 1}}, %{a: %{c: 3}})
    %{a: %{b: 1, c: 3}}

three levels of maps without conflict
    
    
    iex> AshPagify.Misc.map_merge(%{a: %{b: %{c: 1}}}, %{a: %{b: %{d: 2}}})
    %{a: %{b: %{c: 1, d: 2}}}

non-map value in left
    
    
    iex> AshPagify.Misc.map_merge(%{a: 1}, %{a: %{b: 2}})
    %{a: %{b:  2}}

non-map value in right
    
    
    iex> AshPagify.Misc.map_merge(%{a: %{b: 1}}, %{a: 2})
    %{a: 2}

non-map value in both
    
    
    iex> AshPagify.Misc.map_merge(%{a: 1}, %{a: 2})
    %{a: 2}

__ Link to this function

# maybe_put(params, key, value, default \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec maybe_put([Keyword.t](external_link)(), [atom](external_link)(), [any](external_link)(), [any](external_link)()) :: [keyword](external_link)()

Puts a `value` under `key` only if the value is not `nil`, `[]`, `""`, or `%{}`.

If a `:default` value is passed, it only puts the value into the list if the value does not match the default value.
    
    
    iex> maybe_put([], :a, "b")
    [a: "b"]
    
    iex> maybe_put([], :a, nil)
    []
    
    iex> maybe_put([], :a, [])
    []
    
    iex> maybe_put([], :a, %{})
    []
    
    iex> maybe_put([], :a, "")
    []
    
    iex> maybe_put([], :a, "a", "a")
    []
    
    iex> maybe_put([], :a, "a", "b")
    [a: "a"]

__ Link to this function

# maybe_put_compiled_ash_pagify_scopes(query_or_resource, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec maybe_put_compiled_ash_pagify_scopes(
      [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(),
      [Keyword.t](external_link)()
    ) :: [Keyword.t](external_link)()

Put compiled ash_pagify scopes into the options if they are not already there.

##  __ Example
    
    
    iex> alias AshPagify.Factory.Post
    iex> AshPagify.Misc.maybe_put_compiled_ash_pagify_scopes(Post)
    [
      __compiled_ash_pagify_default_scopes: %{status: :all},
      __compiled_ash_pagify_scopes: %{
        role: [
          %{name: :admin, filter: %{author: "John"}},
          %{name: :user, filter: %{author: "Doe"}}
        ],
        status: [
          %{name: :all, filter: nil, default?: true},
          %{name: :active, filter: %{age: %{lt: 10}}},
          %{name: :inactive, filter: %{age: %{gte: 10}}}
        ]
      }
    ]

Or with default scopes passed as opts
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify_scopes = %{role: [%{name: :user, filter: %{author: "Doe"}, default?: true}]}
    iex> AshPagify.Misc.maybe_put_compiled_ash_pagify_scopes(Post, [ash_pagify_scopes: ash_pagify_scopes])
    [
      __compiled_ash_pagify_default_scopes: %{role: :user, status: :all},
      __compiled_ash_pagify_scopes: %{
        role: [
          %{name: :admin, filter: %{author: "John"}},
          %{name: :user, filter: %{author: "Doe"}, default?: true}
        ],
        status: [
          %{name: :all, filter: nil, default?: true},
          %{name: :active, filter: %{age: %{lt: 10}}},
          %{name: :inactive, filter: %{age: %{gte: 10}}}
        ]
      },
      ash_pagify_scopes: ash_pagify_scopes
    ]

__ Link to this function

# maybe_put_scopes(keywords, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec maybe_put_scopes([Keyword.t](external_link)(), [AshPagify.t](external_link)(), [Keyword.t](external_link)()) :: [Keyword.t](external_link)()

Puts the scopes params of a AshPagify struct into a keyword list only if they don't match the defaults either passed as last argument or loaded on the fly.

Example:
    
    
    iex> maybe_put_scopes([], %AshPagify{scopes: %{status: :inactive}}, default_scopes: %{status: :active})
    [scopes: %{status: :inactive}]
    
    iex> maybe_put_scopes([], %AshPagify{scopes: %{status: :active}}, default_scopes: %{status: :active})
    []
    
    iex> alias AshPagify.Factory.Post
    iex> maybe_put_scopes([], %AshPagify{scopes: %{status: :active}}, for: Post)
    [scopes: %{status: :active}]

__ Link to this function

# remove_nil_values(map_or_struct)

[ __ View Source ](external_link)

Remove nil values from a map or struct. Does not work with nested maps.

##  __ Example
    
    
    iex> AshPagify.Misc.remove_nil_values(%{a: 1, b: nil, c: 3})
    %{a: 1, c: 3}
    
    iex> AshPagify.Misc.remove_nil_values(%{a: 1, b: %{c: nil, d: 4}})
    %{a: 1, b: %{c: nil, d: 4}}

__ Link to this function

# stringify_keys(map_or_struct, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec stringify_keys([map](external_link)() | [struct](external_link)(), [Keyword.t](external_link)()) :: [map](external_link)() | [struct](external_link)()

Convert map :atom keys to string keys.

You can specify a list of keys to convert or a depth to which to convert keys. If you specify a depth of 1, only the top level keys will be converted. If you specify a depth of 2, the top level keys and the keys of any maps in the top level will be converted. And so on.

List of options:

  * `keys`: A list of keys to convert. If a key is not in the list, it will not be converted. Default is an empty list and all keys will be converted.
  * `depth`: The depth to which to convert keys. Default is nil and all keys will be converted.



##  __ Example
    
    
    iex> AshPagify.Misc.stringify_keys(%{a: 1, b: 2})
    %{"a" => 1, "b" => 2}
    
    iex> AshPagify.Misc.stringify_keys(%{a: 1, b: %{c: 3}})
    %{"a" => 1, "b" => %{"c" => 3}}
    
    iex> AshPagify.Misc.stringify_keys(%{a: 1, b: %{c: 3}}, keys: [:b])
    %{:a => 1, "b" => %{c: 3}}
    
    iex> AshPagify.Misc.stringify_keys(%{a: 1, b: %{c: 3}}, keys: [:b, :c])
    %{:a => 1, "b" => %{"c" => 3}}
    
    iex> AshPagify.Misc.stringify_keys(%{a: 1, b: %{c: 3}}, keys: [:b, :d], depth: 1)
    %{:a => 1, "b" => %{c: 3}}
    
    iex> AshPagify.Misc.stringify_keys(%{a: 1, b: %{c: 3}}, keys: [:b, :c], depth: 2)
    %{:a => 1, "b" => %{"c" => 3}}

__ Link to this function

# unique_keywords(keyword_list)

[ __ View Source ](external_link)

Returns a list of unique keywords from a list of keywords while preserving the order of the first occurrence of each keyword.

##  __ Example
    
    
    iex> AshPagify.Misc.unique_keywords([:a, :b, :a, :c, :b])
    [:a, :b, :c]
    
    iex> AshPagify.Misc.unique_keywords([a: 1, b: 2, a: 3, c: 4, b: 5])
    [a: 1, b: 2, c: 4]

__ Link to this function

# walk(map_or_list, serializer \\\ &default_serializer/2, opts \\\ [], current_depth \\\ 1)

[ __ View Source ](external_link)
    
    
    @spec walk([map](external_link)() | [list](external_link)(), ([term](external_link)(), [Keyword.t](external_link)() -> [term](external_link)()), [Keyword.t](external_link)(), [integer](external_link)()) ::
      [term](external_link)()

Walks a map or list and applies a serializer to the keys.

The serializer function receives the key and the opts. The serializer function should return the new key.

The walk function will walk the map or list and apply the serializer to the keys. If the depth is specified and it is reached, the serializer will not be applied to the keys at that depth.

The serializer function can be used to convert the keys to atoms, strings, or any other format.

##  __ Example
    
    
    iex> walk(%{"a" => 1, "b" => %{"c" => 3}}, fn key, _opts -> String.to_atom(key) end)
    %{a: 1, b: %{c: 3}}
    
    iex> walk(%{"a" => 1, "b" => %{"c" => 3}}, fn key, _opts -> String.to_atom(key) end, depth: 1)
    %{b: %{"c" => 3}, a: 1}
