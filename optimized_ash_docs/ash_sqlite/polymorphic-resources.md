# Polymorphic Resources — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) Polymorphic Resources
  - __ Table specific actions
  - __ Migrations

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) Polymorphic Resources

To support leveraging the same resource backed by multiple tables (useful for things like polymorphic associations), AshSqlite supports setting the `data_layer.table` context for a given resource. For this example, lets assume that you have a `MyApp.Post` resource and a `MyApp.Comment` resource. For each of those resources, users can submit `reactions`. However, you want a separate table for `post_reactions` and `comment_reactions`. You could accomplish that like so:
    
    
    defmodule MyApp.Reaction do
      use Ash.Resource,
        domain: MyApp.Domain,
        data_layer: AshSqlite.DataLayer
    
       sqlite do
        polymorphic? true # Without this, `table` is a required configuration
      end
    
      attributes do
        attribute(:resource_id, :uuid)
      end
    
      ...
    end

Then, in your related resources, you set the table context like so:
    
    
    defmodule MyApp.Post do
      use Ash.Resource,
        domain: MyApp.Domain,
        data_layer: AshSqlite.DataLayer
    
      ...
    
      relationships do
        has_many :reactions, MyApp.Reaction,
          relationship_context: %{data_layer: %{table: "post_reactions"}},
          destination_attribute: :resource_id
      end
    end
    
    defmodule MyApp.Comment do
      use Ash.Resource,
        domain: MyApp.Domain,
        data_layer: AshSqlite.DataLayer
    
      ...
    
      relationships do
        has_many :reactions, MyApp.Reaction,
          relationship_context: %{data_layer: %{table: "comment_reactions"}},
          destination_attribute: :resource_id
      end
    end

With this, when loading or editing related data, ash will automatically set that context. For managing related data, see [`Ash.Changeset.manage_relationship/4`](3.0.8/Ash.Changeset.html#manage_relationship/4) and other relationship functions in [`Ash.Changeset`](3.0.8/Ash.Changeset.html)

##  __ Table specific actions

To make actions use a specific table, you can use the `set_context` query preparation/change.

For example:
    
    
    defmodule MyApp.Reaction do
      actions do
        read :for_comments do
          prepare set_context(%{data_layer: %{table: "comment_reactions"}})
        end
    
        read :for_posts do
          prepare set_context(%{data_layer: %{table: "post_reactions"}})
        end
      end
    end

##  __ Migrations

When a migration is marked as `polymorphic? true`, the migration generator will look at all resources that are related to it, that set the `%{data_layer: %{table: "table"}}` context. For each of those, a migration is generated/managed automatically. This means that adding reactions to a new resource is as easy as adding the relationship and table context, and then running [`mix ash_sqlite.generate_migrations`](external_link).

[ ← Previous Page  References  ](external_link)

[ Next Page →  Migrations  ](external_link)
