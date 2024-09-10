# Ash.Reactor.Dsl.Change — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.Change (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.Change (ash v3.4.8)

The `change` entity for the [`Ash.Reactor`](external_link) reactor extension.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.Change{
      __identifier__: [any](external_link)(),
      action_step?: false,
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      async?: [boolean](external_link)(),
      change: [Ash.Resource.Change.t](external_link)() | [Ash.Resource.Change.ref](external_link)(),
      description: nil | [String.t](external_link)(),
      fail_if_invalid?: [boolean](external_link)(),
      initial: nil | [Reactor.Template.t](external_link)(),
      name: [atom](external_link)(),
      only_when_valid?: [term](external_link)(),
      type: :change,
      where: [[Ash.Resource.Validation.ref](external_link)()]
    }
