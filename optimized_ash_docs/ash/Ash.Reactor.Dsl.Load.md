# Ash.Reactor.Dsl.Load — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.Load (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.Load (ash v3.4.8)

The `load` step entity for the [`Ash.Reactor`](external_link) reactor extension.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.Load{
      __identifier__: [any](external_link)(),
      action: nil | [atom](external_link)(),
      action_step?: false,
      actor: nil | [Ash.Reactor.Dsl.Actor.t](external_link)(),
      async?: [boolean](external_link)(),
      authorize?: nil | [boolean](external_link)(),
      description: nil | [String.t](external_link)(),
      domain: nil | [Ash.Domain.t](external_link)(),
      lazy?: nil | [boolean](external_link)(),
      load: [Reactor.Template.t](external_link)(),
      name: [atom](external_link)(),
      records: [Reactor.Template.t](external_link)(),
      reuse_values?: nil | [boolean](external_link)(),
      strict?: nil | [boolean](external_link)(),
      tenant: nil | [Ash.Reactor.Dsl.Tenant.t](external_link)(),
      transform: nil | ([any](external_link)() -> [any](external_link)()) | {[module](external_link)(), [keyword](external_link)()} | [mfa](external_link)(),
      type: :load,
      wait_for: [[Reactor.Dsl.WaitFor.t](external_link)()]
    }
