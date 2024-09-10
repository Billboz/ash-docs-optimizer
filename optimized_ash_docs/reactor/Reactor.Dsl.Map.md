# Reactor.Dsl.Map — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Map (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Map (reactor v0.9.1)

The `map` DSL entity struct.

See `Reactor.map`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Map{
      __identifier__: [any](external_link)(),
      allow_async?: [boolean](external_link)(),
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      batch_size: [pos_integer](external_link)(),
      iterable?: true,
      name: [atom](external_link)(),
      return: [atom](external_link)(),
      source: [Reactor.Template.t](external_link)(),
      steps: [[Reactor.Dsl.Step.t](external_link)()],
      strict_ordering?: [boolean](external_link)()
    }
