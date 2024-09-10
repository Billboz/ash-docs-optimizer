# Ash.Reactor.Dsl.Read — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.Read (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.Read (ash v3.4.8)

The `read` entity for the [`Ash.Reactor`](external_link) reactor extension.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.Read{
      __identifier__: [any](external_link)(),
      action: [atom](external_link)(),
      action_step?: true,
      actor: nil | [Ash.Reactor.Dsl.Actor.t](external_link)(),
      async?: [boolean](external_link)(),
      authorize?: [boolean](external_link)() | nil,
      description: [String.t](external_link)() | nil,
      domain: [Ash.Domain.t](external_link)(),
      inputs: [[Ash.Reactor.Dsl.Inputs.t](external_link)()],
      load: nil | [Ash.Reactor.Dsl.ActionLoad.t](external_link)(),
      name: [atom](external_link)(),
      resource: [module](external_link)(),
      tenant: nil | [Ash.Reactor.Dsl.Tenant.t](external_link)(),
      transform: [term](external_link)(),
      type: :create,
      wait_for: [[Reactor.Dsl.WaitFor.t](external_link)()]
    }
