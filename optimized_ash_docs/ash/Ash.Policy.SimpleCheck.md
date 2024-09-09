# Ash.Policy.SimpleCheck — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Policy.SimpleCheck behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
- __ Types
- actor()
- context()
- options()
- __ Callbacks
- match?(actor, context, options)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Policy.SimpleCheck behaviour (ash v3.4.8)

A type of check that operates only on request context, never on the data

Define `match?/3`, which gets the actor, request context, and opts, and returns true or false

#  __ Summary

##  Types

actor()

context()

options()

##  Callbacks

match?(actor, context, options)

Whether or not the request matches the check

#  __ Types

__ Link to this type

# actor()

[ __ View Source ](external_link)
    
    
    @type actor() :: [Ash.Policy.Check.actor](external_link)()

__ Link to this type

# context()

[ __ View Source ](external_link)
    
    
    @type context() :: [Ash.Policy.Authorizer.t](external_link)()

__ Link to this type

# options()

[ __ View Source ](external_link)
    
    
    @type options() :: [Keyword.t](external_link)()

#  __ Callbacks

__ Link to this callback

# match?(actor, context, options)

[ __ View Source ](external_link)
    
    
    @callback match?(actor(), context(), options()) ::
      [boolean](external_link)() | {:ok, [boolean](external_link)()} | {:error, [term](external_link)()}

Whether or not the request matches the check
