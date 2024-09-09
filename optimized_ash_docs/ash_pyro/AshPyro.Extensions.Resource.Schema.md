# AshPyro.Extensions.Resource.Schema — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource.Schema (AshPyro v0.2.1)
- __ Summary
  - Types
  - Functions
- __ Types
- css_class()
- sort()
- __ Functions
- css_class_schema_type()
- inheritable_schema_type(type \\\ :string)
- pagination_schema_type()
- sort_schema_type()

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource.Schema (AshPyro v0.2.1)

Shared types for resource extension schemas.

#  __ Summary

##  Types

css_class()

sort()

##  Functions

css_class_schema_type()

schema type for CSS classes accepted by an Ash component

inheritable_schema_type(type \\\ :string)

build an inheritable type

pagination_schema_type()

pagination types

sort_schema_type()

acceptable formats for sorting options

#  __ Types

__ Link to this type

# css_class()

[ __ View Source ](external_link)
    
    
    @type css_class() :: [any](external_link)() | ([map](external_link)() -> [any](external_link)())

__ Link to this type

# sort()

[ __ View Source ](external_link)
    
    
    @type sort() ::
      [String.t](external_link)() | [{[atom](external_link)(), [Ash.Sort.sort_order](2.18.2/Ash.Sort.html#t:sort_order/0)()}] | [[atom](external_link)()] | [[String.t](external_link)()] | nil

#  __ Functions

__ Link to this function

# css_class_schema_type()

[ __ View Source ](external_link)

schema type for CSS classes accepted by an Ash component

__ Link to this function

# inheritable_schema_type(type \\\ :string)

[ __ View Source ](external_link)

build an inheritable type

__ Link to this function

# pagination_schema_type()

[ __ View Source ](external_link)

pagination types

__ Link to this function

# sort_schema_type()

[ __ View Source ](external_link)

acceptable formats for sorting options
