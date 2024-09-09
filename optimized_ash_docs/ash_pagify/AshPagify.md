# AshPagify — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify (ash_pagify v1.0.2)
  - __ Examples
  - __ Features
  - __ Overview
  - __ Installation
  - __ Global configuration
  - __ Resource configuration
  - __ LiveView configuration
    - __ LiveView streams
    - __ Replace invalid params
    - __ Custom read action
  - __ Full-text search
  - __ Sortable tables and pagination
  - __ Parameter format
  - __ Search query
  - __ Pagination
  - __ Scoping
  - __ Filter forms
  - __ Ordering
  - __ Internal parameters
  - __ Release Management
- __ Summary
  - Types
  - Functions
- __ Types
- option()
  - __ Options
  - __ Look-up order
- order_by()
- scope()
  - __ Fields
- t()
    - __ Fields
- __ Functions
- active_scope?(ash_pagify, scope)
  - __ Examples
- all(query_or_resource, ash_pagify, opts \\\ [], args \\\ nil)
  - __ Examples
- coerce_order_by(order_by)
  - __ Examples
- concat_sort(list, acc \\\ [])
- count(query_or_resource, ash_pagify, opts \\\ [])
- current_order(arg1, field)
  - __ Examples
- extract_full_text_search(filters_map)
- filter(q, ash_pagify)
  - __ Examples
- filter_form(q, ash_pagify)
  - __ Examples
- filter_form_to_filter_map(resource, filter_form)
  - __ Examples
- get_index(order_by, field)
- get_option(key, opts \\\ [], default \\\ nil)
  - __ Examples for `:ash_pagify_scopes`
- get_order_direction(order_by, index)
- merge_filters(ash_pagify, filters)
  - __ Examples
- meta(page, ash_pagify, opts \\\ [])
  - __ Examples
- order_by(q, ash_pagify)
  - __ Examples
- page(ash_pagify, page \\\ [count: true])
  - __ Examples
- paginate(query_or_resource, ash_pagify, opts \\\ [])
  - __ Examples
- parse(query_or_resource, ash_pagify, opts \\\ [])
  - __ Examples
- prefix_to_order(arg1)
  - __ Examples
- push_order(ash_pagify, field, opts \\\ [])
  - __ Examples
- query(q, ash_pagify, opts \\\ [])
  - __ Examples
- query_for_filters_map(query_or_resource, filters_map, opts \\\ [])
  - __ Examples
- query_to_filters_map(query_or_resource, ash_pagify, opts \\\ [])
  - __ Examples
- reset_filter_form(ash_pagify)
  - __ Example
- reset_filters(ash_pagify)
  - __ Example
- reset_order(ash_pagify)
  - __ Example
- run(query_or_resource, ash_pagify, opts \\\ [], args \\\ nil)
  - __ Examples
- scope(q, ash_pagify, opts \\\ [])
  - __ Examples
- search(q, ash_pagify, opts \\\ [])
- set_filter_form(meta, filter_form, opts \\\ [])
  - __ Examples
- set_limit(ash_pagify, limit, opts \\\ [])
- set_offset(ash_pagify, offset)
- set_scope(ash_pagify, scope, opts \\\ [])
  - __ Examples
- set_search(ash_pagify, search, opts \\\ [])
  - __ Examples
- set_tsvector(tsvector, opts \\\ [])
  - __ Examples
- to_next_offset(ash_pagify, total_count \\\ nil)
  - __ Examples
- to_previous_offset(ash_pagify)
  - __ Examples
- validate(query_or_resource, map_or_ash_pagify, opts \\\ [])
  - __ Examples
- validate!(query_or_resource, map_or_ash_pagify, opts \\\ [])
- validate_and_run(query_or_resource, map_or_ash_pagify, opts \\\ [], args \\\ nil)
  - __ Examples
  - __ Options
- validate_and_run!(query_or_resource, map_or_ash_pagify, opts \\\ [], args \\\ nil)
- validated_query(query_or_resource, map_or_ash_pagify, opts \\\ [])
  - __ Examples

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify (ash_pagify v1.0.2)

AshPagify is an Elixir library designed to easily add full-text search, scoping, filtering, ordering, and pagination APIs for the [Ash Framework](external_link).

It takes concepts from `Flop`, `Flop.Phoenix`, [`Ash`](3.3.3/Ash.html) and [`AshPhoenix.FilterForm`](external_link) and combines them into a single library.

It's main purpose is to provide functions to convert user input for full-text search, scoping, filtering, ordering, and pagination into the following data structures:

  1. [`AshPagify.Meta`](external_link) a struct holding information of a db query result.
  2. query parameters for url building and to restore the query parameters from the url.
  3. a basic map syntax which for example can be stored in a session or database (and restore the information from it).



Further, it provides headless components to build sortable tables and pagination links in your Phoenix LiveView with the [`AshPagify.Components`](external_link) module. Finally, it provides a simple way to build filter forms for your LiveView with the [`AshPagify.FilterForm`](external_link) struct.

##  __ Examples
    
    
    ash_pagify = %AshPagify{
      search: "Post 1",
      scopes: %{role: :admin},
      filters: %{"comments_count" => %{"gt" => 2}},
      filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"},
      order_by: :name,
      limit: 10,
      offset: 0
    }
    opts = [full_text_search: [tsvector: :custom_tsvector]]
    
    AshPagify.query_to_filters_map(Post, ash_pagify, opts).filters
    %{
      "__full_text_search" => %{
        "search" => "Post 1",
        "tsvector" => "custom_tsvector"
      },
      "and" => [
        %{"comments_count" => %{"gt" => 2}},
        %{"name" => %{"eq" => "Post 1"}},
        %{"author" => "John"}
      ]
    }
    
    AshPagify.Components.build_path("/posts", ash_pagify, opts)
    "/posts?search=Post+1&limit=10&scopes[role]=admin&filter_form[field]=name&filter_form[operator]=eq&filter_form[value]=Post+1&order_by[]=name"

##  __ Features

  * **Full-text search** : AshPagify supports full-text search using the `tsvector` column in PostgreSQL.
  * **Offset-based pagination** : AshPagify uses `OFFSET` and `LIMIT` to paginate your queries.
  * **Scoping** : Apply predefined filters to your queries using a simple map syntax.
  * **Filtering** : Apply user-input filters to your queries using a simple map syntax. Allows complex data filtering using multiple conditions, operators, and fields. Also incooperates with [`AshPhoenix.FilterForm`](external_link) to provide a simple way to build complex filter user interfaces.
  * **Sorting** : Sort your queries by multiple fields and any directions.
  * **UI helpers and URL builders** : AshPagify provides a [`AshPagify.Meta`](external_link) struct with information about the current page, total pages, and more. This information can be used to build pagination links in your UI. Further, [`AshPagify`](external_link) provides the [`AshPagify.Components`](external_link) module with headless table and pagination components to easily build sortable tables and pagination links in your Phoenix LiveView. The [`AshPagify.FilterForm`](external_link) module provides a simple way to build filter forms for your LiveView.



##  __ Overview

  * Examples
  * Features
  * Installation
  * Global configuration
  * Resource configuration
  * LiveView configuration
    * LiveView streams
    * Replace invalid params
    * Custom read action
  * Full-text search
  * Sortable tables and pagination
  * Parameter format
    * Search query
    * Pagination
    * Scoping
    * Filter forms
    * Ordering
    * Internal parameters
  * Release Management



##  __ Installation

AshPagify requires the following dependencies to be installed:

  * [`Ash`](3.3.3/Ash.html) \- The main library for building queries.
  * `ash_phoenix` \- The Phoenix integration for Ash.
  * [`AshPostgres`](external_link) \- The PostgreSQL integration for Ash.
  * `AshUUID` \- The UUID integration for Ash.
  * [`Phoenix`](external_link) \- The Phoenix web framework.



Then simply add `ash_pagify` to your list of dependencies in `mix.exs` and run [`mix deps.get`](external_link):
    
    
    def deps do
      [
        {:ash_pagify, "~> 1.0.2"}
      ]
    end

##  __ Global configuration

You can set some global options like the default_limit via the application environment. All global options can be overridden by passing them directly to the functions.
    
    
    config :ash_pagify,
      default_limit: 50,
      max_limit: 1000,
      replace_invalid_params?: true,
      ash_pagify_scopes: %{
        role: [
          %{name: :all, filter: nil},
          %{name: :admin, filter: %{role: "admin"}},
          %{name: :user, filter: %{role: "user"}}
        ]
      },
      reset_on_filter?: true,
      full_text_search: [
        negation: true,
        prefix: true,
        any_word: false
      ]

See `AshPagify.option/0` for a description of all available options.

##  __ Resource configuration

You need to add the `pagination macro` call to the action of the resource that you want to be paginated. The macro call is used to set the default limit, offset and other options for the pagination.

Furthermore, you can define scopes in the resource module. Scopes are predefined filters that can be applied to the query.

