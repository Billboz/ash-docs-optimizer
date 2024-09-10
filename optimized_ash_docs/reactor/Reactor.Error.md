# Reactor.Error — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Error (reactor v0.9.1)
- __ Summary
  - Types
  - Functions
- __ Types
- class()
- class_module()
- error_class()
- t()
- __ Functions
- __using__(opts)
- splode_error?(arg1, splode)

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Error (reactor v0.9.1)

Uses `splode` to manage various classes of error.

#  __ Summary

##  Types

class()

class_module()

error_class()

t()

##  Functions

__using__(opts)

Convenience wrapper around `use Splode.Error`

splode_error?(arg1, splode)

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
      Reactor.Error.Validation
      | Reactor.Error.Unknown
      | Reactor.Error.Invalid
      | Reactor.Error.Internal

__ Link to this type

# error_class()

[ __ View Source ](external_link)
    
    
    @type error_class() :: :validation | :unknown | :invalid | :reactor

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

__ Link to this macro

# __using__(opts)

[ __ View Source ](external_link) (macro)
    
    
    @spec __using__([keyword](external_link)()) :: [Macro.output](external_link)()

Convenience wrapper around `use Splode.Error`

__ Link to this function

# splode_error?(arg1, splode)

[ __ View Source ](external_link)
