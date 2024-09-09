# Ash.CiString — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.CiString (ash v3.4.8)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- compare(left, right)
- new(value, casing \\\ nil)
- sigil_i(value, mods)
- to_comparable_string(value)
- value(ci_string)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.CiString (ash v3.4.8)

Represents a case insensitive string

While some data layers are aware of case insensitive string types, in order for values of this type to be used in other parts of Ash Framework, it has to be embedded in a module this allows us to implement the [`Comparable`](external_link) protocol for it.

For the type implementation, see [`Ash.Type.CiString`](external_link)

#  __ Summary

##  Types

t()

##  Functions

compare(left, right)

new(value, casing \\\ nil)

sigil_i(value, mods)

Creates a case insensitive string

to_comparable_string(value)

Returns the downcased value, only downcasing if it hasn't already been done

value(ci_string)

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Ash.CiString{
      case: nil | :lower | :upper,
      casted?: [boolean](external_link)(),
      string: [String.t](external_link)()
    }

#  __ Functions

__ Link to this function

# compare(left, right)

[ __ View Source ](external_link)

__ Link to this function

# new(value, casing \\\ nil)

[ __ View Source ](external_link)

__ Link to this function

# sigil_i(value, mods)

[ __ View Source ](external_link)

Creates a case insensitive string

__ Link to this function

# to_comparable_string(value)

[ __ View Source ](external_link)

Returns the downcased value, only downcasing if it hasn't already been done

__ Link to this function

# value(ci_string)

[ __ View Source ](external_link)