We allow full-text search using the `tsvector` column in PostgreSQL. To enable full-text search, you need to either `use AshPagify.Tsearch` in your module or implement the `full_text_search`, `full_text_search_rank`, `tsquery`, and `tsvector` calculations as described in [`AshPagify.Tsearch`](external_link) (tsvector calculation is always mandatory).
    
    
    defmodule YourApp.Resource.Post
      # only required if you want to implement full-text search
      use AshPagify.Tsearch
      require Ash.Expr
    
      @default_limit 15
      def default_limit, do: @default_limit
    
      @ash_pagify_scopes %{
        role: [
          %{name: :all, filter: nil},
          %{name: :admin, filter: %{author: "John"}},
          %{name: :user, filter: %{author: "Doe"}}
        ]
      }
      def ash_pagify_scopes, do: @ash_pagify_scopes
    
      actions do
        read :read do
          #...
          pagination offset?: true,
                    default_limit: @default_limit,
                    countable: true,
                    required?: false
        end
      end
    
      calculations do
        # provide your default `tsvector` calculation for full-text search
        calculate :tsvector,
                  AshPostgres.Tsvector,
                  expr(
                    fragment(
                      "to_tsvector('simple', coalesce(?, '')) || to_tsvector('simple', coalesce(?, ''))",
                      name,
                      title
                    )
                  ),
                  public?: true
      end
      #...
    end

##  __ LiveView configuration

In your LiveView, fetch the data and assign it alongside the meta data to the socket.
    
    
    defmodule YourAppWeb.PostLive.IndexLive do
      use YourAppWeb, :live_view
    
      alias YourApp.Resource.Post
    
      @impl true
      def handle_params(params, _, socket) do
        case Post.list_posts(params) do
          {:ok, {posts, meta}} ->
            {:noreply, assign(socket, %{posts: posts, meta: meta})}
          {:error, _meta} ->
            # This will reset invalid parameters. Alternatively, you can assign
            # only the meta and render the errors, or assign the validated params,
            # or you can ignore the error case entirely.
            {:noreply, push_navigate(socket, to: ~p"/posts")}
        end
      end
    
      defp list_posts(params, opts \\ []) do
        AshPagify.validate_and_run(Post, params, opts)
      end
    end

###  __ LiveView streams

To use LiveView streams, you can change your `handle_params/3` function as follows:
    
    
    def handle_params(params, _, socket) do
      case Post.list_posts(params) do
        {:noreply,
            socket
            |> assign(:meta, meta)
            |> stream(:posts, posts, reset: true)}
      # ...
      end
    end

###  __ Replace invalid params

To replace invalid ash_pagify parameters with their default values, you can use the `replace_invalid_params?` option. You can change your `handle_params/3` function as follows:
    
    
    def handle_params(params, _, socket) do
      case Post.list_posts(params, replace_invalid_params?: true) do
          {:ok, {posts, meta}} ->
            {:noreply, assign(socket, %{posts: posts, meta: meta})}
          {:error, meta} ->
            valid_path = AshPagify.Components.build_path(~p"/posts", meta.params)
            {:noreply, push_navigate(socket, to: valid_path)}
      # ...
      end
    end

###  __ Custom read action

If the `:action` option is set (to perform a custom read action), the fourth argument `args` will be passed to the action as arguments.
    
    
    %Ash.Page.Offset{count: count} = AshPagify.all(Comment, %AshPagify{}, [action: :by_post], post.id)

##  __ Full-text search

We allow full-text search using the `tsvector` column in PostgreSQL. To enable full-text search, you need to either `use AshPagify.Tsearch` in your module or implement the `full_text_search`, `full_text_search_rank`, `tsquery`, and `tsvector` calculations as described in [`AshPagify.Tsearch`](external_link) (tsvector calculation is always mandatory).
    
    
    # provide the default tsvector calculation for full-text search
    calculate :tsvector,
              AshPostgres.Tsvector,
              expr(
                fragment(
                  "to_tsvector('simple', coalesce(?, '')) || to_tsvector('simple', coalesce(?, ''))",
                  name,
                  title
                )
              ),
              public?: true

Or if you want to use a generated tsvector column, you can replace the fields part with the name of your generated tsvector column:
    
    
    # use a tsvector column from the database
    calculate :tsvector, AshPostgres.Tsvector, expr(tsv), public?: true

You can also configure `dynamic` tsvectors based on user input. Have a look at the [`AshPagify.Tsearch`](external_link) module for more information.

Once configured, you can use the `search` parameter to apply full-text search.

##  __ Sortable tables and pagination

To add a sortable table and pagination links, you can add the following to your template:
    
    
    <h1>Posts</h1>
    
    <AshPagify.Components.table items={@posts} meta={@meta} path={~p"/posts"}>
      <:col :let={post} label="Name" field={:name}><%= post.name %></:col>
      <:col :let={post} label="Author" field={:author}><%= post.author %></:col>
    </AshPagify.Components.table>
    
    <AshPagify.Components.pagination meta={@meta} path={~p"/posts"} />

In this context, path points to the current route, and AshPagify Components appends full-text search, pagination, scoping, filtering, and sorting parameters to it. You can use verified routes, route helpers, or custom path builder functions. You'll find explanations for the different formats in the documentation for [`AshPagify.Components.build_path/3`](external_link).

Note that the field attribute in the `:col` slot is optional. If set and the corresponding field in the resource is defined as sortable, the table header for that column will be interactive, allowing users to sort by that column. However, if the field isn't defined as sortable, or if the field attribute is omitted, or set to `nil` or `false`, the table header will not be clickable.

You also have the option to pass a [`Phoenix.LiveView.JS`](external_link) command instead of or in addition to a path. For more details, please refer to the component documentation.

##  __ Parameter format

The AshPagify library requires parameters to be provided in a specific format as a map. This map can be translated into a URL query parameter string, typically for use in a web framework like Phoenix.

The following parameters are encoded as strings and handled by the library:

  * `search` \- A string to search for in the full-text search column or in the searchable fields.
  * `limit` \- The number of records to return.
  * `offset` \- The number of records to skip.
  * `scopes` \- A map of predefined filters to apply to the query.
  * `filter_form` \- A map of filters provided by the [`AshPagify.FilterForm`](external_link) module.
  * `order_by` \- A list of fields to order by.



##  __ Search query

You can search for a string in a full-text search column.
    
    
    %{search: "John"}

This translates to the following query parameter string:
    
    
    ?search=John

You can use the `AshPagify.set_search/3` function to set the search query in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.set_search(%AshPagify{}, "John")

##  __ Pagination

You can specify an offset to start from and a limit to the number of results.
    
    
    %{offset: 100, limit: 20}

This translates to the following query parameter string:
    
    
    ?offset=100&limit=20

You can use the `AshPagify.set_offset/2` and `AshPagify.set_limit/3` functions to set the offset and limit in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.set_offset(%AshPagify{}, 100)
    ash_pagify = AshPagify.set_limit(ash_pagify, 20)

##  __ Scoping

To apply predefined filters to a query, you can set the `:scopes` parameter. `:scopes` should be a map of predefined filters (maps) available in your resource. The filter name is used to look up the predefined filter. If the filter is found, it is applied to the query. If the filter is not found, an error is raised.
    
    
    %{scopes: %{role: :admin}}

This translates to the following query parameter string:
    
    
    ?scopes[role]=admin

You can use the `AshPagify.set_scope/3` function to set the scopes in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.set_scope(%AshPagify{}, %{role: :admin})

##  __ Filter forms

Filter forms can be passed as a map of filter conditions. Usually, this map is generated by a filter form component using the [`AshPagify.FilterForm`](external_link) module. [`AshPagify.FilterForm.params_for_query/2`](external_link) can be used to convert the form filter map into a query map.
    
    
    %{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}}

This translates to the following query parameter string:
    
    
    ?filter_form[name][eq]=Post%201

You can use the `AshPagify.set_filter_form/3` function to set the filter form in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.set_filter_form(%AshPagify{}, %{"field" => "name", "operator" => "eq", "value" => "Post 1"})

