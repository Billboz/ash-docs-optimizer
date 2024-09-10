# Igniter.Code.Module — igniter v0.3.29

Project: igniter v0.3.29

## Table of Contents

- [ __ View Source ](external_link) Igniter.Code.Module (igniter v0.3.29)
- __ Summary
  - Functions
- __ Functions
- create_module(igniter, module_name, contents, opts \\\ [])
- find_all_matching_modules(igniter, predicate)
- find_and_update_module(igniter, module_name, updater)
- find_and_update_module!(igniter, module_name, updater)
- find_and_update_or_create_module(igniter, module_name, contents, updater, opts \\\ [])
- Options
- find_module(igniter, module_name)
- module?(zipper)
- module_exists?(igniter, module_name)
- module_name(suffix)
- module_name(igniter, suffix)
- module_name_prefix()
- module_name_prefix(igniter)
- move_to_def(zipper, fun, arity)
- move_to_defmodule(zipper)
- move_to_defmodule(zipper, module)
- move_to_defp(zipper, fun, arity)
- move_to_module_using(zipper, one_of_modules)
- move_to_use(zipper, module)
- move_to_using(zipper, module)
- parse(module_name)
- proper_location(module_name, source_folder \\\ "lib")
- proper_test_location(module_name)
- proper_test_support_location(module_name)

__

Search documentation of igniter __ __

__ Settings

#  [ __ View Source ](external_link) Igniter.Code.Module (igniter v0.3.29)

Utilities for working with Elixir modules

#  __ Summary

##  Functions

create_module(igniter, module_name, contents, opts \\\ [])

Creates a new file & module in its appropriate location.

find_all_matching_modules(igniter, predicate)

find_and_update_module(igniter, module_name, updater)

Finds a module and updates its contents. Returns `{:error, igniter}` if the module could not be found. Do not discard this igniter.

find_and_update_module!(igniter, module_name, updater)

find_and_update_or_create_module(igniter, module_name, contents, updater, opts \\\ [])

Finds a module and updates its contents wherever it is.

find_module(igniter, module_name)

Finds a module, returning a new igniter, and the source and zipper location. This new igniter should not be discarded.

module?(zipper)

module_exists?(igniter, module_name)

Checks if a module is defined somewhere in the project. The returned igniter should not be discarded.

module_name(suffix) deprecated

Given a suffix, returns a module name with the prefix of the current project.

module_name(igniter, suffix)

Given a suffix, returns a module name with the prefix of the current project.

module_name_prefix() deprecated

The module name prefix based on the mix project's module name

module_name_prefix(igniter)

The module name prefix based on the mix project's module name

move_to_def(zipper, fun, arity) deprecated

move_to_defmodule(zipper)

Moves the zipper to a defmodule call

move_to_defmodule(zipper, module)

Moves the zipper to a specific defmodule call

move_to_defp(zipper, fun, arity) deprecated

move_to_module_using(zipper, one_of_modules)

Moves the zipper to the body of a module that `use`s the provided module (or one of the provided modules).

move_to_use(zipper, module)

Moves the zipper to the `use` statement for a provided module.

move_to_using(zipper, module) deprecated

parse(module_name)

Parses a string into a module name

proper_location(module_name, source_folder \\\ "lib")

Returns the idiomatic file location for a given module, starting with "lib/".

proper_test_location(module_name)

Returns the test file location for a given module, according to [`mix test`](external_link) expectations, starting with "test/" and ending with "_test.exs".

proper_test_support_location(module_name)

Returns the test support location for a given module, starting with "test/support/" and dropping the module name prefix in the path.

#  __ Functions

__ Link to this function

# create_module(igniter, module_name, contents, opts \\\ [])

[ __ View Source ](external_link)

Creates a new file & module in its appropriate location.

__ Link to this function

# find_all_matching_modules(igniter, predicate)

[ __ View Source ](external_link)
    
    
    @spec find_all_matching_modules(igniter :: [Igniter.t](external_link)(), ([module](external_link)(),
                                                       [Sourceror.Zipper.t](external_link)() ->
                                                         [boolean](external_link)())) ::
      {[Igniter.t](external_link)(), [[module](external_link)()]}

__ Link to this function

# find_and_update_module(igniter, module_name, updater)

[ __ View Source ](external_link)
    
    
    @spec find_and_update_module([Igniter.t](external_link)(), [module](external_link)(), ([Sourceror.Zipper.t](external_link)() ->
                                                     {:ok, [Sourceror.Zipper.t](external_link)()}
                                                     | :error)) ::
      {:ok, [Igniter.t](external_link)()} | {:error, [Igniter.t](external_link)()}

Finds a module and updates its contents. Returns `{:error, igniter}` if the module could not be found. Do not discard this igniter.

__ Link to this function

# find_and_update_module!(igniter, module_name, updater)

[ __ View Source ](external_link)

__ Link to this function

# find_and_update_or_create_module(igniter, module_name, contents, updater, opts \\\ [])

[ __ View Source ](external_link)

Finds a module and updates its contents wherever it is.

If the module does not yet exist, it is created with the provided contents. In that case, the path is determined with `Igniter.Code.Module.proper_location/2`, but may optionally be overwritten with options below.

