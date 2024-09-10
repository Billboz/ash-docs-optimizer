# Igniter.Project.Formatter — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Project.Formatter (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- add_formatter_plugin(igniter, plugin)
- import_dep(igniter, dep)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Project.Formatter (igniter v0.3.29)

Codemods and utilities for interacting with `.formatter.exs` files

#  __ Summary

##  Functions

add_formatter_plugin(igniter, plugin)

Adds a new plugin to the list of plugins in the root `.formatter.exs`

import_dep(igniter, dep)

Adds a new dep to the list of imported deps in the root `.formatter.exs`

#  __ Functions

__ Link to this function

# add_formatter_plugin(igniter, plugin)

[ __ View Source ](external_link)
    
    
    @spec add_formatter_plugin([Igniter.t](external_link)(), plugin :: [module](external_link)()) :: [Igniter.t](external_link)()

Adds a new plugin to the list of plugins in the root `.formatter.exs`

__ Link to this function

# import_dep(igniter, dep)

[ __ View Source ](external_link)
    
    
    @spec import_dep([Igniter.t](external_link)(), dep :: [atom](external_link)()) :: [Igniter.t](external_link)()

Adds a new dep to the list of imported deps in the root `.formatter.exs`
