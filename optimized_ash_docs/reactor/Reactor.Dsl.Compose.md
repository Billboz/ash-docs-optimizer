# Reactor.Dsl.Compose — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Compose (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Compose (reactor v0.9.1)

The `compose` DSL entity struct.

See the `Reactor.compose`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Compose{
      __identifier__: [any](external_link)(),
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      name: [any](external_link)(),
      reactor: [module](external_link)() | [Reactor.t](external_link)()
    }
