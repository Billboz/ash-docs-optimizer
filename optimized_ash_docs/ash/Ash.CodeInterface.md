# Ash.CodeInterface — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.CodeInterface (ash v3.4.8)
- __ Summary
  - Functions
- __ Functions
- define_interface(domain, resource, definitions \\\ nil)
- describe_action(resource, action, args)
- describe_calculation(resource, calculation, args)
- trim_double_newlines(str)
- unwrap_calc_interface_args(keys, resource, arguments, function_head? \\\ false)
- without_optional(keys)

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.CodeInterface (ash v3.4.8)

Used to define the functions of a code interface for a resource.

#  __ Summary

##  Functions

define_interface(domain, resource, definitions \\\ nil)

Defines the code interface for a given resource + domain combination in the current module. For example

describe_action(resource, action, args)

describe_calculation(resource, calculation, args)

trim_double_newlines(str)

unwrap_calc_interface_args(keys, resource, arguments, function_head? \\\ false)

without_optional(keys)

#  __ Functions

__ Link to this macro

# define_interface(domain, resource, definitions \\\ nil)

[ __ View Source ](external_link) (macro)

Defines the code interface for a given resource + domain combination in the current module. For example:
    
    
    defmodule MyApp.Accounting do
      require Ash.CodeInterface
    
      Ash.CodeInterface.define_interface(MyApp.Accounting, MyApp.Accounting.Transaction)
      Ash.CodeInterface.define_interface(MyApp.Accounting, MyApp.Accounting.Account)
      Ash.CodeInterface.define_interface(MyApp.Accounting, MyApp.Accounting.Invoice)
    end

__ Link to this function

# describe_action(resource, action, args)

[ __ View Source ](external_link)

__ Link to this function

# describe_calculation(resource, calculation, args)

[ __ View Source ](external_link)

__ Link to this function

# trim_double_newlines(str)

[ __ View Source ](external_link)

__ Link to this function

# unwrap_calc_interface_args(keys, resource, arguments, function_head? \\\ false)

[ __ View Source ](external_link)

__ Link to this function

# without_optional(keys)

[ __ View Source ](external_link)
