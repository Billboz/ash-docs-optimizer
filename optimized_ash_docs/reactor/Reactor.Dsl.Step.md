# Reactor.Dsl.Step — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Step (reactor v0.9.1)
- __ Summary
  - Types
- __ Types
- t()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Step (reactor v0.9.1)

The struct used to store step DSL entities.

See `Reactor.step`.

#  __ Summary

##  Types

t()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Step{
      __identifier__: [any](external_link)(),
      arguments: [[Reactor.Dsl.Argument.t](external_link)()],
      async?: [boolean](external_link)(),
      compensate:
        nil
        | ([any](external_link)(), [Reactor.inputs](external_link)(), [Reactor.context](external_link)() ->
             :ok | :retry | {:continue, [any](external_link)()}),
      impl: [module](external_link)() | {[module](external_link)(), [keyword](external_link)()},
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
