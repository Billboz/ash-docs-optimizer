# Spark.Igniter — spark v2.2.24

Project: spark v2.2.24

## Table of Contents

- [ __ View Source ](external_link) Spark.Igniter (spark v2.2.24)
- __ Summary
  - Functions
- __ Functions
- add_extension(igniter, module, type, key, extension, singleton? \\\ false)
- get_option(igniter, module, path)
- has_extension(igniter, module, type, key, extension)
- prepend_to_section_order(igniter, type, sections)
- remove_extension(igniter, module, type, key, extension, singleton? \\\ false)
- set_option(igniter, module, path, value, updater \\\ &{:ok, &1})
- update_dsl(igniter, module, path, value, func)

__

Search documentation of spark __ __

__ Settings

#  [ __ View Source ](external_link) Spark.Igniter (spark v2.2.24)

Helpers for patching Spark DSLs.

#  __ Summary

##  Functions

add_extension(igniter, module, type, key, extension, singleton? \\\ false)

Adds an extension to a DSL module.

get_option(igniter, module, path)

Gets an option at a given path within a DSL. We will attempt to expand literals using the environment at the path but this is only guaranteed to return the _AST_ at that option, _not_ necessarily a value.

has_extension(igniter, module, type, key, extension)

Returns `{igniter, true}` if the module has the extension, or `{igniter, false}` otherwise.

prepend_to_section_order(igniter, type, sections)

Prepends a new section or list of sections to the section order in a formatter configuration.

remove_extension(igniter, module, type, key, extension, singleton? \\\ false)

Removes an extension from a DSL module.

set_option(igniter, module, path, value, updater \\\ &{:ok, &1})

Sets an option at a given path within in a DSL.

update_dsl(igniter, module, path, value, func)

#  __ Functions

__ Link to this function

# add_extension(igniter, module, type, key, extension, singleton? \\\ false)

[ __ View Source ](external_link)
    
    
    @spec add_extension([Igniter.t](external_link)(), [module](external_link)(), [module](external_link)(), [atom](external_link)(), [module](external_link)(), [boolean](external_link)()) ::
      [Igniter.t](external_link)()

Adds an extension to a DSL module.

__ Link to this function

# get_option(igniter, module, path)

[ __ View Source ](external_link)
    
    
    @spec get_option([Igniter.t](external_link)(), [module](external_link)(), [[atom](external_link)()]) ::
      {[Igniter.t](external_link)(), {:ok, [Macro.t](external_link)()} | :error}

Gets an option at a given path within a DSL. We will attempt to expand literals using the environment at the path but this is only guaranteed to return the _AST_ at that option, _not_ necessarily a value.

Additionally, this only finds options set explicitly in the body of the resource, not by an extension.

__ Link to this function

# has_extension(igniter, module, type, key, extension)

[ __ View Source ](external_link)
    
    
    @spec has_extension([Igniter.t](external_link)(), [module](external_link)(), [module](external_link)(), [atom](external_link)(), [module](external_link)()) ::
      {[Igniter.t](external_link)(), [boolean](external_link)()}

Returns `{igniter, true}` if the module has the extension, or `{igniter, false}` otherwise.

__ Link to this function

# prepend_to_section_order(igniter, type, sections)

[ __ View Source ](external_link)

Prepends a new section or list of sections to the section order in a formatter configuration.

__ Link to this function

# remove_extension(igniter, module, type, key, extension, singleton? \\\ false)

[ __ View Source ](external_link)
    
    
    @spec remove_extension([Igniter.t](external_link)(), [module](external_link)(), [module](external_link)(), [atom](external_link)(), [module](external_link)(), [boolean](external_link)()) ::
      [Igniter.t](external_link)()

Removes an extension from a DSL module.

__ Link to this function

# set_option(igniter, module, path, value, updater \\\ &{:ok, &1})

[ __ View Source ](external_link)
    
    
    @spec set_option(
      [Igniter.t](external_link)(),
      [module](external_link)(),
      dsl_path :: [[atom](external_link)()],
      value :: [term](external_link)(),
      ([Sourceror.Zipper.t](external_link)() ->
         {:ok, [Sourceror.Zipper.t](external_link)()} | {:error, [term](external_link)() | [[term](external_link)()]} | :error)
    ) :: [Igniter.t](external_link)()

Sets an option at a given path within in a DSL.

__ Link to this function

# update_dsl(igniter, module, path, value, func)

[ __ View Source ](external_link)
