# Ash.Resource — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Resource (ash v3.4.8)
    - __ Options
- __ Summary
  - Types
  - Functions
- __ Types
- record()
- t()
- __ Functions
- get_metadata(record, key_or_path)
- loaded?(data, path, opts \\\ [])
  - __ Options
- put_metadata(record, key, term)
- selected?(record, field)
- set_metadata(record, map)
- unload(page, path)
- unload_many(data, paths)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Resource (ash v3.4.8)

A resource is a static definition of an entity in your system.

[Resource DSL documentation](external_link)

###  __ Options

  * `:simple_notifiers` (list of module that adopts [`Ash.Notifier`](external_link)) - Notifiers with no DSL.

  * `:validate_domain_inclusion?` ([`boolean/0`](external_link)) - Whether or not to validate that this resource is included in a domain. The default value is `true`.

  * `:domain` (module that adopts [`Ash.Domain`](external_link)) - The domain to use when interacting with this resource. Also sets defaults for various options that ask for a domain.

  * `:embed_nil_values?` ([`boolean/0`](external_link)) - Whether or not to include keys with `nil` values in an embedded representation. Has no effect unless resource is an embedded resource. The default value is `true`.

  * `:extensions` (list of module that adopts [`Spark.Dsl.Extension`](external_link)) - A list of DSL extensions to add to the [`Spark.Dsl`](external_link)

  * `:data_layer` (module that adopts [`Ash.DataLayer`](external_link)) - data_layer extensions to add to the [`Spark.Dsl`](external_link) The default value is [`Ash.DataLayer.Simple`](external_link).

  * `:authorizers` (one or a list of module that adopts [`Ash.Authorizer`](external_link)) - authorizers extensions to add to the [`Spark.Dsl`](external_link) The default value is `[]`.

  * `:notifiers` (one or a list of module that adopts [`Ash.Notifier`](external_link)) - notifiers extensions to add to the [`Spark.Dsl`](external_link) The default value is `[]`.

  * `:otp_app` ([`atom/0`](external_link)) - The otp_app to use for any application configurable options

  * `:fragments` (list of [`module/0`](external_link)) - Fragments to include in the [`Spark.Dsl`](external_link). See the fragments guide for more.




#  __ Summary

##  Types

record()

t()

##  Functions

get_metadata(record, key_or_path)

loaded?(data, path, opts \\\ [])

Returns true if the load or path to load has been loaded

put_metadata(record, key, term)

selected?(record, field)

set_metadata(record, map)

unload(page, path)

Sets a loaded key or path to a key back to its original unloaded stated

unload_many(data, paths)

Sets a list of loaded key or paths to a key back to their original unloaded stated

#  __ Types

__ Link to this type

# record()

[ __ View Source ](external_link)
    
    
    @type record() :: [struct](external_link)()

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)()

#  __ Functions

__ Link to this function

# get_metadata(record, key_or_path)

[ __ View Source ](external_link)
    
    
    @spec get_metadata(record(), [atom](external_link)() | [[atom](external_link)()]) :: [term](external_link)()

__ Link to this function

# loaded?(data, path, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec loaded?(
      nil | [record()] | record() | [Ash.Page.page](external_link)(),
      [atom](external_link)() | [Ash.Query.Calculation.t](external_link)() | [Ash.Query.Aggregate.t](external_link)() | [[atom](external_link)()],
      opts :: [Keyword.t](external_link)()
    ) :: [boolean](external_link)()

Returns true if the load or path to load has been loaded

##  __ Options

  * `lists`: set to `:any` to have this return true if any record in a list that appears has the value loaded. Default is `:all`.
  * `unknown`: set to `true` to have unknown paths (like nil values or non-resources) return true. Defaults to `false`
  * `strict?`: set to `true` to return false if a calculation with arguments is being checked



__ Link to this function

# put_metadata(record, key, term)

[ __ View Source ](external_link)
    
    
    @spec put_metadata(record(), [atom](external_link)(), [term](external_link)()) :: record()

__ Link to this function

# selected?(record, field)

[ __ View Source ](external_link)
    
    
    @spec selected?(record(), [atom](external_link)()) :: [boolean](external_link)()

__ Link to this function

# set_metadata(record, map)

[ __ View Source ](external_link)
    
    
    @spec set_metadata(record(), [map](external_link)()) :: record()

__ Link to this function

# unload(page, path)

[ __ View Source ](external_link)
    
    
    @spec unload(
      nil | [record()] | record() | [Ash.Page.page](external_link)(),
      [atom](external_link)() | [[atom](external_link)()]
    ) :: nil | [record()] | record() | [Ash.Page.page](external_link)()

Sets a loaded key or path to a key back to its original unloaded stated

__ Link to this function

# unload_many(data, paths)

[ __ View Source ](external_link)
    
    
    @spec unload_many(
      nil | [record()] | record() | [Ash.Page.page](external_link)(),
      [[atom](external_link)()] | [[[atom](external_link)()]]
    ) :: nil | [record()] | record() | [Ash.Page.page](external_link)()

Sets a list of loaded key or paths to a key back to their original unloaded stated
