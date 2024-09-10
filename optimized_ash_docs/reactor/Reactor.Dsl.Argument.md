# Reactor.Dsl.Argument — reactor v0.9.1

Project: reactor v0.9.1

## Table of Contents

- [ __ View Source ](external_link) Reactor.Dsl.Argument (reactor v0.9.1)
- __ Summary
  - Types
  - Functions
- __ Types
- t()
- __ Functions
- element(name, sub_path \\\ [])
  - __ Example
- input(input_name, sub_path \\\ [])
  - __ Example
  - __ Extracting nested values
- result(step_name, sub_path \\\ [])
  - __ Example
  - __ Extracting nested values
- value(value)
  - __ Example

__

Search documentation of reactor __ __

__ Settings

#  [ __ View Source ](external_link) Reactor.Dsl.Argument (reactor v0.9.1)

The struct used to store `argument` DSL entities.

See `Reactor.step.argument`.

#  __ Summary

##  Types

t()

##  Functions

element(name, sub_path \\\ [])

The `element` template helper for the Reactor DSL.

input(input_name, sub_path \\\ [])

The `input` template helper for the Reactor DSL.

result(step_name, sub_path \\\ [])

The `result` template helper for the Reactor DSL.

value(value)

The `value` template helper for the Reactor DSL.

#  __ Types

__ Link to this type

# t()

[ __ View Source ](external_link)
    
    
    @type t() :: %Reactor.Dsl.Argument{
      __identifier__: [any](external_link)(),
      name: [atom](external_link)(),
      source: [Reactor.Template.t](external_link)(),
      transform: nil | ([any](external_link)() -> [any](external_link)()) | {[module](external_link)(), [keyword](external_link)()} | [mfa](external_link)()
    }

#  __ Functions

__ Link to this function

# element(name, sub_path \\\ [])

[ __ View Source ](external_link)
    
    
    @spec element([any](external_link)(), [[any](external_link)()]) :: [Reactor.Template.Element.t](external_link)()

The `element` template helper for the Reactor DSL.

##  __ Example
    
    
    defmodule ExampleReactor do
      use Reactor
    
      input :numbers
    
      map :double_numbers do
        source input(:numbers)
    
        step :double do
          argument :number, element(:double_numbers)
    
          run fn args, _, _ ->
            {:ok, args.number * 2}
          end
        end
    
        return :double
      end
    end

__ Link to this function

# input(input_name, sub_path \\\ [])

[ __ View Source ](external_link)
    
    
    @spec input([atom](external_link)(), [[any](external_link)()]) :: [Reactor.Template.Input.t](external_link)()

The `input` template helper for the Reactor DSL.

##  __ Example
    
    
    defmodule ExampleReactor do
      use Reactor
    
      input :name
    
      step :greet do
        # here: --------↓↓↓↓↓
        argument :name, input(:name)
        run fn
          %{name: nil}, _, _ -> {:ok, "Hello, World!"}
          %{name: name}, _, _ -> {:ok, "Hello, #{name}!"}
        end
      end
    end

##  __ Extracting nested values

You can provide a list of keys to extract from a data structure, similar to [`Kernel.get_in/2`](external_link) with the condition that the input value is either a struct or implements the [`Access`](external_link) protocol.

__ Link to this function

# result(step_name, sub_path \\\ [])

[ __ View Source ](external_link)
    
    
    @spec result([atom](external_link)(), [[any](external_link)()]) :: [Reactor.Template.Result.t](external_link)()

The `result` template helper for the Reactor DSL.

##  __ Example
    
    
    defmodule ExampleReactor do
      use Reactor
    
      step :whom do
        run fn ->
          {:ok, Enum.random(["Marty", "Doc", "Jennifer", "Lorraine", "George", nil])}
        end
      end
    
      step :greet do
        # here: --------↓↓↓↓↓↓
        argument :name, result(:whom)
        run fn
          %{name: nil}, _, _ -> {:ok, "Hello, World!"}
          %{name: name}, _, _ -> {:ok, "Hello, #{name}!"}
        end
      end
    end

##  __ Extracting nested values

You can provide a list of keys to extract from a data structure, similar to [`Kernel.get_in/2`](external_link) with the condition that the result is either a struct or implements the [`Access`](external_link) protocol.

__ Link to this function

# value(value)

[ __ View Source ](external_link)
    
    
    @spec value([any](external_link)()) :: [Reactor.Template.Value.t](external_link)()

The `value` template helper for the Reactor DSL.

##  __ Example
    
    
    defmodule ExampleReactor do
      use Reactor
    
      input :number
    
      step :times_three do
        argument :lhs, input(:number)
        # here: -------↓↓↓↓↓
        argument :rhs, value(3)
    
        run fn args, _, _ ->
          {:ok, args.lhs * args.rhs}
        end
      end
    end
