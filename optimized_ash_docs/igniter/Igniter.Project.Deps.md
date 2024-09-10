# Igniter.Project.Deps — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Project.Deps (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- add_dep(igniter, dep, opts \\\ [])
- Options
- add_dependency(igniter, name, version, opts \\\ [])
- get_dependency_declaration(igniter, name)
- remove_dep(igniter, name)
- set_dep_option(igniter, name, key, quoted)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Project.Deps (igniter v0.3.29)

Codemods and utilities for managing dependencies declared in mix.exs

#  __ Summary

##  Functions

add_dep(igniter, dep, opts \\\ [])

Adds a dependency to the mix.exs file.

add_dependency(igniter, name, version, opts \\\ []) deprecated

get_dependency_declaration(igniter, name)

remove_dep(igniter, name)

Removes a dependency from mix.exs

set_dep_option(igniter, name, key, quoted)

Sets a dependency option for an existing dependency

#  __ Functions

__ Link to this function

# add_dep(igniter, dep, opts \\\ [])

[ __ View Source ](external_link)

Adds a dependency to the mix.exs file.

# Options

  * `:yes?` \- Automatically answer yes to any prompts.
  * `:append?` \- Append to the dependency list instead of prepending.
  * `:error?` \- Returns an error instead of a notice on failure.



__ Link to this function

# add_dependency(igniter, name, version, opts \\\ [])

[ __ View Source ](external_link)

This function is deprecated. Use `add_dep/2` or `add_dep/3` instead.. 

__ Link to this function

# get_dependency_declaration(igniter, name)

[ __ View Source ](external_link)

__ Link to this function

# remove_dep(igniter, name)

[ __ View Source ](external_link)

Removes a dependency from mix.exs

__ Link to this function

# set_dep_option(igniter, name, key, quoted)

[ __ View Source ](external_link)
    
    
    @spec set_dep_option([Igniter.t](external_link)(), [atom](external_link)(), [atom](external_link)(), quoted :: [term](external_link)()) :: [Igniter.t](external_link)()

Sets a dependency option for an existing dependency
