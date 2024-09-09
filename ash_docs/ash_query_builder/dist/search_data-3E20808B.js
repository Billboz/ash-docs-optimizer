searchData={"items":[{"type":"protocol","title":"AshQueryBuilder.Filter.Protocol","doc":"","ref":"AshQueryBuilder.Filter.Protocol.html"},{"type":"function","title":"AshQueryBuilder.Filter.Protocol.operator/1","doc":"","ref":"AshQueryBuilder.Filter.Protocol.html#operator/1"},{"type":"function","title":"AshQueryBuilder.Filter.Protocol.to_expression/1","doc":"","ref":"AshQueryBuilder.Filter.Protocol.html#to_expression/1"},{"type":"type","title":"AshQueryBuilder.Filter.Protocol.t/0","doc":"All the types that implement this protocol.","ref":"AshQueryBuilder.Filter.Protocol.html#t:t/0"},{"type":"extras","title":"AshQueryBuilder","doc":"# AshQueryBuilder\n\n**A simple query builder helper for Ash.Query**","ref":"readme.html"},{"type":"extras","title":"Installation - AshQueryBuilder","doc":"If [available in Hex](https://hex.pm/docs/publish), the package can be installed\nby adding `ash_query_builder` to your list of dependencies in `mix.exs`:\n\n```elixir\ndef deps do\n  [\n    {:ash_query_builder, \"~> 0.7.0\"}\n  ]\nend\n```","ref":"readme.html#installation"},{"type":"extras","title":"Usage - AshQueryBuilder","doc":"`AshQueryBuilder` is a helper to make it easy to serialize/deserialize URL queries into a structure that can be used to generate a `Ash.Query` with filters and sorting. This is mainly useful when you need to create tables that can be sorted or filtered.\n\nExample:\n\n``` elixir\nalias Plug.Conn.Query\n\n# We first create our builder struct\nbuilder = AshQueryBuilder.new()\n\n# Now we can add multiple types of filters to it.\n{builder, filter_1} = AshQueryBuilder.add_filter(builder, :updated_at, :  Query.decode |> AshQueryBuilder.parse()\n\n# Finally we can use the builder to create the actual Ash.Query\nquery = Ash.Query.new(Example.MyApi.User)\n\nquery = AshQueryBuilder.to_query(builder, query)\n\n# And run the query\nExample.MyApi.read!(query)\n\n# We can also remove filters and sorters by id\nbuilder = AshQueryBuilder.remove_filter(builder, filter_1.id)\nbuilder = AshQueryBuilder.remove_sorter(builder, sorter_1.id)\n\n# And replace existing ones\n{:error, :not_found} = AshQueryBuilder.replace_filter(builder, filter_1.id, :updated_at, :<, DateTime.utc_now(), [])\n{:ok, builder} = AshQueryBuilder.replace_filter(builder, filter_2.id, :first_name, :in, [\"blibs\", \"blubs\"], [])\n\n{:error, :not_found} = AshQueryBuilder.replace_sorter(builder, sorter_1.id, :updated_at, :asc, [])\n{:ok, builder} = AshQueryBuilder.replace_sorter(builder, filter_2.id, :first_name, :desc, [])\n```","ref":"readme.html#usage"},{"type":"extras","title":"Expanding - AshQueryBuilder","doc":"`AshQueryBuilder` comes already with a lot of filters commonly used in PostgreSQL (you can find all of them in the `lib/ash_query_builder/filter` directory).\n\nIf you need some other specific filter that the library don't support out of the box, you can just easily create it. For example, let's say you are using `postgis` and want to filter by radius, you can create a filter for it like this:\n\n``` elixir\ndefmodule MyFilter do\n  @moduledoc false\n\n  use AshQueryBuilder.Filter, operator: :by_radius\n\n  @impl true\n  def new(id, path, field, value, opts) do\n    enabled? = Keyword.get(opts, :enabled?, true)\n\n    struct(__MODULE__, id: id, field: field, path: path, value: value, enabled?: enabled?)\n  end\nend\n\ndefimpl AshQueryBuilder.Filter.Protocol, for: MyFilter do\n  use AshQueryBuilder.Filter.QueryHelpers\n\n  def to_filter(filter, query) do\n    {longitude, latitude, distance_in_meters} = filter.value\n\n    Ash.Query.filter(\n      query,\n      expr(\n        fragment(\n          \"ST_DWithin(?, ST_POINT(?, ?)::geography, ?)\",\n          ^make_ref(filter),\n          ^longitude,\n          ^latitude,\n          ^distance_in_meters\n        )\n      )\n    )\n  end\n\n  def operator(_), do: MyFilter.operator()\nend\n```\n\nAnd then you can use it like this:\n\n``` elixir\nbuilder = AshQueryBuilder.add_filter(builder, :geometry, :by_radius, {-86.79, 36.17, 1000})\n```\n\n\nalias AshQueryBuilder.{Filter, FilterScope, Sorter}\n\nalias Plug.Conn.Query\n\n# We first create our builder struct\nbuilder = AshQueryBuilder.new()\n\nfilter_1 = Filter.new(:male_content, :left_word_similarity, \"blibs\", id: \"male_content\")\nfilter_2 = Filter.new(:female_content, :==, \"blibs\", id: \"female_content\")\n\nscope_1 = FilterScope.new(:and, id: \"content\") |> FilterScope.add_filter(filter_1) |> FilterScope.add_filter(filter_2)\n\nfilter_3 = Filter.new(:updated_at, :  FilterScope.add_filter(scope_1) |> FilterScope.add_filter(filter_4)\n\nbuilder = builder |> AshQueryBuilder.add_filter(scope_3) |> AshQueryBuilder.add_filter(filter_3) |> AshQueryBuilder.add_filter(scope_2)\n\n# This will generate a map that can be stored into a URL query parameters\nquery_params = AshQueryBuilder.to_params(builder, with_disabled?: true)\n\nbuilder = AshQueryBuilder.parse(query_params)\n\nquery = Ash.Query.new(FeedbackCupcake.Feedbacks.Template)\n\nquery = AshQueryBuilder.to_query(builder, query)","ref":"readme.html#expanding"}],"content_type":"text/markdown"}