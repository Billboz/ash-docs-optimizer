# Ash.Reactor.Dsl.ActionLoad — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.ActionLoad (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.ActionLoad (ash v3.4.8)

Add a load statement to an action.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.ActionLoad{
      __identifier__: [any](external_link)(),
      source: [Reactor.Template.t](external_link)(),
      transform: nil | ([any](external_link)() -> [any](external_link)()) | {[module](external_link)(), [keyword](external_link)()} | [mfa](external_link)()
    }
