# Reactor.Dsl.Build — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Build protocol (reactor v0.9.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- build(entity, reactor)
- verify(entity, dsl_state)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Build protocol (reactor v0.9.1)

A protocol which DSL entities must implement.

#  __ Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

build(entity, reactor)

Build an entity into a Reactor.

verify(entity, dsl_state)

Perform any after-compilation verification that is needed to make the entity work.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__ Link to this function

# build(entity, reactor)

[ __ View Source ](external_link)
    
    
    @spec build(t(), [Reactor.t](external_link)()) :: {:ok, [Reactor.t](external_link)()} | {:error, [any](external_link)()}

Build an entity into a Reactor.

This function is called during conversion of a DSL module into a Reactor struct. This allows extensions to specify the behaviour of how they want to alter the structure of the Reactor.

__ Link to this function

# verify(entity, dsl_state)

[ __ View Source ](external_link)
    
    
    @spec verify(t(), [Spark.Dsl.t](external_link)()) :: :ok | {:error, [any](external_link)()}

Perform any after-compilation verification that is needed to make the entity work.

See [`Spark.Dsl.Verifier`](external_link) for more information.
