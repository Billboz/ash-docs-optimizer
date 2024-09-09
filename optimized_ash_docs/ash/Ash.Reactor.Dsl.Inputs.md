# Ash.Reactor.Dsl.Inputs — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.Inputs (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.Inputs (ash v3.4.8)

The `inputs` entity for the [`Ash.Reactor`](external_link) reactor extension.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.Inputs{
      __identifier__: [any](external_link)(),
      template:
        %{optional([atom](external_link)()) => [Reactor.Template.t](external_link)()}
        | [Keyword.t](external_link)([Reactor.Template.t](external_link)()),
      transform: nil | ([any](external_link)() -> [any](external_link)()) | {[module](external_link)(), [keyword](external_link)()} | [mfa](external_link)()
    }
