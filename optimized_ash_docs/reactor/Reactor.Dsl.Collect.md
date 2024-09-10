# Reactor.Dsl.Collect — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Collect (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Collect (reactor v0.9.1)

The struct used to store collect DSL entities.

See `Reactor.collect`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Collect{
      __identifier__: [any](external_link)(),
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      name: [atom](external_link)(),
      transform: nil | ([any](external_link)() -> [any](external_link)())
    }
