# Schema Based Multitenancy — ash_postgres v2.3.1

Project: ash_postgres v2.3.1

## Table of Contents

- [ __ View Source ](external_link) Schema Based Multitenancy
  - __ Generated migrations
  - __ Automatically managing tenants

__

Search documentation of ash_postgres __ __

__ Settings

#  [ __ View Source ](external_link) Schema Based Multitenancy

Multitenancy in AshPostgres is implemented via postgres schemas. For more information on schemas, see postgres' [schema documentation](external_link)

Implementing multitenancy via schema's involves tracking "tenant migrations" separately from migrations for your public schema. You can see what this looks like by simply creating a multitenant resource, and using the migration generator [`mix ash.codegen`](3.4.4/Mix.Tasks.Ash.Codegen.html). It will put schema specific migrations in `priv/repo/tenant_migrations`. When you generate migrations, you'll want to be sure to audit migrations in both directories. Additionally, when you deploy, you'll want to run your migrations, as well as running them with the migrations path `priv/repo/tenant_migrations`.

##  __ Generated migrations

The generated migrations include a lot of niceties around multitenancy. Specifically, foreign keys will point at tables in the correct schema, and foreign keys to non-multitenant resources will point to the correct table. If you are using attribute multitenancy, foreign keys to tables _also_ using attribute multitenancy will be composite foreign keys, including the tenant attribute as well as the referencing field.

Migrations in the tenant directory will call `repo().all_tenants()`, which is a callback you will need to implement in your repo that should return a list of all schemas that need to be migrated.

##  __ Automatically managing tenants

By setting the `template` configuration, in the `manage_tenant` section, you can cause the creation/updating of a given resource to create/rename tenants. For example:
    
    
    defmodule MyApp.Organization do
      use Ash.Resource,
        ...
    
      postgres do
        ...
    
        manage_tenant do
          template ["org_", :id]
        end
      end
    end

With this configuration, if you create an organization, it will create a corresponding schema, e.g. `org_10` in the database. Then it will run your tenant migrations on that schema. To override the tenant_migrations path, implement the [`AshPostgres.Repo.tenant_migrations_path/0`](external_link) callback.

Notice that `manage_tenant` is nested inside the `postgres` block. This is because the method of managing tenants is specific to postgres, and if another data layer supported multitenancy they may or may not support managing tenants in the same way.

[ ← Previous Page  Expressions  ](external_link)

[ Next Page →  Manual Relationships  ](external_link)
