# Ash.Error — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Error (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- class()
- class_module()
- error_class()
- t()
- __ Functions
- ash_error?(value)
- error_descriptions(errors)
- splode_error?(arg1, splode)
- to_ash_error(value, stacktrace \\\ nil, opts \\\ [])
- to_error_class(value, opts \\\ [])

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Error (ash v3.4.8)

Tools and utilities used by Ash to manage and conform errors

#  __ Summary

##  Types

class()

class_module()

error_class()

t()

##  Functions

ash_error?(value)

error_descriptions(errors)

splode_error?(arg1, splode)

to_ash_error(value, stacktrace \\\ nil, opts \\\ [])

to_error_class(value, opts \\\ [])

#  __ Types

__ Link to this type

# class()

[ __ View Source ](external_link)
    
    
    @type class() :: %{
      :__struct__ => class_module(),
      :__exception__ => true,
      :errors => [t()],
      :class => error_class(),
      :bread_crumbs => [[String.t](external_link)()],
      :vars => [Keyword.t](external_link)(),
      :stacktrace => [Splode.Stacktrace.t](external_link)() | nil,
      :context => [map](external_link)(),
      optional([atom](external_link)()) => [any](external_link)()
    }

__ Link to this type

# class_module()

[ __ View Source ](external_link)
    
    
    @type class_module() ::
      Ash.Error.Unknown
      | Ash.Error.Framework
      | Ash.Error.Invalid
      | Ash.Error.Forbidden

__ Link to this type

# error_class()

[ __ View Source ](external_link)
    
    
    @type error_class() :: :unknown | :framework | :invalid | :forbidden

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %{
      :__struct__ => [module](external_link)(),
      :__exception__ => true,
      :class => error_class(),
      :bread_crumbs => [[String.t](external_link)()],
      :vars => [Keyword.t](external_link)(),
      :stacktrace => [Splode.Stacktrace.t](external_link)() | nil,
      :context => [map](external_link)(),
      optional([atom](external_link)()) => [any](external_link)()
    }

#  __ Functions

__ Link to this function

# ash_error?(value)

[ __ View Source ](external_link)

__ Link to this function

# error_descriptions(errors)

[ __ View Source ](external_link)

__ Link to this function

# splode_error?(arg1, splode)

[ __ View Source ](external_link)

__ Link to this function

# to_ash_error(value, stacktrace \\\ nil, opts \\\ [])

[ __ View Source ](external_link)

__ Link to this function

# to_error_class(value, opts \\\ [])

[ __ View Source ](external_link)