Check the [`AshPhoenix.FilterForm`](external_link) documentation for more information. See [`Ash.Query.filter/2`](3.3.3/Ash.Query.html#filter/2) for a list of all available filter operators.

##  __ Ordering

To add an ordering clause to a query, you need to set the `:order_by` parameter. `:order_by` should be a list of fields, aggregates, or calculations available in your resource. The order direction can be set by adding one of the following prefixes to the field name:

  * `""` or `+` for ascending order
  * `-` for descending order
  * `++` for ascending order with nulls first
  * `--` for descending order with nulls last



If no order directions are given, `:asc` is used as default.
    
    
    %{order_by: ["name", "--author"]}

This translates to the following query parameter string:
    
    
    ?order_by=[]name&oder_by[]=--author

You can use the `AshPagify.push_order/3` function to set the order by clause in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.push_order(%AshPagify{}, "name")

##  __ Internal parameters

AshPagify is designed to manage parameters that come from the user side. While it is possible to alter those parameters and append extra filters upon receiving them, it is advisable to clearly differentiate parameters coming from outside and the parameters that your application adds internally.

Consider the scenario where you need to scope a query based on the current user. In this case, it is better to create a separate function that introduces the necessary filter clauses:
    
    
    def list_posts(%{} = params, %User{} = current_user) do
      Post
      |> scope(current_user)
      |> AshPagify.validate_and_run(params)
    end
    
    defp scope(query, %User{role: :admin}), do: query
    defp scope(query, %User{id: user_id}), do: Ash.Query.filter_input(query, %{user_id: ^user_id})

If you need to add extra filters that are only used internally and aren't exposed to the user, you can pass them as a separate argument. This same argument can be used to override certain options depending on the context in which the function is called.
    
    
    def list_posts(%{} = params, opts \\\\ [], %User{} = current_user) do
      ash_pagify_opts =
        opts
        |> Keyword.put(:max_limit, 10)
        |> Keyword.put(:default_limit, 10)
        |> Keyword.put(:replace_invalid_params?, true)
    
      Post
      |> scope(current_user)
      |> apply_filters(opts)
      |> AshPagify.validate_and_run(params, ash_pagify_opts)
    end
    
    defp scope(query, %User{role: :admin}), do: query
    defp scope(query, %User{id: user_id}), do: Ash.Query.filter_input(query, %{user_id: ^user_id})
    
    defp apply_filters(query, opts) do
      Enum.reduce(opts, query, fn
        {:updated_at, dt}, query -> Ash.Query.filter_input(query, %{updated_at: dt})
        _, query -> query
      end)
    end

With this approach, you maintain a clean separation between user-driven parameters and system-driven parameters, leading to more maintainable and less error-prone code. Please be aware that in most cases it is better to use `Ash.Policy` to manage access control. This example is just to illustrate the concept.

Under the hood, the `AshPagify.validate_and_run/4` or `AshPagify.validate_and_run!/4` functions just call `AshPagify.validate/2` and `AshPagify.run/4`, which in turn calls `AshPagify.all/4` and `AshPagify.meta/3`.

See [`AshPagify.Meta`](external_link) for descriptions of the meta fields.

Alternatively, you may separate parameter validation and data fetching into different steps using the `AshPagify.validate/2`, `AshPagify.validate!/2`, and `AshPagify.run/4` functions. This allows you to manipulate the validated parameters, to modify the query depending on the parameters, or to move the parameter validation to a different layer of your application.
    
    
    with {:ok, ash_pagify} <- AshPagify.validate(Post, params) do
      {:ok, {results, meta}} = AshPagify.run(Post, ash_pagify)
    end

The aforementioned functions internally call the lower-level functions `AshPagify.all/4` and `AshPagify.meta/3`. If you have advanced requirements, you might prefer to use these functions directly. However, it's important to note that these lower-level functions do not validate the parameters. If parameters are generated based on user input, they should always be validated first using `AshPagify.validate/2` or `AshPagify.validate!/2` to ensure safe execution.

##  __ Release Management

We use [git_opts](external_link) to manage our releases. To create a new release, run:
    
    
    mix git_ops.release
    

This will bump the version, create a new tag, and push the changes to the repository. The GitHub action will then build and publish the new version to Hex.

#  __ Summary

##  Types

option()

These options can be passed to most functions or configured via the application environment.

order_by()

Valid order_by types for the `AshPagify.t/0` struct.

scope()

A scope is a predefined filter that is merged with the user-provided filters.

t()

Represents the query parameters for full-text search, scoping, filtering, ordering and pagination.

##  Functions

active_scope?(ash_pagify, scope)

Helper function to check if a scope is active in a AshPagify struct.

all(query_or_resource, ash_pagify, opts \\\ [], args \\\ nil)

Returns an [`Ash.Page.Offset.t/0`](3.3.3/Ash.Page.Offset.html#t:t/0) struct from the given [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0) with the given `AshPagify.t/0` parameters and [`Keyword.t/0`](external_link) options.

coerce_order_by(order_by)

Transforms the given `order_by` parameter into a list of tuples with the field and the default :asc direction.

concat_sort(list, acc \\\ [])

Transforms the given `order_by` parameter into a list of strings (user input domain).

count(query_or_resource, ash_pagify, opts \\\ [])

Returns the total count of entries matching the full-text search, filters, filter_form, and scopes conditions in the given [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0) with the given `AshPagify.t/0` parameters and [`Keyword.t/0`](external_link) options.

current_order(arg1, field)

Returns the current order direction for the given field.

extract_full_text_search(filters_map)

Extracts the full-text search setting from the filters map and returns a tuple of the filters map without the full-text search setting and the full-text search setting.

filter(q, ash_pagify)

Applies the `filter` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

filter_form(q, ash_pagify)

Applies the `filter_form` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

filter_form_to_filter_map(resource, filter_form)

Transforms the `filter_form` parameter of a `AshPagify.t/0` into a filter map.

get_index(order_by, field)

Finds the current index of a field in the `order_by` list.

get_option(key, opts \\\ [], default \\\ nil)

Returns the option with the given key.

get_order_direction(order_by, index)

Returns the current order direction for the given index and `AshPagify.order_by`.

merge_filters(ash_pagify, filters)

Merges the given filters with the filters of a AshPagify struct.

meta(page, ash_pagify, opts \\\ [])

Returns meta information for the given query and ash_pagify that can be used for building the pagination links.

order_by(q, ash_pagify)

Applies the `order_by` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

page(ash_pagify, page \\\ [count: true])

Returns a keyword list with the `limit`, `offset` and `count` parameters from the given `AshPagify.t/0` parameter.

paginate(query_or_resource, ash_pagify, opts \\\ [])

Adds clauses for pagination to the resulting keyword list from the given `AshPagify.t/0` parameter.

parse(query_or_resource, ash_pagify, opts \\\ [])

Adds clauses for full-text search, scoping, filtering, ordering and pagination to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0) from the given `AshPagify.t/0` parameters and [`Keyword.t/0`](external_link) options.

prefix_to_order(arg1)

Transforms the given field with order prefix into an `t:Ash.Sort.sort_order/t`.

push_order(ash_pagify, field, opts \\\ [])

Updates the `order_by` value of a [`AshPagify`](external_link) struct.

query(q, ash_pagify, opts \\\ [])

Adds clauses for full-text search, scoping, filtering and ordering to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) from the given `AshPagify.t/0` parameter.

query_for_filters_map(query_or_resource, filters_map, opts \\\ [])

Creates an [`Ash.Query`](3.3.3/Ash.Query.html) from a filter map. Ideally, the filter map was previously compiled with `AshPagify.query_to_filters_map/2`.

query_to_filters_map(query_or_resource, ash_pagify, opts \\\ [])

Takes the AshPagify.scopes and AshPagify.form_filter and compiles them into a map of filters. The filters are merged with the base filters of the AshPagify struct.

reset_filter_form(ash_pagify)

Removes all filter_form from a AshPagify struct.

reset_filters(ash_pagify)

Removes all filters from a AshPagify struct.

reset_order(ash_pagify)

Resets the order of a AshPagify struct.

run(query_or_resource, ash_pagify, opts \\\ [], args \\\ nil)

Applies the given `AshPagify.t/0` to the given [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0), retrieves the data and the [`AshPagify.Meta.t/0`](external_link) data.

scope(q, ash_pagify, opts \\\ [])

Applies the `scopes` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

search(q, ash_pagify, opts \\\ [])

Applies the `search` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

set_filter_form(meta, filter_form, opts \\\ [])

Updates the filter form of a AshPagify.Meta struct.

set_limit(ash_pagify, limit, opts \\\ [])

Sets the limit value of a [`AshPagify`](external_link) struct.

set_offset(ash_pagify, offset)

Sets the offset value of a [`AshPagify`](external_link) struct.

set_scope(ash_pagify, scope, opts \\\ [])

Sets the scope of a AshPagify struct.

set_search(ash_pagify, search, opts \\\ [])

Sets the search of a AshPagify struct.

set_tsvector(tsvector, opts \\\ [])

Sets the tsvector value in the full_text_search clause of the `Keyword.t` opts parameter.

to_next_offset(ash_pagify, total_count \\\ nil)

Sets the offset of a AshPagify struct to the next page depending on the limit.

to_previous_offset(ash_pagify)

Sets the offset of a AshPagify struct to the page depending on the limit.

validate(query_or_resource, map_or_ash_pagify, opts \\\ [])

Validates a `AshPagify.t/0`.

validate!(query_or_resource, map_or_ash_pagify, opts \\\ [])

Same as `AshPagify.validate/2`, but raises a [`AshPagify.Error.Query.InvalidParamsError`](external_link) if the parameters are invalid.

validate_and_run(query_or_resource, map_or_ash_pagify, opts \\\ [], args \\\ nil)

Validates the given ash_pagify parameters and retrieves the data and meta data on success.

validate_and_run!(query_or_resource, map_or_ash_pagify, opts \\\ [], args \\\ nil)

Same as `AshPagify.validate_and_run/4`, but raises on error.

validated_query(query_or_resource, map_or_ash_pagify, opts \\\ [])

Validates the given query or resource and ash_pagify parameters and returns a validated query.

#  __ Types

__ Link to this type

# option()

[ __ View Source ](external_link)
    
    
    @type option() ::
      {default_limit :: [non_neg_integer](external_link)()}
      | {max_limit :: [non_neg_integer](external_link)()}
      | {replace_invalid_params? :: [boolean](external_link)()}
      | {ash_pagify_scopes :: [map](external_link)()}
      | {reset_on_filter? :: [boolean](external_link)()}
      | {full_text_search :: [[AshPagify.Tsearch.tsearch_option](external_link)()]}

These options can be passed to most functions or configured via the application environment.

##  __ Options

