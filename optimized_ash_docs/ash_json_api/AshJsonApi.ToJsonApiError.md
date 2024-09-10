# AshJsonApi.ToJsonApiError — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.ToJsonApiError protocol (ash_json_api v1.4.7)
  - __ Example
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- to_json_api_error(struct)

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.ToJsonApiError protocol (ash_json_api v1.4.7)

A protocol for turning an Ash exception into an AshJsonApi.Error

To use, implement the protocol for a builtin Ash exception type or for your own custom Ash exception.

##  __ Example
    
    
    defmodule NotAvailable do
      use Ash.Error.Exception
    
      use Splode.Error,
        fields: [],
        class: :invalid
    
      defimpl AshJsonApi.ToJsonApiError do
        def to_json_api_error(error) do
          %AshJsonApi.Error{
            id: Ash.UUID.generate(),
            status_code: 409,
            code: "not_available",
            title: "not_available",
            detail: "Not available"
          }
        end
      end
    end

#  __ Summary

##  Types

t()

All the types that implement this protocol.

##  Functions

to_json_api_error(struct)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [term](external_link)()

All the types that implement this protocol.

#  __ Functions

__ Link to this function

# to_json_api_error(struct)

[ __ View Source ](external_link)
    
    
    @spec to_json_api_error([term](external_link)()) :: [AshJsonApi.Error.t](external_link)() | [[AshJsonApi.Error.t](external_link)()]
