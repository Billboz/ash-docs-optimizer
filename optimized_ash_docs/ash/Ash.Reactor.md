# Ash.Reactor — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- action()
- __ Functions
- ash(body)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor (ash v3.4.8)

[`Ash.Reactor`](external_link) is a [`Reactor`](external_link) extension which provides steps for working with Ash resources and actions.

See the [Ash Reactor Guide](reactor.html) for more information.

#  __ Summary

##  Types

action()

##  Functions

ash(body)

#  __ Types

__ Link to this type

# action()

[ __ View Source ](external_link)
    
    
    @type action() ::
      [Ash.Reactor.Dsl.Action.t](external_link)()
      | [Ash.Reactor.Dsl.AshStep.t](external_link)()
      | [Ash.Reactor.Dsl.BulkCreate.t](external_link)()
      | [Ash.Reactor.Dsl.BulkUpdate.t](external_link)()
      | [Ash.Reactor.Dsl.Create.t](external_link)()
      | [Ash.Reactor.Dsl.Destroy.t](external_link)()
      | [Ash.Reactor.Dsl.Load.t](external_link)()
      | [Ash.Reactor.Dsl.Read.t](external_link)()
      | [Ash.Reactor.Dsl.ReadOne.t](external_link)()
      | [Ash.Reactor.Dsl.Update.t](external_link)()

#  __ Functions

__ Link to this macro

# ash(body)

[ __ View Source ](external_link) (macro)