Default ash_pagify options in addition to the ones provided by the [`Ash.read/2`](3.3.3/Ash.html#read/2) function. These options are used to configure the pagination behavior.

  * `:default_limit` \- The default number of records to return. Defaults to 25. Can be overridden by the resource's `default_limit` function.
  * `:max_limit` \- The maximum number of records that can be returned. Defaults to 100.
  * `:replace_invalid_params?` \- If set to `true`, invalid parameters will be replaced with the default value. If set to `false`, invalid parameters will result in an error. Defaults to `false`.
  * `:ash_pagify_scopes` \- A map of predefined filters to apply to the query. Each map entry itself is a group (list) of `AshPagify.scope/0` entries.
  * `:reset_on_filter?` \- If set to `true`, the offset will be reset to 0 when a filter is applied. Defaults to `true`.
  * `:full_text_search` \- A list of options for full-text search. See [`AshPagify.Tsearch.tsearch_option/0`](external_link).



##  __ Look-up order

Options are looked up in the following order:

  1. Function arguments (highest priority)
  2. Resource-level options (set in the resource module)
  3. Global options in the application environment (set in config files)
  4. Library defaults (lowest priority)



__ Link to this type

# order_by()

[ __ View Source ](external_link)
    
    
    @type order_by() ::
      [[atom](external_link)() | [String.t](external_link)() | {[atom](external_link)(), [Ash.Sort.sort_order](3.3.3/Ash.Sort.html#t:sort_order/0)()} | [[String.t](external_link)()]] | nil

Valid order_by types for the `AshPagify.t/0` struct.

__ Link to this type

# scope()

[ __ View Source ](external_link)
    
    
    @type scope() ::
      {name :: [atom](external_link)()} | {filter :: [Ash.Filter.t](3.3.3/Ash.Filter.html#t:t/0)()} | {default? :: [boolean](external_link)()}

A scope is a predefined filter that is merged with the user-provided filters.

Scope definitions live in the resource provided `ash_pagify_scopes` function or in the provided `AshPagify.option/0`. Contrary to user-provided filters, scope filters are not parsed as user input and are not validated as such. However, they are validated in the `AshPagify.validate_and_run/4` context. User-provided parameters are used to lookup the scope filter. If the scope filter is found, it is applied to the query. If the scope filter is not found, an error is raised.

##  __ Fields

  * `:name` \- The name of the filter for the scope.
  * `:filter` \- The filter to apply to the query.
  * `:default?` \- If set to `true`, the scope is applied by default.



__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshPagify{
      filter_form: [map](external_link)() | nil,
      filters: [map](external_link)() | nil,
      limit: [pos_integer](external_link)() | nil,
      offset: [non_neg_integer](external_link)() | nil,
      order_by: order_by(),
      scopes: [map](external_link)() | nil,
      search: [String.t](external_link)() | nil
    }

Represents the query parameters for full-text search, scoping, filtering, ordering and pagination.

###  __ Fields

  * `limit`, `offset`: Used for offset-based pagination.
  * `scopes`: A map of user provided scopes to apply to the query. Scopes are internally translated to predefined filters and merged into the query enginge.
  * `filter_form`: A map of filters provided by [`AshPhoenix.FilterForm`](external_link) module. These filters are meant to be used in user interfaces.
  * `filters`: A map of manually provided filters to apply to the query. These filters must be provided in the map syntax and are meant to be used in business logic context (see [`Ash.Filter`](3.3.3/Ash.Filter.html) for examples).
  * `order_by`: A list of fields to order by (see [`Ash.Sort.parse_input/3`](3.3.3/Ash.Sort.html#parse_input/3) for all available orders).
  * `search`: A string to search for in the full-text search column.



#  __ Functions

__ Link to this function

# active_scope?(ash_pagify, scope)

[ __ View Source ](external_link)
    
    
    @spec active_scope?(t(), [map](external_link)()) :: [boolean](external_link)()

Helper function to check if a scope is active in a AshPagify struct.

##  __ Examples
    
    
    iex> active_scope?(%AshPagify{scopes: %{status: :active}}, %{status: :active})
    true
    
    iex> active_scope?(%AshPagify{scopes: %{status: :active}}, %{status: :inactive})
    false
    
    iex> active_scope?(%AshPagify{scopes: %{status: :active}}, %{role: :admin})
    false
    
    iex> active_scope?(%AshPagify{}, %{role: :admin})
    false

__ Link to this function

# all(query_or_resource, ash_pagify, opts \\\ [], args \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec all([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), t(), [Keyword.t](external_link)(), [any](external_link)()) ::
      [Ash.Page.Offset.t](3.3.3/Ash.Page.Offset.html#t:t/0)()

Returns an [`Ash.Page.Offset.t/0`](3.3.3/Ash.Page.Offset.html#t:t/0) struct from the given [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0) with the given `AshPagify.t/0` parameters and [`Keyword.t/0`](external_link) options.

The `opts` keyword list is used to pass additional options to the query engine. It should conform to the list of valid options at [`Ash.read/2`](3.3.3/Ash.html#read/2).

  * `AshPagify.search` is used to apply full-text search to the query.
  * `Paigfy.scopes` are used to apply predefined filters to the query.
  * `AshPagify.filter_form` is used to apply filters generated by the [`AshPhoenix.FilterForm`](external_link) module.
  * `AshPagify.filters` and `AshPagify.order_by` are used to filter and order the query.
  * `AshPagify.limit` and `AshPagify.offset` are used to paginate the query.



The user input parameters are represented by the `AshPagify.t/0` type. Any `nil` values will be ignored.

If the `:action` option is set (to perform a custom read action), the fourth argument `args` will be passed to the action as arguments.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> %Ash.Page.Offset{results: r} =  AshPagify.all(Post, %AshPagify{filters: %{name: "inexistent"}})
    iex> r
    []

Or with an initial query:
    
    
    iex> alias AshPagify.Factory.Post
    iex> q = Ash.Query.filter_input(Post, %{name: "inexistent"})
    iex> %Ash.Page.Offset{results: r} = AshPagify.all(q, %AshPagify{})
    iex> r
    []

Or with a custom read action:
    
    
    iex> alias AshPagify.Factory.Post
    iex> alias AshPagify.Factory.Comment
    iex> Comment.read!() |> Enum.count()
    9
    iex> ash_pagify = %AshPagify{limit: 1, filters: %{name: "Post 1"}}
    iex> %Ash.Page.Offset{results: posts} = AshPagify.all(Post, ash_pagify)
    iex> post = hd(posts)
    iex> %Ash.Page.Offset{count: count} = AshPagify.all(Comment, %AshPagify{}, [action: :by_post], post.id)
    iex> count
    2

Or with scopes:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{scopes: %{role: :admin}}
    iex> %Ash.Page.Offset{count: count} = AshPagify.all(Post, ash_pagify)
    iex> count
    1

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

__ Link to this function

# coerce_order_by(order_by)

[ __ View Source ](external_link)
    
    
    @spec coerce_order_by(order_by()) :: order_by()

Transforms the given `order_by` parameter into a list of tuples with the field and the default :asc direction.

##  __ Examples
    
    
    iex> coerce_order_by(nil)
    []
    iex> coerce_order_by([])
    []
    iex> coerce_order_by(:name)
    [name: :asc]
    iex> coerce_order_by("name")
    [name: :asc]
    iex> coerce_order_by({:name, :asc})
    [name: :asc]
    iex> coerce_order_by([name: :asc, age: :desc])
    [name: :asc, age: :desc]

__ Link to this function

# concat_sort(list, acc \\\ [])

[ __ View Source ](external_link)
    
    
    @spec concat_sort(order_by(), [[String.t](external_link)()]) :: [[String.t](external_link)()]

Transforms the given `order_by` parameter into a list of strings (user input domain).

__ Link to this function

# count(query_or_resource, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec count([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: [non_neg_integer](external_link)()

Returns the total count of entries matching the full-text search, filters, filter_form, and scopes conditions in the given [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0) with the given `AshPagify.t/0` parameters and [`Keyword.t/0`](external_link) options.

The pagination and ordering options are disregarded.
    
    
    iex> alias AshPagify.Factory.Post
    iex> AshPagify.count(Post, %AshPagify{})
    3

You can override the default query by passing the `:count_query` option. This doesn't make a lot of sense when you use `count/3` directly, but allows you to optimize the count query when you use one of the `run/4`, `validate_and_run/4` and `validate_and_run!/4` functions.
    
    
    query = some expensive query
    count_query = Ash.Query.new(Post)
    AshPagify.count(Post, %AshPagify{}, count_query: count_query)

The full-text search and various filter parameters of the given AshPagify are applied to the custom count query.

If for some reason you already have the count, you can pass it as the `:count` option.
    
    
    count(query, %AshPagify{}, count: 42, for: Post)

If you pass both the `:count` and the `:count_query` options, the `:count` option will take precedence.

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine. Or you can use `AshPagify.validate_and_run/4` or `AshPagify.validate_and_run!/4` instead of this function.

__ Link to this function

# current_order(arg1, field)

[ __ View Source ](external_link)
    
    
    @spec current_order(t(), [atom](external_link)()) :: [Ash.Sort.sort_order](3.3.3/Ash.Sort.html#t:sort_order/0)() | nil

Returns the current order direction for the given field.

##  __ Examples
    
    
    iex> ash_pagify = %AshPagify{order_by: [name: :desc, age: :asc]}
    iex> current_order(ash_pagify, :name)
    :desc
    iex> current_order(ash_pagify, :age)
    :asc
    iex> current_order(ash_pagify, :species)
    nil

If the field is not an atom, the function will return `nil`.
    
    
    iex> ash_pagify = %AshPagify{order_by: [name: :desc]}
    iex> current_order(ash_pagify, "name")
    nil

If `AshPagify.order_by` is nil, the function will return `nil`.
    
    
    iex> current_order(%AshPagify{}, :name)
    nil

__ Link to this function

# extract_full_text_search(filters_map)

[ __ View Source ](external_link)
    
    
    @spec extract_full_text_search([map](external_link)()) :: {[map](external_link)(), [map](external_link)() | nil}

Extracts the full-text search setting from the filters map and returns a tuple of the filters map without the full-text search setting and the full-text search setting.

The full-text search setting is stored under the key `"__full_text_search"` in the filters map (on in the `and` or `or` base of the filters_map). If the full-text search setting is not found, the function will return the filters map as is.

__ Link to this function

# filter(q, ash_pagify)

[ __ View Source ](external_link)
    
    
    @spec filter([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)(), t()) :: [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Applies the `filter` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

Used by `AshPagify.query/2`. See [`Ash.Query.filter/2`](3.3.3/Ash.Query.html#filter/2) for more information.

For a completed list of filter operators, see [`Ash.Filter`](3.3.3/Ash.Filter.html).

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

##  __ Examples
    
    
      iex> alias AshPagify.Factory.Post
      iex> q = Ash.Query.new(Post)
      iex> ash_pagify = %AshPagify{filters: %{name: "foo"}}
      iex> filter(q, ash_pagify)
      #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "foo">>

Or multiple filters:
    
    
      iex> alias AshPagify.Factory.Post
      iex> q = Ash.Query.new(Post)
      iex> ash_pagify = %AshPagify{filters: %{name: "foo", id: "1"}}
      iex> filter(q, ash_pagify)
      #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<id == "1" and name == "foo">>

Or by relation:
    
    
      iex> alias AshPagify.Factory.Post
      iex> q = Ash.Query.new(Post)
      iex> ash_pagify = %AshPagify{filters: %{comments: %{body: "foo"}}}
      iex> filter(q, ash_pagify)
      #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<comments.body == "foo">>

__ Link to this function

# filter_form(q, ash_pagify)

[ __ View Source ](external_link)
    
    
    @spec filter_form([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)(), t()) :: [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Applies the `filter_form` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

Used by `AshPagify.query/2`. See [`AshPhoenix.FilterForm`](external_link) for more information.

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> q = Ash.Query.new(Post)
    iex> ash_pagify = %AshPagify{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}}
    iex> filter_form(q, ash_pagify)
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "Post 1">>

__ Link to this function

# filter_form_to_filter_map(resource, filter_form)

[ __ View Source ](external_link)
    
    
    @spec filter_form_to_filter_map([Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), [map](external_link)() | nil) :: [map](external_link)()

Transforms the `filter_form` parameter of a `AshPagify.t/0` into a filter map.

Used by `AshPagify.filter_form/2`. See [`AshPhoenix.FilterForm`](external_link) for more information.

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}}
    iex> filter_form_to_filter_map(Post, ash_pagify.filter_form)
    %{"and" => [%{"name" => %{"eq" => "Post 1"}}]}

__ Link to this function

# get_index(order_by, field)

[ __ View Source ](external_link)
    
    
    @spec get_index(order_by(), [atom](external_link)()) :: [non_neg_integer](external_link)() | nil

Finds the current index of a field in the `order_by` list.

Following rules are applied:

  * if the `order_by` is `nil`, `nil` is returned
  * if the `order_by` is an atom or a binary, `nil` is returned
  * if the `order_by` is a tuple, `nil` is returned
  * if the `order_by` is a list, the index of the field is returned



__ Link to this function

# get_option(key, opts \\\ [], default \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec get_option([atom](external_link)(), [Keyword.t](external_link)(), [any](external_link)()) :: [any](external_link)()

Returns the option with the given key.

The look-up order is:

  1. the keyword list passed as the second argument
  2. the Ash.Resource resource, if the passed list includes the `:for` option
  3. the application environment
  4. the AshPagify default value if defined
  5. the default passed as the last argument



For the `:ash_pagify_scopes` option, the function will deep merge the options in reverse order (keyword overrides resource, resource overrides global, etc.)

##  __ Examples for `:ash_pagify_scopes`
    
    
    iex> alias AshPagify.Factory.Post
    iex> opts = [
    ...>   ash_pagify_scopes: %{
    ...>     role: [
    ...>       %{name: :user, filter: %{name: "changed"}},
    ...>       %{name: :other, filter: %{name: "other"}}
    ...>     ],
    ...>     status: [
    ...>       %{name: :all, filter: nil, default?: true},
    ...>       %{name: :active, filter: %{age: %{lt: 10}}},
    ...>       %{name: :inactive, filter: %{age: %{gte: 10}}}
    ...>     ]
    ...>   },
    ...>   for: Post
    ...> ]
    iex> get_option(:ash_pagify_scopes, opts, %{
    ...>   role: [
    ...>     %{name: :default, filter: %{author: "Default"}}
    ...>   ]
    ...> })
    %{
      role: [
        %{name: :admin, filter: %{author: "John"}},
        %{name: :user, filter: %{name: "changed"}},
        %{name: :other, filter: %{name: "other"}},
        %{name: :default, filter: %{author: "Default"}}
      ],
      status: [
        %{name: :inactive, filter: %{age: %{gte: 10}}},
        %{name: :all, filter: nil, default?: true},
        %{name: :active, filter: %{age: %{lt: 10}}}
      ]
    }

__ Link to this function

# get_order_direction(order_by, index)

[ __ View Source ](external_link)
    
    
    @spec get_order_direction(order_by(), [non_neg_integer](external_link)() | nil) ::
      [Ash.Sort.sort_order](3.3.3/Ash.Sort.html#t:sort_order/0)() | nil

Returns the current order direction for the given index and `AshPagify.order_by`.

Following rules are applied:

  * if the `order_by` is `nil`, `nil` is returned
  * if the `order_by` is an atom or a binary, `:asc` is returned
  * if the `order_by` is a tuple, the second element of the tuple is returned
  * if the index is out of bounds, `nil` is returned
  * if the `order_by` is a list, the direction of the element at the given index is returned



__ Link to this function

# merge_filters(ash_pagify, filters)

[ __ View Source ](external_link)
    
    
    @spec merge_filters(t(), [map](external_link)() | true) :: t()

Merges the given filters with the filters of a AshPagify struct.

If the filter already exists, it will be replaced with the new value. If the filter does not exist, it will be added to the filters map.

In order to merge the filters, the filters are first prepared by calling `prepare_filters/1`. This function will ensure that the filters are in the correct format for merging (e.g. keys are strings).

If the filters are in the correct format, the filters are merged using `Misc.deep_merge/2`. After merging, the filters are cleaned up by removing empty lists.

##  __ Examples
    
    
    iex> merge_filters(%AshPagify{filters: %{name: "foo"}}, %{name: "bar"})
    %AshPagify{filters: %{"and" => [%{"name" => "bar"}]}}
    
    iex> merge_filters(%AshPagify{filters: %{name: "foo"}}, %{age: 10})
    %AshPagify{filters: %{"and" => [%{"name" => "foo"}, %{"age" => 10}]}}
    
    iex> merge_filters(%AshPagify{filters: %{"or" => [%{name: "foo"}]}}, %{age: 10})
    %AshPagify{filters: %{"or" => [%{"name" => "foo"}], "and" => [%{"age" => 10}]}}
    
    iex> merge_filters(%AshPagify{filters: %{"or" => [%{name: "foo"}]}}, %{"or" => [%{age: 10}]})
    %AshPagify{filters: %{"or" => [%{"name" => "foo"}, %{"age" => 10}]}}

__ Link to this function

# meta(page, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec meta([Ash.Page.Offset.t](3.3.3/Ash.Page.Offset.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: [AshPagify.Meta.t](external_link)()

Returns meta information for the given query and ash_pagify that can be used for building the pagination links.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 2, offset: 1, order_by: [name: :asc, comments_count: :desc_nils_last]}
    iex> page = AshPagify.all(Post, ash_pagify)
    iex> AshPagify.meta(page, ash_pagify)
    %AshPagify.Meta{
      current_limit: 2,
      current_offset: 1,
      current_page: 2,
      default_scopes: %{status: :all},
      has_next_page?: false,
      has_previous_page?: true,
      next_offset: nil,
      opts: [],
      ash_pagify: %AshPagify{filters: nil, limit: 2, offset: 1, order_by: [name: :asc, comments_count: :desc_nils_last]},
      previous_offset: 0,
      resource: Post,
      total_count: 3,
      total_pages: 2
    }

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

__ Link to this function

# order_by(q, ash_pagify)

[ __ View Source ](external_link)
    
    
    @spec order_by([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)(), t()) :: [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Applies the `order_by` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

Used by `AshPagify.query/2`. See [`Ash.Query.sort/3`](3.3.3/Ash.Query.html#sort/3) for more information.

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

##  __ Examples
    
    
      iex> alias AshPagify.Factory.Post
      iex> q = Ash.Query.new(Post)
      iex> ash_pagify = %AshPagify{order_by: ["name"]}
      iex> order_by(q, ash_pagify)
      #Ash.Query<resource: AshPagify.Factory.Post, sort: [{"name", :asc}]>

Or descending order nulls last:
    
    
      iex> alias AshPagify.Factory.Post
      iex> q = Ash.Query.new(Post)
      iex> ash_pagify = %AshPagify{order_by: [name: :desc_nils_last]}
      iex> order_by(q, ash_pagify)
      #Ash.Query<resource: AshPagify.Factory.Post, sort: [name: :desc_nils_last]>

Or multiple fields:
    
    
      iex> alias AshPagify.Factory.Post
      iex> q = Ash.Query.new(Post)
      iex> ash_pagify = %AshPagify{order_by: ["name", "id"]}
      iex> order_by(q, ash_pagify)
      #Ash.Query<resource: AshPagify.Factory.Post, sort: [{"name", :asc}, {"id", :asc}]>

Or by calculation:
    
    
      iex> alias AshPagify.Factory.Post
      iex> q = Ash.Query.new(Post)
      iex> ash_pagify = %AshPagify{order_by: ["comments_count"]}
      iex> order_by(q, ash_pagify)
      #Ash.Query<resource: AshPagify.Factory.Post, sort: [comments_count: :asc]>

__ Link to this function

# page(ash_pagify, page \\\ [count: true])

[ __ View Source ](external_link)
    
    
    @spec page(t(), [Keyword.t](external_link)()) :: [Keyword.t](external_link)()

Returns a keyword list with the `limit`, `offset` and `count` parameters from the given `AshPagify.t/0` parameter.

The `count` parameter is set to `true` by default. To disable counting the total number of records, set `count: false` in the optional page keyword list.

##  __ Examples
    
    
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20}
    iex> page(ash_pagify)
    [count: true, offset: 20, limit: 10]

Or disable counting:
    
    
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20}
    iex> page(ash_pagify, count: false)
    [count: false, offset: 20, limit: 10]

__ Link to this function

# paginate(query_or_resource, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec paginate([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: [Keyword.t](external_link)()

Adds clauses for pagination to the resulting keyword list from the given `AshPagify.t/0` parameter.

The `count` parameter is set to `true` by default. To disable counting the total number of records, set `page: [:count, false]` in the opts keyword list.

If the `limit` or `offset` fields are `nil`, the default limit and offset values will be used.

If the resource itself provides a default limit, it will be used instead of the default limit provided by AshPagify.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20}
    iex> paginate(Post, ash_pagify)
    [page: [count: true, offset: 20, limit: 10]]

Or disable counting:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20}
    iex> paginate(Post, ash_pagify, page: [count: false])
    [page: [count: false, offset: 20, limit: 10]]

Or without the offset parameter:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 8}
    iex> paginate(Post, ash_pagify)
    [page: [count: true, offset: 0, limit: 8]]

Or without the limit parameter. The default limit from Post will be used:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{offset: 5}
    iex> paginate(Post, ash_pagify)
    [page: [count: true, offset: 5, limit: 15]]

Or without the limit parameter. The default limit from AshPagify will be used if no default limit is provided by the resource:
    
    
    iex> alias AshPagify.Factory.Comment
    iex> ash_pagify = %AshPagify{offset: 5}
    iex> paginate(Comment, ash_pagify)
    [page: [count: true, offset: 5, limit: 25]]

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

__ Link to this function

# parse(query_or_resource, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec parse([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: [Keyword.t](external_link)()

Adds clauses for full-text search, scoping, filtering, ordering and pagination to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0) from the given `AshPagify.t/0` parameters and [`Keyword.t/0`](external_link) options.

The keyword list `opts` is used to pass additional options to the query engine. It shoud conform to the list of valid options at [`Ash.read/2`](3.3.3/Ash.html#read/2). Furthermore the `AshPagify.option/0` library options are supported.

We take the keyword list `opts` and return a keyword list callback according to [`Ash.read/2`](3.3.3/Ash.html#read/2) but with the **:query** keyword also within the list.

  * `AshPagify.search` is used to apply full-text search to the query.
  * `Paigfy.scopes` are used to apply predefined filters to the query.
  * `AshPagify.filter_form` is used to apply filters generated by the [`AshPhoenix.FilterForm`](external_link) module.
  * `AshPagify.filters` and `AshPagify.order_by` are used to filter and order the query.
  * `AshPagify.limit` and `AshPagify.offset` are used to paginate the query.



The user input parameters are represented by the `AshPagify.t/0` type. Any `nil` values will be ignored.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20, filters: %{name: "foo"}, order_by: ["name"]}
    iex> [page, {:query, query}] = parse(Post, ash_pagify)
    iex> page
    {:page, [count: true, offset: 20, limit: 10]}
    iex> query
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "foo">, sort: [{"name", :asc}]>

Or to disable counting:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20, filters: %{name: "foo"}, order_by: ["name"]}
    iex> [page, {:query, query}] = parse(Post, ash_pagify, page: [count: false])
    iex> page
    {:page, [count: false, offset: 20, limit: 10]}
    iex> query
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "foo">, sort: [{"name", :asc}]>

Sorting only:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{order_by: ["name"]}
    iex> [page, {:query, query}] = parse(Post, ash_pagify)
    iex> page
    {:page, [count: true, offset: 0, limit: 15]}
    iex> query
    #Ash.Query<resource: AshPagify.Factory.Post, sort: [{"name", :asc}]>

Filtering only:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{filters: %{name: "foo"}}
    iex> [page, {:query, query}] = parse(Post, ash_pagify)
    iex> page
    {:page, [count: true, offset: 0, limit: 15]}
    iex> query
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "foo">>

Pagination only:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20}
    iex> [page, {:query, query}] = parse(Post, ash_pagify)
    iex> page
    {:page, [count: true, offset: 20, limit: 10]}
    iex> query
    #Ash.Query<resource: AshPagify.Factory.Post>

Scoping only:
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{scopes: %{role: :admin}}
    iex> [page, {:query, query}] = parse(Post, ash_pagify)
    iex> page
    {:page, [count: true, offset: 0, limit: 15]}
    iex> query
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<author == "John">>

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

__ Link to this function

# prefix_to_order(arg1)

[ __ View Source ](external_link)
    
    
    @spec prefix_to_order([String.t](external_link)()) :: [Ash.Sort.sort_order](3.3.3/Ash.Sort.html#t:sort_order/0)()

Transforms the given field with order prefix into an `t:Ash.Sort.sort_order/t`.

##  __ Examples
    
    
    iex> AshPagify.prefix_to_order("name")
    :asc
    iex> AshPagify.prefix_to_order("-name")
    :desc
    iex> AshPagify.prefix_to_order("++name")
    :asc_nils_first
    iex> AshPagify.prefix_to_order("--name")
    :desc_nils_last
    iex> AshPagify.prefix_to_order("+name")
    :asc

__ Link to this function

# push_order(ash_pagify, field, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec push_order(t(), [atom](external_link)() | [String.t](external_link)(), [Keyword.t](external_link)()) :: t()

Updates the `order_by` value of a [`AshPagify`](external_link) struct.

  * If the field is not in the current `order_by` value, it will be prepended to the list. By default, the order direction for the field will be set to `:asc`.
  * If the field is already at the front of the `order_by` list, the order direction will be reversed.
  * If the field is already in the list, but not at the front, it will be moved to the front and the order direction will be set to `:asc` (or the custom asc direction supplied in the `:directions` option).
  * If the `:directions` option --a 2-element tuple-- is passed, the first and second elements will be used as custom sort declarations for ascending and descending, respectively.



##  __ Examples
    
    
    iex> ash_pagify = push_order(%AshPagify{}, :name)
    iex> ash_pagify.order_by
    [name: :asc]
    iex> ash_pagify = push_order(ash_pagify, :age)
    iex> ash_pagify.order_by
    [age: :asc, name: :asc]
    iex> ash_pagify = push_order(ash_pagify, :age)
    iex> ash_pagify.order_by
    [age: :desc, name: :asc]
    iex> ash_pagify = push_order(ash_pagify, :species)
    iex> ash_pagify.order_by
    [species: :asc, age: :desc, name: :asc]
    iex> ash_pagify = push_order(ash_pagify, :age)
    iex> ash_pagify.order_by
    [age: :asc, species: :asc, name: :asc]

By default, the function toggles between `:asc` and `:desc`. You can override this with the `:directions` option.
    
    
    iex> directions = {:asc_nils_first, :desc_nils_last}
    iex> ash_pagify = push_order(%AshPagify{}, :ttfb, directions: directions)
    iex> ash_pagify.order_by
    [ttfb: :asc_nils_first]
    iex> ash_pagify = push_order(ash_pagify, :ttfb, directions: directions)
    iex> ash_pagify.order_by
    [ttfb: :desc_nils_last]

This also allows you to sort in descending order initially.
    
    
    iex> directions = {:desc, :asc}
    iex> ash_pagify = push_order(%AshPagify{}, :ttfb, directions: directions)
    iex> ash_pagify.order_by
    [ttfb: :desc]
    iex> ash_pagify = push_order(ash_pagify, :ttfb, directions: directions)
    iex> ash_pagify.order_by
    [ttfb: :asc]

If a string is passed as the second argument, it will be converted to an atom using [`String.to_existing_atom/1`](external_link). If the atom does not exist, the [`AshPagify`](external_link) struct will be returned unchanged.
    
    
    iex> ash_pagify = push_order(%AshPagify{}, "name")
    iex> ash_pagify.order_by
    [name: :asc]
    iex> ash_pagify = push_order(%AshPagify{}, "this_atom_does_not_exist")
    iex> ash_pagify.order_by
    nil

If the `order_by` is either an atom or a binary, the function will return the coerced `order_by` value.
    
    
    iex> ash_pagify = push_order(%AshPagify{order_by: "author"}, :name)
    iex> ash_pagify.order_by
    [name: :asc, author: :asc]
    iex> ash_pagify = push_order(%AshPagify{order_by: :author}, "name")
    iex> ash_pagify.order_by
    [name: :asc, author: :asc]

If the `:limit_order_by` option is passed, the `order_by` will be limited to the given number of fields.
    
    
    iex> ash_pagify = push_order(%AshPagify{order_by: [name: :asc, age: :asc]}, :species, limit_order_by: 1)
    iex> ash_pagify.order_by
    [species: :asc]

__ Link to this function

# query(q, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec query([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Adds clauses for full-text search, scoping, filtering and ordering to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) from the given `AshPagify.t/0` parameter.

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> q = Ash.Query.new(Post)
    iex> ash_pagify = %AshPagify{filters: %{name: "John"}, order_by: ["name"]}
    iex> query(q, ash_pagify)
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "John">, sort: [{"name", :asc}]>

__ Link to this function

# query_for_filters_map(query_or_resource, filters_map, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec query_for_filters_map([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), [map](external_link)(), [Keyword.t](external_link)()) ::
      [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Creates an [`Ash.Query`](3.3.3/Ash.Query.html) from a filter map. Ideally, the filter map was previously compiled with `AshPagify.query_to_filters_map/2`.

Optionally, you can pass the `include_full_text_search?: false` option to disable the full-text search term inclusion in the query.

If the full-text search term is included in the compiled filters map, it will be removed from the filters map before the query is created. Further, the full-text search is validated before beeing applied to the query. If the full-text search is invalid and the `raise_on_invalid_search?` option is not set to `false`, the function will raise an error.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> filters_map = %{"and" => [%{"name" => "foo"}]}
    iex> query_for_filters_map(Post, filters_map)
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "foo">>

__ Link to this function

# query_to_filters_map(query_or_resource, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec query_to_filters_map([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: t()

Takes the AshPagify.scopes and AshPagify.form_filter and compiles them into a map of filters. The filters are merged with the base filters of the AshPagify struct.

At this stage we assume that the filters, filter_form, and scopes have been validated and are valid.

> #### Full-text search
> 
> Per default we do store the full-text search term along with the user provided full-text search options in the compiled filters map. If you do not need to include the full-text search setting in the compiled filters map, you can set the `include_full_text_search?` option to `false`. The full-text search setting is stored under the key `"__full_text_search"` in the resulting filters map. This can be handy if you want to store the current filter state including the full-text search setting and retrieve it later. See `AshPagify.query_for_filters_map/2` for an example.

Precedence:

  * scopes (will overwrite filter_form and filters)
  * filter_form (will overwrite filters)
  * filters



##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> query_to_filters_map(Post, %AshPagify{scopes: [{:role, :admin}]})
    %AshPagify{filters: %{"and" => [%{"author" => "John"}]}, scopes: [role: :admin]}
    
    iex> query_to_filters_map(Post, %AshPagify{filters: %{name: "foo"}})
    %AshPagify{filters: %{"and" => [%{"name" => "foo"}]}}
    
    iex> query_to_filters_map(
    ...>   Post,
    ...>   %AshPagify{
    ...>     filters: %{author: "Author 1"},
    ...>     filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"},
    ...>     scopes: [{:role, :admin}]
    ...>   }
    ...> )
    %AshPagify{
      scopes: [role: :admin],
      filters: %{"and" => [%{"author" => "John"}, %{"name" => %{"eq" => "Post 1"}}]},
      filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}
    }
    
    # Or with a full-text search term
    
    iex> query_to_filters_map(
    ...>   Post,
    ...>   %AshPagify{
    ...>     search: "search term",
    ...>     filters: %{author: "Author 1"},
    ...>     filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"},
    ...>     scopes: [{:role, :admin}]
    ...>   }
    ...> )
    %AshPagify{
      scopes: [role: :admin],
      filters: %{
        "and" => [
          %{"author" => "John"},
          %{"name" => %{"eq" => "Post 1"}}
        ],
        "__full_text_search" => %{
          "search" => "search term"
        }
      },
      filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"},
      search: "search term"
    }

__ Link to this function

# reset_filter_form(ash_pagify)

[ __ View Source ](external_link)
    
    
    @spec reset_filter_form(t()) :: t()

Removes all filter_form from a AshPagify struct.

##  __ Example
    
    
    iex> reset_filter_form(%AshPagify{
    ...>   filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}
    ...> })
    
    %AshPagify{filter_form: %{}}

__ Link to this function

# reset_filters(ash_pagify)

[ __ View Source ](external_link)
    
    
    @spec reset_filters(t()) :: t()

Removes all filters from a AshPagify struct.

##  __ Example
    
    
    iex> reset_filters(%AshPagify{filters: %{
    ...>  name: "foo",
    ...> }})
    %AshPagify{filters: %{}}

__ Link to this function

# reset_order(ash_pagify)

[ __ View Source ](external_link)
    
    
    @spec reset_order(t()) :: t()

Resets the order of a AshPagify struct.

##  __ Example
    
    
    iex> reset_order(%AshPagify{order_by: [name: :asc]})
    %AshPagify{order_by: nil}

__ Link to this function

# run(query_or_resource, ash_pagify, opts \\\ [], args \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec run([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), t(), [Keyword.t](external_link)(), [any](external_link)()) ::
      {[[Ash.Resource.record](3.3.3/Ash.Resource.html#t:record/0)()], [AshPagify.Meta.t](external_link)()}

Applies the given `AshPagify.t/0` to the given [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0) or [`Ash.Resource.t/0`](3.3.3/Ash.Resource.html#t:t/0), retrieves the data and the [`AshPagify.Meta.t/0`](external_link) data.

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine. Or you can use `AshPagify.validate_and_run/4` or `AshPagify.validate_and_run!/4` instead of this function.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> opts = [page: [count: false]]
    iex> ash_pagify = AshPagify.validate!(Post, %{filters: %{name: "inexistent"}}, opts)
    iex> {data, meta} = AshPagify.run(Post, ash_pagify, opts)
    iex> data == []
    true
    iex> match?(%AshPagify.Meta{}, meta)
    true

See the documentation for `AshPagify.validate_and_run/4` for supported options.

__ Link to this function

# scope(q, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec scope([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Applies the `scopes` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

Used by `AshPagify.query/2`. At this stage we assume that the scopes are already compiled and validated. Further, default scopes are loaded into the AshPagify struct.

For a completed list of filter operators, see [`Ash.Filter`](3.3.3/Ash.Filter.html).

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> q = Ash.Query.new(Post)
    iex> ash_pagify = %AshPagify{scopes: %{status: :active}}
    iex> scope(q, ash_pagify)
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<age < [36m10[0m>>

__ Link to this function

# search(q, ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec search([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)(), t(), [Keyword.t](external_link)()) :: [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Applies the `search` parameter of a `AshPagify.t/0` to an [`Ash.Query.t/0`](3.3.3/Ash.Query.html#t:t/0).

Used by `AshPagify.query/2`. AshPagify allows you to perform full-text searches on resources. It uses the built-in [PostgreSQL full-text search functionality](external_link).

Have a look at the [`AshPagify.Tsearch.tsearch_option/0`](external_link) type for a list of available options.

If search is provided and there is no order_by, the query will be sorted by the rank of the search.

This function does _not_ validate or apply default parameters to the given AshPagify struct. Be sure to validate any user-generated parameters with `validate/2` or `validate!/2` before passing them to this function. Doing so will automatically parse user provided input into the correct format for the query engine.

__ Link to this function

# set_filter_form(meta, filter_form, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec set_filter_form([AshPagify.Meta.t](external_link)(), [map](external_link)(), [Keyword.t](external_link)()) :: [AshPagify.Meta.t](external_link)()

Updates the filter form of a AshPagify.Meta struct.

If the filter already exists, it will be replaced with the new value. If the filter does not exist, it will be added to the filter form map.

If the reset option is set to false, the offset will not be reset to 0.

##  __ Examples
    
    
    iex>  set_filter_form(%AshPagify.Meta{}, %{"field" => "name", "operator" => "eq", "value" => "Post 2"})
    %AshPagify.Meta{ash_pagify: %AshPagify{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 2"}}}
    
    iex> set_filter_form(%AshPagify.Meta{ash_pagify: %AshPagify{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}}}, %{"field" => "name", "operator" => "eq", "value" => "Post 2"})
    %AshPagify.Meta{ash_pagify: %AshPagify{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 2"}}}
    
    iex> set_filter_form(%AshPagify.Meta{ash_pagify: %AshPagify{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}}}, %{"negated" => false, "operator" => "and"})
    %AshPagify.Meta{ash_pagify: %AshPagify{filter_form: nil}}

__ Link to this function

# set_limit(ash_pagify, limit, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec set_limit(t(), [pos_integer](external_link)(), [Keyword.t](external_link)()) :: t()

Sets the limit value of a [`AshPagify`](external_link) struct.
    
    
    iex> set_limit(%AshPagify{limit: 10, offset: 10}, 20)
    %AshPagify{limit: 20, offset: 10}
    
    iex> set_limit(%AshPagify{limit: 10, offset: 10}, "20")
    %AshPagify{limit: 20, offset: 10}

The limit will not be allowed to go below 1.
    
    
    iex> set_limit(%AshPagify{}, -5)
    %AshPagify{limit: 25}

If the limit is higher than the max_limit option, the limit will be set to the max_limit.
    
    
    iex> set_limit(%AshPagify{}, 102)
    %AshPagify{limit: 100}

__ Link to this function

# set_offset(ash_pagify, offset)

[ __ View Source ](external_link)
    
    
    @spec set_offset(t(), [non_neg_integer](external_link)() | [binary](external_link)()) :: t()

Sets the offset value of a [`AshPagify`](external_link) struct.
    
    
    iex> set_offset(%AshPagify{limit: 10, offset: 10}, 20)
    %AshPagify{offset: 20, limit: 10}
    
    iex> set_offset(%AshPagify{limit: 10, offset: 10}, "20")
    %AshPagify{offset: 20, limit: 10}

The offset will not be allowed to go below 0.
    
    
    iex> set_offset(%AshPagify{}, -5)
    %AshPagify{offset: 0}

__ Link to this function

# set_scope(ash_pagify, scope, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec set_scope(t(), [map](external_link)(), [Keyword.t](external_link)()) :: t()

Sets the scope of a AshPagify struct.

If the scope already exists, it will be replaced with the new value. If the scope does not exist, it will be added to the scopes map.

If the reset option is set to false, the offset will not be reset to 0.

##  __ Examples
    
    
    iex> set_scope(%AshPagify{offset: 10, scopes: %{status: :active}}, %{status: :inactive})
    %AshPagify{scopes: %{status: :inactive}}
    
    iex> set_scope(%AshPagify{offset: 10, scopes: %{status: :active}}, %{status: :active})
    %AshPagify{scopes: %{status: :active}}

Or add a new scope:
    
    
    iex> set_scope(%AshPagify{offset: 10, scopes: %{role: :admin}}, %{status: :active})
    %AshPagify{scopes: %{status: :active, role: :admin}}
    
    iex> set_scope(%AshPagify{}, %{role: :admin})
    %AshPagify{scopes: %{role: :admin}}

Or without reset offset:
    
    
    iex> set_scope(%AshPagify{offset: 10}, %{status: :active}, reset_on_filter?: false)
    %AshPagify{scopes: %{status: :active}, offset: 10}

__ Link to this function

# set_search(ash_pagify, search, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec set_search(t(), [String.t](external_link)() | nil, [Keyword.t](external_link)()) :: t()

Sets the search of a AshPagify struct.

If the reset option is set to false, the offset will not be reset to 0.

##  __ Examples
    
    
    iex> set_search(%AshPagify{offset: 10}, "term")
    %AshPagify{search: "term"}
    
    iex> set_search(%AshPagify{offset: 10, search: "old"}, "new")
    %AshPagify{search: "new"}
    
    iex> set_search(%AshPagify{offset: 10, search: "old"}, nil)
    %AshPagify{search: nil}

Or without reset offset:
    
    
    iex> set_search(%AshPagify{offset: 10}, "term", reset_on_filter?: false)
    %AshPagify{search: "term", offset: 10}

__ Link to this function

# set_tsvector(tsvector, opts \\\ [])

[ __ View Source ](external_link)

Sets the tsvector value in the full_text_search clause of the `Keyword.t` opts parameter.

If the full_text_search clause does not exist, it will be created. If the tsvector value already exists, it will be updated.

##  __ Examples
    
    
    iex> set_tsvector("bar", [full_text_search: [tsvector: "foo"]])
    [full_text_search: [tsvector: "bar"]]
    
    iex> set_tsvector("bar")
    [full_text_search: [tsvector: "bar"]]
    
    iex> set_tsvector("foo", [full_text_search: [tsvector: "foo"]])
    [full_text_search: [tsvector: "foo"]]

__ Link to this function

# to_next_offset(ash_pagify, total_count \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec to_next_offset(t(), [non_neg_integer](external_link)() | nil) :: t()

Sets the offset of a AshPagify struct to the next page depending on the limit.

If the total count is given as the second argument, the offset will not be increased if the last page has already been reached. You can get the total count from the [`AshPagify.Meta`](external_link) struct. If the AshPagify has an offset beyond the total count, the offset will be set to the last page.

##  __ Examples
    
    
    iex> to_next_offset(%AshPagify{offset: 10, limit: 5})
    %AshPagify{offset: 15, limit: 5}
    
    iex> to_next_offset(%AshPagify{offset: 15, limit: 5}, 21)
    %AshPagify{offset: 20, limit: 5}
    
    iex> to_next_offset(%AshPagify{offset: 15, limit: 5}, 20)
    %AshPagify{offset: 15, limit: 5}
    
    iex> to_next_offset(%AshPagify{offset: 28, limit: 5}, 22)
    %AshPagify{offset: 20, limit: 5}
    
    iex> to_next_offset(%AshPagify{offset: -5, limit: 20})
    %AshPagify{offset: 0, limit: 20}

__ Link to this function

# to_previous_offset(ash_pagify)

[ __ View Source ](external_link)
    
    
    @spec to_previous_offset(t()) :: t()

Sets the offset of a AshPagify struct to the page depending on the limit.

##  __ Examples
    
    
    iex> to_previous_offset(%AshPagify{offset: 20, limit: 10})
    %AshPagify{offset: 10, limit: 10}
    
    iex> to_previous_offset(%AshPagify{offset: 5, limit: 10})
    %AshPagify{offset: 0, limit: 10}
    
    iex> to_previous_offset(%AshPagify{offset: 0, limit: 10})
    %AshPagify{offset: 0, limit: 10}
    
    iex> to_previous_offset(%AshPagify{offset: -2, limit: 10})
    %AshPagify{offset: 0, limit: 10}

__ Link to this function

# validate(query_or_resource, map_or_ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec validate([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), [map](external_link)() | t(), [Keyword.t](external_link)()) ::
      {:ok, t()} | {:error, [AshPagify.Meta.t](external_link)()}

Validates a `AshPagify.t/0`.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> params = %{limit: 10, offset: 20, other_param: "foo"}
    iex> AshPagify.validate(Post, params)
    {:ok, %AshPagify{limit: 10, offset: 20, scopes: %{status: :all}}}
    
    iex> ash_pagify = %AshPagify{offset: -1}
    iex> {:error, %AshPagify.Meta{} = meta} = AshPagify.validate(Post, ash_pagify)
    iex> AshPagify.Error.clear_stacktrace(meta.errors)
    [
      offset: [
        %Ash.Error.Query.InvalidOffset{offset: -1}
      ]
    ]

The function is aware of the [`Ash.Resource`](3.3.3/Ash.Resource.html) type passed either as query or as resource. Thus the function is able to validate that only allowed fields are used for scoping, ordering and filtering. The function will also apply the default_limit and scoping if the resource provides one.

__ Link to this function

# validate!(query_or_resource, map_or_ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec validate!([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), [map](external_link)() | t(), [Keyword.t](external_link)()) :: t()

Same as `AshPagify.validate/2`, but raises a [`AshPagify.Error.Query.InvalidParamsError`](external_link) if the parameters are invalid.

__ Link to this function

# validate_and_run(query_or_resource, map_or_ash_pagify, opts \\\ [], args \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec validate_and_run(
      [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(),
      [map](external_link)() | t(),
      [Keyword.t](external_link)(),
      [any](external_link)()
    ) ::
      {:ok, {[[Ash.Resource.record](3.3.3/Ash.Resource.html#t:record/0)()], [AshPagify.Meta.t](external_link)()}}
      | {:error, [AshPagify.Meta.t](external_link)()}

Validates the given ash_pagify parameters and retrieves the data and meta data on success.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> {:ok, {[%Post{},%Post{},%Post{}], %AshPagify.Meta{}}} =
    ...>   AshPagify.validate_and_run(Post, %AshPagify{})
    iex> {:error, %AshPagify.Meta{} = meta} =
    ...>   AshPagify.validate_and_run(Post, %{limit: -1})
    iex> AshPagify.Error.clear_stacktrace(meta.errors)
    [
      limit: [
        %Ash.Error.Query.InvalidLimit{limit: -1}
      ]
    ]

Or with a custom read action:
    
    
    iex> alias AshPagify.Factory.Post
    iex> alias AshPagify.Factory.Comment
    iex> Comment.read!() |> Enum.count()
    9
    iex> ash_pagify = %AshPagify{limit: 1, filters: %{name: "Post 1"}}
    iex> {:ok, {posts, _meta}} = AshPagify.validate_and_run(Post, ash_pagify)
    iex> post = hd(posts)
    iex> {:ok, {_comments, meta}} = AshPagify.validate_and_run(Comment, %AshPagify{}, [action: :by_post], post.id)
    iex> meta.total_count
    2

Or with scopes:
    
    
    iex> alias AshPagify.Factory.Post
    iex> {:ok, {[%Post{}], %AshPagify.Meta{}}} = AshPagify.validate_and_run(Post, %AshPagify{scopes: %{role: :user}})

##  __ Options

The keyword list `opts` is used to pass additional options to the query engine. It shoud conform to the list of valid options at [`Ash.read/2`](3.3.3/Ash.html#read/2). Furthermore the `AshPagify.option/0` library options are supported.

__ Link to this function

# validate_and_run!(query_or_resource, map_or_ash_pagify, opts \\\ [], args \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec validate_and_run!(
      [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(),
      [map](external_link)() | t(),
      [Keyword.t](external_link)(),
      [any](external_link)()
    ) :: {[[Ash.Resource.record](3.3.3/Ash.Resource.html#t:record/0)()], [AshPagify.Meta.t](external_link)()}

Same as `AshPagify.validate_and_run/4`, but raises on error.

__ Link to this function

# validated_query(query_or_resource, map_or_ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec validated_query([Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)() | [Ash.Resource.t](3.3.3/Ash.Resource.html#t:t/0)(), [map](external_link)() | t(), [Keyword.t](external_link)()) ::
      [Ash.Query.t](3.3.3/Ash.Query.html#t:t/0)()

Validates the given query or resource and ash_pagify parameters and returns a validated query.

##  __ Examples
    
    
    iex> alias AshPagify.Factory.Post
    iex> ash_pagify = %AshPagify{limit: 10, offset: 20, order_by: ["name"], filters: %{name: "foo"}}
    iex> validated_query(Post, ash_pagify)
    #Ash.Query<resource: AshPagify.Factory.Post, filter: #Ash.Filter<name == "foo">, sort: [name: :asc]>
