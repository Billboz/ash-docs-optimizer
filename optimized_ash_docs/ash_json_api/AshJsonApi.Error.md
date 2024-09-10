# AshJsonApi.Error — ash_json_api v1.4.7

Project: ash_json_api v1.4.7

## Table of Contents

- [ __ View Source ](external_link) AshJsonApi.Error (ash_json_api v1.4.7)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- class_to_status(arg1)
- format_log(error)
- new(opts)
- to_json_api_errors(domain, resource, errors, type)
- with_source_pointer(built_error, arg2, resource, type)

__

Search documentation of ash_json_api __ __

__ Settings

#  [ __ View Source ](external_link) AshJsonApi.Error (ash_json_api v1.4.7)

Represents an AshJsonApi Error

#  __ Summary

##  Types

t()

##  Functions

class_to_status(arg1)

Turns an error class into an HTTP status code

format_log(error)

new(opts)

to_json_api_errors(domain, resource, errors, type)

with_source_pointer(built_error, arg2, resource, type)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %AshJsonApi.Error{
      about: [term](external_link)(),
      code: [term](external_link)(),
      detail: [term](external_link)(),
      id: [term](external_link)(),
      internal_description: [term](external_link)(),
      log_level: [term](external_link)(),
      meta: [term](external_link)(),
      source_parameter: [term](external_link)(),
      source_pointer: [term](external_link)(),
      status_code: [term](external_link)(),
      title: [term](external_link)()
    }

#  __ Functions

__ Link to this function

# class_to_status(arg1)

[ __ View Source ](external_link)

Turns an error class into an HTTP status code

__ Link to this function

# format_log(error)

[ __ View Source ](external_link)

__ Link to this function

# new(opts)

[ __ View Source ](external_link)

__ Link to this function

# to_json_api_errors(domain, resource, errors, type)

[ __ View Source ](external_link)

__ Link to this function

# with_source_pointer(built_error, arg2, resource, type)

[ __ View Source ](external_link)
