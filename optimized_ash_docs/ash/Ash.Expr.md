# Ash.Expr — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Expr (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- actor(value)
- arg(name)
- atomic_ref(expr)
- can_return_nil?(pred)
- context(name)
- determine_type(value)
- determine_types(mod, args, returns \\\ nil)
- eval(expression, opts \\\ [])
- eval!(expression, opts \\\ [])
- expr(body)
- expr?(value)
- or_where(left, right)
- parent(expr)
- ref(name)
- ref(path, name)
- template_references?(list, pred)
- template_references_argument?(template)
- template_references_context?(template)
- where(left, right)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Expr (ash v3.4.8)

Tools to build Ash expressions

#  __ Summary

##  Types

t()

##  Functions

actor(value)

A template helper for using actor values in filter templates

arg(name)

A template helper for using action arguments in filter templates

atomic_ref(expr)

A template helper for referring to the most recent atomic expression applied to an update field

can_return_nil?(pred)

context(name)

A template helper for using query context in filter templates

determine_type(value)

determine_types(mod, args, returns \\\ nil)

eval(expression, opts \\\ [])

Evaluate an expression. This function only works if you have no references, or if you provide the `record` option.

eval!(expression, opts \\\ [])

Evaluate an expression. See `eval/2` for more.

expr(body)

expr?(value)

Returns true if the value is or contains an expression

or_where(left, right)

parent(expr)

A template helper for creating a parent reference

ref(name)

A template helper for creating a reference

ref(path, name)

A template helper for creating a reference to a related path

template_references?(list, pred)

Whether or not a given template contains an actor reference

template_references_argument?(template)

template_references_context?(template)

where(left, right)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [any](external_link)()

#  __ Functions

__ Link to this function

# actor(value)

[ __ View Source ](external_link)

A template helper for using actor values in filter templates

__ Link to this function

# arg(name)

[ __ View Source ](external_link)

A template helper for using action arguments in filter templates

__ Link to this function

# atomic_ref(expr)

[ __ View Source ](external_link)

A template helper for referring to the most recent atomic expression applied to an update field

__ Link to this function

# can_return_nil?(pred)

[ __ View Source ](external_link)

__ Link to this function

# context(name)

[ __ View Source ](external_link)

A template helper for using query context in filter templates

An atom will get the value for a key, and a list will be accessed via `get_in`.

__ Link to this function

# determine_type(value)

[ __ View Source ](external_link)

__ Link to this function

# determine_types(mod, args, returns \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# eval(expression, opts \\\ [])

[ __ View Source ](external_link)

Evaluate an expression. This function only works if you have no references, or if you provide the `record` option.

__ Link to this function

# eval!(expression, opts \\\ [])

[ __ View Source ](external_link)

Evaluate an expression. See `eval/2` for more.

__ Link to this macro

# expr(body)

[ __ View Source ](external_link) (macro)
    
    
    @spec expr([Macro.t](external_link)()) :: t()

__ Link to this function

# expr?(value)

[ __ View Source ](external_link)
    
    
    @spec expr?([term](external_link)()) :: [boolean](external_link)()

Returns true if the value is or contains an expression

__ Link to this macro

# or_where(left, right)

[ __ View Source ](external_link) (macro)
    
    
    @spec or_where([Macro.t](external_link)(), [Macro.t](external_link)()) :: t()

__ Link to this function

# parent(expr)

[ __ View Source ](external_link)

A template helper for creating a parent reference

__ Link to this function

# ref(name)

[ __ View Source ](external_link)

A template helper for creating a reference

__ Link to this function

# ref(path, name)

[ __ View Source ](external_link)

A template helper for creating a reference to a related path

__ Link to this function

# template_references?(list, pred)

[ __ View Source ](external_link)

Whether or not a given template contains an actor reference

__ Link to this function

# template_references_argument?(template)

[ __ View Source ](external_link)

__ Link to this function

# template_references_context?(template)

[ __ View Source ](external_link)

__ Link to this macro

# where(left, right)

[ __ View Source ](external_link) (macro)
    
    
    @spec where([Macro.t](external_link)(), [Macro.t](external_link)()) :: t()
