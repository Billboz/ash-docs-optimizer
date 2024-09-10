# Ash.Reactor.Dsl.Transaction — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.Transaction (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.Transaction (ash v3.4.8)

The `transaction` entity for the [`Ash.Reactor`](external_link) reactor extension.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.Transaction{
      __identifier__: [any](external_link)(),
      arguments: [],
      description: nil | [String.t](external_link)(),
      name: [atom](external_link)(),
      resources: [[Ash.Resource.t](external_link)()],
      return: [atom](external_link)(),
      steps: [[Reactor.Step.t](external_link)()],
      timeout: [timeout](external_link)(),
      type: :transaction,
      wait_for: [[Reactor.Dsl.WaitFor.t](external_link)()]
    }
