# AshPostgres.Migration — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) AshPostgres.Migration (ash_postgres v2.3.1)
- __ Summary
  - Functions
- __ Functions
- create_enum(type, constraints \\\ [])
- drop_enum(type)

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) AshPostgres.Migration (ash_postgres v2.3.1)

Utilities for use in migrations

#  __ Summary

##  Functions

create_enum(type, constraints \\\ [])

A utility for creating postgres enums for an Ash enum type.

drop_enum(type)

#  __ Functions

__

# create_enum(type, constraints \\\ [])

[ __](external_link)

A utility for creating postgres enums for an Ash enum type.

In your migration, you can say:
    
    
    def up() do
      AshPostgres.Migration.create_enum(MyEnumType)
    end

Attribution:

This code and example was copied from ecto_enum. I didn't use the library itself because it has a lot that would not currently be relevant for Ash. <https://github.com/gjaldon/ecto_enum>

Must be done manually, as the migration generator will not do it. Additionally, altering the type must be done in its own, separate migration, which must have `@disable_ddl_transaction true`, as you cannot do this operation in a transaction.

For example:
    
    
    defmodule MyApp.Repo.Migrations.AddToGenderEnum do
      use Ecto.Migration
      @disable_ddl_transaction true
    
      def up do
        Ecto.Migration.execute "ALTER TYPE gender ADD VALUE IF NOT EXISTS 'other'"
      end
    
      def down do
        ...
      end
    end

Keep in mind, that if you want to create a custom enum type, you will want to add
    
    
    def storage_type(_), do: :my_type_name

__

# drop_enum(type)

[ __](external_link)
