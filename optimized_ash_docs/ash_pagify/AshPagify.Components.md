# AshPagify.Components — ash_pagify v1.0.2

Project: ash_pagify v1.0.2

## Table of Contents

- [ __ View Source ](external_link) AshPagify.Components (ash_pagify v1.0.2)
  - __ Introduction
  - __ Customization
  - __ Hiding default parameters
  - __ Links
  - __ Using JS commands
- __ Summary
  - Types
  - Functions
- __ Types
- pagination_option()
- pagination_path()
- table_option()
- __ Functions
- build_path(path, meta_or_ash_pagify_or_params, opts \\\ [])
  - __ Examples
    - __ With a verified route
    - __ With an MFA tuple
    - __ With a function/arguments tuple
    - __ Passing a [`AshPagify.Meta`](external_link) struct or a keyword list
    - __ Additional path parameters
    - __ Additional query parameters
    - __ Set page as path parameter
    - __ Set filter_form value as path parameter
    - __ If only path is set
- build_scope_path(path, meta, scope, opts \\\ [])
- pagination(assigns)
  - __ Examples
  - __ Page link options
  - __ Attributes
- table(assigns)
  - __ Example
  - __ Attributes
  - __ Slots
- to_query(ash_pagify, opts \\\ [])
  - __ Encoded parameters
  - __ Default parameters
  - __ Encoding queries
  - __ Examples

__

Search documentation of ash_pagify __ __

__ Settings

#  [ __ View Source ](external_link) AshPagify.Components (ash_pagify v1.0.2)

Phoenix headless components for pagination and sortable tables with [`AshPagify`](external_link).

##  __ Introduction

Please refere to the _Usage_ section in [`AshPagify`](external_link) for more information.

This module provides two components: [`AshPagify.Components.Pagination`](external_link) and [`AshPagify.Components.Table`](external_link). The components are designed to work with [`AshPagify`](external_link) and [`Ash.Resource`](3.3.3/Ash.Resource.html) structs. They are by default unstyled components which add basic classes and attributes to the elements they render. However, you can customize the components by passing options.

Further, [`AshPagify.Components`](external_link) provides helper functions to build paths for pagination and sorting links. The paths are built based on the current query parameters and the new parameters that are passed to the function.

##  __ Customization

The default classes, attributes, texts and symbols can be overridden by passing the `opts` assign. Since you probably will use the same `opts` in all your templates, you can globally configure an `opts` provider function for each component.

The functions have to return the options as a keyword list. The overrides are deep-merged into the default options.
    
    
    defmodule MyAppWeb.CoreComponents do
      use Phoenix.Component
    
      def pagination_opts do
         [
          ellipsis_attrs: [class: "ellipsis"],
          ellipsis_content: "‥",
          next_link_attrs: [class: "next"],
          next_link_content: next_icon(),
          page_links: {:ellipsis, 7},
          pagination_link_aria_label: &"#{&1}ページ目へ",
          previous_link_attrs: [class: "prev"],
          previous_link_content: previous_icon()
        ]
      end
    
      defp next_icon do
        assigns = %{}
    
        ~H"""
        <i class="fas fa-chevron-right"/>
        """
      end
    
      defp previous_icon do
        assigns = %{}
    
        ~H"""
        <i class="fas fa-chevron-left"/>
        """
      end
    
      def table_opts do
        [
          container: true,
          container_attrs: [class: "table-container"],
          no_results_content: no_results_content(),
          table_attrs: [class: "table"]
        ]
      end
    
      defp no_results_content do
        assigns = %{}
    
        ~H"""
        <p>Nothing found.</p>
        """
      end
    end

Refer to `pagination_option/0` and `table_option/0` for a list of available options and defaults.

Once you have defined these functions, you can reference them with a module/function tuple in `config/config.exs`.
    
    
    config :ash_pagify,
      pagination: [opts: {MyAppWeb.CoreComponents, :pagination_opts}],
      table: [opts: {MyAppWeb.CoreComponents, :table_opts}]

##  __ Hiding default parameters

Default values for scoping, pagination and ordering are omitted from the query parameters. AshPagify.Components function will pick up the default values from the [`Ash.Resource`](3.3.3/Ash.Resource.html) specifications.

##  __ Links

Links are generated with [`Phoenix.Component.link/1`](external_link). This will lead to `<a>` tags with `data-phx-link` and `data-phx-link-state` attributes, which will be ignored outside of LiveViews and LiveComponents.

