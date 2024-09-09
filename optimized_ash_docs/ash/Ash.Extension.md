# Ash.Extension — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Extension behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
- __ Types
- argv()
- igniter()
- __ Callbacks
- codegen(argv)
- install(igniter, module, type, location, argv)
- migrate(argv)
- reset(argv)
- rollback(argv)
- setup argv
- tear_down(argv)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Extension behaviour (ash v3.4.8)

A behavior of additional callbacks that extensions can implement, specific to Ash.

It is not necessary to adopt this behavior, but it is recommended to do so if you want to define these functions on your extension. These functions are invoked when their relevant Mix task is run.

#  __ Summary

##  Types

argv()

igniter()

##  Callbacks

codegen(argv)

install(igniter, module, type, location, argv)

migrate(argv)

reset(argv)

rollback(argv)

setup argv

tear_down(argv)

#  __ Types

__ Link to this type

# argv()

[ __ View Source ](external_link)
    
    
    @type argv() :: [[String.t](external_link)()]

__ Link to this type

# igniter()

[ __ View Source ](external_link)
    
    
    @type igniter() :: [Igniter.t](external_link)()

#  __ Callbacks

__ Link to this callback

# codegen(argv)

[ __ View Source ](external_link) (optional)
    
    
    @callback codegen(argv()) :: [term](external_link)()

__ Link to this callback

# install(igniter, module, type, location, argv)

[ __ View Source ](external_link) (optional)
    
    
    @callback install(
      igniter(),
      module :: [module](external_link)(),
      type :: [Ash.Resource.t](external_link)() | [Ash.Domain.t](external_link)(),
      location :: [String.t](external_link)(),
      argv()
    ) :: igniter()

__ Link to this callback

# migrate(argv)

[ __ View Source ](external_link) (optional)
    
    
    @callback migrate(argv()) :: [term](external_link)()

__ Link to this callback

# reset(argv)

[ __ View Source ](external_link) (optional)
    
    
    @callback reset(argv()) :: [term](external_link)()

__ Link to this callback

# rollback(argv)

[ __ View Source ](external_link) (optional)
    
    
    @callback rollback(argv()) :: [term](external_link)()

__ Link to this callback

# setup argv

[ __ View Source ](external_link) (optional)
    
    
    @callback setup(argv()) :: [term](external_link)()

__ Link to this callback

# tear_down(argv)

[ __ View Source ](external_link) (optional)
    
    
    @callback tear_down(argv()) :: [term](external_link)()
