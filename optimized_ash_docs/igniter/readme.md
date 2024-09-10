# Home — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Home
- Igniter
  - __ State of the project
  - __ Limitations
  - __ Installation
  - __ Patterns
    - __ Installers
    - __ Generators/Patchers

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Home

![Logo Light](external_link)![Logo Dark](external_link)

[![CI](external_link)](https://github.com/ash-project/igniter/actions/workflows/elixir.yml) [![Hex version badge](external_link)](https://hex.pm/packages/igniter) [![Hexdocs badge](external_link)](https://hexdocs.pm/igniter)

# Igniter

Igniter is a code generation and project patching framework.

For library authors, this is a tool kit for writing smarter generators that can semantically modify existing files, and all sorts of useful tools for doing so.

For end-users, this means `mix igniter.install <package>`, which will _add it to your mix.exs automatically_ and then run that library's installer if it has one. Even when libraries don't have an installer, or use igniter, this behavior makes it useful to keep around.

##  __ State of the project

This project is in early beta. There is _so much to add_! There are lots of DX/UX things to improve, but it does already provide some great utility. Contributions welcome!

##  __ Limitations

Right now, all files that are touched are formatted in their entirety. This may be a deal breaker for some users. I believe that we can solve this without changing the fundemental design of the project, but it is not a high priority in the early stages.

##  __ Installation

Igniter can be added to an existing elixir project by adding it to your dependencies:
    
    
    {:igniter, "~> 0.1"}

You can also generate new projects with igniter preinstalled, and run installers in the same command.

First, install the archive:
    
    
    mix archive.install hex igniter_new

Then you can run `mix igniter.new`
    
    
    mix igniter.new app_name --install ash

Or if you want to use a different project creator, specify the mix task name with the `--with` flag. Any arguments will be passed through to that task, with the exception of `--install` and `--example`.
    
    
    mix igniter.new app_name --install ash --with phx.new --no-ecto

##  __ Patterns

Mix tasks built with igniter are both individually callable, _and_ composable. This means that tasks can call eachother, and also end users can create and customize their own generators composing existing tasks.

###  __ Installers

Igniter will look for a task called `<your_package>.install` when the user runs `mix igniter.install <your_package>`, and will run it after installing and fetching dependencies.

###  __ Generators/Patchers

These can be run like any other mix task, or composed together. For example, lets say that you wanted to have your own `Ash.Resource` generator, that starts with the default `mix ash.gen.resource` task, but then adds or modifies files:
    
    
    # in lib/mix/tasks/my_app.gen.resource.ex
    defmodule Mix.Tasks.MyApp.Gen.Resource do
      use Igniter.Mix.Task
    
      def igniter(igniter, [resource | _] = argv) do
        resource = Igniter.Code.Module.parse(resource)
        my_special_thing = Module.concat([resource, SpecialThing])
        location = Igniter.Code.Module.proper_location(my_special_thing)
    
        igniter
        |> Igniter.compose_task("ash.gen.resource", argv)
        |> Igniter.create_new_elixir_file(location, """
        defmodule #{inspect(my_special_thing)} do
          # this is the special thing for #{inspect()}
        end
        """)
      end
    end

[ ← Previous Page  API Reference  ](external_link)

[ Next Page →  Writing Generators  ](external_link)