When used within a LiveView or LiveComponent, you will need to handle the new params in the [`Phoenix.LiveView.handle_params/3`](external_link) callback of your LiveView module.

##  __ Using JS commands

You can pass a [`Phoenix.LiveView.JS`](external_link) command as `on_paginate` and `on_sort` attributes.

If used with the `path` attribute, the URL will be patched _and_ the given JS command will be executed.

If used without the `path` attribute, you will need to include a `push` command to trigger an event when a pagination or sort link is clicked.

You can set a different target by assigning a `:target`. The value will be used as the `phx-target` attribute.
    
    
    <AshPagify.Components.table
      items={@items}
      meta={@meta}
      on_sort={JS.push("sort-posts")}
      target={@myself}
    />
    
    <AshPagify.Components.pagination
      meta={@meta}
      on_paginate={JS.push("paginate-posts")}
      target={@myself}
    />

You will need to handle the event in the [`Phoenix.LiveView.handle_event/3`](external_link) or [`Phoenix.LiveComponent.handle_event/3`](external_link) callback of your LiveView or LiveComponent module. The event name will be the one you set with the `:event` option.
    
    
    @impl true
    def handle_event("paginate-posts", %{"offset" => offset}, socket) do
      ash_pagify = AshPagify.set_offset(socket.assigns.meta.ash_pagify, offset)
    
      with {:ok, {posts, meta}} <- Post.list_posts(ash_pagify) do
        {:noreply, assign(socket, posts: posts, meta: meta)}
      end
    end
    
    @impl true
    def handle_event("sort-posts", %{"order" => order}, socket) do
      ash_pagify = AshPagify.push_order(socket.assigns.meta.ash_pagify, order)
    
      with {:ok, {posts, meta}} <- Post.list_posts(ash_pagify) do
        {:noreply, assign(socket, posts: posts, meta: meta)}
      end
    end

#  __ Summary

##  Types

pagination_option()

Defines the available options for `AshPagify.Components.pagination/1`.

pagination_path()

Defines the available types for the `path` attribute of `AshPagify.Components.pagination/1`.

table_option()

Defines the available options for `AshPagify.Components.table/1`.

##  Functions

build_path(path, meta_or_ash_pagify_or_params, opts \\\ [])

Builds a path that includes query parameters for the given [`AshPagify`](external_link) struct using the referenced Components path helper function.

build_scope_path(path, meta, scope, opts \\\ [])

Wrapper around `build_path/3` that builds a path with the updated scope.

pagination(assigns)

Generates a pagination element.

table(assigns)

Generates a table with sortable columns.

to_query(ash_pagify, opts \\\ [])

Converts a AshPagify struct into a keyword list that can be used as a query with Phoenix verified routes or route helper functions.

#  __ Types

__ Link to this type

# pagination_option()

[ __ View Source ](external_link)
    
    
    @type pagination_option() ::
      {:current_link_attrs, [keyword](external_link)()}
      | {:disabled_class, [String.t](external_link)()}
      | {:ellipsis_attrs, [keyword](external_link)()}
      | {:ellipsis_content, [Phoenix.HTML.safe](external_link)() | [binary](external_link)()}
      | {:next_link_attrs, [keyword](external_link)()}
      | {:next_link_content, [Phoenix.HTML.safe](external_link)() | [binary](external_link)()}
      | {:page_links, :all | :hide | {:ellipsis, [pos_integer](external_link)()}}
      | {:pagination_link_aria_label, ([pos_integer](external_link)() -> [binary](external_link)())}
      | {:pagination_link_attrs, [keyword](external_link)()}
      | {:previous_link_attrs, [keyword](external_link)()}
      | {:previous_link_content, [Phoenix.HTML.safe](external_link)() | [binary](external_link)()}
      | {:wrapper_attrs, [keyword](external_link)()}

