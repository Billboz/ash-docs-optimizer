# Igniter.Util.Install — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Util.Install (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- get_deps!()
- install(deps, argv, igniter \\\ Igniter.new(), opts \\\ [])

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Util.Install (igniter v0.3.29)

Tools for installing packages and running their associated installers, if present.

[!NOTE] The functions in this module are not composable, and are primarily meant to be used internally and to support building custom tooling on top of Igniter, such as [Fireside](external_link).

#  __ Summary

##  Functions

get_deps!()

install(deps, argv, igniter \\\ Igniter.new(), opts \\\ [])

Installs the provided list of dependencies. `deps` can be either

#  __ Functions

__ Link to this function

# get_deps!()

[ __ View Source ](external_link)

__ Link to this function

# install(deps, argv, igniter \\\ Igniter.new(), opts \\\ [])

[ __ View Source ](external_link)

Installs the provided list of dependencies. `deps` can be either:

  * a string like `"ash,ash_postgres"`
  * a list of strings like `["ash", "ash_postgres", ...]`
  * a list of tuples like `[{:ash, "~> 3.0"}, {:ash_postgres, "~> 2.0"}]`


