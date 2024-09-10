# Ash.Reactor.Dsl.AshStep — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.Dsl.AshStep (ash v3.4.8)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.Dsl.AshStep (ash v3.4.8)

The ash_step DSL module.

See `Reactor.step`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Reactor.Dsl.AshStep{
      __identifier__: [any](external_link)(),
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      async?: [boolean](external_link)(),
      compensate:
        nil
        | ([any](external_link)(), [Reactor.inputs](external_link)(), [Reactor.context](external_link)() ->
             :ok | :retry | {:continue, [any](external_link)()}),
      impl: nil | [module](external_link)() | {[module](external_link)(), [keyword](external_link)()},
      max_retries: [non_neg_integer](external_link)() | :infinity,
      name: [atom](external_link)(),
      run:
        nil
        | ([Reactor.inputs](external_link)(), [Reactor.context](external_link)() ->
             {:ok, [any](external_link)()}
             | {:ok, [any](external_link)(), [[Reactor.Step.t](external_link)()]}
             | {:halt | :error, [any](external_link)()}),
      transform: nil | ([any](external_link)() -> [any](external_link)()),
      undo:
        nil
        | ([any](external_link)(), [Reactor.inputs](external_link)(), [Reactor.context](external_link)() ->
             :ok | :retry | {:error, [any](external_link)()})
    }
