# Ash.Type.NewType — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Type.NewType behaviour (ash v3.4.8)
- __ Summary
  - Types
  - Callbacks
  - Functions
- __ Types
- t()
- __ Callbacks
- subtype_constraints()
- subtype_of()
- type_constraints(constraints, subtype_constraints)
- __ Functions
- constraints(type, constraints)
- new_type?(type)
- subtype_of(type)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Type.NewType behaviour (ash v3.4.8)

Allows defining a new type that is the combination of an existing type and custom constraints

A subtle difference between this type and its supertype (one that will almost certainly not matter in any case) is that we use the `apply_constraints` logic of the underlying type in the same step as `cast_input`. We do this because new types like these are, generally speaking, considering the constraint application as part of the core type. Other types, if you simply do [`Ash.Type.cast_input/3`](external_link) you will not be also applying their constraints.

For Example:
    
    
    defmodule MyApp.Types.SSN do
      use Ash.Type.NewType, subtype_of: :string, constraints: [match: ~r/regex for ssn/]
    end
    
    defmodule MyApp.Types.Metadata do
      use Ash.Type.NewType, subtype_of: :union, constraints: [types: [
        foo: [...],
        bar: [...]
      ]]
    end

#  __ Summary

##  Types

t()

##  Callbacks

subtype_constraints()

Returns the underlying subtype constraints

subtype_of()

Returns the type that the NewType is a subtype of.

type_constraints(constraints, subtype_constraints)

Returns the modified NewType constraints

##  Functions

constraints(type, constraints)

Returns the constraints schema.

new_type?(type)

Returns true if the corresponding type is an Ash.Type.NewType

subtype_of(type)

Returns the type that the given newtype is a subtype of

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: [module](external_link)() | [atom](external_link)() | {:array, [module](external_link)() | [atom](external_link)()}

#  __ Callbacks

__ Link to this callback

# subtype_constraints()

[ __ View Source ](external_link)
    
    
    @callback subtype_constraints() :: [Keyword.t](external_link)()

Returns the underlying subtype constraints

__ Link to this callback

# subtype_of()

[ __ View Source ](external_link)
    
    
    @callback subtype_of() :: [module](external_link)() | [atom](external_link)()

Returns the type that the NewType is a subtype of.

__ Link to this callback

# type_constraints(constraints, subtype_constraints)

[ __ View Source ](external_link)
    
    
    @callback type_constraints(constraints :: [Keyword.t](external_link)(), subtype_constraints :: [Keyword.t](external_link)()) ::
      [Keyword.t](external_link)()

Returns the modified NewType constraints

#  __ Functions

__ Link to this function

# constraints(type, constraints)

[ __ View Source ](external_link)
    
    
    @spec constraints([Ash.Type.t](external_link)(), [Keyword.t](external_link)()) :: [Keyword.t](external_link)()

Returns the constraints schema.

__ Link to this function

# new_type?(type)

[ __ View Source ](external_link)
    
    
    @spec new_type?([Ash.Type.t](external_link)()) :: [boolean](external_link)()

Returns true if the corresponding type is an Ash.Type.NewType

__ Link to this function

# subtype_of(type)

[ __ View Source ](external_link)
    
    
    @spec subtype_of(t()) :: [Ash.Type.t](external_link)()

Returns the type that the given newtype is a subtype of
