# Reactor.Dsl.Switch — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Switch (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Switch (reactor v0.9.1)

The `switch` DSL entity struct.

See `Reactor.switch`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Switch{
      __identifier__: [any](external_link)(),
      allow_async?: [boolean](external_link)(),
      default: nil | [Reactor.Dsl.Switch.Default.t](external_link)(),
      matches: [[Reactor.Dsl.Switch.Match.t](external_link)()],
      name: [atom](external_link)(),
      on:
        [Reactor.Template.Input.t](external_link)()
        | [Reactor.Template.Result.t](external_link)()
        | [Reactor.Template.Value.t](external_link)()
    }
