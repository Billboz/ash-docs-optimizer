# Generators — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Generators
  - __ Installer
  - __ Generators
  - __ Patchers

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Generators

Ash comes with multiple generators, packages as mix tasks, to help you generate and make modifications to your applications.

See the documentation for each mix task for more information. What is presented here is merely an overview.

##  __ Installer

Ash can be installed into a project using `igniter`. Some examples of how this can work:

  * Install Ash & AshPostgres into your current project
    
        mix igniter.install ash ash_postgres

  * Create a new mix project with Ash & AshPostgres installed
    
        mix archive.install hex igniter_new
    mix igniter.new my_project --install ash,ash_postgres

  * Create a new phoenix project with Ash & AshPostgres installed
    
        mix igniter.new my_project --install ash,ash_postgres --with phx.new

> ###  __ install hex archives
> 
> The archives have to be installed to use them. This only needs to be done once, until you change elixir versions.
>     
>     >     mix archive.install hex igniter_new
>     mix archive.install hex phx_new




##  __ Generators

  * [`mix ash.gen.resource`](external_link) \- Generates a new [`Ash.Resource`](external_link)
  * [`mix ash.gen.domain`](external_link) \- Generates a new [`Ash.Domain`](external_link)
  * [`mix ash.gen.enum`](external_link) \- Generates a new [`Ash.Type.Enum`](external_link)
  * [`mix ash.gen.base_resource`](external_link) \- Generates a new base resource.



##  __ Patchers

  * [`mix ash.patch.extend`](external_link) \- Adds an extension or extensions to a domain or resource.



[ ← Previous Page  Project Structure  ](external_link)

[ Next Page →  Error Handling  ](external_link)
