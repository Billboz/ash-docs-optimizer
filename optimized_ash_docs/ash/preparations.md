# Preparations — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Preparations
  - __ Builtin Preparations
  - __ Custom Preparations
  - __ Anonymous Function Queries
  - __ Action vs Global Preparations

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Preparations

Preparations are the primary way of customizing read action behavior. If you are familiar with [`Plug`](external_link), you can think of an [`Ash.Resource.Preparation`](external_link) as the equivalent of a [`Plug`](external_link) for queries. At its most basic, a preparation will take a query and return a new query. Queries can be simple, like adding a filter or a sort, or more complex, attaching hooks to be executed within the lifecycle of the action.

##  __ Builtin Preparations

There are builtin preparations that can be used, and are automatically imported into your resources. See [`Ash.Resource.Preparation.Builtins`](external_link) for more.

The primary preparation you will use is `build/1`, which passes the arguments through to [`Ash.Query.build/2`](external_link) when the preparation is run. See that function for what options can be provided.

Some examples of usage of builtin preparations
    
    
    # sort by inserted at descending
    prepare build(sort: [inserted_at: :desc])
    
    # only show the top 5 results
    prepare build(sort: [total_points: :desc], limit: 5)

##  __ Custom Preparations
    
    
    defmodule MyApp.Preparations.Top5 do
      use Ash.Resource.Preparation
    
      # transform and validate opts
      @impl true
      def init(opts) do
        if is_atom(opts[:attribute]) do
          {:ok, opts}
        else
          {:error, "attribute must be an atom!"}
        end
      end
    
      @impl true
      def prepare(query, opts, _context) do
        attribute = opts[:attribute]
    
        query
        |> Ash.Query.sort([{attribute, :desc}])
        |> Ash.Query.limit(5)
      end
    end

This could then be used in a resource via:
    
    
    prepare {MyApp.Preparations.Top5, attribute: :foo}

##  __ Anonymous Function Queries

You can also use anonymous functions for preparations. This is great for prototyping, but we generally recommend using a module for organizational purposes.
    
    
    prepare fn query, _context ->
      # put your code here
    end

##  __ Action vs Global Preparations

You can place a preparation on a read action, like so:
    
    
    actions do
      read :read do
        prepare {Top5, attribute: :name}
      end
    end

Or you can use the global preparations block to apply to all read actions.
    
    
    preparations do
      prepare {Top5, attribute: :name}
    end

The preparations section allows you to add preparations across multiple actions of a resource.

[ ← Previous Page  Changes  ](external_link)

[ Next Page →  Code Interface  ](external_link)
