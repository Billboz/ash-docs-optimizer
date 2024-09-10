# Reactor.Dsl.Around — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Around (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Around (reactor v0.9.1)

The `around` DSL entity struct.

See `Reactor.around`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Around{
      __identifier__: [any](external_link)(),
      allow_async?: [boolean](external_link)(),
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      fun: [mfa](external_link)() | [Reactor.Step.Around.around_fun](external_link)(),
      name: [atom](external_link)(),
      steps: [[Reactor.Dsl.Step.t](external_link)()]
    }
