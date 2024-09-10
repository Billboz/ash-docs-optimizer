# Reactor.Dsl.Switch.Match — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Switch.Match (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Switch.Match (reactor v0.9.1)

The `matches?` DSL entity struct.

See `Reactor.switch.matches?`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Switch.Match{
      __identifier__: [any](external_link)(),
      allow_async?: [boolean](external_link)(),
      predicate: ([any](external_link)() -> [any](external_link)()),
      return: nil | [atom](external_link)(),
      steps: [[Reactor.Dsl.Step.t](external_link)()]
    }
