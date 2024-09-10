# Reactor.Argument.Build — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Argument.Build protocol (reactor v0.9.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- build(input)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Argument.Build protocol (reactor v0.9.1)

A protocol which can be used to convert something into an argument.

#  __ Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

build(input)

Convert the input into an argument.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__ Link to this function

# build(input)

[ __ View Source ](external_link)
    
    
    @spec build(t()) :: {:ok, [[Reactor.Argument.t](external_link)()]} | {:error, [any](external_link)()}

Convert the input into an argument.