Defines the available options for `AshPagify.Components.pagination/1`.

  * `:current_link_attrs` \- The attributes for the link to the current page. Default: `[class: "pagination-link is-current", aria: [current: "page"]]`.
  * `:disabled_class` \- The class which is added to disabled links. Default: `"disabled"`.
  * `:ellipsis_attrs` \- The attributes for the `<span>` that wraps the ellipsis. Default: `[class: "pagination-ellipsis"]`.
  * `:ellipsis_content` \- The content for the ellipsis element. Default: `{:safe, "&hellip;"}`.
  * `:next_link_attrs` \- The attributes for the link to the next page. Default: `[aria: [label: "Go to next page"], class: "pagination-next"]`.
  * `:next_link_content` \- The content for the link to the next page. Default: `"Next"`.
  * `:page_links` \- Specifies how many page links should be rendered. Default: `:all`.
    * `:all` \- Renders all page links.
    * `{:ellipsis, n}` \- Renders `n` page links. Renders ellipsis elements if there are more pages than displayed.
    * `:hide` \- Does not render any page links.
  * `:pagination_link_aria_label` \- 1-arity function that takes a page number and returns an aria label for the corresponding page link. Default: `&"Go to page #{&1}"`.
  * `:pagination_link_attrs` \- The attributes for the pagination links. Default: `[class: "pagination-link"]`.
  * `:previous_link_attrs` \- The attributes for the link to the previous page. Default: `[aria: [label: "Go to previous page"], class: "pagination-previous"]`.
  * `:previous_link_content` \- The content for the link to the previous page. Default: `"Previous"`.
  * `:wrapper_attrs` \- The attributes for the `<nav>` element that wraps the pagination links. Default: `[class: "pagination", role: "navigation", aria: [label: "pagination"]]`.



__ Link to this type

# pagination_path()

[ __ View Source ](external_link)
    
    
    @type pagination_path() ::
      [String.t](external_link)()
      | {[module](external_link)(), [atom](external_link)(), [[any](external_link)()]}
      | {[function](external_link)(), [[any](external_link)()]}
      | ([keyword](external_link)() -> [String.t](external_link)())

Defines the available types for the `path` attribute of `AshPagify.Components.pagination/1`.

__ Link to this type

# table_option()

[ __ View Source ](external_link)
    
    
    @type table_option() ::
      {:container, [boolean](external_link)()}
      | {:container_attrs, [keyword](external_link)()}
      | {:no_results_content, [Phoenix.HTML.safe](external_link)() | [binary](external_link)()}
      | {:symbol_asc, [Phoenix.HTML.safe](external_link)() | [binary](external_link)()}
      | {:symbol_attrs, [keyword](external_link)()}
      | {:symbol_desc, [Phoenix.HTML.safe](external_link)() | [binary](external_link)()}
      | {:symbol_unsorted, [Phoenix.HTML.safe](external_link)() | [binary](external_link)()}
      | {:table_attrs, [keyword](external_link)()}
      | {:tbody_attrs, [keyword](external_link)()}
      | {:thead_attrs, [keyword](external_link)()}
      | {:tbody_td_attrs, [keyword](external_link)()}
      | {:tbody_tr_attrs, [keyword](external_link)() | ([any](external_link)() -> [keyword](external_link)())}
      | {:th_wrapper_attrs, [keyword](external_link)()}
      | {:thead_th_attrs, [keyword](external_link)()}
      | {:thead_tr_attrs, [keyword](external_link)()}
      | {:limit_order_by, [pos_integer](external_link)()}

Defines the available options for `AshPagify.Components.table/1`.

  * `:container` \- Wraps the table in a `<div>` if `true`. Default: `false`.
  * `:container_attrs` \- The attributes for the table container. Default: `[class: "table-container"]`.
  * `:no_results_content` \- Any content that should be rendered if there are no results. Default: `<p>No results.</p>`.
  * `:table_attrs` \- The attributes for the `<table>` element. Default: `[]`.
  * `:th_wrapper_attrs` \- The attributes for the `<span>` element that wraps the header link and the order direction symbol. Default: `[]`.
  * `:symbol_asc` \- The symbol that is used to indicate that the column is sorted in ascending order. Default: `"▴"`.
  * `:symbol_attrs` \- The attributes for the `<span>` element that wraps the order direction indicator in the header columns. Default: `[class: "order-direction"]`.
  * `:symbol_desc` \- The symbol that is used to indicate that the column is sorted in ascending order. Default: `"▾"`.
  * `:symbol_unsorted` \- The symbol that is used to indicate that the column is not sorted. Default: `nil`.
  * `:tbody_attrs`: Attributes to be added to the `<tbody>` tag within the `<table>`. Default: `[]`.
  * `:tbody_td_attrs`: Attributes to be added to each `<td>` tag within the `<tbody>`. Default: `[]`.
  * `:thead_attrs`: Attributes to be added to the `<thead>` tag within the `<table>`. Default: `[]`.
  * `:tbody_tr_attrs`: Attributes to be added to each `<tr>` tag within the `<tbody>`. A function with arity of 1 may be passed to dynamically generate the attrs based on row data. Default: `[]`.
  * `:thead_th_attrs`: Attributes to be added to each `<th>` tag within the `<thead>`. Default: `[]`.
  * `:thead_tr_attrs`: Attributes to be added to each `<tr>` tag within the `<thead>`. Default: `[]`.
  * `:limit_order_by` \- Limit the number of applied order_by fields. Default: `nil`.



