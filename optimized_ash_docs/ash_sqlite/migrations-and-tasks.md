# Migrations — ash_sqlite v0.1.3

Project: ash_sqlite v0.1.3

## Table of Contents

- [ __ View Source ](external_link) Migrations
  - __ Tasks
  - __ Basic Workflow
    - __ Regenerating Migrations
  - __ Multiple Repos
  - __ Running Migrations in Production
- AshSqlite-specific tasks

__

Search documentation of ash_sqlite __ __

__ Settings

#  [ __ View Source ](external_link) Migrations

##  __ Tasks

Ash comes with its own tasks, and AshSqlite exposes lower level tasks that you can use if necessary. This guide shows the process using `ash.*` tasks, and the `ash_sqlite.*` tasks are illustrated at the bottom.

##  __ Basic Workflow

  * Make resource changes
  * Run `mix ash.codegen --name add_a_combobulator` to generate migrations and resource snapshots
  * Run [`mix ash.migrate`](3.0.8/Mix.Tasks.Ash.Migrate.html) to run those migrations



For more information on generating migrations, run [`mix help ash_sqlite.generate_migrations`](external_link) (the underlying task that is called by [`mix ash.migrate`](3.0.8/Mix.Tasks.Ash.Migrate.html))

###  __ Regenerating Migrations

Often, you will run into a situation where you want to make a slight change to a resource after you've already generated and run migrations. If you are using git and would like to undo those changes, then regenerate the migrations, this script may prove useful:
    
    
    #!/bin/bash
    
    # Get count of untracked migrations
    N_MIGRATIONS=$(git ls-files --others priv/repo/migrations | wc -l)
    
    # Rollback untracked migrations
    mix ash_sqlite.rollback -n $N_MIGRATIONS
    
    # Delete untracked migrations and snapshots
    git ls-files --others priv/repo/migrations | xargs rm
    git ls-files --others priv/resource_snapshots | xargs rm
    
    # Regenerate migrations
    mix ash.codegen --name $1
    
    # Run migrations if flag
    if echo $* | grep -e "-m" -q
    then
      mix ash.migrate
    fi
    

After saving this file to something like `regen.sh`, make it executable with `chmod +x regen.sh`. Now you can run it with `./regen.sh name_of_operation`. If you would like the migrations to automatically run after regeneration, add the `-m` flag: `./regen.sh name_of_operation -m`.

##  __ Multiple Repos

If you are using multiple repos, you will likely need to use [`mix ecto.migrate`](external_link) and manage it separately for each repo, as the options would be applied to both repo, which wouldn't make sense.

##  __ Running Migrations in Production

Define a module similar to the following:
    
    
    defmodule MyApp.Release do
      @moduledoc """
      Houses tasks that need to be executed in the released application (because mix is not present in releases).
      """
      @app :my_ap
      def migrate do
        load_app()
    
        for repo <- repos() do
          {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
        end
      end
    
      def rollback(repo, version) do
        load_app()
        {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :down, to: version))
      end
    
      defp repos do
        domains()
        |> Enum.flat_map(fn domain ->
          domain
          |> Ash.Domain.Info.resources()
          |> Enum.map(&AshSqlite.repo/1)
        end)
        |> Enum.uniq()
      end
    
      defp domains do
        Application.fetch_env!(:my_app, :ash_domains)
      end
    
      defp load_app do
        Application.load(@app)
      end
    end

# AshSqlite-specific tasks

  * [`mix ash_sqlite.generate_migrations`](external_link)
  * [`mix ash_sqlite.create`](external_link)
  * [`mix ash_sqlite.migrate`](external_link)
  * [`mix ash_sqlite.rollback`](external_link)
  * [`mix ash_sqlite.drop`](external_link)



[ ← Previous Page  Polymorphic Resources  ](external_link)

[ Next Page →  Testing With Sqlite  ](external_link)
