# Reactor.Dsl.Group — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Group (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Group (reactor v0.9.1)

The `group` DSL entity struct.

See `Reactor.group`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Group{
      __identifier__: [any](external_link)(),
      after_all: [mfa](external_link)() | [Reactor.Step.Group.after_fun](external_link)(),
      allow_async?: true,
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      before_all: [mfa](external_link)() | [Reactor.Step.Group.before_fun](external_link)(),
      name: [atom](external_link)(),
      steps: [[Reactor.Dsl.Step.t](external_link)()]
    }