#  __ Functions

__ Link to this function

# build_path(path, meta_or_ash_pagify_or_params, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_path(
      pagination_path(),
      [AshPagify.Meta.t](external_link)() | [AshPagify.t](external_link)() | [Keyword.t](external_link)(),
      [Keyword.t](external_link)()
    ) ::
      [String.t](external_link)()

Builds a path that includes query parameters for the given [`AshPagify`](external_link) struct using the referenced Components path helper function.

The first argument can be either one of:

  * an MFA tuple (module, function name as atom, arguments)
  * a 2-tuple (function, arguments)
  * a URL string, usually produced with a verified route (e.g. `~p"/some/path"`)
  * a function that takes the AshPagify parameters as a keyword list as an argument



Default values for `scopes`, `limit` and `order_by` are omitted from the query parameters. To pick up the default parameters from an [`Ash.Resource`](3.3.3/Ash.Resource.html), you need to pass the `:for` option. If you pass a [`AshPagify.Meta`](external_link) struct as the second argument, these options are retrieved from the struct automatically.

##  __ Examples

###  __ With a verified route

The examples below use plain URL strings without the p-sigil, so that the doc tests work, but in your application, you can use verified routes or anything else that produces a URL.
    
    
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> path = build_path("/posts", ash_pagify)
    iex> %URI{path: parsed_path, query: parsed_query} = URI.parse(path)
    iex> {parsed_path, URI.decode_query(parsed_query)}
    {"/posts", %{"offset" => "20", "limit" => "10"}}

The AshPagify query parameters will be merged into existing query parameters.
    
    
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> path = build_path("/posts?category=A", ash_pagify)
    iex> %URI{path: parsed_path, query: parsed_query} = URI.parse(path)
    iex> {parsed_path, URI.decode_query(parsed_query)}
    {"/posts", %{"offset" => "20", "limit" => "10", "category" => "A"}}

###  __ With an MFA tuple
    
    
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> build_path(
    ...>   {AshPagify.ComponentsTest, :route_helper, [%Plug.Conn{}, :posts]},
    ...>   ash_pagify
    ...> )
    "/posts?limit=10&offset=20"

###  __ With a function/arguments tuple
    
    
    iex> post_path = fn _conn, :index, query ->
    ...>   "/posts?" <> Plug.Conn.Query.encode(query)
    ...> end
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> build_path({post_path, [%Plug.Conn{}, :index]}, ash_pagify)
    "/posts?limit=10&offset=20"

We're defining fake path helpers for the scope of the doctests. In a real Phoenix application, you would pass something like `{Routes, :post_path, args}` or `{&Routes.post_path/3, args}` as the first argument.

###  __ Passing a [`AshPagify.Meta`](external_link) struct or a keyword list

You can also pass a [`AshPagify.Meta`](external_link) struct or a keyword list as the third argument.
    
    
    iex> post_path = fn _conn, :index, query ->
    ...>   "/posts?" <> Plug.Conn.Query.encode(query)
    ...> end
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> meta = %AshPagify.Meta{ash_pagify: ash_pagify, resource: AshPagify.Factory.Post}
    iex> build_path({post_path, [%Plug.Conn{}, :index]}, meta)
    "/posts?limit=10&offset=20"
    iex> query_params = to_query(ash_pagify)
    iex> build_path({post_path, [%Plug.Conn{}, :index]}, query_params)
    "/posts?limit=10&offset=20"

###  __ Additional path parameters

If the path helper takes additional path parameters, just add them to the second argument.
    
    
    iex> user_post_path = fn _conn, :index, id, query ->
    ...>   "/users/#{id}/posts?" <> Plug.Conn.Query.encode(query)
    ...> end
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> build_path({user_post_path, [%Plug.Conn{}, :index, 123]}, ash_pagify)
    "/users/123/posts?limit=10&offset=20"

