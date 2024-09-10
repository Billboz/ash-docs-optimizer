# Reactor.Template — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Template (reactor v0.9.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- is_element_template(template)
- is_input_template(template)
- is_result_template(template)
- is_template(template)
- is_value_template(template)
- type()

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Template (reactor v0.9.1)

Templates used to refer to some sort of computed value.

#  __ Summary

##  Types

t()

##  Functions

is_element_template(template)

A guard for element templates

is_input_template(template)

A guard for input templates

is_result_template(template)

A guard for result templates

is_template(template)

A guard to detect all template types

is_value_template(template)

A guard for value templates

type()

The type for use in option schemas

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() ::
      [Reactor.Template.Element.t](external_link)()
      | [Reactor.Template.Input.t](external_link)()
      | [Reactor.Template.Result.t](external_link)()
      | [Reactor.Template.Value.t](external_link)()

#  __ Functions

__ Link to this macro

# is_element_template(template)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_element_template([any](external_link)()) :: [Macro.output](external_link)()

A guard for element templates

__ Link to this macro

# is_input_template(template)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_input_template([any](external_link)()) :: [Macro.output](external_link)()

A guard for input templates

__ Link to this macro

# is_result_template(template)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_result_template([any](external_link)()) :: [Macro.output](external_link)()

A guard for result templates

__ Link to this macro

# is_template(template)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_template([any](external_link)()) :: [Macro.output](external_link)()

A guard to detect all template types

__ Link to this macro

# is_value_template(template)

[ __ View Source ](external_link) (macro)
    
    
    @spec is_value_template([any](external_link)()) :: [Macro.output](external_link)()

A guard for value templates

__ Link to this function

# type()

[ __ View Source ](external_link)
    
    
    @spec type() :: [Spark.Options.type](external_link)()

The type for use in option schemas
