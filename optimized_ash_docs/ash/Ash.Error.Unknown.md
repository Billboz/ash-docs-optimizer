# Ash.Error.Unknown — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Error.Unknown exception (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- exception()

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Error.Unknown exception (ash v3.4.8)

The top level unknown error container

#  __ Summary

##  Types

t()

##  Functions

exception()

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.Error.Unknown{
      __exception__: true,
      action_input: [term](external_link)(),
      bread_crumbs: [term](external_link)(),
      changeset: [term](external_link)(),
      class: [term](external_link)(),
      errors: [term](external_link)(),
      path: [term](external_link)(),
      query: [term](external_link)(),
      splode: [term](external_link)(),
      stacktrace: [term](external_link)(),
      vars: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# exception()

[ __ View Source ](external_link)