###  __ Additional query parameters

If the last path helper argument is a query parameter list, the AshPagify parameters are merged into it.
    
    
    iex> post_url = fn _conn, :index, query ->
    ...>   "https://posts.ash_pagify/posts?" <> Plug.Conn.Query.encode(query)
    ...> end
    iex> ash_pagify = %AshPagify{order_by: [name: :desc]}
    iex> build_path({post_url, [%Plug.Conn{}, :index, [user_id: 123]]}, ash_pagify)
    "https://posts.ash_pagify/posts?user_id=123&order_by[]=-name"
    iex> build_path(
    ...>   {post_url,
    ...>    [%Plug.Conn{}, :index, [category: "small", user_id: 123]]},
    ...>   ash_pagify
    ...> )
    "https://posts.ash_pagify/posts?category=small&user_id=123&order_by[]=-name"

###  __ Set page as path parameter

Finally, you can also pass a function that takes the AshPagify parameters as a keyword list as an argument. Default values will not be included in the parameters passed to the function. You can use this if you need to set some of the parameters as path parameters instead of query parameters.
    
    
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> build_path(
    ...>   fn params ->
    ...>     {offset, params} = Keyword.pop(params, :offset)
    ...>     query = Plug.Conn.Query.encode(params)
    ...>     if offset, do: "/posts/page/#{offset}?#{query}", else: "/posts?#{query}"
    ...>   end,
    ...>   ash_pagify
    ...> )
    "/posts/page/20?limit=10"

Note that in this example, the anonymous function just returns a string. With Phoenix 1.7, you will be able to use verified routes.
    
    
    build_path(
      fn params ->
        {offset, query} = Keyword.pop(params, :offset)
        if offset, do: ~p"/posts/page/#{offset}?#{query}", else: ~p"/posts?#{query}"
      end,
      ash_pagify
    )

Note that the keyword list passed to the path builder function is built using [`Plug.Conn.Query.encode/2`](external_link), which means filter_forms are formatted as maps.

###  __ Set filter_form value as path parameter
    
    
    iex> ash_pagify = %AshPagify{
    ...>   offset: 20,
    ...>   order_by: [:updated_at],
    ...>   filter_form: %{
    ...>     "field" => "author",
    ...>     "operator" => "eq",
    ...>     "value" => "John"
    ...>   }
    ...> }
    iex> build_path(
    ...>   fn params ->
    ...>     {offset, params} = Keyword.pop(params, :offset)
    ...>     filter_form = Keyword.get(params, :filter_form, %{})
    ...>     author = Map.get(filter_form, "value", nil)
    ...>     params = Keyword.put(params, :filter_form, %{})
    ...>     query = Plug.Conn.Query.encode(params)
    ...>
    ...>     case {offset, author} do
    ...>       {nil, nil} -> "/posts?#{query}"
    ...>       {offset, nil} -> "/posts/page/#{offset}?#{query}"
    ...>       {nil, author} -> "/posts/author/#{author}?#{query}"
    ...>       {offset, author} -> "/posts/author/#{author}/page/#{offset}?#{query}"
    ...>     end
    ...>   end,
    ...>   ash_pagify
    ...> )
    "/posts/author/John/page/20?order_by[]=updated_at"

###  __ If only path is set

If only the path is set, it is returned as is.
    
    
    iex> build_path("/posts", nil)
    "/posts"

__ Link to this function

# build_scope_path(path, meta, scope, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec build_scope_path(pagination_path(), [AshPagify.Meta.t](external_link)(), [map](external_link)(), [Keyword.t](external_link)()) ::
      [String.t](external_link)()

Wrapper around `build_path/3` that builds a path with the updated scope.

Examples
    
    
    iex> ash_pagify = %AshPagify{offset: 20, limit: 10}
    iex> meta = %AshPagify.Meta{ash_pagify: ash_pagify, resource: AshPagify.Factory.Post}
    iex> build_scope_path("/posts", meta, %{status: :active})
    "/posts?limit=10&scopes[status]=active"

__ Link to this function

# pagination(assigns)

[ __ View Source ](external_link)
    
    
    @spec pagination([map](external_link)()) :: [Phoenix.LiveView.Rendered.t](external_link)()

Generates a pagination element.