# Options

  * `:path` \- Path where to create the module, relative to the project root. Default: `nil` (uses `:kind` to determine the path).



__ Link to this function

# find_module(igniter, module_name)

[ __ View Source ](external_link)
    
    
    @spec find_module([Igniter.t](external_link)(), [module](external_link)()) ::
      {:ok, {[Igniter.t](external_link)(), [Rewrite.Source.t](external_link)(), [Sourceror.Zipper.t](external_link)()}}
      | {:error, [Igniter.t](external_link)()}

Finds a module, returning a new igniter, and the source and zipper location. This new igniter should not be discarded.

In general, you should not use the returned source and zipper to update the module, instead, use this to interrogate the contents or source in some way, and then call `find_and_update_module/3` with a function to perform an update.

__ Link to this function

# module?(zipper)

[ __ View Source ](external_link)

__ Link to this function

# module_exists?(igniter, module_name)

[ __ View Source ](external_link)

Checks if a module is defined somewhere in the project. The returned igniter should not be discarded.

__ Link to this function

# module_name(suffix)

[ __ View Source ](external_link)

This function is deprecated. Use `module_name/2` instead.. 
    
    
    @spec module_name([String.t](external_link)()) :: [module](external_link)()

Given a suffix, returns a module name with the prefix of the current project.

__ Link to this function

# module_name(igniter, suffix)

[ __ View Source ](external_link)
    
    
    @spec module_name([Igniter.t](external_link)(), [String.t](external_link)()) :: [module](external_link)()

Given a suffix, returns a module name with the prefix of the current project.

__ Link to this function

# module_name_prefix()

[ __ View Source ](external_link)

This function is deprecated. Use `module_name_prefix/1` instead. 
    
    
    @spec module_name_prefix() :: [module](external_link)()

The module name prefix based on the mix project's module name

__ Link to this function

# module_name_prefix(igniter)

[ __ View Source ](external_link)
    
    
    @spec module_name_prefix([Igniter.t](external_link)()) :: [module](external_link)()

The module name prefix based on the mix project's module name

__ Link to this function

# move_to_def(zipper, fun, arity)

[ __ View Source ](external_link)

This function is deprecated. Use `Igniter.Code.Function.move_to_def/3` instead. 

__ Link to this function

# move_to_defmodule(zipper)

[ __ View Source ](external_link)
    
    
    @spec move_to_defmodule([Sourceror.Zipper.t](external_link)()) :: {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves the zipper to a defmodule call

__ Link to this function

# move_to_defmodule(zipper, module)

[ __ View Source ](external_link)
    
    
    @spec move_to_defmodule([Sourceror.Zipper.t](external_link)(), [module](external_link)()) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves the zipper to a specific defmodule call

__ Link to this function

# move_to_defp(zipper, fun, arity)

[ __ View Source ](external_link)

This function is deprecated. Use `Igniter.Code.Function.move_to_defp/3` instead. 

__ Link to this function

# move_to_module_using(zipper, one_of_modules)

[ __ View Source ](external_link)
    
    
    @spec move_to_module_using([Sourceror.Zipper.t](external_link)(), [module](external_link)() | [[module](external_link)()]) ::
      {:ok, [Sourceror.Zipper.t](external_link)()} | :error

Moves the zipper to the body of a module that `use`s the provided module (or one of the provided modules).

__ Link to this function

# move_to_use(zipper, module)

[ __ View Source ](external_link)

Moves the zipper to the `use` statement for a provided module.

__ Link to this function

# move_to_using(zipper, module)

[ __ View Source ](external_link)

This function is deprecated. Use `move_to_use/2` instead.. 

__ Link to this function

# parse(module_name)

[ __ View Source ](external_link)
    
    
    @spec parse([String.t](external_link)()) :: [module](external_link)()

Parses a string into a module name

__ Link to this function

# proper_location(module_name, source_folder \\\ "lib")

[ __ View Source ](external_link)
    
    
    @spec proper_location([module](external_link)(), source_folder :: [String.t](external_link)()) :: [Path.t](external_link)()

Returns the idiomatic file location for a given module, starting with "lib/".

Examples:

iex> Igniter.Code.Module.proper_location(MyApp.Hello) "lib/my_app/hello.ex"

__ Link to this function

# proper_test_location(module_name)

[ __ View Source ](external_link)
    
    
    @spec proper_test_location([module](external_link)()) :: [Path.t](external_link)()

Returns the test file location for a given module, according to [`mix test`](external_link) expectations, starting with "test/" and ending with "_test.exs".

Examples:

iex> Igniter.Code.Module.proper_test_location(MyApp.Hello) "test/my_app/hello_test.exs"

iex> Igniter.Code.Module.proper_test_location(MyApp.HelloTest) "test/my_app/hello_test.exs"

__ Link to this function

# proper_test_support_location(module_name)

[ __ View Source ](external_link)
    
    
    @spec proper_test_support_location([module](external_link)()) :: [Path.t](external_link)()

Returns the test support location for a given module, starting with "test/support/" and dropping the module name prefix in the path.

Examples:

iex> Igniter.Code.Module.proper_test_support_location(MyApp.DataCase) "test/support/data_case.ex"
