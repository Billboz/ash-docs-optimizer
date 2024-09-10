# Reactor.Dsl.Debug — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Debug (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Debug (reactor v0.9.1)

The `debug` DSL entity struct.

See `Reactor.debug`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Debug{
      __identifier__: [any](external_link)(),
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      level: [Logger.level](external_link)(),
      name: [atom](external_link)()
    }
