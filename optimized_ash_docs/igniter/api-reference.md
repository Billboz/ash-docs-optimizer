# API Reference — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) API Reference igniter v0.3.29
  - __ Modules
  - __ Mix Tasks

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) API Reference igniter v0.3.29

##  __ Modules

[Igniter](external_link)

Tools for generating and patching code into an Elixir project.

[Igniter.Code.Common](external_link)

General purpose utilities for working with [`Sourceror.Zipper`](external_link).

[Igniter.Code.Function](external_link)

Utilities for working with functions.

[Igniter.Code.Keyword](external_link)

Utilities for working with keyword.

[Igniter.Code.List](external_link)

Utilities for working with lists.

[Igniter.Code.Map](external_link)

Utilities for working with maps.

[Igniter.Code.Module](external_link)

Utilities for working with Elixir modules

[Igniter.Code.Tuple](external_link)

Utilities for working with tuples.

[Igniter.Libs.Phoenix](external_link)

Codemods & utilities for working with Phoenix

[Igniter.Mix.Task](external_link)

A behaviour for implementing a Mix task that is enriched to be composable with other Igniter tasks.

[Igniter.Mix.Task.Info](external_link)

Info for an [`Igniter.Mix.Task`](external_link), returned from the `info/2` callback

[Igniter.Project.Application](external_link)

Codemods and tools for working with Application modules.

[Igniter.Project.Config](external_link)

Codemods and utilities for modifying Elixir config files.

[Igniter.Project.Deps](external_link)

Codemods and utilities for managing dependencies declared in mix.exs

[Igniter.Project.Formatter](external_link)

Codemods and utilities for interacting with `.formatter.exs` files

[Igniter.Project.IgniterConfig](external_link)

Tools for reading and modifying the `.igniter.exs` file.

[Igniter.Project.Test](external_link)

Codemods and utilities for interacting with test and test support files

[Igniter.Test](external_link)

Tools for testing with igniter.

[Igniter.Util.Debug](external_link)

Tools for debugging zippers.

[Igniter.Util.Install](external_link)

Tools for installing packages and running their associated installers, if present.

[Igniter.Util.Version](external_link)

Utilities for working versions and version requirements

[Igniter.Util.Warning](external_link)

Utilities for emitting well formatted warnings

##  __ Mix Tasks

[mix igniter.gen.task](external_link)

Generates a new igniter task

[mix igniter.install](external_link)

Install a package or packages, and run any associated installers.

[mix igniter.move_files](external_link)

Moves any relavant files to their 'correct' location.

[mix igniter.setup](external_link)

Creates or updates a .igniter.exs file, used to configure Igniter for end user's preferences.

[mix igniter.update_gettext](external_link)

Applies changes to resolve a warning introduced in gettext 0.26.0

[ Next Page →  Home  ](external_link)
