# Guide — ash_ulid v1.0.0

Project: ash_ulid v1.0.0

## Table of Contents

- [ __ View Source ](external_link) AshUlid
  - __ Installation
  - __ Usage
    - __ Primary key
    - __ Attribute type
    - __ Generate
  - __ References

__

Search documentation of ash_ulid __ __

__ Settings

#  [ __ View Source ](external_link) AshUlid

[![Module Version](external_link)](https://hex.pm/packages/ash_ulid) [![Hex Docs](external_link)](https://hexdocs.pm/ash_ulid/) [![License](external_link)](https://github.com/vonagam/ash_ulid/blob/master/LICENSE.md)

[`Ash.Type`](3.0.0/Ash.Type.html) implementation for [ULID](external_link).

Consists of three modules:

  * [`AshUlid`](external_link) \- utility functions to generate ULIDs.
  * [`AshUlid.Type`](external_link) \- [`Ash.Type`](3.0.0/Ash.Type.html) implementation.
  * [`AshUlid.Resource`](external_link) \- resource extension with `ulid_primary_key` shortcut.



##  __ Installation

Add to the deps, get deps ([`mix deps.get`](external_link)), compile them ([`mix deps.compile`](external_link)).
    
    
    def deps do
      [
        {:ash_ulid, "~> 1.0.0"},
      ]
    end

##  __ Usage

###  __ Primary key

To use as a primary key in [`Ash.Resource`](3.0.0/Ash.Resource.html) it is recommended to add [`AshUlid.Resource`](external_link) extension that provides `ulid_primary_key`:
    
    
    defmodule Example.Resource do
      use Ash.Resource,
        extensions: [AshUlid.Resource]
    
      attributes do
        ulid_primary_key :id
      end
    end

Which is a shortcut for this:
    
    
    uuid_primary_key :id, type: AshUlid.Type, default: &AshUlid.generate/0

To prevent formatter from adding parens to `ulid_primary_key` add `:ash_ulid` to `import_deps` in `.formatter.exs`.

If you plan to use ULID as a main type for primary keys it makes sense to set it as `default_belongs_to_type` in a config:
    
    
    config :ash, default_belongs_to_type: AshUlid.Type

###  __ Attribute type

[`AshUlid.Type`](external_link) can be registered under `ulid` name in a config:
    
    
    config :ash, custom_types: [ulid: AshUlid.Type]

And then used like this:
    
    
    defmodule Example.Another do
      use Ash.Resource
    
      attributes do
        attribute :key, :ulid
      end
    
      relationships do
        belongs_to :resource, Example.Resource, attribute_type: :ulid
      end
    end

Without an alias it is the same, just replace `:ulid` with [`AshUlid.Type`](external_link).

If `default_belongs_to_type` is set then `attribute_type: :ulid` in this example is not needed.

###  __ Generate

To generate ULID call [`AshUlid.generate/0`](external_link) or [`AshUlid.generate/1`](external_link) with a specific timestamp.

##  __ References

ULID spec can be found [here](external_link).

The work is mostly based on [`Ecto.ULID`](external_link).

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  DSL: AshUlid.Resource  ](external_link)
