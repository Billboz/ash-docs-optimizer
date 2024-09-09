# Guide — ash_jason v1.0.1

Project: ash_jason v1.0.1

## Table of Contents

- [ __ View Source ](external_link) AshJason
  - __ Installation
  - __ Usage
    - __ Configuration
      - pick
      - merge
      - customize
  - __ Links

__

Search documentation of ash_jason __ __

__ Settings

#  [ __ View Source ](external_link) AshJason

[![Module Version](external_link)](https://hex.pm/packages/ash_jason) [![Hex Docs](external_link)](https://hexdocs.pm/ash_jason/) [![License](external_link)](https://github.com/vonagam/ash_jason/blob/master/LICENSE.md)

Ash resource extension for implementing [`Jason.Encoder`](external_link) protocol.

##  __ Installation

Add to the deps, get deps ([`mix deps.get`](external_link)), compile them ([`mix deps.compile`](external_link)).
    
    
    def deps do
      [
        {:ash_jason, "~> 1.0.1"},
      ]
    end

##  __ Usage

Add [`AshJason.Resource`](external_link) to `extensions` list within `use Ash.Resource` options:
    
    
    defmodule Example.Resource do
      use Ash.Resource,
        extensions: [AshJason.Resource]
    end

###  __ Configuration

The process to get data for json happens with three steps: 

  * Pick keys from a record.
  * Merge some fixed values.
  * Customize a result.



By default only first step happens and it picks all non-private fields (attributes, relationships, aggregates, calculations) with loaded non-nil values.

For configuration there is an optional `jason` dsl section:
    
    
    defmodule Example.Resource do
      use Ash.Resource,
        extensions: [AshJason.Resource]
    
      jason do
        # options
      end
    end

#### pick

Keys to pick from a record and include in json. Values of `nil`/[`Ash.NotLoaded`](3.0.0/Ash.NotLoaded.html)/[`Ash.ForbiddenField`](3.0.0/Ash.ForbiddenField.html) are omitted.

Can be specified as a fixed explicit list of keys or a map with a configuration of default behaviour.

Map can have such options as:

  * `private?` \- Whenever to pick private fields.
  * `sensitive?` \- Whenever to pick sensitive fields.
  * `include` \- Keys to pick. In addition to fields.
  * `exclude` \- Keys not to pick. 


    
    
    jason do
      # Pick only those listed keys
      pick [:only_some_field]
    
      # Pick non-sensitive fields
      pick %{private?: true}
    
      # Pick non-private fields
      pick %{sensitive?: true}
    
      # Pick all fields
      pick %{private?: true, sensitive?: true}
    
      # Pick usual but include and exclude some specific keys
      pick %{include: [:ok_private_field], exclude: [:irrelevant_public_field]}
    end

#### merge

A map to merge into json.
    
    
    jason do
      merge %{merged_key: "merged_value"}
    end

#### customize

A function to customize json. Receives a current resulted json map and a source resource record. Returns a modified json map.
    
    
    jason do
      customize fn result, _record ->
        result |> Map.put(:custom_key, "custom_value")
      end
    end

##  __ Links

[`Jason` docs](external_link).

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  License  ](external_link)