##  __ Examples
    
    
    <AshPagify.Components.pagination
      meta={@meta}
      path={~p"/posts"}
    />
    
    <AshPagify.Components.pagination
      meta={@meta}
      path={{Routes, :post_path, [@socket, :index]}}
    />

##  __ Page link options

By default, page links for all pages are shown. You can limit the number of page links or disable them altogether by passing the `:page_links` option.

  * `:all`: Show all page links.
  * `:hide`: Don't show any page links. Only the previous/next links will be shown.
  * `{:ellipsis, x}`: Limits the number of page links. The first and last page are always displayed. The `x` refers to the number of additional page links to show (default n=4).



##  __ Attributes

  * `meta` ([`AshPagify.Meta`](external_link)) (required) - The meta information of the query as returned by the [`AshPagify`](external_link) query functions.

  * `path` (`:any`) - If set, the current view is patched with updated query parameters when a pagination link is clicked. In case the `on_paginate` attribute is set as well, the URL is patched _and_ the given command is executed.

The value must be either a URI string (Phoenix verified route), an MFA or FA tuple (Phoenix route helper), or a 1-ary path builder function. See `AshPagify.Components.build_path/3` for details.

Defaults to `nil`.

  * `on_paginate` ([`Phoenix.LiveView.JS`](external_link)) - A [`Phoenix.LiveView.JS`](external_link) command that is triggered when a pagination link is clicked.

If used without the `path` attribute, you should include a `push` operation to handle the event with the `handle_event` callback.
    
        <.pagination
      meta={@meta}
      on_paginate={
        JS.dispatch("my_app:scroll_to", to: "#post-table") |> JS.push("paginate")
      }
    />

If used with the `path` attribute, the URL is patched _and_ the given JS command is executed.
    
        <.pagination
      meta={@meta}
      path={~"/posts"}
      on_paginate={JS.dispatch("my_app:scroll_to", to: "#post-table")}
    />

With the above attributes in place, you can add the following JavaScript to your application to scroll to the top of your table whenever a pagination link is clicked:
    
        window.addEventListener("my_app:scroll_to", (e) => {
      e.target.scrollIntoView();
    });

You can use CSS to scroll to the new position smoothly.
    
        html {
      scroll-behavior: smooth;
    }

Defaults to `nil`.

  * `target` (`:string`) - Sets the `phx-target` attribute for the pagination links. Defaults to `nil`.

  * `opts` (`:list`) - Options to customize the pagination. See `AshPagify.Components.pagination_option/0`. Note that the options passed to the function are deep merged into the default options. Since these options will likely be the same for all the tables in a project, it is recommended to define them once in a function or set them in a wrapper function as described in the `Customization` section of the module documentation.

Defaults to `[]`.




__ Link to this function

# table(assigns)

[ __ View Source ](external_link)
    
    
    @spec table([map](external_link)()) :: [Phoenix.LiveView.Rendered.t](external_link)()

Generates a table with sortable columns.

##  __ Example
    
    
    <AshPagify.Components.table items={@posts} meta={@meta} path={~p"/posts"}>
      <:col :let={post} label="Name" field={:name}><%= post.name %></:col>
      <:col :let={post} label="Author" field={:author}><%= post.author %></:col>
    </AshPagify.Components.table>

##  __ Attributes

  * `id` (`:string`) - ID used on the table. If not set, an ID is chosen based on the resource module derived from the [`AshPagify.Meta`](external_link) struct.

The ID is necessary in case the table is fed with a LiveView stream.

  * `items` (`:list`) (required) - The list of items to be displayed in rows. This is the result list returned by the query.

  * `meta` ([`AshPagify.Meta`](external_link)) - The [`AshPagify.Meta`](external_link) struct returned by the query function. If omitted
    
        the table will be rendered without order_by links.

Defaults to `nil`.

  * `path` (`:any`) - If set, the current view is patched with updated query parameters when a header link for sorting is clicked. In case the `on_sort` attribute is set as well, the URL is patched _and_ the given JS command is executed.

The value must be either a URI string (Phoenix verified route), an MFA or FA tuple (Phoenix route helper), or a 1-ary path builder function. See `AshPagify.Components.build_path/3` for details.

Defaults to `nil`.

  * `on_sort` ([`Phoenix.LiveView.JS`](external_link)) - A [`Phoenix.LiveView.JS`](external_link) command that is triggered when a header link for sorting is clicked.

