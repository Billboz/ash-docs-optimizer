# AshUUIDv7 — AshUuidV7 v0.1.1

Project: AshUuidV7 v0.1.1

## Table of Contents

- AshUUIDv7
  - __ Installation
  - __ Adoption
  - __ Configuration
    - __ `lib/myapp/repo.ex`:
    - __ `config/config.exs`:
  - __ Usage
  - __ Roadmap
  - __ Developing
  - __ Contributing
  - __ License

__

Search documentation of AshUuidV7 __ __

__ Settings

#  AshUUIDv7

[![Hex](external_link)](https://hex.pm/packages/ash_uuid_v7) [![Hex Docs](external_link)](https://hexdocs.pm/ash_uuid_v7) [![Build Status](external_link)](https://github.com/zoonect-oss/ash_uuid_v7) [![License](external_link)](https://github.com/zoonect-oss/ash_uuid_v7/blob/main/LICENSE.md) [![GitHub Stars](external_link)](https://github.com/zoonect-oss/ash_uuid_v7/stargazers)

##  __ Installation
    
    
    def deps do
      [
        {:ash_uuid_v7, "~> 0.1.1"},
      ]
    end

##  __ Adoption

Adoption:

  * add `{:ash_uuid_v7, "~> 0.1.1"}` to your `mix.exs` project deps;

  * add [`AshUUIDv7.PostgresExtension`](external_link) to your app Repo's installed_extensions if Postgres-side UUIDs generation is needed;

  * use the extension in your resources `use Ash.Resource, data_layer: AshPostgres.DataLayer, extensions: [AshUUIDv7.Extension]`;

  * simply use that for your fields `uuid_v7_primary_key :id`.




##  __ Configuration

###  __ `lib/myapp/repo.ex`:

Using the PostgresExtension allows postgres-side uuid-v7 generation.
    
    
    # App: Postgres migration defaults, not required
    `
    defmodule Myapp.Repo do
      use AshPostgres.Repo, otp_app: :myapp
    
      @impl AshPostgres.Repo
      def installed_extensions do
        ["ash-functions", "uuid-ossp", "citext", AshUUIDv7.PostgresExtension]
      end
    end

###  __ `config/config.exs`:
    
    
    # Ash: Type shorthands, not required
    config :ash, :custom_types, uuid_v7: AshUUIDv7
    
    # Ash: Default belongs_to type, not required
    config :ash, :default_belongs_to_type, AshUUIDv7

##  __ Usage
    
    
    defmodule Pineapple do
      use Ash.Resource, data_layer: AshPostgres.DataLayer, extensions: [AshUUIDv7.Extension]
    
      code_interface do
        define_for Area
      end
    
      postgres do
        table "pineapples"
        repo MyApp.Repo
      end
    
      attributes do
        uuid_v7_primary_key :id
        attribute :uuid_field, :uuid_v7
    
        create_timestamp :inserted_at
      end
    
      actions do
        defaults [:create, :read, :update]
      end
    end

The full documentation can be found [on HexDocs](external_link).

##  __ Roadmap

-

##  __ Developing

To get set up with the development environment, you will need a Postgres instance and an environment variable DATABASE_URL according to `config/config.exs`.

You may now generate and apply the test migrations:
    
    
    mix ash_postgres.generate_migrations
    mix ash_postgres.create
    mix ash_postgres.migrate
    mix test
    

**AshUUIDv7** uses `ex_check` to bundle the test configuration, and simply running [`mix check`](external_link) should closely follow the configuration used in CI.

##  __ Contributing

If you have ideas or come across any bugs, feel free to open a [pull request](external_link) or an [issue](external_link). You can also find me on the [Ash Discord](external_link) as `@moissela`.

##  __ License

MIT License

Copyright (c) 2024 [Alessio Montagnani](external_link)

See [LICENSE.md](external_link) for details.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Change Log  ](external_link)
