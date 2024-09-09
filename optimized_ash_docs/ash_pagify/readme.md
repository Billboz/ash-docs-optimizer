# Home — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) Home
- AshPagify
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

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) Home

![Elixir CI](external_link) [![License: MIT](external_link)](https://opensource.org/licenses/MIT) [![Hex version badge](external_link)](https://hex.pm/packages/ash_pagify) [![Hexdocs badge](external_link)](https://hexdocs.pm/ash_pagify)

# AshPagify

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

See [`AshPagify.option/0`](external_link) for a description of all available options.

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

You can use the [`AshPagify.set_search/3`](external_link) function to set the search query in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.set_search(%AshPagify{}, "John")

##  __ Pagination

You can specify an offset to start from and a limit to the number of results.
    
    
    %{offset: 100, limit: 20}

This translates to the following query parameter string:
    
    
    ?offset=100&limit=20

You can use the [`AshPagify.set_offset/2`](external_link) and [`AshPagify.set_limit/3`](external_link) functions to set the offset and limit in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.set_offset(%AshPagify{}, 100)
    ash_pagify = AshPagify.set_limit(ash_pagify, 20)

##  __ Scoping

To apply predefined filters to a query, you can set the `:scopes` parameter. `:scopes` should be a map of predefined filters (maps) available in your resource. The filter name is used to look up the predefined filter. If the filter is found, it is applied to the query. If the filter is not found, an error is raised.
    
    
    %{scopes: %{role: :admin}}

This translates to the following query parameter string:
    
    
    ?scopes[role]=admin

You can use the [`AshPagify.set_scope/3`](external_link) function to set the scopes in the [`AshPagify`](external_link) struct.
    
    
    ash_pagify = AshPagify.set_scope(%AshPagify{}, %{role: :admin})

##  __ Filter forms

Filter forms can be passed as a map of filter conditions. Usually, this map is generated by a filter form component using the [`AshPagify.FilterForm`](external_link) module. [`AshPagify.FilterForm.params_for_query/2`](external_link) can be used to convert the form filter map into a query map.
    
    
    %{filter_form: %{"field" => "name", "operator" => "eq", "value" => "Post 1"}}

This translates to the following query parameter string:
    
    
    ?filter_form[name][eq]=Post%201

You can use the [`AshPagify.set_filter_form/3`](external_link) function to set the filter form in the [`AshPagify`](external_link) struct.
    
    
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

You can use the [`AshPagify.push_order/3`](external_link) function to set the order by clause in the [`AshPagify`](external_link) struct.
    
    
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

Under the hood, the [`AshPagify.validate_and_run/4`](external_link) or [`AshPagify.validate_and_run!/4`](external_link) functions just call [`AshPagify.validate/2`](external_link) and [`AshPagify.run/4`](external_link), which in turn calls [`AshPagify.all/4`](external_link) and [`AshPagify.meta/3`](external_link).

See [`AshPagify.Meta`](external_link) for descriptions of the meta fields.

Alternatively, you may separate parameter validation and data fetching into different steps using the [`AshPagify.validate/2`](external_link), [`AshPagify.validate!/2`](external_link), and [`AshPagify.run/4`](external_link) functions. This allows you to manipulate the validated parameters, to modify the query depending on the parameters, or to move the parameter validation to a different layer of your application.
    
    
    with {:ok, ash_pagify} <- AshPagify.validate(Post, params) do
      {:ok, {results, meta}} = AshPagify.run(Post, ash_pagify)
    end

The aforementioned functions internally call the lower-level functions [`AshPagify.all/4`](external_link) and [`AshPagify.meta/3`](external_link). If you have advanced requirements, you might prefer to use these functions directly. However, it's important to note that these lower-level functions do not validate the parameters. If parameters are generated based on user input, they should always be validated first using [`AshPagify.validate/2`](external_link) or [`AshPagify.validate!/2`](external_link) to ensure safe execution.

##  __ Release Management

We use [git_opts](external_link) to manage our releases. To create a new release, run:
    
    
    mix git_ops.release
    

This will bump the version, create a new tag, and push the changes to the repository. The GitHub action will then build and publish the new version to Hex.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Change Log  ](external_link)