If used without the `path` attribute, you should include a `push` operation to handle the event with the `handle_event` callback.
    
        <.table
      items={@items}
      meta={@meta}
      on_sort={
        JS.dispatch("my_app:scroll_to", to: "#post-table") |> JS.push("sort")
      }
    />

If used with the `path` attribute, the URL is patched _and_ the given JS command is executed.
    
        <.table
      meta={@meta}
      path={~"/posts"}
      on_sort={JS.dispatch("my_app:scroll_to", to: "#post-table")}
    />

Defaults to `nil`.

  * `target` (`:string`) - Sets the `phx-target` attribute for the header links. Defaults to `nil`.

  * `caption_text` (`:string`) - Content for the `<caption>` element. Defaults to `nil`.

  * `opts` (`:list`) - Keyword list with additional options (see `AshPagify.Components.table_option/0`). Note that the options passed to the function are deep merged into the default options. Since these options will likely be the same for all the tables in a project, it is recommended to define them once in a function or set them in a wrapper function as described in the `Customization` section of the module documentation.

Defaults to `[]`.

  * `row_id` (`:any`) - Overrides the default function that retrieves the row ID from a stream item. Defaults to `nil`.

  * `row_click` ([`Phoenix.LiveView.JS`](external_link)) - Sets the `phx-click` function attribute for each row `td`. Expects to be a function that receives a row item as an argument. This does not add the `phx-click` attribute to the `action` slot.

Example:
    
        row_click={&JS.navigate(~p"/users/#{&1}")}

Defaults to `nil`.

  * `row_item` (`:any`) - This function is called on the row item before it is passed to the :col and :action slots.

Defaults to `&Function.identity/1`.




##  __ Slots

  * `caption` \- The slot for the table caption. If set, the content of the slot is rendered as the content of the `<caption>` element.
    
        <:caption>
      <h2>Posts</h2>
    </:caption>

  * `col` (required) - For each column to render, add one `<:col>` element.
    
        <:col :let={post} label="Name" field={:name} col_style="width: 20%;">
      <%= post.name %>
    </:col>

Any additional assigns will be added as attributes to the `<td>` elements.

Accepts attributes:

    * `label` (`:any`) - The content for the header column.

    * `field` (`:atom`) - The field name for sorting. If set and the field is configured as sortable in the resource, the column header will be clickable, allowing the user to sort by that column. If the field is not marked as sortable or if the `field` attribute is omitted or set to `nil` or `false`, the column header will not be clickable.

    * `directions` (`:any`) - An optional 2-element tuple used for custom ascending and descending sort behavior for the column, i.e. `{:asc_nils_last, :desc_nils_first}`

    * `col_style` (`:string`) - If set, a `<colgroup>` element is rendered and the value of the `col_style` assign is set as `style` attribute for the `<col>` element of the respective column. You can set the `width`, `background`, `border`, and `visibility` of a column this way.

    * `col_class` (`:string`) - If set, a `<colgroup>` element is rendered and the value of the `col_class` assign is set as `class` attribute for the `<col>` element of the respective column. You can set the `width`, `background`, `border`, and `visibility` of a column this way.

    * `class` (`:string`) - Additional classes to add to the `<th>` and `<td>` element. Will be merged with the `thead_attr_attrs` and `tbody_td_attrs` attributes.

    * `thead_th_attrs` (`:list`) - Additional attributes to pass to the `<th>` element as a static keyword list. Note that these attributes will override any conflicting `thead_th_attrs` that are set at the table level.

    * `th_wrapper_attrs` (`:list`) - Additional attributes for the `<span>` element that wraps the header link and the order direction symbol. Note that these attributes will override any conflicting `th_wrapper_attrs` that are set at the table level.

    * `tbody_td_attrs` (`:any`) - Additional attributes to pass to the `<td>` element. May be provided as a static keyword list, or as a 1-arity function to dynamically generate the list using row data. Note that these attributes will override any conflicting `tbody_td_attrs` that are set at the table level.

  * `action` \- The slot for showing user actions in the last table column. These columns do not receive the `row_click` attribute.
    
        <:action :let={user}>
      <.link navigate={~p"/users/#{user}"}>Show</.link>
    </:action>

