# Wrap External APIs — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Wrap External APIs
  - __ Introduction
  - __ Wrapping External APIs
  - __ Example
  - __ Now we can use this like any other Ash resource

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Wrap External APIs

![Run in Livebook](external_link)
    
    
    Mix.install(
      [
        {:ash, "~> 3.0"},
        {:req, "~> 0.4.0"}
      ],
      consolidate_protocols: false
    )

##  __ Introduction

Wrapping external APIs in Ash resources can allow you to leverage the rich and consistent interface provided by [`Ash.Resource`](external_link) for interactions with external services.

There are a few approaches to how you might do this, including the still in progress [AshJsonApiWrapper](external_link). Here we will leverage "manual actions" as this is fully supported by Ash, and is the commonly used approach.

This approach is most appropriate when you are working with an API that exposes some data, like entities, list of entities, etc. For this example, we will be interacting with <https://openlibrary.org>, which allows for us to search and list books.

This guide covers reading data from the external API, not creating/updating it. This can be implemented using manual actions of a different type, or generic actions.

##  __ Wrapping External APIs

  1. Create a resource for interacting with the given API
  2. Create a manual read action
  3. In this manual action, we will:
    1. call the target API
    2. transform the results
    3. apply query operations to simulate capabilities provided by Ash



In the example below, we are calling to a _paginated_ API, and we want to continue fetching results until we have reached the amount of results requested by the [`Ash.Query`](external_link). We show this to illustrate that you can do all kinds of creative things when working with external APIs in manual actions.

##  __ Example
    
    
    defmodule Doc do
      use Ash.Resource,
        domain: Domain
    
      attributes do
        uuid_primary_key :id
        attribute :author_name, :string
        attribute :title, :string
        attribute :type, :string
      end
    
      actions do
        read :search do
          primary? true
          argument :query, :string, allow_nil?: false
          prepare fn query, _ ->
            # We require that they limit the results to some reasonable set
            # (because this API is huge)
            cond do
              query.limit && query.limit > 250 ->
                Ash.Query.add_error(query, "must supply a limit that is less than or equal to 250")
              query.limit ->
                query
              true ->
                # limit 5 by default
                Ash.Query.limit(query, 5)
            end
          end
    
          manual Doc.Actions.Read
        end
      end
    end
    
    defmodule Domain do
      use Ash.Domain,
        validate_config_inclusion?: false
    
      resources do
        resource Doc do
          define :search, args: [:query]
        end
      end
    end
    
    
    {:module, Domain, <<70, 79, 82, 49, 0, 0, 250, ...>>,
     [
       Ash.Domain.Dsl.Resources.Resource,
       Ash.Domain.Dsl.Resources.Options,
       Ash.Domain.Dsl,
       %{opts: [], entities: [...]},
       Ash.Domain.Dsl,
       Ash.Domain.Dsl.Resources.Options,
       ...
     ]}
    
    
    defmodule Doc.Actions.Read do
      use Ash.Resource.ManualRead
    
      def read(query, _, _opts, _context) do
        # we aren't handling these query options to keep the example simple
        # but you could on your own
        if query.sort != [] || query.offset != 0 do
          {:error, "Cannot sort or offset documents"}
        end
    
        if query.sort && query.sort != [] do
          raise "Cannot apply a sort to docs read"
        end
    
        if query.offset && query.offset != 0 do
          raise "Cannot apply a sort to docs read"
        end
    
        limit = query.limit || :infinity
    
        query = Ash.Query.unset(query, :limit)
    
        query_results =
          Stream.resource(
            fn ->
              {limit, 0}
            end,
            fn
              {remaining, page_number} when remaining <= 0 ->
                {:halt, {0, page_number}}
    
              {remaining, page_number} ->
                api_results =
                  query.arguments.query
                  |> get!(page_number)
                  |> Enum.map(&to_doc/1)
    
                case Ash.Query.apply_to(query, api_results) do
                  {:ok, []} ->
                    {:halt, remaining}
    
                  {:ok, results} ->
                    count_of_results = Enum.count(results)
    
                    cond do
                      # the api gives us batches of 100
                      remaining == :infinity && count_of_results == 100 ->
                        {results, {:infinity, page_number + 1}}
    
                      remaining == :infinity ->
                        {results, {0, page_number + 1}}
    
                      true ->
                        still_remaining = remaining - count_of_results
    
                        results =
                          if still_remaining <= 0 do
                            Enum.take(results, remaining)
                          else
                            results
                          end
    
                        {results, {still_remaining, page_number + 1}}
                    end
    
                  {:error, error} ->
                    raise Ash.Error.to_ash_error(error)
                end
            end,
            fn _ -> :ok end
          )
          |> Enum.to_list()
    
        {:ok, query_results}
      end
    
      defp to_doc(api_doc) do
        %Doc{author_name: api_doc["author_name"], type: api_doc["type"], title: api_doc["title"]}
      end
    
      defp get!(query, page) do
        params =
          if page == 0 do
            [q: query]
          else
            [q: query, page: page]
          end
    
        Req.get!("https://openlibrary.org/search.json", params: params).body["docs"]
      end
    end
    
    
    {:module, Doc.Actions.Read, <<70, 79, 82, 49, 0, 0, 25, ...>>, {:get!, 2}}

##  __ Now we can use this like any other Ash resource
    
    
    Domain.search!("Lord of the rings")
    
    
    [
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "The Lord of the Rings",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "The Fellowship of the Ring",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "The Two Towers",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "The Return of the King",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "The Lord of the Rings",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >
    ]
    
    
    require Ash.Query
    query = Doc |> Ash.Query.filter(contains(title, "Two"))
    Domain.search!("Lord of the rings", query: query)
    
    
    [
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "The Two Towers",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["Alessio Cavatore", "Rick Priestley"],
        title: "The Lord of the Rings - The Two Towers",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "The Two Towers",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["Alessio Cavatore", "Rick Priestley"],
        title: "The Lord of the Rings - The Two Towers",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >,
      #Doc<
        __meta__: #Ecto.Schema.Metadata<:built, "">,
        id: nil,
        author_name: ["J.R.R. Tolkien"],
        title: "Two Towers : The Lord of the Rings",
        type: "work",
        aggregates: %{},
        calculations: %{},
        ...
      >
    ]

[ ← Previous Page  Prevent concurrent writes  ](external_link)

[ Next Page →  Glossary  ](external_link)
