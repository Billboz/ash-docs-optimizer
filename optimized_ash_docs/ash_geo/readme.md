# AshGeo — AshGeo v0.3.0

Project: AshGeo v0.3.0

## Table of Contents

- AshGeo
    - __ _All your Ash resources, in space!_
  - __ Installation
  - __ Configuration
    - __ `config/config.exs`:
    - __ `config/runtime.exs`:
  - __ Usage
  - __ Roadmap
  - __ Developing
  - __ Contributing
  - __ License

__

Search documentation of AshGeo __ __

__ Settings

#  AshGeo

###  __ _All your Ash resources, in space!_

[![Hex](external_link)](https://hex.pm/packages/ash_geo) [![Hex Docs](external_link)](https://hexdocs.pm/ash_geo/) [![Downloads](external_link)](https://hex.pm/packages/ash_geo) [![Build Status](external_link)](https://github.com/bcksl/ash_geo) [![Coverage Status](external_link)](https://coveralls.io/github/bcksl/ash_geo?branch=main) [![License](external_link)](https://github.com/bcksl/git_opts/blob/main/LICENSE.md) [![GitHub Stars](external_link)](https://github.com/bcksl/ash_geo)

**AshGeo** contains tools for using geospatial data in [Ash](external_link) resources and expressions, backed by [PostGIS](external_link), [Geo](external_link), [Geo.PostGIS](external_link) and [Topo].

It provides:

  * All the `st_*` functions that you would get with `Geo.PostGIS` for use with Ash [`expr`](expressions.html), and more to come.
  * An [`Ash.Type`](3.3.1/Ash.Type.html) backed by each of [`Geo.JSON`](external_link), [`Geo.WKB`](external_link) and [`Geo.WKT`](external_link) which may be used as `argument` types in your Ash actions, and will automatically cast input from GeoJSON, WKT and WKB encodings.
  * An [`Ash.Type`](3.3.1/Ash.Type.html) for `Geo.PostGIS.Geometry`, for use with resource attributes.
  * All types may be overridden and narrowed with `use`, allowing you to add stricter constraints and storage types (e.g. `geometry(Point,26918)`).
  * Validations for [`Geo`](external_link) types (such as `is_point_zm(:arg)` for checking that argument `:arg` is a instance of [`Geo.PointZM`](external_link))
  * Validations backed by `Topo`, allowing checks of simple constraints such as `contains?` without needing to hit the database.



##  __ Installation
    
    
    def deps do
      [
        {:ash_geo, "~> 0.3.0"},
      ]
    end

This package provides a collection of non-overlapping functionality based on several dependencies, not all of which may be necessary your application. Therefore, the dependencies for the functionality you wish to use must be added alongside `:ash_geo`.

  * For `Topo` validations, `:topo` must be added.
  * For Postgis expressions, `:geo_postgis` must be added.



##  __ Configuration

###  __ `config/config.exs`:
    
    
    # Geo.PostGIS: Use Jason coder
    config :geo_postgis, json_library: Jason
    
    # Ash: Type shorthands
    config :ash, :custom_types, [
      geometry: AshGeo.Geometry,
      geo_json: AshGeo.GeoJson,
      geo_wkt: AshGeo.GeoWkt,
      geo_wkb: AshGeo.GeoWkb,
      geo_any: AshGeo.GeoAny,
      # You may add shorthands for any narrowed types here
      #point26918: CoolApp.Type.GeometryPoint26918,
    ]

###  __ `config/runtime.exs`:
    
    
    # Postgrex: Geo.PostGIS types
    Postgrex.Types.define(CoolApp.PostgresTypes,
      [Geo.PostGIS.Extension | Ecto.Adapters.Postgres.extensions()],
      json: Jason)
    
    # Ecto: Geo.PostGIS types
    config :cool_app, CoolApp.Repo, types: CoolApp.PostgresTypes

##  __ Usage
    
    
    defmodule Area do
      use Ash.Resource, data_layer: AshPostgres.DataLayer
    
      import AshGeo.Postgis
    
      attributes do
        uuid_primary_key :id,
        attribute :geom, :geometry, allow_nil?: false
      end
    
      actions do
        create :create do
          argument :geom, :geo_any
    
          change set_attribute(:geom, arg(:geom))
        end
    
        read :containing do
          argument :geom, :geo_any do
            allow_nil? false
            constraints geo_types: :point
          end
    
          filter expr(^st_within(^arg(:geom), geom))
        end
      end
    
      code_interface do
        define_for Area
        define :create, args: [:geom]
        define :containing, args: [:geom]
      end
    end

Try it out:
    
    
    Area.create! "POLYGON ((30 0, 20 30, 0 10, 30 0))"
    Area.create! "POLYGON ((30 10, 40 40, 20 40, 10 20, 30 10))"
    Area.containing! "POINT(30 30)"
    Area.containing! "POINT(20 20)"
    Area.containing! "POINT(10 40)"
    Area.containing! "POLYGON((0 0, 30 20, 40 30, 0 0))"

The full documentation can be found [on HexDocs](external_link).

##  __ Roadmap

  * Add more PostGIS function wrappers (check out the [PostGIS reference](external_link) to see all that are available).
  * Continue to improve the test suite.
  * Replace validation macros with Spark DSL patches or similar.
  * Replace PostGIS `fragment` macros with custom predicates ([`ash#374`](external_link))
  * Add datalayer-independent expression predicates backed by Topo.
  * Add more informative error messages ([`ash#365`](external_link)).



##  __ Developing

To get set up with the development environment, you will need a Postgres instance with support for the PostGIS extensions listed in `test/support/repo.ex` (the [`postgis/postgis`](external_link) image works nicely) and a superuser account `ash_geo_test` credentialed according to `config/config.exs`.

You may now generate and apply the test migrations:
    
    
    mix ash_postgres.generate_migrations
    

**AshGeo** uses `ex_check` to bundle the test configuration, and simply running [`mix check`](external_link) should closely follow the configuration used in CI.

##  __ Contributing

If you have ideas or come across any bugs, feel free to open a [pull request](external_link) or an [issue](external_link). You can also find me on the [Ash Discord](external_link) as `@\`.

##  __ License

MIT License

Copyright (c) 2023 [bcksl](external_link)

See [LICENSE.md](external_link) for details.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Change Log  ](external_link)