Accepts attributes:

    * `label` (`:string`) - The content for the header column.

    * `show` (`:boolean`) - Boolean value to conditionally show the column. Defaults to `true`.

    * `hide` (`:boolean`) - Boolean value to conditionally hide the column. Defaults to `false`.

    * `col_style` (`:string`) - If set, a `<colgroup>` element is rendered and the value of the `col_style` assign is set as `style` attribute for the `<col>` element of the respective column. You can set the `width`, `background`, `border`, and `visibility` of a column this way.

    * `col_class` (`:string`) - If set, a `<colgroup>` element is rendered and the value of the `col_class` assign is set as `class` attribute for the `<col>` element of the respective column. You can set the `width`, `background`, `border`, and `visibility` of a column this way.

    * `class` (`:string`) - Additional classes to add to the `<th>` and `<td>` element. Will be merged with the `thead_attr_attrs` and `tbody_td_attrs` attributes.

    * `thead_th_attrs` (`:list`) - Any additional attributes to pass to the `<th>` as a keyword list.

    * `tbody_td_attrs` (`:any`) - Any additional attributes to pass to the `<td>`. Can be a keyword list or a function that takes the current row item as an argument and returns a keyword list.

  * `foot` \- You can optionally add a `foot`. The inner block will be rendered inside a `tfoot` element.
    
        <AshPagify.Components.table>
      <:foot>
        <tr><td>Total: <span class="total"><%= @total %></span></td></tr>
      </:foot>
    </AshPagify.Components.table>




__ Link to this function

# to_query(ash_pagify, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec to_query([AshPagify.t](external_link)(), [Keyword.t](external_link)()) :: [Keyword.t](external_link)()

Converts a AshPagify struct into a keyword list that can be used as a query with Phoenix verified routes or route helper functions.

##  __ Encoded parameters

The following parameters are encoded as strings:

  * `:search`
  * `:scopes`
  * `:filter_form`
  * `:order_by`
  * `:limit`
  * `:offset`



##  __ Default parameters

Default parameters for the limit, scopes, filter_form and order parameters are omitted. The defaults are determined by calling [`AshPagify.get_option/3`](external_link).

  * Pass the `:for` option to pick up the default values from an [`Ash.Resource`](3.3.3/Ash.Resource.html).
  * If the [`Ash.Resource`](3.3.3/Ash.Resource.html) has no default options set, the function will fall back to the application environment.



##  __ Encoding queries

To encode the returned query as a string, you will need to use [`Plug.Conn.Query.encode/1`](external_link). [`URI.encode_query/1`](external_link) does not support bracket notation for arrays and maps.

##  __ Examples
    
    
    iex> to_query(%AshPagify{})
    []
    
    iex> f = %AshPagify{offset: 40, limit: 20}
    iex> to_query(f)
    [limit: 20, offset: 40]
    
    iex> f = %AshPagify{offset: 40, limit: 20}
    iex> to_query(f, default_limit: 20)
    [offset: 40]
    
    iex> f = %AshPagify{order_by: [name: :asc]}
    iex> to_query(f, for: AshPagify.Factory.Post)
    []
    
    iex> f = %AshPagify{scopes: %{status: :active}}
    iex> to_query(f, for: AshPagify.Factory.Post)
    [scopes: %{status: :active}]
    
    iex> f = %AshPagify{search: "foo"}
    iex> to_query(f, for: AshPagify.Factory.Post)
    [search: "foo"]

Encoding the query as a string:
    
    
    iex> f = %AshPagify{order_by: [name: :desc, age: :asc]}
    iex> to_query(f)
    [order_by: ["-name", "age"]]
    iex> f |> to_query |> Plug.Conn.Query.encode()
    "order_by[]=-name&order_by[]=age"
    
    iex> f = %AshPagify{filter_form: %{"field" => "comments_count", "operator" => "gt", "value" => 2}}
    iex> to_query(f)
    [filter_form: %{"field" => "comments_count", "operator" => "gt", "value" => 2}]
    iex> f |> to_query |> Plug.Conn.Query.encode()
    "filter_form[field]=comments_count&filter_form[operator]=gt&filter_form[value]=2"
    
    iex> f = %AshPagify{scopes: %{status: :active}}
    iex> to_query(f)
    [scopes: %{status: :active}]
    iex> f |> to_query |> Plug.Conn.Query.encode()
    "scopes[status]=active"
    
    iex> f = %AshPagify{search: "foo"}
    iex> to_query(f)
    [search: "foo"]
    iex> f |> to_query |> Plug.Conn.Query.encode()
    "search=foo"
