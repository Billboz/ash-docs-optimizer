# Ashton.Type — ashton v0.4.1

Project: ashton v0.4.1

## Table of Contents

  - v0.4.1
- ashton v0.4.1 Ashton.Type [ View Source ](external_link)
- Link to this section Summary
  - Functions
- Link to this section Functions
- format_type(opt, list) [ View Source ](external_link)
- matches_type?(types, value) [ View Source ](external_link)
- merge(same, same) [ View Source ](external_link)
- valid_type?(types) [ View Source ](external_link)
- validate_types(types, field_name, opts, schema) [ View Source ](external_link)

[ ashton ](external_link)

##  v0.4.1 

  * Pages
  * Modules






#  ashton v0.4.1 Ashton.Type [ View Source ](external_link)

Exposes functions for validating types, and determining if a value matches a type.

#  Link to this section Summary 

##  Functions

format_type(opt, list)

matches_type?(types, value)

merge(same, same)

valid_type?(types)

validate_types(types, field_name, opts, schema)

#  Link to this section Functions 

Link to this function

# format_type(opt, list) [ View Source ](external_link)

Link to this function

# matches_type?(types, value) [ View Source ](external_link)
    
    
    matches_type?(type :: [term](external_link)(), value :: [term](external_link)()) :: [boolean](external_link)()

Link to this function

# merge(same, same) [ View Source ](external_link)
    
    
    merge(left :: [term](external_link)(), right :: [term](external_link)()) :: [term](external_link)()

Link to this function

# valid_type?(types) [ View Source ](external_link)
    
    
    valid_type?([term](external_link)()) :: [boolean](external_link)()

Link to this function

# validate_types(types, field_name, opts, schema) [ View Source ](external_link)
    
    
    validate_types(
      types :: [Keyword.t](external_link)(),
      field_name :: [atom](external_link)(),
      opts :: [Keyword.t](external_link)(),
      schema :: [Ashton.schema](external_link)()
    ) :: [{[atom](external_link)(), [String.t](external_link)()}]
