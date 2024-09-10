# Reactor.Argument — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Argument (reactor v0.9.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- from_element(name, element_name, transform \\\ nil)
  - __ Example
- from_input(name, input_name, transform \\\ nil)
  - __ Example
- from_result(name, result_name, transform \\\ nil)
  - __ Example
- from_template(name, template, transform \\\ nil)
  - __ Example
- from_value(name, value, transform \\\ nil)
  - __ Example
- has_sub_path(argument)
- has_transform(argument)
- is_argument(argument)
- is_from_element(argument)
- is_from_input(argument)
- is_from_result(argument)
- is_from_value(argument)
- sub_path(argument, sub_path)
  - __ Example

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Argument (reactor v0.9.1)

A step argument.

#  __ Summary

##  Types

t()

##  Functions

from_element(name, element_name, transform \\\ nil)

Build an argument which refers to to an element within a map step with an optional transformation applied.

from_input(name, input_name, transform \\\ nil)

Build an argument which refers to a reactor input with an optional transformation applied.

from_result(name, result_name, transform \\\ nil)

Build an argument which refers to the result of another step with an optional transformation applied.

from_template(name, template, transform \\\ nil)

Build an argument directly from a template.

from_value(name, value, transform \\\ nil)

Build an argument which refers to a statically defined value.

has_sub_path(argument)

Validate that the argument source has a sub_path

has_transform(argument)

Validate that the argument has a transform.

is_argument(argument)

Validate that the argument is an Argument struct.

is_from_element(argument)

Validate that the argument contains an element.

is_from_input(argument)

Validate that the argument refers to a reactor input.

is_from_result(argument)

Validate that the argument refers to a step result.

is_from_value(argument)

Validate that the argument contains a static value.

sub_path(argument, sub_path)

Set a sub-path on the argument.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Argument{
      name: [atom](external_link)(),
      source: [Reactor.Template.t](external_link)(),
      transform: nil | ([any](external_link)() -> [any](external_link)()) | {[module](external_link)(), [keyword](external_link)()} | [mfa](external_link)()
    }

#  __ Functions

__ Link to this function

# from_element(name, element_name, transform \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec from_element([atom](external_link)(), [atom](external_link)(), nil | ([any](external_link)() -> [any](external_link)())) :: t()

Build an argument which refers to to an element within a map step with an optional transformation applied.

##  __ Example
    
    
    iex> Argument.from_element(:argument_name, &Atom.to_string/1)

__ Link to this function

# from_input(name, input_name, transform \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec from_input([atom](external_link)(), [atom](external_link)(), nil | ([any](external_link)() -> [any](external_link)())) :: t()

Build an argument which refers to a reactor input with an optional transformation applied.

##  __ Example
    
    
    iex> Argument.from_input(:argument_name, :input_name, &String.to_integer/1)

__ Link to this function

# from_result(name, result_name, transform \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec from_result([atom](external_link)(), [any](external_link)(), nil | ([any](external_link)() -> [any](external_link)())) :: t()

Build an argument which refers to the result of another step with an optional transformation applied.

##  __ Example
    
    
    iex> Argument.from_result(:argument_name, :step_name, &Atom.to_string/1)

__ Link to this function

# from_template(name, template, transform \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec from_template([atom](external_link)(), [Reactor.Template.t](external_link)(), nil | ([any](external_link)() -> [any](external_link)())) :: t()

Build an argument directly from a template.

##  __ Example
    
    
    iex> Argument.from_template(:argument_name, Reactor.Dsl.Argument.input(:input_name))

__ Link to this function

# from_value(name, value, transform \\\ nil)

[ __ View Source ](external_link)
    
    
    @spec from_value([atom](external_link)(), [any](external_link)(), nil | ([any](external_link)() -> [any](external_link)())) :: t()

Build an argument which refers to a statically defined value.

##  __ Example
    
    
    iex> Argument.from_value(:argument_name, 10)

__ Link to this macro

# has_sub_path(argument)

[ __ View Source ](external_link) (macro)

Validate that the argument source has a sub_path

__ Link to this macro

# has_transform(argument)

[ __ View Source ](external_link) (macro)

Validate that the argument has a transform.

__ Link to this macro

# is_argument(argument)

[ __ View Source ](external_link) (macro)

Validate that the argument is an Argument struct.

__ Link to this macro

# is_from_element(argument)

[ __ View Source ](external_link) (macro)

Validate that the argument contains an element.

__ Link to this macro

# is_from_input(argument)

[ __ View Source ](external_link) (macro)

Validate that the argument refers to a reactor input.

__ Link to this macro

# is_from_result(argument)

[ __ View Source ](external_link) (macro)

Validate that the argument refers to a step result.

__ Link to this macro

# is_from_value(argument)

[ __ View Source ](external_link) (macro)

Validate that the argument contains a static value.

__ Link to this function

# sub_path(argument, sub_path)

[ __ View Source ](external_link)
    
    
    @spec sub_path(t(), [[any](external_link)()]) :: t()

Set a sub-path on the argument.

##  __ Example
    
    
    iex> Argument.from_value(:example, :value)
    ...> |> Argument.sub_path([:nested, :values])
