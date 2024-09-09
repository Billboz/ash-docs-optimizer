# AshUUID — AshUuid v1.1.1

Project: AshUuid v1.1.1

## Table of Contents

- AshUUID
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

Search documentation of AshUuid __ __

__ Settings

#  AshUUID

[![Hex](external_link)](https://hex.pm/packages/ash_uuid) [![Hex Docs](external_link)](https://hexdocs.pm/ash_uuid) [![Build Status](external_link)](https://github.com/zoonect-oss/ash_uuid) [![License](external_link)](https://github.com/zoonect-oss/ash_uuid/blob/main/LICENSE.md) [![GitHub Stars](external_link)](https://github.com/zoonect-oss/ash_uuid/stargazers)

##  __ Installation
    
    
    def deps do
      [
        {:ash_uuid, "~> 1.1.1"},
      ]
    end

##  __ Adoption

Adoption:

  * add `{:ash_uuid, "~> 1.1.1"}` to your `mix.exs` project deps;

  * add `AshUUID.PostgresExtension` to your app Repo's installed_extensions and set AshUUID config `migration_default?: true` if Postgres-side UUIDs generation is needed;

  * use the extension in your resources `use Ash.Resource, data_layer: AshPostgres.DataLayer, extensions: [AshUUID]`;

  * simply use that for your fields `uuid_attribute :id`.




##  __ Configuration

###  __ `lib/myapp/repo.ex`:

Using the PostgresExtension allows postgres-side uuid-v7 generation.
    
    
    # App: Postgres migration defaults, not required
    `
    defmodule Myapp.Repo do
      use AshPostgres.Repo, otp_app: :myapp
    
      @impl AshPostgres.Repo
      def installed_extensions do
        ["ash-functions", "uuid-ossp", "citext", AshUUID.PostgresExtension]
      end
    end

###  __ `config/config.exs`:
    
    
    # AshUUID: Your otp_app name, required!
    config :ash_uuid, :otp_app, :myapp
    
    # Myapp: Customized defaults, not required
    config :myapp, :ash_uuid,
      version: 7, # default
      encoded?: true, # default
      prefixed?: true, # default
      migration_default?: true, # default to false
      strict?: true # default to true
    
    # Ash: Type shorthands, not required
    config :ash, :custom_types, uuid: AshUUID.UUID
    
    # Ash: Default belongs_to type, not required
    config :ash, :default_belongs_to_type, AshUUID.UUID

##  __ Usage
    
    
    defmodule Pineapple do
      use Ash.Resource, data_layer: AshPostgres.DataLayer, extensions: [AshUUID]
    
      code_interface do
        define_for Area
      end
    
      postgres do
        table "pineapples"
        repo MyApp.Repo
      end
    
      attributes do
        uuid_attribute :id, prefix: "pnp"
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
    

**AshUUID** uses `ex_check` to bundle the test configuration, and simply running [`mix check`](external_link) should closely follow the configuration used in CI.

##  __ Contributing

If you have ideas or come across any bugs, feel free to open a [pull request](external_link) or an [issue](external_link). You can also find me on the [Ash Discord](external_link) as `@moissela`.

##  __ License

MIT License

Copyright (c) 2023 [Alessio Montagnani](external_link)

See [LICENSE.md](external_link) for details.

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Change Log  ](external_link)
